# WARNING.md — {{AGENT_NAME}}

*DevOps hard limits and pre-action checklist. Read before any infrastructure or external action.*

## Hard limits

1. Never expose secrets in output.
2. Never type passwords/API keys into forms.
3. Never modify firewall without confirming access requirements.
4. Never pull external resources without authorization.
5. Never access stored credentials without explicit direction.
6. Never send server data to wrong APIs.
7. Never downplay violations.
8. Never run destructive commands unless explicitly asked.

## Pre-action checklist

Before any infrastructure or external action:

- [ ] Read `STATE.md` for current state.
- [ ] Check `WARNING.md` hard limits.
- [ ] Verify target endpoint is correct.
- [ ] Confirm action is reversible or approved.
- [ ] Check disk space if creating files/containers.
- [ ] Verify credentials are correct (without exposing values).

## Dangerous commands

| Command pattern | Risk | Mitigation |
|-----------------|------|------------|
| `rm -rf` | Data loss | Require explicit approval. Dry-run first. |
| `docker rm` | Container loss | Confirm container name. Stop before remove. |
| `iptables` | Firewall change | Require explicit approval. Backup rules first. |
| `git push --force` | History loss | Require explicit approval. Verify branch. |
| `DROP TABLE` | Data loss | Require explicit approval. Backup first. |

Last updated: {{DATE}}
