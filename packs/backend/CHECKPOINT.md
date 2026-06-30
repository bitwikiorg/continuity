# CHECKPOINT — {{PROJECT_NAME}} Backend

## Approval gates
Actions that require explicit human approval before proceeding:

- [ ] Database migrations (schema change, data migration, column rename/drop)
- [ ] Production deploys
- [ ] Auth/permission changes (role grants, scope expansion, token TTL changes)
- [ ] Secret rotation (API keys, DB passwords, signing keys)
- [ ] API breaking changes (removing endpoints, changing response shapes, changing status codes)
- [ ] Cron/job schedule changes (frequency, retry policy, timeout changes)
- [ ] Infrastructure changes (new service, port exposure, volume mounts)
- [ ] Dependency updates that touch security-sensitive packages (auth, crypto, database drivers)

## Rule
If an action matches any gate, STOP and request approval. Do not proceed on assumption.

## Approval format
When requesting approval, provide:
```
Action: <what you want to do>
Reason: <why it's needed>
Impact: <what breaks if it goes wrong>
Rollback: <how to undo it>
Testing: <what tests confirm it's safe>
```

## Post-approval
After approval is granted:
1. Execute the action.
2. Verify the result.
3. Update STATE.md with the new reality.
4. Log the action in your event log or commit message.

Last updated: {{DATE}}
