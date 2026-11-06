# D1 — Badatelský deník (2026-11-02, Europe/Prague)

Balík D_KOSEK_TRPELKA. Rezume běh pokračoval po výpadku; stav prostředí ověřen, checkpoint resume vydán (D_checkpoint_resume.md/.json).

## 17:39–17:55 — Ověření stavu
- ZIP `upload/D_KOSEK_TRPELKA_VSTUP.zip` (4 166 992 B) SHA256 = 1c6f92f6…a333f → **sedí** na údaj v pokynu.
- Všechny 4 soubory ZIPu byte-identické se zachovanými kopiemi v `work/input/` (`cmp`).
- Vstupní obraz SHA256 = 23c2122f…28e8 = údaj MANIFEST.json ✓.
- Zachovány výřezy A1–A5, B1–B4 + skripty crops_d1*.py; chybí dřívější výstupy v download/ (05_*) — označeno za neobnovitelné 1:1, znovuvytvořitelné ze vstupu.
- Vydáno: D_checkpoint_resume.md + .json.

## 17:56–18:10 — Vlastní čtení zápisu č. 53
- full_preview → hlavičky: Knihа oddaných/Trauungsbuch, Anno 1919, tomus V., pag. 94/95, ručně „Kostice[?]“.
- A2 (žénich): „Cyrill Kosek“ zřetelné; délník; čís. ma[t/x] v Tvrdonicích; syn Josefa Koseka, chalupníka v Tvrdonicích; „a Františky roz. Jo-sefa Štrukáni[x/k][?], chalupnice v Tvrdonicích“ — příjmení matky NEJISTÉ.
- A3 (nevěsta): „Alžběta Trpětka[?]/Trpětková[?], dělnice, v Kosticích, tuto příslušnice, dcera Josefa Trpětky, chalupníka v Kosticích a Julany roz. Josefa Prokopa[?], chalupníka v Kosticích)“.
- B2/B3 (rodiče): potvrzení formulací; u obou matek konvence „roz. [jméno otce] [příjmení]“ → matčin otec: Josef Š…[?] / Josef Prokop[?].
- A4 (svědci): Jaroslav[?] František (Tvrdonice č. 180[?]); Rudolf Jakub[?]/Jakob[?] (Kostice č. 237[?]); „oba Kab[l]áči[?]“.
- Sporná místa (rotované „Nar. …“): vytvořeny POUZE 2 cílené výřezy C1/C2 (skript crops_d1c.py, boxy doloženy) — limit vyčerpán; měsíc/ročník zůstávají [nečitelné]/[?]. Žádné další cyklení.
- Věky: ženich „2[8|9] 1/2[?]“, nevěsta „2[2|3] 1/2[?]“; tužkou „32[?]“/„22[?]“ — výklad nejasný.
- Rozpory proti popisu 05: (1) nevěsta — moje čtení „Alžběta“, „Matilde“ NEPOTVRZENO ani NEVYLOUČENO (popis 05 četl „Alžběta“, koordinátor zmiňuje „Matilde“ jako rozpor — u mne jde číst jen „Alžběta“; ponechávám [?]); (2) „Trpětka/Trpělková“ — moje čtení bez „l“; (3) zlomky věku — [?].

## 18:11–18:25 — Katalog MZA (vlastní ověření)
- WebFetch detail/258: kniha 3443, svazek IV, Tvrdonice ř.k., oddaní 1909–1925, obec Kostice (Kostitz) okr. Břeclav, 95 snímků, čeština, vazba polokožená; pozn. o původci: „Brněnské biskupství děk. Podivín č. 12 R. 1938 farnost tvoří: Tvrdonice, Kostice.“ → sedí se stopou 05.
- WebFetch detail/12042: kniha 3454, Tvrdonice ř.k., obec Kostice; narození 1784–1912, oddaní 1790–1925, zemřelí 1790–1946; index zemřelých sn. 2–63, index oddaných sn. 64–103, index narozených sn. 104–172; jazyk něm./čes. → snímek 49 knihy 3454 = **index zemřelých** (ne oddaných) — potvrzeno.
- Překážky: hledání katalogu neprojíhá přes GET (POST/JS); curl 2× timeout (40 s/90 s); katalogový odkaz `matrika/obec/15` 404 (2 varianty). WebSearch na přímé katalogové odkazy knih Kostice nic doložitelného nepřinesl (fóra/aktuality MZA bez konkrétních signatur).
- Důsledek: řádek K/T 1919 v indexu oddaných (3454 sn. 64–103) v tomto běhu nečitelný — překážka zdokumentována, žádný bypass.

## Výstup D1 (18:30)
- D1_PREPIS_zapis53_1919.md + .json (přepis s vrstvami a–e, [?] ponechány)
- PRAMENY.csv (v1), D1_DENIK.md, D1_CHECKPOINT.md
- D1_obrazy/: A1–A4, C1, C2 + kopie vstupního obrazu (vše se SHA256)
- D_KOSEK_TRPELKA_D1_VYSLEDKY.zip (jen výsledky D1, <45 MB)
