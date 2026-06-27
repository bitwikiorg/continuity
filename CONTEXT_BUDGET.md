# CONTEXT_BUDGET.md — {{AGENT_NAME}}

*Prompt and context hygiene rules. Prevents cup overflow: we cannot expect precise context if we do not manage it.*

## Principles

1. Load only what is needed. Canonical boot files are small and stable; raw logs and archives are not.
2. Prefer indexes over dumps. Use `memory/index.json`, `STATE.md` node index.
3. Reference, do not rewrite. Use include references for long existing text.
4. Keep tainting artifacts out of auto-load.
5. Refresh context at boundaries: new task, subordinate return, before external action.

## Auto-load budget

Files injected via `AGENTS.promptinclude.md` (Agent Zero) or runtime-native auto-injection:

1. `AGENTS.md` through `subordinate-hierarchy.md` (see load order in `AGENTS.md`)

*If prompt context grows too large, defer `INFRASTRUCTURE.md`, `REFERENCES.md`, and runtime files to on-demand load.*

## Excluded from auto-load

Never include these in auto-injection:

- `archive/` — flagged for deletion
- `logs/` — raw event streams
- `journal/` — narrative logs
- `completed/` — finished task records
- `snapshots/` — immutable backups
- Large code repositories
- `.secrets/`, `.env`, credentials

## Taint classes

| Class | Why it taints | Safe handling |
|-------|--------------|---------------|
| `archive` | Stale, redundant, partially superseded | Extract value, discard. Never auto-load. |
| `logs` | High volume, low signal-to-noise | Query by timestamp or type. Do not load wholesale. |
| `research` | Uncurated, unverified | Extract verified facts into memory. |
| `secrets` | Security risk | Reference by placeholder only. |
| `large-repos` | Drown task context | Load per-project files only. |

## Memory load rules

- Do not load `memory/index.json` in full unless needed.
- Query by namespace, priority, or tag.
- Label confidence < 0.9 as assumptions.

## Subordinate context limits

- **Workers:** atomic task + necessary snippets only. No auto-load of full continuity.
- **Team Leaders:** task, scope, allowed tools. May load `AGENTS.md`.
- No subordinate loads `archive/`, `logs/`, or `research/` without explicit instruction.

## Log retention

| Location | Retention | Action after limit |
|----------|-----------|--------------------|
| `logs/events.jsonl` | 90 days | Rotate to archive |
| `journal/` | 90 days | Summarize into memory |
| `completed/` | 30 days after completion | Compress and archive |

Last updated: {{DATE}}
