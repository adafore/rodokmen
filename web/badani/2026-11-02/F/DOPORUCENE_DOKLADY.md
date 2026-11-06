# DOPORUCENE_DOKLADY.md — 5 nejúčelnějších rodinných dokladů/dotazů (úkol F3)

**Komu je seznam určen:** výhradně vlastníkovi rodinného archivu projektu (anonymní role/PID dle
STRUKTURA_ANONYMIZOVANA.json). **Nikdo není kontaktem pověřen; nejsou podávány žádné žádosti na úřady,
nejsou sestavovány právní nároky ani lhůty.** Seznam je návrh, co z rodinného archivu najít a zkopírovat.

**Logika výběru:** pokrývá se jimi rozdíl mezi (i) neznámou **matkou P17**, (ii) **oběma rodiči P18**,
(iii) **historickými konci** jíž známých větví (matky P9, P5, P8). Nežádáme „všechny rodné listy“,
identifikační čísla, podpisy ani údaje žijících osob — jen to, co odkryje konkrétní chybějící rodičovskou hranu.
⚠️ Chybějící nejbližší rodinu **nemůže nahradit shoda příjmení na webu** — proto každá položka uvádí,
jaké minimální údaje musí být čitelné, aby se dal výsledek spolehlivě navázat.

## Souhrnná tabulka (seřazeno podle přínosu)

| # | doklad / dotaz | odkrývá hranu (PID) | kategorie mezery | minimálně čitelné údaje |
|---|---|---|---|---|
| 1 | Rodinná kopie **oddacího listu P17 × P18** (nebo jakýkoli doklad o sňatku) | **matka→P17**, **otec→P18**, **matka→P18** (3 hrany najednou) + potvrzení samotného partnerství P17↔P18 | nejbližší generace | křestní jména + rodná příjmení rodičů OBOU snoubenců (zvl. rodná/dívčí příjmení matek), přibližné ročníky rodičů, bydliště v době sňatku, rok/místo sňatku |
| 2 | Rodinná kopie **rodného/křestního listu P17** | **matka→P17** (a nezávisle potvrdí otec→P11, dnes jen „sdělení“) | nejbližší generace | jméno + rodné příjmení matky, rok a místo narození P17, jméno otce |
| 3 | Jakýkoli rodinný doklad pojmenovávající **rodiče P18** (rodinná kniha, korespondence, úmrtní oznámení rodičů P18, fotografie s popiskem) | **otec→P18**, **matka→P18** | zcela prázdná větev | obě křestní jména + rodná příjmení (rodné příjmení matky NIKDY neodvozovat z příjmení manžela), přibližné ročníky, obec/farnost |
| 4 | **Úmrtní oznámení / smuteční inzerát / doklady k pohřbu** matky P9 (partnerky P16) | **matka→P9** | historický konec známé větve (P3↔P9) | rodné (dívčí) příjmení, přibližný rok narození, obec/farnost; případně i jména přeživších (jen role „manžel P16“) |
| 5 | Jeden kombinovaný rodinný dotaz: **doklady k matek P5 a P8** (partnerky P6 a P10) — cokoliv pojmenovávající tyto ženy | **matka→P5**, **matka→P8** | historické konce větví (3.–4. generace P17-větve) | rodná příjmení, přibližné ročníky, obce/farnosti; stačí i zmínka v rodinném dopise |

## Proč se tyto hrany nedají spolehlivě navázat online (stav k tomuto běhu)

1. **Jádro rodiny nemá žádné přesné údaje:** P17, P18, P19, P20 mají v pracovních datech
   `narozeni_zname=false` a jediný podklad PR-RODINA-2026 (rodinné sdělení) má **0 souborů a žádnou URL**.
   Online katalogy (MZA ActaPublica) vyžadují alespoň přibližný ročník + farnost/obec — k dispozici není nic,
   co by výběr zúžilo.
2. **Katalogové stopy nejsou ověřené ani navázané na konkrétní zápis:** URL v PRAMENY_KATALOG_STOPY.json
   ukazují jen na 4 katalogové detaily knih (14893, 12400, 258, 15190); v tomto běhu se jejich obsah
   nepodařilo otevřít (stav „neověřeno“) a z dat není známo, který zápis/řádek má dokládat kterou hranu.
3. **Větev P18 je zcela prázdná** — neexistuje jediná vyhledávací kotva (jméno, rok, místo). Proto je
   doklad č. 1/3 cennější než cokoli, co lze „dohledat“: shoda příjmení na genealogických webech
   neumožňuje rozlišit totožnost a mohla by do stromu vnést cizí osoby.
4. **Matky P9, P5, P8 chybí bez dívčích příjmení** — v matričních rejstřících se ženy hledají primárně
   po rodném příjmení; to v datech chybí u všech tří, a tak i správný zápis nelze bezpečně přiřadit.

## Co výslovně NEŽÁDAT

- všechny rodné listy všech příbuzných (stačí 5 položek výše),
- identifikační čísla, podpisy, zdravotní/finanční údaje — pro bádání nepodstatné,
- soukromé údaje žijících osob (adresy, kontakty),
- žádné „dotazy do světa“ na shodná příjmení — nepoužitelné k totožnosti.

## Co udělá s dokladem vlastník archivu (technický postup)

1. Naskenuje/zafotí doklad (celá strana, rozlišení čitelné pro přepis), pojmenuje soubor dle PID
   (např. `P17_P18_oddani_list.jpg`) a zaregistruje jako nové zdrojID v pracovních datech.
2. Do poznámky u souboru uvede: co je to za typ dokumentu, kdo/kdy ho do archivu dodal (provenience
   „dokument“, nikoli „matrika“ — dokud není porovnán s archivním originálem).
3. Vytvoří přepis minimálních údajů z tabulky výše (stačí 6–10 položek na doklad), NE integruje do stromu.
4. Teprve porovnáním přepisu s katalogem MZA (farnost + ročník) lze navrhnout konkrétní knihu — to pak
   provedou badatelé A–D v rámci svých balíků; tento balík bádání nespouští.
