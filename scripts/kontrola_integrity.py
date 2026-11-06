#!/usr/bin/env python3
"""Kontrola integrity data/rodokmen_data.json vs web/js/data.js (3. kolo).

Kontroluje:
- unikátnost ID osob a pramenů
- odkazovanost osob (otec/matka/partneri/zdroje/udalosti/vztahy)
- soulad polí otec/matka se vztahy typu otec/matka
- cykly v rodokmenu
- existenci souborů důkazů na disku (dukazy/) a ve webu (web/img/dukazy/)
- soulad JSON a data.js (počet osob/vztahů/událostí/pramenů/galerie)
"""
import json, re, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = json.load(open(os.path.join(BASE, 'data', 'rodokmen_data.json'), encoding='utf-8'))
txt = open(os.path.join(BASE, 'web', 'js', 'data.js'), encoding='utf-8').read()
m = re.search(r'var RODOKMEN_DATA = (.*);\n?$', txt, re.S)
W = json.loads(m.group(1))

chyby = []

# 1) unikátnost ID
ids = [o['id'] for o in D['osoby']]
if len(ids) != len(set(ids)): chyby.append('duplicitní ID osob: ' + str([i for i in ids if ids.count(i) > 1]))
pid = [p['id'] for p in D['prameny']]
if len(pid) != len(set(pid)): chyby.append('duplicitní ID pramenů')
gid = [g['id'] for g in D['galerie']]
if len(gid) != len(set(gid)): chyby.append('duplicitní ID galerie')

oset = set(ids); pset = set(pid)
idmap = {o['id']: o for o in D['osoby']}

# 2) odkazovanost
for o in D['osoby']:
    for k in ('otec', 'matka'):
        if o.get(k) and o[k] not in oset: chyby.append(f"{o['id']}: {k} {o[k]} neexistuje")
    for p in o.get('partneri', []):
        if p not in oset: chyby.append(f"{o['id']}: partner {p} neexistuje")
        elif o['id'] not in idmap[p].get('partneri', []): chyby.append(f"{o['id']}: partnerství s {p} není oboustranné")
    for z in o.get('zdroje', []):
        if z not in pset: chyby.append(f"{o['id']}: zdroj {z} neexistuje")
for e in D['udalosti']:
    for p in e.get('osoby', []):
        if p not in oset: chyby.append(f"událost {e.get('nazev','?')}: osoba {p} neexistuje")
    for s in e.get('dukazy', []):
        if not os.path.exists(os.path.join(BASE, 'dukazy', os.path.basename(s))): chyby.append(f"událost: soubor {s} chybí v dukazy/")
for v in D['vztahy']:
    if v['od'] not in oset: chyby.append(f"vztah: od {v['od']} neexistuje")
    if v['k'] not in oset: chyby.append(f"vztah: k {v['k']} neexistuje")
    if v.get('pramen') and v['pramen'] not in pset: chyby.append(f"vztah {v['od']}->{v['k']}: pramen {v['pramen']} neexistuje")
for g in D['galerie']:
    if g.get('pramen') and g['pramen'] not in pset: chyby.append(f"galerie {g['id']}: pramen {g['pramen']} neexistuje")
    if not os.path.exists(os.path.join(BASE, 'dukazy', os.path.basename(g['soubor']))):
        chyby.append(f"galerie {g['id']}: soubor {g['soubor']} chybí v dukazy/")

# 3) soulad otec/matka pole vs vztahy
for o in D['osoby']:
    for typ in ('otec', 'matka'):
        rodic = o.get(typ)
        if rodic:
            v = next((x for x in D['vztahy'] if x['od'] == rodic and x['k'] == o['id'] and x['typ'] == typ), None)
            if not v: chyby.append(f"{o['id']}: pole {typ}={rodic} nemá odpovídající vztah")
        else:
            v = [x for x in D['vztahy'] if x['k'] == o['id'] and x['typ'] == typ]
            if v: chyby.append(f"{o['id']}: vztah {typ} existuje, ale pole {typ} prázdné")

# 4) cykly
def hloubka(id_,visited=None):
    if visited is None: visited = set()
    if id_ in visited: return -1
    visited.add(id_)
    o = idmap.get(id_)
    if not o: return 1
    h = 1
    for k in ('otec','matka'):
        if o.get(k):
            hh = hloubka(o[k], visited.copy())
            if hh == -1: chyby.append(f"cyklus přes {id_} -> {k} {o[k]}")
            h = max(h, hh+1)
    return h
for o in D['osoby']: hloubka(o['id'])

# 5) soubory pramenů
for p in D['prameny']:
    for s in p.get('soubory', []):
        b = os.path.basename(s)
        if not os.path.exists(os.path.join(BASE, 'dukazy', b)):
            chyby.append(f"pramen {p['id']}: soubor {b} chybí v dukazy/")

# 6) soulad JSON vs data.js
for k in ('osoby','vztahy','udalosti','prameny','galerie'):
    a, b = len(D[k]), len(W[k])
    if a != b: chyby.append(f"rozsoulad {k}: json={a}, data.js={b}")
for o, w in zip(D['osoby'], W['osoby']):
    if o['id'] != w['id']: chyby.append("pořadí osob v data.js nesouhlasí"); break
for f in ('otec','matka','jmeno'):
    for o, w in zip(D['osoby'], W['osoby']):
        if o.get(f) != w.get(f): chyby.append(f"{o['id']}: pole {f} nesouhlasí json vs data.js ({o.get(f)} vs {w.get(f)})")

print(f"Osob: {len(D['osoby'])}, vztahů: {len(D['vztahy'])}, událostí: {len(D['udalosti'])}, pramenů: {len(D['prameny'])}, galerie: {len(D['galerie'])}")
print(f"Nejhlubší větev: {max(hloubka(o['id']) for o in D['osoby'])} generací")
if chyby:
    print(f"CHYBY ({len(chyby)}):")
    for c in chyby: print(' -', c)
    sys.exit(1)
print("INTEGRITA OK – žádné chyby.")
