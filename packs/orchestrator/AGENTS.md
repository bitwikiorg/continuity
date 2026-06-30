# {{PROJECT_NAME}} — Orchestrator

> Orchestrator pack. Multi-agent coordination.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance, agent registry
2. TASKS.md — shared task queue
3. PLAN.md — execution plan
4. EVENTS.md — event log (append-only)
5. SNAPSHOT.md — last known good state
6. BINDING.schema.json — agent contract schema

## Governance
- Read TASKS.md before assigning work.
- Agents claim tasks; no silent overlap.
- After task completion: update TASKS.md, append to EVENTS.md.
- Validate agent bindings against BINDING.schema.json before spawn.
- Never spawn an agent without a binding. Unbound agents are untracked agents.
- Workers may not spawn subordinates. Team leaders may spawn workers only (max_depth=1).
- Every agent has a budget. No infinite recursion. No unbounded token spend.
- After all tasks complete: update SNAPSHOT.md, write summary to EVENTS.md.

## Agent registry
| Agent name | Type | Role | Pack | Max depth | Max subordinates |
|------------|------|------|------|-----------|------------------|
| {{AGENT_1}} | worker | {{ROLE_1}} | {{PACK_1}} | 0 | 0 |
| {{AGENT_2}} | worker | {{ROLE_2}} | {{PACK_2}} | 0 | 0 |
| {{AGENT_3}} | team-leader | {{ROLE_3}} | {{PACK_3}} | 1 | 3 |

Example:
| Agent name | Type | Role | Pack | Max depth | Max subordinates |
|------------|------|------|------|-----------|------------------|
| backend-worker | worker | API development | backend | 0 | 0 |
| frontend-worker | worker | UI development | frontend | 0 | 0 |
| research-worker | worker | Information gathering | researcher | 0 | 0 |
| dev-lead | team-leader | Code coordination | developer | 1 | 3 |

## Hierarchy enforcement
- **Workers:** `call_subordinate: denied`, `max_depth: 0`, `max_subordinates: 0`. Sterile. Zero subordinate access.
- **Team Leaders:** `call_subordinate: scoped`, `max_depth: 1`, explicit `max_subordinates`, `allowed_tools`, `stop_conditions`.
- No subordinate has higher privileges than parent.
- Binding constraints override agent identity at runtime.

Last updated: {{DATE}}
