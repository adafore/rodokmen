# PROHLEDANO — negativní rozsahy a hledané/nehledané cesty (2026-11-02)

## 1. Co bylo SKUTEČNĚ prohlédnuto (s rozsahy)
- Vstupní obraz `F_tvrdonice_3443_sn49_full2.png`: celostní náhled + výřezy A1–A5, B1–B3 (boxy doložené), B4 (bez boxu — orientace), C1/C2 (jediné 2 cílené na sporná místa). Přepsáno: zápis č. 53 kompletně (ženich, nevěsta, rodiče, svědci, poznámky, úzké sloupce).
- Kontext strany: zápisy 52 (stopy nahoře), 54 (8. července[?], Ludvik Rab[e]šic[?]…), 55–56 (pravá strana pag. 95) — pouze okrajově pro orientaci, NEpřepsány (mimo zadání D1).
- Katalog MZA Acta Publica (WebFetch, GET):
  - `matrika/detail/258` — kniha 3443: přečtena celá karta (typ, roky, obec, počet snímků, vazba, jazyk, poznámka o původci).
  - `matrika/detail/12042` — kniha 3454: přečtena karta (tři typy rozsahů + rozdělení snímků indexů).
  - `matrika/hledani` — přečtena struktura formulářů (4 formuláře; GET neprojíhá).
  - `matrika/hledani?typ=obec&mode=find&obec=Kostice` — bez výsledků (formulář POST/JS).
- WebSearch (3+3+2 dotazy): přímé katalogové odkazy Kostice/Tvrdonice — žádné doložitelné signatury; jen fóra bez platných odkazů a aktuality MZA bez signatur; „matriční rozcestník“ (digi.ceskearchivy.cz) — bez doporučení pro Kostice v tomto běhu.

## 2. Co NELZE prohlédnout (blokace, zdokumentované)
- Raster/snímky MZA (viewer i IIIF asset) — ALTCHA; bypass neproveden. Tím nedostupné: rejstřík oddaných K/T 1919 (3454, sn. 64–103), rejstřík narozených, veškeré nové matriční čtení.
- Katalogová selekce podle obce/původce — POST/JS (curl 2× timeout; obec/15 404 ×2; puvodce 404) → signatury narozených knih 1884–1912/1913+ a oddacích do 1908 NEZNÁMÉ.
- `mza.cz/archivni-databaze/` 404; menu mza.cz neexponuje href pro „Archiv online/ARchiv ONline“.
- `archiv.biskupstvi.cz` — kvóta web nástrojů vyčerpána před ověřením inventářů FÚ Tvrdonice/Kostice (2 plánované varianty URL nevykonány).

## 3. Co bylo ÚMYSLNĚ NEHLEDÁNO (zadání)
- soukromé údaje žijících osob; sňatek Jaroslava Forejtníka (nar. 1921) × Emílie (nar. 1924) — jen jako varování před záměnou, ne hledán;
- ostatní větve balíku (Dobrovolné, Forejtník/Vystoupil, Veselý/Halm) — nepatří do tohoto balíku;
- žádné placené služby, žádné registrace.

## 4. Negativní závěry (a jejich limity)
- „Rejstřík oddaných není na snímku 49 knihy 3454“ — potvrzeno katalogem (sn. 49 je v rozsahu indexu zemřelých 2–63).
- „Kniha 3443 neobsahuje narozené“ — potvrzeno katalogem (jen oddaní 1909–1925).
- Ověřená metoda čtení zápisu 53 nezískala 100 % polí — vyčerpány povolené výřezy; dál jen [?] + nezávislý pramen.
- Konec rozsahů knih 3443 (oddaní 1925) ani 3454 (index narozených 1912) NEDOKAZUJE neexistenci/dostupnost jiných (novější) matrik — rozsahy indexů ≠ rozsahy sérií knih.
