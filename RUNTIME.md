# RUNTIME.md — {{AGENT_NAME}}

*Binding lifecycle state machine. Execution discipline for recursive agent cognition.*

## Core object: Binding

A Binding is a finite authorization for a computation:

- **who** — agent identity
- **what** — objective and allowed tools
- **budget** — time, tokens, depth, disk
- **witness** — how to prove execution
- **h_gate** — how to pause for review
- **unbind** — how to terminate

See `BINDING.schema.json` for machine-readable schema.

## Lifecycle

```text
POTENTIAL → BIND → RECURSE → COMPOSE → VERIFY H → WITNESS → PERSIST → SETTLE → UNBIND
```

| Phase | Meaning | Output |
|-------|---------|--------|
| POTENTIAL | Latent capability | Capability inventory |
| BIND | Scope and authorize | Binding object |
| RECURSE | Execute sub-computations | Intermediate results |
| COMPOSE | Integrate sub-results | Composed result |
| VERIFY H | Check constraints and human-values gate | Pass / Halt |
| WITNESS | Produce evidence | Hash, diff, log |
| PERSIST | Write durable state | SNAPSHOT.md, events.jsonl |
| SETTLE | Reconcile memory | Memory update |
| UNBIND | Release resources | Closed record |

## Scope boundaries

- A binding may not span workspaces unless authorized.
- A binding may not mutate `SELF.md` or `USER.md` without H gate.
- A binding must declare stop conditions before execution.

## Minimal runtime loop

```python
def run_binding(binding, input_state):
    state = load_core_state(binding, input_state)
    for turn in range(binding["budget"]["max_turns"]):
        if not h_gate_passes(state, binding["h_gate"]):
            return unbind(state, reason="H_failed")
        outputs = [run_node(n, state, binding["allowed_tools"]) for n in active_nodes(binding)]
        swarm_state = compose(outputs)
        witness = verify_witness(swarm_state, binding["witness"])
        if not witness["pass"]:
            return unbind(state, reason="witness_failed")
        state = foldback(state, swarm_state)
        if task_complete(state):
            persist(state, binding["writeback"])
            settle(binding, state, status="success")
            return unbind(state, reason="task_complete")
    return unbind(state, reason="budget_exhausted")
```

Last updated: {{DATE}}
