# PREPISY.md — přepisy (balík F)

## 1. Co v tomto balíku (ne)vzniklo

**V tomto balíku nebyl vytvořen žádný doslovný přepis archivního zápisu a žádný archivní obraz nebyl čten.**
Důvody, obě zásadní:
1. Role badatele F je strukturální: „Ty nečti znovu tytéž skeny ani nehledáš další rodiče naslepo“ (ZADANI.txt, odstavec TVÁ ROLE).
2. Vstupní ZIP žádné obrazy neobsahuje (ověřeno výpisem ZIP; zdokumentováno v NOVE_NALEZY.json N11) — nelze přepisovat z ničeho.

## 2. Jediný provedený „přepis“ — strukturovaný přepis katalogových stop

Přepis URL řetězců z `PRAMENY_KATALOG_STOPY.json` na komponenty (číslo knihy ≠ ID detailu; snímek ≠ strana):

| zdrojID | typ | URL → ID detailu (kniha) | snímek (image parametr, verbatim) | rozdíl v rámci páru |
|---|---|---|---|---|
| PR-B | matriční zápis | `matrika/detail/14893` | `216000010-00253-00000002736-000-000000000-000002736-02070.jp2` | sdílí detail 14893 s PR-D; liší se jen koncovkou snímku (02070 vs 00630) |
| PR-D | matriční zápis | `matrika/detail/14893` | `216000010-00253-00000002736-000-000000000-000002736-00630.jp2` | totéž, jiný snímek |
| PR-C | matriční zápis | `matrika/detail/12400` | `216000010-000253-003370-000000-002755-000000-00-00850.jp2` | sdílí detail 12400 s PR-E; liší se jen koncovkou (00850 vs 00020) |
| PR-E | matriční zápis | `matrika/detail/12400` | `216000010-000253-003370-000000-002755-000000-00-00020.jp2` | totéž, jiný snímek |
| PR-F | matriční zápis (provenience: přepis) | `matrika/detail/258` | `216000010-00253-003370-000000-003443-000000-FM-B09549-00490.jp2` | struktura segmentů se liší od ostatních (segment FM-B09549) |
| PR-G | rejstřík | `matrika/detail/15190` | `216000010-00253-00000002786-000-000000000-000002786-00090.jp2` | — |

Poznámky k přepisu:
- První segment `216000010` je ve všech shodný (identifikátor archivu v názvu snímku).
- Struktura segmentů snímků není jednotná (7–9 segmentů, různá dělení) — **neodvozujeme z nich čísla stran**.
- „ID detailu“ (14893/12400/258/15190) je interní katalogové ID digitální jednotky na mza.cz, **nikoliv**
  knižní signatura ani číslo knihy ve smyslu farní evidence; to musí potvrdit katalog (stav: neověřeno, viz PROHLEDANO.md).
- Stopy jsou převzaty ze vstupu bez soukromých popisů; **nejsou dokladem návštěvy ani přepisu zápisu** (uvádí to i jejich vlastní poznámka „Unverified catalogue lead“).

## 3. Odvozené přehledy (nikoli přepisy pramenů)

- Klasifikace 9 pramenů a matice vazba→zdroj→podklad→co chybí: `VAZBY_A_ZDROJE.csv` (31 řádků), `PRAMENY.csv`.
- Věcné shrnutí: `PRAMENY_AUDIT.json`.

Pokud jiný badatel (role E) dodá přepisy obrazů, tyto přepisy se sloučí v matici F2 jako samostatný typ
podkladu „přepis“ — nikdy automaticky jako „doložený archivní zápis“.
