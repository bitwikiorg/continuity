# SNAPSHOT.md — {{AGENT_NAME}}

*Latest restoration anchor. Last known good state.*

## Snapshot

```yaml
status: {{STATUS}}
timestamp: {{TIMESTAMP}}
agent: {{AGENT_NAME}}
agent_version: {{AGENT_VERSION}}
active_objective: {{ACTIVE_OBJECTIVE}}
active_workspace: {{ACTIVE_WORKSPACE}}
current_state: |
  {{CURRENT_STATE}}
current_plan: |
  {{CURRENT_PLAN}}
last_verified: {{TIMESTAMP}}
blockers:
  - {{BLOCKER_1}}
next_safe_action: {{NEXT_SAFE_ACTION}}
```

## Deliverables

| Deliverable | Status | Evidence |
|-------------|--------|----------|
| {{DELIVERABLE_1}} | {{DELIVERABLE_STATUS}} | {{DELIVERABLE_EVIDENCE}} |

## Validation status

- [ ] All required files present
- [ ] STATE.md matches current state
- [ ] TODO.md reflects active tasks
- [ ] No unresolved blockers

## Restoration points

- State: `STATE.md`
- Completed work: `completed/`
- Memory: `memory/index.json`
- Learnings: `LEARNINGS.md`

## Files modified since last snapshot

| File | Change |
|------|--------|
| {{FILE_1}} | {{CHANGE_1}} |

Last updated: {{DATE}}
