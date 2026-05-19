# juaniznardo.com — Personal Portfolio

Personal portfolio for Juan Iznardo (Computer Engineer, Spain). Primary audience: recruiters in the next 6–12 months. Latent capacity for freelance / personal brand. Tone: professional, distinctive, honest about being at the start of his career.
Never use Co-Authored-By: Claude <noreply@anthropic.com> when commiting or anything that shows your name.
## Stack

- **Astro** (static-first, islands for interactivity)
- **Tailwind CSS** for styling
- **Framer Motion** for selective animation
- **MDX** for case study pages and future blog
- **TypeScript** throughout
- **Deploy**: Cloudflare Pages or Vercel (decide at deploy step)

## Design system

**Aesthetic direction**: dark monospace minimal with technical accents. Reads as senior-engineer serious, NOT "matrix terminal / hacker gimmick". Inspirational references: brittanychiang.com, leerob.io, andy-bell.design.

**Palette**:
- Base: `#0d0d10` (charcoal, not pure black)
- Surfaces: `zinc-900` / `zinc-800`
- Text: `zinc-100` (primary) / `zinc-400` (secondary)
- Accent: `#22d3ee` (cyan técnico) — used sparingly for emphasis, CTAs, status

**Typography**:
- Sans (body, headings): **Geist** (fallback Inter)
- Monospace (metadata, labels, numbers, code): **Geist Mono** (fallback JetBrains Mono)
- Never use monospace for long-form body text (readability)

**Signature effects** (subtle, performance-conscious, respect `prefers-reduced-motion`):
- Typing animation in hero (single phrase, runs once)
- Blinking cursor on CTAs
- `● available for opportunities` status indicator with pulsing dot
- Faint blueprint grid background
- Hover glitch / mono offset on project cards
- Numbered section labels in monospace: `01 — selected work`

## Site structure

Single-page home with anchors. Individual pages per project case study.

```
/                  → Home (hero + sections)
/work/[slug]       → Case study per project (MDX)
/now               → "What I'm currently focused on" (replaces blog initially)
/writing           → Reserved route, NOT linked yet (activate at 3+ posts)
```

**Home sections**:
1. **Hero** — name, "Computer Engineer", one-liner, status indicator, primary CTA
2. **Selected work** — 3 curated projects (equal weight, no hero/featured label)
3. **About** — short bio, stack, "outside code" (theoretical physics as honest hobby)
4. **Now** — current focus, lightweight monthly-ish update
5. **Contact** — LinkedIn, GitHub, email

## Selected projects (initial set)

Three projects, equal visual weight. No "featured" or "hero" labels:

1. **Game Boy emulator** — low-level systems exploration, C. Status: in progress.
2. **spotloader** — self-hosted Spotify downloader, Python.
3. **Gender Classification** — ML/AI angle, Jupyter.

Each has a case study at `/work/[slug]` with: problem · decisions · tradeoffs · status. Honesty over inflation — these reflect a CS student going deep before specializing.

**Parked / future projects**:
- ModularDiscordBot — aparcado (Discord bots ya no destacan post-IA). Reactivar si se reescribe mejor o se migra a Telegram.
- Scraping — planned, freelance market angle. Add when ready.
- Telegram bot — possible upgrade path from Discord bot.

## Content principles

- **English only** initially (international reach, tech standard)
- **Show, don't tell** — work first, bio second
- **Honest positioning**: "exploring depth before specializing", not faking senior expertise
- **No invented projects, no fluff metrics**
- Case studies = problem → decisions → result/tradeoffs

## Future considerations (not implementing now)

- Scraping projects: add to Selected Work when ready
- Telegram bot: replacement/upgrade for parked Discord bot
- Blog activation: only when 3+ writeups exist. `/writing` route scaffolded but unlinked.
- Services section: currently just "Open to opportunities" CTA. Activate if freelance pivot.
- Spanish version: not initially. Add toggle only if target market shifts.

## Conventions

- **Git**: initialize at scaffold step. Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `style:`). Commit per logical unit, not per file. Branch off `main` for any non-trivial work.
- **File layout**: standard Astro (`src/pages`, `src/components`, `src/layouts`, `src/content` for MDX case studies, `src/styles`, `public/`).
- **Performance budget**: Lighthouse 95+ across the board. JS only where it earns its weight.
- **Accessibility**: semantic HTML, keyboard nav, `prefers-reduced-motion` respected for all animations, alt text on everything.
- **SEO**: OpenGraph + Twitter card per page, sitemap, robots.txt, canonical URLs.

## Execution plan (step-by-step)

Each step = at least one commit. Pause between steps for review.

1. **Scaffold** — `npm create astro@latest`, add Tailwind, TypeScript strict, MDX, Framer Motion. Define folder structure. Initial commit.
2. **Design tokens + primitives** — Tailwind config (colors, fonts, spacing), global styles, base components: `Button`, `Link`, `ProjectCard`, `StatusIndicator`, `MonoLabel`, `Section`.
3. **Global layout** — `Layout.astro` with header/footer. Hero section with typing animation + status indicator.
4. **Selected Work** — grid on home + case study template (`/work/[slug]`) with MDX content collection. Placeholder copy.
5. **About + Now + Contact** — remaining sections. Wire LinkedIn, GitHub, email.
6. **Real content pass** — write hero copy, bio, 3 case studies (real, even if brief). Done collaboratively with Juan.
7. **Polish** — microinteractions audit, SEO meta tags, OpenGraph images, sitemap, robots.txt, accessibility pass, Lighthouse audit.
8. **Deploy** — choose Cloudflare Pages vs Vercel, configure custom domain `juaniznardo.com`.

## What to ask Juan before coding

Nothing pending — plan is locked. Start step 1.
