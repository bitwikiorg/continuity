#!/usr/bin/env bash
# init-agent.sh — Regenerate continuity scaffold with directory structure
# Usage: ./scripts/init-agent.sh [BASE_DIR]

set -euo pipefail

BASE_DIR="${1:-$(pwd)}"

echo "Initializing continuity scaffold in: $BASE_DIR"

mkdir -p "$BASE_DIR"/{runtime,memory/{semantic,procedural,episodic,working},completed,logs,journal,reflections,snapshots,scripts,examples,guides,archive}

for dir in logs journal reflections snapshots archive completed memory/semantic memory/procedural memory/episodic memory/working; do
  touch "$BASE_DIR/$dir/.gitkeep"
done

echo "Directory structure created."
echo "Next: Copy template files from this repo into $BASE_DIR and replace placeholders."
echo "Done."
