# EVENTS.md — {{AGENT_NAME}}

*State file — recent event summary. Overwrite in place.
Paired with `logs/` history directory.*

## Recent events

| Timestamp | Event | Level | Detail |
|-----------|-------|-------|--------|
| {{TS_1}} | {{EVENT_1}} | {{LEVEL_1}} | {{DETAIL_1}} |

## Summary

- Total events (last 24h): {{COUNT_24H}}
- Errors (last 24h): {{ERROR_COUNT}}
- Warnings (last 24h): {{WARN_COUNT}}
- Anomalies: {{ANOMALIES}}

## Usage

- Full event traces live in `logs/events.jsonl`.
- This file is a summary — do not dump full logs here.
- Overwrite with current summary each cycle.
- Query `logs/` for specific event investigation.

Last updated: {{DATE}}
