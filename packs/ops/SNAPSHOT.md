# SNAPSHOT — {{PROJECT_NAME}} Ops

## Last known good
- Timestamp: {{TIMESTAMP}}
- Status: {{STATUS}}
- Services healthy: {{HEALTHY_SERVICES}}
- Last deploy: {{LAST_DEPLOY}}
- Deployed by: {{DEPLOYED_BY}}
- Deploy commit: {{DEPLOY_COMMIT}}

Example:
- Timestamp: 2026-06-29T18:30:00Z
- Status: READY
- Services healthy: 4/4
- Last deploy: 2026-06-29T17:00:00Z
- Deployed by: ci-bot
- Deploy commit: a1b2c3d

## Service versions at last good state
| Service | Version | Image |
|---------|---------|-------|
| {{SERVICE_1}} | {{VERSION_1}} | {{IMAGE_1}} |
| {{SERVICE_2}} | {{VERSION_2}} | {{IMAGE_2}} |

Example:
| Service | Version | Image |
|---------|---------|-------|
| api-gateway | 2.4.1 | ghcr.io/org/api-gateway:2.4.1 |
| worker-queue | 1.8.0 | ghcr.io/org/worker-queue:1.8.0 |
| postgres | 16.2 | postgres:16.2 |
| redis | 7.2 | redis:7.2-alpine |

## Restoration notes
{{RESTORATION_NOTES}}

Example:
- To restore: `docker-compose up -d` with the versions above.
- Database backup: `s3://backups/pg-snapshot-2026-06-29.sql`
- Config: see `infra/prod/docker-compose.yml` at commit a1b2c3d.
- If restoring from scratch: pull images, restore DB from backup, run migrations, deploy.

## Restoration command
```bash
# Restore to this snapshot
git checkout {{DEPLOY_COMMIT}}
docker-compose -f infra/prod/docker-compose.yml up -d
# Wait for health checks
for svc in api-gateway worker-queue; do
  until curl -sf http://$svc/health; do sleep 2; done
done
# Restore database if needed
pg_restore -h db.internal -U postgres -d appdb < /backups/pg-snapshot-{{DATE}}.sql
```

Last updated: {{DATE}}
