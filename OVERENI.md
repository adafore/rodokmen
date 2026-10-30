# OVERENI – provedené kontroly, 2. kolo (finální stav, 30. 10. 2026)

## Prostředí testování
- Stejné jako v checkpointu 1: headless Chromium (agent-browser/Playwright) na Linuxu, otevírání webu přes protokol `file://` (způsob „dvojklik na index.html“), šířky 1440 px (desktop) a 390 px (mobil).
- Čtení matrik: vizuální model glm-5v-turbo (`z-ai vision`) – jediný dostupný vizuální model v prostředí (CLI neumožňuje výběr jiného); přepisy jsou pracovní strojové čtení, nikoli lidské ověření.
- Časy v dokumentech jsou UTC podle systémových hodin prostředí.

## Automatické kontroly dat (skriptem, opakovatelné)
| Kontrola | Výsledek |
|---|---|
| `data/rodokmen_data.json` i `data/rodokmen_data_verejny.json` syntakticky platné | OK |
| Unikátnost ID napříč kolekcemi | OK (žádné duplicity) |
| Reference otec/matka/partner/zdroj/pramen existují | OK (automatická kontrola) |
| Symetrie partnerství | OK |
| Existence každého odkazovaného souboru důkazu na disku (galerie + prameny + události) | OK (52 souborů) |
| `sporna_cteni.json` platné JSON | OK (4 sporná místa SP-1 až SP-4) |
| Počty: 16 osob, 7 událostí, 18 vztahů, 7 pramenů, 25 položek galerie, 7 otázek | OK |

## Funkční testy webu – checkpoint 1 (první verze) i finální přegenerování
| Test | Výsledek cp1 | Výsledek finální |
|---|---|---|
| Otevření přes file://, žádné JS chyby | OK | OK |
| Úvod: statistiky počítané z dat (16 osob, 6 generací) | OK | OK |
| Strom: 16 uzlů, neznámí rodiče jako placeholdery | OK | OK |
| Seznamová alternativa stromu | OK (19 řádků) | OK |
| Vyhledávání „vesela“ bez diakritiky | OK (2 výsledky) | OK (2 výsledky) |
| Karta osoby po kliknutí z hledání | OK (opravena chyba routeru, viz deník) | OK |
| Sdílený odkaz #/osoba/P3 po novém otevření prohlížeče | OK | – |
| Karta Anny Dobrovolné: odznak data narození | „pracovní přepis“ | **„matriční zápis“** (po novém doložení z PR-B + PR-C) |
| Galerie: karty / skupiny | 18 / 4 | **25 / 5** |
| Lightbox nové položky G19 (rejstřík 1883): titulek, odkaz do archivu, viditelné tlačítko Zavřít, Escape | OK | OK |
| Časová osa: 7 událostí, 2 odlišené jako pravděpodobné/hypotetické | OK | OK |
| Deník: 7 otázek, přírůstky | OK (3) | OK (9) |
| Klávesnice: uzel stromu + Enter otevře kartu | OK | – |
| Lightbox: Tab drží fokus na Zavřít | OK | – |
| Mobil 390 px: hlavička se zalamuje, strom posouvatelný, seznam bez přetékání | OK | OK (screenshot) |

Screenshoty: `nahledy/` (test01–test08 z checkpointu 1; finální: hlavni_stranka.png, strom.png, karta_osoby_Anna.png, galerie.png, otevreny_dukaz.png, strom_mobil.png).

## Ověření balíčků ZIP
| Kontrola | rodokmen-web.zip | rodokmen-projekt.zip |
|---|---|---|
| index.html v kořeni ZIP | OK | OK (README.md + celý projekt) |
| Po rozbalení web funguje přes file:// (proklikáno znovu z rozbalené kopie) | OK | – (web uvnitř je tatáž složka) |
| Žádné absolutní cesty `/home/z/...` v HTML/CSS/JS/data.js | OK (grep) | OK (grep) |
| Všechny odkazované obrázky v ZIP přítomny | OK | OK |
| Skripty projektu přibaleny (mza_tiles.py z 1. kola, build_web.py, vlm.py, export_verejny.py, validace) | – | OK |

## Limity a poctivá prohlášení
- Všechny přepisy matrik vznikly strojovým čtením (glm-5v-turbo). U 20. století čitelnost dobrá; u kurentu 30.–40. let 19. století čtení nespolehlivá – tato místa jsou vedená v `sporna_cteni.json` a NEJSOU použita jako doložené vazby.
- Nově doložené údaje (PR-B, PR-C, PR-G) vycházejí z konzistentních opakovaných čteních klíčových buněk; u rozporných polí (rok narození Anny 1900 vs. 1901, jméno její matky) zůstávají v datech nejistoty explicitně vyznačeny.
- Negativní výsledky (hledání narození Anny v Kloboukách načervenci 1900, sekce V rejstříku, přepis Kosků) NENÍ důkaz neexistence zápisu – viz deník a otázky O2–O5.
- Testoval jsem headless prohlížečem (Chromium); Firefox/Safari reálně netestovány (používají se jen standardní webové technologie bez modulů/fetch, žádná známá file:// rizika).
- Veřejný export (`scripts/export_verejny.py`, `data/rodokmen_data_verejny.json`) omezuje osoby bez doloženého úmrtí narozené od 1900 (a s neznámým rokem narození) – 7 osob vynecháno; nikdo není prohlašován za zemřelého.
