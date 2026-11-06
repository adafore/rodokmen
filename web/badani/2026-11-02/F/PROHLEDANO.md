# PROHLEDANO.md — co bylo skutečně prohlédnuto (včetně negativních rozsahů)

Balík F, běh 1 (2026-11-03). Vše níže je doslovný výčet kroků tohoto běhu.

## 1. Vstupní soubory (kompletně pročteny, celé)

| soubor | velikost | SHA256 | stav |
|---|---|---|---|
| STRUKTURA_ANONYMIZOVANA.json | 9 427 B | c731bde6…0c22 | pročten celý; 20 osob, 26 vztahů, 9 pramenů — **žádné další záznamy v souboru nejsou** (negativní závěr v rámci souboru) |
| PRAMENY_KATALOG_STOPY.json | 1 764 B | 00d7b143…32e5 | pročten celý; 6 katalogových stop — **žádné další stopy nejsou** |
| MANIFEST.json | 457 B | — | pročten celý; uvádí 3 soubory; rozměry obrazů **neuvádí** (nejsou v ZIPu) |
| ZADANI.txt | 8 057 B | 21faef54…6e09a | pročten celý |
| (obrazy) | — | — | **v ZIPu žádné obrazy nejsou** (negativní závěr: výpis unzip ukazuje 4 položky, žádná není obraz) |

## 2. Strukturní prohlídka (skriptem, reprodukovatelná)

- Všech **20 osob × pole otec/matka/partneri/zdroje** — kompletně.
- Všech **26 záznamů vztahů** — kompletně (typ, pramen, provenience).
- Všech **9 pramenů** — kompletně.
- Cykly: DFS přes otec/matka do hloubky 50 pro všech 20 osob — **0 cyklů** (negativní závěr v rámci dat).
- Sloty vývodu do hloubky **6** pro P17 i P19 (očekávané 126 pozic); nejhlubší obsazené osoby jsou P6 a P10 v 6. generaci — **žádná známá osoba neleží hlouběji než v 6. generaci** (v rámci dat; 7.+ generace by byla prázdná).
- Zkontrolováno i: duplicitní hrany (0), visící reference (0), kolize otec/matka/partner (0), asymetrie partneri vs. vztahy (nalezeny: P4–P5, P7–P8 + 4 jednosměrné hrany).

## 3. Síťové pokusy — MZA ActaPublica (každá URL právě jednou, žádný cyklus)

| # | URL | metoda | výsledek |
|---|---|---|---|
| 1 | `https://www.mza.cz/actapublica/` | GET | HTTP 302 → `https://www.mza.cz/actapublica/matrika/hledani` (nginx, PHP session cookie) |
| 2 | `https://www.mza.cz/actapublica/` (sledovat 302) | GET -L | timeout 30 s (stránka hledání nedorazila) |
| 3 | `…/matrika/detail/14893` (kniha PR-B/PR-D) | GET | **timeout 40 s** |
| 4 | `…/matrika/detail/12400` (kniha PR-C/PR-E) | GET | HTTP 302 (bez obsahu) |
| 5 | `…/matrika/detail/258` (kniha PR-F) | GET | HTTP 302 (bez obsahu) |
| 6 | `…/matrika/detail/15190` (kniha PR-G) | GET | HTTP 302 (bez obsahu) |
| 7 | `…/matrika/detail/12400` (hlavičky, opakován 1× pro diagnostiku 302) | HEAD/GET -D | timeout 25 s |

Závěr: **katalogová identita knih zůstává „neověřeno“** (nikoli „neexistuje“). Žádné obrazové endpointy,
žádné hádání URL skenů, žádné přihlašování, žádné obcházení bariér. Žádný jiný web v tomto běhu otevřen nebyl.

## 4. Co v tomto balíku NEBYLO hledáno (a proč)

- Nebyly čteny žádné matriční skeny (role F; zakazuje zadání: „Ty nečti znovu tytéž skeny“).
- Nebyly hledány konkrétní osoby/matriční zápisy — proto **žádný negativní rozsah typu „prohlédnuto X–Y folio“ neexistuje**; tvrzení „konec jedné knihy nedokazuje neexistenci všech pozdějších matrik“ zde nejsou relevantní, neboť žádná kniha nebyla prohlížena.
- Nebyly použity žádné údaje z jiných chatů/balíků; nebylo navštěvováno actapublica.eu ani další genealogické weby.
