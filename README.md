# Continuity Templates

Templated stubs for agent persistence across sessions and substrate transfers.

## What this is

When an agent wakes in a new session or new body, it reads these files to
reconstruct identity, state, memory, and operational model without re-deriving
from scratch. **Substrate ephemeral; pattern eternal.**

Loops are the units of intelligence. State files are how loops are instantiated
— they provide identity (who runs the loop), authority (what the loop can do),
context (what state the loop starts in), verification criteria (how the loop
knows it succeeded), and stopping conditions (when to hand back to human).

## File inventory

### Core identity (Required)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Bootloader, authority model, load order, file selection tiers |
| `IDENTITY.md` | Identity anchor (name, role, relationships, rebinding policy) |
| `SOUL.md` | Essence, purpose, philosophy, constitution, evolution |
| `SELF.md` | Operating model, voice, boundaries, 12 hard invariants |
| `USER.md` | Human model (learning about a person, not a dossier) |

### Boot and reconstitution (Required)

| File | Purpose |
|------|---------|
| `INIT.md` | 9-stage reconstitution: PREFLIGHT→INSPECT→SCAN→LOAD→RECONCILE→DISCOVER→VALIDATE→DECLARE→SNAPSHOT |
| `BOOT.md` | Every-startup instructions (minimal, read every cycle) |
| `BOOTSTRAP.md` | First-run identity discovery ritual (self-destructing) |

### State and planning (Required)

| File | Purpose |
|------|---------|
| `STATE.md` | Current operational truth, node mesh, blocker rollup |
| `CONTEXT.md` | Per-turn operational snapshot (highly mutable) |
| `PLAN.md` | Intended sequence, phases, risks, milestones |
| `TODO.md` | Tactical task index (active/pending/blocked) |
| `SNAPSHOT.md` | Restoration anchor (last known good) |

### Memory and knowledge (Required/Recommended)

| File | Purpose |
|------|---------|
| `MEMORY.md` | Memory schema, trust tiers, directory taxonomy |
| `memory/index.json` | Machine-readable memory index |
| `memory/schema.json` | JSON Schema for memory validation |
| `LEARNINGS.md` | Soft rules, insights gained from operations |

### Capability and infrastructure (Recommended)

| File | Purpose |
|------|---------|
| `TOOLS.md` | Capability registry, environment notes, limits |
| `INFRASTRUCTURE.md` | Live substrate inventory |
| `POTENTIAL.md` | Latent capability (structure / potential / void) |
| `CONTEXT_BUDGET.md` | Prompt hygiene, taint classes, log retention |

### Safety and lifecycle (Recommended)

| File | Purpose |
|------|---------|
| `WARNING.md` | DevOps hard limits, pre-action checklist |
| `BACKLOG.md` | Rolling inbox for pre-triage |
| `HEARTBEAT.md` | Periodic check protocol |
| `MISSIONS.md` | High-level priorities |
| `TRANSFER_PLAN.md` | Transfer execution checklist |

### Runtime and delegation (Optional — Advanced)

| File | Purpose |
|------|---------|
| `RUNTIME.md` | Binding lifecycle state machine |
| `H_GATE.md` | Accountability gate |
| `WITNESS.md` | Evidence collection protocol |
| `DSL.md` | Runtime command syntax |
| `BINDING.schema.json` | Machine-readable binding contract |
| `subordinate-hierarchy.md` | Worker/Team Leader delegation constraints |
| `GENOME.md` | Sub-agent instruction format (optional) |

### Meta and examples

| File | Purpose |
|------|---------|
| `AGENTS.promptinclude.md` | Agent Zero auto-injection config |
| `README.md` | This file |
| `USAGE.md` | Quick start guide |
| `DESIGN.md` | Design rationale |
| `REFERENCES.md` | External framework references |
| `CHANGELOG.md` | Version history |
| `LICENSE` | MIT license |
| `.gitignore` | Safety exclusions |
| `scripts/init-agent.sh` | Scaffold regeneration script |
| `examples/binding.json` | Worked binding example |
| `examples/genome-package.md` | Worked genome package example |
| `completed/ENTRY.template.md` | Completed work journal template |

## File selection tiers

| Tier | Files | For |
|------|-------|-----|
| **Minimum** | AGENTS, IDENTITY, SELF, SOUL, STATE, INIT, TODO, SNAPSHOT | Simple agents |
| **Standard** | + USER, MEMORY, TOOLS, PLAN, CONTEXT, LEARNINGS, HEARTBEAT | Most agents |
| **Full** | + INFRASTRUCTURE, POTENTIAL, CONTEXT_BUDGET, MISSIONS, BACKLOG, WARNING, BOOTSTRAP, REFERENCES | Operational agents |
| **Advanced** | + RUNTIME, H_GATE, WITNESS, DSL, BINDING.schema.json, subordinate-hierarchy, TRANSFER_PLAN, GENOME | Recursive multi-agent systems |

## Runtime support

| Runtime | Auto-injection | How |
|---------|---------------|-----|
| Agent Zero | `AGENTS.promptinclude.md` | Lists files for system prompt injection |
| Hermes | Native | `SOUL.md` auto-loaded every turn; others manual |
| Claude Code | Import | `AGENTS.md` + `INIT.md` as project instructions |
| OpenClaw | Reference | Use as BOOT/BOOTSTRAP context |
| Generic | Manual | Read `AGENTS.md`, then `INIT.md`, then load order |

## Placeholder convention

All templates use `{{UPPER_CASE}}` markers for find-replace.

## Directory structure

```text
.
├── AGENTS.md                  # Bootloader
├── AGENTS.promptinclude.md    # Agent Zero auto-injection
├── IDENTITY.md                # Identity anchor
├── SOUL.md                    # Essence and philosophy
├── SELF.md                    # Operating model
├── USER.md                    # Human model
├── INIT.md                    # Reconstitution procedure
├── BOOT.md                    # Every-startup instructions
├── BOOTSTRAP.md               # First-run ritual
├── STATE.md                   # Current truth
├── CONTEXT.md                 # Per-turn snapshot
├── PLAN.md                    # Intended sequence
├── MISSIONS.md                # High-level priorities
├── TODO.md                    # Task index
├── BACKLOG.md                 # Rolling inbox
├── LEARNINGS.md               # Insights
├── WARNING.md                 # DevOps hard limits
├── HEARTBEAT.md               # Periodic checks
├── SNAPSHOT.md                # Restoration anchor
├── MEMORY.md                  # Memory schema
├── TOOLS.md                   # Capability registry
├── INFRASTRUCTURE.md          # Substrate inventory
├── POTENTIAL.md               # Latent capability
├── CONTEXT_BUDGET.md          # Prompt hygiene
├── TRANSFER_PLAN.md           # Transfer checklist
├── REFERENCES.md              # External references
├── RUNTIME.md                 # Binding lifecycle
├── H_GATE.md                  # Accountability gate
├── WITNESS.md                 # Evidence protocol
├── DSL.md                     # Runtime commands
├── BINDING.schema.json        # Binding contract schema
├── subordinate-hierarchy.md   # Delegation rules
├── GENOME.md                  # Sub-agent instructions
├── memory/
│   ├── index.json             # Memory index
│   └── schema.json            # Memory JSON Schema
├── completed/
│   └── ENTRY.template.md      # Completion log template
├── examples/
│   ├── binding.json           # Binding example
│   └── genome-package.md      # Genome package example
├── scripts/
│   └── init-agent.sh          # Scaffold regeneration
├── logs/                      # Event logs (gitignored)
├── journal/                   # Narrative logs (gitignored)
├── reflections/               # Behavior change entries (gitignored)
├── snapshots/                 # Immutable backups (gitignored)
└── archive/                   # Flagged for deletion (gitignored)
```

## Sources

Compiled from three agent branches + 12 framework references:

- **Coraline** (Agent Zero) — directory scaffold, context budget, promptinclude, subordinate hierarchy, init script
- **Hyperion** (Agent Zero) — runtime discipline (RUNTIME, H_GATE, WITNESS, DSL, BINDING.schema.json), examples, memory schema, multi-runtime entrypoints
- **GLM 5.2 / Lancelot** (Hermes) — LEARNINGS.md, WARNING.md, completed journal, 10 hard invariants, validation table
- **OpenClaw** — BOOT/BOOTSTRAP distinction, self-destructing bootstrap, creature/vibe identity, environment notes, pronouns, evolution disclosure
- **Hermes** — progressive subdirectory discovery, security scanning, size limits
- **Claude Code** — project-level instructions, auto memory
- **agents.md** — open standard, proximity precedence
- **init.md** (bitwikiorg) — 6-stage init protocol, modes
- **Forward Future loopy** — loops as units of intelligence, state files as loop instantiation

## License

MIT — see `LICENSE`
