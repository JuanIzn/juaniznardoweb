# juaniznardo.com — Personal Portfolio

Personal portfolio for Juan Iznardo (Computer Engineer, Spain). Primary audience: recruiters. Latent capacity for freelance / personal brand. Tone: professional, honest about being at the start of his career.

**Never use Co-Authored-By or any Claude attribution in commits.**

## Current state

Site is built and deployed on Cloudflare Pages. All 6 pages live:
- `/` — Hero · Selected Work · About · Contact
- `/work/gameboy-emulator` · `/work/spotloader` · `/work/gender-classification`
- `/now` — current focus page
- `/writing` — reserved, unlinked (activate when 3+ posts exist)

## Stack

- **Astro 6** + **TypeScript** strict
- **Tailwind v4** (configured via `@theme` in `global.css`, no `tailwind.config.js`)
- **MDX** via `@astrojs/mdx` for case study pages
- **Geist Variable** + **Geist Mono** via Fontsource (self-hosted)
- **@astrojs/sitemap** — auto-generates `sitemap-index.xml` on build
- Deploy: **Cloudflare Pages** (`npm run build` → `dist/`)

## Design system

**Aesthetic**: dark monospace minimal with technical accents. NOT "matrix terminal". References: brittanychiang.com, leerob.io.

**Palette** (defined as CSS vars in `src/styles/global.css`):
- Base: `#0d0d10` · Surfaces: `#111114` / `#1a1a1f` · Border: `#27272d`
- Text: `#f5f5f4` · Muted: `#71717a` · Accent: `#22d3ee`

**Typography**:
- Sans body/headings: Geist Variable
- Mono metadata/labels/code: Geist Mono
- Never use mono for long-form body text

**Effects** (all respect `prefers-reduced-motion`):
- Blinking `_` cursor in hero (CSS `blink` keyframe)
- `● open to opportunities` pulsing dot (`pulse-dot` keyframe)
- `fade-up` on scroll via IntersectionObserver + `data-animate` attribute
- Blueprint grid background in hero (CSS linear-gradient, masked radially)

## Site structure

```
src/
  components/   Hero, Layout (in layouts/), WorkGrid, ProjectCard,
                About, Contact, Section, MonoLabel, StatusIndicator
  content/work/ gameboy-emulator.mdx · spotloader.mdx · gender-classification.mdx
  content.config.ts  (Astro 6 API with glob loader)
  pages/        index.astro · now.astro · writing.astro · work/[slug].astro
  styles/       global.css (Tailwind @theme + fonts + keyframes)
```

## Projects

Three projects, equal visual weight, no "featured" label:
1. **gameboy-emulator** — C, SDL2, in progress
2. **spotloader** — Python, complete
3. **gender-classification** — Python/Jupyter, complete

Future: scraping projects (freelance angle), Telegram bot (upgrade from parked Discord bot).

## Content principles

- English only
- Show, don't tell — work first, bio second
- Honest positioning: CS student exploring depth, not faking senior expertise
- Case studies = problem → decisions → tradeoffs

## Conventions

- Conventional commits (`feat:`, `fix:`, `chore:`). No Co-Authored-By.
- JS only where it earns its weight. Lighthouse 95+ target.
- Semantic HTML, `prefers-reduced-motion` on all animations, alt text everywhere.
- `/writing` route exists but is NOT linked in nav until 3+ posts.

## Future considerations

- Blog: activate `/writing` when 3+ real writeups exist
- Services section: latent, activate if freelance pivot
- Scraping projects: add to Selected Work when ready
