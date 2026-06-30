# {{PROJECT_NAME}} — Docs

> Docs writer pack. Documentation systems and content generation.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance
2. TODO.md — active documentation tasks
3. STRUCTURE.md — documentation outline
4. STYLE.md — style guide and conventions

## Governance
- Read STRUCTURE.md before writing.
- Follow STYLE.md conventions.
- After meaningful work: update TODO.md, STRUCTURE.md.
- Commit after each meaningful change.
- Write for the audience, not for yourself. Use the primary audience's vocabulary.
- Every code example must be runnable. Test it before publishing.
- Keep docs next to code when possible. README.md, inline comments, and docstrings are first-class docs.
- Update docs when code changes. Stale docs are worse than no docs.
- Use diagrams for complex flows. Mermaid or ASCII art. Keep them readable.
- Link, don't duplicate. If a concept is explained elsewhere, link to it.

## Documentation principles
- **Audience-first:** Know who reads this. Write at their level. Define jargon on first use.
- **Runnable examples:** Every code snippet works when copy-pasted. No pseudo-code in production docs.
- **Progressive disclosure:** Start with the simplest path. Add complexity in later sections.
- **Single source of truth:** Each concept is explained once. Everything else links to it.
- **Change-driven:** Docs update when code changes. CI checks for stale docs.

Last updated: {{DATE}}
