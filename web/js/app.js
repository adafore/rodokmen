/* Rodokmen Forejtníkových – aplikace (plain JS, funguje přes file://, žádné moduly, žádný fetch) */
(function () {
  'use strict';

  var D = window.RODOKMEN_DATA;
  var main = document.getElementById('obsah');
  var osobaById = {};
  var pramenById = {};
  var galById = {};

  D.osoby.forEach(function (o) { osobaById[o.id] = o; });
  D.prameny.forEach(function (p) { pramenById[p.id] = p; });
  D.galerie.forEach(function (g) { galById[g.id] = g; });

  /* ---------- pomocné funkce ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function norm(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  var MESICE = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];
  function fmtDatum(iso) {
    if (!iso) return '';
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
    if (!m) return iso;
    return parseInt(m[3], 10) + '. ' + MESICE[parseInt(m[2], 10) - 1] + ' ' + m[1];
  }
  function fmtDatumKratky(iso) {
    if (!iso) return '';
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
    if (!m) return iso;
    return parseInt(m[3], 10) + '. ' + parseInt(m[2], 10) + '. ' + m[1];
  }
  function provBadge(klic, title) {
    var p = D.provenience[klic];
    if (!p) return '';
    return '<span class="odznak ' + p.trida + '" title="' + esc(title || p.popis) + '">' + esc(p.label) + '</span>';
  }
  function rokyOsoby(o) {
    var bits = [];
    if (o.narozeni) {
      if (o.narozeni.odhad) bits.push('~' + o.narozeni.obdobi);
      else if (o.narozeni.datum) bits.push(fmtDatumKratky(o.narozeni.datum));
    }
    if (o.umrti) bits.push(o.umrti.datum ? '† ' + fmtDatumKratky(o.umrti.datum) : '† ' + o.umrti.obdobi);
    return bits.join(' – ');
  }
  function detiOsoby(id) {
    return D.vztahy.filter(function (v) {
      return (v.typ === 'otec' || v.typ === 'matka') && v.od === id;
    }).map(function (v) { return v; });
  }
  function vztahMezi(od, k, typPrefix) {
    for (var i = 0; i < D.vztahy.length; i++) {
      var v = D.vztahy[i];
      if (v.od === od && v.k === k && v.typ.indexOf(typPrefix) === 0) return v;
    }
    return null;
  }
  function udalostiOsoby(id) {
    return D.udalosti.filter(function (e) { return e.osoby.indexOf(id) >= 0; })
      .sort(function (a, b) { return (a.datum || '').localeCompare(b.datum || ''); });
  }
  function hloubkaVetve(id) {
    var o = osobaById[id];
    if (!o) return 1;
    var h = 1;
    if (o.otec) h = Math.max(h, 1 + hloubkaVetve(o.otec));
    if (o.matka) h = Math.max(h, 1 + hloubkaVetve(o.matka));
    return h;
  }
  function nejhlubsiVetev() {
    var max = 1;
    D.osoby.forEach(function (o) { max = Math.max(max, hloubkaVetve(o.id)); });
    return max;
  }
  function pocetOsobSDirectMatrikou() {
    return D.osoby.filter(function (o) {
      return o.narozeni && o.narozeni.provenience === 'matrika';
    }).length;
  }
  function docTitle(t) { document.title = t + ' – Rodokmen Forejtníkových'; }

  function osobaLink(id, extra) {
    var o = osobaById[id];
    if (!o) return '';
    return '<a href="#/osoba/' + id + '"' + (extra || '') + '>' + esc(o.jmeno) + '</a>';
  }

  /* ---------- úvod ---------- */
  function viewUvod() {
    docTitle('Úvod');
    var nejhlubsi = nejhlubsiVetev();
    var pocetOsob = D.osoby.length;
    var pocetPramenu = D.prameny.length;
    var pocetDukazu = D.galerie.length;
    var pocetMatrika = pocetOsobSDirectMatrikou();
    var html = '' +
      '<div class="uvod-heroin">' +
        '<section class="uvod-text">' +
          '<p class="uvod-nadpis-ozdoba">Soukromý rodinný archiv</p>' +
          '<h1>Rodokmen Forejtníkových</h1>' +
          '<p>Tento archiv sleduje předky Miroslava Forejtníka (narozeného 26. dubna 1954 ve Valticích) ' +
          'do moravských matrik uložených v Moravském zemském archivu v Brně. Rodina se po staletí projevuje ' +
          'v Kloboukách u Brna, kde byli domkář a obuvník Karel Forejtník, kožešník Jakub Veselý, zedník Josef ' +
          'Dobrovolný i čtvrtláník Josef Forejtník. Odtud větev pokračuje přes stolaře Bohuslava Forejtníka, ' +
          'který se oženil s Annou Dobrovolnou, dále přes Kostice (rodiče Emilie, rodené Koskové) až po Jaroslava, ' +
          'otce Miroslava. Všechny údaje v tomto archivu mají vyznačený původ – matriční zápis, rodinný dokument, ' +
          'pracovní přepis, odhad nebo hypotézu.</p>' +
          '<p>Archiv neobsahuje vybájené příběhy ani předpokládaná data: kde se rodný zápis dosud nepodařilo ' +
          'najít nebo přečíst, zůstává pole prázdné a hledání je popsáno v badatelském deníku. Hvězdičkou ani ' +
          'otazníkem neodškrtáváme nic, co nemáme přímo v matriční knize.</p>' +
          '<div class="cta-radek">' +
            '<a class="cta" href="#/strom">Otevřít strom předků</a>' +
            '<a class="cta vedlejsi" href="#/galerie">Galerie důkazů</a>' +
            '<a class="cta vedlejsi" href="#/denik">Co zatím hledáme</a>' +
          '</div>' +
          '<h2>Jak číst odznaky původu údajů</h2>' +
          '<p>Každý údaj i vztah v tomto archivu nese odznak svého původu. Kliknutím na odznak se v kartě osoby ' +
          'otevře odpovídající pramen v galerii důkazů.</p>' +
          '<div class="legenda" role="list">' +
            provBadge('matrika') + provBadge('dokument') + provBadge('prepis') +
            provBadge('odhad') + provBadge('hypoteza') + provBadge('rozpor') +
            '<p class="legenda-popis">' + esc(D.provenience.matrika.popis) + ' ' +
            esc(D.provenience.prepis.popis) + ' Hypotézy nejsou rodinnou vazbou, dokud je doloží pramen.</p>' +
          '</div>' +
        '</section>' +
        '<aside class="statistiky" aria-label="Statistiky archivu">' +
          '<div class="statistika"><div class="statistika-cislo">' + pocetOsob + '</div><div class="statistika-popis">osob v rodokmenu</div></div>' +
          '<div class="statistika"><div class="statistika-cislo">' + pocetPramenu + '</div><div class="statistika-popis">zdrojů a pramenů</div></div>' +
          '<div class="statistika"><div class="statistika-cislo">' + pocetDukazu + '</div><div class="statistika-popis">snímků a výřezů v galerii</div></div>' +
          '<div class="statistika"><div class="statistika-cislo">' + pocetMatrika + '</div><div class="statistika-popis">osob s přímo přečteným matričním zápisem narození</div></div>' +
          '<div class="statistika"><div class="statistika-cislo">' + nejhlubsi + '</div><div class="statistika-popis">generací v nejhlubší větvi</div></div>' +
          '<p class="statistika-poznamka">Nejhlubší větev vede od Miroslava přes Jaroslava, Bohuslava, Karla a Veroniku až k Václavu Vystoupilovi. ' +
          'Hloubka znamená délku této jedné linie, nikoli úplné pokrytí všech předků – část větví je dosud neznámá a je uvedena ve stromu zvlášť.</p>' +
        '</aside>' +
      '</div>';
    return html;
  }

  /* ---------- strom ---------- */
  var stromKoren = D.meta.vychozi_osoba;
  var stromRezim = 'graf';

  function uzelHtml(o, jeKoren) {
    var prov = o.narozeni ? o.narozeni.provenience : (o.zdroje && o.zdroje.length ? pramenById[o.zdroje[0]].provenience : 'prepis');
    var zam = '';
    if (o.povolani && o.povolani.length) zam = '<div class="povolani-male">' + esc(o.povolani[0].nazev) + '</div>';
    var roky = rokyOsoby(o);
    return '<a class="uzel-karta" href="#/osoba/' + o.id + '" data-prov="' + esc(prov) + '">' +
      (jeKoren ? '<span class="koren-znacka">výchozí osoba</span>' : '') +
      '<span class="jmeno">' + esc(o.jmeno) + '</span>' +
      (roky ? '<span class="roky">' + esc(roky) + '</span>' : '') + zam + '</a>';
  }

  function stromRekurzivne(id, jeKoren) {
    var o = osobaById[id];
    var html = '<div class="uzel">';
    if (o) {
      html += uzelHtml(o, jeKoren);
      if (o.otec || o.matka) {
        html += '<div class="potomstvo">';
        if (o.otec) html += stromRekurzivne(o.otec, false);
        else html += '<div class="uzel"><div class="neznama">otec neznámý</div></div>';
        if (o.matka) html += stromRekurzivne(o.matka, false);
        else html += '<div class="uzel"><div class="neznama">matka neznámá</div></div>';
        html += '</div>';
      } else {
        html += '<div class="potomstvo"><div class="uzel"><div class="neznama">rodiče neznámí</div></div></div>';
      }
    } else {
      html += '<div class="neznama">neznámá osoba</div>';
    }
    html += '</div>';
    return html;
  }

  function stromSeznamRekurzivne(id, role) {
    var o = osobaById[id];
    if (!o) return '';
    var html = '<li><div class="radek-osoby">';
    if (role) html += '<span class="role-rodice">' + role + ':</span> ';
    html += osobaLink(o.id) + ' <span class="role-rodice">' + esc(rokyOsoby(o)) + '</span> ' + provBadge(o.narozeni && o.narozeni.odhad ? 'odhad' : (o.zdroje && o.zdroje.length ? pramenById[o.zdroje[0]].provenience : 'prepis'));
    html += '</div>';
    if (o.otec || o.matka) {
      html += '<ul class="strom-seznam">';
      if (o.otec) html += stromSeznamRekurzivne(o.otec, 'otec');
      else html += '<li><span class="role-rodice">otec neznámý</span></li>';
      if (o.matka) html += stromSeznamRekurzivne(o.matka, 'matka');
      else html += '<li><span class="role-rodice">matka neznámá</span></li>';
      html += '</ul>';
    }
    html += '</li>';
    return html;
  }

  function viewStrom() {
    docTitle('Strom předků');
    var sorted = D.osoby.slice().sort(function (a, b) {
      var ha = hloubkaVetve(a.id), hb = hloubkaVetve(b.id);
      if (hb !== ha) return hb - ha;
      return a.jmeno.localeCompare(b.jmeno, 'cs');
    });
    var options = sorted.map(function (o) {
      var hl = hloubkaVetve(o.id);
      return '<option value="' + o.id + '"' + (o.id === stromKoren ? ' selected' : '') + '>' +
        esc(o.jmeno) + ' (' + hl + '. generace linie)</option>';
    }).join('');

    var obsah = stromRezim === 'graf'
      ? '<div class="strom-obal"><div class="strom">' + stromRekurzivne(stromKoren, true) + '</div></div>'
      : '<ul class="strom-seznam">' + stromSeznamRekurzivne(stromKoren, null) + '</ul>';

    return '' +
      '<h1>Strom předků</h1>' +
      '<p>Každá karta vede na kartu osoby; tečkovaná a šrafovaná mí označují dosud neznámé rodiče – ' +
      'žádné osoby si nedoplňujeme. Uzly s plným vínovým okrajem mají údaje přímo z matriky, přerušovaný okraj ' +
      'znamená pracovní přepis.</p>' +
      '<div class="strom-ToolBar">' +
        '<span class="strom-nastroj"><label for="strom-koren">Výchozí osoba</label>' +
        '<select id="strom-koren">' + options + '</select></span>' +
        '<span class="strom-prepinac" role="group" aria-label="Zobrazení stromu">' +
          '<button type="button" id="strom-graf" aria-pressed="' + (stromRezim === 'graf') + '">Graf</button>' +
          '<button type="button" id="strom-seznam" aria-pressed="' + (stromRezim === 'seznam') + '">Seznam (klávesnice/čtečky)</button>' +
        '</span>' +
      '</div>' +
      obsah +
      '<p class="strom-poznamka">Strom ukazuje jen předky (rodiče, prarodiče…). Na mobilním telefonu graf posouvejte ' +
      'do stran; seznam nabízí rovnocennou textovou podobu.</p>';
  }

  function bindStrom() {
    var koren = document.getElementById('strom-koren');
    if (koren) {
      koren.addEventListener('change', function () {
        stromKoren = koren.value;
        render();
      });
    }
    var g = document.getElementById('strom-graf');
    var s = document.getElementById('strom-seznam');
    if (g) g.addEventListener('click', function () { stromRezim = 'graf'; render(); });
    if (s) s.addEventListener('click', function () { stromRezim = 'seznam'; render(); });
  }

  /* ---------- karta osoby ---------- */
  function vztahRadek(rodicId, diteId, typ) {
    var v = vztahMezi(rodicId, diteId, typ);
    var o = osobaById[rodicId];
    var prov = v ? v.provenience : 'prepis';
    return '<li>' + osobaLink(rodicId) + ' ' + provBadge(prov) +
      (v && v.dukaz ? '<span class="vztah-duvod">Důkaz: ' + esc(v.dukaz) + ' (' + esc(v.pramen) + ')</span>' : '') +
      '</li>';
  }

  function viewOsoba(id) {
    var o = osobaById[id];
    if (!o) { docTitle('Nenalezeno'); return '<h1>Osoba nenalezena</h1><p><a href="#/strom">Zpět na strom</a></p>'; }
    docTitle(o.jmeno);

    var fakta = '';
    // narození
    if (o.narozeni) {
      var n = o.narozeni;
      var hodnota = n.odhad ? '<em>cca ' + esc(n.obdobi) + '</em> — odhad z: ' + esc(n.zaklad || '') :
        fmtDatum(n.datum) + (n.presnost && n.presnost.indexOf('nejist') >= 0 ? ' <span class="role-rodice">(den nejistý)</span>' : '');
      fakta += '<div class="fakto"><span class="fakto-nazev">Narození</span><span class="fakto-hodnota">' +
        hodnota + ' ' + provBadge(n.provenience) + '</span></div>';
    } else {
      fakta += '<div class="fakto"><span class="fakto-nazev">Narození</span><span class="fakto-hodnota">neznámé – doposud nedoloženo</span></div>';
    }
    if (o.krest) {
      fakta += '<div class="fakto"><span class="fakto-nazev">Křest</span><span class="fakto-hodnota">' +
        fmtDatum(o.krest.datum) + ' ' + provBadge(o.krest.provenience) + '</span></div>';
    }
    if (o.misto_narozeni) {
      fakta += '<div class="fakto"><span class="fakto-nazev">Rodiště</span><span class="fakto-hodnota">' +
        esc(o.misto_narozeni.nazev) + ' ' + provBadge(o.misto_narozeni.provenience) + '</span></div>';
    }
    if (o.umrti) {
      fakta += '<div class="fakto"><span class="fakto-nazev">Úmrtí</span><span class="fakto-hodnota">' +
        esc(o.umrti.datum ? fmtDatum(o.umrti.datum) : o.umrti.obdobi) +
        (o.umrti.zaklad ? ' — ' + esc(o.umrti.zaklad) : '') + ' ' + provBadge(o.umrti.provenience) + '</span></div>';
    }
    if (o.povolani && o.povolani.length) {
      o.povolani.forEach(function (z) {
        fakta += '<div class="fakto"><span class="fakto-nazev">Řemeslo</span><span class="fakto-hodnota">' +
          esc(z.nazev) + ' ' + provBadge(z.provenience) + '</span></div>';
      });
    }

    var rodice = '<ul class="seznam-odkazu">';
    if (o.otec) rodice += vztahRadek(o.otec, o.id, 'otec');
    else rodice += '<li><span class="role-rodice">otec neznámý</span></li>';
    if (o.matka) rodice += vztahRadek(o.matka, o.id, 'matka');
    else rodice += '<li><span class="role-rodice">matka neznámá</span></li>';
    rodice += '</ul>';

    var partneri = '<ul class="seznam-odkazu">';
    if (o.partneri && o.partneri.length) {
      o.partneri.forEach(function (pid) {
        var v = vztahMezi(o.id, pid, 'partnerství');
        partneri += '<li>' + osobaLink(pid) + ' ' + provBadge(v ? v.provenience : 'prepis') +
          (v && v.dukaz ? '<span class="vztah-duvod">Důkaz: ' + esc(v.dukaz) + '</span>' : '') + '</li>';
      });
    } else partneri += '<li><span class="role-rodice">žádný doložený partner</span></li>';
    partneri += '</ul>';

    var detiV = detiOsoby(o.id);
    var deti = '<ul class="seznam-odkazu">';
    if (detiV.length) {
      detiV.forEach(function (v) {
        deti += '<li>' + osobaLink(v.k) + ' ' + provBadge(v.provenience) +
          '<span class="vztah-duvod">' + esc(v.typ) + ' — ' + esc(v.dukaz) + ' (' + esc(v.pramen) + ')</span></li>';
      });
    } else deti += '<li><span class="role-rodice">žádné doložené děti</span></li>';
    deti += '</ul>';

    var ud = udalostiOsoby(o.id).map(function (e) {
      var klasa = (e.provenience === 'hypoteza' || (e.typ || '').indexOf('hypotéza') >= 0 || /pravděpodobn/.test(e.presnost || '')) ? ' odhad' : '';
      return '<div class="udalost-radek">' +
        '<span class="udalost-datum' + klasa + '">' + fmtDatum(e.datum) + (e.presnost && /pravděpodobn/.test(e.presnost) ? ' (pravděpodobné)' : '') + '</span> ' + provBadge(e.provenience) +
        '<span class="udalost-nazev">' + esc(e.nazev) + '</span>' +
        '<span class="udalost-popis">' + esc(e.popis) + (e.misto ? ' · ' + esc(e.misto) : '') + '</span>' +
        (e.pozn ? '<span class="udalost-popis">Pozn.: ' + esc(e.pozn) + '</span>' : '') +
        '</div>';
    }).join('');
    if (!ud) ud = '<p class="role-rodice">U této osoby zatím není evidována žádná konkrétní matriční událost.</p>';

    var zdroje = '<ul class="seznam-odkazu">';
    (o.zdroje || []).forEach(function (zid) {
      var p = pramenById[zid];
      if (!p) return;
      zdroje += '<li><a href="#/galerie?f=' + zid + '">' + esc(p.nazev) + '</a> ' + provBadge(p.provenience);
      if (p.url) zdroje += '<span class="vztah-duvod">Přímý odkaz do archivu: <a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.url.split('?')[0]) + '</a></span>';
      if (p.pozn) zdroje += '<span class="vztah-duvod">' + esc(p.pozn) + '</span>';
      zdroje += '</li>';
    });
    zdroje += '</ul>';

    var nejistoty = '';
    if (o.nejistoty && o.nejistoty.length) {
      nejistoty = '<div class="nejistoty"><strong>Nejistá místa u této osoby</strong><ul>' +
        o.nejistoty.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></div>';
    }
    var poznamka = o.poznamka ? '<div class="poznamka-blok"><strong>Poznámka:</strong> ' + esc(o.poznamka) + '</div>' : '';

    return '' +
      '<p class="zpet-link"><a href="#/strom">← Zpět na strom</a></p>' +
      '<div class="osoba-hlavicka"><h1>' + esc(o.jmeno) + '</h1>' +
      (o.role ? '<span class="role-rodice">' + esc(o.role) + '</span>' : '') + '</div>' +
      '<div class="karta-osoby">' +
        '<div>' +
          '<section class="panel"><h3>Základní údaje</h3>' + fakta + nejistoty + poznamka + '</section>' +
          '<section class="panel"><h3>Události</h3>' + ud + '</section>' +
        '</div>' +
        '<div>' +
          '<section class="panel"><h3>Rodiče</h3>' + rodice + '</section>' +
          '<section class="panel"><h3>Partner / partnerka</h3>' + partneri + '</section>' +
          '<section class="panel"><h3>Děti</h3>' + deti + '</section>' +
          '<section class="panel"><h3>Prameny</h3>' + zdroje + '</section>' +
        '</div>' +
      '</div>';
  }

  /* ---------- galerie ---------- */
  function galerieSkupiny() {
    var order = [];
    var byName = {};
    D.galerie.forEach(function (g) {
      if (!byName[g.skupina]) { byName[g.skupina] = []; order.push(g.skupina); }
      byName[g.skupina].push(g);
    });
    return order.map(function (nazev) { return { nazev: nazev, polozky: byName[nazev] }; });
  }

  function viewGalerie(filtr) {
    docTitle('Galerie důkazů');
    var html = '<h1>Galerie důkazů</h1>' +
      '<p>Skutečné snímky a výřezy z matričních knih – kliknutím se otevře velký obraz s přepisem, výkladem, ' +
      'nejistými místy a odkazem do archivu. Oddíl „pracovní podklady“ obsahuje hledání výřezy, které dosud ' +
      'nevedla k novému doloženému záznamu; nejsou proto počítána jako nové události.</p>' +
      (filtr ? '<p class="role-rodice">Filtr: ' + esc((pramenById[filtr] || {}).nazev || filtr) + '</p>' : '');
    galerieSkupiny().forEach(function (sk) {
      var polozky = sk.polozky.filter(function (g) {
        return !filtr || g.pramen === filtr ||
          (pramenById[filtr] && (pramenById[filtr].soubory || []).indexOf(g.soubor) >= 0);
      });
      if (!polozky.length) return;
      html += '<section class="galerie-skupina"><h2>' + esc(sk.nazev) + '</h2><div class="galerie-mrizka">';
      polozky.forEach(function (g) {
        html += '<button class="dukaz-karta" type="button" data-gal="' + g.id + '" data-typ="' + esc(g.typ) + '">' +
          '<img src="' + esc(g.soubor) + '" alt="' + esc(g.titulek) + '" loading="lazy">' +
          '<span class="dukaz-telo">' +
            '<span class="dukaz-titulek">' + esc(g.titulek) + '</span>' +
            '<span class="dukaz-skupina-razitko">' + (g.pramen ? esc((pramenById[g.pramen] || {}).nazev) : 'pracovní podklad') + '</span>' +
          '</span></button>';
      });
      html += '</div></section>';
    });
    return html;
  }

  function bindGalerie() {
    var karty = main.querySelectorAll('.dukaz-karta');
    karty.forEach(function (k) {
      k.addEventListener('click', function () { otevriLightbox(k.getAttribute('data-gal'), k); });
    });
  }

  /* ---------- lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lbTitulek = document.getElementById('lightbox-titulek');
  var lbImg = document.getElementById('lightbox-img');
  var lbPopis = document.getElementById('lightbox-popis');
  var lbPrepis = document.getElementById('lightbox-prepis');
  var lbPrepisObsah = document.getElementById('lightbox-prepis-obsah');
  var lbNejistoty = document.getElementById('lightbox-nejistoty');
  var lbNejistotySeznam = document.getElementById('lightbox-nejistoty-seznam');
  var lbOdkaz = document.getElementById('lightbox-odkaz');
  var lbPozn = document.getElementById('lightbox-pozn');
  var lbZavrit = document.getElementById('lightbox-zavrit');
  var lbPredchoziFocus = null;

  function formatPrepis(prepis) {
    if (!prepis) return '';
    if (typeof prepis === 'string') return esc(prepis);
    var out = [];
    Object.keys(prepis).forEach(function (k) {
      out.push('» ' + k.replace(/_/g, ' ') + ': ' + prepis[k]);
    });
    return esc(out.join('\n'));
  }

  function otevriLightbox(galId, focusEl) {
    var g = galById[galId];
    if (!g) return;
    lbPredchoziFocus = focusEl || null;
    lbTitulek.textContent = g.titulek;
    lbImg.src = g.soubor;
    lbImg.alt = g.titulek;
    lbPopis.textContent = g.popis || '';
    var p = g.pramen ? pramenById[g.pramen] : null;
    var prepisTxt = '';
    var nejistoty = [];
    if (p) {
      prepisTxt = formatPrepis(p.prepis);
      nejistoty = p.nejistoty || [];
      if (p.url) { lbOdkaz.hidden = false; lbOdkaz.href = p.url; }
      else lbOdkaz.hidden = true;
      lbPozn.textContent = p.pozn || '';
      lbPozn.hidden = !p.pozn;
    } else {
      lbOdkaz.hidden = true;
      lbPozn.hidden = true;
    }
    if (prepisTxt) { lbPrepis.hidden = false; lbPrepisObsah.textContent = prepisTxt; }
    else lbPrepis.hidden = true;
    if (nejistoty.length) {
      lbNejistoty.hidden = false;
      lbNejistotySeznam.innerHTML = nejistoty.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('');
    } else lbNejistoty.hidden = true;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbZavrit.focus();
  }

  function zavriLightbox() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lbImg.src = '';
    if (lbPredchoziFocus && lbPredchoziFocus.focus) lbPredchoziFocus.focus();
  }
  lbZavrit.addEventListener('click', zavriLightbox);
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) zavriLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape' || e.key === 'Esc') { e.preventDefault(); zavriLightbox(); }
    if (e.key === 'Tab') {
      var t = [lbZavrit, lbOdkaz.hidden ? null : lbOdkaz].filter(Boolean);
      var first = t[0], last = t[t.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- časová osa ---------- */
  function viewOsa() {
    docTitle('Časová osa');
    var ud = D.udalosti.slice().sort(function (a, b) { return (a.datum || '').localeCompare(b.datum || ''); });
    var html = '<h1>Časová osa doložených událostí</h1>' +
      '<p>Události seřazené podle data. Plné tečky značí události doložené matrikou nebo rodinným dokumentem; ' +
      'zdvojené okrové tečky a kurzíva značí pravděpodobné nebo hypotetické údaje, které se neřadí jako přesná data.</p>' +
      '<div class="osa">';
    ud.forEach(function (e) {
      var jeOdhad = (e.typ || '').indexOf('hypotéza') >= 0 || /pravděpodobn/.test(e.presnost || '') || e.provenience === 'hypoteza';
      var osoby = e.osoby.map(function (pid) { return osobaLink(pid); }).join(' · ');
      html += '<div class="osa-udalost' + (jeOdhad ? ' odhad' : '') + '">' +
        '<div class="osa-datum' + (jeOdhad ? ' odhad' : '') + '">' + fmtDatum(e.datum) +
        (e.presnost && /pravděpodobn/.test(e.presnost) ? ' (pravděpodobné)' : '') + '</div> ' +
        provBadge(e.provenience) +
        '<div class="osa-nazev">' + esc(e.nazev) + '</div>' +
        '<div class="osa-popis">' + esc(e.popis) + (e.misto ? ' · ' + esc(e.misto) : '') + '</div>' +
        '<div class="osa-osoby">Osoby: ' + (osoby || '—') + '</div>' +
        (e.pozn ? '<div class="osa-popis">Pozn.: ' + esc(e.pozn) + '</div>' : '') +
        '</div>';
    });
    html += '</div><p class="osa-vysvetlivka">Odhady narození z věku při sňatku (např. „cca 1853/54“ u Karla a Rozálie) ' +
      'na ose záměrně nejsou – nejedná se o datované události, ale o výpočty. Najdete je vyznačené na kartách osob.</p>';
    return html;
  }

  /* ---------- deník ---------- */
  function viewDenik() {
    docTitle('Badatelský deník');
    var html = '<h1>Co zatím hledáme</h1>' +
      '<p>Otevřené otázky tohoto rodokmenu a jejich stav. Přírůstky proti výchozím datům jsou uvedeny samostatně; ' +
      'technické poznámky o strojovém čtení jsou na konci stránky.</p>' +
      '<h2>Otevřené otázky</h2>';
    D.otazky.forEach(function (q) {
      html += '<div class="otazka" data-stav="' + esc(q.stav) + '"><span class="otazka-stav">' + esc(q.stav) + '</span>' +
        '<h3>' + esc(q.otazka) + '</h3><p class="otazka-detail">' + esc(q.detail) + '</p></div>';
    });
    html += '<h2>Skutečné přírůstky 2. kola</h2><ul class="prirustky">';
    D.prirustky_kolo2.forEach(function (p) { html += '<li>' + esc(p) + '</li>'; });
    html += '</ul>' +
      '<div class="poznamka-metodika"><strong>O strojovém čtení rukopisů.</strong> Všechny přepisy v tomto archivu ' +
      'vznikly strojovým čtením obrazu (vizuální jazykový model), nikoli lidským čtením. Předchozí práce ukázala, že takový ' +
      'model může být ovlivněn zadáním otázky a že ze špatně oříznutého prázdného výřezu vyčte data, která tam nejsou. ' +
      'Proto se u klíčových jmen ptáme opakovaně a neutrálně („přepiš přesně, co vidíš“), každý výřez před čtením ' +
      'kontrolujeme, zda není prázdný, a rozpory mezi čteními uchováváme místo jejich tišého sloučení. Původní chybné ' +
      'přepisy příjmení („Vada“ místo Veselá, „Vystrčilová“ místo Vystoupilová) už jsou v datech opravené podle ' +
      'čitelnějšího oddacího zápisu z roku 1883; držíme je jen v historii oprav. Detailní pracovní deník s kompletním ' +
      'postupem, negativními výsledky a přesnými odkazy na prohlížené snímky je součástí projektového balíčku (DENIK.md).</div>';
    return html;
  }

  /* ---------- router ---------- */
  function render() {
    var hash = location.hash.replace(/^#\/?/, '') || 'uvod';
    var casti = hash.split('?');
    var cesta = casti[0];
    var parametry = {};
    if (casti[1]) casti[1].split('&').forEach(function (kv) {
      var p = kv.split('=');
      parametry[p[0]] = decodeURIComponent(p[1] || '');
    });

    var html;
    var navAktivni = cesta;
    var segmenty = cesta.split('/');
    if (segmenty[0] === 'osoba' && segmenty[1]) {
      // cesta tvaru #/osoba/P2
      var idOsoby = decodeURIComponent(segmenty[1]);
      html = viewOsoba(idOsoby);
      navAktivni = 'strom';
    } else if (cesta === 'osoba') {
      // zpětná kompatibilita: #/osoba?id=P2
      html = viewOsoba(parametry.id);
      navAktivni = 'strom';
    } else if (cesta === 'strom') { html = viewStrom(); }
    else if (cesta === 'galerie') { html = viewGalerie(parametry.f || null); }
    else if (cesta === 'osa') { html = viewOsa(); }
    else if (cesta === 'denik') { html = viewDenik(); }
    else { html = viewUvod(); navAktivni = 'uvod'; }

    main.innerHTML = html;
    document.querySelectorAll('.navigace a').forEach(function (a) {
      a.classList.toggle('aktivni', a.getAttribute('data-nav') === navAktivni);
    });
    if (cesta === 'strom') bindStrom();
    if (cesta === 'galerie') bindGalerie();
    if (!location.hash || location.hash === '#/uvod') main.focus();
    window.scrollTo(0, 0);
  }

  /* ---------- vyhledávání ---------- */
  var hledInput = document.getElementById('hledani-input');
  var hledVysl = document.getElementById('hledani-vysledky');
  var hledIndex = -1;

  function hledej(q) {
    var nq = norm(q);
    if (!nq || nq.length < 2) return [];
    return D.osoby.filter(function (o) { return norm(o.jmeno).indexOf(nq) >= 0; }).slice(0, 8);
  }

  function zobrazVysledky() {
    var q = hledInput.value;
    var vysledky = hledej(q);
    if (!vysledky.length) { hledVysl.hidden = true; hledVysl.innerHTML = ''; hledIndex = -1; return; }
    hledVysl.innerHTML = vysledky.map(function (o, i) {
      return '<a href="#/osoba/' + o.id + '" data-i="' + i + '">' + esc(o.jmeno) +
        '<span class="vysledek-meta">' + esc(rokyOsoby(o) || 'data narození neznámá') + '</span></a>';
    }).join('');
    hledIndex = -1;
    hledVysl.hidden = false;
  }

  hledInput.addEventListener('input', zobrazVysledky);
  hledInput.addEventListener('focus', zobrazVysledky);
  hledInput.addEventListener('keydown', function (e) {
    var odkazy = hledVysl.querySelectorAll('a');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!odkazy.length) return;
      hledIndex = e.key === 'ArrowDown' ? (hledIndex + 1) % odkazy.length : (hledIndex - 1 + odkazy.length) % odkazy.length;
      odkazy.forEach(function (a, i) { a.classList.toggle('vybrano', i === hledIndex); });
      odkazy[hledIndex].focus();
    } else if (e.key === 'Enter') {
      if (odkazy.length) { e.preventDefault(); odkazy[Math.max(0, hledIndex)].click(); }
    } else if (e.key === 'Escape') {
      hledVysl.hidden = true;
    }
  });
  document.addEventListener('click', function (e) {
    if (!hledVysl.hidden && !hledVysl.contains(e.target) && e.target !== hledInput) {
      hledVysl.hidden = true;
    }
  });
  hledVysl.addEventListener('click', function () {
    hledVysl.hidden = true;
    hledInput.value = '';
  });

  /* ---------- start ---------- */
  document.getElementById('paticka-verze').textContent =
    D.meta.verze + ' · aktualizováno ' + D.meta.aktualizace;
  window.addEventListener('hashchange', render);
  render();
})();
