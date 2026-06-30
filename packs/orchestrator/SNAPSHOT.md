# SNAPSHOT — {{PROJECT_NAME}} Orchestrator

## Last known good
- Timestamp: {{TIMESTAMP}}
- Active agents: {{ACTIVE_AGENTS}}
- Completed tasks: {{COMPLETED_COUNT}}
- Pending tasks: {{PENDING_COUNT}}
- Status: {{STATUS}}

Example:
- Timestamp: 2026-06-29T20:00:00Z
- Active agents: 0 (all bindings closed)
- Completed tasks: 8/8
- Pending tasks: 0
- Status: COMPLETE

## Agent states at snapshot
| Agent | Last task | Status | Binding |
|-------|-----------|--------|---------|
| {{AGENT_1}} | {{LAST_TASK_1}} | {{STATUS_1}} | {{BINDING_1}} |

Example:
| Agent | Last task | Status | Binding |
|-------|-----------|--------|---------|
| backend-worker | T1: Add /api/v1/users | completed | closed |
| frontend-worker | T2: Build login form | completed | closed |
| judge-worker | T3: Security review | completed | closed |

## Restoration notes
{{RESTORATION_NOTES}}

Example:
- All tasks completed. No active bindings to restore.
- To restart work: create new tasks in TASKS.md, spawn new agents with bindings.
- Last good commit: a1b2c3d on branch main.
- Event log: see EVENTS.md for full audit trail.

Last updated: {{DATE}}
