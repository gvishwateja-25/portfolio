#!/usr/bin/env bash
# Heuristic only: review candidates for dynamic and external references first.
# Dry run by default. --delete removes the listed candidates.
set -euo pipefail
cd "$(dirname "$0")/.."

case "${1:-}" in
  "") delete=false ;;
  --delete) delete=true ;;
  *) echo "Usage: bash scripts/prune-unused-assets.sh [--delete]" >&2; exit 2 ;;
esac

total=0
while IFS= read -r -d '' file; do
  # Searching filenames also catches relative CSS URLs and conservative matches
  # for dynamically assembled paths. Include JS, SVG, metadata, and config files.
  if grep -rFq --include='*.tsx' --include='*.ts' --include='*.html' \
    --include='*.css' --include='*.js' --include='*.mjs' --include='*.svg' \
    --include='*.json' --include='*.md' --include='*.swift' \
    -- "${file##*/}" src public scripts README.md next.config.ts lighthouserc.json; then
    continue
  else
    status=$?
    if [[ "$status" -ne 1 ]]; then
      echo "Reference search failed; stopping without deleting this file." >&2
      exit "$status"
    fi
  fi
  size=$(stat -c %s "$file" 2>/dev/null || stat -f %z "$file")
  total=$((total + size))
  printf '%9d  %s\n' "$size" "$file"
  if "$delete"; then
    rm -- "$file"
  fi
done < <(find public/images -type f -print0)

mode='dry run'
if "$delete"; then mode='deleted'; fi
printf 'candidate total: %d KB (%s)\n' "$((total / 1024))" "$mode"
