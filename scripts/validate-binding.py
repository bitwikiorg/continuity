#!/usr/bin/env python3
"""Validate examples/binding.json against BINDING.schema.json."""
import json
import sys
from pathlib import Path

def main():
    base = Path(__file__).resolve().parent.parent
    schema_path = base / "BINDING.schema.json"
    example_path = base / "examples" / "binding.json"

    try:
        import jsonschema
    except ImportError:
        print("jsonschema not installed; using basic structure check")
        with schema_path.open() as f:
            schema = json.load(f)
        with example_path.open() as f:
            example = json.load(f)
        for key in schema.get("required", []):
            if key not in example:
                print(f"MISSING REQUIRED KEY: {key}")
                sys.exit(1)
        print("Basic structure check passed")
        return

    with schema_path.open() as f:
        schema = json.load(f)
    with example_path.open() as f:
        example = json.load(f)

    jsonschema.validate(example, schema)
    print("examples/binding.json validates against BINDING.schema.json")

if __name__ == "__main__":
    main()
