# DENÍK 2. KOLA – průběžné záznamy bádání (kolo 2)

Formát: čas (UTC) | cíl | akce | výsledek | překážky

## Nástroje (2. kolo)
- Prohlížeč MZA: agent-browser (headless Chromium). CAPTCHA se nezobrazila (29.–30. 10. 2026).
- Čtení obrazu: `z-ai vision` (glm-5v-turbo) – jediný dostupný vizuální model v prostředí (CLI neumožňuje výběr jiného modelu; vyzkoušeno). Neutrální dotazy bez hledaných jmen, kontrola neprázdnosti výřezů.
- Stahování: `scripts/mza_tiles.py` (převzat z 1. kola, uložen v projektu), curl na dlaždice IIPImage; URL dlaždic brány z prohlížeče (JS g_viewer/world…; v tomto běhu má prohlížeč globál `g_viewer`, nikoli `viewer` jako v 1. kole).
- Generátor webu: `scripts/build_web.py`; validace dat: `scripts/validace_dat.py` (vytvořeny v tomto kole).

## Blok 0 – data a web (cca 19:30–21:05 UTC)
- Sloučeny osoby 1. kola (P1–P10) s kontextem (rodokmen-forejtnik-kontext.md): 16 osob, u každého údaje vyznačena provenience (matrika/dokument/prepis/odhad/hypotéza/rozpor). Nové osoby: Miroslav (P11), Jaroslav Josef (P12), Emilie (P13), Cyril Kosek (P14), Alžběta Trpělková (P15), Josef Dobrovolný (P16).
- OPRAVA metadat z kontrolního listu: kniha 2755 (URL detail/12400) = oddací 1883–1948 (oba sňatky 1883 i 1921); kniha 2754 (URL detail/2755) = oddací 1848–1882. Opraveno v datech i na webu.
- Vygenerován a otestován web přes file:// (viz OVERENI.md): úvod, strom, karty, hledání bez diakritiky, galerie s lightboxem, časová osa, deník, mobil 390 px. Chyba routeru (cesta vs. query) nalezena testem a opravena. Checkpoint 1: rodokmen-web.zip.

## Blok 1 – ověření rejstříku sňatků 2786 (PR-G) (cca 21:05–21:50)
- detail/15190 (kniha 2786 = rejstřík oddaných 1883–1949), snímek 9. Snímek složen (L11 + cílené výřezy L13 prvního řádku).
- **ÚSPĚCH – PR-G přímo ověřen obrazem:** 1. řádek rejstříku: „1883, 5. února, [Forejtník] Karel a Veselá Rozalie, Klobouky, str. 6“ (2 nezávislá čtení datumové i jmenné buňky; den křtěn „5. úno…“, jména „Foretník Karel a Veselá Rozalie“). Datum 5. 2. 1883 a strana 6 sňatku Karla a Rozálie nyní podpořeny přímým čtením rejstříku (stav: pravděpodobné → doložené rejstříkem).
- Vedoucí nález (nová stopa, ne předek): 2. řádek rejstříku: „1884, 26. [měsíc], Foretník Josef a [Kudriovská/Kudiovská] Barbora, Klobouky, str. 10“ – jiný Josef Forejtník (náš Josef zemřel před 2/1883 dle „rodiče mrtvi“); nejspíš bratr Karla nebo příbuzný. Vede k webovému deníku, ne do stromu.

## Blok 2 – hledání sňatků rodičů (Josef+Veronika, Jakub+Antonie) přes rejstřík 2785 (cca 21:50–00:30)
- detail/2774 = kniha 2785, „Index oddaní 1819–1882“, 56 snímků. Struktura knihy velmi heterogenní: německý abecední rejstřík („Alphabetisches Repertorium über das Trauungsbuch“), prokládán chronologickými stránkami („Anno 1819…“), později české stránky („Jména oddaných“). VLM čtení nadpismených struktur nespolehlivá; sekce lokalizovány empiricky:
  - snímek 9 levá: sekce A–C (české zápisy, roky 1870–1882)
  - snímek 12 levá: **sekce F** (roky 1838–1881, řádky čteny), pravá: pokračování F („Ad lit. F“), včetně řádku 1881 „Forelník Franz + Čapek Terezie“
  - snímek 13 pravá: sekce G–S (čteno: „1838 Gmündl Anna…“, „1881 Geč František a Kalvoda Amalie“)
  - snímek 14 pravá: chronologická strana (Anno 1819–1824)
  - snímek 16 levá: sekce S pokračování (1838–1839, strany knihy 119–182)
  - snímek 16/17 pravá: český rejstřík (J, roky 1849–1870s, „1868 Hanzlíček Josef s Terezií Haas“)
  - snímek 18 levá: české zápisy 1879 („Haman Barbora a Ceřina Josef“)
- **Sekce F proskennována (levá strana sn. 12, pruh y 300–1450):** řádky 1838–1881 vyčteny strukturálně (rok, křestní jména čtena nejspolehlivěji, příjmení kolísala: „Forstnik/Jorelnik/Forelník“ = Forejtník). Řádek 1: „1838, ~20.–26. 2., Josef F[orejtník?] + nevěsta NEČITELNÁ, str. 109“.
  - **V žádném vyčteném řádku sekce F není nevěsta Veronika** (jediná Veronika ~1875 jako nevěsta jiného Forejtníka). Řádky 1844–1848, 1854–1856, 1858–1860, 1864–1867 VLM vynechal – slabé pokrytí.
- **Oddací kniha 2753 (1819–1847), detail/2754, snímek 55 pravá = začátek roku 1838:** zápis č. 1 z 30. 1. 1838 (Laurentius?/Andreas? + Barbara?). Oblast zápisu č. 2 (únor) čtena 3× s rozpornými výsledky (ženich „Josef, tkadlec?, otec Matěj?, matka Anna?“; nevěsta + rodiče „Jiřík?/Johanna?“). Nesouhlasí s očekávaným párem (Josef čtvrtláník + Veronika dc. Václava Vystoupila) → **SP-2 v sporna_cteni.json, hledání zastaveno podle pravidla 3 rozporných čtení.**
- Závěr bloku 2: sňatek Josefa+Veroniky NENALEZEN ani vyloučen. Slabý kandidát: řádek F 1838 (ženiš Josef F…) s nečitelnou nevěstou. Jakub+Antonie: sekce V nebyla lokalizována před vyčerpáním trpělivosti serveru (throttling IIPImage: celé řady dlaždic selhávaly); hledání přerušeno, obnovit v budoucnu u snímků 17–20.
- Překážky: IIPImage server začal omezovat požadavky (~40+ dlaždic/min) – zavedeny prodlevy; kurent 1830. let pro VLM téměř nečitelný; struktura knihy 2785 heterogenní (německý abecední + chronologický + český rejstřík pomíchané) – každá strana musí být identifikována zvlášť.

## Blok 3 – Anna Dobrovolná (narození 27. 6. 1900) + sňatek Kosků (plán)
- Cíl: kniha 2736 (narození 1883–1925), rok 1900 → odhad snímku ~80 (1895 = sn. 63); hledat zápis Anny, otce Josefa Dobrovolného (zedník), rodiště.
- Dále: detail/258 (sňatek Cyrila Koska a Alžběty Trpělkové 25. 6. 1919, snímek 490) – dokončit přepis.

## Blok 3 – narození Anny Dobrovolné 27. 6. 1900 (kniha 2736) (~00:30–01:30 UTC)
- Kalibrace knihy narozených 2736 (narození 1883–1925): sn. 85 = rok 1898 (str. 164), sn. 92 = str. 178–179 (leden–květen ~1900), sn. 93 = str. 180–181 (červen–červenec 1900), sn. 99 = str. 192–193 (konec 1900), sn. 100 = str. 194–195 (přelom 1900/1901). Roky přečteny kombinovaně z hlaviček a záhlaví (VLM čtení číslic kolísala, kalibrace provedena na třech bodech).
- Strany 180–181 (sn. 93) proskennovány (přehled + pravá strana L12 + výřezy): zápisy z 2./13./17./24. 6. a 19./20./21. 6. a 1./4./5. 7. 1900, otcové čteni např. Kaban, Kovář, Čížek – **zápis Anny Dobrovolné NENALEZEN** (slabý negativní výsledek; jiné farnosti neprohledány).
- **Řešení přes jiný pramen – ÚSPĚCH:** rodný zápis syna Jaroslava (PR-B) obsahuje u matky poznámku „nar. 27/6. 1900“ (přečteno přímo) a u otce matky „Josef Dobro[volný], zed[ník] v Kloboukách“ – datum narození Anny a povolání jejího otce tak doloženy ze dvou matrik (PR-B + PR-C). Rodiště Anny však Nadále neověřeno (viz O4).

## Blok 4 – sňatek Bohuslava a Anny 1921 (PR-C) + rodný zápis Jaroslava (PR-B) (01:30–02:30 UTC)
- PR-C (kniha 2755, sn. 85, str. 172): přehled L11 + střed + spodek strany v L13. Přečteno přímo: „26. dubna 1921, Klobouky; ženich Bohuslav Forejtník [v čteních „Josefík/Forejtník Bohuslav“], stolař („Solař“) v Břeclavi, zákonný syn Karla Forejtníka, domkáře v Kloboukách, a Rozálie rozené Veselé; nevěsta Anna Dobrovolná („…volná“), 20 let, dcera Josefa Dobrovolného, zedníka v Kloboukách; svědci Rudolf Forejtník + Josef Dobrovolný (domkář č. 205)“. Datum narození nevěsty v zápisu čten rozporně (27/6 1900 2×, 27/6 1901 1×, 1. 1. 1901 1×) → SP-3 v sporna_cteni.json.
- PR-B (kniha 2736, sn. 207, levá strana dole): celý řádek v L13 + chirurgické výřezy sloupců. Přečteno přímo: narozen 29. 11. 1921 (den „29“ po znacích), legitimní; otec Bohuslav Forejtník, stolař, se svými rodiči (Karel domkář + Rozálie rozená Veselá, dcera Jakuba) a „nar. 3. 1. 1895, oddán v Kloboucích“; matka Anna Dobrovolná „nar. 27/6. 1900, dcera Josefa Dobrovolného, zedníka v Kloboukách, a [Jany?] rozené [Tihlářové?]“; poznámka „oddáni v Kloboukách dne 26. dubna 1921“ (2×). Pořadové číslo zápisu kolísalo 34/35; jméno matky Anny (babičky) čteno zásadně rozporně (Tihlářová? / Klačinová?) → SP-3/SP-4.

## Blok 5 – přepis sňatku Kosků 1919 (PR-F) – BLOKOVÁNO (02:30–03:30 UTC)
- Kniha 3443 (oddací Tvrdonice 1909–1925, 95 snímků), snímek 49 (podle URL z kontextu). Překážky:
  1) Dlaždicový server IIPImage začal po větším objemu požadavků vracet curl požadavkům prázdné PNG dlaždice (181 B); prohlížeč (Playwright/Chromium) obrázky zobrazoval normálně. Zkoušeny varianty s Referer a session cookie bez úspěchu; po ~30–40 minutách se server obnovil.
  2) Sken knihy 3443 má nízké rozlišení (1123×1766 px na stránku) – i na nativním rozlišení VLM četl jména zásadně rozporně: „Cyril Kosec (27, hospodář, Tvrdonice; otec Jan Kosec? + Anna Škaroupková?) × Anežka Tesařová (23; Josef Tesař? + Marie Holubová?)“ vs. „Janelib Franciska…“ vs. „Josef Tejšer × Marie Pospíšilová“…
  - Shodné napříč čteními: datum 25. června 1919 a ženich Cyril Kose[c]k (souhlasí s převzatým přepisem kontextu). Ostatní pole nezontákladně rozporná → SP-4 v sporna_cteni.json; PR-F zůstává v provenienci „prepis“, E7 zůstává hypotézou.
- Vedle: kniha 2785 – hledání sekce V (Veselý) pro Jakuba Veselého + Antonii Halmovou nedokončeno (struktura knihy heterogenní: německý abecední rejstřík na levých/pravých stranách prokládán chronologickými a českými stranami; sekce S lokalizována na sn. 16 levé → V bude mezi sn. 16–20). Dlaždicový server mezitím omezoval stahování.

## Blok 6 – finalizace (03:30–04:30 UTC)
- Data JSON aktualizována (PR-B, PR-C, PR-G → provenience „matrika“ s přepisy a výřezy; P9, P12, P16 aktualizovány; 7 nových položek galerie; otázky O2–O5 přeformulovány podle výsledků; přírůstky 2. kola).
- Web přegenerován (52 obrázků) a retestován přes file:// (hlavní strana, strom, karta Anny – odznak „matriční zápis“, galerie 25 položek/5 skupin, lightbox G19 vč. odkazu do archivu a Escape, hledání „vesela“ = 2 výsledky, mobil 390 px). Screenshoty v nahledy/.
- Finální balíčky: rodokmen-web.zip (přenositelný web), rodokmen-projekt.zip (celý projekt), SOUHRN_KOLO2.md, OVERENI.md, sporna_cteni.json (4 sporná místa).

## Překážky celkem (pro případné navázání)
1. **IIPImage throttling:** server po ~200–400 stáhnutých dlaždicích začal vracet prázdné 181B PNG dlaždice na curl (bez ohledu na Referer/cookie); po přestávce ~30–45 min vše fungovalo znovu. Prohlížečové načítání Tiles fungovalo i během blokace (jiný TLS/HTTP stack).
2. **glm-5v-turbo:** kurent 30.–40. let 19. století prakticky nečitelný; české zápisy 20. století čitelné dostatečně. Suggestibilita potvrzena (neutralní dotazy dodržovány).
3. **Kniha 2785:** heterogenní struktura (abecední + chronologické + české strany pomíchané) – mapování sekci vyžaduje stránku po stránce.
4. **Kniha 3443:** sken v nízkém rozlišení – přepis bez lidského čtení nereálný.
