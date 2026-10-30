#!/usr/bin/env python3
"""Neutralní čtení obrázku vizuálním modelem (z-ai vision).
Vytiskne jen text odpovědi. Prompt musí být NEUTRÁLNÍ (bez hledaných jmen) – viz metodika.
Usage: python3 scripts/vlm.py <obrazek> "<dotaz>" [--thinking]
"""
import sys, json, subprocess, re, os

def extract_json(txt):
    m = re.search(r'\{.*\}', txt, re.S)
    if not m:
        raise ValueError('nenalezen JSON v odpovědi')
    return json.loads(m.group(0))

def main():
    args = sys.argv[1:]
    img = args[0]
    prompt = args[1]
    thinking = '--thinking' in args
    if not os.path.exists(img):
        print(f'CHYBÍ SOUBOR: {img}', file=sys.stderr)
        sys.exit(2)
    cmd = ['z-ai', 'vision', '--image', img, '--prompt', prompt]
    if thinking:
        cmd.append('--thinking')
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
    try:
        d = extract_json(r.stdout)
        print(d['choices'][0]['message']['content'])
    except Exception:
        print('RAW STDOUT:', r.stdout[-3000:], file=sys.stderr)
        print('RAW STDERR:', r.stderr[-2000:], file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
