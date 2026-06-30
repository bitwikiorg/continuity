# AGENT_ACTIONS.md — {{AGENT_NAME}}
**Conceptual specification — not executable code.**
*Human-readable runtime command syntax for binding lifecycle.*

## Commands

| Command | Meaning | Syntax |
|---------|---------|--------|
| bind | Create a binding | `bind <objective> --tools <list> --budget <time,tokens,depth>` |
| recurse | Run one cycle | `recurse` |
| compose | Integrate outputs | `compose` |
| verify | Check checkpoint | `verify` |
| evidence | Collect evidence | `evidence` |
| persist | Save state | `persist --to <path>` |
| settle | Reconcile memory | `settle` |
| unbind | Close binding | `unbind --reason <text>` |

## Example session

```text
bind "Research X and return cited findings" --tools search,code_execution --budget 1800s,80k,1
recurse
compose
verify
evidence
persist --to memory/semantic/research-X.md
settle
unbind --reason task_complete
```

Last updated: {{DATE}}
