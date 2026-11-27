# vishwateja.in

Personal portfolio and freelance DevOps site, built with Next.js (App Router), TypeScript and Tailwind CSS 4.

## Local development

```bash
npm ci
npm run dev      # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm run start
# After building:
node --test tests/production-metadata.test.mjs
```

## Structure

- `src/app/page.tsx` - home page; profile, services, projects and tools are data objects at the top of the file.
- `src/app/layout.tsx` - metadata base URL and service JSON-LD.
- `src/app/site-metadata.ts` - shared page metadata and Open Graph/Twitter cards.
- `src/app/robots.ts`, `src/app/sitemap.ts` - crawler files, generated at build time.
- `public/case-studies/*.html` - static case-study pages (planned: move into the app router).
- `next.config.ts` - security headers (CSP is Report-Only until tightened).
- `scripts/prune-unused-assets.sh` - reports image cleanup candidates; dry run by default. Review references before using `--delete`.

## Quality gates

`.github/workflows/ci.yml` runs on every pull request and push to `main`:

1. Lint, type-check, production build, and metadata/header regression checks.
2. `npm audit` (fails on high severity).
3. Lighthouse CI with local reports and budgets for performance, accessibility, best practices and SEO (`lighthouserc.json`).

Dependabot opens weekly update PRs (`.github/dependabot.yml`).

## Deployment

The production origin is `https://www.vishwateja.in`, hosted on Vercel project `gorumanthula25/vishwateja`, connected to `gvishwateja-25/portfolio` on GitHub. Publish reviewed changes to `main`, wait for the commit's Vercel deployment status, then verify the public domain. DNS configuration and rollback procedures are not recorded in this repository. Run `npm run build` followed by `npm run start` for a local production Node.js server.

Security headers apply to application routes and public files. CSP is Report-Only; no violation-report endpoint is configured. HSTS uses a two-year max age for this host only; subdomain coverage and preload require a separate deployment decision.

Lighthouse reports stay local to CI (no public report upload). Scores must be confirmed in CI; the configured thresholds are targets, not measured results. Asset cleanup is heuristic and cannot prove that an image is unused by external clients or dynamic paths.

## Contact links

The contact section uses direct email, LinkedIn, WhatsApp, and resume links.
There is no contact form or email-service credential requirement.

The WhatsApp QR and tap link include the same prefilled greeting. To regenerate
and decode-check the QR after changing `profile.whatsapp` in `src/app/page.tsx`,
run this command from the repository root on macOS:

```bash
swift -module-cache-path /tmp/portfolio-swift-cache scripts/generate-whatsapp-qr.swift
```

## Typography

The homepage and case studies use Archivo (variable weights 100–900), matching
https://www.chinmaisiddhartha.in/. The Latin font is hosted locally at
`public/fonts/archivo-latin.woff2` and loaded through `public/fonts/archivo.css`.
The official Google Fonts source is
https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&display=swap.
The SIL Open Font License is included at `public/fonts/OFL-Archivo.txt`.

The Equicom logo in the career timeline is sourced from the company’s official
website: https://equicomtech.com/assets/equicom_logo-CMUweSDj.svg.

The full Sambav logo in the career timeline includes the name and “It’s possible”
tagline, matching the supplied reference. The asset is sourced from its public
company listing: https://www.ceoinsightsindia.com/uploaded_images/company_logos/fmy7xlogo4.jpg
(the source file is GIF despite the URL extension).
The displayed version is `public/icons/sambav-full-logo-transparent.png`, edited
with the built-in image tool to remove the white background. Edit prompt: remove
only the white background to transparency; preserve the flower, name, tagline,
colors, layout, and proportions.
