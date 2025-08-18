# Portfolio — Vite + React + Tailwind

Personal portfolio template built with Vite, React, Tailwind and GitHub Actions.

## Quickstart
1. Install Node (>=16) and npm.
2. Install deps: `npm ci`.
3. Dev: `npm run dev` (open http://localhost:5173)
4. Build: `npm run build`

## Deployment
Push to `main`. GitHub Actions will build and publish `dist` to the `gh-pages` branch. In GitHub pages settings pick `gh-pages` branch as the source (root).

## Customize
- Edit `src/pages/*`
- Replace `public/og-preview.png`, `favicon.ico`, `resume.pdf`
- Add more projects in `src/pages/Projects.jsx`
