# Abhinav Agrawal Portfolio

Professional portfolio for Abhinav Agrawal, focused on Oracle Transportation Management optimization, packing algorithms, enterprise product engineering, and agentic AI workflows.

Live site: https://skully-coder.github.io/

## What This Site Highlights

- Optimization engineering for transportation and global trade systems
- Mixed-integer programming and constrained packing work
- Agentic AI workflows across OTM and WMS context
- Public Oracle SCM blog proof for the Logistics Execution Command Center Agentic App
- Oracle and Samsung engineering experience
- Patent applications, selected public projects, certifications, and contact links

## Tech Stack

- React 18
- Parcel 2
- Plain CSS with responsive layouts
- GitHub Pages deployment via `gh-pages`
- Graphify code graph generation

## Project Structure

```text
src/
  App.jsx                     Portfolio content and page structure
  index.html                  SEO, social, and document metadata
  index.js                    React entrypoint
  styles.css                  Responsive visual system
  assets/documents/           Resume PDF
  images/                     Active image assets
scripts/
  prepare-dist-extras.mjs     Generates social preview, favicon, manifest, robots.txt, sitemap.xml
  clean-dist.mjs              Clears generated deploy output before a fresh build
  prune-dist.mjs              Removes stale Parcel output from deploy-dist
  verify-accessibility.mjs    Checks accessibility and external-link safety affordances
  verify-performance-budget.mjs Checks deploy asset size budgets
  verify-portfolio.mjs        Validates deploy output and portfolio signals
  smoke-deploy-http.mjs       Serves deploy-dist locally and smoke-checks generated routes
graphify-out/                 Generated Graphify code graph output
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the local Parcel server:

```bash
npm run start -- --port 1236
```

Build the production bundle:

```bash
npm run build
```

Build the GitHub Pages deploy output:

```bash
npm run build-gh
```

Clean generated deploy output:

```bash
npm run clean-dist
```

Verify deploy output:

```bash
npm run verify
```

Check accessibility affordances:

```bash
npm run verify:a11y
```

Check deploy asset budgets:

```bash
npm run verify:budget
```

Check responsive UI strategy safeguards:

```bash
npm run verify:ui
```

Smoke-check deploy output over HTTP:

```bash
npm run verify:http
```

Refresh-check public GitHub signals:

```bash
npm run check:sources
```

Run the full local verification gate:

```bash
npm run verify:all
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Verification

The deploy verifier checks that:

- `deploy-dist/index.html` references real generated assets
- the portfolio bundle includes required professional signals
- JSON-LD structured data is present
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, root favicon, and `social-preview.jpg` exist
- stale Parcel artifacts are removed from `deploy-dist`
- excluded project content does not reappear
- generated HTML, JS, CSS, image, document, manifest, robots, and sitemap routes return HTTP 200 locally
- skip link, focus-visible styling, image alt text, ARIA labels, and external-link safety remain present
- responsive portfolio layout, real hero imagery, stable typography rules, and reduced-motion support remain present
- deploy asset sizes stay within configured performance budgets

Run the full local check sequence before deploying:

```bash
npm run verify:all
graphify update .
```

## Content Notes

The portfolio content is based on the current CV, public GitHub profile data, public project metadata, and Oracle's public SCM blog post for the Logistics Execution Command Center Agentic App. Run `npm run check:sources` before major portfolio updates because repository, follower, and public source signals can change.
