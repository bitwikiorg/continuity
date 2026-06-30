# PLAN — {{PROJECT_NAME}}

## Goal
{{GOAL}}

Example: `Build and deploy user authentication system with backend API, frontend UI, and security review.`

## Phases
1. {{PHASE_1}} — agents: {{AGENTS_1}}
2. {{PHASE_2}} — agents: {{AGENTS_2}}
3. {{PHASE_3}} — agents: {{AGENTS_3}}

Example:
1. **Backend API** — agents: backend-worker
   - Implement /auth/register, /auth/login, /auth/refresh endpoints
   - Set up JWT token management with refresh rotation
   - Add rate limiting on auth endpoints
2. **Frontend UI** — agents: frontend-worker
   - Build login and registration forms with validation
   - Implement auth state management (token storage, auto-refresh)
   - Add protected route wrapper component
3. **Security review** — agents: judge-worker
   - Evaluate auth implementation against security rubric
   - Verify token management, password hashing, rate limiting
   - Produce decision: pass / conditional / fail
4. **Deploy** — agents: ops-worker
   - Deploy to staging, run integration tests
   - Deploy to production after security approval

## Dependencies
- {{DEPENDENCY_1}}

Example:
- Phase 2 depends on Phase 1 (frontend needs API endpoints to exist)
- Phase 3 depends on Phases 1 and 2 (review needs both backend and frontend code)
- Phase 4 depends on Phase 3 (deploy requires security approval)

## Definition of done
- [ ] All phases completed
- [ ] All tasks in TASKS.md marked completed
- [ ] Security review passed (or conditions accepted with remediation timeline)
- [ ] Production deploy successful with healthy monitoring for 30 min
- [ ] SNAPSHOT.md updated

Last updated: {{DATE}}
