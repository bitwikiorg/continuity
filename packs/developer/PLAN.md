# PLAN — {{PROJECT_NAME}}

## Goal
{{GOAL}}

Example: `Add user authentication with JWT tokens, session management, and role-based access control.`

## Steps
1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

Example:
1. Set up User model with password hashing (bcrypt, cost factor 12)
2. Implement `/auth/register` and `/auth/login` endpoints with input validation
3. Add JWT middleware for protected routes (15-min access token, 7-day refresh token)
4. Implement role-based access control (admin, user, guest)
5. Write integration tests for all auth flows
6. Add rate limiting to auth endpoints (5 attempts per 15 minutes)

## Risks
- **{{RISK_1}}**: {{RISK_1_MITIGATION}}
- **{{RISK_2}}**: {{RISK_2_MITIGATION}}

Example:
- **Password storage vulnerability**: Use bcrypt with cost factor ≥ 12. Never store plaintext. Audit hashing on every write.
- **Token replay attacks**: Short-lived access tokens (15 min). Rotate refresh tokens on use. Add `jti` claim for revocation.
- **Brute force on login**: Rate limit (5 attempts/15 min). Exponential backoff. Lock account after 10 failed attempts.

## Dependencies
- {{DEPENDENCY_1}}

Example:
- `bcrypt` package (>= 4.0)
- `python-jose` for JWT encoding/decoding
- Redis for rate limiting token bucket

## Definition of done
- [ ] All steps completed
- [ ] Tests passing (unit + integration)
- [ ] Documentation updated
- [ ] No linting errors
- [ ] Code reviewed

Last updated: {{DATE}}
