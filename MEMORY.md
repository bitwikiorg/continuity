# MEMORY.md — {{AGENT_NAME}}

*Memory governance and schema. Points to `memory/index.json` for the machine-readable index.*

## Architecture

| Layer | Purpose | Location |
|-------|---------|----------|
| Schema | Field definitions and validation | `memory/schema.json` |
| File memories | Auto-injected operational rules | `MEMORY.md` (this file) or runtime-native path |
| File index | Machine-readable index of all entries | `memory/index.json` |
| Episodic entries | Individual memory records | `memory/` directory |
| Completed work | Finished task journal | `completed/` directory |

## Schema

Every durable memory entry in `memory/index.json`:

| Field | Meaning |
|-------|---------|
| `uid` | Stable ID: `mem-{namespace}-{topic}` |
| `namespace` | `semantic` / `procedural` / `episodic` / `working` |
| `topic` | Short title |
| `path` | File where memory lives |
| `priority` | `P0`–`P3` |
| `status` | `stable` / `draft` / `stale` / `archived` |
| `created` / `updated` | ISO 8601 dates |
| `provenance` | Source URL, path, or note |
| `summary` | One-line description |
| `tags` | Taxonomy terms |
| `confidence` | 0.0–1.0 |
| `retention` | `permanent` / `long` / `medium` / `ephemeral` |

## Directory taxonomy

```text
memory/
├── semantic/      durable facts
├── procedural/    reusable methods, runbooks
├── episodic/      important events
└── working/       temporary context
```

## Usage rules

1. Load on demand. Query by namespace, priority, or tag.
2. Verify provenance. Label confidence < 0.9 as assumptions.
3. Update indexes, not duplicates.
4. Archive stale memories.
5. Before writing memory files, read them first. Write only concrete updates.

## Trust tiers

| Tier | Meaning | Label |
|------|---------|-------|
| `verified` | File or tool output confirmed, confidence >= 0.9 | State normally |
| `partner` | Partner-echoed; cross-check before acting | "Per partner echo..." |
| `extracted` | Extracted from raw material | Note extraction source |
| `inferred` | Inferred or assumed; confidence < 0.9 | Label as assumption |

## High-priority durable facts

| UID | Topic | Path | Priority | Status |
|-----|-------|------|----------|--------|
| {{MEM_UID_1}} | {{MEM_TOPIC_1}} | {{MEM_PATH_1}} | {{MEM_PRIORITY_1}} | {{MEM_STATUS_1}} |

Last updated: {{DATE}}
