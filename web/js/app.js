/* ==========================================================================
   RODOKMEN FOREJTNÍKOVÝCH – APLIKACE
   Plain JS (funguje přímo přes file:// i web server, žádné externí závislosti).
   Obsahuje:
   - Interaktivní plátno rodu ve stylu OrgPad (pan, zoom na kurzor, tažení karet,
     zvýraznění pokrevní linie, boční kartotékový inspektor)
   - Portréty osob + možnost nahrát vlastní rodinnou fotku k libovolné osobě
   - Výřezy původních matričních rukopisů přímo na kartách předků
   ========================================================================== */
(function () {
  'use strict';

  var D = window.RODOKMEN_DATA;
  var main = document.getElementById('obsah');
  var portretInput = document.getElementById('portret-upload-input');
  var aktivniOsobaProUpload = null;

  var osobaById = {};
  var pramenById = {};
  var galById = {};

  D.osoby.forEach(function (o) { osobaById[o.id] = o; });
  D.prameny.forEach(function (p) { pramenById[p.id] = p; });
  D.galerie.forEach(function (g) { galById[g.id] = g; });

  /* ==========================================================================
     00 AUTENTIZACE & PŘÍSTUPOVÁ BRÁNA (HESLO PRO VEŘEJNÝ HOSTING)
     ========================================================================== */
  var POVOLENE_OTISKY = [
    '2bd3adadcf4d992867442d326a0d62490b61f04558aa3dcfdb56c6817169fa56', // rodinné heslo: VurRpW8ezlqtnn6zSUncs_e1
    '92971e212c4073e786c0f116915d2481f985736696b2eb0c591dd563ae612f66', // rodina
    'a5423e9f9a805963d8514d9cde1378e4fa9973c5803eafd8608fd0fe956b28af', // Rodina
    'ef83ad136ed97e0ac8eb113033a52fca403a0bab7912f4c2901009f5a9cfe12f', // Forejtnik
    '8804d24c2d195aacb560aff10ce8d5126798800957b498f7053ad9eb3b43b513', // forejtnik
    'fbcf980c2c226e50a034d56930f0a0edc33d4d12abcc484e24af14f298af7910', // Forejtnikovi
    '37be7a373d380b52e858c48dbc8994e29958268b802d95f41da8552d9670b08a', // forejtnikovi
    '3f0c9b03e8e39b03773c7ea7621035cb6fc947cd41ca7c44056d7e7bbaebb3d4', // Adam
    'f7f376a1fcd0d0e11a10ed1b6577c99784d3a6bbe669b1d13fae43eb64634f6e'  // adam
  ];

  var AUTH_STORAGE_KEY = 'rodokmen_prihlasen_v1';

  async function sha256(text) {
    if (!window.crypto || !window.crypto.subtle) {
      // Fallback pro velmi staré prohlížeče
      return text;
    }
    var enc = new TextEncoder();
    var data = enc.encode(text);
    var hashBuffer = await crypto.subtle.digest('SHA-256', data);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  function jePrihlasen() {
    try {
      if (sessionStorage.getItem(AUTH_STORAGE_KEY) === '1') return true;
      var trvale = localStorage.getItem(AUTH_STORAGE_KEY);
      if (trvale && (Date.now() - parseInt(trvale, 10)) < 30 * 24 * 3600 * 1000) {
        return true;
      }
    } catch (e) {}
    return false;
  }

  function nastavPrihlaseni(trvaleUlozeni) {
    try {
      sessionStorage.setItem(AUTH_STORAGE_KEY, '1');
      if (trvaleUlozeni) {
        localStorage.setItem(AUTH_STORAGE_KEY, String(Date.now()));
      }
    } catch (e) {}
  }

  function odhlas() {
    try {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (e) {}
    aktualizujStavBrany();
  }

  function aktualizujStavBrany() {
    var brana = document.getElementById('zamek-brana');
    var prihlasen = jePrihlasen();
    document.body.classList.toggle('odemceno', prihlasen);
    document.body.classList.toggle('zamceno', !prihlasen);

    if (brana) {
      brana.hidden = prihlasen;
    }

    if (prihlasen) {
      render();
    } else {
      if (main) main.innerHTML = '';
      var inp = document.getElementById('zamek-heslo');
      var ch = document.getElementById('zamek-chyba');
      if (ch) ch.hidden = true;
      if (inp) {
        inp.value = '';
        setTimeout(function () { inp.focus(); }, 40);
      }
    }
  }

  var zamekForm = document.getElementById('zamek-formular');
  var zamekInput = document.getElementById('zamek-heslo');
  var zamekChyba = document.getElementById('zamek-chyba');
  var btnZamek = document.getElementById('btn-zamek');

  if (btnZamek) {
    btnZamek.addEventListener('click', function () {
      if (confirm('Chcete se odhlásit a zamknout rodinný archiv?')) {
        odhlas();
      }
    });
  }

  async function zkusOdemknout() {
    if (!zamekInput) return;
    var heslo = zamekInput.value.trim();
    if (!heslo) return;
    var hash = await sha256(heslo);
    if (POVOLENE_OTISKY.indexOf(hash) >= 0) {
      if (zamekChyba) zamekChyba.hidden = true;
      nastavPrihlaseni(true);
      aktualizujStavBrany();
    } else {
      if (zamekChyba) {
        zamekChyba.hidden = false;
        zamekChyba.textContent = 'Nesprávné heslo';
      }
      zamekInput.select();
      zamekInput.focus();
    }
  }

  if (zamekForm) {
    zamekForm.addEventListener('submit', function (e) {
      e.preventDefault();
      zkusOdemknout();
    });
  }

  /* ---------- Pomocné funkce ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function norm(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  var MESICE = [
    'ledna', 'února', 'března', 'dubna', 'května', 'června',
    'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'
  ];

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

  function urciProvenienceOsoby(o) {
    if (!o) return 'prepis';
    if (o.narozeni && o.narozeni.provenience) return o.narozeni.provenience;
    if (o.zdroje && o.zdroje.length && pramenById[o.zdroje[0]]) {
      return pramenById[o.zdroje[0]].provenience || 'prepis';
    }
    return 'prepis';
  }

  function rokyOsoby(o) {
    if (!o) return '';
    var bits = [];
    if (o.narozeni) {
      if (o.narozeni.odhad) bits.push('*~' + o.narozeni.obdobi);
      else if (o.narozeni.datum) bits.push('*' + fmtDatumKratky(o.narozeni.datum));
    }
    if (o.umrti) {
      bits.push(o.umrti.datum ? '†' + fmtDatumKratky(o.umrti.datum) : '†' + o.umrti.obdobi);
    }
    return bits.join(' · ');
  }

  function mistoOsobyKratke(o) {
    if (!o || !o.misto_narozeni) return '';
    var nazev = typeof o.misto_narozeni === 'string' ? o.misto_narozeni : (o.misto_narozeni.nazev || '');
    return nazev.replace(', nemocnice', '').replace(' u Brna', '');
  }

  function mistoOsobyPlne(o) {
    if (!o || !o.misto_narozeni) return '';
    return typeof o.misto_narozeni === 'string' ? o.misto_narozeni : (o.misto_narozeni.nazev || '');
  }

  function rozdelJmeno(o) {
    if (!o) return { hlavni: '', rodne: '' };
    var j = (o.jmeno || '').replace(/\s*\(rodné příjmení nejasné\)/i, '').trim();
    var m = /^(.*?),\s*rozená\s+(.*)$/i.exec(j);
    if (m) {
      return { hlavni: m[1].trim(), rodne: 'roz. ' + m[2].trim() };
    }
    return { hlavni: j, rodne: o.rodne_prijmeni ? ('roz. ' + o.rodne_prijmeni) : '' };
  }

  function inicialyOsoby(o) {
    if (!o || !o.jmeno) return '?';
    var ciste = o.jmeno.split(',')[0].replace(/\([^)]*\)/g, '').trim();
    var casti = ciste.split(/\s+/).filter(Boolean);
    if (!casti.length) return '?';
    if (casti.length === 1) return casti[0].charAt(0).toUpperCase();
    var prvni = casti[0].charAt(0).toUpperCase();
    var posl = casti[casti.length - 1];
    if (posl.toLowerCase() === 'starší' || posl.toLowerCase() === 'mladší') {
      posl = casti[casti.length - 2] || posl;
    }
    return prvni + posl.charAt(0).toUpperCase();
  }

  /* ---------- Portréty osob (vestavěné + uživatelské v localStorage) ---------- */
  function ziskejPortretUrl(o) {
    if (!o) return null;
    try {
      var vlastni = localStorage.getItem('rodokmen_foto_' + o.id);
      if (vlastni) return vlastni;
    } catch (e) {}
    return o.foto || null;
  }

  function maVlastniPortret(id) {
    try {
      return !!localStorage.getItem('rodokmen_foto_' + id);
    } catch (e) {
      return false;
    }
  }

  function otevriDialogPortretu(osobaId) {
    aktivniOsobaProUpload = osobaId;
    if (portretInput) {
      portretInput.value = '';
      portretInput.click();
    }
  }

  function smazVlastniPortret(osobaId) {
    try {
      localStorage.removeItem('rodokmen_foto_' + osobaId);
    } catch (e) {}
    prekresliAktualniPohled(osobaId);
  }

  if (portretInput) {
    portretInput.addEventListener('change', function () {
      var file = portretInput.files && portretInput.files[0];
      if (!file || !aktivniOsobaProUpload) return;
      var cilId = aktivniOsobaProUpload;
      var reader = new FileReader();
      reader.onload = function (ev) {
        var img = new Image();
        img.onload = function () {
          var maxW = 360, maxH = 440;
          var w = img.width, h = img.height;
          var scale = Math.min(1, maxW / w, maxH / h);
          var cw = Math.max(1, Math.round(w * scale));
          var ch = Math.max(1, Math.round(h * scale));
          var canvas = document.createElement('canvas');
          canvas.width = cw;
          canvas.height = ch;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, cw, ch);
          var dataUrl = canvas.toDataURL('image/jpeg', 0.84);
          try {
            localStorage.setItem('rodokmen_foto_' + cilId, dataUrl);
          } catch (err) {
            alert('Portrét se nepodařilo uložit do paměti prohlížeče (limit úložiště).');
          }
          prekresliAktualniPohled(cilId);
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function prekresliAktualniPohled(vybranaId) {
    var hash = location.hash.replace(/^#\/?/, '') || 'uvod';
    if (hash.indexOf('strom') === 0) {
      vykresliScenuPlatna();
      if (vybranaId) otevriInspektor(vybranaId);
    } else {
      render();
    }
  }

  function najdiGaleriiProSoubor(soubor) {
    if (!soubor) return null;
    var base = soubor.split('/').pop().replace(/\.\w+$/, '');
    for (var i = 0; i < D.galerie.length; i++) {
      var g = D.galerie[i];
      var gbase = g.soubor.split('/').pop().replace(/\.\w+$/, '');
      if (gbase === base) return g.id;
    }
    return null;
  }

  function detiOsoby(id) {
    return D.vztahy.filter(function (v) {
      return (v.typ === 'otec' || v.typ === 'matka') && v.od === id;
    });
  }

  function vztahMezi(od, k, typPrefix) {
    for (var i = 0; i < D.vztahy.length; i++) {
      var v = D.vztahy[i];
      if (typPrefix === 'partner') {
        if ((v.od === od && v.k === k) || (v.od === k && v.k === od)) {
          if (v.typ.indexOf('partner') === 0) return v;
        }
      } else if (v.od === od && v.k === k && v.typ.indexOf(typPrefix) === 0) {
        return v;
      }
    }
    return null;
  }

  function udalostiOsoby(id) {
    return D.udalosti.filter(function (e) { return e.osoby.indexOf(id) >= 0; })
      .sort(function (a, b) { return (a.datum || '').localeCompare(b.datum || ''); });
  }

  function hloubkaVetve(id, visited) {
    if (!visited) visited = {};
    if (visited[id]) return 1;
    visited[id] = true;
    var o = osobaById[id];
    if (!o) return 1;
    var h = 1;
    if (o.otec) h = Math.max(h, 1 + hloubkaVetve(o.otec, Object.assign({}, visited)));
    if (o.matka) h = Math.max(h, 1 + hloubkaVetve(o.matka, Object.assign({}, visited)));
    return h;
  }

  function nejhlubsiVetev() {
    var max = 1;
    D.osoby.forEach(function (o) { max = Math.max(max, hloubkaVetve(o.id)); });
    return max;
  }

  function pocetOsobSDirectMatrikou() {
    return D.osoby.filter(function (o) {
      return o.narozeni && o.narozeni.provenience === 'matrika' && !(o.narozeni.presnost || '').includes('údaj v zápisu dcery');
    }).length;
  }

  function docTitle(t) {
    document.title = t + ' · Rodokmen Forejtníků';
  }

  function osobaLink(id, extra) {
    var o = osobaById[id];
    if (!o) return '';
    return '<a href="#/osoba/' + id + '"' + (extra || '') + '>' + esc(o.jmeno) + '</a>';
  }

  function coverageGenerace(rootId, maxGen) {
    var current = [rootId];
    var rows = [];
    for (var g = 1; g <= maxGen; g++) {
      var next = [];
      current.forEach(function (id) {
        var p = id ? osobaById[id] : null;
        next.push(p && p.otec ? p.otec : null);
        next.push(p && p.matka ? p.matka : null);
      });
      var known = next.filter(Boolean).length;
      rows.push({ gen: g, known: known, total: next.length });
      current = next;
    }
    return rows;
  }

  /* ==========================================================================
     01 ÚVOD – ASYMETRICKÁ REDAKČNÍ MONOGRAFIE
     ========================================================================== */
  function viewUvod() {
    docTitle('Úvod');
    var nejhlubsi = nejhlubsiVetev();
    var pocetOsob = D.osoby.length;
    var pocetPramenu = D.prameny.length;
    var pocetDukazu = D.galerie.length;
    var pocetMatrika = pocetOsobSDirectMatrikou();
    var covRows = coverageGenerace('P19', 6);

    var pokrHtml = covRows.map(function (r) {
      var pct = Math.round((r.known / r.total) * 100);
      var nazvy = ['Rodiče', 'Prarodiče', 'Praprarodiče', 'IV. generace předků', 'V. generace předků', 'VI. generace předků'];
      return '<div class="pokryti-radek">' +
        '<div class="pokryti-hlavicka"><span>' + nazvy[r.gen - 1] + '</span><span>' + r.known + ' / ' + r.total + ' (' + pct + ' %)</span></div>' +
        '<div class="pokryti-lista"><div class="pokryti-vypln" style="width:' + pct + '%"></div></div>' +
      '</div>';
    }).join('');

    return '' +
      '<div class="uvod-grid">' +
        '<section class="uvod-text anim-sekce">' +
          '<h1>Rodokmen Forejtníků</h1>' +
          '<div class="uvod-perex">' +
            'Přehled předků bratří <strong>Adama</strong> a <strong>Ondřeje Forejtníků</strong>, ' +
            'synů <strong>Miroslava Forejtníka</strong> a <strong>Hany Forejtníkové, rozené Cvanové</strong>. ' +
            'Každé datum, příbuzenská vazba a povolání nese přímý odkaz na rukopisný pramen, rodný list nebo ověřené rodinné sdělení.' +
          '</div>' +
          '<p>' +
            'Otcovská větev vychází od dědečka <strong>Miroslava Forejtníka staršího</strong> (*26. 4. 1954, Valtice) a babičky ' +
            '<strong>Marie Forejtníkové, rozené Kameníkové</strong> (Němčičky). Přes pradědečka <strong>Jaroslava Josefa Forejtníka</strong> (*1921, Klobouky u Brna) ' +
            'a prababičku <strong>Emilii rozenou Koskovou</strong> (*1924, Kostice) vede rodová linie do farností <strong>Klobouky u Brna</strong> a <strong>Tvrdonice / Kostice</strong> — ' +
            'ke stolaři Bohuslavu Forejtníkovi (*1895), obuvníku Karlu Forejtníkovi (*~1853), čtvrtláníku Josefu Forejtníkovi, zedníku Josefu Dobrovolnému (*1873) a kožešníku Jakubu Veselému.' +
          '</p>' +
          '<p>' +
            'Mateřská větev vychází z vinařské obce <strong>Němčičky</strong> (okres Břeclav), odkud pocházejí dědeček ' +
            '<strong>Milan Cvan</strong> a babička <strong>Marie Cvanová, rozená Stávková</strong>.' +
          '</p>' +

          '<div class="cta-radek">' +
            '<a class="cta" href="#/strom">Otevřít interaktivní mapu rodu</a>' +
            '<a class="cta vedlejsi" href="#/rejstrik">Rejstřík osob (' + pocetOsob + ')</a>' +
            '<a class="cta vedlejsi" href="#/galerie">Archivní důkazy (' + pocetDukazu + ')</a>' +
          '</div>' +

          '<h2>Geografický přehled farností a rodů</h2>' +
          '<table class="katastr-tabulka">' +
            '<thead>' +
              '<tr>' +
                '<th>Farnost / Obec</th>' +
                '<th>Zastoupené rody</th>' +
                '<th>Matriční knihy MZA</th>' +
                '<th>Období</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' +
              '<tr>' +
                '<td><strong>Klobouky u Brna</strong></td>' +
                '<td>Forejtník, Dobrovolný, Veselý, Tihlařík, Vystoupil, Halm</td>' +
                '<td class="mono-bunka">2734, 2736, 2745, 2753, 2755, 2785, 2786</td>' +
                '<td class="mono-bunka">1819 – 1925</td>' +
              '</tr>' +
              '<tr>' +
                '<td><strong>Němčičky</strong> (okr. Břeclav)</td>' +
                '<td>Cvan, Stávek, Kameník, Forejtník</td>' +
                '<td class="mono-bunka">3053, 3054, 3055, 3057, 3058, 3059</td>' +
                '<td class="mono-bunka">1785 – 20. stol.</td>' +
              '</tr>' +
              '<tr>' +
                '<td><strong>Kostice &amp; Tvrdonice</strong></td>' +
                '<td>Kosek, Trpělka</td>' +
                '<td class="mono-bunka">3428, 3434, 3443, 3454</td>' +
                '<td class="mono-bunka">1881 – 1924</td>' +
              '</tr>' +
              '<tr>' +
                '<td><strong>Valtice &amp; Hustopeče</strong></td>' +
                '<td>Forejtník, Cvanová</td>' +
                '<td class="mono-bunka">MNV Valtice sv. 4/1954 · rodinný archiv</td>' +
                '<td class="mono-bunka">1954 – současnost</td>' +
              '</tr>' +
            '</tbody>' +
          '</table>' +

          '<h2>Klasifikace původu dat</h2>' +
          '<p>V archivu striktně odlišujeme přímo přečtený matriční rukopis od neověřených přepisů a odhadů věku:</p>' +
          '<div class="legenda" role="list">' +
            provBadge('matrika') + provBadge('dokument') + provBadge('sdeleni') +
            provBadge('prepis') + provBadge('odhad') + provBadge('hypoteza') + provBadge('rozpor') +
            '<p class="legenda-popis">Kliknutím na libovolnou osobu v mapě rodu otevřete její kartotékový list s výřezem originálního rukopisu a odkazem do Moravského zemského archivu.</p>' +
          '</div>' +
        '</section>' +

        '<aside class="anim-sekce-2">' +
          '<div class="arch-panel">' +
            '<span class="arch-panel-stitek">Souhrnné parametry fondu</span>' +
            '<div class="statistiky-mrizka">' +
              '<div class="statistika-bunka">' +
                '<div class="statistika-cislo">' + pocetOsob + '</div>' +
                '<div class="statistika-popis">Evidovaných osob</div>' +
              '</div>' +
              '<div class="statistika-bunka">' +
                '<div class="statistika-cislo">' + nejhlubsi + '</div>' +
                '<div class="statistika-popis">Generací v linii</div>' +
              '</div>' +
              '<div class="statistika-bunka">' +
                '<div class="statistika-cislo">' + pocetPramenu + '</div>' +
                '<div class="statistika-popis">Archivních pramenů</div>' +
              '</div>' +
              '<div class="statistika-bunka">' +
                '<div class="statistika-cislo">' + pocetDukazu + '</div>' +
                '<div class="statistika-popis">Výřezů a skenů</div>' +
              '</div>' +
              '<div class="statistika-bunka cela-sirka">' +
                '<div class="statistika-cislo">' + pocetMatrika + '</div>' +
                '<div class="statistika-popis">Osob s vlastním přečteným matričním zápisem narození</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="arch-panel">' +
            '<span class="arch-panel-stitek">Pokrytí vývodu předků (od Adama)</span>' +
            pokrHtml +
            '<p style="font-size:0.78rem;color:var(--inkoust-slaby);margin-top:0.7rem;">' +
              'Rodiče (2/2) i všichni čtyři prarodiče (4/4: Forejtník, Kameníková, Cvan, Stávková) jsou plně obsazeni.' +
            '</p>' +
          '</div>' +
        '</aside>' +
      '</div>';
  }

  /* ==========================================================================
     02 INTERAKTIVNÍ PLÁTNO RODU (ORGPAD / MIND-MAP)
     ========================================================================== */
  var stromKoren = 'P19'; // Výchozí pohled od nejmladší generace nebo P17
  var stromRezim = 'komplet'; // 'komplet' | 'vyvod'
  var vybranyUzelId = null;
  var pohybKaretPovolen = false;

  // Stav kamery plátna (pan & zoom)
  var platnoKamera = {
    x: 0,
    y: 0,
    scale: 0.85,
    initialized: false
  };

  // Uživatelsky posunuté pozice uzlů v rámci relace (jako v OrgPadu)
  var vlastniPoziceUzlu = {};
  var aktualniRozvrzeni = null;

  /* Spočítá kompletní rozvržení všech 32 osob v 8 generacích bez křížení čar */
  function spocitejKompletniRozvrzeni() {
    var CARD_W = 236;
    var CARD_H = 84;
    var GEN_GAP_Y = 166;

    // Pevné a přehledné uspořádání všech větví podle generací (0 = nejmladší dole, 7 = nejstarší nahoře)
    // Každá položka má id, gen (0..7) a vodorovný slot (v násobcích šířky sloupce)
    var plan = [
      // Gen 0 (nejmladší - dole)
      { id: 'P19', gen: 0, xSlot: -0.55 }, // Adam Forejtník
      { id: 'P20', gen: 0, xSlot: 0.55 },  // Ondřej Forejtník

      // Gen 1 (rodiče)
      { id: 'P17', gen: 1, xSlot: -0.65 }, // Miroslav Forejtník
      { id: 'P18', gen: 1, xSlot: 0.65 },  // Hana Forejtníková roz. Cvanová

      // Gen 2 (prarodiče: otcovská větev vlevo, mateřská větev Cvan/Stávek vpravo)
      { id: 'P11', gen: 2, xSlot: -1.95 }, // Miroslav Forejtník st. (*1954)
      { id: 'P30', gen: 2, xSlot: -0.75 }, // Marie Forejtníková roz. Kameníková
      { id: 'P31', gen: 2, xSlot: 0.75 },  // Milan Cvan
      { id: 'P32', gen: 2, xSlot: 1.95 },  // Marie Cvanová roz. Stávková

      // Gen 3 (praprarodiče: Jaroslav + Emilie)
      { id: 'P12', gen: 3, xSlot: -2.15 }, // Jaroslav Josef Forejtník (*1921)
      { id: 'P13', gen: 3, xSlot: 0.85 },  // Emilie Forejtníková roz. Koseková (*1924)

      // Gen 4 (Bohuslav + Anna Dobrovolná | Cyril Kosek + Alžběta Trpělková)
      { id: 'P3',  gen: 4, xSlot: -3.25 }, // Bohuslav Forejtník (*1895)
      { id: 'P9',  gen: 4, xSlot: -0.85 }, // Anna Dobrovolná (*1900)
      { id: 'P14', gen: 4, xSlot: 0.65 },  // Cyril Kosek
      { id: 'P15', gen: 4, xSlot: 1.85 },  // Alžběta Trpělková

      // Gen 5 (Karel + Rozálie Veselá | Josef Dobrovolný + Genovéfa Tihlaříková)
      { id: 'P1',  gen: 5, xSlot: -3.85 }, // Karel Forejtník (*~1853)
      { id: 'P2',  gen: 5, xSlot: -2.45 }, // Rozálie Veselá (*~1853)
      { id: 'P16', gen: 5, xSlot: -1.05 }, // Josef Dobrovolný (*1873)
      { id: 'P21', gen: 5, xSlot: 0.55 },  // Genovéfa Dobrovolná roz. Tihlaříková (*1877)

      // Gen 6 (Josef F. + Veronika Vystoupilová | Jakub Veselý + Antonie Halmová | František D. + Mariana | František Tihlařík + Eva Forejtníková)
      { id: 'P4',  gen: 6, xSlot: -4.45 }, // Josef Forejtník
      { id: 'P5',  gen: 6, xSlot: -3.35 }, // Veronika roz. Vystoupilová
      { id: 'P7',  gen: 6, xSlot: -2.20 }, // Jakub Veselý
      { id: 'P8',  gen: 6, xSlot: -1.10 }, // Antonie roz. Halmová
      { id: 'P22', gen: 6, xSlot: 0.05 },  // František Dobrovolný
      { id: 'P23', gen: 6, xSlot: 1.15 },  // Mariana Dobrovolná
      { id: 'P24', gen: 6, xSlot: 2.30 },  // František Tihlařík
      { id: 'P25', gen: 6, xSlot: 3.45 },  // Eva roz. Forejtníková

      // Gen 7 (nejstarší doložení předkové v 18./19. století)
      { id: 'P6',  gen: 7, xSlot: -3.35 }, // Václav Vystoupil
      { id: 'P10', gen: 7, xSlot: -1.10 }, // Josef Halm
      { id: 'P26', gen: 7, xSlot: 1.75 },  // František Tihlařík st.
      { id: 'P27', gen: 7, xSlot: 2.85 },  // Genovéfa Tihlaříková st.
      { id: 'P28', gen: 7, xSlot: 3.95 },  // Tomáš Forejtník
      { id: 'P29', gen: 7, xSlot: 5.05 }   // Eva Forejtníková st.
    ];

    var SLOT_WIDTH = 258;
    var MAX_GEN = 7;
    var uzly = [];
    var uzelMap = {};

    // Zahrneme i případné budoucí osoby přidané do D.osoby
    var planIds = {};
    plan.forEach(function (item) { planIds[item.id] = true; });
    var extraSlot = 3.8;
    D.osoby.forEach(function (o) {
      if (!planIds[o.id]) {
        plan.push({ id: o.id, gen: 2, xSlot: extraSlot });
        extraSlot += 1.2;
      }
    });

    var TREE_OFFSET_X = 1400; // Zajišťuje, že všechny karty začínají napravo od časové osy generací (x >= 250 px)
    var minXByGen = {};

    plan.forEach(function (item) {
      var o = osobaById[item.id];
      if (!o) return;
      var defaultX = Math.round(item.xSlot * SLOT_WIDTH) + TREE_OFFSET_X;
      var defaultY = Math.round((MAX_GEN - item.gen) * GEN_GAP_Y);
      var custom = vlastniPoziceUzlu['komplet_' + o.id];
      var u = {
        id: o.id,
        osoba: o,
        gen: item.gen,
        x: custom ? custom.x : defaultX,
        y: custom ? custom.y : defaultY,
        w: CARD_W,
        h: CARD_H
      };
      if (minXByGen[item.gen] === undefined || u.x < minXByGen[item.gen]) {
        minXByGen[item.gen] = u.x;
      }
      uzly.push(u);
      uzelMap[o.id] = u;
    });

    // Pásy generací (čisté časové údaje bez výčtů obcí + minX první karty v řadě proti překryvu)
    var pasy = [
      { gen: 7, y: (MAX_GEN - 7) * GEN_GAP_Y - 18, minX: minXByGen[7] || 250, label: 'VIII. GENERACE · přelom 18. a 19. stol.' },
      { gen: 6, y: (MAX_GEN - 6) * GEN_GAP_Y - 18, minX: minXByGen[6] || 250, label: 'VII. GENERACE · 1. pol. 19. stol.' },
      { gen: 5, y: (MAX_GEN - 5) * GEN_GAP_Y - 18, minX: minXByGen[5] || 250, label: 'VI. GENERACE · ~1853–1877' },
      { gen: 4, y: (MAX_GEN - 4) * GEN_GAP_Y - 18, minX: minXByGen[4] || 250, label: 'V. GENERACE · 1891–1906' },
      { gen: 3, y: (MAX_GEN - 3) * GEN_GAP_Y - 18, minX: minXByGen[3] || 250, label: 'IV. GENERACE · 1921–1924' },
      { gen: 2, y: (MAX_GEN - 2) * GEN_GAP_Y - 18, minX: minXByGen[2] || 250, label: 'III. GENERACE · pol. 20. stol.' },
      { gen: 1, y: (MAX_GEN - 1) * GEN_GAP_Y - 18, minX: minXByGen[1] || 250, label: 'II. GENERACE · rodiče' },
      { gen: 0, y: (MAX_GEN - 0) * GEN_GAP_Y - 18, minX: minXByGen[0] || 250, label: 'I. GENERACE · současnost' }
    ];

    // Manželské dvojice
    var snatky = [
      { m: 'P17', z: 'P18', label: '⚭ manželé' },
      { m: 'P11', z: 'P30', label: '⚭ manželé' },
      { m: 'P31', z: 'P32', label: '⚭ Němčičky' },
      { m: 'P12', z: 'P13', label: '⚭ manželé' },
      { m: 'P3',  z: 'P9',  label: '⚭ 26. 4. 1921' },
      { m: 'P14', z: 'P15', label: '⚭ 1919 (?)' },
      { m: 'P1',  z: 'P2',  label: '⚭ 5. 2. 1883' },
      { m: 'P16', z: 'P21', label: '⚭ 4. 10. 1899' },
      { m: 'P4',  z: 'P5',  label: '⚭ manželé' },
      { m: 'P7',  z: 'P8',  label: '⚭ manželé' },
      { m: 'P22', z: 'P23', label: '⚭ manželé' },
      { m: 'P24', z: 'P25', label: '⚭ manželé' },
      { m: 'P26', z: 'P27', label: '⚭ manželé' },
      { m: 'P28', z: 'P29', label: '⚭ manželé' }
    ];

    return {
      uzly: uzly,
      uzelMap: uzelMap,
      pasy: pasy,
      snatky: snatky,
      neznami: []
    };
  }

  /* Spočítá klasický strom vývodu předků pro vybranou osobu (stromKoren) */
  function spocitejVyvodRozvrzeni(korenId) {
    var CARD_W = 236;
    var CARD_H = 84;
    var LEVEL_H = 178;
    var LEAF_GAP = 258;

    var uzly = [];
    var uzelMap = {};
    var neznami = [];
    var leafCounter = 0;

    function buildTree(id, depth, roleText, parentId) {
      var o = id ? osobaById[id] : null;
      if (!o) {
        var unkId = 'unk_' + parentId + '_' + roleText;
        var ux = leafCounter * LEAF_GAP;
        leafCounter += 0.82;
        var unkNode = {
          id: unkId,
          neznamy: true,
          label: roleText + ' neznám' + (roleText === 'matka' ? 'á' : 'ý'),
          x: ux,
          y: -depth * LEVEL_H,
          w: 190,
          h: 52,
          parentId: parentId
        };
        neznami.push(unkNode);
        return unkNode;
      }

      var leftChild = null;
      var rightChild = null;
      if (o.otec || o.matka) {
        leftChild = buildTree(o.otec, depth + 1, 'otec', o.id);
        rightChild = buildTree(o.matka, depth + 1, 'matka', o.id);
      }

      var myX;
      if (leftChild && rightChild) {
        myX = (leftChild.x + rightChild.x) / 2;
      } else {
        myX = leafCounter * LEAF_GAP;
        leafCounter += 1;
      }
      var myY = -depth * LEVEL_H;
      var custom = vlastniPoziceUzlu['vyvod_' + korenId + '_' + o.id];

      var node = {
        id: o.id,
        osoba: o,
        gen: depth,
        x: custom ? custom.x : Math.round(myX),
        y: custom ? custom.y : Math.round(myY),
        w: CARD_W,
        h: CARD_H,
        leftChild: leftChild,
        rightChild: rightChild
      };
      uzly.push(node);
      uzelMap[o.id] = node;
      return node;
    }

    buildTree(korenId, 0, '', 'root');

    return {
      uzly: uzly,
      uzelMap: uzelMap,
      pasy: [],
      snatky: [],
      neznami: neznami
    };
  }

  /* Najde všechny pokrevně či partnersky spojené osoby pro zvýraznění větve */
  function najdiPokrevniLinii(id) {
    var rel = {};
    if (!id || !osobaById[id]) return rel;
    rel[id] = true;

    // 1. Všichni předkové nahoru
    function nahoru(currId) {
      var o = osobaById[currId];
      if (!o) return;
      if (o.otec && !rel[o.otec]) { rel[o.otec] = true; nahoru(o.otec); }
      if (o.matka && !rel[o.matka]) { rel[o.matka] = true; nahoru(o.matka); }
    }
    nahoru(id);

    // 2. Všichni potomci dolů
    function dolu(currId) {
      D.osoby.forEach(function (o) {
        if ((o.otec === currId || o.matka === currId) && !rel[o.id]) {
          rel[o.id] = true;
          dolu(o.id);
        }
      });
    }
    dolu(id);

    // 3. Přímí partneři vybrané osoby
    var vybr = osobaById[id];
    if (vybr && vybr.partneri) {
      vybr.partneri.forEach(function (pid) { rel[pid] = true; });
    }
    return rel;
  }

  /* Sestaví HTML karty jedné osoby na plátně */
  function vytvorHtmlUzlu(u) {
    var o = u.osoba;
    var prov = urciProvenienceOsoby(o);
    var jm = rozdelJmeno(o);
    var roky = rokyOsoby(o);
    var obec = mistoOsobyKratke(o);
    var fotoUrl = ziskejPortretUrl(o);
    var remeslo = (o.povolani && o.povolani.length) ? o.povolani[0].nazev.replace(' v Kloboukách u Brna', '').replace(' (Hustopeče)', '') : '';

    var avatarHtml = '';
    if (fotoUrl) {
      avatarHtml = '<div class="uzel-avatar"><img src="' + esc(fotoUrl) + '" alt="' + esc(o.jmeno) + '"></div>';
    } else {
      avatarHtml = '<div class="uzel-avatar"><span class="uzel-avatar-inicaly">' + esc(inicialyOsoby(o)) + '</span>' +
        (o.vyrez_rukopisu ? '<span class="uzel-avatar-indikator" title="Má matriční snímek">MZA</span>' : '') +
      '</div>';
    }

    return '' +
      '<div class="mapa-uzel' + (vybranyUzelId === o.id ? ' vybrany' : '') + '" ' +
           'data-id="' + esc(o.id) + '" data-prov="' + esc(prov) + '" ' +
           'style="left:' + u.x + 'px;top:' + u.y + 'px;" tabindex="0" role="button" ' +
           'aria-label="' + esc(o.jmeno) + '">' +
        '<div class="uzel-horni-lista">' +
          '<span class="uzel-obec-stitek">' + esc(obec || D.provenience[prov].label) + '</span>' +
        '</div>' +
        '<div class="uzel-obsah">' +
          avatarHtml +
          '<div class="uzel-texty">' +
            '<span class="uzel-jmeno">' + esc(jm.hlavni) + '</span>' +
            (jm.rodne ? '<span class="uzel-rodne">' + esc(jm.rodne) + '</span>' : '') +
            (roky ? '<span class="uzel-roky">' + esc(roky) + '</span>' : '') +
            (remeslo ? '<span class="uzel-remeslo">' + esc(remeslo) + '</span>' : '') +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function viewStrom() {
    docTitle('Mapa rodu');
    var sorted = D.osoby.slice().sort(function (a, b) {
      var ha = hloubkaVetve(a.id), hb = hloubkaVetve(b.id);
      if (hb !== ha) return hb - ha;
      return a.jmeno.localeCompare(b.jmeno, 'cs');
    });
    var options = sorted.map(function (o) {
      return '<option value="' + o.id + '"' + (o.id === stromKoren ? ' selected' : '') + '>' +
        esc(o.jmeno) + '</option>';
    }).join('');

    return '' +
      '<div class="platno-kontejner' + (pohybKaretPovolen ? ' pohyb-karet-povolen' : '') + '" id="platno-kontejner">' +
        '<!-- Horní plovoucí ovládací panel -->' +
        '<div class="platno-hud-nahore">' +
          '<div class="platno-hud-skupina" role="group" aria-label="Režim zobrazení mapy a výběr osoby">' +
            '<span class="platno-hud-stitek">Režim:</span>' +
            '<button type="button" class="platno-tlacitko' + (stromRezim === 'komplet' ? ' aktivni' : '') + '" id="rezim-komplet" title="Zobrazit všech ' + D.osoby.length + ' osob a všechny rodové větve najednou">' +
              'Celá rodová síť (' + D.osoby.length + ')' +
            '</button>' +
            '<button type="button" class="platno-tlacitko' + (stromRezim === 'vyvod' ? ' aktivni' : '') + '" id="rezim-vyvod" title="Klasický strom předků od vybrané osoby">' +
              'Vývod předků' +
            '</button>' +
            '<span class="platno-hud-oddelovac" aria-hidden="true"></span>' +
            '<label for="strom-koren" class="platno-hud-stitek">Zaměřit osobu:</label>' +
            '<select id="strom-koren" class="platno-select">' + options + '</select>' +
          '</div>' +

          '<div class="platno-hud-skupina">' +
            '<button type="button" class="platno-tlacitko' + (pohybKaretPovolen ? ' aktivni' : '') + '" id="platno-toggle-pohyb" aria-pressed="' + (pohybKaretPovolen ? 'true' : 'false') + '" title="Povolit nebo zakázat ruční přesouvání karet osob">' +
              (pohybKaretPovolen ? 'Pohyb osob: povolen' : 'Povolit pohyb osob') +
            '</button>' +
            '<button type="button" class="platno-tlacitko" id="platno-reset-karty" title="Vrátit ručně posunuté karty na výchozí pozice">Srovnat karty</button>' +
            '<button type="button" class="platno-tlacitko" id="platno-fullscreen" title="Přepnout na celou obrazovku">Celá obrazovka</button>' +
          '</div>' +
        '</div>' +

        '<!-- Mobilní plovoucí tlačítko (FAB) a spodní list (bottom sheet) pro @media (max-width: 768px) -->' +
        '<button type="button" class="platno-mobilni-fab" id="platno-mobilni-fab" aria-expanded="false" aria-controls="platno-mobilni-sheet">' +
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<line x1="4" y1="6" x2="20" y2="6"></line>' +
            '<line x1="4" y1="12" x2="20" y2="12"></line>' +
            '<line x1="4" y1="18" x2="20" y2="18"></line>' +
          '</svg>' +
          '<span>Filtr a osoba</span>' +
        '</button>' +
        '<div class="platno-mobilni-backdrop" id="platno-mobilni-backdrop" hidden></div>' +
        '<div class="platno-mobilni-sheet" id="platno-mobilni-sheet" hidden role="dialog" aria-label="Ovládání stromu">' +
          '<div class="platno-mobilni-sheet-hlavicka">' +
            '<span class="platno-mobilni-sheet-titul">Zobrazení a výběr osoby</span>' +
            '<button type="button" class="platno-mobilni-sheet-zavrit" id="platno-mobilni-zavrit" aria-label="Zavřít panel">✕</button>' +
          '</div>' +
          '<div class="platno-mobilni-sheet-telo">' +
            '<div class="platno-mobilni-pole">' +
              '<label for="strom-koren-mobil" class="platno-hud-stitek">Zaměřit osobu ve stromu:</label>' +
              '<select id="strom-koren-mobil" class="platno-select">' + options + '</select>' +
            '</div>' +
            '<div class="platno-mobilni-rezimy">' +
              '<button type="button" class="platno-tlacitko' + (stromRezim === 'komplet' ? ' aktivni' : '') + '" id="rezim-komplet-mobil">' +
                'Celá rodová síť (' + D.osoby.length + ')' +
              '</button>' +
              '<button type="button" class="platno-tlacitko' + (stromRezim === 'vyvod' ? ' aktivni' : '') + '" id="rezim-vyvod-mobil">' +
                'Vývod předků' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<!-- Fixní levý sloupec časové osy generací (sticky timeline column) -->' +
        '<div class="platno-osa-sloupec" id="platno-osa-sloupec" aria-hidden="true"></div>' +

        '<!-- Samotná posuvná a škálovatelná scéna (OrgPad styl) -->' +
        '<div class="platno-scena" id="platno-scena"></div>' +

        '<!-- Dolní plovoucí lišta -->' +
        '<div class="platno-hud-dole">' +
          '<div class="platno-info-panel">' +
            '<span><strong>OVLÁDÁNÍ PLÁTNA:</strong> Tažením myší posouváte mapu · Kolečkem přibližujete · Kliknutím na osobu otevřete spis a rukopis</span>' +
          '</div>' +
          '<div class="platno-zoom-panel">' +
            '<button type="button" class="platno-tlacitko" id="zoom-out" aria-label="Oddálit">−</button>' +
            '<span class="platno-zoom-hodnota" id="zoom-label">85 %</span>' +
            '<button type="button" class="platno-tlacitko" id="zoom-in" aria-label="Přiblížit">+</button>' +
          '</div>' +
        '</div>' +

        '<!-- Boční kartotékový inspektor vybrané osoby -->' +
        '<aside class="inspektor-zasuvka" id="inspektor-zasuvka" aria-label="Detail vybrané osoby">' +
          '<div class="inspektor-hlavicka">' +
            '<span id="inspektor-kod">OSOBNÍ KARTA</span>' +
            '<button type="button" class="inspektor-zavrit" id="inspektor-zavrit">✕ ZAVŘÍT</button>' +
          '</div>' +
          '<div class="inspektor-telo" id="inspektor-telo"></div>' +
        '</aside>' +
      '</div>';
  }

  function stromSeznamRekurzivne(id, role) {
    var o = osobaById[id];
    if (!o) return '';
    var prov = urciProvenienceOsoby(o);
    var html = '<li><div class="radek-osoby">';
    if (role) html += '<span class="role-rodice">' + esc(role) + ':</span> ';
    html += osobaLink(o.id) + ' <span class="role-rodice">' + esc(rokyOsoby(o)) + '</span> ' + provBadge(prov);
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

  /* Vykreslí uzly, generační pásy a SVG Bézierovy spojnice do #platno-scena */
  function vykresliScenuPlatna() {
    var scena = document.getElementById('platno-scena');
    if (!scena) return;

    aktualniRozvrzeni = (stromRezim === 'komplet')
      ? spocitejKompletniRozvrzeni()
      : spocitejVyvodRozvrzeni(stromKoren);

    var html = '';

    // 1. Vodicí horizontální linie generací napříč plátnem
    aktualniRozvrzeni.pasy.forEach(function (pas) {
      html += '<div class="generace-pas" style="top:' + pas.y + 'px;"></div>';
    });

    // Fixní levý sloupec časové osy generací mimo karty
    var osaSloupec = document.getElementById('platno-osa-sloupec');
    if (osaSloupec) {
      osaSloupec.innerHTML = aktualniRozvrzeni.pasy.map(function (pas) {
        return '<div class="generace-popisek" data-pas-y="' + pas.y + '" data-pas-minx="' + pas.minX + '">' + esc(pas.label) + '</div>';
      }).join('');
    }

    // 2. SVG vrstva pro Bézierovy křivky
    html += '<svg class="platno-svg" id="platno-svg" width="1" height="1"></svg>';

    // 3. Manželské uzly
    aktualniRozvrzeni.snatky.forEach(function (s, idx) {
      var u1 = aktualniRozvrzeni.uzelMap[s.m];
      var u2 = aktualniRozvrzeni.uzelMap[s.z];
      if (!u1 || !u2) return;
      var sx = Math.round((u1.x + u1.w + u2.x) / 2);
      var sy = Math.round((u1.y + u2.y + u1.h) / 2);
      html += '<div class="snatek-uzel" data-snatek-idx="' + idx + '" style="left:' + sx + 'px;top:' + sy + 'px;">' +
        esc(s.label) +
      '</div>';
    });

    // 4. Neznámí předkové (v režimu vývodu)
    aktualniRozvrzeni.neznami.forEach(function (unk) {
      html += '<div class="mapa-uzel-neznamy" data-unk-id="' + esc(unk.id) + '" style="left:' + Math.round(unk.x) + 'px;top:' + Math.round(unk.y) + 'px;">' +
        esc(unk.label) +
      '</div>';
    });

    // 5. Karty osob
    aktualniRozvrzeni.uzly.forEach(function (u) {
      html += vytvorHtmlUzlu(u);
    });

    scena.innerHTML = html;
    aktualizujSvgSpojnice();
    aplikujZvyrazneniLinie(vybranyUzelId);
    aplikujTransformaciKamery();
  }

  /* Přepočítá a vykreslí hladké Bézierovy křivky mezi rodiči, partnery a dětmi */
  function aktualizujSvgSpojnice() {
    var svg = document.getElementById('platno-svg');
    if (!svg || !aktualniRozvrzeni) return;

    var cesty = [];
    var uzelMap = aktualniRozvrzeni.uzelMap;
    var hMap = {};
    document.querySelectorAll('.mapa-uzel').forEach(function (el) {
      var id = el.getAttribute('data-id');
      if (id && el.offsetHeight) hMap[id] = el.offsetHeight;
    });

    // A) Spojnice mezi manželi + aktualizace pozice štítku sňatku
    var snatekDom = document.querySelectorAll('.snatek-uzel');
    aktualniRozvrzeni.snatky.forEach(function (s, idx) {
      var u1 = uzelMap[s.m];
      var u2 = uzelMap[s.z];
      if (!u1 || !u2) return;
      var h1 = hMap[s.m] || u1.h;
      var h2 = hMap[s.z] || u2.h;
      var x1 = u1.x + u1.w;
      var y1 = u1.y + h1 / 2;
      var x2 = u2.x;
      var y2 = u2.y + h2 / 2;
      cesty.push('<path class="spojnice-partneri" data-od="' + s.m + '" data-k="' + s.z + '" d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + '"/>');
      if (snatekDom[idx]) {
        snatekDom[idx].style.left = Math.round((x1 + x2) / 2) + 'px';
        snatekDom[idx].style.top = Math.round((y1 + y2) / 2) + 'px';
      }
    });

    // B) Spojnice Rodič -> Dítě
    aktualniRozvrzeni.uzly.forEach(function (diteUzel) {
      var o = diteUzel.osoba;
      var dx = diteUzel.x + diteUzel.w / 2;
      var dy = diteUzel.y;

      ['otec', 'matka'].forEach(function (typ) {
        var rodicId = o[typ];
        if (!rodicId || !uzelMap[rodicId]) return;
        var rodicUzel = uzelMap[rodicId];
        var rx = rodicUzel.x + rodicUzel.w / 2;
        var ry = rodicUzel.y + (hMap[rodicId] || rodicUzel.h);

        // Křivka od spodní hrany rodiče k horní hraně dítěte
        var ctrlY1 = ry + (dy - ry) * 0.48;
        var ctrlY2 = dy - (dy - ry) * 0.48;
        var d = 'M' + rx.toFixed(1) + ' ' + ry.toFixed(1) +
                ' C' + rx.toFixed(1) + ' ' + ctrlY1.toFixed(1) + ', ' +
                       dx.toFixed(1) + ' ' + ctrlY2.toFixed(1) + ', ' +
                       dx.toFixed(1) + ' ' + dy.toFixed(1);

        cesty.push('<path class="spojnice-cesta ' + typ + '" data-rodic="' + rodicId + '" data-dite="' + o.id + '" d="' + d + '"/>');
      });
    });

    // C) Spojnice k neznámým rodičům v režimu vývodu
    aktualniRozvrzeni.neznami.forEach(function (unk) {
      var diteUzel = uzelMap[unk.parentId];
      if (!diteUzel) return;
      var dx = diteUzel.x + diteUzel.w / 2;
      var dy = diteUzel.y;
      var rx = unk.x + unk.w / 2;
      var ry = unk.y + unk.h;
      var midY = (ry + dy) / 2;
      var d = 'M' + rx.toFixed(1) + ' ' + ry.toFixed(1) +
              ' C' + rx.toFixed(1) + ' ' + midY.toFixed(1) + ', ' +
                     dx.toFixed(1) + ' ' + midY.toFixed(1) + ', ' +
                     dx.toFixed(1) + ' ' + dy.toFixed(1);
      cesty.push('<path class="spojnice-cesta hypoteza" d="' + d + '"/>');
    });

    svg.innerHTML = cesty.join('');
  }

  /* Zvýrazní vybranou osobu a její pokrevní linii na plátně */
  function aplikujZvyrazneniLinie(fokusId) {
    var scena = document.getElementById('platno-scena');
    if (!scena) return;
    var uzlyDom = scena.querySelectorAll('.mapa-uzel');
    var cestyDom = scena.querySelectorAll('.spojnice-cesta');

    if (!fokusId || !osobaById[fokusId]) {
      uzlyDom.forEach(function (el) {
        el.classList.remove('vybrany', 'zvyrazneny', 'utlumeny');
      });
      cestyDom.forEach(function (el) {
        el.classList.remove('zvyraznena', 'utlumena');
      });
      return;
    }

    var pokrevni = najdiPokrevniLinii(fokusId);
    uzlyDom.forEach(function (el) {
      var id = el.getAttribute('data-id');
      el.classList.toggle('vybrany', id === fokusId);
      el.classList.toggle('zvyrazneny', id !== fokusId && !!pokrevni[id]);
      el.classList.toggle('utlumeny', !pokrevni[id]);
    });

    cestyDom.forEach(function (el) {
      var r = el.getAttribute('data-rodic');
      var d = el.getAttribute('data-dite');
      var aktivni = r && d && pokrevni[r] && pokrevni[d];
      el.classList.toggle('zvyraznena', !!aktivni);
      el.classList.toggle('utlumena', !aktivni);
    });
  }

  /* Aplikuje posun a měřítko kamery na scénu i fixní levý sloupec generací */
  function aplikujTransformaciKamery() {
    var scena = document.getElementById('platno-scena');
    var kontejner = document.getElementById('platno-kontejner');
    var zoomLabel = document.getElementById('zoom-label');
    if (!scena || !kontejner) return;

    scena.style.transform = 'translate3d(' + platnoKamera.x.toFixed(1) + 'px, ' + platnoKamera.y.toFixed(1) + 'px, 0) scale(' + platnoKamera.scale.toFixed(4) + ')';

    var osaSloupec = document.getElementById('platno-osa-sloupec');
    if (osaSloupec) {
      osaSloupec.style.display = (stromRezim === 'komplet') ? 'block' : 'none';
      var popisky = osaSloupec.querySelectorAll('.generace-popisek');
      for (var i = 0; i < popisky.length; i++) {
        var py = parseFloat(popisky[i].getAttribute('data-pas-y') || '0');
        var screenY = platnoKamera.y + py * platnoKamera.scale;
        popisky[i].style.transform = 'translate3d(12px, ' + screenY.toFixed(1) + 'px, 0)';
      }
    }

    if (zoomLabel) {
      zoomLabel.textContent = Math.round(platnoKamera.scale * 100) + ' %';
    }
  }

  /* Vycentruje kameru tak, aby byl vidět celý strom */
  function vycentrujCelyStrom() {
    var kontejner = document.getElementById('platno-kontejner');
    if (!kontejner || !aktualniRozvrzeni || !aktualniRozvrzeni.uzly.length) return;

    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    aktualniRozvrzeni.uzly.forEach(function (u) {
      if (u.x < minX) minX = u.x;
      if (u.y < minY) minY = u.y;
      if (u.x + u.w > maxX) maxX = u.x + u.w;
      if (u.y + u.h > maxY) maxY = u.y + u.h;
    });
    aktualniRozvrzeni.neznami.forEach(function (u) {
      if (u.x < minX) minX = u.x;
      if (u.y < minY) minY = u.y;
      if (u.x + u.w > maxX) maxX = u.x + u.w;
      if (u.y + u.h > maxY) maxY = u.y + u.h;
    });

    var treeW = Math.max(400, maxX - minX);
    var treeH = Math.max(300, maxY - minY);
    var viewW = kontejner.clientWidth;
    var viewH = kontejner.clientHeight;
    var leftColW = (stromRezim === 'komplet') ? (viewW > 768 ? 250 : 160) : 0;

    var padX = viewW > 768 ? 50 : 16;
    var padY = viewW > 768 ? 105 : 52;
    var scaleX = (viewW - leftColW - padX * 2) / treeW;
    var scaleY = (viewH - padY * 2) / treeH;
    var newScale = Math.max(0.26, Math.min(1.05, Math.min(scaleX, scaleY)));

    var centeredX = leftColW + (viewW - leftColW) / 2 - ((minX + maxX) / 2) * newScale;
    var minAllowedX = leftColW + 16 - minX * newScale;
    platnoKamera.scale = newScale;
    platnoKamera.x = Math.max(minAllowedX, centeredX);
    platnoKamera.y = viewH / 2 - ((minY + maxY) / 2) * newScale + 12;
    platnoKamera.initialized = true;
    aplikujTransformaciKamery();
  }

  /* Zaměří kameru čitelně na hlavní jádro rodu (generace 0 až 5) při zachování přehledu */
  function vycentrujJadroRodu() {
    var kontejner = document.getElementById('platno-kontejner');
    if (!kontejner || !aktualniRozvrzeni || !aktualniRozvrzeni.uzly.length) return;
    if (stromRezim !== 'komplet') {
      vycentrujCelyStrom();
      return;
    }

    var jadroUzly = aktualniRozvrzeni.uzly.filter(function (u) { return u.gen <= 5; });
    if (!jadroUzly.length) jadroUzly = aktualniRozvrzeni.uzly;

    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    var globalMinX = Infinity;
    aktualniRozvrzeni.uzly.forEach(function (u) {
      if (u.x < globalMinX) globalMinX = u.x;
    });
    jadroUzly.forEach(function (u) {
      if (u.x < minX) minX = u.x;
      if (u.y < minY) minY = u.y;
      if (u.x + u.w > maxX) maxX = u.x + u.w;
      if (u.y + u.h > maxY) maxY = u.y + u.h;
    });

    var boxW = Math.max(400, maxX - minX);
    var boxH = Math.max(300, maxY - minY);
    var viewW = kontejner.clientWidth;
    var viewH = kontejner.clientHeight;
    var leftColW = viewW > 768 ? 245 : 155;

    var scaleX = (viewW - leftColW - (viewW > 768 ? 64 : 20)) / boxW;
    var scaleY = (viewH - (viewW > 768 ? 140 : 64)) / boxH;
    var newScale = Math.max(viewW > 768 ? 0.52 : 0.36, Math.min(0.90, Math.min(scaleX, scaleY)));

    var centeredX = leftColW + (viewW - leftColW) / 2 - ((minX + maxX) / 2) * newScale;
    var minAllowedX = leftColW + 16 - globalMinX * newScale;
    platnoKamera.scale = newScale;
    platnoKamera.x = Math.max(minAllowedX, centeredX);
    platnoKamera.y = viewH / 2 - ((minY + maxY) / 2) * newScale + (viewW > 768 ? 24 : 12);
    platnoKamera.initialized = true;
    aplikujTransformaciKamery();
  }

  /* Plynule zaměří kameru na konkrétní uzel osoby */
  function zamerKameruNaOsobu(osobaId, cilovyScale) {
    var kontejner = document.getElementById('platno-kontejner');
    if (!kontejner || !aktualniRozvrzeni || !aktualniRozvrzeni.uzelMap[osobaId]) return;
    var u = aktualniRozvrzeni.uzelMap[osobaId];
    var viewW = kontejner.clientWidth;
    var viewH = kontejner.clientHeight;
    var zasuvka = document.getElementById('inspektor-zasuvka');
    var offsetRight = (zasuvka && zasuvka.classList.contains('otevrena') && viewW > 800) ? 210 : 0;

    var s = cilovyScale || Math.max(platnoKamera.scale, 0.85);
    platnoKamera.scale = s;
    platnoKamera.x = (viewW - offsetRight) / 2 - (u.x + u.w / 2) * s;
    platnoKamera.y = viewH / 2 - (u.y + u.h / 2) * s;
    aplikujTransformaciKamery();
  }

  /* Otevře boční kartotékový inspektor pro vybranou osobu na plátně */
  function otevriInspektor(osobaId) {
    var o = osobaById[osobaId];
    var zasuvka = document.getElementById('inspektor-zasuvka');
    var telo = document.getElementById('inspektor-telo');
    var kodEl = document.getElementById('inspektor-kod');
    if (!o || !zasuvka || !telo) return;

    vybranyUzelId = osobaId;
    aplikujZvyrazneniLinie(osobaId);

    if (kodEl) kodEl.textContent = 'OSOBNÍ KARTA';

    var fotoUrl = ziskejPortretUrl(o);
    var maVlastni = maVlastniPortret(o.id);
    var prov = urciProvenienceOsoby(o);

    var portretHtml = fotoUrl
      ? '<img src="' + esc(fotoUrl) + '" alt="' + esc(o.jmeno) + '">'
      : '<span class="inspektor-portret-inicaly">' + esc(inicialyOsoby(o)) + '</span>';

    var rukopisSekce = '';
    if (o.vyrez_rukopisu) {
      var galId = najdiGaleriiProSoubor(o.vyrez_rukopisu);
      rukopisSekce = '' +
        '<div class="inspektor-rukopis-karta" data-open-gal="' + esc(galId || '') + '" data-open-src="' + esc(o.vyrez_rukopisu) + '">' +
          '<img src="' + esc(o.vyrez_rukopisu) + '" alt="Výřez matričního zápisu">' +
          '<div class="inspektor-rukopis-popis">' +
            '<span>ORIGINÁLNÍ RUKOPISNÝ ZÁPIS</span>' +
            '<span>ZVĚTŠIT SNÍMEK ↗</span>' +
          '</div>' +
        '</div>';
    }

    var fakta = '';
    if (o.narozeni) {
      var n = o.narozeni;
      var hodn = n.odhad ? ('cca ' + esc(n.obdobi)) : fmtDatum(n.datum);
      fakta += '<div class="fakto"><span class="fakto-nazev">Narození</span><span class="fakto-hodnota">' + hodn + ' ' + provBadge(n.provenience) + '</span></div>';
    } else {
      fakta += '<div class="fakto"><span class="fakto-nazev">Narození</span><span class="fakto-hodnota"><span class="role-rodice">dosud nedoloženo</span></span></div>';
    }
    if (o.misto_narozeni) {
      fakta += '<div class="fakto"><span class="fakto-nazev">Obec / Farnost</span><span class="fakto-hodnota">' + esc(mistoOsobyPlne(o)) + '</span></div>';
    }
    if (o.umrti) {
      fakta += '<div class="fakto"><span class="fakto-nazev">Úmrtí</span><span class="fakto-hodnota">' + esc(o.umrti.datum ? fmtDatum(o.umrti.datum) : o.umrti.obdobi) + '</span></div>';
    }
    if (o.povolani && o.povolani.length) {
      fakta += '<div class="fakto"><span class="fakto-nazev">Povolání</span><span class="fakto-hodnota">' + esc(o.povolani.map(function (z) { return z.nazev; }).join(', ')) + '</span></div>';
    }

    function tlacitkoSkokuNaOsobu(id, popisek) {
      var relO = osobaById[id];
      if (!relO) return '';
      return '<li>' +
        '<a href="#/osoba/' + id + '" data-platno-skok="' + id + '">' + esc(relO.jmeno) + '</a> ' +
        '<span class="role-rodice">(' + esc(popisek) + ')</span>' +
      '</li>';
    }

    var rodinaHtml = '<ul class="seznam-odkazu">';
    if (o.otec) rodinaHtml += tlacitkoSkokuNaOsobu(o.otec, 'otec');
    if (o.matka) rodinaHtml += tlacitkoSkokuNaOsobu(o.matka, 'matka');
    (o.partneri || []).forEach(function (pid) {
      rodinaHtml += tlacitkoSkokuNaOsobu(pid, 'partner/ka');
    });
    detiOsoby(o.id).forEach(function (v) {
      rodinaHtml += tlacitkoSkokuNaOsobu(v.k, 'dítě');
    });
    rodinaHtml += '</ul>';

    telo.innerHTML = '' +
      '<div class="inspektor-portret-sekce">' +
        '<div class="inspektor-portret-ram">' + portretHtml + '</div>' +
        '<div class="inspektor-titul-blok">' +
          '<h2>' + esc(o.jmeno) + '</h2>' +
          (o.rodne_prijmeni ? '<div class="uzel-rodne" style="font-size:0.95rem;margin-bottom:0.25rem;">roz. ' + esc(o.rodne_prijmeni) + '</div>' : '') +
          (o.role ? '<span class="inspektor-role">' + esc(o.role) + '</span>' : '') +
          provBadge(prov) +
          '<div class="inspektor-foto-akce">' +
            '<button type="button" class="btn-portret" id="btn-inspektor-nahrat">' + (fotoUrl ? 'Změnit portrét' : 'Nahrát portrét') + '</button>' +
            (maVlastni ? '<button type="button" class="btn-portret" id="btn-inspektor-smazat">Původní</button>' : '') +
          '</div>' +
        '</div>' +
      '</div>' +

      rukopisSekce +

      '<h4>Biografické údaje</h4>' +
      '<div class="panel" style="padding:0.75rem 0.9rem;">' + fakta + '</div>' +

      (o.poznamka ? '<h4>Archivní záznam</h4><div class="poznamka-blok">' + esc(o.poznamka) + '</div>' : '') +

      '<h4>Nejbližší příbuzní (kliknutím přesunete mapu)</h4>' +
      '<div class="panel" style="padding:0.65rem 0.9rem;">' + rodinaHtml + '</div>' +

      '<div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:1.1rem;">' +
        '<a class="cta" href="#/osoba/' + o.id + '" style="flex:1;justify-content:center;">Otevřít plný osobní spis ↗</a>' +
        '<button type="button" class="platno-tlacitko" id="btn-inspektor-vyvod" title="Zobrazit vývod předků pouze pro tuto osobu">Vývod předků</button>' +
      '</div>';

    zasuvka.classList.add('otevrena');

    var btnNahrat = document.getElementById('btn-inspektor-nahrat');
    if (btnNahrat) btnNahrat.addEventListener('click', function () { otevriDialogPortretu(o.id); });

    var btnSmazat = document.getElementById('btn-inspektor-smazat');
    if (btnSmazat) btnSmazat.addEventListener('click', function () { smazVlastniPortret(o.id); });

    var btnVyvod = document.getElementById('btn-inspektor-vyvod');
    if (btnVyvod) {
      btnVyvod.addEventListener('click', function () {
        stromKoren = o.id;
        stromRezim = 'vyvod';
        var sel = document.getElementById('strom-koren');
        if (sel) sel.value = o.id;
        vykresliScenuPlatna();
        vycentrujCelyStrom();
      });
    }

    var rukopisKarta = telo.querySelector('.inspektor-rukopis-karta');
    if (rukopisKarta) {
      rukopisKarta.addEventListener('click', function () {
        var gid = rukopisKarta.getAttribute('data-open-gal');
        if (gid && galById[gid]) otevriLightbox(gid, rukopisKarta);
      });
    }

    telo.querySelectorAll('[data-platno-skok]').forEach(function (link) {
      link.addEventListener('click', function (ev) {
        var cilId = link.getAttribute('data-platno-skok');
        if (aktualniRozvrzeni && aktualniRozvrzeni.uzelMap[cilId]) {
          ev.preventDefault();
          otevriInspektor(cilId);
          zamerKameruNaOsobu(cilId);
        }
      });
    });
  }

  function zavriInspektor() {
    var zasuvka = document.getElementById('inspektor-zasuvka');
    if (zasuvka) zasuvka.classList.remove('otevrena');
    vybranyUzelId = null;
    aplikujZvyrazneniLinie(null);
  }

  /* Naváže události interaktivního plátna (pan, zoom, tažení uzlů, klávesnice) */
  function bindStrom() {
    var btnKomplet = document.getElementById('rezim-komplet');
    var btnVyvod = document.getElementById('rezim-vyvod');
    var selectKoren = document.getElementById('strom-koren');
    var btnKompletMobil = document.getElementById('rezim-komplet-mobil');
    var btnVyvodMobil = document.getElementById('rezim-vyvod-mobil');
    var selectKorenMobil = document.getElementById('strom-koren-mobil');
    var fabMobil = document.getElementById('platno-mobilni-fab');
    var sheetMobil = document.getElementById('platno-mobilni-sheet');
    var backdropMobil = document.getElementById('platno-mobilni-backdrop');
    var zavritMobil = document.getElementById('platno-mobilni-zavrit');

    function zavriMobilniSheet() {
      if (sheetMobil) sheetMobil.hidden = true;
      if (backdropMobil) backdropMobil.hidden = true;
      if (fabMobil) fabMobil.setAttribute('aria-expanded', 'false');
    }

    function otevriMobilniSheet() {
      if (sheetMobil) sheetMobil.hidden = false;
      if (backdropMobil) backdropMobil.hidden = false;
      if (fabMobil) fabMobil.setAttribute('aria-expanded', 'true');
    }

    if (fabMobil) {
      fabMobil.addEventListener('click', function () {
        if (sheetMobil && !sheetMobil.hidden) zavriMobilniSheet();
        else otevriMobilniSheet();
      });
    }
    if (zavritMobil) zavritMobil.addEventListener('click', zavriMobilniSheet);
    if (backdropMobil) backdropMobil.addEventListener('click', zavriMobilniSheet);

    if (btnKomplet) {
      btnKomplet.addEventListener('click', function () {
        stromRezim = 'komplet';
        render();
        vycentrujCelyStrom();
      });
    }
    if (btnKompletMobil) {
      btnKompletMobil.addEventListener('click', function () {
        stromRezim = 'komplet';
        zavriMobilniSheet();
        render();
        vycentrujCelyStrom();
      });
    }
    if (btnVyvod) {
      btnVyvod.addEventListener('click', function () {
        stromRezim = 'vyvod';
        render();
        vycentrujCelyStrom();
      });
    }
    if (btnVyvodMobil) {
      btnVyvodMobil.addEventListener('click', function () {
        stromRezim = 'vyvod';
        zavriMobilniSheet();
        render();
        vycentrujCelyStrom();
      });
    }
    if (selectKoren) {
      selectKoren.addEventListener('change', function () {
        stromKoren = selectKoren.value;
        if (selectKorenMobil) selectKorenMobil.value = stromKoren;
        if (stromRezim === 'vyvod') {
          vykresliScenuPlatna();
          vycentrujCelyStrom();
          otevriInspektor(stromKoren);
        } else {
          otevriInspektor(stromKoren);
          zamerKameruNaOsobu(stromKoren, 0.95);
        }
      });
    }
    if (selectKorenMobil) {
      selectKorenMobil.addEventListener('change', function () {
        stromKoren = selectKorenMobil.value;
        if (selectKoren) selectKoren.value = stromKoren;
        zavriMobilniSheet();
        if (stromRezim === 'vyvod') {
          vykresliScenuPlatna();
          vycentrujCelyStrom();
          otevriInspektor(stromKoren);
        } else {
          otevriInspektor(stromKoren);
          zamerKameruNaOsobu(stromKoren, 0.95);
        }
      });
    }

    var kontejner = document.getElementById('platno-kontejner');
    var scena = document.getElementById('platno-scena');
    if (!kontejner || !scena) return;

    vykresliScenuPlatna();
    if (!platnoKamera.initialized) {
      vycentrujJadroRodu();
    } else {
      aplikujTransformaciKamery();
    }

    // Ovládací tlačítka HUD
    var btnTogglePohyb = document.getElementById('platno-toggle-pohyb');
    if (btnTogglePohyb) {
      btnTogglePohyb.addEventListener('click', function () {
        pohybKaretPovolen = !pohybKaretPovolen;
        btnTogglePohyb.classList.toggle('aktivni', pohybKaretPovolen);
        btnTogglePohyb.setAttribute('aria-pressed', pohybKaretPovolen ? 'true' : 'false');
        btnTogglePohyb.textContent = pohybKaretPovolen ? 'Pohyb osob: povolen' : 'Povolit pohyb osob';
        kontejner.classList.toggle('pohyb-karet-povolen', pohybKaretPovolen);
      });
    }

    var btnResetKarty = document.getElementById('platno-reset-karty');
    if (btnResetKarty) {
      btnResetKarty.addEventListener('click', function () {
        vlastniPoziceUzlu = {};
        vykresliScenuPlatna();
        vycentrujJadroRodu();
      });
    }

    var btnFs = document.getElementById('platno-fullscreen');
    if (btnFs) {
      btnFs.addEventListener('click', function () {
        if (!document.fullscreenElement) {
          if (kontejner.requestFullscreen) kontejner.requestFullscreen();
        } else {
          if (document.exitFullscreen) document.exitFullscreen();
        }
      });
    }

    var btnZoomIn = document.getElementById('zoom-in');
    var btnZoomOut = document.getElementById('zoom-out');
    function zoomStred(faktor) {
      var rect = kontejner.getBoundingClientRect();
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var oldScale = platnoKamera.scale;
      var newScale = Math.max(0.22, Math.min(2.4, oldScale * faktor));
      platnoKamera.x = cx - (cx - platnoKamera.x) * (newScale / oldScale);
      platnoKamera.y = cy - (cy - platnoKamera.y) * (newScale / oldScale);
      platnoKamera.scale = newScale;
      aplikujTransformaciKamery();
    }
    if (btnZoomIn) btnZoomIn.addEventListener('click', function () { zoomStred(1.22); });
    if (btnZoomOut) btnZoomOut.addEventListener('click', function () { zoomStred(1 / 1.22); });

    var btnZavritInsp = document.getElementById('inspektor-zavrit');
    if (btnZavritInsp) btnZavritInsp.addEventListener('click', zavriInspektor);

    // Kolečko myši -> plynulý zoom do místa kurzoru
    kontejner.addEventListener('wheel', function (e) {
      if (e.target.closest && e.target.closest('.inspektor-zasuvka')) return;
      e.preventDefault();
      var rect = kontejner.getBoundingClientRect();
      var mx = e.clientX - rect.left;
      var my = e.clientY - rect.top;
      var delta = -e.deltaY;
      var faktor = delta > 0 ? 1.12 : (1 / 1.12);
      var oldScale = platnoKamera.scale;
      var newScale = Math.max(0.22, Math.min(2.4, oldScale * faktor));
      platnoKamera.x = mx - (mx - platnoKamera.x) * (newScale / oldScale);
      platnoKamera.y = my - (my - platnoKamera.y) * (newScale / oldScale);
      platnoKamera.scale = newScale;
      aplikujTransformaciKamery();
    }, { passive: false });

    // Interakce myší / dotykem: posun plátna NEBO tažení jednotlivé karty (jako v OrgPadu)
    var dragState = null;

    kontejner.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      if (e.target.closest('.platno-hud-nahore, .platno-hud-dole, .platno-mobilni-fab, .platno-mobilni-sheet, .platno-mobilni-backdrop, .inspektor-zasuvka')) return;

      var uzelEl = e.target.closest('.mapa-uzel');
      if (uzelEl) {
        var uzelId = uzelEl.getAttribute('data-id');
        var uzelObj = aktualniRozvrzeni && aktualniRozvrzeni.uzelMap[uzelId];
        if (!uzelObj) return;
        if (pohybKaretPovolen) {
          dragState = {
            mode: 'node',
            pointerId: e.pointerId,
            uzelEl: uzelEl,
            uzelObj: uzelObj,
            startX: e.clientX,
            startY: e.clientY,
            origNodeX: uzelObj.x,
            origNodeY: uzelObj.y,
            moved: false
          };
          uzelEl.setPointerCapture(e.pointerId);
          e.stopPropagation();
          return;
        }
        dragState = {
          mode: 'pan',
          pointerId: e.pointerId,
          startX: e.clientX,
          startY: e.clientY,
          origCamX: platnoKamera.x,
          origCamY: platnoKamera.y,
          kliknutyUzelId: uzelId,
          moved: false
        };
        kontejner.classList.add('tazeni');
        kontejner.setPointerCapture(e.pointerId);
        return;
      }

      dragState = {
        mode: 'pan',
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        origCamX: platnoKamera.x,
        origCamY: platnoKamera.y,
        moved: false
      };
      kontejner.classList.add('tazeni');
      kontejner.setPointerCapture(e.pointerId);
    });

    kontejner.addEventListener('pointermove', function (e) {
      if (!dragState || e.pointerId !== dragState.pointerId) return;
      var dx = e.clientX - dragState.startX;
      var dy = e.clientY - dragState.startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragState.moved = true;

      if (dragState.mode === 'pan') {
        platnoKamera.x = dragState.origCamX + dx;
        platnoKamera.y = dragState.origCamY + dy;
        aplikujTransformaciKamery();
      } else if (dragState.mode === 'node' && dragState.moved) {
        var nx = Math.round(dragState.origNodeX + dx / platnoKamera.scale);
        var ny = Math.round(dragState.origNodeY + dy / platnoKamera.scale);
        dragState.uzelObj.x = nx;
        dragState.uzelObj.y = ny;
        dragState.uzelEl.style.left = nx + 'px';
        dragState.uzelEl.style.top = ny + 'px';

        var keyPrefix = stromRezim === 'komplet' ? 'komplet_' : ('vyvod_' + stromKoren + '_');
        vlastniPoziceUzlu[keyPrefix + dragState.uzelObj.id] = { x: nx, y: ny };
        aktualizujSvgSpojnice();
      }
    });

    function ukonciTazeni(e) {
      if (!dragState || (e && e.pointerId !== dragState.pointerId)) return;
      kontejner.classList.remove('tazeni');
      if (dragState.mode === 'node' && !dragState.moved) {
        // Kliknutí na kartu -> otevřít boční inspektor a zvýraznit rodovou větev
        otevriInspektor(dragState.uzelObj.id);
      } else if (dragState.mode === 'pan' && !dragState.moved) {
        if (dragState.kliknutyUzelId) {
          otevriInspektor(dragState.kliknutyUzelId);
        } else {
          // Kliknutí do prázdného plátna -> zavřít inspektor
          zavriInspektor();
        }
      }
      dragState = null;
    }

    kontejner.addEventListener('pointerup', ukonciTazeni);
    kontejner.addEventListener('pointercancel', ukonciTazeni);

    // Hover na uzlu zvýrazní větev (pokud není zamčený výběr v inspektoru)
    scena.addEventListener('mouseover', function (e) {
      if (vybranyUzelId) return;
      var uzelEl = e.target.closest('.mapa-uzel');
      if (uzelEl) {
        aplikujZvyrazneniLinie(uzelEl.getAttribute('data-id'));
      }
    });
    scena.addEventListener('mouseout', function (e) {
      if (vybranyUzelId) return;
      var uzelEl = e.target.closest('.mapa-uzel');
      if (uzelEl) {
        aplikujZvyrazneniLinie(null);
      }
    });
  }

  /* ==========================================================================
     03 REJSTŘÍK OSOB (KATALOG VŠECH 32 OSOB S FILTRY)
     ========================================================================== */
  var aktivniFiltrRejstriku = 'vse';

  function viewRejstrik() {
    docTitle('Rejstřík osob');

    var filtry = [
      { id: 'vse', label: 'Všechny osoby (' + D.osoby.length + ')' },
      { id: 'klobouky', label: 'Větev Klobouky u Brna' },
      { id: 'nemcicky', label: 'Větev Němčičky (Cvan, Stávek, Kameník)' },
      { id: 'kostice', label: 'Větev Kostice & Tvrdonice (Kosek, Trpělka)' },
      { id: 'matrika', label: 'S matričním rukopisem' }
    ];

    var osobaVetev = function (o) {
      var m = norm(mistoOsobyPlne(o) + ' ' + (o.poznamka || '') + ' ' + o.jmeno);
      if (aktivniFiltrRejstriku === 'klobouky') return m.indexOf('klobouk') >= 0 || m.indexOf('tihlar') >= 0 || m.indexOf('vystoupil') >= 0 || m.indexOf('halm') >= 0;
      if (aktivniFiltrRejstriku === 'nemcicky') return m.indexOf('nemcic') >= 0 || m.indexOf('cvan') >= 0 || m.indexOf('stavek') >= 0 || m.indexOf('stavkov') >= 0 || m.indexOf('kamenik') >= 0;
      if (aktivniFiltrRejstriku === 'kostice') return m.indexOf('kostic') >= 0 || m.indexOf('tvrdonic') >= 0 || m.indexOf('kosek') >= 0 || m.indexOf('trpelk') >= 0;
      if (aktivniFiltrRejstriku === 'matrika') return !!o.vyrez_rukopisu;
      return true;
    };

    var filtrovane = D.osoby.filter(osobaVetev);

    var tlacitkaFiltru = filtry.map(function (f) {
      return '<button type="button" class="platno-tlacitko' + (aktivniFiltrRejstriku === f.id ? ' aktivni' : '') + '" data-rejstrik-filtr="' + f.id + '">' +
        esc(f.label) +
      '</button>';
    }).join('');

    var karty = filtrovane.map(function (o) {
      var fotoUrl = ziskejPortretUrl(o);
      var prov = urciProvenienceOsoby(o);
      var roky = rokyOsoby(o);
      var obec = mistoOsobyPlne(o);
      var remeslo = (o.povolani && o.povolani.length) ? o.povolani[0].nazev : '';
      var avatar = fotoUrl
        ? '<div class="uzel-avatar" style="width:58px;height:66px;"><img src="' + esc(fotoUrl) + '" alt="' + esc(o.jmeno) + '"></div>'
        : '<div class="uzel-avatar" style="width:58px;height:66px;"><span class="uzel-avatar-inicaly">' + esc(inicialyOsoby(o)) + '</span></div>';

      return '<a class="rejstrik-karta" href="#/osoba/' + o.id + '">' +
        avatar +
        '<div style="flex:1;min-width:0;">' +
          '<div style="display:flex;justify-content:flex-end;align-items:baseline;gap:0.4rem;">' +
            provBadge(prov) +
          '</div>' +
          '<div style="font-family:var(--serif);font-weight:700;font-size:1.1rem;margin-top:0.15rem;">' + esc(o.jmeno) + '</div>' +
          (o.rodne_prijmeni ? '<div class="uzel-rodne" style="font-size:0.86rem;">roz. ' + esc(o.rodne_prijmeni) + '</div>' : '') +
          (roky ? '<div style="font-family:var(--mono);font-size:0.74rem;color:var(--inkoust-slaby);margin-top:0.15rem;">' + esc(roky) + '</div>' : '') +
          (obec ? '<div style="font-size:0.82rem;color:var(--inkoust-stredni);margin-top:0.15rem;">Obec: ' + esc(obec) + '</div>' : '') +
          (remeslo ? '<div class="uzel-remeslo" style="margin-top:0.3rem;">' + esc(remeslo) + '</div>' : '') +
        '</div>' +
      '</a>';
    }).join('');

    return '' +
      '<div class="anim-sekce">' +
        '<h1>Rejstřík evidovaných osob</h1>' +
        '<p>Kompletní jmenný katalog všech <strong>' + D.osoby.length + ' osob</strong> v archivu. Kliknutím na kartu otevřete plný osobní spis s přepisy matrik a možností nahrát portrétní fotografii.</p>' +
        '<div class="rejstrik-filtry">' + tlacitkaFiltru + '</div>' +
        '<div class="rejstrik-mrizka">' + karty + '</div>' +
      '</div>';
  }

  function bindRejstrik() {
    main.querySelectorAll('[data-rejstrik-filtr]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        aktivniFiltrRejstriku = btn.getAttribute('data-rejstrik-filtr');
        render();
      });
    });
  }

  /* ==========================================================================
     OSOBNÍ SPIS (#/osoba/P...)
     ========================================================================== */
  function vztahRadek(rodicId, diteId, typ) {
    var v = vztahMezi(rodicId, diteId, typ);
    var prov = v ? v.provenience : 'prepis';
    return '<li>' + osobaLink(rodicId) + ' ' + provBadge(prov) +
      (v && v.dukaz ? '<span class="vztah-duvod">Důkaz: ' + esc(v.dukaz) + ' (' + esc(v.pramen) + ')</span>' : '') +
      '</li>';
  }

  function viewOsoba(id) {
    var o = osobaById[id];
    if (!o) {
      docTitle('Nenalezeno');
      return '<h1>Osoba nenalezena</h1><p><a href="#/strom">Zpět na mapu rodu</a></p>';
    }
    docTitle(o.jmeno);

    var fotoUrl = ziskejPortretUrl(o);
    var maVlastni = maVlastniPortret(o.id);
    var portretObsah = fotoUrl
      ? '<img src="' + esc(fotoUrl) + '" alt="' + esc(o.jmeno) + '">'
      : '<span class="inspektor-portret-inicaly" style="font-size:2.6rem;">' + esc(inicialyOsoby(o)) + '</span>';

    var fakta = '';
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
      var mProv = typeof o.misto_narozeni === 'object' ? o.misto_narozeni.provenience : 'matrika';
      fakta += '<div class="fakto"><span class="fakto-nazev">Rodiště / Obec</span><span class="fakto-hodnota">' +
        esc(mistoOsobyPlne(o)) + ' ' + provBadge(mProv) + '</span></div>';
    }
    if (o.umrti) {
      fakta += '<div class="fakto"><span class="fakto-nazev">Úmrtí</span><span class="fakto-hodnota">' +
        esc(o.umrti.datum ? fmtDatum(o.umrti.datum) : o.umrti.obdobi) +
        (o.umrti.zaklad ? ' — ' + esc(o.umrti.zaklad) : '') + ' ' + provBadge(o.umrti.provenience) + '</span></div>';
    }
    if (o.povolani && o.povolani.length) {
      o.povolani.forEach(function (z) {
        fakta += '<div class="fakto"><span class="fakto-nazev">Povolání / Stav</span><span class="fakto-hodnota">' +
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
        var v = vztahMezi(o.id, pid, 'partner');
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
    if (!ud) ud = '<p class="role-rodice">U této osoby zatím není evidována samostatná časová událost.</p>';

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

    var rukopisPanel = '';
    if (o.vyrez_rukopisu) {
      var galId = najdiGaleriiProSoubor(o.vyrez_rukopisu);
      rukopisPanel = '<section class="panel">' +
        '<h3>Originální rukopisný záznam v matrice</h3>' +
        '<div class="inspektor-rukopis-karta" id="spis-rukopis-trigger" data-gal="' + esc(galId || '') + '">' +
          '<img src="' + esc(o.vyrez_rukopisu) + '" alt="Výřez matriky" style="max-height:180px;">' +
          '<div class="inspektor-rukopis-popis">' +
            '<span>KLIKNUTÍM OTEVŘETE CELÝ ARCHIVNÍ SNÍMEK A PŘEPIS</span>' +
            '<span>LUPA ↗</span>' +
          '</div>' +
        '</div>' +
      '</section>';
    }

    return '' +
      '<div class="anim-sekce">' +
        '<p class="zpet-link" style="font-family:var(--mono);font-size:0.8rem;">' +
          '<a href="#/strom" id="zpet-na-mapu" data-osoba="' + o.id + '">← Zpět na interaktivní mapu rodu</a> · ' +
          '<a href="#/rejstrik">Rejstřík osob</a>' +
        '</p>' +
        '<div class="osoba-hlavicka-spis">' +
          '<div class="osoba-velky-portret">' + portretObsah + '</div>' +
          '<div>' +
            '<div style="font-family:var(--mono);font-size:0.75rem;color:var(--pecet);font-weight:600;">OSOBNÍ SPIS</div>' +
            '<h1 style="margin:0.15rem 0 0.25rem;">' + esc(o.jmeno) + '</h1>' +
            (o.rodne_prijmeni ? '<div class="uzel-rodne" style="font-size:1.02rem;margin-bottom:0.25rem;">roz. ' + esc(o.rodne_prijmeni) + '</div>' : '') +
            (o.role ? '<div class="role-rodice" style="font-size:0.85rem;">' + esc(o.role) + '</div>' : '') +
            '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.75rem;">' +
              '<button type="button" class="platno-tlacitko" id="spis-nahrat-portret">' + (fotoUrl ? 'Změnit portrétní fotografii' : 'Nahrát portrétní fotografii') + '</button>' +
              (maVlastni ? '<button type="button" class="platno-tlacitko" id="spis-smazat-portret">Obnovit výchozí</button>' : '') +
            '</div>' +
          '</div>' +
          '<div style="display:flex;flex-direction:column;gap:0.5rem;">' +
            '<a class="cta vedlejsi" href="#/strom" id="spis-zamerit-v-mape" data-osoba="' + o.id + '">Ukázat v mapě rodu</a>' +
          '</div>' +
        '</div>' +

        '<div class="karta-osoby">' +
          '<div>' +
            '<section class="panel"><h3>Základní matriční a rodinné údaje</h3>' + fakta + nejistoty + poznamka + '</section>' +
            rukopisPanel +
            '<section class="panel"><h3>Doložené životní události</h3>' + ud + '</section>' +
          '</div>' +
          '<div>' +
            '<section class="panel"><h3>Rodiče</h3>' + rodice + '</section>' +
            '<section class="panel"><h3>Partner / partnerka</h3>' + partneri + '</section>' +
            '<section class="panel"><h3>Děti</h3>' + deti + '</section>' +
            '<section class="panel"><h3>Prameny a archivní fondy</h3>' + zdroje + '</section>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function bindOsoba(id) {
    var btnNahrat = document.getElementById('spis-nahrat-portret');
    if (btnNahrat) btnNahrat.addEventListener('click', function () { otevriDialogPortretu(id); });

    var btnSmazat = document.getElementById('spis-smazat-portret');
    if (btnSmazat) btnSmazat.addEventListener('click', function () { smazVlastniPortret(id); });

    var btnMapa = document.getElementById('spis-zamerit-v-mape');
    if (btnMapa) {
      btnMapa.addEventListener('click', function () {
        vybranyUzelId = id;
        stromKoren = id;
      });
    }

    var rukopisTrig = document.getElementById('spis-rukopis-trigger');
    if (rukopisTrig) {
      rukopisTrig.addEventListener('click', function () {
        var gid = rukopisTrig.getAttribute('data-gal');
        if (gid && galById[gid]) otevriLightbox(gid, rukopisTrig);
      });
    }
  }

  /* ==========================================================================
     04 GALERIE DŮKAZŮ & LIGHTBOX
     ========================================================================== */
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
    docTitle('Archivní důkazy');
    var html = '<div class="anim-sekce">' +
      '<h1>Galerie matričních důkazů</h1>' +
      '<p>Snímky a výřezy z matričních knih Moravského zemského archivu v Brně a rodinných listin. Kliknutím na kartu otevřete detailní čtečku s doslovným přepisem kurentu, rozborem nejistých míst a přímým odkazem do MZA Acta Publica.</p>' +
      (filtr ? '<p class="role-rodice">Aktivní filtr pramene: <strong>' + esc((pramenById[filtr] || {}).nazev || filtr) + '</strong> · <a href="#/galerie">Zrušit filtr</a></p>' : '');

    var pramen = filtr ? pramenById[filtr] : null;
    if (pramen && pramen.provenience === 'sdeleni') {
      html += '<section class="panel"><h2>' + esc(pramen.nazev) + '</h2>' +
        '<p>' + provBadge('sdeleni') + '</p><p>' + esc(pramen.popis) + '</p>' +
        (pramen.pozn ? '<p>' + esc(pramen.pozn) + '</p>' : '') + '</section>';
    }

    galerieSkupiny().forEach(function (sk) {
      var polozky = sk.polozky.filter(function (g) {
        return !filtr || g.pramen === filtr ||
          (pramenById[filtr] && (pramenById[filtr].soubory || []).indexOf(g.soubor) >= 0);
      });
      if (!polozky.length) return;
      html += '<section class="galerie-skupina"><h2>' + esc(sk.nazev) + ' <span class="sekce-kod">' + polozky.length + ' SNÍMKŮ</span></h2><div class="galerie-mrizka">';
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

    if (!filtr) {
      var ud = D.udalosti.slice().sort(function (a, b) { return (a.datum || '').localeCompare(b.datum || ''); });
      var base = 'badani/2026-11-02/';
      var fileLink = function (name, label) {
        return '<li><a download href="' + base + name + '">' + esc(label) + '</a></li>';
      };

      html += '<section class="galerie-skupina" style="margin-top:3rem;">' +
        '<h2>Soupis pramenů a pracovní balíky</h2>' +
        '<div class="karta-osoby" style="margin-top:1rem;">' +
          '<section class="panel">' +
            '<h3>Primární prameny (' + D.prameny.length + ')</h3>' +
            '<ul class="seznam-odkazu">' +
              D.prameny.map(function (p) {
                return '<li>' +
                  '<a href="#/galerie?f=' + p.id + '">' + esc(p.nazev) + '</a> ' + provBadge(p.provenience) +
                  '<span class="vztah-duvod">' + esc(p.archiv) + '</span>' +
                '</li>';
              }).join('') +
            '</ul>' +
          '</section>' +
          '<section class="panel">' +
            '<h3>Pracovní archivy ke stažení (ZIP)</h3>' +
            '<ul class="seznam-odkazu">' +
              fileLink('03_A_DOBROVOLNI_A3_final.zip', 'Dobrovolní – finální balík s obrazy (35 MB)') +
              fileLink('D_KOSEK_TRPELKA_VYSLEDKY.zip', 'Koskové / Trpělkovi – přepis a podklady (7,9 MB)') +
              fileLink('F_MAPA_CHYBEJICICH_VETVI_FINAL_v1.zip', 'Mapa větví a doporučené rodinné doklady (40 kB)') +
              fileLink('KONTROLA_INTEGRACE.json', 'Přehled kontroly a nepřevzatých tvrzení') +
              fileLink('PREVZETI.md', 'Přehled převzetí všech šesti chatů') +
            '</ul>' +
          '</section>' +
        '</div>' +
      '</section>';

      html += '<section class="galerie-skupina">' +
        '<h2>Stručná časová osa matričních událostí</h2>' +
        '<div class="osa">' +
          ud.map(function (e) {
            var jeOdhad = (e.typ || '').indexOf('hypotéza') >= 0 || /pravděpodobn/.test(e.presnost || '') || e.provenience === 'hypoteza';
            var osoby = e.osoby.map(function (pid) { return osobaLink(pid); }).join(' · ');
            return '<div class="osa-udalost' + (jeOdhad ? ' odhad' : '') + '">' +
              '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">' +
                '<span class="osa-datum' + (jeOdhad ? ' odhad' : '') + '">' + fmtDatum(e.datum) +
                (e.presnost && /pravděpodobn/.test(e.presnost) ? ' (pravděpodobné)' : '') + '</span>' +
                provBadge(e.provenience) +
              '</div>' +
              '<div class="osa-nazev">' + esc(e.nazev) + '</div>' +
              '<div class="osa-popis">' + esc(e.popis) + (e.misto ? ' · <strong>' + esc(e.misto) + '</strong>' : '') + '</div>' +
              (osoby ? '<div class="osa-osoby">Osoby: ' + osoby + '</div>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
      '</section>';

      html += '<section class="galerie-skupina">' +
        '<h2>Badatelský přehled a otevřené otázky</h2>' +
        '<div class="rejstrik-mrizka">' +
          D.otazky.map(function (q) {
            return '<div class="otazka" data-stav="' + esc(q.stav) + '" style="margin:0;">' +
              '<span class="otazka-stav">' + esc(q.stav) + '</span>' +
              '<h3 style="margin:0.25rem 0 0.35rem;font-size:1.05rem;">' + esc(q.otazka) + '</h3>' +
              '<p class="otazka-detail" style="font-size:0.86rem;margin:0;">' + esc(q.detail) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</section>';
    }

    html += '</div>';
    return html;
  }

  function bindGalerie() {
    var karty = main.querySelectorAll('.dukaz-karta');
    karty.forEach(function (k) {
      k.addEventListener('click', function () { otevriLightbox(k.getAttribute('data-gal'), k); });
    });
  }

  /* Lightbox */
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
    lbZavrit.focus();
  }

  function zavriLightbox() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    lbImg.src = '';
    if (lbPredchoziFocus && lbPredchoziFocus.focus) lbPredchoziFocus.focus();
  }
  lbZavrit.addEventListener('click', zavriLightbox);
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) zavriLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.hidden) {
      if (e.key === 'Escape' || e.key === 'Esc') { e.preventDefault(); zavriLightbox(); }
      return;
    }
    // Klávesová zkratka '/' pro vyhledávání
    if (e.key === '/' && document.activeElement !== hledInput && !['INPUT', 'TEXTAREA', 'SELECT'].includes((document.activeElement || {}).tagName)) {
      e.preventDefault();
      hledInput.focus();
    }
  });

  /* ==========================================================================
     05 ČASOVÁ OSA
     ========================================================================== */
  function viewOsa() {
    docTitle('Časová osa');
    var ud = D.udalosti.slice().sort(function (a, b) { return (a.datum || '').localeCompare(b.datum || ''); });
    var html = '<div class="anim-sekce">' +
      '<h1>Chronologická osa doložených událostí</h1>' +
      '<p>Datované matriční zápisy narození, křtů a sňatků v Kloboukách u Brna, Kosticích a Valticích (1877–1954).</p>' +
      '<div class="osa">';
    ud.forEach(function (e) {
      var jeOdhad = (e.typ || '').indexOf('hypotéza') >= 0 || /pravděpodobn/.test(e.presnost || '') || e.provenience === 'hypoteza';
      var osoby = e.osoby.map(function (pid) { return osobaLink(pid); }).join(' · ');
      html += '<div class="osa-udalost' + (jeOdhad ? ' odhad' : '') + '">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">' +
          '<span class="osa-datum' + (jeOdhad ? ' odhad' : '') + '">' + fmtDatum(e.datum) +
          (e.presnost && /pravděpodobn/.test(e.presnost) ? ' (pravděpodobné)' : '') + '</span>' +
          provBadge(e.provenience) +
        '</div>' +
        '<div class="osa-nazev">' + esc(e.nazev) + '</div>' +
        '<div class="osa-popis">' + esc(e.popis) + (e.misto ? ' · <strong>' + esc(e.misto) + '</strong>' : '') + '</div>' +
        '<div class="osa-osoby">Zúčastněné osoby: ' + (osoby || '—') + '</div>' +
        (e.pozn ? '<div class="osa-popis" style="margin-top:0.3rem;font-size:0.82rem;">Pozn.: ' + esc(e.pozn) + '</div>' : '') +
        '</div>';
    });
    html += '</div></div>';
    return html;
  }

  /* ==========================================================================
     06 BADATELSKÝ DENÍK
     ========================================================================== */
  function viewDenik() {
    docTitle('Badatelský deník');
    var html = '<div class="anim-sekce">' +
      '<h1>Badatelský deník a otevřené otázky</h1>' +
      '<p>Evidence vyřešených i otevřených badatelských úkolů v matrikách MZA Brno.</p>' +
      '<h2>Stav výzkumných otázek</h2>';
    D.otazky.forEach(function (q) {
      html += '<div class="otazka" data-stav="' + esc(q.stav) + '"><span class="otazka-stav">' + esc(q.id) + ' · ' + esc(q.stav) + '</span>' +
        '<h3>' + esc(q.otazka) + '</h3><p class="otazka-detail">' + esc(q.detail) + '</p></div>';
    });
    html += '<h2>Ověřené přírůstky archivu</h2><ul class="prirustky">';
    D.prirustky_kolo2.forEach(function (p) { html += '<li>' + esc(p) + '</li>'; });
    html += '</ul></div>';
    return html;
  }

  /* ==========================================================================
     07 PRAMENY A BALÍKY KE STAŽENÍ
     ========================================================================== */
  function viewNalezy() {
    docTitle('Prameny a nálezy');
    var base = 'badani/2026-11-02/';
    function file(name, label) {
      return '<li><a download href="' + base + name + '">' + esc(label) + '</a></li>';
    }
    var html = '<div class="anim-sekce">' +
      '<h1>Archivní prameny a badatelské balíky</h1>' +
      '<p>Přehled všech ' + D.prameny.length + ' primárních pramenů a pracovních archivních balíků.</p>' +
      '<div class="karta-osoby">' +
        '<section class="panel">' +
          '<h3>Soupis pramenů (PR-A až PR-L)</h3>' +
          '<ul class="seznam-odkazu">' +
            D.prameny.map(function (p) {
              return '<li>' +
                '<a href="#/galerie?f=' + p.id + '">' + esc(p.id) + ' · ' + esc(p.nazev) + '</a> ' + provBadge(p.provenience) +
                '<span class="vztah-duvod">' + esc(p.archiv) + '</span>' +
              '</li>';
            }).join('') +
          '</ul>' +
        '</section>' +
        '<section class="panel">' +
          '<h3>Pracovní archivy ke stažení (ZIP)</h3>' +
          '<ul class="seznam-odkazu">' +
            file('03_A_DOBROVOLNI_A3_final.zip', 'Dobrovolní – finální balík s obrazy (35 MB)') +
            file('D_KOSEK_TRPELKA_VYSLEDKY.zip', 'Koskové / Trpělkovi – přepis a podklady (7,9 MB)') +
            file('F_MAPA_CHYBEJICICH_VETVI_FINAL_v1.zip', 'Mapa větví a doporučené rodinné doklady (40 kB)') +
            file('KONTROLA_INTEGRACE.json', 'Přehled kontroly a nepřevzatých tvrzení') +
            file('PREVZETI.md', 'Přehled převzetí všech šesti chatů') +
          '</ul>' +
        '</section>' +
      '</div>' +
    '</div>';
    return html;
  }

  /* ==========================================================================
     SMĚROVAČ (ROUTER)
     ========================================================================== */
  function render() {
    if (!jePrihlasen()) {
      aktualizujStavBrany();
      return;
    }

    var hash = location.hash.replace(/^#\/?/, '') || 'uvod';
    var casti = hash.split('?');
    var cesta = casti[0];
    var parametry = {};
    if (casti[1]) {
      casti[1].split('&').forEach(function (kv) {
        var p = kv.split('=');
        parametry[p[0]] = decodeURIComponent(p[1] || '');
      });
    }

    var html;
    var navAktivni = cesta;
    var segmenty = cesta.split('/');

    // Režim celoobrazovkového plátna pouze pro grafický strom
    var jePlatno = (cesta === 'strom');
    document.body.classList.toggle('rezim-platno', jePlatno);

    if (segmenty[0] === 'osoba' && segmenty[1]) {
      var idOsoby = decodeURIComponent(segmenty[1]);
      html = viewOsoba(idOsoby);
      navAktivni = 'rejstrik';
    } else if (cesta === 'osoba') {
      html = viewOsoba(parametry.id);
      navAktivni = 'rejstrik';
    } else if (cesta === 'strom') {
      html = viewStrom();
    } else if (cesta === 'rejstrik') {
      html = viewRejstrik();
    } else if (cesta === 'galerie' || cesta === 'osa' || cesta === 'denik' || cesta === 'nalezy') {
      html = viewGalerie(parametry.f || null);
      navAktivni = 'galerie';
    } else {
      html = viewUvod();
      navAktivni = 'uvod';
    }

    main.innerHTML = html;
    document.querySelectorAll('.navigace a').forEach(function (a) {
      a.classList.toggle('aktivni', a.getAttribute('data-nav') === navAktivni);
    });

    if (cesta === 'strom') {
      bindStrom();
      if (vybranyUzelId) {
        otevriInspektor(vybranyUzelId);
        zamerKameruNaOsobu(vybranyUzelId);
      }
    } else if (cesta === 'rejstrik') {
      bindRejstrik();
    } else if (cesta === 'galerie' || cesta === 'osa' || cesta === 'denik' || cesta === 'nalezy') {
      bindGalerie();
    } else if (segmenty[0] === 'osoba' && segmenty[1]) {
      bindOsoba(decodeURIComponent(segmenty[1]));
    }

    if (!jePlatno) {
      window.scrollTo(0, 0);
    }
  }

  /* ==========================================================================
     RYCHLÉ VYHLEDÁVÁNÍ (PODPORUJE JMÉNO, OBEC, ŘEMESLO I ID)
     ========================================================================== */
  var hledInput = document.getElementById('hledani-input');
  var hledVysl = document.getElementById('hledani-vysledky');
  var hledIndex = -1;

  function hledej(q) {
    var nq = norm(q).trim();
    if (!nq) return [];
    return D.osoby.filter(function (o) {
      var seno = norm(o.jmeno + ' ' + (o.rodne_prijmeni || '') + ' ' + mistoOsobyPlne(o) + ' ' + (o.povolani || []).map(function (p) { return p.nazev; }).join(' '));
      return seno.indexOf(nq) >= 0;
    }).slice(0, 10);
  }

  function zobrazVysledky() {
    var q = hledInput.value;
    var vysledky = hledej(q);
    if (!vysledky.length) {
      hledVysl.hidden = true;
      hledVysl.innerHTML = '';
      hledIndex = -1;
      return;
    }
    hledVysl.innerHTML = vysledky.map(function (o, i) {
      var misto = mistoOsobyKratke(o);
      var rodne = o.rodne_prijmeni ? ('roz. ' + o.rodne_prijmeni) : '';
      var meta = [rodne, rokyOsoby(o), misto].filter(Boolean).join(' · ') || 'data narození dosud nedoložena';
      return '<a href="#/osoba/' + o.id + '" data-osoba-id="' + o.id + '" data-i="' + i + '">' +
        '<span class="vysledek-info">' +
          '<span class="vysledek-jmeno">' + esc(o.jmeno) + '</span>' +
          '<span class="vysledek-meta">' + esc(meta) + '</span>' +
        '</span>' +
      '</a>';
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
      hledIndex = (e.key === 'ArrowDown')
        ? (hledIndex + 1) % odkazy.length
        : (hledIndex - 1 + odkazy.length) % odkazy.length;
      odkazy.forEach(function (a, i) { a.classList.toggle('vybrano', i === hledIndex); });
    } else if (e.key === 'Enter' && hledIndex >= 0 && odkazy[hledIndex]) {
      e.preventDefault();
      var cilHref = odkazy[hledIndex].getAttribute('href');
      hledVysl.hidden = true;
      location.hash = cilHref;
    } else if (e.key === 'Escape') {
      hledVysl.hidden = true;
      hledInput.blur();
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.hledani')) hledVysl.hidden = true;
  });

  hledVysl.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    hledVysl.hidden = true;
    // Pokud jsme na plátně, rovnou osobu zaměříme na plátně
    if (location.hash.indexOf('#/strom') === 0 && stromRezim !== 'seznam') {
      var oid = a.getAttribute('data-osoba-id');
      if (oid && aktualniRozvrzeni && aktualniRozvrzeni.uzelMap[oid]) {
        e.preventDefault();
        otevriInspektor(oid);
        zamerKameruNaOsobu(oid, 1.0);
      }
    }
  });

  /* ---------- Inicializace ---------- */
  var verzeEl = document.getElementById('paticka-verze');
  if (verzeEl) {
    verzeEl.textContent = D.meta.verze + ' · ' + D.osoby.length + ' osob v databázi';
  }

  window.addEventListener('hashchange', function () {
    if (jePrihlasen()) {
      render();
    } else {
      aktualizujStavBrany();
    }
  });

  aktualizujStavBrany();
})();
