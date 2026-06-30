# TASKS — {{PROJECT_NAME}}

## Active
| ID | Task | Agent | Status | Evidence | Phase |
|----|------|-------|--------|----------|-------|
| T1 | {{TASK_1}} | {{AGENT_1}} | {{STATUS_1}} | {{EVIDENCE_1}} | {{PHASE_1}} |
| T2 | {{TASK_2}} | {{AGENT_2}} | {{STATUS_2}} | {{EVIDENCE_2}} | {{PHASE_2}} |

Example:
| ID | Task | Agent | Status | Evidence | Phase |
|----|------|-------|--------|----------|-------|
| T1 | Add /auth/register and /auth/login endpoints | backend-worker | completed | 8 tests pass, PR #42 | Phase 1 |
| T2 | Build login and registration forms | frontend-worker | completed | Visual review, 5 tests pass | Phase 2 |
| T3 | Security review of auth implementation | judge-worker | in-progress | Reviewing claims C1–C3 | Phase 3 |
| T4 | Deploy to staging and run integration tests | (unassigned) | pending | — | Phase 4 |

## Unassigned
- {{UNASSIGNED_TASK}}

Example:
- T4: Deploy to staging and run integration tests (waiting on T3 completion)
- T5: Deploy to production (waiting on T4 + security approval)

## Task states
| State | Meaning |
|-------|---------|
| `pending` | Not yet assigned or prerequisites not met |
| `assigned` | Assigned to an agent but not started |
| `in-progress` | Agent is actively working on it |
| `completed` | Agent finished successfully with evidence |
| `failed` | Agent could not complete the task |
| `blocked` | Agent hit a blocker requiring intervention |

## Rules
- Agents claim tasks by moving status from `pending`/`assigned` to `in-progress`.
- No silent overlap. If two agents want the same task, the orchestrator decides.
- Completed tasks must have evidence (test results, PR link, review output).
- Failed tasks must have a failure reason recorded.
- Blocked tasks must have the blocker documented.

Last updated: {{DATE}}
