# MEZERY.md — mapa chybějících větví (balík F, úkol F1)

Vypracováno: 2026-11-03 · Vstup: `STRUKTURA_ANONYMIZOVANA.json` (SHA256
`c731bde69ad0f0d6328c571ec4cd584cb17d7f266c34bbfad17bafcc5d750c22`, ověřeno proti MANIFEST.json).
Vše níže jsou **kandidátní mezery ke kontrole**, nikoli fakta o konkrétních osobách; žádná mezera nebyla
vyplněna fiktivní osobou.

## 1. Přesné tvrzení o pokrytí (místo „známe jen čtvrtinu stromu“)

Procento pokrytí závisí na výchozí osobě i hloubce — data se na 25 % nenuťí:

| výchozí | do hloubky | obsazeno / očekáváno | % | unikátních osob |
|---|---|---|---|---|
| P17 (vlastní předci) | 1–3 | 7 / 14 | 50,0 % | 7 |
| P17 | 1–4 | 10 / 30 | 33,3 % | 10 |
| P17 | 1–5 | 14 / 62 | 22,6 % | 14 |
| P17 | 1–6 | 16 / 126 | **12,7 %** | 16 |
| P19 (oba rodiče) | 1–1 | 2 / 2 | 100 % | 2 |
| P19 | 1–2 | 3 / 6 | 50,0 % | 3 |
| P19 | 1–3 | 5 / 14 | 35,7 % | 5 |
| P19 | 1–6 | 16 / 126 | **12,7 %** | 16 |

Tvrzení „čtvrtina stromu“ se blíží realitě **jen pro P17 do 5. generace (22,6 %)**; do 6. generace je to
~1/8 (12,7 %) jak pro P17, tak pro P19. Rozdíl mezi P17 a P19 je v nejbližších generacích: P19 „ztrácí“
polovinu pozic, protože **předci matky P18 nejsou vůbec evidováni** (otec=null, matka=null).

Oddělení větví ve vývodu P19: **větev otce P17 = 15 osob** (P11, P12, P13, P3, P9, P14, P15, P1, P2, P16,
P4, P5, P7, P8, P6, P10 — 16 včetně hranic hloubky, úplný seznam v POKRYTI.json), **větev matky P18 = 0 osob**.

## 2. Kandidátní chybějící rodičovské hrany (20)

### A. Nejbližší mezery (nejvyšší priorita, rozhodují o dalším bádání)

| # | chybějící hrana | kontext | současný podklad | proč to blokuje |
|---|---|---|---|---|
| A1 | **matka → P17** | P11 (otec P17) nemá evidovaného partnera | pouze PR-RODINA-2026 (sdělení, 0 souborů) | bez ní nelze rozvinout druhou půlku 2.–6. generace P17-větve |
| A2 | **otec → P18** | — | pouze PR-RODINA-2026 | celá polovina vývodu P19 prázdná |
| A3 | **matka → P18** | — | pouze PR-RODINA-2026 | totéž |

### B. Historické konce již známých větví („poloviční konce“ — jeden rodič znám, druhý ne)

| # | chybějící hrana | známý partner rodiče | zdroje větve | poznamka |
|---|---|---|---|---|
| B1 | matka → P9 | P16 (otec) | PR-C, PR-D, PR-B | matka P9 je v pracovních datech null |
| B2 | matka → P5 | P6 (otec) | PR-E | — |
| B3 | matka → P8 | P10 (otec) | PR-E | — |

### C. Úplné konce větví (oba rodiče neznámí)

| # | osoby bez rodičů | hloubka ve vývodu P17 | zdroje |
|---|---|---|---|
| C1 | P14, P15 | 3 | PR-A, PR-F |
| C2 | P16 | 4 | PR-C, PR-B |
| C3 | P4 | 5 | PR-E, PR-D |
| C4 | P6 | 6 | PR-E |
| C5 | P7 | 5 | PR-E |
| C6 | P10 | 6 | PR-E |

Počty: do hloubky 6 má vývod P17 **110 prázdných pozic z 126**; nejhlubší obsazené pozice jsou v 6. generaci (P6, P10).

## 3. Evidenční a strukturní mezery (zjištěno auditem)

1. **P4–P5 a P7–P8**: páry mají vzájemnou referenci v polích `partneri`, ale **chybí jim partnerská hrana ve `vztahy`** (u ostatních párů hrana existuje).
2. **Jednosměrné partnerské hrany**: P1→P2, P3→P9, P14→P15, P12→P13 jsou ve `vztahy` jen jedním směrem (pouze P17↔P18 oběma) — u nekonzistence nemusí jít o chybu, ale sjednotit.
3. **Osamocené prameny**: **PR-G** (rejstřík, 7 souborů, URL) a **PR-H** (archivní sada, 5 souborů, bez URL) nejsou citovány žádnou osobou ani vztahem — buď je zapomenutá citace, nebo osiřelý import.
4. **PR-RODINA-2026** nese **7 hran** (P11→P17, P17→P19, P18→P19, P17→P20, P18→P20, P17↔P18) a 4 osoby P17–P20, přičemž má **0 evidovaných souborů a žádnou URL**.
5. **PR-F**: typ „matriční zápis“, ale provenience „prepis“ — jediný základ hypotézy partnerství P14↔P15 (typ hrany „partnerství (hypotéza)“).
6. Osoby P17, P18, P19, P20 mají `narozeni_zname=false` — v pracovních datech **chybí jakékoli datum narození** celého jádra rodiny.

## 4. Co z mezer NENÍ mezera

- P18 není předkem P17 — absence předků P18 ve vývodu P17 je správná, ne chyba.
- Pedigrée kolaps, cykly, visící reference, kolize otec/matka/partner: **žádné** (kontrolováno skriptem `f1_pokryti.py`).
- Rodičovské hrany jsou v `osoby` a ve `vztahy` v úplné shodě (20 : 20, žádný rozdíl).

Detailní data po složkách: `POKRYTI.json` (`mezery_hrany`, `mezery_partnerstvi`, `obsazene_sloty` s proveniencí každé hrany).
Vizualizace: `MAPA_STRUKTURY.html` (SVG vývody P19 a P17).
