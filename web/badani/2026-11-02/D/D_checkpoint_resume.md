# D_checkpoint_resume — balík D_KOSEK_TRPELKA (resume po výpadku)

Čas checkpointu: 2026-11-02 17:39 CET (Europe/Prague). Toto je ověřený stav prostředí po obnovení stránky, ne vzpomínka ani plán.

## 1. Vstupní příloha (ověřeno nyní)
- `upload/D_KOSEK_TRPELKA_VSTUP.zip` — 4 166 992 B, SHA256 `1c6f92f6cca962d885e493b974319ab921795ec36c5e906012b60e1a947a333f` → **sedí** na údaj v aktuálním pokynu.
- Obsah ZIPu (4 soubory) je byte-identický (`cmp`) se zachovanými pracovními kopiemi v `work/input/`:
  - `F_tvrdonice_3443_sn49_full2.png` — 4 194 307 B, 2147×1747 px
  - `MANIFEST.json`, `NEZKONTROLOVANY_POPIS_05.txt`, `ZADANI.txt`

## 2. Zachované pracovní soubory (existují, ověřeno velikostí a datem)
- `work/input/` — celý vstup (viz výše).
- `work/crops/` — 10 výřezů z obrazu 2147×1747 (pouhé ořezy/zoom, žádné doostřování):
  A1 hlavička+zápis 53 levá strana, A2 ženich, A3 nevěsta, A4 svědci, A5 hlavička levá, B1 věkové sloupce, B2 rodiče ženicha, B3 rodiče nevěsty, B4 věky (final), full_preview.
- `scripts/crops_d1.py` — souřadnice výřezů A1–A5 (box v obrazu je dokumentován v kódu).
- `scripts/crops_d1b.py` — souřadnice výřezů B1–B3; **výřez B4_veky_final.png v kódu není** (vznikl dodatečným během, jeho přesný box nedokumentován → v přepisu budu používat B1 a kontrolovat přes skriptově doložené výřezy).

## 3. Co CHYBÍ (bylo v `download/` minulého běhu, po recyklaci prostředí zde NENÍ)
- `05_kosek_1919.md`, `05_kosek_1919.json`, `05_sn49_zapis53_vyrez.png`, `05_checkpoint_0/1/2.md`, případné dřívější ZIPy.
- Tyto soubory nelze obnovit 1:1 — **jde je znovu vytvořit** ze skutečně zachovaného vstupu (obraz, výřezy) a z textu `NEZKONTROLOVANY_POPIS_05.txt`, který je jen nekontrolovaným popisem jiného modelu, ne pramenem. Tohoto si všímat nebudu jako „ztráty dat“ — vstupní primární obraz je neporušený, takže D1–D3 jsou plně proveditelné.

## 4. Hotové kroky (zachycené, krok za krokem)
1. Ověření ZIPu (SHA256) a obrazu 2147×1747 — **hotovo** (potvrzeno nyní znovu).
2. Čtení hlavičky: Anno 1919, tomus V., pag. 94/95, ručně psané místo „Kostice[?]“ — podle popisu 05; přepíšu z vlastního čtení v D1.
3. Čtení zápisu č. 53, str. 94: ženich „Cyrill Kosek“ (čteno zřetelně), nevěsta „Alžběta Trp…[?]ková“ (příjmení nejisté), 25. června[?]; svědci a rodiče s [?].
4. Katalog MZA (podle popisu 05, **ještě mým kódem neověřeno v tomto běhu**): kniha 3443 → detail/258 (Tvrdonice, římskokat., oddaní 1909–1925, obec Kostice, svazek IV, 95 snímků; snímek 49 = …B09549-00490.jp2); kniha 3454 → detail/12042 (svazek rejstříků: index zemřelých sn. 2–63, index oddaných sn. 64–103, index narozených sn. 104–172; narození 1784–1912, oddaní 1790–1925, zemřelí 1790–1946).
5. Překážka zdokumentovaná v 05: raster MZA za ALTCHA bránou (IIIF/asset 404 bez řešení challenge) — bypass proveden nebude (zákaz zadání). Srovnání PNG↔snímek 49 je tedy obsahové+katalogové, nikoli pixelové.

## 5. Rozpracovaný krok, kde běh skončil
„Teď přečtu bloky rodičů obou snoubenců.“ Výřezy B2 (rodiče ženicha) a B3 (rodiče nevěsty) jsou vytvořené a zachované; jejich čtení do přepisu **není dokočeno** — tohoto navazuji.

## 6. Nejistoty (řídí se pokynem: [?] ponechat, necyklovat výřezy, hledat nezávislý pramen)
- Nevesta: Alžběta vs. Matilde; příjmení Trpětka vs. Trpělková — **nevyřešeno**.
- Zlomky čísel u věků (např. 28 1/2 vs. jiné čtení) — **nevyřešeno**.
- Žádné nové jméno, věk, rodné příjmení ani rodinná vazba nebylo koordinátorem věcně potvrzeno.

## 7. Zdroje (pouze skutečně otevřené/ověřené)
- Vstupní obraz + ZIP (místní, SHA256 ověřeno).
- Katalog MZA ActaPublica: https://www.mza.cz/actapublica/ (detail/258, detail/12042) — v tomto běhu teprve ověřím; v 05 tvrzeno jako otevřené.
- https://www.mza.cz/actapublica/matrika/hledani — oficiální vyhledávání dle čísla knihy a snímku.

## 8. Jeden další krok
Vlastní neutrální čtení zápisu č. 53 (full_preview + výřezy A2 ženich, A3 nevěsta, B2 rodiče ženicha, B3 rodiče nevěsty, B1/B4 věky) do D1 přepisu s [?] u nejistých polí; poté katalogové ověření 3443/3454 v tomto běhu.
