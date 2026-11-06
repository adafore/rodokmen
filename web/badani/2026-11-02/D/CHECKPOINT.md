# CHECKPOINT — D_KOSEK_TRPELKA (2026-11-02 ~19:40 CET) — STAV: D1+D2+D3 odevzdány v dostupné části

## Hotovo
- [x] Resume ověření prostředí → `D_checkpoint_resume.md` + `.json` (ZIP SHA256 sedí: 1c6f92f6…a333f; vstupy byte-identické; obraz 23c2122f…28e8 = MANIFEST)
- [x] **D1**: neutrální přepis zápisu č. 53 (pag. 94, Anno 1919, tomus V.) s [?]; ženich **Cyrill Kosek** (zřetelné), syn Josefa Koseka chalupníka (Tvrdonice) × Františky roz. Š…[?]; nevěsta **Alžběta Trpět/ětková[?]**, dělnice, Kostice, dcera Josefa Trpětky chalupníka × Julany roz. (Josefa) Prokopa[?]; věky „2[8|9] 1/2[?]“ × „2[2|3] 1/2[?]“; rotované „Nar. 24. …“ [nečitelný měsíc/rok] — limit 2 cílených výřezů vyčerpán (C1/C2)
- [x] **D1 katalog** (vlastní ověření WebFetch): 3443=detail/258 (oddaní 1909–1925, obec Kostice, sv. IV, 95 sn.) ✓; 3454=detail/12042 (index zemřelých sn.2–63, oddaných sn.64–103, narozených sn.104–172; narození 1784–1912) ✓ → sn. 49 knihy 3454 = index zemřelých, NENÍ rejstřík oddaných
- [x] **D2**: plán + varianty jmen + kriteria totožnosti; katalogové rámce ověřeny, signatury dalších knih NEověřeny (blokáce katalogu)
- [x] **D3**: dostupnost 1924 NEpotvrzena/NEvyloučena; seznam 6 dokladů pro spojení s Emilií; varování před záměnou s párem Forejtník×Emílie
- [x] ZIPy: D1 (7,8 MB), D2, D3 — integrita `unzip -t` OK

## Překážky (bez obcházení)
- raster/IIIF MZA za ALTCHA → žádná nová matriční čtení (rejstřík K/T 1919, narozené knihy)
- katalog hledání = POST/JS; curl 2× timeout; `matrika/obec/15` 404 ×2; `matrika/puvodce` 404; `mza.cz/archivni-databaze/` 404
- WebSearch/WebFetch kvóta v závěru běhu → diecézní archiv (archiv.biskupstvi.cz) nezjištěn

## Nejisté ([?] ponechány)
- příjmení nevěsty (Trpětka vs Trpělková), matky ženicha („Štrukáni…“), věkové zlomky, rotované „Nar. …“, křestní jména svědků, „oba Kab…“, oddávající „Jan Scheyba[l]“

## Další krok
1. V katalogu Acta Publica (manuálně, s formulářem „podle obce/číslo knihy“) zjistit signaturu narozené matriky farnosti Tvrdonice pro roky 1913+ (pro D3) a narozených/oddacích knih pro 1884–1912 (pro D2) → pak hledat rejstříkové řádky: Kosek 1888–1892, Trpět(ě)ková 1893–1898, sňatky rodičů do 1908.
