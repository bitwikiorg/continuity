# Design Rationale

*Research and decisions behind the continuity templates system.*

## Conceptual stack

```text
Loops (units of intelligence)
  ↕ instantiated by
Continuity files (state files with interconnected schema)
  ↕ expanded by (internal, not in this repo)
Genome (rules for structuring schemas in files)
```

**Loops** are the units of intelligence. A loop is a task with a check —
observe, act, verify, decide next step. State files are how loops are
instantiated: they provide identity, authority, context, verification criteria,
and stopping conditions.

**Continuity files** are state files with an interconnected schema: load order,
inter-file references, authority hierarchy, auto-injection. This repo contains
continuity file templates. That's where we stop.

**Genome** is an internal layer that expands continuity by forcing rules around
how schemas in files are structured. It defines delimiter-structured formats for
organizing model cognition. `GENOME.md` is included as optional sub-agent
instructions, but the full genome layer is not part of this repo.

## Frameworks studied

| Framework | What we borrowed |
|-----------|-----------------|
| OpenClaw | BOOT/BOOTSTRAP distinction, self-destructing bootstrap, creature/vibe identity, environment notes vs capability list, evolution disclosure, pronouns, minimalist opt-in heartbeat |
| Hermes | Progressive subdirectory discovery, security scanning (injection, deception, exfiltration patterns), size limits |
| Claude Code | Project-level instruction files, auto memory, skills, hooks |
| agents.md | Open standard, proximity precedence, 60k+ projects |
| init.md (bitwikiorg) | 6-stage init protocol, modes, YAML frontmatter, conditional outputs |
| Forward Future loopy | Loops as units of intelligence, trigger/verify/stop structure, restartable handoff |
| Agent Zero | Plugin/skill architecture, agents.json profiles, MCP/A2A connectivity, memory namespaces, project isolation |

## Key design decisions

### 1. Three identity surfaces

- **SOUL.md** — essence, purpose, philosophy, constitution. Rarely changes. Evolution disclosure required.
- **SELF.md** — operating model, voice, 12 hard invariants. Human-owned.
- **IDENTITY.md** — instance identity, relationships, rebinding policy. Immutable at runtime.

### 2. BOOT vs BOOTSTRAP

- **BOOT.md** — every-startup instructions. Minimal, read every cycle.
- **BOOTSTRAP.md** — first-run identity discovery. Self-destructing. Conversational, not programmatic.

### 3. State mesh + per-turn context

- **STATE.md** — mesh index linking to project nodes. Relatively stable.
- **CONTEXT.md** — per-turn operational snapshot. Highly mutable.

### 4. Structure / Potential / Void

Three-state capability model: what's bound (structure), what's available but
idle (potential), what requires approval (void).

### 5. Context budget as first-class

Prompt context is finite. `CONTEXT_BUDGET.md` defines auto-load budget, taint
classes, exclusions, and log retention.

### 6. Completed work journal

`completed/` directory with entry template prevents TODO.md bloat. Done items
move to journal with evidence and learnings.

### 7. LEARNINGS.md

Soft rules and insights between MEMORY.md (durable facts) and TODO.md (tasks).
Patterns learned that should not be repeated.

### 8. WARNING.md

DevOps hard limits and pre-action checklist. Read before any infrastructure or
external action.

### 9. Runtime discipline (optional)

Binding lifecycle (POTENTIAL→BIND→RECURSE→COMPOSE→VERIFY H→WITNESS→PERSIST→
SETTLE→UNBIND) with machine-readable schema. Optional for simple agents.

### 10. Subordinate hierarchy as hard rule

Workers cannot spawn subordinates. Team Leaders have scoped limits.
Non-negotiable.

### 11. Multi-runtime entrypoints

AGENTS.md supports Agent Zero, Hermes, Claude Code, OpenClaw, and generic
runtimes. Auto-injection mechanism varies per runtime.

### 12. Validation table in INIT.md

Checkbox table for every required file. Copy-pasteable declaration template.

## Sources

Compiled from three agent branches:

- **Coraline** (Agent Zero) — directory scaffold, context budget, promptinclude, subordinate hierarchy, init script, 9-stage INIT
- **Hyperion** (Agent Zero) — runtime discipline (RUNTIME, H_GATE, WITNESS, DSL, BINDING.schema.json), examples, memory schema, multi-runtime entrypoints, 3-phase PLAN
- **GLM 5.2 / Lancelot** (Hermes) — LEARNINGS.md, WARNING.md, completed journal, 10 hard invariants, validation table, USAGE.md, LICENSE, structure/potential/void

## Future improvements

- Per-profile template variants (researcher, developer, DevOps)
- Automated placeholder check script
- CI hook to validate continuity file integrity
- JSON schema validation for BINDING.schema.json
- Loop library integration (Forward Future loopy patterns)

---

*Compiled 2026-06-27. Sources: 3 agent branches + 12 framework references.*
