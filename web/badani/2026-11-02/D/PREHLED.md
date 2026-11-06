# PREHLED — balík D_KOSEK_TRPELKA (větev Kostice/Tvrdonice, Kosek × Trpělková)

Stav: 2026-11-02, Europe/Prague. Průběžný běh po obnově (checkpoint resume vydán). Odevzdány D1–D3 v dostupné části; žádná nová matriční čtení z rasteru (ALTCHA), žádné automatické spojení s Emilií Koskovou (1924). Vše níže jsou **návrhy ke kontrole**, ne zápisy do rodokmenu.

## Jasně odlišené vrstvy výsledků
| vrstva | co |
|---|---|
| **Nově získané originální prameny** | žádné (raster MZA nedostupný; jediným primárním obrazem zůstává původně přiložený PNG) |
| **Staré obrazy znovu čtené (tento běh)** | zápis č. 53, pag. 94/95, Anno 1919, tomus V., kniha 3443 — plný přepis s [?] (D1) |
| **Ověřená katalogová metadata (tento běh, WebFetch)** | kniha 3443 = detail/258 (oddaní 1909–1925, obec Kostice, sv. IV, 95 sn., čeština); kniha 3454 = detail/12042 (svazek rejstříků: zemřelí sn. 2–63, oddaní sn. 64–103, narození sn. 104–172; narození 1784–1912, oddaní 1790–1925, zemřelí 1790–1946; něm./čes.) |
| **Tvrzení popisu 05 (nerecenzovaná)** | adresa snímku 49 knihy 3443 (…B09549-00490.jp2) — v tomto běhu NEověřeno; převzato jen jako stopa |
| **Hypotézy (candidate)** | H1 sňatek 1919 = rodiče Emilie; H2 příjmení Trpětka vs Trpělková; H3 čtení „Štrukáni…“ |

## D1 — zápis č. 53 (přepis hotov)
- Ženich: **Cyrill Kosek** (zřetelné), délník, příslušný Tvrdonice („čís. ma[t/x] v Tvrdonicích a dom čís. [?]“); věk „2[8|9] 1/2[?]“; rotovaný údaj „Nar. 24. [měsíc][?] 189[0|1][?]“.
- Rodiče ženicha: **Josef Kosek, chalupník v Tvrdonicích** × **Františka** „roz. Josefa Štrukáni[x/k][?]“, chalupnice v Tvrdonicích — příjmení matky NEJISTÉ.
- Nevěsta: **Alžběta Trpětka[?]/Trpětková[?]** (bez „l“!), dělnice, Kostice; věk „2[2|3] 1/2[?]“; rotovaný údaj „Nar. 24. [měsíc][?] 189[5|6|7][?]“.
- Rodiče nevěsty: **Josef Trpětek/Trpětka[?], chalupník v Kosticích** × **Julana** „roz. Josefa Prokopa[?], chalupníka v Kosticích“.
- Svědci: Jaroslav[?] František (dělník, Tvrdonice č. 180[?]); Rudolf Jakub[?]/Jakob[?] (dělník, Kostice č. 237[?]); dále „oba Kab[l]áči[?]“.
- Oddávající: Jan Scheyba[l][?], farář[?]. Datum: 25. června[?] 1919.
- Katalog: snímek 49 knihy **3454 = index zemřelých** (ne rejstřík oddaných) — potvrzeno; hledání řádku K/T 1919 patří do sn. 64–103 knihy 3454 (ALTCHA-blokace, nečitelné v tomto běhu).

## D2 — narození snoubenců a sňatky rodičů (plán, ne čtení)
- Vyšetřované intervaly (jen z věku, NIKOLI data narození): ženich ~1888–1892, nevěsta ~1893–1898.
- Ověřené rámce: index narozených 1784–1912 (kniha 3454, sn. 104–172) pokrývá oba intervaly — čtení zablokováno ALTCHA. Sňatky rodičů (do 1908) jsou v dřívějších oddacích svazcích farnosti — signatury v tomto běhu NEověřeny (katalogová selekce blokována; žádné hádání čísel).
- Plán + varianty (Kosek/Hosek, Cyrill/Cyril/Kyrill; Trpětka/Trpětková/Trpělková/Trpelka) + kriteria totožnosti: `D2_KROKY_narozeni_a_rodice.md`.

## D3 — Emilie Kosková (10. 5. 1924, Kostice)
- Dostupnost narozeného záznamu 1924 **nepotvrzena a nevyloučena**: kniha 3443 je oddací (nerelevantní), konec indexu 3454 (1912) nedokazuje nic o 1924. Signatura narozené matriky 1913+ NEověřena (blokáce katalogu).
- Záznam je v 2026 starší 100 let — ochranná lhůta stářím nepřekáží; rozhoduje zveřejnění/uložení (MZA / FÚ Kostice / diecézní archiv).
- Seznam 6 dokladů k prokázání spojení je připraven (primární = narozený záznam 1924 s údaji rodičů); explicitně: NEZAMĚŇOVAT s pozdějším sňatkem Jaroslava Forejtníka (nar. 1921) × Emílie (nar. 1924). Nic se nepodepisuje/nepodává.

## Překážky běhu (zdokumentované, bez obcházení)
1. Raster/IIIF MZA za ALTCHA (pixelová identifikace snímku, rejstříky, narozené knihy — nečitelné).
2. Katalogové hledání POST/JS; curl 2× timeout; `matrika/obec/15` 404 (2 varianty); `matrika/puvodce` 404; `archivni-databaze` 404.
3. Kvóta web nástrojů v závěru → `archiv.biskupstvi.cz` (inventáře FÚ) nezjištěn.

## Soubory
D1: `D1_PREPIS_zapis53_1919.md/.json`, `D1_DENIK.md`, `D1_obrazy/` (A1–A4, C1–C2, kopie vstupu), `D_KOSEK_TRPELKA_D1_VYSLEDKY.zip`
D2: `D2_KROKY_narozeni_a_rodice.md/.json`, `D23_DENIK.md`, `D_KOSEK_TRPELKA_D2_VYSLEDKY.zip`
D3: `D3_NAVAZANOST_EMILIE_1924.md/.json`, `D_KOSEK_TRPELKA_D3_VYSLEDKY.zip`
Společné: `PRAMENY.csv`, `CHECKPOINT.md`, `D_checkpoint_resume.md/.json`, `PREPISY.md`, `NEJISTOTY.md`, `PROHLEDANO.md`, `POKRACOVAT.md`, `MANIFEST.json`, finální ZIP `D_KOSEK_TRPELKA_VYSLEDKY.zip`
