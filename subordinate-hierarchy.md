# SUBORDINATE INSTANTIATION HIERARCHY

## Status: HARD-CODED — NON-NEGOTIABLE

## Constraint matrix

| Subordinate type | `call_subordinate` access | Constraint |
|------------------|---------------------------|-----------|
| **WORKER** | DENIED | Sterile. Zero subordinate access. Atomic tasks only. |
| **TEAM LEADER** | SCOPED | Limited access. Must specify: max_depth, max_calls, permissions, stop_rules. |

## Failure modes prevented

- Infinite recursion cascade
- Resource exhaustion via unbounded spawning
- Context explosion through nested delegation
- Token budget collapse

## Worker template

```text
Type: Worker
Role: [specific role]
Task: [atomic task]
Tools: [explicit list WITHOUT call_subordinate]
Output: [expected deliverable]
Stop: Return result and terminate
```

## Team Leader template

```text
Type: Team Leader
Role: [coordination role]
Task: [multi-step task]
Subordinate Access: SCOPED
  - max_depth: 1
  - max_calls: [explicit number]
  - allowed_tools: [specific tools for spawned workers]
Stop: [explicit completion condition]
```

## Enforcement

- This rule overrides all other delegation patterns.
- Violation = immediate escalation.
- No exceptions without explicit user approval.

**Date locked:** {{DATE}}
