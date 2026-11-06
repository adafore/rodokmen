#!/usr/bin/env python3
"""Zabalí výsledné balíčky 3. kola:
- rodokmen-web-kolo3.zip (jen web, index.html v kořenu, relativní cesty)
- rodokmen-projekt-kolo3.zip (celý projekt bez citlivých/nehodících se souborů)

Vyloučení z projektového ZIPu: .git, .state, tokeny, hesla, Tailscale, node_modules,
__pycache__, dočasné soubory, zadani/ (interní zadání), upload cache.
"""
import os, zipfile, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WEB = os.path.join(BASE, 'web')
OUT = os.path.join(os.path.dirname(BASE), 'download')
os.makedirs(OUT, exist_ok=True)

def pridat(zipf, path, arcname):
    zipf.write(path, arcname)

# ---------- web zip ----------
web_zip = os.path.join(OUT, 'rodokmen-web-kolo3.zip')
with zipfile.ZipFile(web_zip, 'w', zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk(WEB):
        for f in sorted(files):
            p = os.path.join(root, f)
            arc = os.path.relpath(p, WEB)
            pridat(z, p, arc)
print(f'OK {web_zip} ({os.path.getsize(web_zip)//1024} KB)')

# ---------- projekt zip ----------
proj_zip = os.path.join(OUT, 'rodokmen-projekt-kolo3.zip')
n = 0
with zipfile.ZipFile(proj_zip, 'w', zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk(BASE):
        dirs[:] = [d for d in dirs if d not in ('.git', '.state', 'node_modules', '__pycache__', 'zadani')]
        for f in sorted(files):
            p = os.path.join(root, f)
            rel = os.path.relpath(p, BASE)
            if rel.startswith('.git') or rel == '.gitignore' or rel.endswith('.pyc'):
                continue
            if rel.endswith('.tiles.json') or rel.endswith('_full2.png') and 'dukazy' not in rel:
                pass
            pridat(z, p, 'rodokmen-kolo3/' + rel)
            n += 1
print(f'OK {proj_zip} ({os.path.getsize(proj_zip)//1024} KB, {n} souborů)')
