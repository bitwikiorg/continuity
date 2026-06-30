# INFRASTRUCTURE — {{PROJECT_NAME}}

## Services
| Service | Host | Port | Status | Version | Health check |
|---------|------|------|--------|---------|-------------|
| {{SERVICE_1}} | {{HOST_1}} | {{PORT_1}} | {{STATUS_1}} | {{VERSION_1}} | {{HEALTH_1}} |
| {{SERVICE_2}} | {{HOST_2}} | {{PORT_2}} | {{STATUS_2}} | {{VERSION_2}} | {{HEALTH_2}} |

Example:
| Service | Host | Port | Status | Version | Health check |
|---------|------|------|--------|---------|-------------|
| api-gateway | api.internal | 8080 | running | 2.4.1 | `GET /health` → 200 |
| postgres | db.internal | 5432 | running | 16.2 | TCP check → OK |
| redis | cache.internal | 6379 | running | 7.2 | `PING` → PONG |
| nginx | proxy.internal | 80/443 | running | 1.25 | `GET /` → 200 |

## Networks
| Network | Type | Scope | Services |
|---------|------|-------|----------|
| {{NETWORK_1}} | {{TYPE_1}} | {{SCOPE_1}} | {{SERVICES_1}} |

Example:
| Network | Type | Scope | Services |
|---------|------|-------|----------|
| frontend-net | bridge | internal | nginx, api-gateway |
| backend-net | bridge | internal | api-gateway, postgres, redis |
| public | bridge | external | nginx (ports 80, 443) |

## Storage
| Volume | Mount | Size | Usage % | Backup |
|--------|-------|------|---------|--------|
| {{VOLUME_1}} | {{MOUNT_1}} | {{SIZE_1}} | {{USAGE_1}} | {{BACKUP_1}} |

Example:
| Volume | Mount | Size | Usage % | Backup |
|--------|-------|------|---------|--------|
| pg-data | /var/lib/postgresql/data | 100 GB | 42% | nightly snapshot |
| redis-data | /data | 10 GB | 15% | none (ephemeral) |
| uploads | /app/uploads | 50 GB | 68% | weekly rsync to S3 |

## Compute
| Resource | Capacity | Current usage | Alert threshold |
|----------|----------|---------------|-----------------|
| CPU | {{CPU_CAPACITY}} | {{CPU_USAGE}} | 80% |
| Memory | {{MEM_CAPACITY}} | {{MEM_USAGE}} | 85% |
| Disk | {{DISK_CAPACITY}} | {{DISK_USAGE}} | 80% |

Example:
| Resource | Capacity | Current usage | Alert threshold |
|----------|----------|---------------|-----------------|
| CPU | 8 vCPU | 3.2 vCPU (40%) | 80% |
| Memory | 32 GB | 14 GB (44%) | 85% |
| Disk | 200 GB | 85 GB (42%) | 80% |

## Environment
- Orchestrator: {{ORCHESTRATOR}} (e.g., Docker Compose / Kubernetes / systemd)
- Registry: {{REGISTRY}} (e.g., ghcr.io / Docker Hub / ECR)
- Secret manager: {{SECRET_MANAGER}} (e.g., Vault / AWS Secrets Manager / .env files)
- Monitoring: {{MONITORING_STACK}} (e.g., Prometheus + Grafana / Datadog / CloudWatch)
- Logging: {{LOGGING_STACK}} (e.g., ELK / Loki + Grafana / CloudWatch Logs)
- CI/CD: {{CICD}} (e.g., GitHub Actions / GitLab CI / Jenkins)

Last updated: {{DATE}}
