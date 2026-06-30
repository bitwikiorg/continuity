# MEMORY — {{PROJECT_NAME}} Research

## Durable facts
| Fact | Source | Confidence | Retrieved |
|------|--------|------------|----------|
| {{FACT_1}} | {{SOURCE_1}} | {{CONFIDENCE_1}} | {{DATE_1}} |
| {{FACT_2}} | {{SOURCE_2}} | {{CONFIDENCE_2}} | {{DATE_2}} |

Example:
| Fact | Source | Confidence | Retrieved |
|------|--------|------------|----------|
| OAuth 2.1 draft merges 8+ RFCs into single spec | IETF draft-ietf-oauth-v2.1 | 0.95 | 2026-06-15 |
| PKCE is required for all grant types in OAuth 2.1 | IETF draft section 2.1 | 0.92 | 2026-06-15 |
| Implicit flow is deprecated in OAuth 2.1 | IETF draft section 3.1.1 | 0.90 | 2026-06-15 |

## Memory file structure
For large fact sets, create files in `memory/` directory:
```
memory/
├── oauth-facts.md          # facts about OAuth
├── token-security-facts.md # facts about token security
└── api-gateway-facts.md    # facts about API gateways
```

## Rules
- Append new facts to `memory/` directory files.
- Do not duplicate entries. Update in place.
- If confidence < 0.9, label as assumption.
- Record the retrieval date for all web-sourced facts.
- If a fact is superseded, update it and add a `corrected` note with the date.
- Never delete a fact. Mark it as `superseded` and link to the replacement.

## Correction format
When correcting a fact:
```
~~Old fact text~~ (corrected {{DATE}}: {{REASON}})
New fact text (confidence: {{NEW_CONFIDENCE}})
```

Last updated: {{DATE}}
