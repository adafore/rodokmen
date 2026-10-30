# Rodokmen Forejtníkových – projekt 2. kola (glm_rodokmen_kolo2)

Soukromý rodinný archiv: rodokmen Forejtníkových z Klobouk u Brna podle matrik MZA Brno (Acta Publica).

## Rychlý start
- **Web:** otevřete `web/index.html` dvojklikem (funguje bez internetu a bez serveru, prostý HTML/CSS/JS).
- Přenositelná verze pro příbuzné: `rodokmen-web.zip` (po rozbalení dvojklik na `index.html`).
- Co je nového a co zůstává otevřené: `SOUHRN_KOLO2.md`. Co bylo jak ověřeno: `OVERENI.md`.

## Struktura projektu
- `web/` – hotový web (index.html, css/, js/, img/dukazy/ optimalizované obrázky)
- `data/` – zdrojová data (rodokmen_data.json; rodokmen_data_verejny.json = omezený veřejný export;
  zaznamy_kolo1.json + osoby_kolo1.csv = převzaté vstupy 1. kola)
- `dukazy/` – všechny důkazové snímky a výřezy v plné kvalitě (1. i 2. kolo)
- `nahledy/` – screenshoty testů a finální náhledy webu
- `scripts/` – nástroje: `mza_tiles.py` (stahování dlaždic MZA, převzato z 1. kola), `build_web.py`
  (generátor data.js + obrázků webu ze zdrojových dat), `vlm.py` (neutrální čtení obrazu), `export_verejny.py`
  (veřejný export omezující údaje žijících), `fetch_r2785_right.sh` (pomocné stahování)
- `DENIK_KOLO2.md` – úplný deník bádání 2. kola včetně překážek a negativních výsledků
- `STAV.md` / `POKRACOVAT.md` – stav a postup obnovení; `OVERENI.md` – provedené kontroly;
  `SOUHRN_KOLO2.md` – shrnutí; `sporna_cteni.json` – sporná čtení pro kontrolního agenta

## Jak přegenerovat web po změně dat
`python3 scripts/build_web.py` (načte data/rodokmen_data.json, optimalizuje obrázky do web/img/dukazy/ a vygeneruje web/js/data.js).
Web pak stačí znovu otevřít v prohlížeči – žádný build systém není třeba.

## Soukromí
Web je určen k místnímu použití. Nic nebylo zveřejněno. Před případným budoucím zveřejněním použijte
`python3 scripts/export_verejny.py` (viz SOUHRN_KOLO2.md); žádnou osobu neprohlašujte za zemřelou bez dokladu.


## Nasazeni

Soukromy repozitar: https://github.com/adafore/rodokmen

Rodinny web je nasazen na Synology v domaci siti. Podrobnosti v [synology/README.md](synology/README.md). Github Pages nejsou zapnute.
