# STAV – závěrečný stav 2. kola (30. 10. 2026, ~04:45 UTC)

## Co funguje a kde otevřít web
- **Hotový web:** `web/index.html` v projektu `glm_rodokmen_kolo2` (nebo rozbalený `rodokmen-web.zip`) – otevíratelný
  dvojklikem přes file://, bez serveru a bez internetu. Přenositelný balíček: `download/rodokmen-web.zip`.
- Kompletní projekt včetně důkazů a deníku: `download/rodokmen-projekt.zip`.
- Web obsahuje 16 osob, 7 událostí, 25 důkazů v galerii, 7 pramenů; přegenerován po nových nálezech 2. kola
  a retestován přes file:// (OVERENI.md).

## Poslední dokončený checkpoint
- **Finální balíčky 2. kola** (30. 10. ~04:45 UTC): oba ZIPy + SOUHRN_KOLO2 + OVERENI + sporna_cteni.json (4 místa).

## Poslední ověřené nálezy (2. kolo)
1. PR-G rejstřík 2786: „1883, 5. února, Forejtník Karel a Veselá Rozalie, str. 6“ – přečteno přímo (datum sňatku 1883 podpořeno).
2. PR-C sňatek Bohuslav + Anna 26. 4. 1921 – přečteno přímo (rodiče obou, svědci).
3. PR-B rodný zápis Jaroslava 29. 11. 1921 – přečteno přímo (den 29 po znacích; rodiče; „oddáni 26. dubna 1921“).
4. Anna Dobrovolná „nar. 27/6. 1900, dcera Josefa Dobrovolného, zedníka“ – doloženo ze dvou matrik.
5. Rodiče Karla i Rozálie mrtví před 2/1883 („rodiče katolíci a mrtvi“) – doplněno do dat.

## Otevřené otázky (podrobně v data/rodokmen_data.json → otazky; rozporná čtení v sporna_cteni.json)
- O1 narození Karela a Rozálie (~1853/54); O2 sňatek Josef+Veronika (kandidát 1838, nedorozhodnuto);
  O3 sňatek Jakub+Antonie (sekce V rejstříku nenalezena, hledat sn. 16–20 knihy 2785); O4 rodiště Anny;
  O5 vazba Kosků na Emilii; O6 detaily křtu Bohuslava; O7 folio 221 vs 231.

## Poslední pozice v archivech
- Rejstřík oddaných 2785 (detail/2774): sekce F = sn. 12 levá; G–S ≈ sn. 13–15; S pokračuje sn. 16 levá;
  chronologické strany od sn. 14 pravé; český rejstřík od sn. 16/17 pravé (sekce J 1849–1870s). Sekce V → snímky 16–20.
- Oddací 2753 (detail/2754): rok 1838 začíná sn. 55 pravá (zápis č. 1 z 30. 1. 1838); str. 108–109 = sn. 56.
- Narozené 2736 (detail/14893): rok 1898 ≈ sn. 85 (str. 164), červen–červenec 1900 = sn. 93 (str. 180–181),
  konec 1900 = sn. 99 (str. 192–193).
- Tvrdonice oddací 3443 (detail/258): sňatek Kosků = sn. 49; sken v NÍZKÉM rozlišení (1123×1766) – bez lepších
  nástrojů nečitelný.
- URL dlaždic vždy z prohlížeče (g_viewer). POZOR: IIPImage po ~200–400 dlaždicích vrací curl požadavkům
  prázdné PNG; po ~30–45 min se obnoví.

## Nejbližší proveditelný krok pro navazujícího agenta
1. Lidsky/lepším modelem přečíst: 1. řádek sekce F (rejstřík 2785, sn. 12 levá) a zápis č. 2/1838 (kniha 2753,
   sn. 55 pravá) – rozhodnout, zda jde o Josefa Forejtníka + Veroniku Vystoupilovou (otázka SP-1/SP-2).
2. Najít sekci V v knize 2785 (sn. 16–20) → sňatek Jakuba Veselého + Antonie Halmové.
3. Emiliin rodný zápis (Kostice 10. 5. 1924) v narozeních Tvrdonice → propojit Koskovu větev.

## Věta pro obnovení relace
„Projekt glm_rodokmen_kolo2 je hotový včetně webu a obou ZIPů; navazuj podle STAV.md bodu ‚Nejbližší proveditelný krok‘ –
nejprve sporná čtení SP-1/SP-2 (rejstřík 2785 sn. 12 levá + kniha 2753 sn. 55 pravá).“
