# DSL.md — {{AGENT_NAME}}

*Human-readable runtime command syntax for binding lifecycle.*

## Commands

| Command | Meaning | Syntax |
|---------|---------|--------|
| bind | Create a binding | `bind <objective> --tools <list> --budget <time,tokens,depth>` |
| recurse | Run one cycle | `recurse` |
| compose | Integrate outputs | `compose` |
| verify | Check H gate | `verify` |
| witness | Collect evidence | `witness` |
| persist | Save state | `persist --to <path>` |
| settle | Reconcile memory | `settle` |
| unbind | Close binding | `unbind --reason <text>` |

## Example session

```text
bind "Research X and return cited findings" --tools search,code_execution --budget 1800s,80k,1
recurse
compose
verify
witness
persist --to memory/semantic/research-X.md
settle
unbind --reason task_complete
```

Last updated: {{DATE}}
