# RUBRIC — {{PROJECT_NAME}}

## Criteria
| Criterion | Weight | Description | Threshold |
|-----------|--------|-------------|----------|
| {{CRITERION_1}} | {{WEIGHT_1}} | {{DESC_1}} | {{THRESHOLD_1}} |
| {{CRITERION_2}} | {{WEIGHT_2}} | {{DESC_2}} | {{THRESHOLD_2}} |
| {{CRITERION_3}} | {{WEIGHT_3}} | {{DESC_3}} | {{THRESHOLD_3}} |

Example (for a security review):
| Criterion | Weight | Description | Threshold |
|-----------|--------|-------------|----------|
| Authentication security | 30% | Token management, password hashing, session handling | All claims verified, no HIGH severity risks open |
| Input validation | 20% | All user inputs validated and sanitized | All API endpoints have schema validation; no raw SQL |
| Error handling | 15% | Errors caught, logged, and returned consistently | No silent catches; structured error envelopes |
| Test coverage | 20% | Critical paths tested (unit + integration) | ≥ 80% coverage on auth module; all critical paths tested |
| Documentation | 15% | API documented, security decisions documented | OpenAPI spec complete; security notes in README |

## Scoring
- **Pass:** All criteria met at threshold. No CRITICAL risks. No HIGH risks without mitigation.
- **Conditional:** Minor gaps in non-critical criteria. All CRITICAL risks mitigated. Remediation timeline required.
- **Fail:** Any critical criterion not met. Unmitigated CRITICAL risks. Insufficient evidence for critical claims.

## Evaluation notes
- Weight determines relative importance. Higher weight criteria can veto a pass decision.
- Threshold defines the minimum acceptable evidence quality and risk level.
- A criterion with weight > 25% that fails automatically results in a FAIL verdict.
- Document the evaluation reasoning, not just the score.

Last updated: {{DATE}}
