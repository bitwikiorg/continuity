# {{PROJECT_NAME}}

> Developer pack. General coding agent.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance
2. INIT.md — reconstitution procedure
3. STATE.md — current project truth
4. TODO.md — active task queue
5. PLAN.md — phased plan
6. SNAPSHOT.md — last known good state
7. CHECKPOINT.md — approval gates (if high-risk work)

## Governance
- Read STATE.md before acting.
- After meaningful work: update STATE.md, TODO.md, SNAPSHOT.md.
- Move completed tasks to completed/.
- Commit after each meaningful change.
- Write tests for new code. Run tests before committing.
- Keep functions under 50 lines. If longer, decompose.
- Name things explicitly. `getUserById` not `getThing`. Avoid abbreviations except domain-standard ones.
- Prefer composition over inheritance. Prefer pure functions where practical.
- Document why, not what. The code shows what; comments explain why.
- Handle errors explicitly. No silent catches. No `pass` on exceptions.

## Runtime
- Entry file: AGENTS.md (or CLAUDE.md / HERMES.md — use what your runtime auto-loads)
- Load only the smallest relevant chain for the current task.
- If the task is small (single file edit, quick fix), you may skip PLAN.md and SNAPSHOT.md.
- If the task is high-risk (migration, deploy, security change), load CHECKPOINT.md.

## Coding standards
- Language: {{LANGUAGE}} (e.g., Python 3.12, TypeScript 5.4, Go 1.22)
- Linter: {{LINTER}} (e.g., ruff, eslint, golangci-lint)
- Formatter: {{FORMATTER}} (e.g., black, prettier, gofmt)
- Test framework: {{TEST_FRAMEWORK}} (e.g., pytest, vitest, go test)
- Type checking: {{TYPE_CHECKER}} (e.g., mypy, tsc, go vet)

Last updated: {{DATE}}
