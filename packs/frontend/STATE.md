# STATE — {{PROJECT_NAME}} Frontend

## Status
{{READY_OR_BLOCKED}}

## Stack
- Framework: {{FRAMEWORK}}
- Build tool: {{BUILD_TOOL}}
- CSS: {{CSS_SOLUTION}}
- Test command: {{TEST_COMMAND}}
- Bundle size: {{BUNDLE_SIZE}} (e.g., 142 KB gzipped)
- Lighthouse score: {{LIGHTHOUSE_SCORE}} (e.g., Performance: 92, Accessibility: 100, Best Practices: 95)

Example:
- Framework: React 18.3
- Build tool: Vite 5.3
- CSS: Tailwind CSS 3.4
- Test command: `vitest run`
- Bundle size: 142 KB gzipped
- Lighthouse score: Performance: 92, Accessibility: 100, Best Practices: 95

## Design system
- Tokens: {{DESIGN_TOKENS_LOCATION}}
- Components: {{COMPONENT_COUNT}} components in `{{COMPONENT_DIR}}`
- Theme: {{THEME_STATUS}} (e.g., light/dark implemented, stored in localStorage)
- Storybook: {{STORYBOOK_STATUS}} (e.g., running on port 6006, 24 stories)

Example:
- Tokens: `src/styles/tokens.ts` (colors, spacing, typography, shadows, radii)
- Components: 42 components in `src/components/`
- Theme: light/dark implemented, system preference detection, stored in localStorage
- Storybook: running on port 6006, 24 stories for 18 components

## Routes
| Route | Component | Auth | Status |
|------|-----------|------|--------|
| {{ROUTE_1}} | {{COMPONENT_1}} | {{AUTH_1}} | {{STATUS_1}} |
| {{ROUTE_2}} | {{COMPONENT_2}} | {{AUTH_2}} | {{STATUS_2}} |

Example:
| Route | Component | Auth | Status |
|------|-----------|------|--------|
| `/` | Home | public | stable |
| `/login` | Login | guest-only | stable |
| `/dashboard` | Dashboard | required | stable |
| `/settings` | Settings | required | in-progress |

## Blockers
{{BLOCKERS_OR_NONE}}

Last updated: {{DATE}}
