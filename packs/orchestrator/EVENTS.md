# EVENTS — {{PROJECT_NAME}}

## Event log (append-only)
| Timestamp | Event | Agent | Detail |
|-----------|-------|-------|--------|
| {{TS_1}} | {{EVENT_1}} | {{AGENT_1}} | {{DETAIL_1}} |
| {{TS_2}} | {{EVENT_2}} | {{AGENT_2}} | {{DETAIL_2}} |

Example:
| Timestamp | Event | Agent | Detail |
|-----------|-------|-------|--------|
| 2026-06-29T18:00Z | binding-created | orchestrator | Spawned backend-worker for task T1 |
| 2026-06-29T18:15Z | task-started | backend-worker | Claimed task T1: Add /api/v1/users endpoint |
| 2026-06-29T18:45Z | task-completed | backend-worker | T1 complete: endpoint added, 8 tests passing |
| 2026-06-29T18:46Z | binding-closed | orchestrator | backend-worker unbound, resources released |
| 2026-06-29T19:00Z | binding-created | orchestrator | Spawned frontend-worker for task T2 |

## Event types
| Event | Meaning |
|-------|---------|
| `binding-created` | Agent spawned with a binding contract |
| `binding-closed` | Agent finished, binding released |
| `task-assigned` | Task assigned to an agent |
| `task-started` | Agent began working on a task |
| `task-completed` | Agent finished a task successfully |
| `task-failed` | Agent failed to complete a task |
| `task-blocked` | Agent hit a blocker, needs intervention |
| `checkpoint-requested` | Agent requests human approval |
| `snapshot-saved` | Orchestrator saved a state snapshot |

## Rules
- **Append only.** Never modify past entries.
- Include timestamp (ISO 8601 UTC), agent name, and enough detail to reconstruct what happened.
- If an event is corrected, add a new row with `event-corrected` type referencing the original.

<!-- Append new events. Never modify past entries. -->

Last updated: {{DATE}}
