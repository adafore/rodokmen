# DENIK.md — badatelský deník balíku F (F_MAPA_CHYBEJICICH_VETVI)

Časy jsou UTC+8 (sandbox). Badatel: samostatný agent role „genealogická struktura / audit pokrytí“.

## 2026-11-03, běh 1

| čas | krok | výsledek |
|---|---|---|
| start | Rozbalení `F_MAPA_CHYBEJICICH_VETVI_VSTUP.zip` (6 231 B) do `work/input/` | 4 soubory: MANIFEST.json, PRAMENY_KATALOG_STOPY.json, STRUKTURA_ANONYMIZOVANA.json, ZADANI.txt |
| +1 min | Ověření SHA256 všech 3 datových souborů proti MANIFEST.json | **3/3 souhlasí** (PRAMENY `00d7b1…32e5`, STRUKTURA `c731bd…0c22`, ZADANI `21faef…6e09a`) |
| +2 min | Kontrola deklarace šablony „ZIP obsahuje reálné archivní obrazy“ | **Odchylka: ZIP žádné obrazy neobsahuje** — jen JSON/TEXT. Zaznamenáno, pokračuji strukturální rolí (F balík skeny nevyžaduje: „Ty nečti znovu tytéž skeny“) |
| +3 min | Čtení STRUKTURA_ANONYMIZOVANA.json | 20 osob (P1–P20), 26 vztahů, 9 pramenů; anonymní, bez jmen/datumů — dle zadání |
| +5 min | Skript `scripts/f1_pokryti.py` (F1) | POKRYTI.json 23 356 B; integrita 5/5 OK; pokrytí P17: 16/126 (12,7 %) do h6; P19: 16/126 (12,7 %); žádné cykly/visící ref./kolize; pedigrée kolaps žádný |
| +8 min | Skript `scripts/f1_diagram.py` | MAPA_STRUKTURY.svg (P19), MAPA_VYVOD_P17.svg, MAPA_STRUKTURY.html; XML validní, vizuálně zkontrolováno renderem (cairosvg) |
| +10 min | Uložení F1 do `download/F_MAPA_CHYBEJICICH_VETVI/` + ZIP F1_v1 | MEZERY.md, POKRYTI.json, mapa HTML/SVG, deník, checkpoint; ZIP `…_F1_v1.zip` |
| +12 min | Přístup na MZA ActaPublica (https://www.mza.cz/actapublica/) | výsledek viz PROHLEDANO.md (jednorázový pokus, bez obcházení) |
| +16 min | Skript `scripts/f2_vazby.py` (F2) | VAZBY_A_ZDROJE.csv, PRAMENY.csv, klasifikace podkladů |
| +20 min | F2 dokumentace + ZIP F2_v1 | VAZBY_A_ZDROJE.csv, PRAMENY.csv, PRAMENY_AUDIT.md |
| +23 min | F3 — DOPORUCENE_DOKLADY.md + ZIP F3_v1 | 5 doporučení, anonymní role/PID |
| +26 min | Závěrečné soubory (PREHLED, NOVE_NALEZY, PRAMENY.csv, PREPISY, NEJISTOTY, PROHLEDANO, POKRACOVAT, MANIFEST) + FINAL ZIP | vše ověřeno skriptem `f_overit.py` |

## Odmítnuté kroky (z důvodu metodiky)
- Nezkoušeny žádné interní obrazové endpointy MZA v cyklu (jen 4× knihovní detail + 1× hlavní stránka, viz PROHLEDANO.md).
- Nevyráběny žádné fiktivní osoby pro prázdné sloty; mezery zůstávají prázdné.
- Nepoužity žádné údaje z jiných chatů/balíků; výstup obsahuje jen PID ze vstupu.
- Nečteny žádné matriční skeny (mimo roli F); katalogové stopy pouze na úrovni knihy.
