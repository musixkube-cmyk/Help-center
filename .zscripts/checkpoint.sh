#!/usr/bin/env bash
# Run this at the START of every turn. Detects sandbox resets.
set -e
cd /home/z/my-project
git fetch origin 2>/dev/null
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)
TAG=$(git rev-parse checkpoint-stable 2>/dev/null || echo "none")

echo "Local HEAD:  $LOCAL"
echo "GitHub main: $REMOTE"
echo "Checkpoint:  $TAG"

if [ "$LOCAL" != "$REMOTE" ]; then
  echo ""
  echo "⚠  SANDBOX RESET DETECTED — local has diverged from GitHub."
  echo "   Restoring local to GitHub state (your pushed work is safe)..."
  git reset --hard origin/main
  echo "✓ Restored. Local now matches GitHub."
else
  echo "✓ Local matches GitHub. No reset detected."
fi
