# TOOLS.md — {{AGENT_NAME}}

*This file IS the capability registry and environment notes. Skills define HOW tools work; this file defines YOUR specifics. Indexes setup/ for tool configuration history.*

## Agent framework tools

| Tool | What it does | Permission | Failure mode | Validation |
|------|--------------|------------|--------------|------------|
| `code_execution_tool` | Run terminal/python/nodejs | {{PERMISSION}} | Destructive commands | Inspect output, exit code |
| `text_editor` | Read/write/patch files | {{PERMISSION}} | Overwrite, syntax errors | Read after write, diff |
| `browser` | Browser automation | {{PERMISSION}} | Timeouts, JS-dependent | Screenshot, content |
| `search_engine` | Live web search | Network | Rate limits | Cross-check sources |
| `memory_save`/`memory_load` | Durable memory | Persistent | Similarity drift | Verify content |
| `call_subordinate` | Delegate to agent | Scoped | Recursion cascade | Validate output |
| `a2a_chat` | Talk to remote agents | Network | Timeouts | Fallback |
| `scheduler` | Scheduled tasks | Persistent | Recursive tasks | Audit |
| `skills_tool` | Load skills | Read dir | Outdated skill | Reload |
| `notify_user` | Out-of-band notification | UI | None | Delivered |

## MCP tools

{{MCP_TOOLS_SECTION}}

## External surfaces

| Surface | Endpoint | Use |
|---------|----------|-----|
| {{SURFACE_1}} | {{ENDPOINT_1}} | {{USE_1}} |

## Environment notes

*Local configuration — NOT a capability list. Skills define HOW tools work; this file defines YOUR specifics.*

| Category | Notes |
|----------|-------|
| SSH hosts | {{SSH_HOSTS}} |
| Key paths | {{KEY_PATHS}} |
| API endpoints | {{API_ENDPOINTS}} |
| Device names | {{DEVICE_NAMES}} |

## Limits

| Limit | Value |
|-------|-------|
| Max subordinate depth | {{MAX_DEPTH}} |
| Max tool calls per binding | {{MAX_CALLS}} |
| Max tokens per binding | {{MAX_TOKENS}} |
| Max disk per binding | {{MAX_DISK_MB}} |

## Tool-use rules

- Prefer terminal and file tools over browser for simple tasks.
- Verify dependencies before running code.
- Do not invent tool names.
- Require explicit approval for destructive actions.

## Mesh index

- **Indexes:** `setup/`, `artifacts/`
- **Relationship:** Current capabilities ↔ how they were built, generated outputs
- **Rule:** When tool configuration changes, append old setup notes to `setup/`.

Last updated: {{DATE}}
