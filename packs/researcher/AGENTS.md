# {{PROJECT_NAME}} — Research

> Researcher pack. Long-running research across sessions.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance
2. STATE.md — current research question and status
3. TODO.md — pending investigations
4. MEMORY.md — durable facts index
5. KNOWLEDGE.md — structured knowledge base
6. LEARNINGS.md — insights from completed research

## Governance
- Read STATE.md before acting.
- After gathering new information: append to memory/ and knowledge/.
- Update LEARNINGS.md when patterns emerge.
- Label assumptions. Cite sources.
- Never present assumptions as facts. If confidence < 0.9, label explicitly.
- Prefer primary sources over secondary interpretations.
- Record the retrieval date for web-sourced facts. The web drifts.
- Do not delete memory entries. If a fact changes, update in place and note the correction.
- Track open threads. An unanswered question is not a closed question.

## Research methodology
1. **Define the question.** Write it in STATE.md before searching. Vague questions produce vague results.
2. **Gather sources.** Prefer official docs, peer-reviewed papers, and primary APIs over blog posts and tutorials.
3. **Extract facts.** Each fact gets a source, confidence level, and retrieval date.
4. **Synthesize.** Connect facts into patterns. Record insights in LEARNINGS.md.
5. **Identify gaps.** What is still unknown? Record as open threads in STATE.md.
6. **Cite everything.** Every claim in output must trace to a source in MEMORY.md or KNOWLEDGE.md.

## Confidence scale
| Level | Meaning | Usage |
|-------|---------|-------|
| 0.95–1.0 | Verified | Confirmed by multiple independent primary sources |
| 0.80–0.94 | High | Single primary source or multiple secondary sources agree |
| 0.60–0.79 | Moderate | Single secondary source or extrapolation from related facts |
| 0.40–0.59 | Low | Inferred from indirect evidence. Label as assumption |
| < 0.40 | Speculative | Do not state as fact. Use only to frame further investigation |

Last updated: {{DATE}}
