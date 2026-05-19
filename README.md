# juaniznardo.com

Personal portfolio. Live at [juaniznardo.com](https://juaniznardo.com).

## Stack

- **Astro 6** — static-first, zero JS by default, islands for interactivity
- **Tailwind v4** — configured entirely via CSS `@theme`, no `tailwind.config.js`
- **MDX** — case study pages as content collections with typed frontmatter schema
- **TypeScript** strict throughout
- **Geist Variable + Geist Mono** via Fontsource (self-hosted, no CDN)
- **Cloudflare Pages** — deploys on push to `main`

## Architecture decisions

**Why Astro over Next.js**: the site is predominantly static content. Astro ships zero JS by default and only hydrates components that actually need it. For a portfolio with no interactive state, this means better Lighthouse scores without any extra effort.

**Why Tailwind v4**: v4 moves configuration into CSS via the `@theme` directive, eliminating the config file entirely. Design tokens (colors, fonts, radii) live in `src/styles/global.css` alongside the keyframe animations and base styles — one file owns the full design system.

**Content collections for case studies**: each project lives as an `.mdx` file in `src/content/work/` with a Zod-validated schema. This keeps project data typed and co-located with its prose, and the dynamic `/work/[slug]` route generates static pages at build time.

**Self-hosted fonts**: loading fonts from a CDN adds a cross-origin request and a potential cache miss. Fontsource packages the font files into `node_modules`, Astro bundles them, and they're served from the same origin as everything else.

**CSS-only animations**: all motion (blinking cursor, pulsing status dot, scroll fade-in) uses `@keyframes` and the Intersection Observer API — no animation library needed. Every animation respects `prefers-reduced-motion`.

## Structure

```
src/
  components/     UI components (Hero, WorkGrid, ProjectCard, About, Contact, ...)
  content/work/   MDX case studies (gameboy-emulator, spotloader, gender-classification)
  content.config.ts  Collection schema with Zod
  layouts/        Layout.astro — head, nav, footer, scroll animation script
  pages/          index.astro · work/[slug].astro · now.astro · writing.astro
  styles/         global.css — @theme tokens, fonts, keyframes, base styles
public/
  favicon.svg     Geometric SVG (no text elements — reliable at 16px)
  robots.txt
  _headers        Security headers for Cloudflare Pages
```

## Dev

```sh
npm install
npm run dev      # localhost:4321
npm run build    # production build → dist/
```

## Notes

- `/writing` exists as a route but is not linked in the nav. It activates when there's actual content worth publishing.
- The `/now` page is meant to be updated periodically — it reflects current focus, not a permanent statement.
- Built with AI assistance for scaffolding and iteration speed. Architecture, content, and decisions are mine.
