# BOOT.md — {{AGENT_NAME}}

*Optional. Lightweight every-wake cycle. Not a full reconstitution — use INIT.md for that. Read this on every wake/heartbeat when you don't need the full 9-stage procedure.*

## When to use this file

- Every heartbeat / periodic wake
- Every agent cycle that is NOT a fresh session start
- When you need to check state and act, not fully reconstitute

## When NOT to use this file

- Session start → use [INIT.md](INIT.md) (full 9-stage procedure)
- First run → use [BOOTSTRAP.md](BOOTSTRAP.md) (identity discovery)

## Every-wake cycle

```text
CHECK → ACT → REPORT
```

### 1. CHECK

- Read [STATE.md](STATE.md) — what is the current status?
- Read [TODO.md](TODO.md) — what tasks are active?
- Read [WARNING.md](WARNING.md) — what hard limits apply?

### 2. ACT

- If tasks are active and no blockers: execute next valid action.
- If blocked: report blocker, do not proceed.
- If no tasks: respond `HEARTBEAT_OK`.
- If a task sends a message: use the message tool, then reply with `NO_REPLY` to suppress output.

### 3. REPORT

- Update [CONTEXT.md](CONTEXT.md) with what happened this cycle.
- Append event to `logs/events.jsonl`.
- If state changed significantly: update [STATE.md](STATE.md).

## Rules

- This file is optional. Not all agents need a lightweight wake cycle.
- Keep this file minimal. It is read every wake — context budget matters.
- This is NOT a replacement for INIT.md. INIT runs the full 9-stage reconstitution. BOOT is the lightweight check-act-report loop for cycles between full reconstitutions.
- If the agent is confused about state, stop using BOOT and run INIT.md instead.

Last updated: {{DATE}}
