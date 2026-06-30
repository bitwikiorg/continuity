# KNOWLEDGE — {{PROJECT_NAME}} Research

## Structured knowledge
| Topic | Summary | Source | Confidence |
|-------|---------|--------|------------|
| {{TOPIC_1}} | {{SUMMARY_1}} | {{SOURCE_1}} | {{CONFIDENCE_1}} |
| {{TOPIC_2}} | {{SUMMARY_2}} | {{SOURCE_2}} | {{CONFIDENCE_2}} |

Example:
| Topic | Summary | Source | Confidence |
|-------|---------|--------|------------|
| OAuth 2.1 | Merges OAuth 2.0 RFCs into single spec; drops implicit flow, requires PKCE | RFC 9720 (draft) | 0.95 |
| Token rotation | Refresh token rotation reduces replay window; slide-window recommended for SPAs | OAuth 2.0 BCP | 0.88 |

## Notes
- Curated reference docs live in `knowledge/` directory.
- Timeless information, not chronological logs.
- Each entry should be self-contained — a reader should understand it without external context.
- If a topic has multiple sub-topics, create a separate file in `knowledge/` and link it here.
- Review quarterly. If a fact has drifted, update it and note the change.

## Knowledge file structure
For topics that need deeper treatment, create files in `knowledge/`:
```
knowledge/
├── oauth-2-1-overview.md      # topic deep-dive
├── token-rotation-patterns.md  # sub-topic
└── pkce-flow-analysis.md       # sub-topic
```

Each knowledge file should have:
- A clear title
- Last reviewed date
- Sources list
- Confidence assessment

Last updated: {{DATE}}
