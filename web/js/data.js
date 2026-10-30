// Vygenerováno scripts/build_web.py z data/rodokmen_data.json – needitovat ručně.
var RODOKMEN_DATA = {
 "meta": {
  "nazev": "Rodokmen Forejtníkových",
  "podtitul": "Soukromý rodinný archiv z matrik Moravského zemského archivu v Brně",
  "vychozi_osoba": "P17",
  "verze": "kolo 2 – první funkční verze",
  "aktualizace": "2026-10-30",
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
   "jmeno": "Miroslav Forejtník mladší",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P11",
   "matka": null,
   "partneri": [
    "P18"
   ],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Syn Miroslava Forejtníka narozeného 26. 4. 1954. Označení mladší rozlišuje otce a syna stejného jména. Datum narození ani matka zatím nebyly sděleny.",
   "nejistoty": [],
   "role": "výchozí osoba rodokmenu; otec Adama a Ondřeje"
  },
  {
   "id": "P18",
   "jmeno": "Hana Forejtníková, rozená Cvanová",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [],
   "otec": null,
   "matka": null,
   "partneri": [
    "P17"
   ],
   "zdroje": [
    "PR-RODINA-2026"
   ],
   "poznamka": "Matka Adama a Ondřeje Forejtníkových. Rodné příjmení Cvanová podle rodinného sdělení; datum narození a rodiče zatím nebyli sděleni.",
   "nejistoty": [],
   "rodne_prijmeni": "Cvanová"
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
   "poznamka": "Syn Miroslava Forejtníka mladšího a Hany Forejtníkové, rozené Cvanové, podle rodinného sdělení.",
   "nejistoty": []
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
   "poznamka": "Syn Miroslava Forejtníka mladšího a Hany Forejtníkové, rozené Cvanové, podle rodinného sdělení.",
   "nejistoty": []
  },
  {
   "id": "P11",
   "jmeno": "Miroslav Forejtník",
   "role": "otec Miroslava Forejtníka mladšího",
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
   "partneri": [],
   "zdroje": [
    "PR-A",
    "PR-B"
   ],
   "poznamka": "Rodný list vystaven 28. 4. 1954 (MNV Valtice, okres Mikulov). Jméno otce a matky přímo v dokumentu.",
   "nejistoty": []
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
   "partneri": [],
   "zdroje": [
    "PR-B",
    "PR-A"
   ],
   "poznamka": "Druhé křestní jméno Josef. Zápis narození ověřen obrazem (PR-B): narozen 29. 11. 1921 v Kloboukách, otec Bohuslav Forejtník, stolař, matka Anna Dobrovolná; poznámka v zápisu odkazuje na sňatek rodičů 26. 4. 1921 (přečteno 2×).",
   "nejistoty": [
    "Pořadové číslo zápisu kolísalo při čteních mezi 34 a 35 (převzatý přepis uvádí 35).",
    "Den křtu nedočten spolehlivě."
   ]
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
   "nejistoty": []
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
   ]
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
   "misto_narozeni": null,
   "povolani": [],
   "otec": "P16",
   "matka": null,
   "partneri": [
    "P3"
   ],
   "zdroje": [
    "PR-C",
    "PR-D",
    "PR-B"
   ],
   "poznamka": "Datum narození 27. 6. 1900 přečteno přímo ve dvou matrikách: v oddacím zápisu 1921 (PR-C) a v poznámce u rodného zápisu syna Jaroslava (PR-B, „nar. 27/6. 1900“). Při sňatku žila u rodičů v Kloboukách; při narození syna je uvedena jako manželka stolaře Forejtníka.",
   "nejistoty": [
    "Místo narození dosud neověřeno – v datech záměrně nevyplněno (prohledané stránky knihy narozených za červen–červenec 1900, str. 180–181, zápis Anny neobsahovaly – slabý negativní výsledek).",
    "Matka dosud neověřena; jedno čtení naznačovalo „Jaro-slavu rozenou Klačinovou“, jiné „Janu rozenou Tihlářovou“ – rozporné, viz sporna_cteni.json.",
    "Rok narození 1900 vs. 1901: dvě čtení dala 27/6. 1900, dvě jiná 1901/1. 1. 1901 – převažuje 1900, viz sporna_cteni.json."
   ]
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
   ]
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
   ]
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
   ]
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
   ]
  },
  {
   "id": "P16",
   "jmeno": "Josef Dobrovolný",
   "narozeni": null,
   "umrti": null,
   "misto_narozeni": null,
   "povolani": [
    {
     "nazev": "zedník v Kloboukách u Brna",
     "provenience": "matrika"
    }
   ],
   "otec": null,
   "matka": null,
   "partneri": [],
   "zdroje": [
    "PR-C",
    "PR-B"
   ],
   "poznamka": "Otec Anny Dobrovolné. Povolání zedník v Kloboukách přečteno přímo v oddacím zápisu 1921 (PR-C) i v rodném zápisu Jaroslava (PR-B, „…efa Dobro[volný], zed[ník] v Kloboukách“).",
   "nejistoty": [
    "Jedno z čtení oddacího zápisu navrhovalo povolání „zemědělský kolář“ – proti dvěma čtením „zedník“; převažuje zedník."
   ]
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
   ]
  },
  {
   "id": "P5",
   "jmeno": "Veronika Forejtníková, rozená Vystoupilová",
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
   ]
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
   "nejistoty": []
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
   ]
  },
  {
   "id": "P8",
   "jmeno": "Antonie Veselá, rozená Halmová",
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
   ]
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
   "nejistoty": []
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
    "img/dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg"
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
    "img/dukazy/B2736_sn207L_radka.jpg",
    "img/dukazy/B2736_radka_leva.jpg",
    "img/dukazy/B2736_radka_prava.jpg",
    "img/dukazy/B2736_radka_datum.jpg",
    "img/dukazy/B2736_radka_jmeno.jpg",
    "img/dukazy/B2736_radka_otec_col.jpg",
    "img/dukazy/B2736_radka_matka_col.jpg",
    "img/dukazy/B2736_sn207L_dole.jpg",
    "img/dukazy/B2736_sn207L_dole2.jpg"
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
    "img/dukazy/C_klobouky_2755_sn85_prehled.jpg",
    "img/dukazy/C_sn85_stred.jpg",
    "img/dukazy/C_stred_zenich.jpg",
    "img/dukazy/C_stred_nevesta.jpg",
    "img/dukazy/C_sn85_dole_A.jpg",
    "img/dukazy/C_sn85_dole_B.jpg",
    "img/dukazy/ZA-1_poznamka_o_snatku.jpg"
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
    "img/dukazy/A_prehled_L11.jpg",
    "img/dukazy/A_klobouky_2736_sn63_zapis38_full.jpg",
    "img/dukazy/ZA-1_datum_narozeni.jpg",
    "img/dukazy/ZA-1_sloupec_otec.jpg",
    "img/dukazy/ZA-1_cislo_zapisu.jpg",
    "img/dukazy/ZA-1_poznamka_o_snatku.jpg"
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
    "img/dukazy/B_prehled_L11.jpg",
    "img/dukazy/B_klobouky_2755_sn2_dole_full.jpg",
    "img/dukazy/ZB-4_cislo_a_daty.jpg",
    "img/dukazy/ZB-4_zenich_sloupec.jpg",
    "img/dukazy/ZB-4_rodice_zenicha.jpg",
    "img/dukazy/ZB-4_nevesta_sloupec.jpg",
    "img/dukazy/ZB-4_nevesta_detail_rodice.jpg"
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
    "img/dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg"
   ]
  },
  {
   "id": "E7",
   "typ": "sňatek (hypotéza)",
   "datum": "1919-06-25",
   "presnost": "den",
   "provenience": "prepis",
   "misto": "Kostice (farnost Tvrdonice)",
   "osoby": [
    "P14",
    "P15"
   ],
   "nazev": "Sňatek Cyrila Koska a Alžběty Trpělkové",
   "popis": "Cyril Kosek, syn Josefa Koska a Františky, a Alžběta Trpělková, dcera Josefa Trpělky a Juliány, uzavřeli sňatek 25. června 1919. Shoda jmen a obce s rodiči Emilie je silná, přímá návaznost na Emilii (narozenou 1924) však dosud doložena nebyla.",
   "pramen": "PR-F",
   "dukazy": [],
   "pozn": "Vazba tohoto páru na Emilii je HYPOTÉZA – dokud nebude nalezen Emiliin vlastní rodný zápis v Kosticích (1924)."
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
   "dukaz": "Adam potvrdil, že otcem Miroslava mladšího je Miroslav narozený 26. 4. 1954."
  },
  {
   "od": "P17",
   "k": "P19",
   "typ": "otec",
   "pramen": "PR-RODINA-2026",
   "provenience": "sdeleni",
   "dukaz": "Adam potvrdil, že je synem Miroslava mladšího a Hany."
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
   "dukaz": "Adam potvrdil, že Ondřej je synem Miroslava mladšího a Hany."
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
    "img/dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg"
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
    "img/dukazy/B2736_sn207_leva.jpg",
    "img/dukazy/B2736_sn207L_radka.jpg",
    "img/dukazy/B2736_radka_leva.jpg",
    "img/dukazy/B2736_radka_prava.jpg",
    "img/dukazy/B2736_radka_datum.jpg",
    "img/dukazy/B2736_radka_jmeno.jpg",
    "img/dukazy/B2736_radka_otec_col.jpg",
    "img/dukazy/B2736_radka_matka_col.jpg",
    "img/dukazy/B2736_sn207L_dole.jpg",
    "img/dukazy/B2736_sn207L_dole2.jpg"
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
    "jméno matky matky dítěte (matka Anny Dobrovolné): čtení zásadně rozporná (Jana Tihlářová? / Jaroslava Klačinová?) – neověřeno",
    "den křtu: nedočten spolehlivě"
   ],
   "provenience": "matrika",
   "pozn": "Zápis přečten přímo obrazem v tomto kole (2. 11. 2026); starší přepis z 1. kola zůstává v souladu (29. 11. 1921, rodiče, sňatek rodičů 26. 4. 1921)."
  },
  {
   "id": "PR-C",
   "typ": "matriční zápis",
   "nazev": "Sňatek Bohuslava Forejtníka a Anny Dobrovolné (1921)",
   "popis": "MZA, kniha 2755 (oddací 1883–1948), strana 172, snímek 85. Sňatek 26. 4. 1921 v Kloboukách. Ženich: Bohuslav Forejtník, stolař v Břeclavi, zákonný syn Karla Forejtníka, domkáře v Kloboukách, a Rozálie rozené Veselé. Nevěsta: Anna Dobrovolná, 20 let, dcera Josefa Dobrovolného, zedníka v Kloboucích. Svědci: Rudolf Forejtník + Josef Dobrovolný (domkář č. 205).",
   "archiv": "MZA Brno, Acta Publica, RC farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/12400?image=216000010-000253-003370-000000-002755-000000-00-00850.jp2",
   "soubory": [
    "img/dukazy/C_klobouky_2755_sn85_prehled.jpg",
    "img/dukazy/C_sn85_stred.jpg",
    "img/dukazy/C_stred_zenich.jpg",
    "img/dukazy/C_stred_nevesta.jpg",
    "img/dukazy/C_sn85_dole_A.jpg",
    "img/dukazy/C_sn85_dole_B.jpg"
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
   "pozn": "Zápis přečten přímo obrazem v tomto kole. Slabší čtení z 1. kola (okrajová poznámka u PR-D) nebylo použito k přepsání tohoto čitelnějšího pramene – naopak, oba prameny si odpovídají (rok 1921, Anna Dobrovolná)."
  },
  {
   "id": "PR-D",
   "typ": "matriční zápis",
   "nazev": "Narození a křest Bohuslava Forejtníka (1895) – zápis A",
   "popis": "MZA, kniha 2736 (narozených 1883–1925), snímek 63, vpravo nahoře, první zápis roku 1895 (č. 1). Nar. 3. 1. 1895 v Kloboukách, otec Karel Forejtník, domkář, matka Rozálie Veselá. Okrajová poznámka o sňatku s Annou Dobrovolnou 1921.",
   "archiv": "MZA Brno, Acta Publica, RC farnost Klobouky u Brna",
   "url": "https://www.mza.cz/actapublica/matrika/detail/14893?image=216000010-00253-00000002736-000-000000000-000002736-00630.jp2",
   "soubory": [
    "img/dukazy/A_prehled_L11.jpg",
    "img/dukazy/A_klobouky_2736_sn63_zapis38_full.jpg",
    "img/dukazy/ZA-1_cislo_zapisu.jpg",
    "img/dukazy/ZA-1_datum_narozeni.jpg",
    "img/dukazy/ZA-1_sloupec_otec.jpg",
    "img/dukazy/ZA-1_poznamka_o_snatku.jpg",
    "img/dukazy/A_browser_topright.jpg",
    "img/dukazy/A_browser_zaznam.jpg"
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
    "img/dukazy/B_prehled_L11.jpg",
    "img/dukazy/B_klobouky_2755_sn2_dole_full.jpg",
    "img/dukazy/ZB-4_cislo_a_daty.jpg",
    "img/dukazy/ZB-4_zenich_sloupec.jpg",
    "img/dukazy/ZB-4_rodice_zenicha.jpg",
    "img/dukazy/ZB-4_zenich_vedlejsi_sloupce.jpg",
    "img/dukazy/ZB-4_nevesta_sloupec.jpg",
    "img/dukazy/ZB-4_nevesta_detail_rodice.jpg",
    "img/dukazy/ZB-4_nevesta_vedlejsi_sloupce.jpg"
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
    "img/dukazy/F_tvrdonice_3443_sn49_native.jpg",
    "img/dukazy/F_tvrdonice_3443_sn49_celkem.jpg",
    "img/dukazy/F_sn49_p1.jpg",
    "img/dukazy/F_sn49_zapis_top.jpg",
    "img/dukazy/F_sn49_zenich.jpg",
    "img/dukazy/F_sn49_nevesta.jpg",
    "img/dukazy/F_browser_sn49.jpg"
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
    "img/dukazy/R2786_sn9_prehled.jpg",
    "img/dukazy/R2786_sn9_radek1.jpg",
    "img/dukazy/R2786_sn9_radek1_datum.jpg",
    "img/dukazy/R2786_sn9_radek1_jmena.jpg",
    "img/dukazy/R2786_sn9_prvni_radky.jpg",
    "img/dukazy/R2786_sn9_r1a.jpg",
    "img/dukazy/R2786_sn9_r1b.jpg"
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
   "popis": "Adam potvrdil, že on a Ondřej jsou synové Miroslava Forejtníka mladšího a Hany Forejtníkové, rozené Cvanové. Otcem Miroslava mladšího je Miroslav Forejtník narozený 26. 4. 1954. Miroslav mladší byl na přání rodiny nastaven jako výchozí osoba. Data narození nových osob nebyla sdělena.",
   "archiv": "soukromé sdělení rodiny",
   "url": null,
   "soubory": [],
   "provenience": "sdeleni",
   "pozn": "Vazby jsou potvrzené rodinou. Nejde o ověření matričním zápisem a nebyla odvozována žádná data narození."
  }
 ],
 "galerie": [
  {
   "id": "G-RODNY-LIST-1954",
   "soubor": "img/dukazy/rodny_list_Miroslav_Forejtnik_1954.jpg",
   "titulek": "Rodný list Miroslava Forejtníka (1954)",
   "popis": "Sken rodinného dokumentu dodaný uživatelem. Vystaven 28. dubna 1954 ve Valticích; obsahuje údaje o narození, rodičích a prarodičích.",
   "pramen": "PR-A",
   "skupina": "Rodinné dokumenty",
   "typ": "dokument"
  },
  {
   "id": "G1",
   "soubor": "img/dukazy/A_prehled_L11.jpg",
   "titulek": "Přehled dvojstrany – narozených Klobouky, kniha 2736",
   "popis": "Přehled snímku 63 na úrovni skládání L11. Vpravo nahoře ručně psaný nadpis „Anno Domine 1895“ – první zápis roku je narození Bohuslava Forejtníka.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "prehled"
  },
  {
   "id": "G2",
   "soubor": "img/dukazy/A_klobouky_2736_sn63_zapis38_full.jpg",
   "titulek": "Celá oblast zápisu A v plném rozlišení",
   "popis": "Oblast x 3700–7455, y 200–1800 plného rozlišení snímku 63; zápis č. 1/1895 vpravo nahoře.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "prehled"
  },
  {
   "id": "G3",
   "soubor": "img/dukazy/ZA-1_cislo_zapisu.jpg",
   "titulek": "Číslo zápisu A: 1",
   "popis": "Úzký výřez sloupce čísel: jasně čitelné „1“ – první zápis roku 1895. Starší širší výřezy dávaly chybná čísla „38/138/185“.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "detail"
  },
  {
   "id": "G4",
   "soubor": "img/dukazy/ZA-1_datum_narozeni.jpg",
   "titulek": "Datum narození Bohuslava: 3. 1. 1895",
   "popis": "Výřez sloupců Rok/Měsíc/Den narození: 1895 / 1 / 3. Tři nezávislá konzistentní čtení.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "detail"
  },
  {
   "id": "G5",
   "soubor": "img/dukazy/ZA-1_sloupec_otec.jpg",
   "titulek": "Otec dítěte: Karel Forejtník, domkář",
   "popis": "Sloupec Rodičové–Otec: „Karel Forejtník, domkář v Kloboukách“ + zlomek „manž. syn Josefa Forejtníka … a Veroniky …“.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "detail"
  },
  {
   "id": "G6",
   "soubor": "img/dukazy/ZA-1_poznamka_o_snatku.jpg",
   "titulek": "Okrajová poznámka o sňatku Bohuslava (1921)",
   "popis": "Dodatečně psaná poznámka u zápisu: „… 1921 … s Annou Dobrovolnou“ – rok a jméno přečteny 2×, den a měsíc nečitelné. Dle oddacího zápisu (PR-C) jde o 26. 4. 1921.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "detail"
  },
  {
   "id": "G7",
   "soubor": "img/dukazy/A_browser_zaznam.jpg",
   "titulek": "Oficiální prohlížeč MZA – zápis A",
   "popis": "Screenshot prohlížeče Acta Publica (kniha 2736, snímek 63) s označenou polohou zápisu A. Nižší rozlišení než složené výřezy.",
   "pramen": "PR-D",
   "skupina": "Zápis A – narození Bohuslava 1895",
   "typ": "screenshot"
  },
  {
   "id": "G8",
   "soubor": "img/dukazy/B_prehled_L11.jpg",
   "titulek": "Přehled dvojstrany – oddací kniha 2755 (1883–1948)",
   "popis": "Přehled snímku 2. Levá strana = začátek roku 1883; hledaný zápis č. 4 (Karel Forejtník × Rozálie Veselá) vlevo dole.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "prehled"
  },
  {
   "id": "G9",
   "soubor": "img/dukazy/B_klobouky_2755_sn2_dole_full.jpg",
   "titulek": "Celá oblast zápisu B v plném rozlišení",
   "popis": "Oblast x 0–3700, y 2700–5459 plného rozlišení snímku 2; zápis č. 4/1883 vlevo dole.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "prehled"
  },
  {
   "id": "G10",
   "soubor": "img/dukazy/ZB-4_cislo_a_daty.jpg",
   "titulek": "Číslo zápisu B (4) a datové sloupce",
   "popis": "Číslo sňatku 4/1883 a sloupce dat; u podpisu faráře čitelné „5“ (oddávka 5. 2. 1883 pravděpodobně).",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G11",
   "soubor": "img/dukazy/ZB-4_zenich_sloupec.jpg",
   "titulek": "Ženich: Karel Forejtník, domkář a obuvník",
   "popis": "Sloupec ženicha: jméno, povolání, stav, věk 29 let, náboženství katolické.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G12",
   "soubor": "img/dukazy/ZB-4_rodice_zenicha.jpg",
   "titulek": "Rodiče ženicha: Josef Forejtník a Veronika roz. Vystoupilová",
   "popis": "„Manž. syn Josefa Forejtníka, čtvrtláníka v Kloboucích, a Veroniky roz. Václava Vystoupila. Rodiče katolíci a mrtvi.“ Mužský tvar v genitivu (Václava Vystoupila) označuje otce Veroniky, nikoli manžela.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G13",
   "soubor": "img/dukazy/ZB-4_nevesta_sloupec.jpg",
   "titulek": "Nevěsta: Rozálie Veselá, dělnice",
   "popis": "Sloupec nevěsty: jméno, povolání (dělnice v Kloboukách), věk 29 let, katolická.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G14",
   "soubor": "img/dukazy/ZB-4_nevesta_detail_rodice.jpg",
   "titulek": "Rodiče nevěsty: Jakub Veselý a Antonie roz. Halmová",
   "popis": "„Manž. dcera Jakuba Veselého, kožešníka v Kloboucích, a Antonie roz. Josefa Halma. Rodiče katolíci a mrtvi.“ Josef Halm je otec Antonie.",
   "pramen": "PR-E",
   "skupina": "Zápis B – sňatek 1883",
   "typ": "detail"
  },
  {
   "id": "G15",
   "soubor": "img/dukazy/hledani_K2734_sn112_prehled.jpg",
   "titulek": "Pracovní podklad: hledání narození Karla a Rozálie (fol. 221/222)",
   "popis": "Přehled snímku 112 knihy narozených 2734 (1838–1858). Mapování ověřeno na hlavičkách: snímek N = folia [2N−4]/[2N−3]. Prohledány sloupce matek a dětí folií 221–225 (snímky 112–114) – narození Karla Forejtníka ani Rozálie Veselé nenalezena (slabý negativní výsledek, model vynechává záznamy).",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání narození ~1853/54",
   "typ": "pracovni"
  },
  {
   "id": "G16",
   "soubor": "img/dukazy/hledani_K2734_sn113_prehled.jpg",
   "titulek": "Pracovní podklad: hledání (fol. 222–223)",
   "popis": "Snímek 113 knihy 2734 = folia 222/223 (ověřeno z hlaviček „Klobouker Geburtsbuch fol. 222/223“). Fol. 222: leden–březen 1853/54; sloupec dětí přečten (20 jmen), Karl/Rosalia nenalezen.",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání narození ~1853/54",
   "typ": "pracovni"
  },
  {
   "id": "G17",
   "soubor": "img/dukazy/hledani_K2734_sn114_prehled.jpg",
   "titulek": "Pracovní podklad: hledání (fol. 224–225)",
   "popis": "Snímek 114 knihy 2734 = folia 224/225. Fol. 224 = rok 1854 (hlavička), fol. 225 = srpen–říjen 1854/55. Sloupce matek bez Veroniky/Antonie (slabý negativní výsledek).",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání narození ~1853/54",
   "typ": "pracovni"
  },
  {
   "id": "G19",
   "soubor": "img/dukazy/R2786_sn9_radek1.jpg",
   "titulek": "Rejstřík oddaných: řádek sňatku Karla a Rozálie (1883)",
   "popis": "Kniha 2786 (rejstřík oddaných 1883–1949), snímek 9, první řádek sekce: „1883, 5. února, Forejtník Karel a Veselá Rozalie, Klobouky, str. 6“. V tomto kole ověřeno přímo obrazem (2 nezávislá čtení buněk); datum i strana podporují zápis B.",
   "pramen": "PR-G",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G20",
   "soubor": "img/dukazy/C_stred_zenich.jpg",
   "titulek": "Sňatek Bohuslava a Anny 1921 – ženich",
   "popis": "Kniha 2755 (oddací 1883–1948), str. 172: „Bohuslav Forejtník, stolař v Břeclavi, zákonný syn Karla Forejtníka, domkáře v Kloboukách, a Rozálie rozené Veselé.“ Přímé čtení z tohoto kola.",
   "pramen": "PR-C",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G21",
   "soubor": "img/dukazy/C_stred_nevesta.jpg",
   "titulek": "Sňatek Bohuslava a Anny 1921 – nevěsta a svědci",
   "popis": "Nevěsta: Anna Dobrovolná (…volná), 20 let, dcera Josefa Dobrovolného, zedníka v Kloboukách. Svědci: Rudolf Forejtník + Josef Dobrovolný (domkář č. 205). Detail roku narození nevěsty se čtl rozporně (1900 vs. 1901) – viz sporná čtení.",
   "pramen": "PR-C",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G22",
   "soubor": "img/dukazy/B2736_radka_prava.jpg",
   "titulek": "Rodný zápis Jaroslava 1921 – sloupce rodičů",
   "popis": "Kniha 2736, snímek 207: otec Bohuslav Forejtník (manž. syn Karla domkáře a Rozálie rozené Veselé, nar. 3. 1. 1895, oddán v Kloboucích); matka Anna Dobrovolná (nar. 27/6. 1900, dcera Josefa Dobrovolného, zedníka). Poznámka: rodiče oddáni 26. 4. 1921.",
   "pramen": "PR-B",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G23",
   "soubor": "img/dukazy/B2736_radka_datum.jpg",
   "titulek": "Rodný zápis Jaroslava – datum narození 29. 11. 1921",
   "popis": "Úzký výřez sloupců data: den „29“ ověřen znak po znaku (druhá číslice má tvar 9 s ocáskem, nikoliv 0). Měsíc listopad, rok 1921.",
   "pramen": "PR-B",
   "skupina": "Nová ověření 2. kola",
   "typ": "detail"
  },
  {
   "id": "G24",
   "soubor": "img/dukazy/R2785_sn012L_p300.jpg",
   "titulek": "Pracovní podklad: rejstřík oddaných 1819–1882, sekce F",
   "popis": "Kniha 2785, snímek 12 levá: sekce F (Forejtník) s řádky 1838–1881. První řádek: 1838, ~20.–26. 2., ženich Josef F[orejtník?], nevěsta NEČITELNÁ (čtení kolísala Josefa/Anna/[?]), str. 109 – sňatek rodičů Karla Forejtníka nebylo možné potvrdit ani vyloučit (viz sporna_cteni.json SP-1/SP-2).",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání sňatků rodičů",
   "typ": "pracovni"
  },
  {
   "id": "G25",
   "soubor": "img/dukazy/F_tvrdonice_3443_sn49_native.jpg",
   "titulek": "Pracovní podklad: sňatek Kosků 1919 – neúspěšné čtení",
   "popis": "Kniha 3443 (oddací Tvrdonice 1909–1925), snímek 49, zápis z 25. 6. 1919. Sken má nízké rozlišení; opakovaná strojová čtení dávala zásadně rozporná jména (jen datum a ženich Cyril Kose[c]k se čtli shodně s převzatým přepisem). Vazba na Emilii zůstává hypotézou.",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání sňatků rodičů",
   "typ": "pracovni"
  },
  {
   "id": "G26",
   "soubor": "img/dukazy/K2736_sn093_prava_full.jpg",
   "titulek": "Pracovní podklad: hledání narození Anny Dobrovolné (červen 1900)",
   "popis": "Kniha 2736 (narození), str. 181, červen–červenec 1900: zápisy z 19./20./21. 6. a 1./4./5. 7. 1900 – zápis Anny Dobrovolné zde není (slabý negativní výsledek; rodiště Anny tedy dosud neověřeno).",
   "pramen": null,
   "skupina": "Pracovní podklady – hledání narození ~1853/54",
   "typ": "pracovni"
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
   "stav": "datum narození nyní doloženo, rodiště stále ne",
   "detail": "Nově: datum 27/6. 1900 přečteno přímo ve dvou matrikách (oddací zápis 1921 + poznámka v rodném zápisu syna Jaroslava 1921); rok 1900 převažuje nad misread-variantou 1901. Otec Josef Dobrovolný, zedník v Kloboukách – doloženo přímo. Rodiště však neověřeno: nastranách knihy 2736 pro červen–červenec 1900 (str. 180–181) zápis Anny není – buď se narodila jinde (jiná farnost), nebo datum v knize leží na jiné straně. Další krok: prohledat celý rok 1900 v knize 2736, případně okolní farnosti."
  },
  {
   "id": "O5",
   "otazka": "Návaznost sňatku Cyrila Koska a Alžběty Trpělkové (1919) na Emilii",
   "stav": "hypotéza (čtení blokováno)",
   "detail": "Zápis nalezen (kniha 3443, snímek 49, 25. 6. 1919), ale přímé čtení se nepovedlo: sken má nízké rozlišení a opakovaná strojová čtení dávala zásadně rozporná jména (pouze datum a ženich Cyril Kose[c]k čteny shodně s převzatým přepisem). Rodiče ženicha i nevěsty tak zůstávají bez přímého potvrzení; vazba na Emilii je stále hypotéza. Nutné Emiliin rodný zápis (Kostice 10. 5. 1924, kniha narozených Tvrdonice)."
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
 ]
};
