# RUNBOOK — {{PROJECT_NAME}}

## Procedures
| Procedure | Trigger | Steps | Estimated time |
|-----------|---------|-------|----------------|
| {{PROCEDURE_1}} | {{TRIGGER_1}} | {{STEPS_1}} | {{ETA_1}} |
| {{PROCEDURE_2}} | {{TRIGGER_2}} | {{STEPS_2}} | {{ETA_2}} |

Example:
| Procedure | Trigger | Estimated time |
|-----------|---------|----------------|
| Service deploy | New version ready | 10 min |
| Database failover | Primary DB unreachable | 5 min |
| Rollback deploy | Health check failing post-deploy | 3 min |
| Scale up service | CPU > 80% for 5 min | 2 min |
| Secret rotation | Scheduled or after incident | 15 min |

## Detailed procedures

### Service deploy
1. Verify new image is in registry: `docker pull {{REGISTRY}}/{{SERVICE}}:{{VERSION}}`
2. Run pre-deploy tests: `{{TEST_COMMAND}}`
3. Take snapshot/backup of current state
4. Deploy: `docker-compose up -d {{SERVICE}}` or `kubectl rollout restart deployment/{{SERVICE}}`
5. Wait for health check: `curl http://{{SERVICE}}/health` until 200 or timeout (60s)
6. Monitor error rate for 10 minutes
7. If error rate > 1%: execute rollback procedure
8. Update INFRASTRUCTURE.md with new version
9. Update SNAPSHOT.md

### Rollback deploy
1. Identify last known good version from SNAPSHOT.md
2. Deploy previous image: `docker-compose up -d {{SERVICE}}:{{PREV_VERSION}}`
3. Wait for health check
4. Verify error rate returns to baseline
5. Record incident in event log
6. Investigate root cause before re-attempting deploy

### Database failover
1. Confirm primary is unreachable: `pg_isready -h {{PRIMARY_HOST}}`
2. Promote replica: `pg_ctl promote -D {{REPLICA_DATA_DIR}}`
3. Update connection strings in config/env
4. Restart affected services: `docker-compose restart api-gateway worker-queue`
5. Verify services can connect to new primary
6. Update INFRASTRUCTURE.md with new primary host
7. Post-incident: investigate primary failure cause

## Emergency contacts
| Contact | Role | Reach |
|---------|------|-------|
| {{CONTACT_1}} | {{ROLE_1}} | {{REACH_1}} |
| {{CONTACT_2}} | {{ROLE_2}} | {{REACH_2}} |

Example:
| Contact | Role | Reach |
|---------|------|-------|
| on-call engineer | primary responder | PagerDuty: #on-call |
| DBA | database specialist | Slack: #db-oncall |
| security team | security incidents | Slack: #security-incident |

## Maintenance windows
| Window | Day | Time | Services affected |
|--------|------|------|-------------------|
| {{WINDOW_1}} | {{DAY_1}} | {{TIME_1}} | {{AFFECTED_1}} |

Example:
| Window | Day | Time | Services affected |
|--------|------|------|-------------------|
| Weekly deploy | Sunday | 02:00–04:00 UTC | All services (brief downtime) |
| DB maintenance | Saturday | 01:00–03:00 UTC | Database (read-only mode) |

Last updated: {{DATE}}
