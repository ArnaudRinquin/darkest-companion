#!/usr/bin/env bash
# Regenerates the PNG images from their HTML sources in assets/.
#   public/og/og.png, public/og/<region>.png  1200x630  Open Graph / Twitter cards
#   assets/social-preview.png                  1280x640  GitHub repo social preview + README hero
#   public/favicon.png 64x64, public/apple-touch-icon.png 180x180
# Rendered at 2x and downscaled with sips so text and edges stay crisp. macOS + Chrome.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

render() { # source.html?query out.png width height
  local name; name="$(basename "$2")"
  "$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --allow-file-access-from-files --virtual-time-budget=2000 \
    --window-size="$3,$4" --screenshot="$TMP/$name" "file://$PWD/assets/$1" 2>/dev/null
  sips -z "$4" "$3" "$TMP/$name" --out "$2" >/dev/null
  printf '%-32s %sx%s\n' "$2" "$3" "$4"
}

mkdir -p public/og
render "card.html" public/og/og.png 1200 630
for r in ruins warrens weald cove; do
  render "card.html?region=$r" "public/og/$r.png" 1200 630
done
render "card.html?size=social" assets/social-preview.png 1280 640
render "icon.html?size=64" public/favicon.png 64 64
render "icon.html?size=180" public/apple-touch-icon.png 180 180
