# STATE — {{PROJECT_NAME}} Research

## Status
{{READY_OR_BLOCKED}}

## Current question
{{RESEARCH_QUESTION}}

Example: `What is the current best practice for JWT-based authentication in stateless APIs, and what are the trade-offs vs session-based auth?`

## Hypothesis
{{HYPOTHESIS}}

Example: `JWT with short-lived access tokens (15 min) and refresh token rotation is the optimal pattern for stateless APIs. Session-based auth is better for web apps with server-side state.`

## Progress
- Sources reviewed: {{SOURCE_COUNT}}
- Confidence: {{CONFIDENCE_LEVEL}}
- Open threads: {{OPEN_THREADS}}
- Facts collected: {{FACT_COUNT}}
- Knowledge files: {{KNOWLEDGE_FILE_COUNT}}

Example:
- Sources reviewed: 23 (8 RFCs, 5 official docs, 7 blog posts, 3 GitHub repos)
- Confidence: 0.87 (high — multiple primary sources agree)
- Open threads: 2 (DPoP scope in OAuth 2.1; migration path for implicit flow)
- Facts collected: 47
- Knowledge files: 4

## Open threads
- {{OPEN_THREAD_1}}
- {{OPEN_THREAD_2}}

Example:
- How does OAuth 2.1 handle DPoP? Is it in scope or deferred to a separate spec?
- What is the recommended migration path for SPAs using implicit flow?

## Blockers
{{BLOCKERS_OR_NONE}}

Example:
- OAuth 2.1 draft is still evolving. Some sections may change before final publication.

Last updated: {{DATE}}
