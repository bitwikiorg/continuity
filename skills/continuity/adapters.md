# Runtime Adapters

Thin adapter files describing how to wire Continuity into each runtime.

## Claude Code

## Entry file
`CLAUDE.md` — Claude Code auto-loads this file on every turn.

## Setup
1. Copy a pack into your project.
2. Claude Code auto-loads CLAUDE.md at the project root and from nested CLAUDE.md files in subdirectories. It does not load AGENTS.md. Route through CLAUDE.md:
   - Option A: Rename the pack's `AGENTS.md` to `CLAUDE.md`.
   - Option B: Keep `AGENTS.md` and create a `CLAUDE.md` that imports it: `Read AGENTS.md and follow its boot instructions.`
3. Point CLAUDE.md to your state files:

```markdown
# CLAUDE.md
Read STATE.md before acting.
After meaningful work, update STATE.md, TODO.md, SNAPSHOT.md.
```

4. Prompt: "Run Continuity init. Read STATE.md and TODO.md. If READY, do the next valid action."

## Writeback
Claude Code can read and write files directly. After work, it updates STATE.md, TODO.md, and SNAPSHOT.md in place.

## Hooks
Claude Code supports hooks for pre/post-action validation. Use them for CHECKPOINT enforcement, not for state management.

## OpenAI Codex

## Entry file
`AGENTS.md` — Codex auto-loads this file and composes instructions across global, repository, and directory scopes.

## Setup
1. Copy a pack into your project.
2. AGENTS.md is already the entry file. Ensure it declares your state chain.
3. Prompt: "Read STATE.md and TODO.md. If READY, implement the next valid action. Update continuity files after work."

## Writeback
Codex writes file updates as part of its result. Expected output shape:

```json
{
  "status": "READY",
  "file_updates": {
    "STATE.md": "...",
    "TODO.md": "...",
    "SNAPSHOT.md": "..."
  }
}
```

## Thin wrapper
If you need a wrapper script:

```bash
python run_with_continuity.py --workspace . --task "Read TODO.md, implement next valid action, update continuity files"
```

## Chain point
Once Codex writes STATE.md and TODO.md, Claude or Hermes can continue from the same workspace with no prompt recap.

## Hermes Agent

## Entry file
`AGENTS.md` — Hermes progressively discovers local context files as the agent moves through a project.

## Setup
1. Copy a pack into your project.
2. Copy this skill to your Hermes skills directory:
```bash
cp -R skills/continuity ~/.hermes/skills/continuity
```
3. Prompt: "Use the continuity skill. Boot this project. If READY, continue with the top task in TODO.md."

## Writeback
Hermes can read and write files directly. After work, update STATE.md, TODO.md, SNAPSHOT.md.

## Auto-injected files
Hermes auto-injects SOUL.md, MEMORY.md, and USER.md from `~/.hermes/` on every session. These are instance-level state, separate from project-level continuity files.

## OpenClaw

## Entry file
`AGENTS.md` — OpenClaw uses SKILL.md directories with loading order, allowlists, and security gates.

## Setup
1. Copy a pack into your project.
2. Copy the continuity skill:
```bash
cp -R skills/continuity ./.agents/skills/continuity
```
3. Create a config wrapper:

```yaml
# continuity-agent.yaml
entry_file: AGENTS.md
boot_file: INIT.md
state_files:
  - STATE.md
  - TODO.md
  - SNAPSHOT.md
writeback:
  events: logs/events.jsonl
  snapshots: snapshots/
rules:
  - do_not_write_secrets_to_markdown
  - require_checkpoint_before_irreversible_actions
```

4. Prompt: "Boot project and continue next valid action."

## Writeback
OpenClaw agents write file updates as part of their result. The config wrapper declares which files to track.

## Security gates
OpenClaw supports security gates in SKILL.md. Use CHECKPOINT.md for approval gates on high-risk actions.

## Agent Zero

## Entry file
Agent Zero does NOT auto-load `AGENTS.md`. It uses a prompt include system — files listed in `AGENTS.promptinclude.md` are injected into the agent's system prompt automatically.

## Setup
1. Copy a pack into your project.
2. Create `AGENTS.promptinclude.md` to auto-inject state files:

```markdown
@AGENTS.md
@STATE.md
@TODO.md
@SNAPSHOT.md
```

3. Prompt: "Read STATE.md and TODO.md. If READY, execute the next valid action. After work, update continuity files."

## Writeback
Agent Zero can read and write files via its built-in tools. After work, update STATE.md, TODO.md, SNAPSHOT.md.

## Subordinates
For multi-agent work, use the orchestrator pack. Each subordinate gets scoped access to its portion of the state chain. Use BINDING.schema.json to validate agent contracts before spawn.
