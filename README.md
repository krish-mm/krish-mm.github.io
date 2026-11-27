# Krish Moodbidri

Personal portfolio of Krish Moodbidri, a DevOps engineer in HPC / research computing, based in Hoover, AL. Live at [krishm.com](https://krishm.com).

The site is a single page with sections for About, Contact, Work, Education, Skills, Tools, Hobbies, and Get in Touch.

## Stack

Static HTML, CSS, and JavaScript. No build step or framework.

- Type: [Outfit](https://fonts.google.com/specimen/Outfit) from Google Fonts
- Dark theme with a red accent, defined as CSS custom properties in `style.css`
- `script.js` handles the mobile navigation, current-section highlighting in the nav, and a typewriter line that respects `prefers-reduced-motion`

## Structure

```
.
├── CNAME
├── index.html          # All page content and sections
├── style.css
├── script.js
├── favicon.svg
├── .nojekyll           # Skip Jekyll processing on GitHub Pages
└── assets/
    ├── krish-portrait.jpg
    ├── krish-portrait.webp
    ├── krish-portrait-square.jpg
    └── krish-portrait-square.webp
```

## Run locally

Serve the repository root (needed for fonts, assets, and scripts to load cleanly):

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Deploy

GitHub Pages serves the site from the `main` branch at the repository root. The custom domain is `krishm.com` (see `CNAME`). HTTPS is enforced.

A push to `main` publishes the site. `.nojekyll` tells Pages not to run Jekyll on the files.

## Where to edit

- Copy, experience, education, skills, and contact links: `index.html`
- Portrait photos: the files in `assets/` (the `-square` variants are used at smaller breakpoints)
- Colors, typography, and layout: `style.css` (the `:root` variables at the top)
- Navigation and typewriter behavior: `script.js`
- Domain: `CNAME`
