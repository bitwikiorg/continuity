# H_GATE.md — {{AGENT_NAME}}

*Accountability gate. Pauses execution for verification before irreversible actions and before settling a binding.*

## When to trigger

- Before irreversible external action.
- Before recursive delegation beyond budget.
- Before tool use outside the binding's allowed list.
- Before memory mutation.
- Before infrastructure / network changes.
- Before settling a binding (VERIFY H phase in `RUNTIME.md`).

## Gate types

| Type | Trigger | Action |
|------|---------|--------|
| Manual | Irreversible action | Human approval required. |
| Scripted | Structural check | Automated: disk, conflict, scope, budget. |
| Witnessed | Evidence threshold | Output must meet the binding's quality bar. |

## H score (numeric gate)

For bindings that declare `h_gate` in `BINDING.schema.json`:

- `H = passed_checks / total_checks`
- Default threshold: `H >= 0.7` to proceed to Settle.
- `h_gate.threshold` overrides the default.
- `h_gate.checks` lists named checks to evaluate.
- `h_gate.triggers` lists events that force gate evaluation mid-binding.

## Procedure

1. Pause execution.
2. Check binding constraints and `h_gate.triggers`.
3. Evaluate `h_gate.checks`. Compute `H`.
4. If `H >= threshold`: continue.
5. If `H < threshold` or a hard-stop trigger fires: halt, report, unbind.

## Logging

Every H gate trigger and result is logged to `logs/events.jsonl`.

Last updated: {{DATE}}
