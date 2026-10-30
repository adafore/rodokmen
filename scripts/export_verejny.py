#!/usr/bin/env python3
"""Veřejný export dat omezující údaje žijících/potenciálně žijících osob.
Použití PŘED případným budoucím zveřejněním webu (zadání kola 2).
Vytvoří data/rodokmen_data_verejny.json a data/rodokmen_data_verejny.zmenene.txt (soupis odebraných osob).

Pravidlo: z veřejné verze se ODEJÍMAJÍ osoby bez doloženého úmrtí narozené v roce 1900 nebo později
(dle data, pokud je; u odhadů konzervativně). Osoby narozené dříve a bez doloženého úmrtí
se zahrnují, protože jde o historické osoby; nikde neprohlašujeme, že zemřely.
POZOR: toto je technický filtr, ne právní poradenství. Rozhodnutí o zveřejnění zůstává na uživateli.
"""
import json, os, copy

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VSTUP = os.path.join(BASE, 'data', 'rodokmen_data.json')
VYSTUP = os.path.join(BASE, 'data', 'rodokmen_data_verejny.json')
ZMENY = os.path.join(BASE, 'data', 'rodokmen_data_verejny.zmenene.txt')
MEZ_ROK = 1900  # osoby narozené od tohoto roku bez doloženého úmrtí se vynechají

def main():
    with open(VSTUP, encoding='utf-8') as f:
        d = json.load(f)

    odstraneni = set()
    for o in d['osoby']:
        nar = o.get('narozeni') or {}
        rok = None
        if nar.get('datum'):
            rok = int(str(nar['datum'])[:4])
        elif nar.get('obdobi'):
            try:
                rok = int(str(nar['obdobi']).split('/')[0].split('-')[-1].strip('~').strip()[:4])
            except Exception:
                rok = None
        umrti = o.get('umrti')
        if rok is not None and rok >= MEZ_ROK and not (umrti and (umrti.get('datum') or umrti.get('obdobi'))):
            odstraneni.add(o['id'])
        if rok is None and not (umrti and (umrti and (umrti.get('datum') or umrti.get('obdobi')))):
            # neznámý rok narození a nedoložené úmrtí – konzervativně vynechat
            odstraneni.add(o['id'])

    v = copy.deepcopy(d)
    v['osoby'] = [o for o in v['osoby'] if o['id'] not in odstraneni]
    v['vztahy'] = [r for r in v['vztahy'] if r['od'] not in odstraneni and r['k'] not in odstraneni]
    v['udalosti'] = [e for e in v['udalosti'] if not any(p in odstraneni for p in e['osoby'])]
    v['galerie'] = [g for g in v['galerie']]  # obrazky zůstavají (bez údajů žijících osob)
    v['meta'] = dict(v['meta'])
    v['meta']['verze'] = v['meta']['verze'] + ' – VEŘEJNÝ EXPORT (omezené údaje žijících/potenciálně žijících osob)'
    v['meta']['vychozi_osoba'] = None
    v['meta']['poznamka'] = 'Zjednodušený veřejný export: osoby bez doloženého úmrtí narozené od roku %d (nebo s neznámým rokem) jsou vynechány. Privátní plná verze zůstává v rodokmen-projekt.zip.' % MEZ_ROK

    with open(VYSTUP, 'w', encoding='utf-8') as f:
        json.dump(v, f, ensure_ascii=False, indent=1)
    jmena = [o['jmeno'] for o in d['osoby'] if o['id'] in odstraneni]
    with open(ZMENY, 'w', encoding='utf-8') as f:
        f.write('Z veřejného exportu vynechané osoby (žijící nebo potenciálně žijící):\n')
        f.write('\n'.join('- ' + j for j in jmena) + '\n')
    print('Veřejný export:', VYSTUP)
    print('Vynecháno osob:', len(odstraneni), '→', '; '.join(jmena))

if __name__ == '__main__':
    main()
