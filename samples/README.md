# Sample Agent Configurations

Different agents need different amounts of state. These samples show real configurations for common agent types.

## samples/minimum/
For a simple coding agent that just needs identity and task tracking.
- 8 files: AGENTS, IDENTITY, SELF, STATE, INIT, TODO, SNAPSHOT, WARNING

## samples/standard/
For a research agent that needs memory and tools awareness.
- 14 files: adds SOUL, USER, MEMORY, TOOLS, PLAN, CONTEXT

## samples/full/
For an operational agent with runtime discipline and safety gates.
- 25 files: adds LEARNINGS, HEARTBEAT, KNOWLEDGE, TASKS, BACKLOG, EVENTS, ARTIFACTS, BOOT, BOOTSTRAP, CHECKPOINT, AGENT_ACTIONS

Copy a sample, fill in the placeholders, delete what doesn't apply. These are starting points, not fixed identities.
