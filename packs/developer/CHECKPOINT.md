# CHECKPOINT — {{PROJECT_NAME}}

## Approval gates
Actions that require explicit human approval before proceeding:

- [ ] Destructive operations (delete files, force push, drop database, `rm -rf`)
- [ ] Irreversible changes (migration, schema change, config overwrite, dependency major version bump)
- [ ] External actions (deploy, publish package, send notification, webhook call)
- [ ] Security-sensitive changes (auth logic, secrets, permissions, CORS policy, CSP headers)
- [ ] Framework or runtime upgrades (e.g., Python 3.11 → 3.12, React 17 → 18)
- [ ] Large refactors (> 5 files changed or > 500 lines moved)

## Rule
If an action matches any gate above, STOP and request approval. Do not proceed on assumption.

## Approval format
When requesting approval, provide:
```
Action: <what you want to do>
Reason: <why it's needed>
Impact: <what breaks if it goes wrong>
Rollback: <how to undo it>
Testing: <what tests confirm it's safe>
```

## Examples of gated vs non-gated actions
| Action | Gated? | Why |
|--------|--------|-----|
| Fix a typo in a comment | No | Zero risk |
| Add a new utility function with tests | No | Additive, tested |
| Change function signature used by 3 modules | Yes | Breaking change, needs migration plan |
| `git push --force` | Yes | Can overwrite others' work |
| `npm install` (same version) | No | No change |
| `npm install` (major version bump) | Yes | Can break runtime |

Last updated: {{DATE}}
