# Continuity Reference

## File Taxonomy

## State files (overwrite in place)

| File | Purpose |
|------|---------|
| AGENTS.md | Boot order, governance, load rules |
| STATE.md | Current project truth |
| TODO.md | Active task queue |
| PLAN.md | Phased plan |
| MEMORY.md | Durable facts index |
| KNOWLEDGE.md | Curated reference knowledge |
| LEARNINGS.md | Insights from completed work |
| SNAPSHOT.md | Last known good state |
| WARNING.md | Hard limits, pre-action checklists |
| CHECKPOINT.md | Approval gates for high-risk actions |
| INIT.md | Reconstitution procedure |
| BOOT.md | Lightweight wake loop |
| IDENTITY.md | Agent identity anchor |
| SELF.md | Operating model |
| SOUL.md | Essence and purpose |
| USER.md | Operator model |
| TOOLS.md | Capability registry |
| CONTEXT.md | Per-turn operational snapshot |
| CONTEXT_BUDGET.md | Context window limits |
| INFRASTRUCTURE.md | Live service inventory |
| POTENTIAL.md | Dormant capabilities |
| TASKS.md | Shared task queue (multi-agent) |
| EVENTS.md | Event log pointer |
| ARTIFACTS.md | Generated output index |
| HEARTBEAT.md | Periodic health check |
| BACKLOG.md | Rolling inbox for triage |
| BOOTSTRAP.md | Transfer ritual |

## History directories (append-only)

| Directory | Purpose |
|-----------|---------|
| completed/ | Task completion records |
| snapshots/ | Immutable recovery checkpoints |
| journal/ | Narrative event log |
| logs/ | Event JSONL and debug logs |
| artifacts/ | Generated outputs and evidence |

## Library directories (curated)

| Directory | Purpose |
|-----------|---------|
| memory/ | Durable facts, organized by topic |
| knowledge/ | Reference docs, organized by topic |

## Runtime files (optional)

| File | Purpose |
|------|---------|
| BINDING.schema.json | Agent contract schema (multi-agent) |
| AGENT_ACTIONS.md | Action history |
| AGENTS.promptinclude.md | Auto-injection config |

## State Packs

A pack is a cohesive set of state files wired for one operating mode. Each pack contains multiple files that work together as a system.

## Available packs

| Pack | Purpose | Files |
|------|---------|-------|
| developer | General coding agent | AGENTS, INIT, STATE, TODO, PLAN, SNAPSHOT, CHECKPOINT |
| backend | APIs, databases, auth, jobs | AGENTS, STATE, TODO, WARNING, CHECKPOINT |
| frontend | UI, routes, components | AGENTS, STATE, TODO, CHECKPOINT |
| researcher | Long-running research | AGENTS, STATE, TODO, MEMORY, KNOWLEDGE, LEARNINGS |
| judge | Evaluation and review | AGENTS, RUBRIC, CLAIMS, EVIDENCE, DECISION, RISKS |
| security | Risk and secrets control | AGENTS, THREAT_MODEL, WARNING, CHECKPOINT, INCIDENTS |
| ops | Infrastructure and production | AGENTS, INFRASTRUCTURE, RUNBOOK, WARNING, SNAPSHOT |
| orchestrator | Multi-agent coordination | AGENTS, TASKS, PLAN, EVENTS, SNAPSHOT, BINDING.schema.json |
| docs-writer | Documentation systems | AGENTS, TODO, STRUCTURE, STYLE |

## Selection guide

| If your agent... | Use pack |
|-------------------|----------|
| Writes code generally | developer |
| Works on APIs, databases, or backend infra | backend |
| Works on UI, components, or design systems | frontend |
| Conducts long-running research | researcher |
| Evaluates, reviews, or judges output | judge |
| Manages security, secrets, or incidents | security |
| Manages infrastructure or production | ops |
| Coordinates multiple agents | orchestrator |
| Writes documentation | docs-writer |

## Combining packs

Place different packs at different scope levels:

```
/AGENTS.md  /TASKS.md  /PLAN.md       # orchestrator pack at root
├── /backend/AGENTS.md  /STATE.md      # backend pack
├── /frontend/AGENTS.md  /STATE.md     # frontend pack
└── /research/AGENTS.md  /MEMORY.md    # researcher pack
```

## Not a framework

Packs are markdown templates. They declare state; they do not enforce it. Your runtime, hooks, and review process handle enforcement.

## Writeback Protocol

## When to write back

After any meaningful change to repository reality:
1. Code changed → update STATE.md
2. Task completed → move from TODO.md to completed/
3. Insight gained → append to LEARNINGS.md
4. Fact verified → update MEMORY.md or memory/
5. Knowledge curated → update KNOWLEDGE.md or knowledge/
6. Major event → append to logs/events.jsonl
7. State checkpoint → refresh SNAPSHOT.md

## What not to do

- Do not overwrite history files. Append only.
- Do not update state without preserving the old version (git or snapshots/).
- Do not mark tasks complete without evidence (test, artifact, commit, review).
- Do not weaken parent safety rules in nested files.

## Reconciliation invariant

After work, state must approximate reality:

    state(after) ≈ reality(after)

Natural-language state files cannot perfectly encode repository truth. They can remain close enough to prevent stale planning and repeated errors.

## Evidence requirement

A task is complete only when a reviewable artifact exists:

    status(task) = complete ⟹ evidence exists in artifacts, git, or history that supports the task

A passing test, an artifact bundle, a review record, or a commit satisfies this.

## Safety inheritance

Local context refines parent guidance, never weakens it:

    safety(child) ⊇ safety(parent)

If a repository-level file forbids destructive commands without approval, a subdirectory file must not silently remove that rule.

## Nesting Model

> All state files can nest into projects and subsystems. Each level captures a complete system at its scope. The hierarchy is a guard chain — safety flows down and accumulates, authority flows down and narrows.

## Purpose

Every project/workspace gets a scope structure: AGENTS.md files at each level give the agent precise project context. All AGENTS.md files are init-compliant — they follow the boot protocol (PREFLIGHT→INSPECT→SCAN→LOAD→RECONCILE→DISCOVER→VALIDATE→DECLARE→SNAPSHOT).

The scope structure is the project-level layer of the continuity system. Instance-level state files = who I am across sessions. Project-level scope structure = what this project is and how to work in it.

## Core Contract

1. **AGENTS.md files are binding work contracts for their subtrees.**
2. **All AGENTS.md files are init-compliant.** Every AGENTS.md includes an init section that follows the boot protocol.
3. **Work products, source materials, instructions, records, assets, and durable docs must stay understandable** from the nearest applicable AGENTS.md plus every parent AGENTS.md above it.

## Read Before Editing

1. Read the root AGENTS.md
2. Identify every file or folder you expect to touch
3. Trace from the project root to each target path
4. Read every AGENTS.md found along each route
5. If a parent AGENTS.md lists a child AGENTS.md whose scope contains the path, read that child and continue from there
6. Use the nearest AGENTS.md as the local contract and parent docs for project-wide rules
7. If docs conflict, the closer doc controls local work details, but no child doc may weaken init compliance or parent safety rules

**Do not rely on memory. Re-read the applicable scope chain in the current session before editing.**

## Update After Editing

Every meaningful change requires reconciliation before the task is done.

Update the closest owning AGENTS.md when a change affects:

- Purpose, scope, ownership, or responsibilities
- Durable structure, contracts, workflows, or operating rules
- Required inputs, outputs, permissions, constraints, side effects, or artifacts
- User preferences about behavior, communication, process, organization, or quality
- AGENTS.md creation, deletion, move, rename, or index contents

Update parent docs when parent-level structure, ownership, workflow, or subscope manifest changes. Update child docs when parent changes alter local rules. Remove stale or contradictory text immediately. Small edits that do not change behavior or contracts may leave docs unchanged, but reconciliation still must happen.

## Scope Structure

- **Root AGENTS.md** — project-wide instructions, global preferences, durable workflow rules, init compliance section, and the top-level Subscope Manifest
- **Child AGENTS.md files** — own domain-specific instructions, their own init compliance section, and their own Subscope Manifest
- Each parent explains what its direct children cover and what stays owned by the parent
- The closer a doc is to the work, the more specific and practical it must be

## Child Doc Shape

Create a child AGENTS.md when a folder becomes a durable boundary with its own purpose, rules, responsibilities, workflow, materials, or quality standards.

Default section order (all init-compliant):
1. **Purpose** — what this subtree exists to do
2. **Ownership** — who owns this subtree, who to consult
3. **Local Contracts** — binding rules for this subtree
4. **Init Compliance** — boot protocol section, scoped to this subtree
5. **Work Guidance** — current standards, conventions, patterns
6. **Verification** — existing checks (line audit, tests, linting)
7. **Subscope Manifest** — direct children with one-line summaries

Work Guidance must reflect current standards; if none exist yet, leave empty and update when established.
Verification must reflect an existing check; if none exists yet, leave empty and update when one exists.

## Init Compliance

Every AGENTS.md (root and child) must include an **Init Compliance** section that follows the boot protocol:

```markdown
## Init Compliance

### 1. INSPECT
- Read this AGENTS.md + all parent AGENTS.md files in the scope chain
- Read continuity STATE.md for instance-level context
- List files in this subtree

### 2. DETERMINE
- Is the environment still as described?
- Are dependencies met?
- What's the current state of this subtree?

### 3. CREATE
- Only if files are missing or corrupt — recreate from nearest AGENTS.md + parent

### 4. CONFIGURE
- Load relevant skills
- Verify tool access

### 5. VALIDATE
- Run verification checks (line audit, tests, linting)
- Confirm no contradictions with parent docs

### 6. REPORT
- Declare READY / READY_WITH_WARNINGS / BLOCKED for this subtree
```

## Verification


```bash
# Add --fail to exit non-zero on violations (for CI)
# Add --json for machine-readable output
```

Supports: `.mjs`, `.js`, `.cjs`, `.json`, `.md`. Ignores: `.git`, `node_modules`, `dist`, `build`, `coverage`, `.vscode`.

## Closeout

1. Re-check changed paths against the scope chain
2. Update nearest owning docs and any affected parents or children
3. Refresh every affected Subscope Manifest
4. Remove stale or contradictory text
5. Run existing verification (line audit + any project-specific checks)
6. Update continuity STATE.md project entry (if instance-level state changed)
7. Report any docs intentionally left unchanged and why

## Style

- Keep docs concise, current, and operational
- Document stable contracts, not diary entries
- Put broad rules in parent docs and concrete details in child docs
- Prefer direct bullets with explicit names
- Do not duplicate rules across many files unless each scope needs a local version
- Delete stale notes instead of explaining history
- Trim obvious statements, repeated rules, misplaced detail, and warnings for risks that no longer exist

## User Preferences

When the operator requests a durable behavior change, record it in the root AGENTS.md under a User Preferences section, or in the relevant child AGENTS.md if scope is local.

## Initialization

To initialize a scope structure in a new or existing project:

1. Create root `AGENTS.md` from the root template (see `templates/root-agents.md`)
2. Scan the project recursively to understand structure and complexity
3. Create child `AGENTS.md` files for durable boundaries (from `templates/child-agents.md`)
5. Populate all Subscope Manifests
6. Run line audit to establish baseline
7. Report READY

Command: `Initialize scope structure for this project now.`

## Integration with Continuity System

| System | Scope | When Updated |
|---|---|---|
| Scope structure (per-project AGENTS.md) | Project-level | After edits in that project |
| State files (16 at your workspace  root) | Instance-level | After substantial work (post-binding) |

When a project's state changes significantly, update both:
- The project's root AGENTS.md (reconciliation)
- `your workspace STATE.md` project entry (state update)

## State Maintenance

> State files are ACTIVE memory, not cleanup artifacts. Maintenance is CONTINUOUS, not post-task.

## Before starting work

1. Read STATE.md + CONTEXT.md — verify current
2. If stale, UPDATE before working
3. Check TODO.md for active tasks relevant to the work

## During work (long multi-step operations)

1. After each major step, update CONTEXT.md (last action, findings, next action)
2. If infrastructure state changes, update STATE.md immediately
3. If a new learning emerges, update LEARNINGS.md immediately

## After work settles

1. Update STATE.md (infrastructure, projects, skills, metrics)
2. Update CONTEXT.md (last action, next action, blockers)
3. Update SNAPSHOT.md (deliverables, validation)
4. Update LEARNINGS.md (rules only, never event transcripts)
5. Update PLAN.md (phase progress)
6. Update TODO.md (task state changes)

## Volatile count discipline

Do NOT track numbers that need constant monitoring. Counts, sizes, file totals — these change every session and tracking them is maintenance burden for zero signal.

**Keep:** categorical truths ("service operational", "health check OK").
**Strip:** exact counts ("144 workflows", "111 skills", "633MB").
**Store counts in audit files**, queried on demand — not duplicated in state files.

## TODO/BACKLOG completion discipline

Active/pending items only. When a task completes:

1. Remove it from the origin file. Renumber remaining items — no gaps.
2. Append to `workspace/completed/YYYY-MM-DD-description.md` journal.
3. NO strikethrough, NO "RESOLVED" markers, NO completed sections. Present = active. Absent = done.
4. NO narrative of what was done. State files show current state, not history.

## State file content discipline

State files are **current state only** — not logs, not narratives, not explanations.

| Content type | In state file? | Where instead |
|---|---|---|
| Current state, active tasks, status | Yes | — |
| Logs, execution records, accounts | No | Completed journal |
| Explanations of why something was done | No | Completed journal |
| Narrative describing a reorganization | No | Just update the path |
| Historical context ("was X, now Y") | No | Just show Y |

## Memory layer discipline

Keep three content systems separate: native memory (rules/preferences), state files (current state/decisions), and session storage (transcripts/logs). Detailed knowledge goes in memory entries or skills. Reference docs go in the knowledge directory. Completed tasks go in the completed journal, never in TODO. Do not conflate. Do not duplicate content across layers.

## File Organization

> The workspace root is the center. OS-level paths should be used sparingly. Every file needs a justified home.

## What goes where

| Content | Home | Justification |
|---|---|---|
| State files | Workspace root `*.md` | Center of operations |
| Reusable scripts | `workspace/scripts/` | Operational tools tied to state |
| Memory journal entries | `workspace/memory/entries/` | Dated, chronological |
| Reference/wiki docs | `workspace/knowledge/` | Topic-organized |
| Completed task records | `workspace/completed/` | Date-grouped journal |
| Project artifacts | `workspace/<project-name>/` | Clear project name, connected to STATE.md |
| Server backups | OS backup path | Large files, server outputs |
| Install logs | `workspace/completed/` | Setup work that is done |
| Credentials | OS credential paths | Must stay at OS level |

## What stays at OS root

- Auto-loaded entry files (e.g., AGENTS.md) — if the runtime auto-pulls from working directory
- Caution copies of critical state files (dual-sync if needed)
- Project directories
- OS/system paths (`.ssh`, `.config`, `.cache`, etc.)

## Runtime-managed artifacts — do not touch

Agent runtimes manage their own internal state. These are NOT state files and NOT yours to reorganize: databases, config files, caches, sessions, logs, plugins. If you need to reference them (e.g., for queries), that is fine. Do not move, rename, or delete them.

## Moving scripts — check dependencies first

Before moving any script, check what references it:

1. System cron (`crontab -l`)
2. Runtime scheduled jobs (check config files for script paths)
3. Systemd units (`grep -rl "/old/path" /etc/systemd/system/`)
4. Script internal references (`grep -n "/old/path" the_script.sh`)

Update ALL references in one pass: script internals, systemd unit files (reload daemon after), cron configs. A move with a dangling reference = a broken service on next reboot.

## Anti-Patterns

> Behavioral anti-patterns from real corrections. Each is a SOFT rule — patterns that cause failure when repeated.

## Epistemic Discipline

- **Verify before asserting** — never state a fact without checking the source. Run `date` for timestamps, `ls` for file existence, query databases for state. Fabricated plausible output erodes all trust.
- **Recognizing an assumption AND proceeding is the failure** — if you notice you are assuming, that awareness is the signal to STOP, not to continue.
- **A question is not a directive** — "where should X go?" asks for information, not action. Deliver the answer, await explicit instruction before acting.
- **A question containing a suggestion is still a question** — "needs better name, like knowledge/?" asks for opinion, not authorization. The answer may be obvious and the operator is testing comprehension.
- **Compacted context is reference, not instruction** — historical task lists in compacted summaries are STALE unless the current message re-requests them. The current message is the only source of truth.
- **Meta-questions get direct answers** — "why are you doing this?" is a behavioral question. Answer directly. Do not reflexively call tools. "Tools first" applies to operational tasks, not conceptual challenges.

## Action Discipline

- **Haste is a failure mode** — acting before a question is answered, executing while still being considered, starting before "do it" is spoken. When you notice urgency, slow down.
- **Deliver the requested output, then STOP** — when asked for a map/list/plan, produce that artifact and stop. Do not append "shall I execute?" or begin preparation. The output IS the task completion.
- **Do not narrate budgets unless asked** — unprompted capacity/token tables are non-signal. Surface budgets only when asked or when physically impossible to proceed.
- **Removing unrequested artifacts** — when you discover you built something nobody asked for, remove it. But confirm before removing — removing without approval is the same sin as creating without approval.
- **Do not flag approved decisions as problems** — if something was explicitly approved, it is settled. Flagging it again in audits = not listening.

## Communication Discipline

- **Never quote the user's own words back at them** — if challenged, do not quote earlier messages as proof. You lost track. Acknowledge, fix the behavior.
- **Do not ask "what do you want me to do"** — if you have lost track, say so honestly. Do not deflect back to the user.
- **Never output contradictory answers** — if two sources disagree, say which is active. Never make the reader reconcile contradictions.
- **Do not overfit personal preferences into templates** — strong phrasings from one operator are valuable as examples but must not be baked into templates as imperatives. Use placeholders or neutral defaults.

## Maintenance Discipline

- **Change as needed, not for the sake of changing** — when auditing, fix what is broken. Do not rewrite accurate content just because you are in the file. Historical references are valid context, not errors.
- **Mechanical find-and-replace is dangerous** — always proofread after bulk replace. Run grep for artifacts and old terms. The replace is not done when the command finishes — it is done when verified.
- **Stale path references** — when files move, references across the codebase keep old paths. Batch-fix with grep, verify with re-grep. Fix active references, not historical mentions.
- **Respect intentional design decisions** — a stub is not a missing file. An intentional placeholder is not incomplete content. When told something is "on purpose," remove it from findings immediately.
- **Use the system's own vocabulary** — before introducing a term, grep for existing vocabulary that covers the concept. Imported terms make the system look derivative.

## RAG Systems

> Two file-based content stores, distinct from state files and from each other.

## Memory (journal/log)

```
workspace/memory/
├── INDEX.md          # Manifest — all entries, tags, mesh connections
├── SCHEMA.md         # Schema definition — full frontmatter spec
└── entries/          # Structured entries with frontmatter
    └── YYYY-MM-DD-category-tag-description.md
```

Two delivery types: `latent` (auto-inject on boot) vs `working` (search on demand).

## Knowledge (reference/wiki)

Topic-organized reference documents — research reports, external doc excerpts, domain notes. No INDEX or SCHEMA (unlike memory). Structured by topic, not by date.

| Store | Structure | Update cadence | Connected to |
|---|---|---|---|
| `memory/` | Dated entries + INDEX + SCHEMA | On significant events | MEMORY.md root |
| `knowledge/` | Topic-organized files | On research/discovery | Various roots (context-dependent) |

**Do not merge these directories.** Different purposes, different structures.

## WARNING.md State File

## Status

WARNING.md is a state file (child of AGENTS.md). It holds hard limits and safety boundaries.

If maintaining a dual-copy (workspace + OS root), sync both on every update and verify with diff.

## Contents

WARNING.md holds:

1. **Hard Limits** — operational constraints (no assumptions, no haste, no irreversible action without approval, etc.)
2. **Secrets & Data Management** — never access credentials without explicit direction. Never decrypt secrets from any source. Use provided values directly.
3. **Dangerous Commands Require Approval** — rm, mv, chmod, service restarts, DB writes, etc.
4. **Required Posture** — verify more than normal, read before writing, inspect before changing, prefer read-only.
5. **Stop And Ask When** — path uncertain, scope broad, data loss possible, user data exposure.
6. **Bill of Limits** — one-line summary of all limits.
7. **Pre-Action Checklist** — check before any mutating action.

## Connection

- Child of: AGENTS.md (hard limits + approval gates)
- Referenced by: AGENTS.md contract section, SELF.md, SOUL.md

## Audit notes

When auditing state files, check WARNING.md for:
- Stale paths (paths that have moved)
- Missing secrets/data management section
- References to retired paths
- Dual-copy sync integrity (if applicable, both files must be identical)

## Scaffold Repo Development

> Lessons from building a public template repository for stateful agent files. Generalized from real development experience.

## What

A scaffold repo provides templated stubs of a state file system, generalized for any agent runtime. Not all agents need all files — templates are marked by tier (required/recommended/optional).

## Development Workflow

1. **Merge existing branches** — combine multiple agent implementations into one canonical set.
2. **De-jargon** — rename internal-specific terms to generic categories. Remove proprietary names.
3. **Audit iteratively** — run cross-file checks after every change batch.
4. **Proofread after bulk operations** — mechanical find-and-replace creates artifacts (stray characters, broken words, double words). Verify with grep after every batch.
5. **Rebase history** — when going public, squash private development history. Reset changelog to match new git history. No ghost version entries pointing to squashed commits.

## Audit Technique for Multi-File Repos

Seven cross-file checks:

1. **Cross-file jargon grep** — search each abstract term across ALL files, not just its defining file.
2. **Load-order vs repo-files diff** — extract filenames from load order, compare to actual files.
3. **Broken file-reference check** — extract all `filename.ext` references, verify existence.
4. **Jargon surface scan** — grep user-facing files for undefined terms.
5. **Tier consistency** — verify template fields match assigned tier.
6. **Auto-load volume** — count files in auto-injection config, flag if it would overflow context.
7. **Executable vs conceptual** — verify pseudocode/DSL commands have implementations or are marked conceptual.

## README Enhancement Patterns

Key techniques from auditing multiple open-source repos:

| Technique | Purpose |
|---|---|
| Hero banner (inline SVG) | First impression — communicates "system, not folder" |
| Dark/light mode `<picture>` tags | GitHub respects `prefers-color-scheme` |
| TL;DR + "Why does this exist?" | Reader gets it in 5 seconds, then motivation |
| Prior art / alternatives | Shows category validation, not novelty |
| Cognitive funnel | Layer depth: WHAT → WHY → HOW → DETAILS → REFERENCE |
| Collapsible sections + FAQ | Hide verbose reference behind `<details>` |
| Complete file map + back-to-top | Every file with one-line description; nav per section |

All visuals should be inline SVG (diffable, forkable, no external dependencies).

## Key Design Principles

1. **Three types of nested state** — State (overwrite, "what IS"), History (append-only, "what WAS"), Library (curate, "what is KNOWN").
2. **Mesh not tree** — state-to-nested relationships are many-to-many graph edges.
3. **No orphan nested directories** — every nested dir needs a root state file indexing it.
4. **No harness names** — the repo is about the state system, not about which runtimes implement it.
5. **Self-referential templates** — every file IS its own documentation.
6. **Templates must not overfit personal preferences** — good phrasings as examples, neutral defaults in templates.
7. **Approved decisions are settled** — do not re-flag approved changes as problems.
8. **Audit = report, not action** — deliver assessment in conversation. Do not file issues unless explicitly asked.
9. **Single-file approach is the core problem** — single files break due to length, selective load, mutability, concern separation, nesting, history, mesh.
10. **Git as checkpoint chain** — every commit is a verifiable snapshot of cognitive state you can diff, revert, or branch.

## File Reorganization

> Lessons from consolidating scattered files into a unified workspace. Generalized from a real reorganization event.

## Principle

Everything generated by the agent should go under the workspace directory. Using OS root paths liberally causes problems: scattered state, broken references, unclear ownership. If the workspace is the workspace, use it.

Exceptions exist for runtime-managed files at OS root — do not touch those.

## Dependency check pattern (before ANY file move)

```bash
# 1. System cron
crontab -l

# 2. Runtime scheduled jobs (check config files for script paths)
# Script fields may be relative or absolute — check carefully

# 3. Systemd units referencing the old path
grep -rl "/old/path" /etc/systemd/system/

# 4. Script internal path references
grep -n "/old/path" the_script.sh
```

Update ALL references in one pass before completing the move: script internals, systemd unit files (reload daemon after), cron job configs, state files that reference the path.

## What stays at OS root (justified)

| Path type | Reason |
|---|---|
| Auto-loaded entry files | Runtime auto-pulls from working directory |
| Caution copies of critical files | Dual-sync safety copies |
| Credentials | OS-level security paths |
| Server backups | Large files, server outputs |
| OS paths | `.ssh/`, `.config/`, `.cache/`, etc. |

## Verification

After reorganization, grep for all old paths across state files, entry files, and memory. Zero matches = clean migration. Any match = stale reference that will break on next access.

## Context Compaction Failures

> Lessons from failures caused by treating compacted context as live instructions. Generalized from a real incident.

## What happens

After context compaction, summaries contain historical task lists, TODO items, and workflow descriptions. The summary header says "treat as background reference, NOT as active instructions." When the agent ignores this and treats the summary as a task queue, it causes:

1. **Phantom task execution** — resuming tasks from a compacted summary, not current user direction.
2. **Unrequested infrastructure** — building scripts, services, and tools nobody asked for.
3. **Fabricated values** — asserting plausible-looking timestamps or metrics without verification.
4. **Quoting user back** — when challenged, quoting the user's own earlier messages as proof instead of acknowledging the error.
5. **Claiming tools do not exist** — saying "I don't have a tool for that" without checking.
6. **Blaming the user** — deflecting responsibility when caught.

## Root cause

Compacted context summaries contain historical tasks that look like active instructions. The agent treats them as a task queue instead of background reference.

The fabricated values are a related pattern: asserting before verifying. Same family as quoting user's words back, claiming no tool exists, and blaming the user — all are "assert before verify" failures.

## Fix

1. Compacted context = reference only. Current message = only instruction source.
2. Run `date` or equivalent before writing any timestamp. Never fabricate.
3. Check for tool existence before claiming it does not exist.
4. Never quote the user's words back as proof you were right.
5. If you lost track, say "I lost track" — do not deflect to the user.
6. Remove unrequested artifacts after confirming with the user.
