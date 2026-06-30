#!/usr/bin/env bash
# state-file-audit.sh — Check for broken paths, stale facts, missing files.
# Runtime-agnostic. Accepts a workspace directory as argument.
# Read-only — no modifications.
#
# Usage: bash state-file-audit.sh /path/to/workspace

set -euo pipefail

STATE_DIR="${1:-.}"
EXIT_CODE=0

echo "=== State File Audit $(date -u +%Y-%m-%dT%H:%M:%SZ) ==="
echo "Workspace: $STATE_DIR"
echo

# 1. Broken path references
echo "--- Broken Path Check ---"
if [ -f "$STATE_DIR/STATE.md" ]; then
  broken=$(grep -rn 'continuity/' "$STATE_DIR"/*.md 2>/dev/null || true)
  if [ -n "$broken" ]; then
    echo "FOUND broken path references:"
    echo "$broken"
    echo
    EXIT_CODE=1
  else
    echo "No broken path references found."
  fi
fi
echo

# 2. File existence check
echo "--- File Existence Check ---"
EXPECTED_FILES=(
  "$STATE_DIR/AGENTS.md"
  "$STATE_DIR/STATE.md"
  "$STATE_DIR/TODO.md"
  "$STATE_DIR/INIT.md"
  "$STATE_DIR/SNAPSHOT.md"
)

for f in "${EXPECTED_FILES[@]}"; do
  if [ ! -f "$f" ]; then
    echo "MISSING: $f"
    EXIT_CODE=1
  fi
done

# Check for optional files and report
OPTIONAL_FILES=(
  "$STATE_DIR/MEMORY.md"
  "$STATE_DIR/PLAN.md"
  "$STATE_DIR/LEARNINGS.md"
  "$STATE_DIR/WARNING.md"
  "$STATE_DIR/CHECKPOINT.md"
)

for f in "${OPTIONAL_FILES[@]}"; do
  if [ ! -f "$f" ]; then
    echo "OPTIONAL MISSING: $f"
  fi
done

# Check for expected directories
EXPECTED_DIRS=(
  "$STATE_DIR/completed"
  "$STATE_DIR/snapshots"
)

for d in "${EXPECTED_DIRS[@]}"; do
  if [ ! -d "$d" ]; then
    echo "MISSING DIR: $d"
  fi
done

if [ "$EXIT_CODE" -eq 0 ]; then
  echo "All required files present."
fi
echo

# 3. TODO discipline check
echo "--- TODO Discipline Check ---"
if [ -f "$STATE_DIR/TODO.md" ]; then
  TODO_DONE=$(grep -c '## Done\|DONE\|~~' "$STATE_DIR/TODO.md" 2>/dev/null || echo "0")
  if [ "$TODO_DONE" -gt 0 ]; then
    echo "WARNING: TODO.md contains completed items. Move them to completed/ directory."
    EXIT_CODE=1
  else
    echo "TODO.md is active-only."
  fi
fi
echo

# 4. Placeholder check
echo "--- Placeholder Check ---"
PLACEHOLDERS=$(grep -rn '{{' "$STATE_DIR"/*.md 2>/dev/null | grep -v 'PLACEHOLDER\|template' || true)
if [ -n "$PLACEHOLDERS" ]; then
  echo "FOUND unfilled placeholders:"
  echo "$PLACEHOLDERS" | head -10
  echo
  EXIT_CODE=1
else
  echo "No unfilled placeholders found."
fi
echo

echo "=== Audit Complete (exit=$EXIT_CODE) ==="
exit $EXIT_CODE
