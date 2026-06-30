# Memory Schema

*Schema and layered architecture for memory entries. This is a LIBRARY file —
curate as the memory system evolves.*

## Layered memory architecture

| Layer | What | Where | Mutability |
|-------|------|-------|------------|
| Native rules | Auto-injected operational rules | `memories/MEMORY.md` or runtime-native | State (overwrite) |
| Native user | Auto-injected user profile | `memories/USER.md` or runtime-native | State (overwrite) |
| State files | Current operational truth | Root `.md` files | State (overwrite) |
| RAG entries | Individual memory records | `memory/*.md` | Library (curate) |
| Session DB | Searchable session history | Runtime-native (e.g., `state.db`) | History (append) |
| Completed | Finished task journal | `completed/*.md` | History (append) |
| Knowledge | Reference docs and research | `knowledge/*.md` | Library (curate) |

## Entry format

Each memory entry uses YAML frontmatter:

```yaml
---
uid: mem-{namespace}-{topic}
namespace: semantic|procedural|episodic|working
topic: Short title
tags: [tag1, tag2]
source: URL or path
confidence: 0.0-1.0
created: YYYY-MM-DD
updated: YYYY-MM-DD
retention: permanent|long|medium|ephemeral
---
```

## Namespaces

| Namespace | Purpose | Example |
|-----------|---------|---------|
| `semantic` | Durable facts | "Server IP is 192.0.2.1" |
| `procedural` | Reusable methods | "How to deploy via Caddy" |
| `episodic` | Important events | "Transfer completed 2026-06-16" |
| `working` | Temporary context | "Current task: fix webhook" |

## Trust tiers

| Tier | Meaning |
|------|---------|
| Verified | File or tool confirmed, confidence >= 0.9 |
| Partner | Partner-echoed; cross-check before acting |
| Extracted | Extracted from raw material |
| Inferred | Assumed; confidence < 0.9 |

## Surveillance routine

Weekly audit procedure:

1. List all entries in `memory/INDEX.md`.
2. Check each entry for staleness (updated > 30 days for working, > 90 days for episodic).
3. Check confidence scores — flag entries < 0.7 for review.
4. Check for orphaned entries (path does not exist).
5. Check for duplicate topics across namespaces.
6. Archive stale entries (move to `archive/memory/`).
7. Regenerate `memory/index.json` from `INDEX.md` if using JSON index.
8. Log audit completion in `logs/events.jsonl`.
