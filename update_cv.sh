#!/bin/sh

set -eu

SITE_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
CV_DIR="$SITE_DIR/../CV"
PUBLISH=false
COMPILE=false

for argument in "$@"; do
    case "$argument" in
        --compile)
            COMPILE=true
            ;;
        --publish)
            PUBLISH=true
            ;;
        *)
            echo "Usage: $0 [--compile] [--publish]" >&2
            exit 1
            ;;
    esac
done

if [ ! -f "$CV_DIR/main.pdf" ]; then
    echo "Error: expected compiled CV at $CV_DIR/main.pdf." >&2
    exit 1
fi

if [ "$COMPILE" = true ]; then
    if ! command -v latexmk >/dev/null 2>&1; then
        echo "Error: latexmk is not installed or is not available in PATH." >&2
        exit 1
    fi

    latexmk -pdf -interaction=nonstopmode -halt-on-error -cd "$CV_DIR/main.tex"
    latexmk -c -cd "$CV_DIR/main.tex"
fi

cp "$CV_DIR/main.pdf" "$SITE_DIR/CV.pdf"

if ! cmp -s "$CV_DIR/main.pdf" "$SITE_DIR/CV.pdf"; then
    echo "Error: CV.pdf does not match the compiled main.pdf." >&2
    exit 1
fi

CV_VERSION=$(shasum "$SITE_DIR/CV.pdf" | awk '{print substr($1, 1, 12)}')
PAGES="index.html about.html research.html teaching.html"

# Every page links the CV from the nav; refresh the cache-busting version in all of them.
for page in $PAGES; do
    PAGE_TMP="$SITE_DIR/$page.tmp"
    sed -E "s/CV\\.pdf(\\?v=[^\"]*)?/CV.pdf?v=$CV_VERSION/g" "$SITE_DIR/$page" > "$PAGE_TMP"
    mv "$PAGE_TMP" "$SITE_DIR/$page"
done

echo "CV copied to $SITE_DIR/CV.pdf"

if [ "$PUBLISH" = true ]; then
    # $PAGES is intentionally unquoted so that each page is passed separately.
    git -C "$SITE_DIR" add CV.pdf $PAGES

    if ! git -C "$SITE_DIR" diff --cached --quiet; then
        git -C "$SITE_DIR" commit -m "Update public CV"
        git -C "$SITE_DIR" push origin main
    else
        echo "Public CV is already up to date."
    fi
fi
