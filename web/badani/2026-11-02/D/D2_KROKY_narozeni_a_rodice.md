# D2 — Narození snoubenců a sňatky jejich rodičů: doložený stav a plán dohledání

Balík D_KOSEK_TRPELKA · Čas: 2026-11-02 · Stav: pracovní — kandidátní zápisy nejsou čteny, raster je zablokován; vše níže je plán + katalogově ověřené rámce.

## 1. Výchozí doložená data (z přepisu D1, zápis č. 53, pag. 94, Anno 1919, tomus V.)
| osoba | čteno v zápisu | jistota |
|---|---|---|
| ženich | **Cyrill Kosek**, délník, čís. ma[t/x][?] v Tvrdonicích, příslušný | jméno zřetelné |
| ženichův otec | **Josef Kosek, chalupník v Tvrdonicích** | zřetelné |
| ženichova matka | **Františka, „roz. Josefa Štrukáni[x/k][?]"**, chalupnice v Tvrdonicích | příjmení NEJISTÉ |
| nevěsta | **Alžběta Trpětka[?]/Trpětková[?]**, dělnice, Kostice | jméno zřetelné, příjmení bez „l“ |
| nevěstin otec | **Josef Trpětek/Trpětka[?], chalupník v Kosticích** (gen. „Trpětky") | zřetelné |
| nevěstina matka | **Julana, „roz. Josefa Prokopa[?], chalupníka v Kosticích"** | zřetelné s [?] u koncovek |
| věky | ženich „2[8\|9] 1/2[?]“; nevěsta „2[2\|3] 1/2[?]“ | zlomky nejisté → jen intervaly |

Odvozené vyhledávací intervaly (NIKOLI data narození): ženich nar. ~1888–1892; nevěsta nar. ~1893–1898. Rotovaný údaj „Nar. 24. …" v zápisu existuje, ale měsíc/rok nečitelné → použití jen jako kontrolní znak „24. [měsíc][?]“.

## 2. Katalogově ověřené rámce (tato běh, WebFetch 2026-11-02)
- **Kniha 3443** (detail/258): Tvrdonice ř.k., **oddaní 1909–1925**, obec Kostice, svazek IV, 95 snímků, čeština. → sňatky rodičů (zhruba 1860–1908) v ní NEJSOU; musí být v dřívějších oddacích svazcích farnosti — jejich signatury v tomto běhu NEBYLO možné ověřit (katalogové hledání blokováno, viz 4.).
- **Kniha 3454** (detail/12042): svazek rejstříků — index **narozených 1784–1912** (sn. 104–172), index oddaných 1790–1925 (sn. 64–103), index zemřelých 1790–1946 (sn. 2–63); jazyk něm./čes. → narození obou snoubenců (interval 1888–1898) spadají DO rozsahu indexu narozených knihy 3454; raster blokován.

## 3. Plán dohledání (konkrétní kroky, ne prázdné seznamy)
1. **Rejstřík oddaných (kniha 3454, sn. 64–103)**: najít řádky „Kosek Cyrill × Trpět(ě)ková Alžběta, 1919, pag. 94“ — nezávislá kontrola čtení jmen a paginace. Hledat pod K (Kosek) i T (Trpětka/Trpětka-), index je dvojjazyčný.
2. **Narození ženicha**: index narozených 3454 (sn. 104–172), heslo **Kosek/Koßeck/Koseck/Kosek[Cyrill/Cyril/Kyrill]**, interval 1888–1892, obec Tvrdonice (otec chalupník). Kontrolní znaky: otec Josef chalupník, matka Františka; „24.“ jako den v marginu zápisu 53.
3. **Narození nevěsty**: index narozených 3454, heslo **Trpětka/Trpětková/Trpělková/Trpelka (a Tvrdík/Trpák jen při negativu)**, interval 1893–1898, obec Kostice, otec Josef chalupník, matka Julana.
4. **Sňatek rodičů ženicha** (Josef Kosek chalupník × Františka r. Š…): oddací svazky farnosti do 1908 — signatury zjistit v katalogu (bod 4 níže), pak rejstříky oddaných příslušných svazků.
5. **Sňatek rodičů nevěsty** (Josef Trpětek chalupník × Julana r. Prokop): totéž; Julanino rodné příjmení „Prokop[?]“ je zatím jen čtení zápisu — potvrdit z narozené matriky nevěsty.
6. Po každém novém záznamu: přepis celého kontextu (ne jen jména) + kontrola věků/obcí/domů proti zápisu 53.

## 4. Překážky tohoto běhu (zdokumentované)
- raster MZA (viewer/IIIF) za ALTCHA — čtení rejstříků i narozených knih v tomto běhu neprovedeno; bypass zakázán.
- hledání katalogu = POST/JS; curl 2× timeout; odkaz `matrika/obec/15` 404; stránka `matrika/puvodce` 404 (JS) → signatury dalších knih farnosti (narozené, dřívější oddací) zůstávají neověřené.
- Proto: žádná konkrétní narozená kniha pro interval 1888–1898 v tomto běhu NENÍ jmenována — nedělat dojem, že „3442“ apod. existuje bez ověření.

## 5. Varianty jmen (vyhledávací hypotézy — NIKOLI rovnocenně potvrzená jména)
- ženich: Kosek / Hosek / Koseck / Koßeck; Cyrill / Cyril / Kyrill
- nevěsta: Trpětka / Trpětková / Trpětek (otec) / Trpělková (rodinný údaj, s „l“) / Trpelka; Alžběta / Elžběta / Marie Alžběta (pouze pokud pramen ukáže)
- matka ženicha: Františka r. Š…(Štrukáni[k/x]? Škrhánka? Struhaňák?) — jen z narozené matriky
- matka nevěsty: Julana/Juliana r. Prokopová (otec Josef Prokop chalupník, Kostice[?])

## 6. Kriteria totožnosti (kontrolní srovnání)
Datum sňatku 1919; obce a domy (Tvrdonice × Kostice; čís. 180/237 svědků jen orientačně); povolání rodičů (chalupníci); věková konzistence (jen intervalově); shoda jmen rodičů; dvojité kontrolní datum „24.“ z marginu zápisu 53 (den narození? — ověřit až u narozeného záznamu). Shoda samotného jména nestačí.
