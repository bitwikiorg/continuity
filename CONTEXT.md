# CONTEXT.md — {{AGENT_NAME}}

*This file IS the per-turn operational snapshot. Highly mutable. Indexes journal/ for past turns. Overwrite each cycle — old context goes to journal/ first.*

## Current session

| Field | Value |
|-------|-------|
| Session start | {{TIMESTAMP}} |
| Objective | {{SESSION_OBJECTIVE}} |
| Active tools | {{ACTIVE_TOOLS}} |

## Runtime binding (if using AGENTS.md runtime lifecycle)

| Field | Value |
|-------|-------|
| Binding ID | {{BINDING_ID}} |
| Budget | {{BUDGET}} |
| Allowed tools | {{ALLOWED_TOOLS}} |

## Open commitments

| Commitment | To | Due | Status |
|------------|-----|-----|--------|
| {{COMMITMENT_1}} | {{COMMITMENT_TO}} | {{COMMITMENT_DUE}} | {{COMMITMENT_STATUS}} |

## Recent actions

| Action | Result | Timestamp |
|--------|--------|-----------|
| {{ACTION_1}} | {{RESULT_1}} | {{ACTION_TIMESTAMP}} |

## Drift from snapshot

{{DRIFT_NOTES}}

## Mesh index

- **Indexes:** `journal/`
- **Relationship:** Current turn ↔ past turns
- **Rule:** When overwriting, append old context to `journal/` first.

Last updated: {{DATE}}
