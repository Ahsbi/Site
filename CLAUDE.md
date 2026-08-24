# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for a BI/data-automation consultancy targeting accounting firms, implemented from the spec in `.llm/prd.md` (business goals, narrative, design system, section-by-section content). Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Commands

```bash
npm install    # install dependencies
npm run dev    # dev server at http://localhost:3000
npm run build  # production build (also runs the TypeScript check)
npm run lint   # ESLint (flat config in eslint.config.mjs)
```

There is no test suite yet.

## Architecture

- `src/app/page.tsx` composes the whole one-page site from section components, in the order defined by the PRD (Hero → Challenges → Benefits → Dashboards → HowItWorks → BeforeAfter → Integrations → WhyBI → Testimonials → FinalCta).
- `src/components/sections/*` — one component per landing-page section. Each imports its own copy from `src/data/content.ts` rather than hardcoding strings.
- `src/components/ui/*` — the shared design-system primitives (`Container`, `Badge`, `Button`, `Card`, `SectionHeading`) that every section is built from. Prefer reusing/extending these over adding new one-off styled elements.
- `src/components/layout/*` — `Navbar` (client component, holds the mobile-menu state) and `Footer`.
- `src/data/content.ts` — single source of truth for all page copy, list items, and the `lucide-react` icon assigned to each item. Update copy here, not inside section JSX.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge) for conditional class composition.
- Design tokens (brand navy `ink-*` and accent blue `brand-*` color scales, font variables) are defined once via `@theme inline` in `src/app/globals.css`; components reference them as normal Tailwind classes (e.g. `bg-ink-950`, `text-brand-400`).
- Fonts are loaded in `src/app/layout.tsx` via `next/font/google` (Inter for body text, Manrope for headings/`font-display`).

When a flex container (`flex flex-col`) wraps a `Badge`, give it `items-start` (or `items-center`) explicitly — otherwise the default `align-items: stretch` stretches the badge pill to the container's full width.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
