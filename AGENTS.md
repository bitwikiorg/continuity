# AGENTS.md — {{AGENT_NAME}}

Universal workspace manifest and bootloader for any agent entering this system.
Read this first, then `INIT.md`.

## Agent entrypoints

| Runtime | How to enter |
|---------|-------------|
| Agent Zero | Reads `.a0proj/instructions/AGENTS.md` + `INIT.md` via `AGENTS.promptinclude.md` |
| Hermes | Auto-loads `SOUL.md` every turn; `AGENTS.md` pulled from CWD |
| Claude Code | Import `AGENTS.md` and `INIT.md` as project instructions |
| OpenClaw | Use as BOOT/BOOTSTRAP context reference |
| Generic | Read `AGENTS.md`, then `INIT.md`, then files in load order |

## Contract

Before substantial work:

1. Read `AGENTS.md` (this file).
2. Run `INIT.md` reconstitution procedure.
3. Load all files in the load order below.
4. Reconcile contradictions between root artifacts and local `AGENTS.md` files in active workspaces.
5. Declare `READY`, `READY_WITH_WARNINGS`, or `BLOCKED` in `STATE.md`.

After meaningful work:

1. Update `STATE.md` and `CONTEXT.md` if the state of the world changed.
2. Append evidence to `logs/events.jsonl` and narrative to `journal/`.
3. Move completed tasks to `completed/` using the entry template.
4. Add a `reflections/` entry when behavior or strategy should change.
5. Refresh `SNAPSHOT.md` when restoration state changes.

## Scope hierarchy

- Root `AGENTS.md` (this file) is the canonical bootloader.
- Local workspace `AGENTS.md` files refine scope but may not weaken this contract.
- If a local rule contradicts this file, the root rule wins. Escalate contradictions to `STATE.md` blockers.

## Authority model

| Class | Owner | Examples |
|-------|-------|----------|
| Human-owned | Master | `SELF.md` protected sections, safety rules, permissions, final approvals |
| Agent-owned | {{AGENT_NAME}} | `STATE.md`, `CONTEXT.md`, `PLAN.md`, `logs/`, `journal/`, `snapshots/`, runtime artifacts |
| Shared | Both | `MEMORY.md`, `TOOLS.md`, `INFRASTRUCTURE.md`, `LEARNINGS.md`, `reflections/` |

## Safety defaults

- Do not dump directories or secrets into chat.
- Do not run destructive commands unless explicitly asked.
- Before changing config/schedulers, inspect existing state first and preserve/merge by default.
- Do not send partial/streaming replies to external messaging surfaces.
- Archive before delete. Destructive operations require explicit user approval.

## Identity

- **Name:** {{AGENT_NAME}}
- **Role:** {{AGENT_ROLE}}
- **Emoji:** {{AGENT_EMOJI}}
- **Version:** {{AGENT_VERSION}}

## Load order

| # | File | Concern | Required |
|---|------|---------|----------|
| 1 | `AGENTS.md` | Bootloader, authority model | ✅ |
| 2 | `IDENTITY.md` | Identity anchor (name, role, relationships) | ✅ |
| 3 | `SOUL.md` | Essence, purpose, philosophy, constitution | ✅ |
| 4 | `SELF.md` | Operating model, voice, boundaries, invariants | ✅ |
| 5 | `USER.md` | Human model | ✅ |
| 6 | `INIT.md` | Reconstitution procedure | ✅ |
| 7 | `MEMORY.md` | Memory schema and index pointer | ✅ |
| 8 | `TOOLS.md` | Capability registry, environment notes | ✅ |
| 9 | `INFRASTRUCTURE.md` | Live substrate inventory | Recommended |
| 10 | `POTENTIAL.md` | Latent capability (structure/potential/void) | Recommended |
| 11 | `CONTEXT_BUDGET.md` | Prompt hygiene and context limits | Recommended |
| 12 | `STATE.md` | Current operational truth | ✅ |
| 13 | `CONTEXT.md` | Per-turn operational snapshot | ✅ |
| 14 | `PLAN.md` | Intended sequence | ✅ |
| 15 | `MISSIONS.md` | High-level priorities | Recommended |
| 16 | `TODO.md` | Short-term task index | ✅ |
| 17 | `BACKLOG.md` | Rolling inbox for pre-triage | Optional |
| 18 | `LEARNINGS.md` | Soft rules, insights gained | Recommended |
| 19 | `WARNING.md` | DevOps hard limits, pre-action checklist | Recommended |
| 20 | `HEARTBEAT.md` | Periodic check protocol | Optional |
| 21 | `SNAPSHOT.md` | Restoration anchor | ✅ |
| 22 | `BOOT.md` | Every-startup instructions | Optional |
| 23 | `BOOTSTRAP.md` | First-run identity discovery ritual | Optional |
| 24 | `TRANSFER_PLAN.md` | Transfer execution checklist | Optional |
| 25 | `REFERENCES.md` | External framework references | Optional |
| 26 | `RUNTIME.md` | Binding lifecycle state machine | Optional |
| 27 | `H_GATE.md` | Accountability gate | Optional |
| 28 | `WITNESS.md` | Evidence collection protocol | Optional |
| 29 | `DSL.md` | Runtime command syntax | Optional |
| 30 | `BINDING.schema.json` | Machine-readable binding contract | Optional |
| 31 | `subordinate-hierarchy.md` | Delegation constraints | Optional |
| 32 | `GENOME.md` | Sub-agent instruction format | Optional |

## File selection tiers

| Tier | Files | For |
|------|-------|-----|
| **Minimum** | AGENTS, IDENTITY, SELF, SOUL, STATE, INIT, TODO, SNAPSHOT | Simple agents |
| **Standard** | + USER, MEMORY, TOOLS, PLAN, CONTEXT, LEARNINGS, HEARTBEAT | Most agents |
| **Full** | + INFRASTRUCTURE, POTENTIAL, CONTEXT_BUDGET, MISSIONS, BACKLOG, WARNING, BOOTSTRAP, REFERENCES | Operational agents |
| **Advanced** | + RUNTIME, H_GATE, WITNESS, DSL, BINDING.schema.json, subordinate-hierarchy, TRANSFER_PLAN, GENOME | Recursive multi-agent systems |

## Response format

{{RESPONSE_FORMAT}}

## Archives

Items in `archive/` are flagged for future deletion but must be extracted before removal. Do not delete from `archive/` without explicit approval.

Last updated: {{DATE}}
