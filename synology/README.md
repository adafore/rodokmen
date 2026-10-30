# Synology: domácí síť a internetový přístup s rodinným heslem

Aktuální nastavení z 30. 10. 2026 nahrazuje předchozí režim pouze s Tailscale.

- Z libovolného prohlížeče bez Tailscale: https://rodokmen.tail2d77c0.ts.net/
- HTTPS adresa vyžaduje rodinné přihlášení. Kontrola platí pro HTML, data i všechny obrázky. Přihlašovací údaje nejsou v repozitáři.
- Doma: http://192.168.1.90:8092/ zůstává přístupné síti 192.168.1.0/24 bez dalšího hesla.
- Web běží na Synology DS220+, DSM 7.1. Počítač a Codex nemusí být zapnuté.

Obsah je v `/volume1/docker/rodokmen/html`. Místní a internetový server čtou stejnou složku pouze pro čtení. Pro aktualizaci se mění jen její obsah.

## Kontejnery

`rodokmen` je místní nginx, host network, pouze 192.168.1.90:8092, konfigurace `default.conf` s omezením místní sítě.

`rodokmen-public` je nginx pro internetový vstup. Používá vlastní síťový prostor Dockeru bez publikovaných hostitelských portů. Naslouchá na 127.0.0.1:18080 uvnitř tohoto prostoru a podle `public.conf` vyžaduje HTTP Basic autentizaci pro celý web. Otisk hesla je pouze na NAS v `/volume1/docker/rodokmen/public.htpasswd`, do kontejneru připojený pro čtení. Hlavičky zakazují indexování a omezují cachování na soukromou cache.

`rodokmen-tailscale` používá userspace režim a síťový prostor kontejneru `rodokmen-public`. Nemá mount obsahu webu. Tailscale Funnel na HTTPS portu 443 přeposílá všechny požadavky pouze na `http://127.0.0.1:18080`, tedy na server s povinným heslem. Přes tento vstup nejsou zpřístupněné DSM, Immich ani jiné služby NAS.

Všechny tři kontejnery mají `restart: unless-stopped`. Přihlašovací stav Tailscale zůstává v `/volume1/docker/rodokmen/tailscale-state`, adresář má práva 700 a nesmí se kopírovat do GitHubu ani předávacích ZIPů.

## Obnovení a kontrola

`docker-compose.yml` zachycuje aktuální topologii. Před startem musí existovat HTML, obě nginx konfigurace a soubor s otiskem rodinného hesla.

Při prvním připojení zařízení do účtu:

```sh
docker exec rodokmen-tailscale tailscale --socket=/tmp/tailscaled.sock up --hostname=rodokmen --accept-dns=false --accept-routes=false
```

Po ověření, že autentizační server vrací bez hesla 401 a s heslem správné soubory:

```sh
docker exec rodokmen-tailscale tailscale --socket=/tmp/tailscaled.sock funnel --bg --yes http://127.0.0.1:18080
docker exec rodokmen-tailscale tailscale --socket=/tmp/tailscaled.sock serve status --json
```

V konfiguraci musí být pro `/` jen `Proxy` na uvedený server s heslem. Nepřepínejte Funnel na přímé podávání složky s HTML: tím by se vynechala autentizace.

Při restartu nebo novém vytvoření kontejneru `rodokmen-public` následně restartujte `rodokmen-tailscale`, aby znovu připojil jeho síťový prostor. Běžná aktualizace souborů webu restart nevyžaduje. Restart samotného Tailscale zachovává Funnel i heslem chráněný vstup.

Pro návrat pouze k soukromému Tailscale přístupu s toutéž ochranou heslem:

```sh
docker exec rodokmen-tailscale tailscale --socket=/tmp/tailscaled.sock serve --bg --yes http://127.0.0.1:18080
```

Přesměrování portů na routeru, exit node ani sdílení celé domácí sítě nejsou nastavené. GitHub zůstává soukromý, změny se z něj nenasazují automaticky.

GLM nyní pracuje se starším předávacím balíčkem. Při přebírání jeho výstupu zachovejte tuto konfiguraci hostingu a nepřepisujte ji jeho starými soubory `synology/`. Nasazujte nový obsah `web/` do složky HTML.
