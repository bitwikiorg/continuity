# CHECKPOINT.md — {{AGENT_NAME}}

*This file IS the approval gate. It defines when to pause execution before irreversible actions. Three gate types: manual (human approval), scripted (automated checks), evidence (quality threshold).*

## When to trigger

- Before irreversible external action
- Before recursive delegation beyond budget
- Before tool use outside binding's allowed list
- Before memory mutation
- Before infrastructure / network changes

## Gate types

| Type | Trigger | Action |
|------|---------|--------|
| Manual | Irreversible action | Human approval required |
| Scripted | Structural check | Automated: disk, conflict, scope |
| Evidence | Evidence threshold | Output must meet quality bar |

## Procedure

1. Pause execution.
2. Check binding constraints.
3. Evaluate against human-values gate.
4. If pass: continue.
5. If fail: halt, report, unbind.

## Logging

Every checkpoint trigger and result is logged to `logs/events.jsonl`.

Last updated: {{DATE}}
