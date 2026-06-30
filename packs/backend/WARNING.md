# WARNING — {{PROJECT_NAME}} Backend

## Hard limits
- **No destructive database commands without CHECKPOINT approval.** This includes `DROP TABLE`, `TRUNCATE`, `DELETE` without `WHERE`, and `ALTER TABLE` on production.
- **No secrets in markdown files.** Use environment variables or secret managers. Never paste API keys, passwords, or tokens into any file.
- **No production deploys without explicit approval.** Staging is fine; production is gated.
- **No schema migrations without backup + rollback plan.** Every `up` migration must have a corresponding `down`.
- **No raw SQL from user input.** Use parameterized queries or an ORM. SQL injection is a hard stop.
- **No unbounded queries.** Every `SELECT` must have a `LIMIT`. Use cursor pagination for large datasets.

## Pre-action checklist
Run through this before any backend change that touches data, config, or production:

- [ ] Backup exists? (database snapshot, config copy, or git stash)
- [ ] Rollback plan documented? (how to undo this change in < 5 minutes)
- [ ] Tests passing? (unit + integration, especially for the changed code path)
- [ ] Migration tested on staging? (never run a migration on prod first)
- [ ] Logs enabled? (structured JSON logging with request IDs)
- [ ] Monitoring in place? (alert on error rate spike or latency regression)

## Common failure modes
| Failure | Cause | Prevention |
|---------|-------|------------|
| Data loss | Unintended `DELETE` or `DROP` | Always use `WHERE` clauses; require CHECKPOINT for destructive ops |
| Migration lock | Long-running migration blocks reads | Run during low-traffic window; use `LOCK=NONE` where supported |
| Connection exhaustion | Pool too small or queries too slow | Set pool limits; add statement timeouts; monitor pool metrics |
| Secret leak | Secret committed to git or logged | Use `.env` files (gitignored); never log auth headers or tokens |
| Cascade failure | One service down brings down others | Implement circuit breakers, timeouts, and graceful degradation |

Last updated: {{DATE}}
