# THREAT MODEL — {{PROJECT_NAME}}

## Assets
| Asset | Classification | Location | Impact if compromised |
|-------|---------------|----------|----------------------|
| {{ASSET_1}} | {{CLASSIFICATION_1}} | {{LOCATION_1}} | {{IMPACT_1}} |
| {{ASSET_2}} | {{CLASSIFICATION_2}} | {{LOCATION_2}} | {{IMPACT_2}} |

Example:
| Asset | Classification | Location | Impact if compromised |
|-------|---------------|----------|----------------------|
| User database | confidential | PostgreSQL (prod) | Data breach: PII, credential hashes |
| API signing keys | secret | secret manager (Vault) | API impersonation, unauthorized access |
| Session tokens | confidential | Redis (prod) | Account takeover for active sessions |
| Source code | internal | GitHub (private) | IP leak, attack surface disclosure |

## Adversaries
| Adversary | Motivation | Capability | Likelihood |
|-----------|-----------|-----------|------------|
| {{ADVERSARY_1}} | {{MOTIVATION_1}} | {{CAPABILITY_1}} | {{LIKELIHOOD_1}} |

Example:
| Adversary | Motivation | Capability | Likelihood |
|-----------|-----------|-----------|------------|
| Credential stuffer | Account takeover for spam/abuse | Automated botnet, credential lists | HIGH |
| Malicious insider | Data exfiltration | Legitimate access + intent | LOW |
| Supply chain attacker | Backdoor via dependency | NPM/PyPI package compromise | MEDIUM |

## Attack surfaces
| Surface | Exposure | Controls |
|---------|----------|----------|
| {{SURFACE_1}} | {{EXPOSURE_1}} | {{CONTROLS_1}} |

Example:
| Surface | Exposure | Controls |
|---------|----------|----------|
| Login endpoint | Public internet | Rate limiting, CAPTCHA after 5 attempts, account lockout |
| API endpoints | Public (auth required) | JWT validation, scope checks, input validation |
| Database | Internal network only | Network ACL, connection pooling, statement timeouts |
| Git repository | Private (org members) | 2FA required, branch protection, secret scanning |

## Mitigations
| Threat | Mitigation | Status | Last tested |
|--------|------------|--------|-------------|
| {{THREAT_1}} | {{MITIGATION_1}} | {{STATUS_1}} | {{LAST_TESTED_1}} |

Example:
| Threat | Mitigation | Status | Last tested |
|--------|------------|--------|-------------|
| Credential stuffing | Rate limit (5/15min), account lockout after 10, CAPTCHA | active | 2026-06-20 |
| SQL injection | Parameterized queries only, ORM enforcement | active | 2026-06-15 |
| Token theft | Short-lived tokens (15min), refresh rotation, reuse detection | active | 2026-06-22 |
| Supply chain attack | Dependency audit on install, `npm audit` in CI | active | 2026-06-25 |

## Methodology
This threat model follows a simplified STRIDE approach:
- **S**poofing: Can someone impersonate a user or service?
- **T**ampering: Can someone modify data in transit or at rest?
- **R**epudiation: Can someone deny an action they took?
- **I**nformation disclosure: Can someone access data they shouldn't?
- **D**enial of service: Can someone disrupt service availability?
- **E**levation of privilege: Can someone gain more access than intended?

Last updated: {{DATE}}
