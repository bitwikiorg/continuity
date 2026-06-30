# CHECKPOINT — {{PROJECT_NAME}} Frontend

## Approval gates
Actions that require explicit human approval before proceeding:

- [ ] Design system token changes (colors, spacing, typography — affects all components)
- [ ] Theme or breaking CSS changes (dark mode toggle, new breakpoint system, CSS variable renames)
- [ ] Route structure changes (new top-level route, removing a route, changing URL patterns)
- [ ] Accessibility regressions (removing aria labels, changing semantic structure, removing keyboard navigation)
- [ ] Bundle size increase > 10% (new heavy dependency, large asset additions)
- [ ] Framework or major library upgrades (React 17 → 18, Vue 2 → 3, webpack → vite)
- [ ] API contract changes (changing how the frontend calls backend, removing fallback handling)

## Rule
If an action matches any gate, STOP and request approval. Do not proceed on assumption.

## Approval format
When requesting approval, provide:
```
Action: <what you want to do>
Reason: <why it's needed>
Impact: <what breaks if it goes wrong — which components, which routes, which users>
Rollback: <how to undo it>
Testing: <what tests confirm it's safe — unit, visual regression, accessibility audit>
```

Last updated: {{DATE}}
