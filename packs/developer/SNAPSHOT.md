# SNAPSHOT — {{PROJECT_NAME}}

## Last known good
- Timestamp: {{TIMESTAMP}}
- Branch: {{BRANCH}}
- Status: {{STATUS}}
- Last commit: {{COMMIT_HASH}}
- Tests: {{TEST_STATUS}} (e.g., 42 passed, 0 failed)
- Lint: {{LINT_STATUS}} (e.g., clean / 3 warnings)

Example:
- Timestamp: 2026-06-29T18:30:00Z
- Branch: feature/auth
- Status: READY
- Last commit: a1b2c3d
- Tests: 42 passed, 0 failed
- Lint: clean

## Restoration notes
{{RESTORATION_NOTES}}

Example:
- After checkout, run `npm install` then `npm test` to verify environment.
- Database seed script: `scripts/seed-dev-db.sh`
- Environment file: copy `.env.example` to `.env` and fill in values.
- If tests fail after restore, check for missing environment variables.

## Restoration command
```bash
# Restore to this snapshot
git checkout {{COMMIT_HASH}}
{{INSTALL_COMMAND}}  # e.g., npm install / pip install -r requirements.txt
{{TEST_COMMAND}}     # e.g., npm test / pytest
```

Last updated: {{DATE}}
