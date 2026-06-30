# MEMORY.md — {{AGENT_NAME}}

*This file IS the memory index — current memories and references to nested entries in memory/. Overwrite in place. The schema and trust tiers here govern how memories are stored and retrieved.*
This file contains both governance schema and an index pointing to `memory/`
library entries.*

## Architecture

| Layer | What | Where | Class | Mutability |
|-------|------|-------|-------|-----------|
| This file | Current memories + index | `MEMORY.md` (root) | State | Overwrite |
| Auto-injected rules | Operational rules copy | `memories/MEMORY.md` | State | Overwrite |
| RAG entries | Individual memory records | `memory/*.md` | Library | Curate |
| Memory index | Markdown index of entries | `memory/INDEX.md` | Library | Curate |
| Memory schema | Schema + layered architecture | `memory/SCHEMA.md` | Library | Curate |
| JSON index | Machine-readable index | `memory/index.json` | Library | Curate |
| Knowledge | Reference docs and research | `knowledge/*.md` | Library | Curate |
| Completed | Finished task journal | `completed/*.md` | History | Append |

## Schema

Every memory entry in `memory/` uses YAML frontmatter:

| Field | Meaning |
|-------|---------|
| `uid` | Stable ID: `mem-{namespace}-{topic}` |
| `namespace` | `semantic` / `procedural` / `episodic` / `working` |
| `topic` | Short title |
| `tags` | Taxonomy terms |
| `source` | URL, path, or note |
| `confidence` | 0.0–1.0 |
| `created` / `updated` | ISO 8601 dates |
| `retention` | `permanent` / `long` / `medium` / `ephemeral` |

## Current memories

*Index to nested entries. Update this section when memories change.*

### Semantic (durable facts)

| UID | Topic | Path | Confidence | Updated |
|-----|-------|------|------------|---------|
| {{UID_1}} | {{TOPIC_1}} | `memory/{{PATH_1}}` | {{CONFIDENCE_1}} | {{DATE_1}} |

### Procedural (methods, runbooks)

| UID | Topic | Path | Confidence | Updated |
|-----|-------|------|------------|---------|
| {{UID_2}} | {{TOPIC_2}} | `memory/{{PATH_2}}` | {{CONFIDENCE_2}} | {{DATE_2}} |

### Episodic (events)

| UID | Topic | Path | Confidence | Updated |
|-----|-------|------|------------|---------|
| {{UID_3}} | {{TOPIC_3}} | `memory/{{PATH_3}}` | {{CONFIDENCE_3}} | {{DATE_3}} |

### Working (temporary)

| UID | Topic | Path | Confidence | Updated |
|-----|-------|------|------------|---------|
| {{UID_4}} | {{TOPIC_4}} | `memory/{{PATH_4}}` | {{CONFIDENCE_4}} | {{DATE_4}} |

## Mesh index

- **Indexes:** `memory/`
- **Relationship:** Current memories ↔ accumulated knowledge
- **Rule:** When memories are superseded, archive old entries to `archive/memory/`.

## Trust tiers

| Tier | Meaning | Label |
|------|---------|-------|
| `verified` | File or tool confirmed, confidence >= 0.9 | State normally |
| `partner` | Partner-echoed; cross-check before acting | "Per partner echo..." |
| `extracted` | Extracted from raw material | Note extraction source |
| `inferred` | Assumed; confidence < 0.9 | Label as assumption |

## Usage rules

1. Load on demand. Query by namespace, priority, or tag.
2. Verify provenance. Label confidence < 0.9 as assumptions.
3. Update this index when adding, updating, or removing entries in `memory/`.
4. Archive stale entries (move to `archive/memory/`).
5. Before writing memory files, read them first. Write only concrete updates.

## Surveillance routine

Weekly audit procedure (also in `memory/SCHEMA.md`):

1. List all entries in `memory/INDEX.md`.
2. Check each entry for staleness (working > 30 days, episodic > 90 days).
3. Check confidence scores — flag entries < 0.7 for review.
4. Check for orphaned entries (path does not exist).
5. Check for duplicate topics across namespaces.
6. Archive stale entries (move to `archive/memory/`).
7. Regenerate `memory/index.json` from `INDEX.md` if using JSON index.
8. Log audit completion in `logs/events.jsonl`.

Last updated: {{DATE}}
