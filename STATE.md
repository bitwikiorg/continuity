# STATE.md — {{AGENT_NAME}}

*This file IS the current operational truth. Overwrite in place. Indexes snapshots/, audits/, and artifacts/ as mesh edges. When you overwrite it, snapshot the old version first.*

## Status

`{{STATUS}}`

## Active objective

{{ACTIVE_OBJECTIVE}}

## Active workspace

`{{ACTIVE_WORKSPACE}}`

## Node index

| Node | Path | Status | Objective | Next action | Blockers |
|------|------|--------|-----------|-------------|----------|
| {{NODE_NAME}} | {{NODE_PATH}} | {{NODE_STATUS}} | {{NODE_OBJECTIVE}} | {{NODE_NEXT}} | {{NODE_BLOCKERS}} |

## Blocker rollup

| Blocker | Severity | Owner | Notes |
|---------|----------|-------|-------|
| {{BLOCKER_1}} | {{BLOCKER_SEV}} | {{BLOCKER_OWNER}} | {{BLOCKER_NOTES}} |

## Health matrix

| Domain | Status | Evidence |
|--------|--------|----------|
| Identity | {{STATUS}} | {{EVIDENCE}} |
| Memory | {{STATUS}} | {{EVIDENCE}} |
| State | {{STATUS}} | {{EVIDENCE}} |
| Partner link | {{STATUS}} | {{EVIDENCE}} |

## Next valid action

{{NEXT_VALID_ACTION}}

## Mesh index

- **Indexes:** `snapshots/`, `audits/`, `artifacts/`
- **Relationship:** Current state ↔ past states, assessments, generated outputs
- **Rule:** When overwriting, snapshot the old version to `snapshots/` first.

Last updated: {{DATE}}
