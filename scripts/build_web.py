#!/usr/bin/env python3
"""Generuje web/js/data.js z data/rodokmen_data.json a optimalizuje obrázky do web/img/dukazy/.
Usage: python3 scripts/build_web.py
"""
import json, os, sys, hashlib
from PIL import Image

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_IN = os.path.join(BASE, 'data', 'rodokmen_data.json')
WEB = os.path.join(BASE, 'web')
IMG_OUT = os.path.join(WEB, 'img', 'dukazy')
MAX_SIDE = 1500
QUALITY = 80

def optimize(src, dst):
    """Zmenší obrázek na MAX_SIDE delší strany a uloží jako JPEG."""
    im = Image.open(src)
    if im.mode in ('RGBA', 'P', 'LA'):
        # složit na bílé pozadí (PNG výřezy)
        bg = Image.new('RGB', im.size, (255, 255, 255))
        if im.mode == 'P':
            im = im.convert('RGBA')
        bg.paste(im, mask=im.split()[-1] if im.mode in ('RGBA', 'LA') else None)
        im = bg
    elif im.mode != 'RGB':
        im = im.convert('RGB')
    w, h = im.size
    if max(w, h) > MAX_SIDE:
        scale = MAX_SIDE / max(w, h)
        im = im.resize((max(1, round(w * scale)), max(1, round(h * scale))), Image.LANCZOS)
    im.save(dst, 'JPEG', quality=QUALITY, optimize=True)
    return os.path.getsize(dst)

def main():
    os.makedirs(IMG_OUT, exist_ok=True)
    with open(DATA_IN, encoding='utf-8') as f:
        d = json.load(f)

    # 1) optimalizace všech souborů galerie + souborů pramenů
    needed = set()
    for g in d['galerie']:
        needed.add(os.path.basename(g['soubor']))
    for p in d['prameny']:
        for s in p.get('soubory', []):
            needed.add(os.path.basename(s))
    for e in d['udalosti']:
        for s in e.get('dukazy', []):
            needed.add(os.path.basename(s))

    manifest = {}
    for name in sorted(needed):
        src = os.path.join(BASE, 'dukazy', name)
        if not os.path.exists(src):
            print(f"CHYBÍ: {src}", file=sys.stderr)
            sys.exit(1)
        dst = os.path.join(IMG_OUT, name.rsplit('.', 1)[0] + '.jpg')
        size = optimize(src, dst)
        manifest[name] = {'web': 'img/dukazy/' + os.path.basename(dst), 'bytes': size}
        print(f"  {name} -> {os.path.basename(dst)} ({size//1024} KB)")

    # 2) přepsat cesty v datech na webové relativní
    def webpath(orig):
        base = os.path.basename(orig)
        if base in manifest:
            return manifest[base]['web']
        return orig

    for g in d['galerie']:
        g['soubor'] = webpath(g['soubor'])
    for p in d['prameny']:
        if 'soubory' in p:
            p['soubory'] = [webpath(s) for s in p['soubory']]
    for e in d['udalosti']:
        if 'dukazy' in e:
            e['dukazy'] = [webpath(s) for s in e['dukazy']]

    # 3) zapsat data.js (plain script, žádné ES moduly -> funguje přes file://)
    out = 'web/js/data.js'
    payload = json.dumps(d, ensure_ascii=False, indent=1)
    with open(os.path.join(BASE, out), 'w', encoding='utf-8') as f:
        f.write('// Vygenerováno scripts/build_web.py z data/rodokmen_data.json – needitovat ručně.\n')
        f.write('var RODOKMEN_DATA = ')
        f.write(payload)
        f.write(';\n')
    total = sum(m['bytes'] for m in manifest.values())
    print(f"OK: {out} | obrázků: {len(manifest)} | celkem obrázky: {total//1024} KB")

if __name__ == '__main__':
    main()
