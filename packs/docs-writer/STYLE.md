# STYLE — {{PROJECT_NAME}} Docs

## Voice and tone
- Voice: {{VOICE}}
- Tense: {{TENSE}}
- Max sentence length: {{MAX_SENTENCE_LENGTH}}
- Code examples: {{CODE_EXAMPLE_STYLE}}

Example:
- Voice: Active, direct, professional. "Send a POST request to /auth/login." not "A POST request should be sent to /auth/login."
- Tense: Present for facts ("The API returns..."). Past for history ("In v1.0, the API supported...").
- Max sentence length: 25 words. If longer, split.
- Code examples: Full snippets with imports, not fragments. Runnable as-is.

## Formatting
- Headings: sentence case (`## Getting started` not `## Getting Started`)
- Lists: markdown bullet for unordered, numbered for steps
- Tables: for comparisons and reference data (keep columns ≤ 5)
- Links: relative for internal docs (`../api/auth.md`), absolute for external (`https://...`)
- Code blocks: always specify language (```python, ```bash, ```json)
- Callouts: use blockquotes (`>`) for notes and warnings

## Code examples
```python
# Good: full, runnable example
import requests

response = requests.post(
    "https://api.example.com/auth/login",
    json={"email": "user@example.com", "password": "secret"}
)
print(response.json())
```

```python
# Bad: fragment, not runnable
resp = login(email, password)
# What is login? What imports? What URL?
```

## Conventions
- API endpoints: `METHOD /path` format (e.g., `POST /auth/login`)
- Parameters: use backtick code spans (`user_id` not user_id in prose)
- Status codes: numeric with name (`200 OK`, `401 Unauthorized`, `429 Too Many Requests`)
- Versions: use semantic versioning (`v2.4.1` not `version 2.4.1`)
- Dates: ISO 8601 (`2026-06-29` not `June 29, 2026`)
- Boolean values: `true` / `false` (lowercase, code style)

## Do and don't
| Do | Don't |
|----|-------|
| Write for the reader's task | Write for your own understanding |
| Show complete examples | Show fragments that need context |
| Update docs with code | Let docs go stale |
| Define acronyms on first use | Assume the reader knows them |
| Use diagrams for flows | Describe flows in walls of text |
| Link to canonical source | Duplicate content across pages |

Last updated: {{DATE}}
