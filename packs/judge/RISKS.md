# RISKS — {{PROJECT_NAME}}

## Identified risks
| Risk | Severity | Likelihood | Mitigation | Owner |
|------|----------|------------|------------|-------|
| {{RISK_1}} | {{SEVERITY_1}} | {{LIKELIHOOD_1}} | {{MITIGATION_1}} | {{OWNER_1}} |
| {{RISK_2}} | {{SEVERITY_2}} | {{LIKELIHOOD_2}} | {{MITIGATION_2}} | {{OWNER_2}} |

Example:
| Risk | Severity | Likelihood | Mitigation | Owner |
|------|----------|------------|------------|-------|
| Token replay during 7-day remediation window | HIGH | LOW | Shorten token TTL to 5 min; monitor for anomalous refresh patterns | Auth team |
| Rate limiter fails behind load balancer | MEDIUM | HIGH | Deploy Redis rate limiter before enabling load balancing | Infra team |
| Refresh token rotation race condition | HIGH | MEDIUM | Add database-level locking on token rotation | Auth team |

## Severity scale
| Level | Meaning |
|-------|---------|
| `CRITICAL` | Data breach, service outage, or security exploit |
| `HIGH` | Significant security or reliability impact |
| `MEDIUM` | Moderate impact, recoverable |
| `LOW` | Minor impact, cosmetic or convenience issue |

## Likelihood scale
| Level | Meaning |
|-------|---------|
| `HIGH` | Expected to occur under normal conditions |
| `MEDIUM` | Possible under specific conditions |
| `LOW` | Unlikely but possible |

## Notes
- Record risks even for `PASS` decisions. No system is risk-free.
- Each risk must have a mitigation, even if the mitigation is "monitor and reassess."
- Assign an owner. Unowned risks are unmanaged risks.

Last updated: {{DATE}}
