# STATE — {{PROJECT_NAME}} Backend

## Status
{{READY_OR_BLOCKED}}

## Services
| Service | Version | Status | Health check |
|---------|---------|--------|-------------|
| {{SERVICE_1}} | {{VERSION_1}} | {{STATUS_1}} | `GET /health` |
| {{SERVICE_2}} | {{VERSION_2}} | {{STATUS_2}} | `GET /health` |

Example:
| Service | Version | Status | Health check |
|---------|---------|--------|-------------|
| api-gateway | 2.4.1 | running | `GET /health` → 200 |
| worker-queue | 1.8.0 | running | `GET /health` → 200 |

## Database
| Engine | Version | Status | Connection pool |
|--------|---------|--------|-----------------|
| {{DB_ENGINE}} | {{DB_VERSION}} | {{DB_STATUS}} | {{POOL_SIZE}} |

Example:
| Engine | Version | Status | Connection pool |
|--------|---------|--------|-----------------|
| PostgreSQL | 16.2 | healthy | 20 connections |

## API surface
- Endpoints: {{ENDPOINT_COUNT}} (document: `/docs/openapi.yaml`)
- Auth: {{AUTH_METHOD}} (e.g., JWT bearer tokens, 15-min TTL, refresh at `/auth/refresh`)
- Rate limiting: {{RATE_LIMIT_STATUS}} (e.g., 100 req/min per token, 429 with Retry-After header)
- API version: {{API_VERSION}} (e.g., `v1`, versioned via URL prefix)

## Background jobs
| Job | Schedule | Last run | Status |
|-----|----------|----------|--------|
| {{JOB_1}} | {{JOB_1_SCHEDULE}} | {{JOB_1_LAST_RUN}} | {{JOB_1_STATUS}} |
| {{JOB_2}} | {{JOB_2_SCHEDULE}} | {{JOB_2_LAST_RUN}} | {{JOB_2_STATUS}} |

Example:
| Job | Schedule | Last run | Status |
|-----|----------|----------|--------|
| session-cleanup | every 1h | 2026-06-29T20:00Z | success |
| report-generator | daily 02:00 UTC | 2026-06-29T02:00Z | success |

## Environment
- Runtime: {{RUNTIME}} (e.g., Python 3.12 / Node 20 / Go 1.22)
- Framework: {{FRAMEWORK}} (e.g., FastAPI / Express / Gin)
- Deploy target: {{DEPLOY_TARGET}} (e.g., Docker / Kubernetes / bare metal)

## Blockers
{{BLOCKERS_OR_NONE}}

Last updated: {{DATE}}
