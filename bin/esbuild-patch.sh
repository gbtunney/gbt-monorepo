#!/usr/bin/env bash
set -euo pipefail

SOURCE="./bin/esbuild-darwin-x64"
TARGET="./node_modules/.pnpm/@esbuild+darwin-x64@0.28.1/node_modules/@esbuild/darwin-x64/bin/esbuild"

install -m 755 "$SOURCE" "$TARGET"

if cmp -s "$SOURCE" "$TARGET"; then
    pnpm exec snail-sh success "Esbuild patch applied successfully"
else
    pnpm exec snail-sh critical "Esbuild patch failed: copied binary does not match source"
    exit 1
fi
