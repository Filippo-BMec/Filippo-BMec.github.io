#!/bin/sh

set -eu

SITE_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
CV_DIR="$SITE_DIR/../CV"

if ! command -v latexmk >/dev/null 2>&1; then
    echo "Error: latexmk is not installed or is not available in PATH." >&2
    exit 1
fi

if [ ! -f "$CV_DIR/main.tex" ]; then
    echo "Error: expected CV source at $CV_DIR/main.tex." >&2
    exit 1
fi

latexmk -pdf -interaction=nonstopmode -halt-on-error -cd "$CV_DIR/main.tex"
cp "$CV_DIR/main.pdf" "$SITE_DIR/CV.pdf"
latexmk -c -cd "$CV_DIR/main.tex"

if ! cmp -s "$CV_DIR/main.pdf" "$SITE_DIR/CV.pdf"; then
    echo "Error: CV.pdf does not match the compiled main.pdf." >&2
    exit 1
fi

echo "CV compiled and copied to $SITE_DIR/CV.pdf"
