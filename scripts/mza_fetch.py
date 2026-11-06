#!/usr/bin/env python3
"""Skládá snímek matriky MZA z DeepZoom dlaždic v PLNÉM rozlišení (podle .dzi).

Odolné proti pomalému/omezenému serveru:
- ukládá průběžně (každých ~20 dlaždic i po každém průchodu)
- umí obnovit přerušené stahování (sidecar .tiles.json se seznamem hotových dlaždic)
- po druhém neúspěšném průchodu dlaždice vzdává a uloží, co je

Použití:
  python3 scripts/mza_fetch.py <dzi_url> <vystup.png> [--level N] [--region x0 y0 x1 y1]
"""
import sys, os, math, time, io, json, subprocess, re
import urllib.parse
from PIL import Image

UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'

def fetch(url, retries=2, max_time=12):
    for i in range(retries):
        try:
            r = subprocess.run(['curl', '-s', '--max-time', str(max_time), '-A', UA, '-o', '-', url],
                               capture_output=True, timeout=max_time + 5)
            if r.returncode == 0 and r.stdout and r.stdout[:3] == b'\xff\xd8\xff':
                return r.stdout
        except Exception:
            pass
        time.sleep(0.3 + 0.3 * i)
    return None

def main():
    dzi = sys.argv[1]
    out = sys.argv[2]
    level = None
    region = None
    if '--level' in sys.argv:
        level = int(sys.argv[sys.argv.index('--level') + 1])
    if '--region' in sys.argv:
        i = sys.argv.index('--region')
        region = tuple(int(v) for v in sys.argv[i + 1:i + 5])

    raw = fetch(dzi, retries=3, max_time=20)
    if not raw:
        r = subprocess.run(['curl', '-s', '--max-time', '20', '-A', UA, '-o', '-', dzi],
                           capture_output=True, timeout=25)
        raw = r.stdout
    m = re.search(rb'Width="(\d+)"\s+Height="(\d+)"', raw)
    t = re.search(rb'TileSize="(\d+)"', raw)
    if not m or not t:
        print('CHYBA: nepovedlo se přečíst .dzi deskriptor', file=sys.stderr)
        print(raw[:300], file=sys.stderr)
        sys.exit(1)
    W, H = int(m.group(1)), int(m.group(2))
    TS = int(t.group(1))
    max_level = max(1, math.ceil(math.log2(max(W, H))))
    lvl = max_level if level is None else min(max_level, level)
    print(f'Výstup: {W}x{H}, tile {TS}, level {lvl} (max {max_level})', flush=True)

    assert dzi.endswith('.dzi')
    tile_base = dzi[:-4] + '_files'

    if region:
        rx0, ry0, rx1, ry1 = region
    else:
        rx0, ry0, rx1, ry1 = 0, 0, W, H
    rx0, ry0 = max(0, rx0), max(0, ry0)
    rx1, ry1 = min(W, rx1), min(H, ry1)
    scale = 1 << (max_level - lvl)
    cw, ch = math.ceil((rx1 - rx0) / scale), math.ceil((ry1 - ry0) / scale)
    canvas = Image.new('RGB', (cw, ch))
    tx0, ty0 = rx0 // (TS * scale), ry0 // (TS * scale)
    tx1, ty1 = math.ceil(rx1 / (TS * scale)), math.ceil(ry1 / (TS * scale))

    sidecar = out + '.tiles.json'
    hotovo = set()
    if os.path.exists(sidecar) and os.path.exists(out):
        try:
            hotovo = {tuple(x) for x in json.load(open(sidecar))}
            canvas = Image.open(out).convert('RGB')
            if canvas.size != (cw, ch):
                print('varování: rozměry obnoveného plátna nesedí, začínám znovu', file=sys.stderr)
                canvas = Image.new('RGB', (cw, ch))
                hotovo = set()
            else:
                print(f'obnovuji: hotovo {len(hotovo)} dlaždic', flush=True)
        except Exception:
            hotovo = set()

    souradnice = [(tx, ty) for ty in range(ty0, ty1) for tx in range(tx0, tx1)]
    celkem = len(souradnice)
    od_okamziku = 0
    t0 = time.time()

    def uloz():
        canvas.save(out)
        json.dump([list(x) for x in hotovo], open(sidecar, 'w'))

    for pruchod in range(3):
        zbyva = [c for c in souradnice if c not in hotovo]
        if not zbyva:
            break
        print(f'průchod {pruchod+1}: zbývá {len(zbyva)}/{celkem} dlaždic', flush=True)
        for (tx, ty) in zbyva:
            url = f'{tile_base}/{lvl}/{tx}_{ty}.jpg'
            data = fetch(url)
            if data:
                im = Image.open(io.BytesIO(data))
                ox = (tx * TS * scale - rx0) // scale
                oy = (ty * TS * scale - ry0) // scale
                canvas.paste(im, (ox, oy))
                hotovo.add((tx, ty))
                od_okamziku += 1
                if od_okamziku % 20 == 0:
                    uloz()
            time.sleep(0.10 if pruchod == 0 else 0.5)
        uloz()
        if len(hotovo) < celkem:
            print(f'  po průchodu {pruchod+1}: {len(hotovo)}/{celkem}, čekám 8 s na obnovení serveru', flush=True)
            time.sleep(8)

    uloz()
    if os.path.exists(sidecar) and len(hotovo) == celkem:
        os.remove(sidecar)
    print(f'OK {out} ({cw}x{ch}, dlaždic {len(hotovo)}/{celkem}, nezdařilo {celkem-len(hotovo)}, {time.time()-t0:.0f}s)')

if __name__ == '__main__':
    main()
