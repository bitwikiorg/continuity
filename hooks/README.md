# Hooks

Optional extension files for reacting to state file changes. Continuity is templates + scripts, not a runtime — these hooks are examples, not a framework.

## What hooks do

- Watch state files for changes.
- Trigger webhooks, scripts, or MCP calls on change.
- Move completed tasks automatically.
- Append to event logs.

## How to use

1. Copy `hooks.example.yaml` and customize for your workspace.
2. Run a file watcher (e.g., `entr`, `watchexec`, `inotifywait`) that reads the config and executes actions.
3. Or use the example Python webhook script.

## Not required

Hooks are optional. Most agents don't need them. The feedback loop (agent reads state, acts, writes state) works without hooks. Hooks add automation for teams that want CI-like validation of state file changes.
