#!/usr/bin/env python3
"""Vytvoří zmenšený náhled stránky s mřížkou (řádky A-F, sloupce 1-4) pro přesnou lokalizaci.
Použití: python3 scripts/grid_preview.py <vstup.png> <vystup.png> [cílová_šířka]
"""
import sys
from PIL import Image, ImageDraw, ImageFont

src, dst = sys.argv[1], sys.argv[2]
target_w = int(sys.argv[3]) if len(sys.argv) > 3 else 1400

im = Image.open(src).convert('RGB')
scale = target_w / im.width
im2 = im.resize((target_w, int(im.height * scale)), Image.LANCZOS)
d = ImageDraw.Draw(im2)
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
except Exception:
    font = ImageFont.load_default()

W, H = im2.size
rows = 6
cols = 4
for r in range(1, rows):
    y = int(H * r / rows)
    d.line([(0, y), (W, y)], fill=(200, 30, 30), width=2)
for c in range(1, cols):
    x = int(W * c / cols)
    d.line([(x, 0), (x, H)], fill=(200, 30, 30), width=2)
# střed (hranice dvoustrany)
d.line([(W // 2, 0), (W // 2, H)], fill=(30, 30, 200), width=3)
labels = ['A', 'B', 'C', 'D', 'E', 'F']
for r, lab in enumerate(labels):
    y = int(H * (r + 0.5) / rows)
    d.text((6, y - 12), lab, fill=(200, 30, 30), font=font)
    # i vpravo
    d.text((W - 24, y - 12), lab, fill=(200, 30, 30), font=font)
im2.save(dst)
print(f'OK {dst} ({W}x{H}), mřížka {rows} řádků × {cols} sloupců, střed = modrá linka')
