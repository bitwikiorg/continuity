#!/usr/bin/env bash
# check-placeholders.sh — Fail if unreplaced {{...}} markers remain
# Usage: ./scripts/check-placeholders.sh [DIRECTORY]

set -euo pipefail

DIR="${1:-$(pwd)}"
FOUND=0

echo "Checking for unreplaced placeholders in: $DIR"

while IFS= read -r file; do
  matches=$(grep -c '{{[A-Z_]*}}' "$file" 2>/dev/null || true)
  if [ "$matches" -gt 0 ]; then
    echo "FAIL: $file has $matches unreplaced placeholders"
    FOUND=1
  fi
done < <(find "$DIR" -name '*.md' -o -name '*.json' -o -name '*.sh' | grep -v '.git/')

if [ "$FOUND" -eq 0 ]; then
  echo "OK: No unreplaced placeholders found."
  exit 0
else
  echo "ERROR: Unreplaced placeholders detected. Fill in {{UPPER_CASE}} values before deployment."
  exit 1
fi
