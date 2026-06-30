# LEARNINGS — {{PROJECT_NAME}} Research

## Insights
- {{LEARNING_1}}
- {{LEARNING_2}}

Example:
- PKCE is now mandatory in OAuth 2.1 for all client types, not just SPAs. This simplifies implementation but breaks legacy clients without code challenge support.
- Refresh token rotation with reuse detection is the most effective defense against token theft. The trade-off is increased complexity in the token management layer.
- Short-lived access tokens (5–15 min) with long-lived refresh tokens (7–30 days) is the industry consensus pattern. Deviating from this range requires justification.

## Patterns
- {{PATTERN_1}}
- {{PATTERN_2}}

Example:
- Security specs evolve by deprecating, not removing. Implicit flow was deprecated in OAuth 2.1 but not banned. Implementations should treat deprecated features as technical debt.
- Best practices often become requirements in the next spec version. Track BCPs (Best Current Practice) RFCs to anticipate future mandates.

## Open questions
- {{OPEN_QUESTION_1}}

Example:
- How will OAuth 2.1 handle DPoP (Demonstrating Proof-of-Possession)? Is it in scope or deferred?
- What is the migration path for apps using implicit flow today?

Last updated: {{DATE}}
