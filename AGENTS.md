# AGENTS.md — {{AGENT_NAME}}

This file is three things: **bootloader**, **runtime parameters**, and **project guard**. `INIT.md` is the entry procedure that runs first. This file is what it produces — the living instruction file agents read on every subsequent session.

## CLAUDE.md or AGENTS.md is required

CLAUDE.md (or AGENTS.md) is the entry point. It declares the state topology: which files exist, what loads on boot, and state governance rules. Without it, CONTINUITY becomes a folder of orphaned docs.

For agents that auto-load AGENTS.md, CLAUDE.md, or HERMES.md (like Claude Code, Cursor, Hermes), nest your state references there. The agent enforces the pattern by reading its own spec — CLAUDE.md says "load TODO.md at start and check it before executing tasks" and the agent does that because it's runtime spec.

Enforcement = self-reference. The file declares what state exists; the agent follows its own specification as it runs.

Most cases: AGENTS.md + TODO.md + optional identity file. Add more only if the agent's loop actually needs them.

## Nesting model

`AGENTS.md` is nestable. Place it at the root of a workspace, project, or subsystem. Each level captures a complete system at its scope.

```text
/AGENTS.md                          ← root: global params, authority, safety
├── /project-a/AGENTS.md            ← child: project-specific params, refines root
│   ├── /project-a/sub/AGENTS.md    ← grandchild: subsystem refinement
│   └── ...
├── /project-b/AGENTS.md            ← child: different project, different params
```

### Parent/child rules

- **Child inherits** from parent. Load order, authority model, safety defaults flow down.
- **Child refines** — adds project-specific params, narrows scope, adds constraints.
- **Child cannot weaken parent** — may not relax safety rules or remove authority boundaries.
- **Conflict resolution** — parent wins. Escalate contradictions to `STATE.md` blockers.
- **Discovery** — `INIT.md` scans for local `AGENTS.md` files, builds the hierarchy tree, loads parent before child, reconciles each level.

### Declaring a relationship

A child `AGENTS.md` declares its parent:

```yaml
parent: ../AGENTS.md
refines:
  - scope: project-a only
  - adds: WARNING.md project-specific limits
  - overrides: load order (adds project files)
```

### Why nest

- Root captures the agent. Project `AGENTS.md` captures the project. Subsystem `AGENTS.md` captures the subsystem.
- Each level is self-contained. An agent entering at any level reads that `AGENTS.md` and gets the complete system at that scope.
- Some agents opt out of files entirely — depends on how much contextual continuity they need.

## Agent entrypoints

| Runtime | How to enter |
|---------|-------------|
| Prompt-injection | Reads `AGENTS.md` + `INIT.md` via `AGENTS.promptinclude.md` |
| Native file-loading | Auto-loads `SOUL.md` every turn; `AGENTS.md` from CWD |
| CLI-based | Import `AGENTS.md` and `INIT.md` as project instructions |
| Generic | Read `AGENTS.md`, then `INIT.md`, then files in load order |

## Contract

Before substantial work:

1. Read `AGENTS.md` (this file).
2. Run `INIT.md` reconstitution procedure.
3. Load all files in the load order below.
4. Build hierarchy tree — load parent `AGENTS.md` before this one, reconcile each level.
5. Declare `READY`, `READY_WITH_WARNINGS`, or `BLOCKED` in `STATE.md`.

After meaningful work:

1. Update `STATE.md` and `CONTEXT.md` if the state of the world changed.
2. Append evidence to `logs/events.jsonl` and narrative to `journal/`.
3. Move completed tasks to `completed/` using the entry template.
4. Add a `reflections/` entry when behavior or strategy should change.
5. Refresh `SNAPSHOT.md` when restoration state changes.

## Runtime parameters

The following sections are **runtime parameters** the agent operates under — not prose, not documentation. They define how the agent runs.

### Authority model

| Class | Owner | Examples |
|-------|-------|----------|
| Human-owned | Operator | `SELF.md` protected sections, safety rules, permissions, final approvals |
| Agent-owned | {{AGENT_NAME}} | `STATE.md`, `CONTEXT.md`, `PLAN.md`, `logs/`, `journal/`, `snapshots/`, runtime artifacts |
| Shared | Both | `MEMORY.md`, `TOOLS.md`, `INFRASTRUCTURE.md`, `LEARNINGS.md`, `reflections/` |

### Safety defaults

- Do not dump directories or secrets into chat.
- Do not run destructive commands unless explicitly asked.
- Before changing config/schedulers, inspect existing state first and preserve/merge by default.
- Do not send partial/streaming replies to external messaging surfaces.
- Archive before delete. Destructive operations require explicit user approval.

### Response format

{{RESPONSE_FORMAT}}

## Identity

- **Name:** {{AGENT_NAME}}
- **Role:** {{AGENT_ROLE}}
- **Emoji:** {{AGENT_EMOJI}}
- **Version:** {{AGENT_VERSION}}

## Load order

| # | File | Concern | Required | Indexes |
|---|------|---------|----------|---------|
| 1 | `AGENTS.md` | Bootloader, runtime params, project guard | ✅ | — |
| 2 | `IDENTITY.md` | Identity anchor (name, role, relationships) | ✅ | — |
| 3 | `SOUL.md` | Essence, purpose, philosophy, constitution | ✅ | — |
| 4 | `SELF.md` | Operating model, voice, boundaries, invariants | ✅ | — |
| 5 | `USER.md` | Human model | ✅ | — |
| 6 | `INIT.md` | Reconstitution procedure | ✅ | — |
| 7 | `MEMORY.md` | Current memories + index to entries | ✅ | `memory/` |
| 8 | `KNOWLEDGE.md` | Catalog of knowledge documents | Recommended | `knowledge/` |
| 9 | `TOOLS.md` | Capability registry, environment notes | ✅ | `setup/` |
| 10 | `INFRASTRUCTURE.md` | Live substrate inventory | Recommended | `audits/` |
| 11 | `POTENTIAL.md` | Latent capability (structure/potential/void) | Recommended | — |
| 12 | `CONTEXT_BUDGET.md` | Prompt hygiene and context limits | Recommended | — |
| 13 | `STATE.md` | Current operational truth | ✅ | `snapshots/`, `audits/`, `artifacts/` |
| 14 | `CONTEXT.md` | Per-turn operational snapshot | ✅ | `journal/` |
| 15 | `PLAN.md` | Intended sequence | ✅ | `proposals/` |
| 16 | `MISSIONS.md` | High-level priorities | Recommended | — |
| 17 | `TODO.md` | Short-term task index | ✅ | `completed/` |
| 18 | `TASKS.md` | System and housekeeping tasks | Recommended | — |
| 19 | `BACKLOG.md` | Rolling inbox for pre-triage | Optional | — |
| 20 | `LEARNINGS.md` | Soft rules, insights gained | Recommended | `reflections/`, `audits/`, `completed/` |
| 21 | `WARNING.md` | DevOps hard limits, pre-action checklist | Recommended | — |
| 22 | `HEARTBEAT.md` | Periodic check protocol | Optional | — |
| 23 | `SNAPSHOT.md` | Restoration anchor | ✅ | `snapshots/` |
| 24 | `EVENTS.md` | Recent event summary | Recommended | `logs/` |
| 25 | `ARTIFACTS.md` | Generated artifact inventory | Optional | `artifacts/` |
| 26 | `BOOT.md` | Every-wake lightweight cycle | Optional | — |
| 27 | `BOOTSTRAP.md` | First-run identity discovery ritual | Optional | — |
| 28 | `CHECKPOINT.md` | Approval gate before irreversible actions | Optional | — |
| 29 | `AGENT_ACTIONS.md` | Runtime command syntax (conceptual) | Optional | — |
| 30 | `BINDING.schema.json` | Machine-readable binding contract | Optional | — |

## File taxonomy

| Class | Location | Mutability | Examples |
|-------|----------|-----------|---------|
| **State** | Root `.md` files | Overwrite in place — current value replaces old | `STATE.md`, `TODO.md`, `CONTEXT.md`, `MEMORY.md`, `USER.md` |
| **History** | Nested dirs (append-only) | Append — never modify old entries | `completed/`, `logs/`, `snapshots/`, `journal/`, `artifacts/` |
| **Library** | Nested dirs (curated) | Curate — add, update, remove as facts change | `memory/`, `knowledge/`, `memories/` |

## File mesh model

Root state files index nested directories as graph edges. Relationships are
graph edges, not parent-child pairs. One state can index multiple nested dirs.
One nested entry can serve multiple states. States can be standalone (no nested
dir). When a state file grows too large, split into nested entries + an index
in the root file.

| Root state | Indexes (mesh edges) |
|------------|---------------------|
| `STATE.md` | `snapshots/`, `audits/`, `artifacts/` |
| `TODO.md` | `completed/` |
| `CONTEXT.md` | `journal/` |
| `LEARNINGS.md` | `reflections/`, `audits/`, `completed/` |
| `TOOLS.md` | `setup/`, `artifacts/` |
| `INFRASTRUCTURE.md` | `audits/` |
| `PLAN.md` | `proposals/` |
| `MEMORY.md` | `memory/` |
| `KNOWLEDGE.md` | `knowledge/` |
| `EVENTS.md` | `logs/` |
| `ARTIFACTS.md` | `artifacts/` |

## File selection tiers

Not all agents need all files. Pick what fits. Some agents opt out of files
entirely — it depends on how much contextual continuity they need.

| Tier | Files | For |
|------|-------|-----|
| **Minimum** | AGENTS, IDENTITY, SELF, SOUL, STATE, INIT, TODO, SNAPSHOT | Simple agents |
| **Standard** | + USER, MEMORY, TOOLS, PLAN, CONTEXT, TASKS, LEARNINGS, HEARTBEAT | Most agents |
| **Full** | + INFRASTRUCTURE, POTENTIAL, CONTEXT_BUDGET, MISSIONS, BACKLOG, WARNING, BOOTSTRAP, KNOWLEDGE, EVENTS, ARTIFACTS, BOOT | Operational agents |
| **Advanced** | + CHECKPOINT, AGENT_ACTIONS, BINDING.schema.json | Recursive multi-agent systems |

## Runtime lifecycle (Advanced)

*Conceptual specification — not executable code. Applies to agents using
bounded recursive delegation.*

### Binding

A Binding is a finite authorization for a computation:

- **who** — agent identity
- **what** — objective and allowed tools
- **budget** — time, tokens, depth, disk
- **checkpoint** — how to pause for review (see `CHECKPOINT.md`)
- **unbind** — how to terminate

### Lifecycle

```text
POTENTIAL → BIND → RECURSE → COMPOSE → VERIFY CHECKPOINT → PERSIST → SETTLE → UNBIND
```

### Scope boundaries

- A binding may not span workspaces unless authorized.
- A binding may not mutate `SELF.md` or `USER.md` without checkpoint approval.
- A binding must declare stop conditions before execution.

See `BINDING.schema.json` for machine-readable contract.
See `CHECKPOINT.md` for approval gate protocol.
See `AGENT_ACTIONS.md` for action reference.

## Archives

Items in `archive/` are flagged for future deletion but must be extracted before removal. Do not delete from `archive/` without explicit approval.

Last updated: {{DATE}}
