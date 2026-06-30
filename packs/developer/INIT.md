# INIT — {{PROJECT_NAME}}

## Boot
1. Read AGENTS.md
2. Read STATE.md — is the environment still as described? Has the branch changed?
3. Read TODO.md — what is the next valid action?
4. Read SNAPSHOT.md — has anything drifted since last session?
5. If high-risk work is pending, read CHECKPOINT.md
6. Run the test suite once to confirm the environment is clean: `{{TEST_COMMAND}}`
7. Declare READY / READY_WITH_WARNINGS / BLOCKED

## Declaration criteria
| Status | Condition |
|--------|-----------|
| `READY` | Environment matches STATE.md, tests pass, no blockers |
| `READY_WITH_WARNINGS` | Minor drift (branch changed, one test failing, stale snapshot) but work can proceed |
| `BLOCKED` | Environment broken, tests failing, missing dependencies, or STATE.md contradicts reality |

## Post-work
1. Update STATE.md with new reality (branch, environment, what is true now)
2. Update TODO.md — move done items to completed/
3. Refresh SNAPSHOT.md
4. Commit

## Drift detection
If STATE.md says one thing but the environment shows another:
- Do not silently overwrite STATE.md.
- Investigate the cause. Did someone else work on this? Did a deploy change something?
- Record the drift in STATE.md under a `## Drift` section before correcting.
- If drift is severe (wrong branch, missing files), declare BLOCKED and investigate.

Last updated: {{DATE}}
