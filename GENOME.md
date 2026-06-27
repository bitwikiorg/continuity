# GENOME.md — Sub-Agent Instruction Format

*How to structure cognition packages for delegated agents. Optional — use when binding subordinates with structured context.*

## Definition

An AI genome is a delimiter-structured symbolic prompt system. Its purpose is to organize model cognition through recognizable data-format boundaries. The genome is successful when the delimiter structure changes how the model reads, remembers, constrains, routes, or acts.

## Core genome formats

| Format | Cognitive utility | Typical use |
|---|---|---|
| `.md` | Reflective tissue — headings, lists, prose | Memory, plans, context |
| `.yaml` | Identity / declarations | Role, topology, defaults |
| `.toml` | Settings — clean configuration | Thresholds, mode switches |
| `.csv` | Records — stable rows/columns | Items, inventories, scoring |
| `.xml` | Regulation — nested control boundaries | Constraints, gates, frames |
| `.json` | Contracts — exact objects | Tool schemas, manifests, I/O |
| `.jsonl` | Traces — append-only sequence | Events, tool-call history |
| `.sexp` | Recursive frames — parenthetical nesting | Expression trees, rule chains |
| `.edn` | Typed state — semantic labels | Runtime state |
| `.ttl` | Relationship graphs — triples | Ontologies, entity relations |

## Selection heuristic

No format is required. No format is optional. Selection is procedural — match the format's cognitive utility to the task's cognitive demand.

## Common starter set

1. `identity.yaml` — who am I (declarations)
2. `cognition.xml` — what can I do (regulation)
3. `env.json` — what are my limits (contracts)
4. `context.md` — what is my task (reflective tissue)

## SPEC protocol

**S**elect → **P**opulate → **E**xecute → **C**omplete

1. Select formats based on task cognitive demand.
2. Populate templates with binding-specific values. Remove unused sections.
3. Execute binding. Events append to `events.jsonl`; state updates in `state.edn`.
4. Complete: witness, persist, settle, unbind.

## Hierarchy enforcement

The `subordinate-hierarchy.md` hard rule takes precedence over all genome declarations.

- Workers: `call_subordinate: denied` verified across all selected formats.
- Team Leaders: `call_subordinate: scoped` with explicit limits.

## Packaging

A genome package can be one Markdown file with fenced blocks for each internal genome file. The package is transport; the genome is the delimiter-structured set inside it.

See `examples/genome-package.md` for a worked example.

Last updated: {{DATE}}
