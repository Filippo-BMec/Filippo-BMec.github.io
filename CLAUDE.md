# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website for Filippo Berti Mecocci (PhD in Development Economics, University of Florence). Deployed via GitHub Pages — pushing to `main` publishes the site.

## Local Development

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

No build tools, package managers, or frameworks. Everything is plain HTML/CSS/JS.

## Architecture

**Multi-page static site** — each page is a self-contained HTML file sharing one CSS file and one JS file:

- `index.html` — home with profile photo and research snapshot
- `about.html` — academic background
- `papers.html` — peer-reviewed publications with expandable abstracts
- `work-in-progress.html` — under review / working papers / thesis
- `projects.html` — ongoing projects
- `teaching.html` — teaching activities
- `style.css` — all layout, typography, theming, and responsive rules
- `site.js` — three behaviors: light/dark theme toggle, back-to-top button, abstract expand/collapse

**Design system** — retro terminal aesthetic. CSS custom properties in `:root` / `body.dark-theme` control the entire palette (copper/parchment tones). Two font families:
- `IBM Plex Mono` — body text and UI (imported in `style.css`)
- `Cormorant Garamond` — headings and brand (imported in each HTML `<head>`)

## Key Patterns

**Every page head** must include both Google Font imports, `style.css`, Font Awesome, and Academicons. Copy the `<head>` block from an existing page when adding a new page.

**Active nav link** — set `class="active"` on the `<a>` tag matching the current page inside `.site-nav ul`.

**Publications with abstracts** use this structure:
```html
<ul class="section-list">
  <li>
    <strong><a href="...">Paper Title</a></strong>
    <p><em>Journal, year with Co-author</em></p>
    <button class="toggle-abstract" type="button">Show Abstract</button>
    <div class="abstract-content">
      <p class="abstract">Abstract text...</p>
    </div>
  </li>
</ul>
```
`site.js` wires up all `.toggle-abstract` buttons automatically on `DOMContentLoaded` — the button must be immediately before `.abstract-content` (uses `button.nextElementSibling`).

**Theme persistence** — stored in `localStorage` under key `fbm-theme`. Dark mode adds class `dark-theme` to `<body>`.

**Page hero variants** — `index.html` uses `.page-hero` with `.header-content` (photo + text columns); all other pages use `.page-hero.page-hero-sm` (title only, no photo).
