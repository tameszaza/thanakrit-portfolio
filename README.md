# Damduan Thanakrit’s portfolio

A Next.js static export hosted on the Ubuntu server. Project copy and media references live in `content/projects.js`. The home page and its timeline live in `app/page.jsx`.

## Build

Use Node.js 22 and run `npm ci` followed by `npm run build`. Next writes the complete static site to `out/`. The production container only serves that export.

## Update project images

Add a WebP capture to `public/media/` and update the corresponding project’s image, alternative text and caption in `content/projects.js`. Each project uses its lead visual on the home page and provides an optional second image on its detail page. Keep captures free of private accounts, credentials and documents.

## Server

Apache serves a read-only static release through the existing Docker engine. Tailscale Serve publishes HTTPS for the portfolio on its own port. Build and review changes before switching the `deploy/current` symlink to the new release. The live directory and browser test output are excluded from Git.

## Public site

GitHub Pages publishes the public portfolio at
https://tameszaza.github.io/thanakrit-portfolio/. The workflow in
`.github/workflows/pages.yml` deploys the static export on pushes to `main`.

Pages supplies its URL prefix as `NEXT_PUBLIC_BASE_PATH` at build time.
Leave this variable unset when building a release for the Docker server.
