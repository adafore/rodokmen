# Synology: domácí síť a Tailscale

- NAS: Synology DS220+, DSM 7.1, 192.168.1.90.
- Doma: http://192.168.1.90:8092/
- Přes Tailscale: https://rodokmen.tail2d77c0.ts.net/
- Vzdálený klient musí mít zapnutý Tailscale a povolený přístup v síti majitele.
- Samostatné přihlášení k webu bylo na výslovné přání majitele 30. 10. 2026 odstraněno. Doma je web dostupný zařízením v rozsahu 192.168.1.0/24.

Obsah je v `/volume1/docker/rodokmen/html`. Oba servery čtou stejnou složku, takže aktualizace webu platí pro obě adresy.

Kontejner `rodokmen` používá nginx, síť host a `/volume1/docker/rodokmen/default.conf`. Nginx naslouchá jen na 192.168.1.90:8092 a kontroluje domácí rozsah adres. Síť host zachovává IP klienta; starší Docker v tomto DSM při mapování portů adresu nahrazoval branou.

Kontejner `rodokmen-tailscale` používá oficiální obraz Tailscale 1.104.4 v userspace režimu v samostatné síti Dockeru, bez publikovaných portů, host network, TUN a dodatečných capabilities. Tailscale Serve podává pouze `/site`, kam je složka HTML připojená jen pro čtení. Tímto připojením nejsou zpřístupněné DSM ani jiné aplikace NAS.

Oba kontejnery mají `restart: unless-stopped`. Stav Tailscale je pouze v `/volume1/docker/rodokmen/tailscale-state`, s právy 700 na adresáři. Obsahuje přihlašovací stav zařízení a nepatří do repozitáře ani předávacích ZIPů.

Konfiguraci zachycuje `docker-compose.yml`. Při prvním nasazení je po startu kontejneru potřeba jednorázové připojení do účtu:

```sh
docker exec rodokmen-tailscale tailscale --socket=/tmp/tailscaled.sock up --hostname=rodokmen --accept-dns=false --accept-routes=false
docker exec rodokmen-tailscale tailscale --socket=/tmp/tailscaled.sock serve --bg /site
```

Přihlášení se dokončuje přes jednorázový odkaz Tailscale. Auth klíč do Compose nepatří. Serve s `--bg` se ukládá do trvalého stavu a obnovuje po restartu. Ověření:

```sh
docker exec rodokmen-tailscale tailscale --socket=/tmp/tailscaled.sock status
docker exec rodokmen-tailscale tailscale --socket=/tmp/tailscaled.sock serve status --json
```

Funnel není povolený. Nebylo nastavené přesměrování portů do internetu, sdílení domácí sítě ani exit node. Přístup zajišťuje Tailscale a služba zůstává soukromá. Existující Immich a ovládání zapnutí PC nejsou součástí tohoto nasazení.

Změna v GitHubu se nenasazuje automaticky. Pro aktualizaci nahraďte obsah `html` novým obsahem `web`; pracovní data, skripty, stav Tailscale a badatelské archivy do ní nepatří.
