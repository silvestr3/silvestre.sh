# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **Bun** as the package manager.

```bash
bun dev          # Start development server
bun build        # Production build
bun start        # Start production server
bun lint         # Run ESLint (v9 flat config)
```

There is no test suite configured in this project.

## Architecture

**Next.js 16 App Router** — no `src/` prefix. The `app/` and `components/` directories sit at the project root.

### Directory layout

- `app/` — Next.js App Router pages and page-scoped components
  - Page-level components live under `app/components/` (e.g. `app/components/hero/`, `app/components/recent-posts/`). Each section follows a pattern of an `index.tsx` entry point with a nested `components/` folder for its sub-components.
- `components/` — Reusable components shared across the app
  - `components/ui/` — Atomic UI primitives (shadcn/ui, new-york style)
  - `components/global/` — Layout wrappers used across multiple sections (`SectionWrapper`, `SectionTitle`)
- `lib/` — Utilities: `api.ts` (Ghost CMS client), `utils.ts` (`cn()` helper)
- `env/` — Zod-validated environment variables (`env/index.ts`). Import as `import { env } from "@/env"`.
- `public/` — Static assets

### Path aliases

`@/` maps to the project root. So `@/components/ui/button` resolves to `components/ui/button.tsx`, `@/lib/api` to `lib/api.ts`, etc.

### Blog / CMS integration

Blog posts are fetched server-side from a **Ghost CMS** instance at `https://blog.silvestre.sh` using `@tryghost/content-api`. The client is initialized in `lib/api.ts`. The `RecentPosts` component uses React's `use()` hook to stream the Ghost API promise directly, wrapped in `<Suspense>` for loading states.

### Styling

- **Tailwind CSS v4** — theme is defined via `@theme inline` in `app/style/globals.css`. All semantic color tokens (primary, muted, card, etc.) are CSS custom properties wired into Tailwind through `@theme inline`.
- **shadcn/ui** configured in `components.json` (new-york style, RSC-enabled, lucide icons). To add new shadcn components: `bunx shadcn add <component>`.
- Fonts: Space Grotesk (sans) and Space Mono (mono), loaded via `next/font/google` in the root layout.
- Primary brand color: `#ee5e2f`

### Key environment variables

Defined in `.env` and validated at startup by `env/index.ts`:

| Variable | Purpose |
|---|---|
| `BLOG_URL` | Ghost CMS base URL |
| `BLOG_API_KEY` | Ghost admin API key (unused at runtime currently) |
| `BLOG_CONTENT_API_KEY` | Ghost Content API key (used by `lib/api.ts`) |
