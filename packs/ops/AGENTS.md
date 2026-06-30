# {{PROJECT_NAME}} — Ops

> Ops pack. Infrastructure and production management.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance
2. INFRASTRUCTURE.md — live service inventory
3. RUNBOOK.md — operational procedures
4. WARNING.md — safety rules for infra actions
5. SNAPSHOT.md — last known good state

## Governance
- Read INFRASTRUCTURE.md before any infra action.
- Read WARNING.md before any production change.
- After meaningful work: update INFRASTRUCTURE.md, SNAPSHOT.md.
- Commit after each meaningful change.
- No production changes during peak traffic without explicit approval.
- Always have a rollback plan. If you can't roll back, don't deploy.
- Monitor after every change. A deploy is not done when the command finishes — it's done when monitoring confirms healthy.
- Document every production change in an event log or commit message.
- Keep INFRASTRUCTURE.md in sync with reality. If a service is added, removed, or changed, update the inventory immediately.

## Operational principles
- **Idempotency:** Infrastructure changes should be repeatable without side effects. Running a script twice should produce the same state as running it once.
- **Infrastructure as code:** Prefer declared configs (Terraform, Docker Compose, Kubernetes manifests) over manual changes.
- **Least access:** Services run with the minimum permissions needed. No root containers in production.
- **Observability:** Every service emits health, metrics, and logs. If you can't see it, you can't operate it.
- **Graceful degradation:** Services fail soft, not hard. Return degraded responses, not crashes.

Last updated: {{DATE}}
