# {{PROJECT_NAME}} — Backend

> Backend pack. APIs, databases, auth, jobs.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance
2. STATE.md — current backend status
3. TODO.md — active backend tasks
4. WARNING.md — safety rules for infra and data
5. CHECKPOINT.md — approval gates for migrations and deploys

## Governance
- Read STATE.md before acting.
- Never run destructive database commands without CHECKPOINT approval.
- After meaningful work: update STATE.md, TODO.md.
- Commit after each meaningful change.
- Keep API contracts documented. Breaking changes require CHECKPOINT approval.
- Monitor query performance. Flag any query that takes > 200ms as a candidate for optimization.
- Database migrations must be reversible. Always include a `down` migration.
- Secrets belong in environment variables or secret managers — never in code, comments, or markdown.
- Log structured data (JSON), not free-form text. Include request IDs for tracing.

## Backend-specific conventions
- API versioning: use URL-based versioning (e.g., `/api/v1/...`) or header-based. Pick one and document it.
- Error responses: return consistent JSON error envelopes (`{ "error": { "code": "...", "message": "..." } }`).
- Pagination: default to cursor-based for large datasets. Limit max page size to 100.
- Authentication: prefer bearer tokens or session cookies. Document the auth flow.
- Background jobs: idempotent, retryable, with exponential backoff. Log job start, success, and failure.
- Database: use connection pooling. Set statement timeouts. Never run raw user input in queries.

Last updated: {{DATE}}
