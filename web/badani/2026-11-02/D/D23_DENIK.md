# Deník D2/D3 (2026-11-02, dopolední běh pokračování)

## ~18:35–18:55 — D2: katalogová selekce knih
- Cíl: najít signatury narozených knih farnosti (~1888–1898) a dřívějších oddacích svazků (rodiče, do 1908).
- WebFetch `matrika/puvodce` → 404 (JS). WebSearch na přímé katalogové odkazy Kostice/Tvrdonice → žádné doložitelné signatury (jen fóra bez platných odkazů, aktuality MZA bez signatur).
- WebFetch `mza.cz/archivni-databaze/` → 404; menu mza.cz neexponuje href („Archiv online“, „ARchiv ONline“, „Archivní fondy a sbírky“ — bez URL v DOM čtení WebFetch).
- Rozhodnutí: NEHÁDAT signatury (zákaz cyklů odhadovaných URL). D2 = plán + ověřené rámce (3443 oddaní 1909–1925; 3454 indexy) + matice variant a kriteria totožnosti.
- Výstup: D2_KROKY_narozeni_a_rodice.md + .json.

## ~19:00–19:20 — D3: dostupnost narozené 1924
- Katalogově doloženo: 3443 je oddací (nerelevantní pro 1924 narozené); 3454 index narozených sahá jen do 1912 → nedokazující.
- Stav: dostupnost záznamu Emilie 1924 NEpotvrzena NEvyloučena; chybí katalogová identifikace narozené matriky 1913+.
- Lhůty: záznam je v r. 2026 starší 100 let → stáří nepřekáží; rozhoduje zveřejnění/uložení (MZA vs farnost vs diecézní archiv).
- WebSearch „archiv.biskupstvi.cz Tvrdonice/Kostice inventar“ → kvóta nástrojů vyčerpána před doložením odkazu; pokus o 2 doložené varianty URL (inventar-fu-tvrdonice, inventar-fu-kostice) zablokován kvótou — ponecháno jako krok.
- Výstup: D3_NAVAZANOST_EMILIE_1924.md + .json (+ PRAMENY.csv rozšířeno).

## Závěr bloku
D2/D3 hotové v režimu „dostupná část“: plány + katalogové rámce + dokumentované překážky. Žádná nová matriční čtení (raster ALTCHA), žádné spojení s Emilií, vše candidate.
