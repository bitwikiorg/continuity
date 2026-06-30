---
name: continuity
description: "File-based state packs for AI agents. Externalize identity, state, tasks, memory, and evidence into versioned files. Boot, resume, update, and audit agent work across sessions. Runtime-agnostic: works with Claude Code, Codex, Hermes, OpenClaw, Agent Zero, and any agent that reads files."
version: 1.1.1
author: BITwiki
license: MIT
---

# Continuity

## Use When

- The task needs persistent state across sessions.
- Multiple agents or runtimes share the same workspace.
- The agent must update TODO, STATE, memory, or snapshots after work.
- You want clean handoff between sessions, agents, or runtimes.

## What It Is

A library of markdown templates and simple scripts that give LLM agents a way to store their state in files. The agent's runtime is stateless — everything in the context window is lost when the session ends. Continuity externalizes identity, goals, tasks, knowledge, and memory into files so the agent can load only what it needs each session and update the files when reality changes.

This is not a framework, a runtime, a database, or an orchestration product. It is a file convention. The value is portability: the same STATE.md, TODO.md, MEMORY.md, and SNAPSHOT.md survive model swaps, process restarts, and multi-agent handoffs.

## Procedure

1. Find the entry file for your runtime (AGENTS.md, CLAUDE.md, INIT.md, BOOT.md, SKILL.md — whatever your runtime auto-loads or you point it to).
2. Load the smallest relevant state chain for the current task.
3. Reconcile current task, TODO, STATE, warnings, and checkpoints against reality.
4. Act only inside scope.
5. Write back changed state (STATE.md, TODO.md, SNAPSHOT.md, etc.).
6. Move completed tasks to completed/.
7. Log major events to logs/events.jsonl.
8. Commit.

## Entry File

The entry file is whatever your runtime loads first: AGENTS.md, CLAUDE.md, INIT.md, BOOT.md, SKILL.md, or another adapter file. Continuity only requires that the agent loads the right state chain and writes back changed state. It does not prescribe which file is the entry — that depends on your runtime and context.

See `adapters.md` for runtime-specific entry file guidance.

## State Packs

A pack is a cohesive set of state files wired for one operating mode. Each pack contains multiple files that work together — not just a single template.

See `reference.md#state-packs` for the full pack catalog.

## Core File Roles

| File | Class | Purpose |
|------|-------|---------|
| AGENTS.md | State | Boot order, governance, load rules |
| STATE.md | State | Current project truth — what IS |
| TODO.md | State | Active task queue |
| PLAN.md | State | Phased plan |
| MEMORY.md | State | Durable facts index (loaded selectively) |
| KNOWLEDGE.md | State | Curated reference knowledge |
| LEARNINGS.md | State | Insights from completed work |
| SNAPSHOT.md | State | Last known good state — restoration anchor |
| WARNING.md | State | Hard limits, pre-action checklists |
| CHECKPOINT.md | State | Approval gates for high-risk actions |
| completed/ | History | Append-only task completion records |
| snapshots/ | History | Immutable recovery checkpoints |
| journal/ | History | Narrative event log |
| memory/ | Library | Durable facts, organized by topic |
| knowledge/ | Library | Reference docs, organized by topic |

See `reference.md#file-taxonomy` for the full file taxonomy.

## Three-Class Ontology

| Class | Where | Mutability | What it answers |
|-------|-------|-----------|----------------|
| State | Root .md files | Overwrite in place | What IS |
| History | Nested dirs (append-only) | Append, never modify | What WAS |
| Library | Nested dirs (curated) | Add, update, remove | What is KNOWN |

State holds one current value. History accumulates. Knowledge is distilled. Do not conflate them.

## Writeback Rules

After meaningful work:
1. Update STATE.md with new reality.
2. Update TODO.md — move done items to completed/.
3. Refresh SNAPSHOT.md.
4. Append to LEARNINGS.md if insights emerged.
5. Append to logs/events.jsonl.
6. Commit.

State changes when reality changes. No stale state. No false completion (tasks need evidence). See `reference.md#writeback-protocol` for full protocol.

## Never

- Do not store secrets in markdown files.
- Do not auto-load archives, logs, or unrelated state.
- Do not overwrite state without preserving history (git or snapshots/).
- Do not weaken parent safety rules in nested files.
- Do not turn this into a framework, runtime, or database.

## Nesting

Any file can nest into project subdirectories. Only the minimal chain loads at runtime.

```
/AGENTS.md  /STATE.md  /TODO.md              # root
├── /backend/AGENTS.md  /STATE.md             # child: backend
│   ├── /backend/auth/STATE.md                # grandchild: auth module
├── /frontend/AGENTS.md  /STATE.md            # child: frontend
```

Child inherits parent rules, refines scope, cannot weaken safety.

## Scoped Loading

Before action, load the smallest sufficient chain from root to active task. Do not load everything.

## Adapters

Continuity is runtime-agnostic. See `adapters.md` for runtime-specific entry file guidance, load instructions, and writeback contracts for:

- Claude Code
- OpenAI Codex
- Hermes Agent
- OpenClaw
- Agent Zero

Each section is a short adapter with entry file, load instructions, and writeback contract. Copy the one that matches your runtime.

## Scripts

- `scripts/state-file-audit.sh` — Check for broken paths, stale facts, missing files. Read-only.

## References

See `reference.md` for:

- File taxonomy and roles (`#file-taxonomy`)
- Pack catalog and selection guide (`#state-packs`)
- Update rules and reconciliation protocol (`#writeback-protocol`)
- Nesting rules and scope resolution (`#nesting-model`)
- State maintenance protocol (`#state-maintenance`)
- File placement taxonomy (`#file-organization`)
- Common failure modes (`#anti-patterns`)
- RAG and knowledge systems (`#rag-systems`)
- WARNING.md state file (`#warning-md-state-file`)
- Scaffold repo development (`#scaffold-repo-development`)
- File reorganization lessons (`#file-reorganization`)
- Context compaction failures (`#context-compaction-failures`)
