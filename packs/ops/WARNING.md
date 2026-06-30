# WARNING — {{PROJECT_NAME}} Ops

## Hard limits
- **No production changes without CHECKPOINT approval.** Staging is fine; production is gated.
- **No destructive infra actions without backup + approval.** This includes deleting volumes, dropping databases, removing containers, and modifying network rules.
- **No secret exposure in logs or artifacts.** Never log credentials, tokens, or connection strings with passwords.
- **No network changes without rollback plan.** Every network change must have a documented way to revert in < 5 minutes.
- **No deploys during peak traffic.** Use maintenance windows or low-traffic periods.
- **No unbounded resource consumption.** Set CPU, memory, and disk limits on all containers.
- **No running as root in production.** Use least-privilege users.

## Pre-action checklist
Run through this before any infrastructure change that touches production:

- [ ] Backup exists? (database snapshot, volume snapshot, config copy)
- [ ] Rollback plan documented? (how to undo this change in < 5 minutes)
- [ ] Impact assessed? (which services are affected, which users will notice)
- [ ] Maintenance window confirmed? (low-traffic period scheduled)
- [ ] Monitoring in place? (can you observe the effect of the change)
- [ ] Communication sent? (stakeholders aware of potential brief disruption)
- [ ] Runbook updated? (procedure documented for future reference)

## Common infra failure modes
| Failure | Cause | Prevention |
|---------|-------|------------|
| Deploy breaks production | Untested image promoted to prod | Always test on staging first; use canary deploys |
| Volume full | Logs or data growing without limits | Set disk quotas; monitor disk usage; configure log rotation |
| Network split | Misconfigured firewall or network policy | Test network changes on staging; have rollback commands ready |
| Cascading failure | One service down causes timeout cascades | Set circuit breakers, timeouts, and bulkheads |
| Secret rotation breaks auth | New secret not propagated to all services | Rotate in maintenance window; verify all services after rotation |
| Container OOM | No memory limits set | Set memory limits; monitor memory usage; add alerts at 85% |

Last updated: {{DATE}}
