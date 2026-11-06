# NEJISTOTY.md — jistoty, odhady a jejich hranice (balík F)

## 1. Co je zjištěno s vysokou jistotou (čistá deduction ze vstupních dat)

- Všechny počty pokrytí (P17: 16/126 pozic do 6. generace = 12,7 %; P19: 16/126 = 12,7 %; po hloubkách viz POKRYTI.json) — kontrolováno reprodukovatelným skriptem.
- Formální integrita: 0 cyklů, 0 visících referencí, 0 kolizí, 0 duplicitních hran, rodičovské hrany konzistentní 20:20.
- Sdílené katalogové detaily URL (PR-B=PR-D→14893; PR-C=PR-E→12400) — fází parsování řetězců ze vstupu.

## 2. Nejistoty, které musí řešit jiný pramen nebo jiný badatel

| # | nejistota | proč je nejistá | jak ji vyřešit |
|---|---|---|---|
| U1 | Katalogová identita knih 14893, 12400, 258, 15190 (farnost, signatura, rozsah let) | obsahové stránky MZA v tomto běhu neodpověděly (302/timeout); podle metodiky neopakováno v cyklu | otevřít detaily v běžném prohlížeči; nebo jiné běhy badatelů A–D |
| U2 | Je „sdílená kniha“ (N6) opravdu totéž fyzické knihy? | inference z URL detail-ID; nevylučuje vícesvazkovou digitální jednotku ani chybu v URL | potvrdit v katalogu (U1) |
| U3 | Provenience „matrika“ u PR-B…PR-E | je jen značka v pracovních datech + neověřená URL; žádný přepis zápisu neexistuje | přepis konkrétních zápisů (role E/A–D) |
| U4 | Hypotéza partnerství P14↔P15 | stojí jen na přepisu PR-F (typ „matriční zápis“, provenience „prepis“) | porovnat přepis s originálem |
| U5 | Rodinné sdělení PR-RODINA-2026 | 0 souborů, bez URL; nelze vyloučit nepřesnost sdělení | rodinné dokumenty č. 1–3 z DOPORUCENE_DOKLADY.md |
| U6 | „narozeni_zname=true“ u 7 osob | značí jen existenci údaje v pracovních datech, NIKOLI ověření údaje | viz matici F2 (co chybí k ověření na každé hraně) |
| U7 | Anonymizace | PID nelze spojit s reálnými osobami (záměrné); pokrytí je čistě strukturální — nelze ověřit, zda P17-větev odpovídá skutečné linii Forejtníkových | porovnání s neanonymizovanými daty vlastníka projektu |
| U8 | Úplnost vstupu | pracovní projekt může obsahovat další osoby/vazby, které anonymizovaný výsek neukazuje | dotaz na vlastníka; jiný balík |
| U9 | Důvod nedostupnosti MZA | sandbox může mít síťová omezení; nelze odlišit od výpadku či ochrany služby | zkusit z jiného prostředí (ne obcházet) |

## 3. Co jsme NEUVÁDĚLI jako jistotu (ačkoli by se to nabízelo)

- „Čtvrtina stromu“ — nepravdivě obecné; přesné hodnoty závisí na výchozí osobě i hloubce (viz MEZERY.md).
- Žádné konkrétní nové osoby nebyly navrženy — prázdné sloty zůstávají prázdné (candidate=true jen u MEZER).
- Slovo „mezera“ znamená **neznámý PID**, nikoli tvrzení, že osoba neexistovala.
- Žádné negativní archivní tvrzení („neexistuje zápis…“) nebylo vysloveno — žádné negativní hledání neproběhlo.
