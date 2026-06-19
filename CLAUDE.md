# CLAUDE.md

## Project Overview

Personal academic website for Filippo Berti Mecocci, deployed through GitHub Pages from `main`.
The site is plain HTML, CSS, and JavaScript, with no package manager or build framework.

## Repository Layout

This repository is intentionally separate from the adjacent Overleaf repository:

- `../CV` — LaTeX sources and compiled `main.pdf`
- this repository — website sources and public `CV.pdf`

Use `./update_cv.sh` to copy the adjacent compiled CV into this repository.
Use `./update_cv.sh --compile` when local LaTeX sources must be compiled first, and `./update_cv.sh --publish` to commit and push the public PDF.
Do not edit `CV.pdf` manually.

## Local Development

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Architecture

- `index.html` — home, profile, contact link, and research snapshot
- `about.html` — academic positions and research interests
- `research.html` — canonical research page for publications and projects
- `teaching.html` — teaching activities
- `papers.html`, `projects.html`, `work-in-progress.html` — compatibility redirects to `research.html`
- `style.css` — layout, typography, themes, and responsive rules
- `site.js` — theme toggle, back-to-top behavior, abstract toggles, and email-link construction
- `CV.pdf` — public CV generated from `../CV/main.tex`
- `update_cv.sh` — reproducible CV copy, optional compilation, and publication workflow

## Editing Rules

- Keep the four-page navigation consistent across `index.html`, `about.html`, `research.html`, and `teaching.html`.
- Treat `research.html` as the only source of truth for research content.
- Use `../CV/ENTRY.tex` as the reference when synchronizing positions and research entries.
- Run `./update_cv.sh --publish` after changing the CV. The adjacent CV repository can invoke this automatically through its `post-merge` hook.
- Verify both repositories independently with `git status`; never treat the parent `Website` directory as a Git repository.

## Interactive Patterns

Publication abstracts require a `.toggle-abstract` button immediately followed by `.abstract-content`.
The theme preference is stored in `localStorage` under `fbm-theme`.
