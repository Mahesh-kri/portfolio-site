# Deployment

This site is a static export of a Next.js app, deployed automatically to **GitHub Pages** via GitHub Actions.

Live URL: `https://mahesh-kri.github.io/portfolio-site/`

## How it works

1. Push to `main`
2. `.github/workflows/deploy.yml` runs:
   - `npm ci` (install dependencies)
   - `npm run build` → `output: 'export'` produces a static `out/` folder
   - adds `out/.nojekyll` (stops Jekyll from ignoring `_next/`)
   - uploads `out/` and deploys via `actions/deploy-pages`
3. Site is live in ~1 minute

## Redeploy (normal case)

```bash
git add -A
git commit -m "describe your change"
git push
```

Then check the **Actions** tab for a green run.

## Rules for changes

- **New asset** (screenshot, new resume): put it in `public/` and reference it with the `/portfolio-site/` prefix, e.g. `/portfolio-site/screenshots/shot-5.png`
- **New page** (e.g. `/blog`): the route itself is handled by Next.js, but any absolute `<a href>` to local files must include the `/portfolio-site/` prefix
- **Do NOT commit** `out/` or `.next/` (gitignored — the workflow rebuilds them)

## If you add a custom domain

The `/portfolio-site/` prefix is hardcoded in these spots. With a custom domain (e.g. `mahesh.dev`) the repo-path prefix is no longer needed:

- `next.config.js` → remove `basePath: '/portfolio-site'`
- `components/Hero.js` → `/portfolio-site/resume.pdf`, `/portfolio-site/profile.jpg`
- `components/Projects.js` → `/portfolio-site/screenshots/shot-1..4.png`
- `pages/contact.js` → `/portfolio-site/`
- `pages/personal.js` → `/portfolio-site/`

Strip the prefix everywhere, push, and the site serves at the domain root.
