# CHECKPOINT.md — balík F (F_MAPA_CHYBEJICICH_VETVI)

Aktualizace: běh 1 dokončen — **F1+F2+F3 hotovo, závěrečné výstupy ověřeny**.

## Stav úkolů
- [x] Ověření vstupního ZIP (SHA256 3/3 dle MANIFEST.json; ZIP neobsahuje obrazy — zdokumentováno N11)
- [x] **F1 pokrytí**: POKRYTI.json, MEZERY.md, MAPA_STRUKTURY.html + 2 SVG (vizuálně zkontrolováno). P17: 16/126 (12,7 %) do h6, 50 % do h3; P19: 16/126 (12,7 %), větev P18 = 0; integrita 100 % (0 cyklů/visících/kolizí, hrany 20:20, kolaps žádný)
- [x] **F2 vazby/prameny**: VAZBY_A_ZDROJE.csv (31 řádků), PRAMENY.csv (9), PRAMENY_AUDIT.json. PR-B=PR-D→14893, PR-C=PR-E→12400 (sdílené detaily → nezávislost zdánlivá); MZA identita neověřena (302/timeout, bez obcházení); PR-G+PR-H osamocené; PR-F přepis = základ hypotézy P14↔P15; jádro P17–P20 jen na sdělení bez souboru
- [x] **F3 doporučené doklady**: DOPORUCENE_DOKLADY.md — 5 položek, nejhodnotnější oddací list P17×P18 (3 hrany najednou); anonymní role/PID; nic nekontaktováno, žádné žádosti
- [x] Závěrečné soubory: PREHLED.md, NOVE_NALEZY.json (12 nálezů, JSON validní), PREPISY.md, NEJISTOTY.md, PROHLEDANO.md, POKRACOVAT.md, DENIK.md, MANIFEST.json, VYSLEDKY_SHA256.csv
- [x] ZIPy: F1_v1, F2_v1, F3_v1, FINAL_v1 — vše integrity-testované, pod 45 MB, bez index.html

## Stažitelné výstupy (složka `download/F_MAPA_CHYBEJICICH_VETVI/`)
Viz PREHLED.md a MANIFEST.json; kompletní tabulka SHA256 v VYSLEDKY_SHA256.csv.

## Zbývá (pro jiný běh/balík)
Katalogová identita MZA knih 14893/12400/258/15190 z jiného prostředí; rodinný doklad č. 1 (oddací list P17×P18).
