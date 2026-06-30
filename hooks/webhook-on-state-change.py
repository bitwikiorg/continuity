#!/usr/bin/env python3
"""Send a webhook when a Continuity state file changes.

Usage:
  watchexec -w STATE.md -- python3 webhook-on-state-change.py
  # or
  ls STATE.md | entr python3 webhook-on-state-change.py
"""

import os
import sys
import json
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

WEBHOOK_URL = os.environ.get("CONTINUITY_STATE_WEBHOOK", "")
EVENT_LOG = Path("logs/events.jsonl")


def main():
    if not WEBHOOK_URL:
        print("CONTINUITY_STATE_WEBHOOK not set - skipping webhook")
        return

    event = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "event": "state_file_changed",
        "file": "STATE.md",
        "level": "info",
    }

    # Append to event log
    EVENT_LOG.parent.mkdir(parents=True, exist_ok=True)
    with EVENT_LOG.open("a") as f:
        f.write(json.dumps(event) + "\n")

    # Send webhook
    payload = json.dumps(event).encode()
    req = urllib.request.Request(
        WEBHOOK_URL,
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f"Webhook sent: {resp.status}")
    except Exception as e:
        print(f"Webhook failed: {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
