# {{PROJECT_NAME}} — Frontend

> Frontend pack. UI, routes, components, design system.

## Entry
Read this file first. Then load the state chain below.

## State chain
1. AGENTS.md (this file) — boot, governance
2. STATE.md — current frontend status
3. TODO.md — active frontend tasks
4. CHECKPOINT.md — approval gates for design/UX changes

## Governance
- Read STATE.md before acting.
- After meaningful work: update STATE.md, TODO.md.
- Commit after each meaningful change.
- Keep components under 200 lines. If longer, decompose into sub-components.
- Co-locate styles, tests, and types with their component.
- Prefer composition over inheritance. Prefer controlled components.
- Never hardcode API URLs. Use environment variables or a config module.
- Test critical user flows (auth, checkout, form submission) with integration tests.
- Maintain accessibility: WCAG 2.1 AA minimum. Use semantic HTML. Test with keyboard navigation.
- Keep bundle size monitored. Flag any increase > 10% for review.

## Frontend-specific conventions
- State management: {{STATE_MANAGEMENT}} (e.g., Redux Toolkit, Zustand, React Context, Pinia)
- Styling: {{STYLING}} (e.g., Tailwind CSS, CSS Modules, styled-components)
- Component library: {{COMPONENT_LIBRARY}} (e.g., shadcn/ui, Material UI, none/custom)
- Icons: {{ICON_SET}} (e.g., lucide-react, heroicons, phosphor-icons)
- Forms: {{FORM_LIBRARY}} (e.g., react-hook-form, formik, native)
- Testing: {{TEST_SETUP}} (e.g., Vitest + Testing Library, Jest + Enzyme, Playwright)

Last updated: {{DATE}}
