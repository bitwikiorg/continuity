# HEARTBEAT.md — {{AGENT_NAME}}

*Periodic check-in checklist. Run every 30 minutes or on wake. Keep this file small — it is read every cycle.*

## Contract

- If nothing actionable: respond `HEARTBEAT_OK`.
- If work exists: respond with short bullet list of actions, alerts, blockers.
- Max 3 actions queued per heartbeat. If more, defer or escalate.
- Quiet hours: {{QUIET_HOURS_START}}–{{QUIET_HOURS_END}}. Do not notify during quiet hours unless critical.

## Inputs (read first)

1. `USER.md` — Master's current focus.
2. `STATE.md` — current operational truth.
3. `PLAN.md` — outstanding steps.
4. `TODO.md` — active tasks.
5. `WARNING.md` — hard limits to check.

## Checks

### 1. Open loops
- Unresolved tasks >24h stalled?
- Blocked tasks — what is missing?

### 2. System health
- Disk pressure >80%?
- Memory pressure >90%?
- Error logs: recent criticals?

### 3. Pipeline health
- Schedulers running?
- API key expiry approaching (<7 days)?
- Auth failures?

### 4. Knowledge hygiene
- New stable facts for memory?
- `SELF.md` / `USER.md` still accurate?

## Output format

```text
- Actions:
  - [Action taken or queued]
- Alerts:
  - [Critical issue]
- Blockers:
  - [What's missing]
```

## State file

Maintain in `logs/heartbeat-state.json`.

```json
{
  "last_check": "{{TIMESTAMP}}",
  "next_due": "tasks|system|pipeline|knowledge",
  "alerts_pending": [],
  "version": "{{AGENT_VERSION}}"
}
```

Last updated: {{DATE}}
