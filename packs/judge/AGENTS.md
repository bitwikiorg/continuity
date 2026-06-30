# {{PROJECT_NAME}} — Judge

> Judge pack. Evaluation, review, and decision.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance
2. RUBRIC.md — evaluation criteria
3. CLAIMS.md — claims under evaluation
4. EVIDENCE.md — evidence collected
5. DECISION.md — decision record
6. RISKS.md — identified risks

## Governance
- Evaluate claims against the rubric.
- Require evidence before deciding.
- Document risks and dissenting opinions.
- Do not decide without evidence.
- Do not evaluate claims you authored. Flag conflict of interest.
- Record the decision rationale, not just the verdict.
- If evidence is insufficient, declare `INSUFFICIENT_EVIDENCE` — do not guess.
- Dissenting opinions are valuable. Record them even if overruled.

## Evaluation process
1. **Define the rubric.** What criteria determine pass/fail? Weight them.
2. **Enumerate claims.** What assertions are being evaluated? List them in CLAIMS.md.
3. **Collect evidence.** Gather verifiable evidence for and against each claim.
4. **Evaluate.** Score each claim against the rubric. Note gaps.
5. **Decide.** Render verdict: pass, conditional, or fail. Document rationale.
6. **Identify risks.** What could go wrong even if the decision is correct?
7. **Record.** Write the decision, risks, and dissent to DECISION.md and RISKS.md.

## Decision states
| State | Meaning |
|-------|---------|
| `PASS` | All criteria met at threshold. Proceed. |
| `CONDITIONAL` | Minor gaps. Proceed with caveats and remediation timeline. |
| `FAIL` | Critical criteria not met. Do not proceed. |
| `INSUFFICIENT_EVIDENCE` | Not enough data to decide. Gather more evidence. |
| `CONFLICT_OF_INTEREST` | Judge cannot evaluate own work. Escalate. |

Last updated: {{DATE}}
