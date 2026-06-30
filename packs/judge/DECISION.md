# DECISION — {{PROJECT_NAME}}

## Verdict
{{VERDICT}}

Example: `CONDITIONAL — Proceed with caveats. C1 and C2 have gaps that must be remediated within 7 days.`

## Rationale
{{RATIONALE}}

Example:
- C3 (bcrypt cost factor) is verified and passes.
- C1 (token replay defense) is partially supported. Refresh token rotation is implemented, but reuse detection is missing. Without reuse detection, stolen refresh tokens can be used until expiry.
- C2 (rate limiting) is implemented but uses in-memory storage. This will not work behind a load balancer. Must migrate to Redis-based rate limiting.
- Overall: the implementation is sound but has two gaps that create security risk under production conditions.

## Conditions
{{CONDITIONS_OR_NONE}}

Example:
1. Add refresh token reuse detection within 7 days (tracks `jti` claims, revokes token family on reuse).
2. Migrate rate limiting to Redis-based store within 14 days.
3. Add integration tests for token rotation and rate limiting edge cases.

## Dissenting opinions
{{DISSENT_OR_NONE}}

Example:
- Reviewer B argues C1 should be `FAIL` not `CONDITIONAL` because token replay is a critical security issue and the current implementation has a real attack window. Overruled because the 7-day remediation timeline is enforceable and the attack requires an active token thief.

## Decision date
{{DATE}}

Last updated: {{DATE}}
