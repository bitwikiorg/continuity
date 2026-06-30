# CHECKPOINT — {{PROJECT_NAME}} Security

## Approval gates
Actions that require explicit human approval before proceeding:

- [ ] Permission or access control changes (role grants, scope expansion, privilege escalation)
- [ ] Secret rotation or credential changes (API keys, DB passwords, signing keys, certificates)
- [ ] Security rule modifications (firewall rules, CORS policy, CSP headers, rate limit changes)
- [ ] Network configuration changes (port exposure, new endpoints, VPN changes)
- [ ] Dependency additions (supply chain risk — check for known vulnerabilities)
- [ ] Public exposure of previously internal endpoints
- [ ] Authentication flow changes (login flow, token issuance, session handling)
- [ ] Encryption changes (algorithm changes, key rotation, TLS version changes)

## Rule
If an action matches any gate, STOP and request approval. Do not proceed on assumption.

## Approval format
When requesting approval, provide:
```
Action: <what you want to do>
Security impact: <what attack surface changes, what new risks are introduced>
Reason: <why it's needed>
Mitigation: <how risks are addressed>
Rollback: <how to undo it if it goes wrong>
Testing: <what security tests confirm it's safe>
```

## Supply chain checklist (for new dependencies)
- [ ] Package has > 1000 weekly downloads (or is from a trusted org)
- [ ] No known vulnerabilities (check `npm audit` / `pip audit` / `snyk`)
- [ ] License is compatible with project
- [ ] Package is maintained (last commit < 6 months ago)
- [ ] No excessive permissions required

Last updated: {{DATE}}
