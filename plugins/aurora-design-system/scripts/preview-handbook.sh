#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${1:-4173}"

exec python3 "$ROOT_DIR/scripts/serve-aurora-preview.py" --port "$PORT" --directory "$ROOT_DIR" --open-path /assets/handbook/
