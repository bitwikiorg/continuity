# STRUCTURE — {{PROJECT_NAME}} Docs

## Outline
1. {{SECTION_1}} — {{SECTION_1_DESC}}
2. {{SECTION_2}} — {{SECTION_2_DESC}}
3. {{SECTION_3}} — {{SECTION_3_DESC}}

Example:
1. **Getting Started** — Installation, quickstart, first API call
2. **Architecture** — System overview, component diagram, data flow
3. **API Reference** — Endpoint docs, request/response schemas, error codes
4. **Guides** — Auth guide, pagination guide, error handling guide
5. **Migration** — Version migration guides, breaking change changelog
6. **Contributing** — Dev setup, coding standards, PR process

## Audience
- Primary: {{PRIMARY_AUDIENCE}}
- Secondary: {{SECONDARY_AUDIENCE}}

Example:
- Primary: Backend developers integrating the API (knows REST, JSON, auth concepts)
- Secondary: DevOps engineers deploying the service (knows Docker, networking, monitoring)

## Doc types
| Type | Purpose | Location |
|------|---------|----------|
| README | Project overview, quickstart | `README.md` |
| API reference | Endpoint-by-endpoint docs | `docs/api/` |
| Guides | Task-oriented walkthroughs | `docs/guides/` |
| Architecture | System design and decisions | `docs/architecture.md` |
| Changelog | Version history | `CHANGELOG.md` |
| Contributing | How to contribute | `CONTRIBUTING.md` |

## File layout
```
README.md               # project overview, quickstart
docs/
├── api/                # API reference
│   ├── auth.md
│   ├── users.md
│   └── errors.md
├── guides/             # how-to guides
│   ├── authentication.md
│   ├── pagination.md
│   └── rate-limiting.md
├── architecture.md     # system design
└── migration/          # version migration guides
    ├── v1-to-v2.md
    └── v2-to-v3.md
CHANGELOG.md
CONTRIBUTING.md
```

Last updated: {{DATE}}
