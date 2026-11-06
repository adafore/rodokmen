# Převzetí dosavadních výsledků GLM – 2. 11. 2026

Pokyn uživatele: pouze pozbírat výsledky, **nezadávat další práci**.
Nové prompty: **0**. Genealogická data, web, NAS a GitHub se neměnily.

| Balík | Ověřený stav převzetí | Původ |
| --- | --- | --- |
| A – Dobrovolní | Celá závěrečná odpověď uložena; ZIP přijat (50 souborů) | [Chat](https://chat.z.ai/c/1601d1cd-41d1-45ed-a2c1-9b8183692efb) |
| B – Forejtník / Vystoupil | Ztracený živý přenos, bez závěrečného výsledku; zachován starší průběh | [Chat](https://chat.z.ai/c/8ddf2409-2744-42e7-8892-6f08a06db675) |
| C – Veselý / Halm | Ztracený živý přenos, bez závěrečného výsledku; zachován starší průběh | [Chat](https://chat.z.ai/c/1085328e-48be-41b9-905a-506900e96578) |
| D – Kosek / Trpělka | Celá závěrečná odpověď uložena; ZIP přijat (26 souborů) | [Chat](https://chat.z.ai/c/303d6e3e-1ea2-4f8c-ba2c-2afac9963adb) |
| E – Nezávislá kontrola pramenů | Po chybě kapacity zůstalo zadání v editoru (7160 znaků); žádný badatelský výstup | [Chat](https://chat.z.ai/c/84c92793-ec1a-4e17-b18f-20e0bffb6225) |
| F – Mapa chybějících větví | Celá závěrečná odpověď uložena; ZIP přijat (18 souborů) | [Chat](https://chat.z.ai/c/51d0cb2a-9c4e-4f68-9f8e-2ca2d36e0a7f) |

## Skutečně převzaté soubory

- `03_A_DOBROVOLNI_A3_final.zip`: 34,910,264 B, 50 souborů; ZIP CRC bez chyb, 2 JSON načteny, 40 obrazů dekódováno; manifest: 49 kontrol, shoda True. SHA256 `d5a3959f558b1f1e2c3546dae6f768e96f2f8f86487c95c1131ca4db8708f309`.
- `D_KOSEK_TRPELKA_VYSLEDKY.zip`: 7,856,197 B, 26 souborů; ZIP CRC bez chyb, 6 JSON načteny, 7 obrazů dekódováno; manifest: 25 kontrol, shoda True. SHA256 `83144d97d5ef304174f82a4b579b3fb0de0dce77c83689ca2e9f17d3e400f415`.
- `F_MAPA_CHYBEJICICH_VETVI_FINAL_v1.zip`: 39,638 B, 18 souborů; ZIP CRC bez chyb, 4 JSON načteny, 0 obrazů dekódováno; manifest: 20 kontrol, shoda False. SHA256 `67f01ff7315b5dd9fd1501db00acac59dc7fb9cd8e7ad59714d1240b10c2ea84`.
  - Manifest uvádí také nepřiložené samostatné dílčí archivy: `F_MAPA_CHYBEJICICH_VETVI_F1_v1.zip`, `F_MAPA_CHYBEJICICH_VETVI_F2_v1.zip`, `F_MAPA_CHYBEJICICH_VETVI_F3_v1.zip`. Kontrolní součty všech skutečně vložených obsahových souborů souhlasí. Hash finálního F ZIPu odpovídá dodanému VYSLEDKY_SHA256.csv. Nejde o zjištěné poškození ZIPu; nepotvrzené zůstaly jen tři nezískané starší balíky.

Starší checkpointy A1/A2 a dodaný D2 jsou zvlášť v `checkpointy/`; jejich ZIP integrita a SHA256 byly ověřeny. Nenahrazují finální verze. Rozbalené finální výstupy jsou v `rozbaleno/`, původní přijaté ZIPy v `archivy/`. Samostatný dodaný D2 Markdown a externí manifest F jsou byte-identické se soubory ve finálních ZIPech. CSV potvrzuje hash finálního F archivu. Všechny samostatné přílohy jsou zachované v `prilohy_od_uzivatele/`. Přesné kontroly obsahuje `KONTROLA_ARCHIVU.json`.

Celé skutečné závěrečné odpovědi A, D a F jsou v `*_odpoved_cela.txt`; odpovědi byly zaznamenány přes AgentClient.submit do Bridge. Toto přijetí potvrzuje dokončení generování odpovědi, nikoli správnost genealogických tvrzení nebo úspěch všech badatelských úkolů. D výslovně odevzdal pro části D2/D3 hlavně plán a překážky, nikoli nově nalezené narozené zápisy.

B/C nemají po načtení uloženého chatu finální odpověď ani seznam výsledných souborů. C byl jednou obnoven, chyba zůstala. Nebyly regenerovány. Dříve zachycené pracovní průběhy jsou uchovány s původem, nejsou vydávány za novou závěrečnou odpověď. E má v aktuálním chatu pouze původní čekací potvrzení; to NENÍ výsledek zadané kontroly. Návrh v editoru zůstal nedotčený.

## Co je připraveno ke věcné kontrole

- A uvádí nález sňatku rodičů Anny (1899) a narození Genovéfy (1877) a opravuje dřívější čtení dat. Jde o návrhy GLM s přiloženými obrazy; nepromítnuto do stromu, rozpory a přepisy vyžadují kontrolu.
- D odevzdává nový přepis kandidátního sňatku 1919. Spojení s Emilií narozenou 1924 zůstává nedoložené. Popis „ztracených 05_* souborů“ je zavádějící: tyto skutečné soubory nikdy nebyly v jeho vstupním ZIPu, pouze je zmiňoval neověřený dřívější text. Číslo detailu katalogu v jeho souhrnu také vyžaduje kontrolu.
- F počítá pokrytí a doporučuje rodinné doklady. Zkratky typu „PR-B=PR-D“ ze shodné adresy knihy nelze přijmout jako důkaz totožného záznamu nebo automatické neexistence nezávislého dokladu. Různé zápisy v téže knize je nutné rozlišovat. Katalogové ID detailu také není číslo knihy.

Neprováděl se nový archivní výzkum ani změna modelů. Žádný další blok nebyl odeslán. Stav chatů B/C/E vychází z předchozí kontroly při sběru, nikoli z nového načtení při dodání ZIPů. Časový údaj „2026-11-03“ uvnitř F manifestu je tvrzení GLM, nikoli datum místního převzetí; místní převzetí proběhlo 2. 11. 2026. Stav je uložen v `STAV_PREVZETI.json` a v pracovních rozcestnících Bridge.
