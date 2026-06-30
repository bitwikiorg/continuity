# INCIDENTS — {{PROJECT_NAME}}

## Log (append-only)
| Date | Incident | Severity | Response | Status | Root cause |
|------|----------|----------|----------|--------|------------|
| {{DATE_1}} | {{INCIDENT_1}} | {{SEVERITY_1}} | {{RESPONSE_1}} | {{STATUS_1}} | {{ROOT_CAUSE_1}} |

Example:
| Date | Incident | Severity | Response | Status | Root cause |
|------|----------|----------|----------|--------|------------|
| 2026-06-15 | API key found in git commit history | HIGH | Key rotated, commit squashed, git history rewritten | resolved | `.env` not gitignored initially |
| 2026-06-20 | Rate limiter bypass via header manipulation | MEDIUM | Added server-side rate limit enforcement; deployed patch | resolved | Client-side rate limit trusted without server validation |
| 2026-06-25 | Failed login spike from single IP | LOW | IP temporarily blocked; monitoring increased | monitoring | Credential stuffing attempt — no accounts compromised |

## Severity levels
| Level | Meaning | Response time |
|-------|---------|---------------|
| `CRITICAL` | Active exploit, data breach, or service compromise | Immediate (< 1 hour) |
| `HIGH` | Security vulnerability with real exploitation potential | Same day (< 8 hours) |
| `MEDIUM` | Vulnerability with mitigating controls | Within 3 days |
| `LOW` | Minor issue, informational, or blocked attack | Within 7 days |

## Rules
- **Append only.** Never modify past entries. If an incident is reopened, add a new row.
- Record the root cause once determined. "Unknown" is valid until investigated.
- Status values: `open`, `investigating`, `contained`, `resolved`, `monitoring`.
- Include the date the incident was detected, not when it occurred (occurrence time may be unknown).

<!-- Append new incidents. Never modify past entries. -->

Last updated: {{DATE}}
