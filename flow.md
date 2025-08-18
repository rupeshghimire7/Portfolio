# Flow & notes

## What this repo does
- Multi-page SPA using React Router.
- Tailwind CSS for styling.
- Per-page SEO via react-helmet-async.
- CI: GitHub Actions builds and publishes to gh-pages.
- index.html copied to 404.html to support browser routing on GitHub Pages.

## Publish steps (high-level)
1. Create GitHub repo (e.g. rupeshghimire7.github.io or any name).
2. Push code to `main`.
3. On push, Actions builds and pushes `dist` to `gh-pages`.
4. In repo Settings → Pages set "Branch" to `gh-pages` and folder `/ (root)`.

## Notes
- For a user site `username.github.io`, the site will be hosted at `https://username.github.io`.
- For a project site `username.github.io/repo`, set `vite.config.js` base to `/repo/` and optionally change workflow.
