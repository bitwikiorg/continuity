# State Packs

A pack is a cohesive set of state files wired for one operating mode. Each pack contains multiple files that work together as a system — not just a single template.

## Available packs

| Pack | Purpose | Files |
|------|---------|-------|
| **developer** | General coding agent | AGENTS, INIT, STATE, TODO, PLAN, SNAPSHOT, CHECKPOINT |
| **backend** | APIs, databases, auth, jobs | AGENTS, STATE, TODO, WARNING, CHECKPOINT |
| **frontend** | UI, routes, components | AGENTS, STATE, TODO, CHECKPOINT |
| **researcher** | Long-running research | AGENTS, STATE, TODO, MEMORY, KNOWLEDGE, LEARNINGS |
| **judge** | Evaluation and review | AGENTS, RUBRIC, CLAIMS, EVIDENCE, DECISION, RISKS |
| **security** | Risk and secrets control | AGENTS, THREAT_MODEL, WARNING, CHECKPOINT, INCIDENTS |
| **ops** | Infrastructure and production | AGENTS, INFRASTRUCTURE, RUNBOOK, WARNING, SNAPSHOT |
| **orchestrator** | Multi-agent coordination | AGENTS, TASKS, PLAN, EVENTS, SNAPSHOT, BINDING.schema.json |
| **docs-writer** | Documentation systems | AGENTS, TODO, STRUCTURE, STYLE |

## How to use

1. Choose the pack that matches your agent's role.
2. Copy the files into your project directory.
3. Replace `{{PLACEHOLDERS}}` with your values.
4. Point your agent to the entry file (AGENTS.md or whatever your runtime loads).
5. Delete files you don't need. Add files when you need them.

## Combining packs

An orchestrator agent managing developer and researcher agents would use the orchestrator pack at root, with developer and researcher packs in subdirectories:

```
/AGENTS.md  /TASKS.md  /PLAN.md       # orchestrator pack
├── /backend/AGENTS.md  /STATE.md      # backend pack
├── /frontend/AGENTS.md  /STATE.md     # frontend pack
└── /research/AGENTS.md  /MEMORY.md    # researcher pack
```

When combining packs, each subdirectory agent loads its own AGENTS.md chain. The orchestrator loads its own chain at root. Agents do not load sibling packs — only their own.

## Choosing a pack

| If your agent... | Use this pack |
|-------------------|---------------|
| Writes code across the stack | **developer** |
| Owns APIs, databases, or backend services | **backend** |
| Owns UI, routes, or components | **frontend** |
| Gathers information over multiple sessions | **researcher** |
| Evaluates, reviews, or approves work | **judge** |
| Manages security, secrets, or incidents | **security** |
| Manages infrastructure or production | **ops** |
| Coordinates other agents | **orchestrator** |
| Writes or maintains documentation | **docs-writer** |

## Not a framework

Packs are markdown templates. They declare state; they do not enforce it. Your runtime, hooks, and review process handle enforcement. The pack gives you a starting point — the wiring is in the files, not in code.

## Entry file

The entry file is whatever your runtime loads first: AGENTS.md, CLAUDE.md, INIT.md, BOOT.md, SKILL.md, or another adapter file. Continuity only requires that the agent loads the right state chain and writes back changed state.

## Placeholders

All `{{PLACEHOLDERS}}` are replaced with real values when you instantiate a pack. Common placeholders across packs:

| Placeholder | Meaning | Example value |
|-------------|---------|---------------|
| `{{PROJECT_NAME}}` | Project or service name | `auth-service` |
| `{{DATE}}` | Date stamp | `2026-06-29` |
| `{{READY_OR_BLOCKED}}` | Status declaration | `READY` or `BLOCKED` |
| `{{BRANCH}}` | Current git branch | `main` |
| `{{BLOCKERS_OR_NONE}}` | Blockers or `None` | `Waiting on API spec from team B` |
