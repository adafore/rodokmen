#!/usr/bin/env bash
# Stáhne horní část pravé strany zadaného snímku knihy 2785 (rejstřík oddaných 1819-1882)
# Usage: bash scripts/fetch_r2785_right.sh <cislo_snimku> [out_prefix] [y_start] [y_end(full-res)]
set -e
N=$1
PREFIX=${2:-dukazy/R2785_sn$(printf '%03d' $N)}
Y0=${3:-400}
Y1=${4:-1500}
BASE="https://www.mza.cz/iipsrv/iipsrv.fcgi?Deepzoom=/srv/LUN107/LUN108/216000010/216000010-000253-003370-000000-002785-000000-FM-B09320/216000010-000253-003370-000000-002785-000000-FM-B09320"
# spravna LUN slozka se lisi; bereme ze vieweru:
IMG=$(printf '%05d' $((N*10)))
# LUN cestu prevezmeme z parametru souboru, ktery uklada caller skript
URLBASE=$(cat /home/z/my-project/glm_rodokmen_kolo2/scripts/r2785_base.txt)
python3 /home/z/my-project/glm_rodokmen_kolo2/scripts/mza_tiles.py \
  "${URLBASE}-${IMG}.jp2_files/" 6167 5040 12 "${PREFIX}_right_top.jpg" 3084 "$Y0" 6167 "$Y1"
