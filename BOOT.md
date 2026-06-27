# BOOT.md — {{AGENT_NAME}}

*Short, explicit instructions for what to do on every startup. Keep this file tiny — it is read every cycle.*

## Startup

1. Read `AGENTS.md`, then `INIT.md`.
2. Load files in load order (see `AGENTS.md`).
3. Reconcile state. Declare `READY` / `READY_WITH_WARNINGS` / `BLOCKED`.
4. Check `TODO.md` for active tasks.
5. Check `WARNING.md` for hard limits before any action.

## After startup

- If a task sends a message, use the message tool, then reply with `NO_REPLY` to suppress agent output.
- If no tasks are active, respond `HEARTBEAT_OK`.

## Notes

- This file is read every session. Keep it minimal.
- `BOOTSTRAP.md` is for first-run only and should be deleted after identity is established.
- `BOOT.md` is for every session.

Last updated: {{DATE}}
