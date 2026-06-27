# WITNESS.md — {{AGENT_NAME}}

*Evidence collection protocol. Proves execution happened and what it produced.*

## Witness output

1. Pre-binding hash of relevant files
2. Post-binding diff
3. Execution log (`logs/events.jsonl`)
4. Test or validation result

## Required evidence types

| Type | What it proves | How to collect |
|------|----------------|----------------|
| File hash | Pre/post state | `sha256sum` before and after |
| Execution trace | Actions taken | `logs/events.jsonl` append |
| Test result | Output validity | Run validation, capture exit code |
| Artifact | Tangible output | File path + hash |

## Verification

Witness passes when:
- Pre/post hashes differ only on expected files.
- Execution trace shows all expected actions.
- Test result is positive.
- Artifact exists and matches expected hash.

Last updated: {{DATE}}
