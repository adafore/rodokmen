# Synology

Web bezi jako samostatny kontejner `rodokmen` na DS220+.

- Adresa v domaci siti: http://192.168.1.90:8092/
- Obsah: /volume1/docker/rodokmen/html
- Nginx konfigurace: /volume1/docker/rodokmen/default.conf
- Heslo je pouze na NAS v /volume1/docker/rodokmen/htpasswd a v soukromem pristupovem souboru uzivatele. Neni soucasti repozitare.
- Kontejner ma restart policy unless-stopped a obsah je pripojen jen pro cteni.
- Pristup vyzaduje heslo a je omezen na domaci sit 192.168.1.0/24. Nebylo nastaveno presmerovani portu do internetu.

Pro aktualizaci zmen obsah slozky html za nove sestavenou slozku web. Nenahravej sem pracovni data, skripty ani plne badatelske archivy. Stavajici sluzby NAS nejsou soucasti teto aplikace.
