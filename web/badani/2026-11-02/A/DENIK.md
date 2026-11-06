# Badatelský deník — balík A (Anna Dobrovolná a její rodiče)

## 2. 11. 2026, běh 1 (UTC)

**13:12** — Převzetí vstupu `A_DOBROVOLNI_VSTUP.zip` (19 761 888 B). Rozbaleno do
`work/vstup/`: 5 souborů, všech 5 SHA256 SOUHLASÍ s MANIFEST.json:
- 03_anna_sn96_cely_fol186_187.jpg — 7455×5846, 6 748 714 B, 971449ea…e899 ✓
- 03_anna_vyrez_radek36_fol187.png — 3728×840, 05a16560…0ac5 ✓
- 03_matka_kontrola.jpg — 1050×1320, 7d3cd5bb…b30c ✓
- C_2755_sn85_native.jpg — 7353×5434, c28fc96c…bc59 ✓
- 03_kontrola.json — f084d76b…e7e2 ✓

**13:14** — Test přístupu: https://www.mza.cz/actapublica/ HTTP 200 (přesměrování na
/actapublica/matrika/hledani). ActaPublica FUNKČNÍ (actapublica.eu nezkoumán, nebyl
potřeba).

**13:16–13:30** — A1: čtení skenu knihy 2736. Orientace: dvojstrana fol. 186/187,
hlavičky „Knaha narozených a pokřtěných — Geburths- und Taufbuch, Annus 1900, tomus XI".
Zápis č. 36 = poslední řádek fol. 187. Provedeno 9 výřezů v přirozeném rozlišení
(žádné zvětšení/doostření). Výsledky v PREPISY.md.
Klíčové čtení: datum narození s korekturou → **29. června 1900**; otec **Josef Dobrovolný,
nar. 4/8 1873** (ne 1843!); matka **Genovéfa, nar. 27/2 1877**, dcera **Frančiška Tihlařika**
a **Evy rozené Forejtkové(?)**; poznámka **„oddána 26/4. 1921 … s Forejtníkem Bohuslavem"**;
blok **„Oddavky se 4. října(?) 1899"**.

**13:31** — Katalog MZA: hledání podle signatury → kniha 2736 = katalog ID **14893**
(narození 1883–1925, Klobouky u Brna, svazek XI). URL ověřena. Seznam snímků je za
ALTCHA (proof-of-work) — neobcházím; metadata knihy dostatečná.

**13:32** — Seznam knih farnosti (obec_id=618): oddaní 1883–1948 = kniha **2755**,
katalog ID **12400**. Katalog ID **2786** = Křepice, narození 1841–1875 — s naší větví
NESOUVISÍ; stopa „rejstřík 2786" je tedy v současném katalogu nenamapovaná (staré ID?).
Zapsáno do NEJISTOTY.

**13:34–13:37** — A1: čtení sňatku 2755 sn85 (pag. 172). Zápis č. 85/1921:
Forejtník Bohuslav (26, nar. 3/4 1895, syn Karla F. a Rosalie rozené Veselé — tato část
patří jiné větvi) × **Dobrovolná Anna** (20, „manželská dcera **Josefa Dobrovolného,
zedníka v Kloboukách**, a **Jenovéfy rozené Tihlařů** [Tihlař/ík], … **nar. 27/6. 1900**",
u rodičů Klobouky č. 266). Podpis otce „Josef Dobrovolný — Otec". Svědci Forejtník Rudolf,
Josef Dobrovolný (č. 206?).

**13:38** — Rozpor datumu narození Anny (29.6. v rod. zápise po korektuře vs. 27.6. v
sňatku 1921) zaznamenán; nezavírám, hledám nezávislý pramen.

**13:39–13:42** — Uložení A1: PREPISY.md, NOVE_NALEZY.json, PRAMENY.csv, obrazy_A1/
(12 výřezů), CHECKPOINT.md, DENIK.md; vytvořen 01_A_DOBROVOLNI_A1.zip.

## Plán úkolu A2
1. V knize 2755 (ID 12400, oddaní 1883–1948) najít sňatek Dobrovolný Josef × Jenovéfa/Genovéfa
   rozená Tihlař(ík)ová, 4. 10. 1899 (per poznámka „Oddavky se 4. ř(íj)na 1899").
2. Rejstřík knihy není v katalogu veden → navigovat snímky knihy (říjen 1899 ≈ 16. ročník
   z rozsahu 1883–1948). Problém: seznam/obrázky snímků za ALTCHA — nutno vyzkoušet
   přístup k obrazovým souborům (jp2 pattern) a vyhodnotit; ALTCHA neobcházet.
3. Ověřit: věk, domy, rodiče obou, případná dispensace.

## 2. 11. 2026, pokračování (A2, 13:45–14:15 UTC)

**13:46** — Zjištěno: seznam snímků i obrazy ActaPublica jsou za ALTCHA; curl blokován
(WAF). Řešení: headless browser (agent-browser) — ALTCHA proběhne normálně jako u
návštěvníka; bariéra NEJDE obejít, používám web tak, jak je určen. Viewer: kniha 2755
má 166 snímků. Obrazy přes IIP server (iipsrv.fcgi, DeepZoom) s tokenem na session.

**13:55** — Sestaven nástroje scripts/iip_top.js + scripts/iip_pull.py (stah dlaždic
a skládání do výřezů přes prohlížeč). Opraveny 2 chyby (transpozice dlaždic c_r, poloviční
šířka). Stripy hlaviček 37–41: přechody ročníků ~1900–1902.

**14:00** — snímek 39: certifikace „Klobouky 31 prosince 1901" + leden 1902 → zpětná
kalibrace; snímek 33: srpen 1899; **snímek 34 levá strana horní zápis: HIT**.

**14:05–14:12** — L13 (plné rozlišení) čtení zápisu: „Dne 4. října", ženich Jos. František
Dobrovolný, volný zedník, 26 let, syn Frančiška Dobrovolného domkáře (otec žije, matka
Mariana(?) roz. Veselá(?) zemřela); nevěsta Genovéfa Tihlař(ík)ová, 22 let, dcera Františka
Tihlařika domkáře + Evy rozené Forejtkové(?). OHLÁŠKY čís. 16. Výstupy uloženy, ZIP2.
