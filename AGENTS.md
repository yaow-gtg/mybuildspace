# mybuildspace — Portfolio (Next.js 16)

## Commands

| Command | What |
|---|---|
| `npm run dev` | dev server at `localhost:3000` |
| `npm run build` | production build + TypeScript check |
| `npm run lint` | ESLint (`eslint.config.mjs`) |
| `npm start` | start production build |

Build order: `npm run lint ; if ($?) { npm run build }`

## Stack

- **Next.js 16.2.11** (App Router, Turbopack for dev/build)
- **React 19.2.4** with React Compiler enabled (`reactCompiler: true` in `next.config.ts`)
- **TypeScript 5** — strict mode, `@/*` alias → `./src/*`
- **Tailwind CSS v4** — configured via `@theme inline` in `src/app/globals.css`, *not* a JS config file; custom tokens become utilities (`bg-accent`, `text-accent-dark`, …)
- **PostCSS** via `@tailwindcss/postcss`
- **Icons** — `react-icons/si` + `react-icons/fa6`
- **Fonts** — Geist Sans + Geist Mono via `next/font/google` in `layout.tsx`
- **Deploy** — Vercel (hardcoded URL `https://mybuildspace.vercel.app` in `layout.tsx`, `sitemap.ts`, `robots.ts`) — update all three if the URL changes

## Project data

- **`src/data/projects.ts`** — typed `Project[]` array; single source of truth for project cards
- **`public/images/`** — project screenshots (referenced by `project.images`)

## Routes

- **`/`** — main portfolio page (hero, about, tech stack, projects preview, education, footer)
- **`/projects`** — full project listing page
- **`/contact`** — contact cards (email, WhatsApp, GitHub, Instagram)

## App Router special files (`src/app/`)

- `icon.svg` — favicon
- `opengraph-image.tsx` — dynamic OG image via `next/og` `ImageResponse` (1200×630, dark theme)

## Components (`src/components/`)

| Component | Type | Role |
|---|---|---|
| `Navbar.tsx` | client | fixed top nav, active-state via `usePathname` |
| `StarField.tsx` | client | 310 CSS-animated stars + 5 shooting stars + 3 nebula glow divs; stars injected via DOM in `useEffect` |
| `ScrollReveal.tsx` | client | `IntersectionObserver` fade-in/slide-up wrapper |
| `ImageLightbox.tsx` | client | fullscreen overlay via `createPortal`, escape-to-close |
| `TechStack.tsx` | client | 12 tech icons with 3D tilt + glow on hover |
| `ProjectsSection.tsx` | client | renders cards from `@/data/projects`, accepts `limit`/`showSeeAll` props |
| `Footer.tsx` | server | contact bar with GitHub & Instagram links |
| `ProfileAvatar.tsx` | server | circular profile photo from `public/avatar-profile.jpg` |
| `AboutSection.tsx` | server | bio section |
| `EducationSection.tsx` | server | diploma & bootcamp entries |

## Key conventions

- **Dark slate theme** — background `#0f172a`, accent `#38bdf8` (CSS custom properties in `globals.css`)
- **CSS animations** in `globals.css` (`.shooting-star`, `.reveal`, `.glass`)
- **Scroll reveal** uses `IntersectionObserver` via `ScrollReveal` wrapper
- **Styling** uses Tailwind utility classes + `globals.css` keyframes; no CSS modules
- **No env files** — `.env*` gitignored
- **No unit tests** — no test framework in dependencies
- **No CI** — no `.github/` directory; lint + build are manual
- **No OpenCode config** — no `opencode.json`
