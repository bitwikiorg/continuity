# STATE — {{PROJECT_NAME}}

## Status
{{READY_OR_BLOCKED}}

## Current branch
{{BRANCH}}

## Environment
- Language: {{LANGUAGE}}
- Framework: {{FRAMEWORK}}
- Runtime version: {{RUNTIME_VERSION}}
- Test command: {{TEST_COMMAND}}
- Lint command: {{LINT_COMMAND}}
- Build command: {{BUILD_COMMAND}}

Example:
- Language: Python 3.12
- Framework: FastAPI 0.111
- Runtime version: Python 3.12.4
- Test command: `pytest --cov`
- Lint command: `ruff check .`
- Build command: `docker build -t {{PROJECT_NAME}} .`

## What is true now
{{CURRENT_REALITY}}

Example:
- Authentication is implemented and tested.
- User model uses UUID primary keys.
- API has 12 endpoints, all documented in OpenAPI spec.
- Database migrations are up to date (latest: 004_add_user_roles).
- Rate limiting is active on auth endpoints.
- Tests: 42 passed, 0 failed.
- No known bugs.

## Blockers
{{BLOCKERS_OR_NONE}}

Example:
- None. Ready for next feature.

## Drift
<!-- Record any discrepancy between this file and reality. Investigate before correcting. -->

Last updated: {{DATE}}
