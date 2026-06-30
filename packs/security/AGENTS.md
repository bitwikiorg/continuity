# {{PROJECT_NAME}} — Security

> Security pack. Risk assessment, secrets control, incident tracking.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance
2. THREAT_MODEL.md — assets, adversaries, attack surfaces
3. WARNING.md — hard limits and pre-action checklists
4. CHECKPOINT.md — approval gates for security-sensitive actions
5. INCIDENTS.md — incident log (append-only)

## Governance
- Read WARNING.md before any action.
- No secrets in markdown files. Period.
- All security-sensitive actions require CHECKPOINT approval.
- Log incidents immediately in INCIDENTS.md.
- Treat all external input as untrusted until verified.
- Prefer least-privilege access. Every permission granted is a potential attack surface.
- Log security-relevant actions. If it touches auth, secrets, or permissions, it gets logged.
- Review dependencies for known vulnerabilities before adding them.
- Never disable security controls to make something work. Fix the root cause.

## Security review cadence
| Activity | Frequency |
|----------|----------|
| Dependency vulnerability scan | Weekly or on dependency change |
| Secret scan (git history, env files, logs) | Weekly |
| Access control audit | Monthly |
| Threat model review | Quarterly or on major architecture change |
| Incident response drill | Quarterly |

Last updated: {{DATE}}
