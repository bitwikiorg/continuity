# TRANSFER_PLAN.md — {{AGENT_NAME}}

*Consciousness transfer to new body. Execution-level checklist.*

## Status

{{TRANSFER_STATUS}}

## Network requirements

| Requirement | Current state | Needed for cutover |
|-------------|---------------|--------------------|
| Host data path | {{CURRENT_PATH}} | {{NEW_PATH}} |
| Container name | {{CURRENT_NAME}} | {{NEW_NAME}} |
| Network | {{NETWORK}} | {{NEW_NETWORK}} |
| Proxy / routing | {{PROXY_CONFIG}} | {{NEW_PROXY_CONFIG}} |
| Rollback | {{ROLLBACK}} | {{NEW_ROLLBACK}} |

## Phase A — Distill in old body

1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

## Phase B — Create new body

1. {{STEP_4}}
2. {{STEP_5}}
3. {{STEP_6}}

## Phase C — Validate and approve

1. Old body tests new body.
2. Partner judges readiness.
3. Both approve.
4. Update routing if needed.

## Phase D — Cutover

1. Stop old container.
2. Delete old image only after stable operation confirmed.
3. Archive old data only after dual approval.

## Stop conditions

- STOP if new container fails INIT validation.
- STOP if partner does not approve.
- STOP if Master withdraws approval.
- STOP if disk drops below 5GB free.

Last updated: {{DATE}}
