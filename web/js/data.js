// Vygenerováno scripts/build_web.py z data/rodokmen_data.json – needitovat ručně.
var RODOKMEN_DATA = {
 "meta": {
  "nazev": "Rodokmen Forejtníků",
  "podtitul": "Soukromý rodinný archiv z matrik Moravského zemského archivu v Brně",
  "vychozi_osoba": "P17",
  "verze": "Aktualizace 5. 11. 2026 – větve Němčičky (Cvan, Stávek, Kameník) a Klobouky u Brna",
  "aktualizace": "2026-11-05",
  "poznamka": "Přepisy matrik vznikly strojovým čtením obrazu (VLM); u každého údaje je uvedena provenience. Neznámé údaje jsou prázdné – nic se nedoplňuje odhadem."
 },
 "provenience": {
  "matrika": {
   "label": "matriční zápis",
   "popis": "Údaj přečtený přímo z rukopisu matričního zápisu; snímek a přepis v galerii důkazů.",
   "trida": "prov-matrika"
  },
  "dokument": {
   "label": "rodinný dokument",
   "popis": "Údaj z dodaného rodinného dokumentu (rodný list), nikoli z archivní matriky.",
   "trida": "prov-dokument"
  },
  "prepis": {
   "label": "pracovní přepis",
   "popis": "Údaj převzatý z pracovního přepisu předchozího bádání; rukopis v tomto projektu zatím nebyl znovu ověřen obrazem.",
   "trida": "prov-prepis"
  },
  "odhad": {
   "label": "odhad",
   "popis": "Údaj odvozený nepřímo (např. rok narození z věku při sňatku). Není doklad.",
   "trida": "prov-odhad"
  },
  "hypoteza": {
   "label": "hypotéza",
   "popis": "Pravděpodobná, ale dosud nedoložená vazba či událost.",
   "trida": "prov-hypoteza"
  },
  "rozpor": {
   "label": "rozpor",
   "popis": "Nevyřešený rozpor mezi prameny nebo čteními.",
   "trida": "prov-rozpor"
  },
  "sdeleni": {
   "label": "rodinné sdělení",
   "popis": "Jméno nebo příbuzenská vazba sdělená a potvrzená rodinou; zatím bez ověření rodným listem nebo matrikou.",
   "trida": "prov-dokument"
  }
 },
 "osoby": [
  {
   "id": "P17",
   "jmeno": "Miroslav Forejtník",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P11",
   "matka": "P30",
   "partneri": [
    "P18"
   ],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Syn Miroslava Forejtníka staršího (*26. 4. 1954) a Marie Forejtníkové, rozené Kameníkové. Otec Adama a Ondřeje Forejtníků.",
   "nejistoty": [],
   "role": "výchozí osoba rodokmenu; otec Adama a Ondřeje"
  },
  {
   "id": "P18",
   "jmeno": "Hana Forejtníková",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [
    {
     "nazev": "školní a dětská psycholožka (Hustopeče)",
     "provenience": "sdeleni"
    }
   ],
   "otec": "P31",
   "matka": "P32",
   "partneri": [
    "P17"
   ],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Matka Adama a Ondřeje Forejtníků, dcera Milana Cvana a Marie Cvanové, rozené Stávkové z Němčiček. Školní a dětská psycholožka v Hustopečích.",
   "nejistoty": [],
   "rodne_prijmeni": "Cvanová",
   "foto": "img/portrety/P18.jpg"
  },
  {
   "id": "P19",
   "jmeno": "Adam Forejtník",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P17",
   "matka": "P18",
   "partneri": [],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Syn Miroslava Forejtníka a Hany Forejtníkové, rozené Cvanové, podle rodinného sdělení.",
   "nejistoty": [],
   "foto": "img/portrety/P19.jpg"
  },
  {
   "id": "P20",
   "jmeno": "Ondřej Forejtník",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P17",
   "matka": "P18",
   "partneri": [],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Syn Miroslava Forejtníka a Hany Forejtníkové, rozené Cvanové, podle rodinného sdělení.",
   "nejistoty": [],
   "foto": "img/portrety/P20.jpg"
  },
  {
   "id": "P11",
   "jmeno": "Miroslav Forejtník starší",
   "role": "otec Miroslava Forejtníka",
   "narozeni": {
    "datum": "1954-04-26",
    "presnost": "den",
    "provenience": "dokument"
   },
   "umrti": null,
   "misto_narozeni": {
    "nazev": "Valtice, nemocnice",
    "provenience": "dokument"
   },
   "povolani": [],
   "otec": "P12",
   "matka": "P13",
   "partneri": [
    "P30"
   ],
   "zdroje": [
    "PR-A",
    "PR-B"
   ],
   "poznamka": "Rodný list vystaven 28. 4. 1954 (MNV Valtice, okres Mikulov). Jméno otce a matky přímo v dokumentu.",
   "nejistoty": [],
   "vyrez_rukopisu": "img/dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg"
  },
  {
   "id": "P12",
   "jmeno": "Jaroslav Josef Forejtník",
   "narozeni": {
    "datum": "1921-11-29",
    "presnost": "den",
    "provenience": "matrika"
   },
   "umrti": null,
   "misto_narozeni": {
    "nazev": "Klobouky u Brna",
    "provenience": "matrika"
   },
   "povolani": [],
   "otec": "P3",
   "matka": "P9",
   "partneri": [
    "P13"
   ],
   "zdroje": [
    "PR-B",
    "PR-A"
   ],
   "poznamka": "Druhé křestní jméno Josef. Zápis narození ověřen obrazem (PR-B): narozen 29. 11. 1921 v Kloboukách, otec Bohuslav Forejtník, stolař, matka Anna Dobrovolná; poznámka v zápisu odkazuje na sňatek rodičů 26. 4. 1921 (přečteno 2×).",
   "nejistoty": [
    "Pořadové číslo zápisu kolísalo při čteních mezi 34 a 35 (převzatý přepis uvádí 35).",
    "Den křtu nedočten spolehlivě."
   ],
   "vyrez_rukopisu": "img/dukazy/B2736_radka_jmeno.jpg"
  },
  {
   "id": "P13",
   "jmeno": "Emilie Forejtníková",
   "narozeni": {
    "datum": "1924-05-10",
    "presnost": "den",
    "provenience": "dokument"
   },
   "umrti": null,
   "misto_narozeni": {
    "nazev": "Kostice",
    "provenience": "dokument"
   },
   "povolani": [],
   "otec": "P14",
   "matka": "P15",
   "partneri": [
    "P12"
   ],
   "zdroje": [
    "PR-A"
   ],
   "poznamka": "Údaje o narození a rodičích (Cyril Kosek, Alžběta Trpělková) uvedeny v rodném listu syna Miroslava z roku 1954.",
   "nejistoty": [],
   "vyrez_rukopisu": "img/dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg",
   "rodne_prijmeni": "Kosková"
  },
  {
   "id": "P3",
   "jmeno": "Bohuslav Forejtník",
   "narozeni": {
    "datum": "1895-01-03",
    "presnost": "den",
    "provenience": "matrika"
   },
   "krest": {
    "datum": "1895-01-06",
    "presnost": "den (nejistý)",
    "providence": null,
    "provenience": "matrika"
   },
   "umrti": null,
   "misto_narozeni": {
    "nazev": "Klobouky u Brna",
    "provenience": "matrika"
   },
   "povolani": [
    {
     "nazev": "stolař (v Břeclavi)",
     "provenience": "prepis"
    }
   ],
   "otec": "P1",
   "matka": "P2",
   "partneri": [
    "P9"
   ],
   "zdroje": [
    "PR-D",
    "PR-C",
    "PR-B"
   ],
   "poznamka": "Zápis narození přímo ověřen obrazem (PR-D): narozen 3. 1. 1895 v Kloboukách, otec Karel Forejtník domkář, matka Rozálie Veselá. Okrajová poznámka zápisu odkazuje na sňatek s Annou Dobrovolnou v roce 1921.",
   "nejistoty": [
    "Den křtu: nezávislá čtení obrazu kolísala mezi 6./12./16./26. lednem 1895.",
    "Datum sňatku v okrajové poznámce: rok 1921 a jméno Anny Dobrovolné potvrzeny opakovaným čtením, den a měsíc nečitelné (oddací zápis PR-C uvádí 26. 4. 1921)."
   ],
   "vyrez_rukopisu": "img/dukazy/C_stred_zenich.jpg"
  },
  {
   "id": "P9",
   "jmeno": "Anna Dobrovolná",
   "narozeni": {
    "datum": "1900-06-27",
    "presnost": "den",
    "provenience": "matrika"
   },
   "umrti": null,
   "misto_narozeni": "Klobouky u Brna",
   "povolani": [],
   "otec": "P16",
   "matka": "P21",
   "partneri": [
    "P3"
   ],
   "zdroje": [
    "PR-C",
    "PR-D",
    "PR-B",
    "PR-J"
   ],
   "poznamka": "Narození 27. 6. 1900, křest 29. 6. 1900; zápis v knize 2736, snímek 96, fol. 187. Rodiče Josef Dobrovolný a Genovéfa Tihlaříková. Sňatek rodičů v poznámce: 4. 10. 1899.",
   "nejistoty": [
    "Původní GLM souhrn zaměnil datum křtu 29. 6. za opravu narození. Datum narození 27. 6. se při kontrole nemění."
   ],
   "vyrez_rukopisu": "img/dukazy/C_stred_nevesta.jpg"
  },
  {
   "id": "P14",
   "jmeno": "Cyril Kosek",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P15"
   ],
   "zdroje": [
    "PR-A",
    "PR-F"
   ],
   "poznamka": "Otec Emilie dle rodného listu Miroslava (PR-A). V archivu nalezen oddací zápis Cyrila Koska s Alžbětou Trpělkovou z 25. 6. 1919 v kostické farnosti (PR-F) – shoda jmen a obce je silná, přímá návaznost na Emilii (narozenou 1924) však dosud doložena nebyla.",
   "nejistoty": [
    "Totožnost ženicha ze sňatku 1919 s otcem Emilie je pravděpodobná, nikoli doložená."
   ],
   "vyrez_rukopisu": "img/dukazy/F_sn49_zenich.jpg"
  },
  {
   "id": "P15",
   "jmeno": "Alžběta Trpělková",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P14"
   ],
   "zdroje": [
    "PR-A",
    "PR-F"
   ],
   "poznamka": "Matka Emilie dle rodného listu Miroslava (PR-A). Sňatek s Cyrilem Koskem 25. 6. 1919 (PR-F) – viz poznámku u Cyrila Koska.",
   "nejistoty": [
    "Totožnost nevěsty ze sňatku 1919 s matkou Emilie je pravděpodobná, nikoli doložená."
   ],
   "vyrez_rukopisu": "img/dukazy/F_sn49_nevesta.jpg"
  },
  {
   "id": "P1",
   "jmeno": "Karel Forejtník",
   "narozeni": {
    "odhad": true,
    "obdobi": "1853/1854",
    "zaklad": "věk 29 let uvedený při sňatku v únoru 1883",
    "provenience": "odhad"
   },
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [
    {
     "nazev": "domkář a obuvník v Kloboukách u Brna",
     "provenience": "matrika"
    }
   ],
   "otec": "P4",
   "matka": "P5",
   "partneri": [
    "P2"
   ],
   "zdroje": [
    "PR-E",
    "PR-D"
   ],
   "poznamka": "Ženich oddacího zápisu z 5. 2. 1883 (PR-E, přímo ověřen obrazem). Vlastní rodný zápis (~1853/54, kniha 2734) dosud nalezen nebyl – prohledaná folia 221–225 dala jen slabé negativní výsledky.",
   "nejistoty": [
    "Rok narození je pouze odhad z věku při sňatku.",
    "Rodiště neznámé (pravděpodobně Klobouky, ale nedoloženo)."
   ],
   "vyrez_rukopisu": "img/dukazy/ZB-4_zenich_sloupec.jpg"
  },
  {
   "id": "P2",
   "jmeno": "Rozálie Veselá",
   "narozeni": {
    "odhad": true,
    "obdobi": "1853/1854",
    "zaklad": "věk 29 let uvedený při sňatku v únoru 1883",
    "provenience": "odhad"
   },
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [
    {
     "nazev": "dělnice v Kloboukách u Brna",
     "provenience": "matrika"
    }
   ],
   "otec": "P7",
   "matka": "P8",
   "partneri": [
    "P1"
   ],
   "zdroje": [
    "PR-E",
    "PR-D"
   ],
   "poznamka": "Nevěsta oddacího zápisu z 5. 2. 1883 (PR-E, přímo ověřen obrazem). Oprava starších chybných přepisů: Veselá (nikoli „Vada“). Vlastní rodný zápis dosud nalezen nebyl.",
   "nejistoty": [
    "Rok narození je pouze odhad z věku při sňatku.",
    "Rodiště neznámé."
   ],
   "vyrez_rukopisu": "img/dukazy/ZB-4_nevesta_sloupec.jpg"
  },
  {
   "id": "P16",
   "jmeno": "Josef Dobrovolný",
   "narozeni": {
    "datum": "1873-08-04",
    "presnost": "údaj v zápisu dcery; vlastní rodný zápis nenalezen",
    "provenience": "matrika"
   },
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [
    {
     "nazev": "zedník v Kloboukách u Brna",
     "provenience": "matrika"
    }
   ],
   "otec": "P22",
   "matka": "P23",
   "partneri": [
    "P21"
   ],
   "zdroje": [
    "PR-C",
    "PR-B",
    "PR-J",
    "PR-K"
   ],
   "poznamka": "Zedník z Klobouk. Rodiče František a Mariana podle sňatku 1899. Datum 4. 8. 1873 je uvedeno v narození dcery Anny; vlastní rodný zápis Josefa nebyl nalezen.",
   "nejistoty": [
    "Datum narození je převzato z matričního údaje o rodiči, nikoli z jeho vlastního rodného zápisu.",
    "Křestní jméno František je u ženicha 1899 přeškrtnuto; nepřebírá se dvojité jméno."
   ],
   "vyrez_rukopisu": "img/dukazy/20261102_sn34_zapis_a.jpg"
  },
  {
   "id": "P4",
   "jmeno": "Josef Forejtník",
   "narozeni": null,
   "umrti": {
    "obdobi": "před 2/1883",
    "zaklad": "formule „rodiče katolíci a mrtvi“ v oddacím zápisu Karla a Rozálie z 5. 2. 1883 (PR-E, přečteno přímo)",
    "provenience": "matrika"
   },
   "misto_narozeni": null,
   "povolani": [
    {
     "nazev": "čtvrtláník v Kloboukách u Brna",
     "provenience": "matrika"
    }
   ],
   "otec": null,
   "matka": null,
   "partneri": [
    "P5"
   ],
   "zdroje": [
    "PR-E",
    "PR-D"
   ],
   "poznamka": "Otec Karla Forejtníka; uveden přímo v oddacím zápisu 1883 (PR-E) i zlomkem v rodném zápisu Bohuslava (PR-D). Musel se narodit nejpozději do poloviny 30. let 19. století, jinak o jeho věku není nic známo.",
   "nejistoty": [
    "Sňatek s Veronikou Vystoupilovou dosud nenalezen (oddací knihy 2753 / 2754)."
   ],
   "vyrez_rukopisu": "img/dukazy/ZB-4_rodice_zenicha.jpg"
  },
  {
   "id": "P5",
   "jmeno": "Veronika Forejtníková",
   "narozeni": null,
   "umrti": {
    "obdobi": "před 2/1883",
    "zaklad": "formule „rodiče katolíci a mrtvi“ v oddacím zápisu Karla a Rozálie z 5. 2. 1883 (PR-E, přečteno přímo)",
    "provenience": "matrika"
   },
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P6",
   "matka": null,
   "partneri": [
    "P4"
   ],
   "zdroje": [
    "PR-E",
    "PR-D"
   ],
   "poznamka": "Matka Karla Forejtníka. V matrice uvedena zkratkovitě „Veronika roz. Václava Vystoupila“ (rozená dcera Václava Vystoupila). Oprava staršího chybného přepisu: Vystoupilová (nikoli „Vystrčilová“).",
   "nejistoty": [
    "Rodiště i údaje o narození neznámé."
   ],
   "vyrez_rukopisu": "img/dukazy/ZB-4_rodice_zenicha.jpg",
   "rodne_prijmeni": "Vystoupilová"
  },
  {
   "id": "P6",
   "jmeno": "Václav Vystoupil",
   "narozeni": null,
   "umrti": {
    "obdobi": "před 1883",
    "zaklad": "formule „rodiče katolíci a mrtvi“ v oddacím zápisu 1883",
    "provenience": "matrika"
   },
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [],
   "zdroje": [
    "PR-E"
   ],
   "poznamka": "Otec Veroniky Vystoupilové; uveden přímo v oddacím zápisu 1883 (PR-E). Ze zápisu o něm plyne jen, že byl katolík a k únoru 1883 již zemřel; povolání ani bydliště v zápisu přečtena nebyla.",
   "nejistoty": [],
   "vyrez_rukopisu": "img/dukazy/ZB-4_rodice_zenicha.jpg"
  },
  {
   "id": "P7",
   "jmeno": "Jakub Veselý",
   "narozeni": null,
   "umrti": {
    "obdobi": "před 2/1883",
    "zaklad": "formule „rodiče katolíci a mrtvi“ v oddacím zápisu Karla a Rozálie z 5. 2. 1883 (PR-E, přečteno přímo)",
    "provenience": "matrika"
   },
   "misto_narozeni": null,
   "povolani": [
    {
     "nazev": "kožešník v Kloboukách u Brna",
     "provenience": "matrika"
    }
   ],
   "otec": null,
   "matka": null,
   "partneri": [
    "P8"
   ],
   "zdroje": [
    "PR-E"
   ],
   "poznamka": "Otec Rozálie Veselé; uveden přímo v oddacím zápisu 1883 (PR-E). Oprava starších chybných přepisů: Veselý (nikoli „Vada“).",
   "nejistoty": [
    "Sňatek s Antonií Halmovou dosud nenalezen (oddací knihy 2753 / 2754)."
   ],
   "vyrez_rukopisu": "img/dukazy/ZB-4_nevesta_detail_rodice.jpg"
  },
  {
   "id": "P8",
   "jmeno": "Antonie Veselá",
   "narozeni": null,
   "umrti": {
    "obdobi": "před 2/1883",
    "zaklad": "formule „rodiče katolíci a mrtvi“ v oddacím zápisu Karla a Rozálie z 5. 2. 1883 (PR-E, přečteno přímo)",
    "provenience": "matrika"
   },
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P10",
   "matka": null,
   "partneri": [
    "P7"
   ],
   "zdroje": [
    "PR-E"
   ],
   "poznamka": "Matka Rozálie Veselé. V matrici uvedena zkratkovitě „Antonie roz. Josefa Halma“ (rozená dcera Josefa Halma).",
   "nejistoty": [
    "Rodiště i údaje o narození neznámé."
   ],
   "vyrez_rukopisu": "img/dukazy/ZB-4_nevesta_detail_rodice.jpg",
   "rodne_prijmeni": "Halmová"
  },
  {
   "id": "P10",
   "jmeno": "Josef Halm",
   "narozeni": null,
   "umrti": {
    "obdobi": "před 1883",
    "zaklad": "formule „rodiče katolíci a mrtvi“ v oddacím zápisu 1883",
    "provenience": "matrika"
   },
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [],
   "zdroje": [
    "PR-E"
   ],
   "poznamka": "Otec Antonie Halmové; uveden přímo v oddacím zápisu 1883 (PR-E). Ze zápisu plyne jen, že byl katolík a k únoru 1883 již zemřel.",
   "nejistoty": [],
   "vyrez_rukopisu": "img/dukazy/ZB-4_nevesta_detail_rodice.jpg"
  },
  {
   "id": "P21",
   "jmeno": "Genovéfa Dobrovolná",
   "narozeni": {
    "datum": "1877-09-17",
    "presnost": "den, podpořený dvěma zápisy",
    "provenience": "matrika"
   },
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P24",
   "matka": "P25",
   "partneri": [
    "P16"
   ],
   "zdroje": [
    "PR-J",
    "PR-K",
    "PR-L"
   ],
   "poznamka": "Matka Anny. Jméno a rodiče shodní v narození Anny, sňatku rodičů i převzatém narození Genovéfy.",
   "nejistoty": [
    "Pravopis příjmení v rukopisech kolísá; používáme Tihlaříková. Přesný katalogový detail rodného zápisu potřebuje doplnit."
   ],
   "vyrez_rukopisu": "img/dukazy/20261102_sn142_genovefa_L13b.jpg",
   "rodne_prijmeni": "Tihlaříková"
  },
  {
   "id": "P22",
   "jmeno": "František Dobrovolný",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P23"
   ],
   "zdroje": [
    "PR-J",
    "PR-K"
   ],
   "poznamka": "Otec Josefa Dobrovolného, domkář v Kloboukách.",
   "nejistoty": [],
   "vyrez_rukopisu": "img/dukazy/20261102_sn34_zapis_a.jpg"
  },
  {
   "id": "P23",
   "jmeno": "Mariana",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P22"
   ],
   "zdroje": [
    "PR-K"
   ],
   "poznamka": "Matka Josefa Dobrovolného, manželka Františka Dobrovolného. Rodné příjmení v oddacím zápisu syna není bezpečně přečteno.",
   "nejistoty": [
    "Křestní jméno Mariana / Marie; návrh rodného příjmení Veselá zůstává pracovní a nepřebírá se jako fakt."
   ],
   "vyrez_rukopisu": "img/dukazy/20261102_sn34_zapis_a.jpg"
  },
  {
   "id": "P24",
   "jmeno": "František Tihlařík",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P26",
   "matka": "P27",
   "partneri": [
    "P25"
   ],
   "zdroje": [
    "PR-J",
    "PR-K",
    "PR-L"
   ],
   "poznamka": "Otec Genovéfy, domkář v Kloboukách.",
   "nejistoty": [],
   "vyrez_rukopisu": "img/dukazy/20261102_sn142_genovefa_L13b.jpg"
  },
  {
   "id": "P25",
   "jmeno": "Eva Tihlaříková",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P28",
   "matka": "P29",
   "partneri": [
    "P24"
   ],
   "zdroje": [
    "PR-J",
    "PR-K",
    "PR-L"
   ],
   "poznamka": "Matka Genovéfy, dcera Tomáše Forejtníka.",
   "nejistoty": [
    "Jde o samostatně doloženou rodinu. Spojení s větví Karla a Josefa Forejtníků není doložené."
   ],
   "vyrez_rukopisu": "img/dukazy/20261102_sn142_genovefa_L13c.jpg",
   "rodne_prijmeni": "Forejtníková"
  },
  {
   "id": "P26",
   "jmeno": "František Tihlařík starší",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P27"
   ],
   "zdroje": [
    "PR-L"
   ],
   "poznamka": "Otec Františka Tihlaříka, obecní pastýř. Přívlastek starší slouží jen k rozlišení dvou stejnojmenných osob.",
   "nejistoty": [
    "Přesná obec u povolání pastýře není bezpečně přečtena."
   ],
   "vyrez_rukopisu": "img/dukazy/20261102_sn142_genovefa_L13b.jpg"
  },
  {
   "id": "P27",
   "jmeno": "Genovéfa",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P26"
   ],
   "zdroje": [
    "PR-L"
   ],
   "poznamka": "Matka Františka Tihlaříka, manželka Františka Tihlaříka staršího.",
   "nejistoty": [
    "Rodné příjmení: pracovní čtení Krištin / Kristýn; normalizované příjmení se zatím nevyplňuje."
   ],
   "vyrez_rukopisu": "img/dukazy/20261102_sn142_genovefa_L13b.jpg"
  },
  {
   "id": "P28",
   "jmeno": "Tomáš Forejtník",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P29"
   ],
   "zdroje": [
    "PR-K",
    "PR-L"
   ],
   "poznamka": "Otec Evy, domkář v Kloboukách.",
   "nejistoty": [
    "Shodné příjmení neprokazuje příbuznost s Karlem či Josefem Forejtníkem z jiné větve."
   ],
   "vyrez_rukopisu": "img/dukazy/20261102_sn142_genovefa_L13c.jpg"
  },
  {
   "id": "P29",
   "jmeno": "Eva",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P28"
   ],
   "zdroje": [
    "PR-L"
   ],
   "poznamka": "Matka Evy Forejtníkové, manželka Tomáše Forejtníka.",
   "nejistoty": [
    "Rodné příjmení připomíná Ondrů; zatím ponecháno nejasné."
   ],
   "vyrez_rukopisu": "img/dukazy/20261102_sn142_genovefa_L13c.jpg"
  },
  {
   "id": "P30",
   "jmeno": "Marie Forejtníková",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": {
    "nazev": "Němčičky",
    "provenience": "rodinné sdělení"
   },
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P11"
   ],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Babička Adama Forejtníka ze strany otce, manželka Miroslava Forejtníka staršího, matka Miroslava Forejtníka. Rozená Kameníková (pravděpodobně z Němčiček) podle rodinného sdělení.",
   "nejistoty": [],
   "role": "babička Adama ze strany otce; matka Miroslava",
   "rodne_prijmeni": "Kameníková"
  },
  {
   "id": "P31",
   "jmeno": "Milan Cvan",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": {
    "nazev": "Němčičky",
    "provenience": "rodinné sdělení"
   },
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P32"
   ],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Děda Adama Forejtníka ze strany matky, manžel Marie Cvanové rozené Stávkové, otec Hany Forejtníkové rozené Cvanové. Původem z Němčiček podle rodinného sdělení.",
   "nejistoty": [],
   "role": "děda Adama ze strany matky; otec Hany"
  },
  {
   "id": "P32",
   "jmeno": "Marie Cvanová",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": {
    "nazev": "Němčičky",
    "provenience": "rodinné sdělení"
   },
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P31"
   ],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Babička Adama Forejtníka ze strany matky, manželka Milana Cvana, matka Hany Forejtníkové rozené Cvanové. Rozená Stávková z Němčiček podle rodinného sdělení.",
   "nejistoty": [],
   "role": "babička Adama ze strany matky; matka Hany",
   "rodne_prijmeni": "Stávková"
  }
 ],
 "udalosti": [
  {
   "id": "E1",
   "typ": "narození",
   "datum": "1954-04-26",
   "presnost": "den",
   "provenience": "dokument",
   "misto": "Valtice, nemocnice",
   "osoby": [
    "P11"
   ],
   "nazev": "Narození Miroslava Forejtníka",
   "popis": "Miroslav Forejtník se narodil 26. dubna 1954 ve valtické nemocnici; rodný list vystaven 28. 4. 1954.",
   "pramen": "PR-A",
   "dukazy": [
    "dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg"
   ]
  },
  {
   "id": "E2",
   "typ": "narození",
   "datum": "1921-11-29",
   "presnost": "den",
   "provenience": "matrika",
   "misto": "Klobouky u Brna",
   "osoby": [
    "P12"
   ],
   "nazev": "Narození Jaroslava Josefa Forejtníka",
   "popis": "Jaroslav Josef Forejtník se narodil 29. listopadu 1921 v Kloboukách u Brna jako legitimní syn stolaře Bohuslava Forejtníka a Anny Dobrovolné. Den 29 ověřen znak po znaku.",
   "pramen": "PR-B",
   "dukazy": [
    "B2736_sn207L_radka.jpg",
    "B2736_radka_leva.jpg",
    "B2736_radka_prava.jpg",
    "B2736_radka_datum.jpg",
    "B2736_radka_jmeno.jpg",
    "B2736_radka_otec_col.jpg",
    "B2736_radka_matka_col.jpg",
    "B2736_sn207L_dole.jpg",
    "B2736_sn207L_dole2.jpg"
   ],
   "pozn": "Poznámka zápisu odkazuje na sňatek rodičů 26. 4. 1921 (přečteno 2×: „oddáni v Kloboukách, dne 26. dubna 1921“). Pořadové číslo zápisu při čteních kolísalo 34/35."
  },
  {
   "id": "E3",
   "typ": "sňatek",
   "datum": "1921-04-26",
   "presnost": "den",
   "provenience": "matrika",
   "misto": "Klobouky u Brna",
   "osoby": [
    "P3",
    "P9"
   ],
   "nazev": "Sňatek Bohuslava Forejtníka a Anny Dobrovolné",
   "popis": "Bohuslav Forejtník, stolař v Břeclavi, zákonný syn Karla Forejtníka, domkáře v Kloboukách, a Rozálie rozené Veselé, se oženil s Annou Dobrovolnou (20 let), dcerou Josefa Dobrovolného, zedníka v Kloboukách. Sňatek uzavřen 26. dubna 1921 v Kloboukách u Brna.",
   "pramen": "PR-C",
   "dukazy": [
    "C_klobouky_2755_sn85_prehled.jpg",
    "C_sn85_stred.jpg",
    "C_stred_zenich.jpg",
    "C_stred_nevesta.jpg",
    "C_sn85_dole_A.jpg",
    "C_sn85_dole_B.jpg",
    "ZA-1_poznamka_o_snatku.png"
   ],
   "pozn": "Rok 1921 a jméno Anny potvrzují i okrajová poznámka rodného zápisu Bohuslava (PR-D, přímo) a poznámka u rodného zápisu syna Jaroslava (PR-B: „oddáni … dne 26. dubna 1921“). Svědci: Rudolf Forejtník + Josef Dobrovolný (domkář č. 205) – přečteno s nejistotami; Rudolf je pravděpodobný příbuzný Bohuslava, vztah nedoložen."
  },
  {
   "id": "E4",
   "typ": "narození a křest",
   "datum": "1895-01-03",
   "presnost": "den",
   "provenience": "matrika",
   "misto": "Klobouky u Brna",
   "osoby": [
    "P3"
   ],
   "nazev": "Narození a křest Bohuslava Forejtníka",
   "popis": "Bohuslav Forejtník, zákonný syn Karla Forejtníka, domkáře v Kloboukách, a Rozálie Veselé, se narodil 3. ledna 1895 v Kloboukách; křest v lednu 1895 (pravděpodobně 6. 1.).",
   "pramen": "PR-D",
   "dukazy": [
    "A_prehled_L11.jpg",
    "A_klobouky_2736_sn63_zapis38_full.jpg",
    "ZA-1_datum_narozeni.png",
    "ZA-1_sloupec_otec.png",
    "ZA-1_cislo_zapisu.png",
    "ZA-1_poznamka_o_snatku.png"
   ]
  },
  {
   "id": "E5",
   "typ": "sňatek",
   "datum": "1883-02-05",
   "presnost": "den (pravděpodobné)",
   "provenience": "matrika",
   "misto": "Klobouky u Brna",
   "osoby": [
    "P1",
    "P2"
   ],
   "nazev": "Sňatek Karla Forejtníka a Rozálie Veselé",
   "popis": "Karel Forejtník, domkář a obuvník v Kloboukách (29 let), syn Josefa Forejtníka, čtvrtláníka, a Veroniky rozené Vystoupilové, se oženil s Rozálií Veselou, dělnicí v Kloboukách (29 let), dcerou Jakuba Veselého, kožešníka, a Antonie rozené Halmové. Ohlášky zřejmě v lednu 1883.",
   "pramen": "PR-E",
   "dukazy": [
    "B_prehled_L11.png",
    "B_klobouky_2755_sn2_dole_full.jpg",
    "ZB-4_cislo_a_daty.png",
    "ZB-4_zenich_sloupec.jpg",
    "ZB-4_rodice_zenicha.png",
    "ZB-4_nevesta_sloupec.jpg",
    "ZB-4_nevesta_detail_rodice.jpg"
   ],
   "pozn": "Datum 5. 2. 1883: u podpisu faráře přečteno „5“, zbývající data kolísala; rejstřík sňatků (PR-G, převzatý přepis) uvádí „5. února 1883, str. 6“, což datum podporuje, ale rukopis datumu v zápise sám dosud nebyl přečten jednoznačně."
  },
  {
   "id": "E6",
   "typ": "narození",
   "datum": "1924-05-10",
   "presnost": "den",
   "provenience": "dokument",
   "misto": "Kostice",
   "osoby": [
    "P13"
   ],
   "nazev": "Narození Emilie Forejtníkové",
   "popis": "Emilie Forejtníková (provdaná Kosek) se narodila 10. května 1924 v Kosticích; údaj z rodného listu syna Miroslava.",
   "pramen": "PR-A",
   "dukazy": [
    "dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg"
   ]
  },
  {
   "id": "E7",
   "typ": "sňatek (hypotéza)",
   "datum": "1919-06-25",
   "presnost": "den",
   "provenience": "hypoteza",
   "misto": "Kostice (farnost Tvrdonice)",
   "osoby": [
    "P14",
    "P15"
   ],
   "nazev": "Sňatek Cyrila Koska a Alžběty Trpělkové",
   "popis": "Cyril Kosek, syn Josefa Koska a Františky, a Alžběta Trpělková, dcera Josefa Trpělky a Juliány, uzavřeli sňatek 25. června 1919. Shoda jmen a obce s rodiči Emilie je silná, přímá návaznost na Emilii (narozenou 1924) však dosud doložena nebyla.",
   "pramen": "PR-F",
   "dukazy": [],
   "pozn": "Kandidátní pár 1919 není přímým dokladem sňatku rodičů Emilie. Neověřená návaznost."
  },
  {
   "id": "E-1899-DOBROVOLNI",
   "typ": "sňatek",
   "datum": "1899-10-04",
   "presnost": "den",
   "provenience": "matrika",
   "misto": "Klobouky u Brna",
   "osoby": [
    "P16",
    "P21"
   ],
   "nazev": "Sňatek Josefa Dobrovolného a Genovéfy Tihlaříkové",
   "popis": "Sňatek rodičů Anny: vlastní oddací zápis a odpovídající poznámka v narození Anny.",
   "pramen": "PR-K",
   "dukazy": [
    "dukazy/20261102_kniha2755_sn034_full12.jpg",
    "dukazy/20261102_sn34_zapis_a.jpg",
    "dukazy/20261102_sn34_zapis_b.jpg"
   ]
  },
  {
   "id": "E-1877-GENOVEFA",
   "typ": "narození",
   "datum": "1877-09-17",
   "presnost": "den; katalogový detail vyžaduje doplnění",
   "provenience": "matrika",
   "misto": "Klobouky u Brna",
   "osoby": [
    "P21"
   ],
   "nazev": "Narození Genovéfy Tihlaříkové",
   "popis": "Zářijový rodný zápis; rodiče František a Eva. Převzatý archivní obraz s nejistou katalogovou citací.",
   "pramen": "PR-L",
   "dukazy": [
    "dukazy/20261102_A3_1877_sn142.jpg",
    "dukazy/20261102_sn142_genovefa_L13b.jpg",
    "dukazy/20261102_sn142_genovefa_L13c.jpg"
   ]
  }
 ],
 "vztahy": [
  {
   "od": "P12",
   "k": "P11",
   "typ": "otec",
   "pramen": "PR-A",
   "provenience": "dokument",
   "dukaz": "rodný list Miroslava uvádí otce Jaroslava"
  },
  {
   "od": "P13",
   "k": "P11",
   "typ": "matka",
   "pramen": "PR-A",
   "provenience": "dokument",
   "dukaz": "rodný list Miroslava uvádí matku Emilii"
  },
  {
   "od": "P3",
   "k": "P12",
   "typ": "otec",
   "pramen": "PR-B",
   "provenience": "matrika",
   "dukaz": "rodný zápis Jaroslava (PR-B, přečteno obrazem): otec Bohuslav Forejtník, stolař; v tomtéž sloupci i rodiče Bohuslava (Karel domkář + Rozálie rozená Veselá)"
  },
  {
   "od": "P9",
   "k": "P12",
   "typ": "matka",
   "pramen": "PR-B",
   "provenience": "matrika",
   "dukaz": "rodný zápis Jaroslava (PR-B): matka Anna Dobrovolná, nar. 27/6. 1900, dcera Josefa Dobrovolného, zedníka v Kloboukách"
  },
  {
   "od": "P14",
   "k": "P13",
   "typ": "otec",
   "pramen": "PR-A",
   "providence": null,
   "provenience": "dokument",
   "dukaz": "rodný list Miroslava uvádí matčina otce Cyrila Koska"
  },
  {
   "od": "P15",
   "k": "P13",
   "typ": "matka",
   "pramen": "PR-A",
   "provenience": "dokument",
   "dukaz": "rodný list Miroslava uvádí matčinu matku Alžbětu Trpělkovou"
  },
  {
   "od": "P1",
   "k": "P3",
   "typ": "otec",
   "pramen": "PR-D",
   "provenience": "matrika",
   "dukaz": "sloupec Rodičové–Otec zápisu ZA-1: „Karel Forejtník, domkář v Kloboukách“ (2 nezávislá konzistentní čtení)"
  },
  {
   "od": "P2",
   "k": "P3",
   "typ": "matka",
   "pramen": "PR-D",
   "provenience": "matrika",
   "dukaz": "sloupec Rodičové–Matka zápisu ZA-1: „Rozálie, dcera Veselého“ (2 nezávislá čtení)"
  },
  {
   "od": "P16",
   "k": "P9",
   "typ": "otec",
   "pramen": "PR-C",
   "provenience": "matrika",
   "dukaz": "oddací zápis 1921 (PR-C, přečteno obrazem): nevěsta dcera Josefa Dobrovolného, zedníka v Kloboukách; potvrzeno i v PR-B"
  },
  {
   "od": "P4",
   "k": "P1",
   "typ": "otec",
   "pramen": "PR-E",
   "provenience": "matrika",
   "dukaz": "sloupec rodičů ženicha: „manž. syn Josefa Forejtníka, čtvrtláníka v Kloboucích“ (konzistentně ve 2 čteních)"
  },
  {
   "od": "P5",
   "k": "P1",
   "typ": "matka",
   "pramen": "PR-E",
   "providence": null,
   "provenience": "matrika",
   "dukaz": "týž sloupec: „a Veroniky roz. Václava Vystoupila“ – zkratkovitá formule (rozená dcera Václava Vystoupila)"
  },
  {
   "od": "P6",
   "k": "P5",
   "typ": "otec",
   "pramen": "PR-E",
   "provenience": "matrika",
   "dukaz": "zkratkovitá formule „a Veroniky roz. Václava Vystoupila“ (3 nezávislá čtení) – mužské příjmení označuje otce Veroniky"
  },
  {
   "od": "P7",
   "k": "P2",
   "typ": "otec",
   "pramen": "PR-E",
   "provenience": "matrika",
   "dukaz": "sloupec rodičů nevěsty: „manž. dcera Jakuba Veselého, kožešníka v Kloboucích“"
  },
  {
   "od": "P8",
   "k": "P2",
   "typ": "matka",
   "pramen": "PR-E",
   "provenience": "matrika",
   "dukaz": "týž sloupec: „a Antonie roz. Josefa Halma“ – zkratkovitá formule (rozená dcera Josefa Halma)"
  },
  {
   "od": "P10",
   "k": "P8",
   "typ": "otec",
   "pramen": "PR-E",
   "provenience": "matrika",
   "dukaz": "zkratkovitá formule „a Antonie roz. Josefa Halma“ – mužské příjmení označuje otce Antonie"
  },
  {
   "od": "P1",
   "k": "P2",
   "typ": "partnerství",
   "pramen": "PR-E",
   "provenience": "matrika",
   "dukaz": "celek oddacího zápisu č. 4/1883 (ženich + nevěsta + datum)"
  },
  {
   "od": "P3",
   "k": "P9",
   "typ": "partnerství",
   "pramen": "PR-C",
   "provenience": "matrika",
   "dukaz": "oddací zápis z 26. 4. 1921 přečtený přímo obrazem (PR-C); rok 1921 a jméno Anny navíc v okrajové poznámce rodného zápisu Bohuslava (PR-D) a v poznámce rodného zápisu Jaroslava (PR-B: „oddáni … 26. dubna 1921“)"
  },
  {
   "od": "P14",
   "k": "P15",
   "typ": "partnerství (hypotéza)",
   "pramen": "PR-F",
   "providence": null,
   "provenience": "hypoteza",
   "dukaz": "nalezený oddací zápis 25. 6. 1919 v Kosticích; vazba na Emiliina rodiče je pravděpodobná, nikoli doložená"
  },
  {
   "od": "P11",
   "k": "P17",
   "typ": "otec",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že otcem Miroslava je Miroslav narozený 26. 4. 1954."
  },
  {
   "od": "P17",
   "k": "P19",
   "typ": "otec",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že je synem Miroslava a Hany."
  },
  {
   "od": "P18",
   "k": "P19",
   "typ": "matka",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že jeho matkou je Hana, rozená Cvanová."
  },
  {
   "od": "P17",
   "k": "P20",
   "typ": "otec",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že Ondřej je synem Miroslava a Hany."
  },
  {
   "od": "P18",
   "k": "P20",
   "typ": "matka",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že matkou Ondřeje je Hana, rozená Cvanová."
  },
  {
   "od": "P17",
   "k": "P18",
   "typ": "partnerství",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Rodiče Adama a Ondřeje podle rodinného sdělení; datum sňatku nebylo sděleno."
  },
  {
   "od": "P18",
   "k": "P17",
   "typ": "partnerství",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Rodiče Adama a Ondřeje podle rodinného sdělení; datum sňatku nebylo sděleno."
  },
  {
   "od": "P12",
   "k": "P13",
   "typ": "partnerství",
   "pramen": "PR-A",
   "provenience": "dokument",
   "dukaz": "oba uvedeni jako rodiče Miroslava Forejtníka (1954) v jeho rodném listě (PR-A)"
  },
  {
   "od": "P21",
   "k": "P9",
   "typ": "matka",
   "pramen": "PR-J",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P22",
   "k": "P16",
   "typ": "otec",
   "pramen": "PR-K",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P23",
   "k": "P16",
   "typ": "matka",
   "pramen": "PR-K",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P24",
   "k": "P21",
   "typ": "otec",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P25",
   "k": "P21",
   "typ": "matka",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P26",
   "k": "P24",
   "typ": "otec",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P27",
   "k": "P24",
   "typ": "matka",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P28",
   "k": "P25",
   "typ": "otec",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P29",
   "k": "P25",
   "typ": "matka",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "Rodičovský vztah uvedený ve zkontrolovaném matričním obrazu; viz přepis a nejistoty pramene."
  },
  {
   "od": "P16",
   "k": "P21",
   "typ": "partnerství",
   "pramen": "PR-K",
   "provenience": "matrika",
   "dukaz": "Sňatek přímo doložen (1899)."
  },
  {
   "od": "P22",
   "k": "P23",
   "typ": "partnerství",
   "pramen": "PR-K",
   "provenience": "matrika",
   "dukaz": "V prameni uvedeni jako manželé a rodiče; přesné datum jejich sňatku neznámé."
  },
  {
   "od": "P24",
   "k": "P25",
   "typ": "partnerství",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "V prameni uvedeni jako manželé a rodiče; přesné datum jejich sňatku neznámé."
  },
  {
   "od": "P26",
   "k": "P27",
   "typ": "partnerství",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "V prameni uvedeni jako manželé a rodiče; přesné datum jejich sňatku neznámé."
  },
  {
   "od": "P28",
   "k": "P29",
   "typ": "partnerství",
   "pramen": "PR-L",
   "provenience": "matrika",
   "dukaz": "V prameni uvedeni jako manželé a rodiče; přesné datum jejich sňatku neznámé."
  },
  {
   "od": "P30",
   "k": "P17",
   "typ": "matka",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že babička z otcovy strany je Marie Forejtníková, matka Miroslava."
  },
  {
   "od": "P11",
   "k": "P30",
   "typ": "partner",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "manželství Miroslava staršího a Marie Forejtníkové"
  },
  {
   "od": "P31",
   "k": "P18",
   "typ": "otec",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že děda ze strany matky je Milan Cvan, otec Hany."
  },
  {
   "od": "P32",
   "k": "P18",
   "typ": "matka",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že babička ze strany matky je Marie Cvanová, matka Hany."
  },
  {
   "od": "P31",
   "k": "P32",
   "typ": "partner",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "manželství Milana Cvana a Marie Cvanové"
  }
 ],
 "prameny": [
  {
   "id": "PR-A",
   "typ": "rodinný dokument",
   "nazev": "Rodný list Miroslava Forejtníka (1954)",
   "popis": "Vystaven 28. 4. 1954, MNV Valtice, okres Mikulov. Kniha narození svazek 4, rok 1954, strana 216, pořadové číslo 358. Uvádí narození Miroslava 26. 4. 1954 ve Valticích a rodiče Jaroslava Forejtníka a Emilii, rozenou Koskovou (v přepisu kontextu jako Forejtníkovou, roz. Kosek), s údaji o jejím narození 10. 5. 1924 v Kosticích a rodičích Cyrilu Koskovi a Alžbětě Trpělkové.",
   "archiv": "rodinný archiv (dodaný dokument)",
   "url": null,
   "soubory": [
    "dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg"
   ],
   "provenience": "dokument"
  },
  {
   "id": "PR-B",
   "typ": "matriční zápis",
   "nazev": "Narození Jaroslava Josefa Forejtníka (1921)",
   "popis": "MZA, Acta Publica, Klobouky u Brna, kniha 2736 (narozených 1883–1925), snímek 207, vlevo dole. Nar. 29. 11. 1921 v Kloboukách; otec Bohuslav Forejtník, stolař (v zápise i s údaji o svých rodičích: Karel Forejtník, domkář v Kloboukách, a Rozálie rozená Veselá); matka Anna Dobrovolná, nar. 27/6. 1900, dcera Josefa Dobrovolného, zedníka v Kloboucích. Poznámka: rodiče oddáni 26. 4. 1921.",
   "archiv": "MZA Brno, Acta Publica, RC farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/14893?image=216000010-00253-00000002736-000-000000000-000002736-02070.jp2",
   "soubory": [
    "B2736_sn207_leva.png",
    "B2736_sn207L_radka.jpg",
    "B2736_radka_leva.jpg",
    "B2736_radka_prava.jpg",
    "B2736_radka_datum.jpg",
    "B2736_radka_jmeno.jpg",
    "B2736_radka_otec_col.jpg",
    "B2736_radka_matka_col.jpg",
    "B2736_sn207L_dole.jpg",
    "B2736_sn207L_dole2.jpg",
    "B2736_sn207L_full.png"
   ],
   "prepis": {
    "datum": "narozen 29. 11. 1921 v Kloboukách (den „29“ ověřen znak po znaku), legitimní",
    "dite": "Jaroslav (druhé křestní jméno Josef dle převzatého přepisu)",
    "otec": "Bohuslav Forejtník, stolař; zákonný syn Karla Forejtníka, domkáře v Kloboucích, a Rozálie rozené Veselé [dcery] Jakub[a]; nar. 3. 1. 1895; oddán v Kloboucích",
    "matka": "Anna Dobrovolná, nar. 27/6. 1900, dcera Josefa Dobrovolného, zedníka v Kloboucích, a [Jany?] rozené [Tihlářové?]",
    "poznámka_v_zápisu": "oddáni v Kloboukách dne 26. dubna 1921 (přečteno 2×)"
   },
   "nejistoty": [
    "pořadové číslo zápisu: čtení kolísala mezi 34 a 35 (převzatý přepis uvádí 35)",
    "den křtu: nedočten spolehlivě"
   ],
   "provenience": "matrika",
   "pozn": "Zápis přečten přímo obrazem v tomto kole (2. 11. 2026); starší přepis z 1. kola zůstává v souladu (29. 11. 1921, rodiče, sňatek rodičů 26. 4. 1921). Matka Anny upřesněna novými doklady PR-J/PR-K/PR-L: Genovéfa; staré rozporuplné varianty nebyly použity."
  },
  {
   "id": "PR-C",
   "typ": "matriční zápis",
   "nazev": "Sňatek Bohuslava Forejtníka a Anny Dobrovolné (1921)",
   "popis": "MZA, kniha 2755 (oddací 1883–1948), strana 172, snímek 85. Sňatek 26. 4. 1921 v Kloboukách. Ženich: Bohuslav Forejtník, stolař v Břeclavi, zákonný syn Karla Forejtníka, domkáře v Kloboukách, a Rozálie rozené Veselé. Nevěsta: Anna Dobrovolná, 20 let, dcera Josefa Dobrovolného, zedníka v Kloboucích. Svědci: Rudolf Forejtník + Josef Dobrovolný (domkář č. 205).",
   "archiv": "MZA Brno, Acta Publica, RC farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/12400?image=216000010-000253-003370-000000-002755-000000-00-00850.jp2",
   "soubory": [
    "C_klobouky_2755_sn85_prehled.jpg",
    "C_sn85_stred.jpg",
    "C_stred_zenich.jpg",
    "C_stred_nevesta.jpg",
    "C_sn85_dole_A.jpg",
    "C_sn85_dole_B.jpg",
    "C_2755_sn85_full.png"
   ],
   "prepis": {
    "datum": "26. dubna 1921, Klobouky",
    "zenich": "Bohuslav Forejtník (v čteních „Josefík/Forejtník Bohuslav“), stolař („Solař“) v Břeclavi; zákonný syn Karla Forejtníka, domkáře v Kloboukách, a Rozálie rozené Veselé",
    "nevesta": "Anna Dobrovolná (koncovec příjmení „…volná“ čten jasně), 20 let, bytem v Kloboucích; dcera Josefa Dobrovolného, zedníka v Kloboucích",
    "svedci": "Rudolf Forejtník + Josef Dobrovolný, domkář č. 205 v Kloboucích (čteno s nejistotami)",
    "datum_narozeni_nevesty_v_zápisu": "čtení kolísala: 27/6. 1900 (2×), 27/6. 1901 (1×), 1. 1. 1901 (1×) – viz sporna_cteni.json"
   },
   "nejistoty": [
    "datum narození nevěsty uvedené v zápisu: čtení rozporná (1900 vs. 1901) – převažuje 27/6. 1900",
    "povolání otce nevěsty: dvě čtení „zedník“, jedno „zemědělský kolář“ – převažuje zedník",
    "svědci a čísla domů čteny s nejistotami"
   ],
   "provenience": "matrika",
   "pozn": "Zápis přečten přímo obrazem v tomto kole. Slabší čtení z 1. kola (okrajová poznámka u PR-D) nebylo použito k přepsání tohoto čitelnějšího pramene – naopak, oba prameny si odpovídají (rok 1921, Anna Dobrovolná). Matka Anny upřesněna novými doklady PR-J/PR-K/PR-L: Genovéfa; staré rozporuplné varianty nebyly použity."
  },
  {
   "id": "PR-D",
   "typ": "matriční zápis",
   "nazev": "Narození a křest Bohuslava Forejtníka (1895) – zápis A",
   "popis": "MZA, kniha 2736 (narozených 1883–1925), snímek 63, vpravo nahoře, první zápis roku 1895 (č. 1). Nar. 3. 1. 1895 v Kloboukách, otec Karel Forejtník, domkář, matka Rozálie Veselá. Okrajová poznámka o sňatku s Annou Dobrovolnou 1921.",
   "archiv": "MZA Brno, Acta Publica, RC farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/14893?image=216000010-00253-00000002736-000-000000000-000002736-00630.jp2",
   "soubory": [
    "A_prehled_L11.jpg",
    "A_klobouky_2736_sn63_zapis38_full.jpg",
    "ZA-1_cislo_zapisu.png",
    "ZA-1_datum_narozeni.png",
    "ZA-1_sloupec_otec.png",
    "ZA-1_poznamka_o_snatku.png",
    "A_browser_topright.png",
    "A_browser_zaznam.png"
   ],
   "prepis": {
    "nadpis": "Anno Domine 1895",
    "radek": "[č. 1] | 1895 | 1 | 3 | Klobouky | [křest: 1895 | 1 | 6?] | Bohuslav | männlich | otec: Karel Forejtník, domkář v Kloboukách, manž. syn Josefa Forejtníka … a Veroniky … | matka: Rozálie, dcera Veselého | kmotři: nepřečteni",
    "okrajova_poznamka": "oženil(?)/oddán … 1921 … s Annou Dobrovolnou (den a měsíc nečitelné)"
   },
   "nejistoty": [
    "den křtu: čtení kolísala (6/12/16/26. 1. 1895)",
    "číslo domu a kmotři: nepřečteny",
    "sloupec legitimace: nepřečten (dle sňatku rodičů 1883 jde patrně o legitimní dítě)",
    "datum sňatku v okrajové poznámce: rok a jméno potvrzeny 2×, den/měsíc nečitelné"
   ],
   "provenience": "matrika"
  },
  {
   "id": "PR-E",
   "typ": "matriční zápis",
   "nazev": "Sňatek Karla Forejtníka a Rozálie Veselé (1883) – zápis B",
   "popis": "MZA, kniha 2755 (oddací 1883–1948), snímek 2, strana 6, zápis č. 4/1883, vlevo dole. Ženich Karel Forejtník, domkář a obuvník v Kloboukách (29 let), nevěsta Rozálie Veselá, dělnice v Kloboukách (29 let).",
   "archiv": "MZA Brno, Acta Publica, RC farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/12400?image=216000010-000253-003370-000000-002755-000000-00-00020.jp2",
   "soubory": [
    "B_prehled_L11.png",
    "B_klobouky_2755_sn2_dole_full.jpg",
    "ZB-4_cislo_a_daty.png",
    "ZB-4_zenich_sloupec.jpg",
    "ZB-4_rodice_zenicha.png",
    "ZB-4_zenich_vedlejsi_sloupce.png",
    "ZB-4_nevesta_sloupec.jpg",
    "ZB-4_nevesta_detail_rodice.jpg",
    "ZB-4_nevesta_vedlejsi_sloupce.png"
   ],
   "prepis": {
    "zenich": "Karel Forejtník, domkář a obuvník v Kloboukách, 29 let, kath.; manž. syn Josefa Forejtníka, čtvrtláníka v Kloboucích, a Veroniky roz. Václava Vystoupila; rodiče katolíci a mrtvi.",
    "nevesta": "Rozálie Veselá, dělnice v Kloboukách, 29 let, kath.; manž. dcera Jakuba Veselého, kožešníka v Kloboucích, a Antonie roz. Josefa Halma; rodiče katolíci a mrtvi.",
    "datum": "oddávka: 5. 2. 1883 (pravděpodobné; u podpisu faráře čitelné „5“); ohlášky: leden 1883 (?); farář: Jos. Klimeš (?); svědci: nepřečteni"
   },
   "nejistoty": [
    "datum oddávky: 5. 2. 1883 pravděpodobné (podporuje i rejstřík PR-G), rukopis dataře v zápise ale kolísal při čtení",
    "rodná příjmení matek uvedena zkratkovitě přes otce („roz. Václava Vystoupila“, „roz. Josefa Halma“) – ženské tvary Vystoupilová/Halmová jsou normalizace",
    "věk 29 let u obou: jediné čtení z úzkých sloupečků",
    "svědci a farář: nepřečteni / nejistí"
   ],
   "provenience": "matrika"
  },
  {
   "id": "PR-F",
   "typ": "matriční zápis",
   "nazev": "Sňatek Cyrila Koska a Alžběty Trpělkové (1919) – vazba na Emilii nedoložena",
   "popis": "MZA, farnost Tvrdonice / Kostice, kniha 3443 (oddací 1909–1925), snímek 49. Sňatek 25. 6. 1919. Ženich Cyril Kosek, rodiče Josef Kosek a Františka (dle převzatého přepisu; přímé čtení rodičů se v tomto kole nepovedlo); nevěsta Alžběta Trpělková, rodiče Josef Trpělka a Juliána. Rodná příjmení obou matek nedočtena.",
   "archiv": "MZA Brno, Acta Publica, farnost Tvrdonice (Kostice)",
   "url": "https://www.mza.cz/actapublica/matrika/detail/258?image=216000010-00253-003370-000000-003443-000000-FM-B09549-00490.jp2",
   "soubory": [
    "F_tvrdonice_3443_sn49_native.jpg",
    "F_tvrdonice_3443_sn49_celkem.png",
    "F_sn49_p1.jpg",
    "F_sn49_zapis_top.jpg",
    "F_sn49_zenich.jpg",
    "F_sn49_nevesta.jpg",
    "F_browser_sn49.png",
    "F_tvrdonice_3443_sn49_full2.png"
   ],
   "nejistoty": [
    "přímé čtení tohoto zápisu se v tomto kole nepovedlo: sken knihy má nízké rozlišení (1123×1766 px na stránku) a opakovaná strojová čtení dávala zásadně rozporná jména (Cyril Kosec + Anežka Tesařová? / Janelib Franciska?...) – viz sporna_cteni.json SP-4",
    "shodné s převzatým přepisem: datum 25. června a jméno ženicha Cyril Kose[c]k (přečteno jednou přímo)",
    "rodiče ženicha i nevěsty: převzatý přepis (Josef Kosek + Františka; Josef Trpělka + Juliána) nadále bez přímého potvrzení"
   ],
   "provenience": "prepis",
   "pozn": "Vazba tohoto páru na Emilii (narozenou 10. 5. 1924 v Kosticích) zůstává pravděpodobná, ale nedoložená – chybí Emiliin vlastní rodný zápis. Překážka: sken v nízkém rozlišení; dlaždicový server opakovaně omezoval přístup."
  },
  {
   "id": "PR-G",
   "typ": "rejstřík",
   "nazev": "Rejstřík sňatků – kniha 2786, snímek 9 (OVĚŘENO OBRAZEM)",
   "popis": "MZA, rejstřík oddaných 1883–1949, kniha 2786, snímek 9, vpravo nahoře, první řádek: „1883, 5. února, [Forejtník] Karel a Veselá Rozalie, Klobouky, str. 6“. V tomto kole přečteno přímo obrazem: datumová buňka „1883. 5. úno[ra]“ a jmenná buňka „…tník Karel a Veselá Rozalie“ (2 nezávislá čtení). Podporuje datum 5. 2. 1883 i stranu 6 sňatku Karla a Rozálie.",
   "archiv": "MZA Brno, Acta Publica, RC farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/15190?image=216000010-00253-00000002786-000-000000000-000002786-00090.jp2",
   "soubory": [
    "R2786_sn9_prehled.jpg",
    "R2786_sn9_radek1.jpg",
    "R2786_sn9_radek1_datum.jpg",
    "R2786_sn9_radek1_jmena.jpg",
    "R2786_sn9_prvni_radky.jpg",
    "R2786_sn9_r1a.jpg",
    "R2786_sn9_r1b.jpg"
   ],
   "nejistoty": [
    "příjmení ženicha psáno v rejstříku zkráceně/bez diakritiky (čteno „Foretník/Forejtník“) – jde o zápis rejstříkáře, nikoli rozpor s matrikou",
    "druhý řádek rejstříku: „1884, 26. [měsíc], Foretník Josef a [Barbora Kudriovská?]“ – jiný Josef Forejtník (náš Josef zemřel před 2/1883), pravděpodobný příbuzný; do stromu nezařazován"
   ],
   "provenience": "matrika"
  },
  {
   "id": "PR-RODINA-2026",
   "typ": "rodinné sdělení",
   "nazev": "Rodinné sdělení Adama Forejtníka (30. 10. 2026)",
   "popis": "Adam potvrdil, že on a Ondřej jsou synové Miroslava Forejtníka mladšího a Hany Forejtníkové, rozené Cvanové. Otcem Miroslava je Miroslav Forejtník narozený 26. 4. 1954. Miroslav byl na přání rodiny nastaven jako výchozí osoba. Data narození nových osob nebyla sdělena.",
   "archiv": "soukromé sdělení rodiny",
   "url": null,
   "soubory": [],
   "provenience": "sdeleni",
   "pozn": "Vazby jsou potvrzené rodinou. Nejde o ověření matričním zápisem a nebyla odvozována žádná data narození."
  },
  {
   "id": "PR-H",
   "typ": "archivní sada",
   "nazev": "Sada originálních snímků matrik (3. kolo)",
   "popis": "V 3. kole byly z MZA staženy v plném rozlišení originální snímky: oddací kniha 2755 sn. 85 (sňatek Bohuslava a Anny 1921), narozená kniha 2736 sn. 207 levá (narození Jaroslava 1921) a sn. 93 (narození VI.–VII. 1900 – hledání rodného zápisu Anny Dobrovolné), oddací kniha 2753 sn. 55 pravá (sňatky 1838 včetně sporného zápisu č. 2), oddací kniha 3443 sn. 49 (sňatky 1919 Kostice) a rejstřík 2785 sn. 12 (sekce F). Čtení části z nich zůstává otevřené – viz sporna_cteni.json a DENIK_KOLO3.md.",
   "archiv": "MZA Brno, Acta Publica",
   "url": null,
   "soubory": [
    "C_2755_sn85_full.png",
    "B2736_sn207L_full.png",
    "K2736_sn093_full.png",
    "K2753_sn055R_full.png",
    "R2785_sn012_full.png"
   ],
   "nejistoty": [
    "strojové čtení některých snímků se v 3. kole nepodařilo dokončit kvůli dočasnému limitu API vizuálního modelu; snímky jsou uloženy a připraveny k přečtení"
   ],
   "provenience": "matrika"
  },
  {
   "id": "PR-J",
   "typ": "matriční zápis",
   "nazev": "Narození Anny Dobrovolné (1900)",
   "popis": "Klobouky u Brna, kniha 2736, snímek 96, fol. 187, zápis 36. Anna, dcera Josefa Dobrovolného a Genovéfy. Ve sloupci narození/křtu jsou 27. a 29. června; 29 není přijatá oprava narození na 29. června. Sňatek rodičů poznamenán 4. října 1899.",
   "archiv": "MZA Brno, farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/14893",
   "prepis": {
    "dítě": "Anna; narození 27. června 1900, křest 29. června 1900.",
    "otec": "Josef Dobrovolný, zedník; syn Františka Dobrovolného a jeho manželky. Datum u otce: 4/8 1873.",
    "matka": "Genovéfa, dcera Františka Tihlaříka a jeho manželky Evy, rozené Forejtníkovy; datum 17/9 1877.",
    "oddavky_rodičů": "Oddavky dne 4. října 1899."
   },
   "nejistoty": [
    "GLM nesprávně označilo 29. červen za opravené narození. Hlavička i jiné řádky rozlišují narození a křest.",
    "Přesný zápis příjmení Tihlařík se v rukopisech liší."
   ],
   "provenience": "matrika",
   "soubory": [
    "20261102_Anna_1900_sn96.jpg",
    "20261102_A1_r36_zapad.jpg",
    "20261102_A1_r36_vychod.jpg",
    "20261102_A1_hlavicky_kompozit.jpg"
   ],
   "pozn": "Obraz zkontrolován při integraci 2. 11. 2026. Původní výstupy GLM zůstávají ke stažení odděleně od opravených údajů."
  },
  {
   "id": "PR-K",
   "typ": "matriční zápis",
   "nazev": "Sňatek Josefa Dobrovolného a Genovéfy (1899)",
   "popis": "Klobouky u Brna, kniha 2755, snímek 34, levá strana, horní zápis, 4. října 1899. Totožnost s rodiči Anny opíráme o rodiče obou snoubenců a stejnou poznámku o oddavkách u Anny.",
   "archiv": "MZA Brno, farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/12400",
   "prepis": {
    "ženich": "Josef Dobrovolný, volný zedník, syn Františka Dobrovolného a Mariany rozené [příjmení nejasné]. Původní jméno František je u ženicha přeškrtnuté a nahrazené Josefem.",
    "nevěsta": "Genovéfa Tihlaříková, dcera Františka Tihlaříka a Evy rozené po Tomáši Forejtníkovi.",
    "datum": "Dne 4. října 1899; shoda s poznámkou v narození Anny."
   },
   "nejistoty": [
    "Křestní jméno ženichovy matky Mariana / Marie; rodné příjmení nejasné. Návrh Veselá není potvrzen.",
    "Nepřebírá se dvojité jméno Josef František; původní František je přeškrtnutý."
   ],
   "provenience": "matrika",
   "soubory": [
    "20261102_kniha2755_sn034_full12.jpg",
    "20261102_sn34_zapis_a.jpg",
    "20261102_sn34_zapis_b.jpg"
   ],
   "pozn": "Obraz zkontrolován při integraci 2. 11. 2026. Původní výstupy GLM zůstávají ke stažení odděleně od opravených údajů."
  },
  {
   "id": "PR-L",
   "typ": "matriční zápis – převzatý archivní obraz",
   "nazev": "Narození Genovéfy Tihlaříkové (1877)",
   "popis": "Přijatý obraz zápisu Genovéfy: září 17/18, číslo domu 266, rodiče František Tihlařík a Eva, dcera Tomáše Forejtníka. GLM uvádí knihu 2745, snímek 142; katalogový identifikátor a stránkování se nepodařilo nezávisle potvrdit. Údaj 266 je číslo domu, nikoli bezpečně určené pořadové číslo zápisu.",
   "archiv": "MZA, Klobouky u Brna podle převzatého obrazu; přesný katalogový detail neověřen",
   "url": null,
   "prepis": {
    "dítě": "Genovefa; 17. září 1877, křest následujícího dne. Dům 266.",
    "otec": "František Tihlařík, domkář v Kloboukách, manželský syn Františka Tihlaříka, obecního pastýře, a Genovéfy, rozené [nejasné].",
    "matka": "Eva, manželská dcera Tomáše Forejtníka, domkáře v Kloboukách, a Evy, rozené [nejasné]."
   },
   "nejistoty": [
    "Rodná příjmení obou babiček nejsou dostatečně jistá; nejsou vložena jako fakta.",
    "GLM zaměnilo číslo domu 266 za číslo zápisu 286. Katalogový odkaz /detail/2745 není potvrzený, proto se nenabízí jako ověřená citace.",
    "Datum 17. 9. 1877 podporuje také poznámka u matky v narození Anny; původní čtení 27. 2. se nepřebírá."
   ],
   "provenience": "matrika",
   "soubory": [
    "20261102_A3_1877_sn142.jpg",
    "20261102_sn142_genovefa_L13b.jpg",
    "20261102_sn142_genovefa_L13c.jpg"
   ],
   "pozn": "Obraz zkontrolován při integraci 2. 11. 2026. Původní výstupy GLM zůstávají ke stažení odděleně od opravených údajů."
  }
 ],
 "galerie": [
  {
   "id": "G-RODNY-LIST-1954",
   "soubor": "dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg",
   "titulek": "Rodný list Miroslava Forejtníka (1954)",
   "popis": "Sken rodinného dokumentu dodaný uživatelem. Vystaven 28. dubna 1954 ve Valticích; obsahuje údaje o narození, rodičích a prarodičích.",
   "pramen": "PR-A",
   "skupina": "Rodinné dokumenty",
   "typ": "dokument"
  },
  {
   "id": "G1",
   "soubor": "dukazy/A_prehled_L11.jpg",
   "titulek": "Přehled dvojstrany – narozených Klobouky, kniha 2736",
   "popis": "Přehled snímku 63 na úrovni skládání L11. Vpravo nahoře ručně psaný nadpis „Anno Domine 1895“ – první zápis roku je narození Bohuslava Forejtníka.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "prehled"
  },
  {
   "id": "G2",
   "soubor": "dukazy/A_klobouky_2736_sn63_zapis38_full.jpg",
   "titulek": "Celá oblast zápisu A v plném rozlišení",
   "popis": "Oblast x 3700–7455, y 200–1800 plného rozlišení snímku 63; zápis č. 1/1895 vpravo nahoře.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "prehled"
  },
  {
   "id": "G3",
   "soubor": "dukazy/ZA-1_cislo_zapisu.png",
   "titulek": "Číslo zápisu A: 1",
   "popis": "Úzký výřez sloupce čísel: jasně čitelné „1“ – první zápis roku 1895. Starší širší výřezy dávaly chybná čísla „38/138/185“.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "detail"
  },
  {
   "id": "G4",
   "soubor": "dukazy/ZA-1_datum_narozeni.png",
   "titulek": "Datum narození Bohuslava: 3. 1. 1895",
   "popis": "Výřez sloupců Rok/Měsíc/Den narození: 1895 / 1 / 3. Tři nezávislá konzistentní čtení.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "detail"
  },
  {
   "id": "G5",
   "soubor": "dukazy/ZA-1_sloupec_otec.png",
   "titulek": "Otec dítěte: Karel Forejtník, domkář",
   "popis": "Sloupec Rodičové–Otec: „Karel Forejtník, domkář v Kloboukách“ + zlomek „manž. syn Josefa Forejtníka … a Veroniky …“.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "detail"
  },
  {
   "id": "G6",
   "soubor": "dukazy/ZA-1_poznamka_o_snatku.png",
   "titulek": "Okrajová poznámka o sňatku Bohuslava (1921)",
   "popis": "Dodatečně psaná poznámka u zápisu: „… 1921 … s Annou Dobrovolnou“ – rok a jméno přečteny 2×, den a měsíc nečitelné. Dle oddacího zápisu (PR-C) jde o 26. 4. 1921.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "detail"
  },
  {
   "id": "G7",
   "soubor": "dukazy/A_browser_zaznam.png",
   "titulek": "Oficiální prohlížeč MZA – zápis A",
   "popis": "Screenshot prohlížeče Acta Publica (kniha 2736, snímek 63) s označenou polohou zápisu A. Nižší rozlišení než složené výřezy.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "screenshot"
  },
  {
   "id": "G8",
   "soubor": "dukazy/B_prehled_L11.png",
   "titulek": "Přehled dvojstrany – oddací kniha 2755 (1883–1948)",
   "popis": "Přehled snímku 2. Levá strana = začátek roku 1883; hledaný zápis č. 4 (Karel Forejtník × Rozálie Veselá) vlevo dole.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "prehled"
  },
  {
   "id": "G9",
   "soubor": "dukazy/B_klobouky_2755_sn2_dole_full.jpg",
   "titulek": "Celá oblast zápisu B v plném rozlišení",
   "popis": "Oblast x 0–3700, y 2700–5459 plného rozlišení snímku 2; zápis č. 4/1883 vlevo dole.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "prehled"
  },
  {
   "id": "G10",
   "soubor": "dukazy/ZB-4_cislo_a_daty.png",
   "titulek": "Číslo zápisu B (4) a datové sloupce",
   "popis": "Číslo sňatku 4/1883 a sloupce dat; u podpisu faráře čitelné „5“ (oddávka 5. 2. 1883 pravděpodobně).",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G11",
   "soubor": "dukazy/ZB-4_zenich_sloupec.jpg",
   "titulek": "Ženich: Karel Forejtník, domkář a obuvník",
   "popis": "Sloupec ženicha: jméno, povolání, stav, věk 29 let, náboženství katolické.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G12",
   "soubor": "dukazy/ZB-4_rodice_zenicha.png",
   "titulek": "Rodiče ženicha: Josef Forejtník a Veronika roz. Vystoupilová",
   "popis": "„Manž. syn Josefa Forejtníka, čtvrtláníka v Kloboucích, a Veroniky roz. Václava Vystoupila. Rodiče katolíci a mrtvi.“ Mužský tvar v genitivu (Václava Vystoupila) označuje otce Veroniky, nikoli manžela.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G13",
   "soubor": "dukazy/ZB-4_nevesta_sloupec.jpg",
   "titulek": "Nevěsta: Rozálie Veselá, dělnice",
   "popis": "Sloupec nevěsty: jméno, povolání (dělnice v Kloboukách), věk 29 let, katolická.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G14",
   "soubor": "dukazy/ZB-4_nevesta_detail_rodice.jpg",
   "titulek": "Rodiče nevěsty: Jakub Veselý a Antonie roz. Halmová",
   "popis": "„Manž. dcera Jakuba Veselého, kožešníka v Kloboucích, a Antonie roz. Josefa Halma. Rodiče katolíci a mrtvi.“ Josef Halm je otec Antonie.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G15",
   "soubor": "dukazy/hledani_K2734_sn112_prehled.jpg",
   "titulek": "Pracovní podklad: hledání narození Karla a Rozálie (fol. 221/222)",
   "popis": "Přehled snímku 112 knihy narozených 2734 (1838–1858). Mapování ověřeno na hlavičkách: snímek N = folia [2N−4]/[2N−3]. Prohledány sloupce matek a dětí folií 221–225 (snímky 112–114) – narození Karla Forejtníka ani Rozálie Veselé nenalezena (slabý negativní výsledek, model vynechává záznamy).",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání narození ~1853/54",
   "typ": "pracovni"
  },
  {
   "id": "G16",
   "soubor": "dukazy/hledani_K2734_sn113_prehled.jpg",
   "titulek": "Pracovní podklad: hledání (fol. 222–223)",
   "popis": "Snímek 113 knihy 2734 = folia 222/223 (ověřeno z hlaviček „Klobouker Geburtsbuch fol. 222/223“). Fol. 222: leden–březen 1853/54; sloupec dětí přečten (20 jmen), Karl/Rosalia nenalezen.",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání narození ~1853/54",
   "typ": "pracovni"
  },
  {
   "id": "G17",
   "soubor": "dukazy/hledani_K2734_sn114_prehled.jpg",
   "titulek": "Pracovní podklad: hledání (fol. 224–225)",
   "popis": "Snímek 114 knihy 2734 = folia 224/225. Fol. 224 = rok 1854 (hlavička), fol. 225 = srpen–říjen 1854/55. Sloupce matek bez Veroniky/Antonie (slabý negativní výsledek).",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání narození ~1853/54",
   "typ": "pracovni"
  },
  {
   "id": "G19",
   "soubor": "dukazy/R2786_sn9_radek1.jpg",
   "titulek": "Rejstřík oddaných: řádek sňatku Karla a Rozálie (1883)",
   "popis": "Kniha 2786 (rejstřík oddaných 1883–1949), snímek 9, první řádek sekce: „1883, 5. února, Forejtník Karel a Veselá Rozalie, Klobouky, str. 6“. V tomto kole ověřeno přímo obrazem (2 nezávislá čtení buněk); datum i strana podporují zápis B.",
   "pramen": "PR-G",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G20",
   "soubor": "dukazy/C_stred_zenich.jpg",
   "titulek": "Sňatek Bohuslava a Anny 1921 – ženich",
   "popis": "Kniha 2755 (oddací 1883–1948), str. 172: „Bohuslav Forejtník, stolař v Břeclavi, zákonný syn Karla Forejtníka, domkáře v Kloboukách, a Rozálie rozené Veselé.“ Přímé čtení z tohoto kola.",
   "pramen": "PR-C",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G21",
   "soubor": "dukazy/C_stred_nevesta.jpg",
   "titulek": "Sňatek Bohuslava a Anny 1921 – nevěsta a svědci",
   "popis": "Nevěsta: Anna Dobrovolná (…volná), 20 let, dcera Josefa Dobrovolného, zedníka v Kloboukách. Svědci: Rudolf Forejtník + Josef Dobrovolný (domkář č. 205). Detail roku narození nevěsty se čtl rozporně (1900 vs. 1901) – viz sporná čtení.",
   "pramen": "PR-C",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G22",
   "soubor": "dukazy/B2736_radka_prava.jpg",
   "titulek": "Rodný zápis Jaroslava 1921 – sloupce rodičů",
   "popis": "Kniha 2736, snímek 207: otec Bohuslav Forejtník (manž. syn Karla domkáře a Rozálie rozené Veselé, nar. 3. 1. 1895, oddán v Kloboucích); matka Anna Dobrovolná (nar. 27/6. 1900, dcera Josefa Dobrovolného, zedníka). Poznámka: rodiče oddáni 26. 4. 1921.",
   "pramen": "PR-B",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G23",
   "soubor": "dukazy/B2736_radka_datum.jpg",
   "titulek": "Rodný zápis Jaroslava – datum narození 29. 11. 1921",
   "popis": "Úzký výřez sloupců data: den „29“ ověřen znak po znaku (druhá číslice má tvar 9 s ocáskem, nikoliv 0). Měsíc listopad, rok 1921.",
   "pramen": "PR-B",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G24",
   "soubor": "dukazy/R2785_sn012L_p300.jpg",
   "titulek": "Pracovní podklad: rejstřík oddaných 1819–1882, sekce F",
   "popis": "Kniha 2785, snímek 12 levá: sekce F (Forejtník) s řádky 1838–1881. První řádek: 1838, ~20.–26. 2., ženich Josef F[orejtník?], nevěsta NEČITELNÁ (čtení kolísala Josefa/Anna/[?]), str. 109 – sňatek rodičů Karla Forejtníka nebylo možné potvrdit ani vyloučit (viz sporna_cteni.json SP-1/SP-2).",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání sňatků rodičů",
   "typ": "pracovni"
  },
  {
   "id": "G25",
   "soubor": "dukazy/F_tvrdonice_3443_sn49_native.jpg",
   "titulek": "Pracovní podklad: sňatek Kosků 1919 – neúspěšné čtení",
   "popis": "Kniha 3443 (oddací Tvrdonice 1909–1925), snímek 49, zápis z 25. 6. 1919. Sken má nízké rozlišení; opakovaná strojová čtení dávala zásadně rozporná jména (jen datum a ženich Cyril Kose[c]k se čtli shodně s převzatým přepisem). Vazba na Emilii zůstává hypotézou.",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání sňatků rodičů",
   "typ": "pracovni"
  },
  {
   "id": "G26",
   "soubor": "dukazy/K2736_sn093_prava_full.jpg",
   "titulek": "Pracovní podklad: hledání narození Anny Dobrovolné (červen 1900)",
   "popis": "Kniha 2736 (narození), str. 181, červen–červenec 1900: zápisy z 19./20./21. 6. a 1./4./5. 7. 1900 – zápis Anny Dobrovolné zde není (slabý negativní výsledek; rodiště Anny tedy dosud neověřeno).",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání narození ~1853/54",
   "typ": "pracovni"
  },
  {
   "id": "G27-3kolo-1",
   "skupina": "3. kolo – originály snímků",
   "typ": "pracovni",
   "soubor": "dukazy/C_2755_sn85_full.png",
   "titulek": "Oddací kniha 2755, sn. 85 – celá dvoustrana (1921)",
   "popis": "Originální sken v plném rozlišení 7353×5434; svatební zápis Bohuslava Forejtníka a Anny Dobrovolné z 26. 4. 1921.",
   "pramen": "PR-H"
  },
  {
   "id": "G27-3kolo-2",
   "skupina": "3. kolo – originály snímků",
   "typ": "pracovni",
   "soubor": "dukazy/K2736_sn093_full.png",
   "titulek": "Narození 2736, sn. 93 – celá dvoustrana (VI.–VII. 1900)",
   "popis": "Hledání rodného zápisu Anny Dobrovolné (27. 6. 1900) v Kloboukách; originální sken 7455×5846.",
   "pramen": "PR-H"
  },
  {
   "id": "G27-3kolo-3",
   "skupina": "3. kolo – originály snímků",
   "typ": "pracovni",
   "soubor": "dukazy/B2736_sn207L_full.png",
   "titulek": "Narození 2736, sn. 207 – levá strana (XI. 1921)",
   "popis": "Rodný zápis Jaroslava Josefa Forejtníka v originálním rozlišení 3750×5863.",
   "pramen": "PR-H"
  },
  {
   "id": "G27-3kolo-4",
   "skupina": "3. kolo – originály snímků",
   "typ": "pracovni",
   "soubor": "dukazy/K2753_sn055R_full.png",
   "titulek": "Oddací 2753, sn. 55 – pravá strana (1838)",
   "popis": "Začátek roku 1838 včetně sporného zápisu č. 2 (kandidát sňatku Josefa Forejtníka a Veroniky Vystoupilové).",
   "pramen": "PR-H"
  },
  {
   "id": "G27-3kolo-5",
   "skupina": "3. kolo – originály snímků",
   "typ": "pracovni",
   "soubor": "dukazy/F_tvrdonice_3443_sn49_full2.png",
   "titulek": "Oddací 3443 (Kostice), sn. 49 – celá dvoustrana (1919)",
   "popis": "Skutečné původní rozlišení 2147×1747 (předchozí kolo mělo zmenšeninu). Kandidátní sňatek Cyrila Koska a Alžběty Trpělkové z 25. 6. 1919, strojově ale nečitelné – viz SP-4.",
   "pramen": "PR-F"
  },
  {
   "id": "G-PR-J-1",
   "soubor": "dukazy/20261102_Anna_1900_sn96.jpg",
   "titulek": "Narození Anny Dobrovolné (1900) – celý obraz",
   "popis": "Klobouky u Brna, kniha 2736, snímek 96, fol. 187, zápis 36. Anna, dcera Josefa Dobrovolného a Genovéfy. Ve sloupci narození/křtu jsou 27. a 29. června; 29 není přijatá oprava narození na 29. června. Sňatek rodičů poznamenán 4. října 1899.",
   "pramen": "PR-J",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-J-2",
   "soubor": "dukazy/20261102_A1_r36_zapad.jpg",
   "titulek": "Narození Anny Dobrovolné (1900) – detail 1",
   "popis": "Klobouky u Brna, kniha 2736, snímek 96, fol. 187, zápis 36. Anna, dcera Josefa Dobrovolného a Genovéfy. Ve sloupci narození/křtu jsou 27. a 29. června; 29 není přijatá oprava narození na 29. června. Sňatek rodičů poznamenán 4. října 1899.",
   "pramen": "PR-J",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-J-3",
   "soubor": "dukazy/20261102_A1_r36_vychod.jpg",
   "titulek": "Narození Anny Dobrovolné (1900) – detail 2",
   "popis": "Klobouky u Brna, kniha 2736, snímek 96, fol. 187, zápis 36. Anna, dcera Josefa Dobrovolného a Genovéfy. Ve sloupci narození/křtu jsou 27. a 29. června; 29 není přijatá oprava narození na 29. června. Sňatek rodičů poznamenán 4. října 1899.",
   "pramen": "PR-J",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-J-4",
   "soubor": "dukazy/20261102_A1_hlavicky_kompozit.jpg",
   "titulek": "Narození Anny Dobrovolné (1900) – detail 3",
   "popis": "Klobouky u Brna, kniha 2736, snímek 96, fol. 187, zápis 36. Anna, dcera Josefa Dobrovolného a Genovéfy. Ve sloupci narození/křtu jsou 27. a 29. června; 29 není přijatá oprava narození na 29. června. Sňatek rodičů poznamenán 4. října 1899.",
   "pramen": "PR-J",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-K-1",
   "soubor": "dukazy/20261102_kniha2755_sn034_full12.jpg",
   "titulek": "Sňatek Josefa Dobrovolného a Genovéfy (1899) – celý obraz",
   "popis": "Klobouky u Brna, kniha 2755, snímek 34, levá strana, horní zápis, 4. října 1899. Totožnost s rodiči Anny opíráme o rodiče obou snoubenců a stejnou poznámku o oddavkách u Anny.",
   "pramen": "PR-K",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-K-2",
   "soubor": "dukazy/20261102_sn34_zapis_a.jpg",
   "titulek": "Sňatek Josefa Dobrovolného a Genovéfy (1899) – detail 1",
   "popis": "Klobouky u Brna, kniha 2755, snímek 34, levá strana, horní zápis, 4. října 1899. Totožnost s rodiči Anny opíráme o rodiče obou snoubenců a stejnou poznámku o oddavkách u Anny.",
   "pramen": "PR-K",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-K-3",
   "soubor": "dukazy/20261102_sn34_zapis_b.jpg",
   "titulek": "Sňatek Josefa Dobrovolného a Genovéfy (1899) – detail 2",
   "popis": "Klobouky u Brna, kniha 2755, snímek 34, levá strana, horní zápis, 4. října 1899. Totožnost s rodiči Anny opíráme o rodiče obou snoubenců a stejnou poznámku o oddavkách u Anny.",
   "pramen": "PR-K",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-L-1",
   "soubor": "dukazy/20261102_A3_1877_sn142.jpg",
   "titulek": "Narození Genovéfy Tihlaříkové (1877) – celý obraz",
   "popis": "Přijatý obraz zápisu Genovéfy: září 17/18, číslo domu 266, rodiče František Tihlařík a Eva, dcera Tomáše Forejtníka. GLM uvádí knihu 2745, snímek 142; katalogový identifikátor a stránkování se nepodařilo nezávisle potvrdit. Údaj 266 je číslo domu, nikoli bezpečně určené pořadové číslo zápisu.",
   "pramen": "PR-L",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-L-2",
   "soubor": "dukazy/20261102_sn142_genovefa_L13b.jpg",
   "titulek": "Narození Genovéfy Tihlaříkové (1877) – detail 1",
   "popis": "Přijatý obraz zápisu Genovéfy: září 17/18, číslo domu 266, rodiče František Tihlařík a Eva, dcera Tomáše Forejtníka. GLM uvádí knihu 2745, snímek 142; katalogový identifikátor a stránkování se nepodařilo nezávisle potvrdit. Údaj 266 je číslo domu, nikoli bezpečně určené pořadové číslo zápisu.",
   "pramen": "PR-L",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  },
  {
   "id": "G-PR-L-3",
   "soubor": "dukazy/20261102_sn142_genovefa_L13c.jpg",
   "titulek": "Narození Genovéfy Tihlaříkové (1877) – detail 2",
   "popis": "Přijatý obraz zápisu Genovéfy: září 17/18, číslo domu 266, rodiče František Tihlařík a Eva, dcera Tomáše Forejtníka. GLM uvádí knihu 2745, snímek 142; katalogový identifikátor a stránkování se nepodařilo nezávisle potvrdit. Údaj 266 je číslo domu, nikoli bezpečně určené pořadové číslo zápisu.",
   "pramen": "PR-L",
   "skupina": "Nové doklady – Dobrovolní a Tihlaříkovi",
   "typ": "matrika"
  }
 ],
 "otazky": [
  {
   "id": "O1",
   "otazka": "Narození Karla Forejtníka a Rozálie Veselé (~1853/1854)",
   "stav": "hledáno, nenalezeno",
   "detail": "Věk 29 let při sňatku v únoru 1883 dává odhad narození únor 1853 – únor 1854. V knize narozených 2734 prohledána folia 221–225 (snímky 112–114) – slabé negativní výsledky. Rejstřík 2782 se nepodařilo přečíst. Další krok: systematické čtení folií 217–229, ověření roků z hlaviček."
  },
  {
   "id": "O2",
   "otazka": "Sňatek Josefa Forejtníka a Veroniky Vystoupilové",
   "stav": "hledáno, nedoloženo (kandidát 1838)",
   "detail": "Rejstřík oddaných 2785 (sekce F, snímek 12 levá) proskennován: první řádek sekce F = 1838, ženich Josef F[orejtník?], nevěsta nečitelná (čtení Josefa/Anna/[?]), str. 109. V knize 2753 (snímek 55 pravá) odpovídající únorový zápis 1838 čten 3× rozporně (rodiče ženicha čteni jako „Matěj+Anna?“, otec nevěsty „Jiřík?“ – nesouhlasí s očekávaným párem). Sňatek rodičů Karla nebyl potvrzen ani vyloučen; čtení v sporna_cteni.json SP-1/SP-2. Další krok: lidské/lepší čtení řádku F 1838 a zápisu č. 2/1838 v knize 2753; případně hledání ve starší obdobní knize (před 1819)."
  },
  {
   "id": "O3",
   "otazka": "Sňatek Jakuba Veselého a Antonie Halmové",
   "stav": "částečně hledáno",
   "detail": "Sekce V rejstříku 2785 nebyla v tomto kole lokalizována (kniha míchá německý abecední rejstřík, chronologické strany a český rejstřík; sonda snímků 14–20). Zmapováno: F = sn. 12 levá, G–S ≈ sn. 13–15, S pokračuje sn. 16 levá, chronologické strany od sn. 14 pravá. Sekce V bude patrně mezi snímky 16–20 (před českým rejstříkem). Obnovit u snímků 17–20."
  },
  {
   "id": "O4",
   "otazka": "Rodiště a rodný zápis Anny Dobrovolné (27. 6. 1900)",
   "stav": "nalezeno a zkontrolováno",
   "detail": "Narození Anny nalezeno v knize 2736, snímek 96, fol. 187. Narození 27. 6., křest 29. 6. 1900. Matka Genovéfa, rodiče a sňatek rodičů dohledány; viz PR-J, PR-K, PR-L."
  },
  {
   "id": "O5",
   "otazka": "Návaznost sňatku Cyrila Koska a Alžběty Trpělkové (1919) na Emilii",
   "stav": "návaznost nedoložena",
   "detail": "Přepis kandidátního sňatku 1919 je dostupný v nových výsledcích. Rodiče snoubenců se nepřidávají k Cyrilu a Alžbětě, dokud není doloženo spojení s Emilií narozenou 1924."
  },
  {
   "id": "O6",
   "otazka": "Nedobřečené detaily zápisů A a B",
   "stav": "částečně",
   "detail": "Den křtu Bohuslava (6/12/16/26. 1. 1895); svědci a farář zápisu B; 2 nejasné řádky za rodiči v zápisu B (z kontextu plyne, že jde o formuli „rodiče katolíci a mrtvi“, nikoli povolání dědů); přesné datum oddávky 5. 2. 1883 (podpora v rejstříku PR-G)."
  },
  {
   "id": "O7",
   "otazka": "Snímek 112 knihy 2734: folio 221 nebo 231?",
   "stav": "rozpor v deníku 1. kola",
   "detail": "Starý deník označil snímek 112 jednou jako fol. 221, jindy 231. Podle ověřeného mapování (snímek N = folia [2N−4]/[2N−3]) jde o folia 221/222. Starý údaj „231“ je pravděpodobně chyba; nepřebírat jako ověřený."
  },
  {
   "id": "O-RODINA",
   "otazka": "Matka Miroslava a rodiče Hany",
   "stav": "vyřešeno sdělením",
   "detail": "Adam Forejtník potvrdil babičku z otcovy strany Marii Forejtníkovou a prarodiče z matčiny strany Milana Cvana a Marii Cvanovou."
  },
  {
   "id": "O-GENOVEFA",
   "otazka": "Přesná katalogová citace narození Genovéfy a příjmení jejích babiček",
   "stav": "částečně přečteno",
   "detail": "Vztahy jsou uvedeny v přiloženém obrazu, ale katalogové ID a dvě rodná příjmení nejsou jistá. Odkaz /detail/2745 od GLM není vydáván za ověřenou citaci."
  }
 ],
 "prirustky_kolo2": [
  "Sloučení osob z 1. kola (10 osob) s širším kontextem (Miroslav, Jaroslav, Emilie, Cyril Kosek, Alžběta Trpělková, Josef Dobrovolný) – 16 osob, u každého údaje vyznačena provenience.",
  "Oprava metadat: kniha 2755 (URL detail/12400) je oddací 1883–1948 (oba sňatky 1883 i 1921 v jedné knize); kniha 2754 (URL detail/2755) je oddací 1848–1882.",
  "První funkční rodinný web (strom, karty, vyhledávání bez diakritiky, galerie s lightboxem, časová osa, deník) – otestovaný přes file:// včetně mobilního zobrazení.",
  "OVĚŘENO OBRAZEM (dříve jen převzatý přepis): rejstřík oddaných 2786, sn. 9, 1. řádek – „1883, 5. února, Forejtník Karel a Veselá Rozalie, Klobouky, str. 6“ (datum 5. 2. 1883 a strana 6 sňatku Karla a Rozálie nyní s přímou rejstříkovou podporou).",
  "OVĚŘENO OBRAZEM: sňatek Bohuslava Forejtníka a Anny Dobrovolné 26. 4. 1921 (PR-C, str. 172): ženich stolař v Břeclavi, syn Karla domkáře a Rozálie rozené Veselé; nevěsta 20letá dcera Josefa Dobrovolného, zedníka; svědci Rudolf Forejtník + Josef Dobrovolný (domkář č. 205).",
  "OVĚŘENO OBRAZEM: rodný zápis Jaroslava 29. 11. 1921 (PR-B, sn. 207): den „29“ po znacích; otec Bohuslav stolař (v zápise i jeho rodiče Karel + Rozálie Veselá a poznámka o svatbě 26. 4. 1921); matka Anna Dobrovolná „nar. 27/6. 1900“.",
  "NOVĚ DOKÁZÁNO Z MATRIK: datum narození Anny Dobrovolné 27. 6. 1900 (přečteno ve dvou matrikách; varianta 1901 označena jako misread) a povolání jejího otce Josefa Dobrovolného = zedník v Kloboukách (dříve jen z přepisu).",
  "Nové rodinné stopy (ne do stromu – vztah nedoložen): Josef Forejtník + Barbora ~1884 (rejstřík, str. 10) – jiný Josef, náš zemřel před 2/1883; svědek Rudolf Forejtník u svatby Bohuslava 1921; rodina Václava Forejtníka + Anny v knize 2734 (1. kolo).",
  "Negativní/otevřené výsledky poctivě vedeny: sňatek rodičů Karla (kandidátní řádek F 1838 s nečitelnou nevěstou – sporna_cteni.json SP-1/SP-2), sňatek rodičů Rozálie (sekce V nenalezena), rodiště Anny (na prohledaných stranách 1900 není), přepis Kosků 1919 (blokován nízkým rozlišením skenu – SP-4)."
 ],
 "prirustky_20261102": [
  "Přidáno devět osob do větve Dobrovolných, Tihlaříkových a Evy Forejtníkové.",
  "Sňatek rodičů Anny 4. 10. 1899 a narození Genovéfy 17. 9. 1877.",
  "Opraveno rozlišení narození a křtu Anny (27. a 29. 6.).",
  "Koskovy kandidátní vazby 1919 zůstávají mimo potvrzený strom.",
  "Původní balíky GLM a kontrolní poznámky dostupné na stránce Nové nálezy."
 ]
};
