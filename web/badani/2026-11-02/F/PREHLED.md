# PREHLED.md — souhrnný výsledek balíku F (F_MAPA_CHYBEJICICH_VETVI)

Datum: 2026-11-03 · Role: genealogická struktura, audit pokrytí a účelný seznam dalších dokladů
Vstup: `F_MAPA_CHYBEJICICH_VETVI_VSTUP.zip` (SHA256 všech 3 datových souborů souhlasí s MANIFEST.json 3/3).
Vše zůstává **návrhem ke kontrole**; nic nebylo integrováno do pracovních dat; žádné jména/datumy (vstup je anonymizovaný).
Výstupní balíček: `download/F_MAPA_CHYBEJICICH_VETVI/` + ZIPy `…_F1_v1.zip`, `…_F2_v1.zip`, `…_F3_v1.zip`, `…_FINAL_v1.zip`.

## ÚKOL F1 — skutečné pokrytí předků (POKRYTI.json, MEZERY.md, MAPA_STRUKTURY.html/SVG)

- **P17** (výchozí): 16 unikátních předků na 16 obsazených pozicích z **126 očekávaných do 6. generace = 12,7 %**; kumulativně: do h3 50,0 %, do h5 22,6 %. „Čtvrtina stromu“ tedy platí jen zhruba pro hloubky 1–5; do h6 je to ~1/8.
- **P19** (dítě): 16/126 pozic (12,7 %), 16 unikátních osob. **Větev matky P18 = 0 osob** (otec i matka P18 null); větev otce P17 = 15 předků + P17.
- Předci P18 nejsou předci P17 — ve vývodu P17 nejsou a ani nejsou nikde evidováni.
- Integrita: **0 cyklů, 0 visících referencí, 0 kolizí otec/matka/partner, 0 duplicitních hran, rodičovské hrany 20:20 konzistentní, pedigrée kolaps žádný**.
- Mezery (kandidátní): matka→P17; otec+matka→P18; matka→P9, matka→P5, matka→P8 (poloviční konce); úplné konce P14, P15, P16, P4, P6, P7, P10. Prázdné sloty nevyplněny fiktivními osobami.
- Evidenční závady: páry P4–P5 a P7–P8 bez hrany ve vztahy; 4 jednosměrné partnerské hrany.
- Diagramy: `MAPA_STRUKTURY.html` (2 SVG vývody s legendou proveniencí), standalone `MAPA_STRUKTURY.svg`, `MAPA_VYVOD_P17.svg`.

## ÚKOL F2 — audit vazeb a pramenů (VAZBY_A_ZDROJE.csv 31 řádků, PRAMENY.csv, PRAMENY_AUDIT.json)

- Klasifikace podkladů (odděleno): **rodinné sdělení** (PR-RODINA-2026, 0 souborů) nese 7 hran + 4 osobní údaje jádra P17–P20; **dodaný dokument** (PR-A, 1 soubor, bez URL) nese 4 rodičovské + 1 partnerskou hranu; **katalogové stopy** (PR-B…PR-E) nese 11 rodičovských + 2 partnerské hrany — to jsou jen **značky „matrika“ + neověřené URL**, nikoli doložené zápisy; **přepis** (PR-F) je jediným základem hypotézy P14↔P15; **pouhé značky provenience** (PR-H) a **osamocený rejstřík** (PR-G) nejsou citovány ničím. Typ „odhad“ explicitně v datech není.
- **Sdílené knihy**: PR-B = PR-D → `matrika/detail/14893`; PR-C = PR-E → `matrika/detail/12400` (liší se jen číslem snímku). Tyto dvojice nejsou vzájemně nezávislé prameny, ač je pracovní data vede zvlášť.
- **MZA katalogová identita knih 14893/12400/258/15190: NEověřeno** (host živý na 302; obsahové stránky 20–40 s neodpověděly; jednorázové pokusy, bez obcházení, bez cyklů). Číslo knihy ≠ ID detailu; snímek ≠ strana (viz PREPISY.md).
- Matice „co chybí k ověření“ je na každé hraně v CSV; prázdná URL ≠ žádný důkaz (PR-A má soubor bez URL), uvedená URL ≠ otevřený důkaz.

## ÚKOL F3 — 5 doporučených rodinných dokladů (DOPORUCENE_DOKLADY.md)

1. Oddací list P17×P18 (odkrývá **3 hrany**: matka→P17, otec→P18, matka→P18) — nejvyšší přínos.
2. Rodný/křestní list P17 (matka→P17 + potvrzení otce P11).
3. Jakýkoli doklad pojmenovávající rodiče P18 (celá prázdná větev).
4. Úmrtní oznámení k matce P9 (poloviční konec větve).
5. Kombinovaný dotaz za doklady k matek P5 a P8 (dva poloviční konce).
Každá položka uvádí: konkrétní odkrytou hranu, minimální čitelné údaje, důvod neodolatelnosti online
(žádné datumy narození jádra, neověřené stopy, prázdná větev P18, chybějící dívčí příjmení matek).
Výslovně nežádáme rodné listy všech příbuzných, ID čísla, podpisy ani údaje žijících osob; nikdo není kontaktován.

## Ověření a podklady

- Počty ověřeny reprodukovatelnými skripty `scripts/f1_pokryti.py`, `scripts/f2_vazby.py`, `scripts/f_overit.py` na skutečných vstupních datech (ne na umělých výstupech); SVG vizuálně zkontrolováno renderem.
- Křížové soubory: `NOVE_NALEZY.json` (12 nálezů s důkazy, N12 = candidate), `NEJISTOTY.md` (9 nejistot), `PROHLEDANO.md` (kompletní výčet pokusů včetně negativních rozsahů), `POKRACOVAT.md` (1 nejlepší krok), `DENIK.md`, `CHECKPOINT.md`, `MANIFEST.json`, `VYSLEDKY_SHA256.csv`.
- Odchylka vstupu: ZIP **neobsahuje archivní obrazy** (jen 3 JSON + zadání) — zdokumentováno (N11); žádná tvrzení o skenech proto učiněna nebyla.

## Hranice tohoto balíku

Anonymizovaný výsek nelze spojit s reálnými osobami (záměrné); pokrytí je strukturální. Žádné negativní
archivní tvrzení nebylo vysloveno — žádné matriční hledání neproběhlo (mimo roli F). Nejisté předky nezapisujeme jako fakta.
