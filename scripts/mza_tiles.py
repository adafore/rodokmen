#!/usr/bin/env python3
"""Skládání matričních snímků z IIPImage/DeepZoom dlaždic MZA."""
import sys, os, math, time, io, subprocess
from PIL import Image

def fetch_url(url, max_retries=3):
    """Stáhne URL přes curl (server vrací 426 pro urllib)."""
    for attempt in range(max_retries):
        try:
            r = subprocess.run(
                ['curl', '-s', '--max-time', '30', '-A',
                 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
                 '-o', '-', url],
                capture_output=True, timeout=40)
            if r.returncode == 0 and r.stdout and r.stdout[:3] == b'\xff\xd8\xff':
                return r.stdout
        except Exception:
            pass
        time.sleep(0.5 + attempt)
    return None

def level_size(max_w, max_h, max_level, level):
    """Rozměry obrázku na dané úrovni."""
    shift = max_level - level
    w = max(1, math.ceil(max_w / (1 << shift)))
    h = max(1, math.ceil(max_h / (1 << shift)))
    return w, h

def download_tiles(tiles_url, level, img_w, img_h, out_path, region=None,
                   tile_size=256, max_level=13, max_retries=3, delay=0.15):
    """Stáhne dlaždice dané úrovně a složí do PNG.
    region = (x0, y0, x1, y1) v pixelech PLNÉ úrovně (max_level); None = celý obrázek.
    Vrací cestu k výslednému souboru a bounding box v plném rozlišení."""
    shift = max_level - level
    lw, lh = level_size(img_w, img_h, max_level, level)
    if region:
        # převod regionu z plného rozlišení na úroveň
        rx0 = max(0, region[0] >> shift); ry0 = max(0, region[1] >> shift)
        rx1 = min(lw, region[2] >> shift); ry1 = min(lh, region[3] >> shift)
    else:
        rx0, ry0, rx1, ry1 = 0, 0, lw, lh
    tw = math.ceil(rx1 / tile_size); th = math.ceil(ry1 / tile_size)
    tx0 = (rx0 // tile_size); ty0 = (ry0 // tile_size)
    canvas = Image.new('RGB', (rx1 - rx0, ry1 - ry0))
    n = 0
    for ty in range(ty0, th):
        for tx in range(tx0, tw):
            url = f"{tiles_url.rstrip('/')}/{level}/{tx}_{ty}.jpg"
            data = fetch_url(url)
            if data:
                im = Image.open(io.BytesIO(data))
                canvas.paste(im, (tx * tile_size - rx0, ty * tile_size - ry0))
                n += 1
            else:
                print(f"  FAIL {url}", file=sys.stderr)
            time.sleep(delay)
    canvas.save(out_path)
    # bbox v plném rozlišení
    full_box = (rx0 << shift, ry0 << shift, rx1 << shift, ry1 << shift)
    return out_path, full_box, n

if __name__ == '__main__':
    # použití: skript.py tiles_url max_w max_h level out.png [x0 y0 x1 y1(max-level px)]
    tiles_url = sys.argv[1]
    max_w, max_h = int(sys.argv[2]), int(sys.argv[3])
    level = int(sys.argv[4])
    out = sys.argv[5]
    region = None
    if len(sys.argv) >= 10:
        region = tuple(int(v) for v in sys.argv[6:10])
    path, box, n = download_tiles(tiles_url, level, max_w, max_h, out, region)
    print(f"OK {path} tiles={n} level={level} full_box={box}")
