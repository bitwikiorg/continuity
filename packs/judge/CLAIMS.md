# CLAIMS — {{PROJECT_NAME}}

## Claims under evaluation
| ID | Claim | Source | Status | Evidence linked |
|----|-------|--------|--------|-----------------|
| C1 | {{CLAIM_1}} | {{SOURCE_1}} | {{STATUS_1}} | E1, E3 |
| C2 | {{CLAIM_2}} | {{SOURCE_2}} | {{STATUS_2}} | E2 |
| C3 | {{CLAIM_3}} | {{SOURCE_3}} | {{STATUS_3}} | E4, E5 |

Example:
| ID | Claim | Source | Status | Evidence linked |
|----|-------|--------|--------|-----------------|
| C1 | JWT auth implementation is secure against token replay | PR #42 author | under-review | E1, E3 |
| C2 | Rate limiting prevents brute-force attacks on /auth/login | PR #42 author | under-review | E2 |
| C3 | Password hashing uses bcrypt with cost factor ≥ 12 | PR #42 author | verified | E4 |

## Claim states
| State | Meaning |
|-------|---------|
| `under-review` | Evidence being collected |
| `verified` | Evidence supports the claim |
| `refuted` | Evidence contradicts the claim |
| `insufficient` | Not enough evidence to determine |

Last updated: {{DATE}}
