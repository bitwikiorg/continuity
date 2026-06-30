# EVIDENCE — {{PROJECT_NAME}}

## Evidence collected
| ID | Supports | Type | Source | Confidence |
|----|----------|------|--------|------------|
| E1 | C1 | {{TYPE_1}} | {{SOURCE_1}} | {{CONFIDENCE_1}} |
| E2 | C2 | {{TYPE_2}} | {{SOURCE_2}} | {{CONFIDENCE_2}} |
| E3 | C1 | {{TYPE_3}} | {{SOURCE_3}} | {{CONFIDENCE_3}} |

Example:
| ID | Supports | Type | Source | Confidence |
|----|----------|------|--------|------------|
| E1 | C1 | code-inspection | `src/auth/tokens.py:45-72` | 0.85 |
| E2 | C2 | test-output | `pytest tests/test_rate_limit.py — 8/8 passed` | 0.90 |
| E3 | C1 | spec-doc | OAuth 2.0 BCP §4.2 | 0.95 |
| E4 | C3 | code-inspection | `src/auth/passwords.py:12` | 0.98 |
| E5 | C3 | test-output | `pytest tests/test_password.py — 5/5 passed` | 0.90 |

## Evidence types
| Type | Description |
|------|-------------|
| `code-inspection` | Direct review of source code |
| `test-output` | Automated test results |
| `spec-doc` | Reference to a specification or standard |
| `manual-test` | Manually executed test with documented steps |
| `log-analysis` | Analysis of runtime logs or metrics |
| `external-audit` | Third-party security audit or vulnerability report |
| `literature` | Published research or authoritative blog post |

## Notes
- Evidence must be verifiable. Include file paths, line numbers, or URLs.
- Note confidence level for each piece of evidence.
- Contradictory evidence is valid. Record both sides.
- If evidence is ambiguous, label it as such.

Last updated: {{DATE}}
