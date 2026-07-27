# mybuildspace — Portfolio (Next.js 16)

## Commands

| Command | What |
|---|---|
| `npm run dev` | dev server at `localhost:3000` |
| `npm run build` | production build + TypeScript check |
| `npm run lint` | ESLint (config in `eslint.config.mjs`) |
| `npm start` | start production build |

Build order: `npm run lint ; if ($?) { npm run build }`

## Stack

- **Next.js 16.2.11** (App Router, Turbopack for dev/build)
- **React 19.2.4** with React Compiler enabled (`reactCompiler: true` in `next.config.ts`)
- **TypeScript 5** — strict mode, `@/*` alias → `./src/*`
- **Tailwind CSS v4** — config via CSS `@theme` directive in `src/app/globals.css`, *not* `tailwind.config.*`
- **PostCSS** via `@tailwindcss/postcss`
- **Icons** — `react-icons/si` + `react-icons/fa6` packages

## Project data

- **`src/data/projects.ts`** — typed `Project[]` array; source of truth for project cards
- **`public/images/`** — project screenshots referenced by `project.images`

## Routes

- **`/`** — main portfolio page (hero, about, tech stack, projects preview, education, footer)
- **`/projects`** — full project listing page

## Components (10 total, in `src/components/`)

| Component | Type | Role |
|---|---|---|
| `Navbar.tsx` | client | fixed top nav, `/` and `/projects` links, active-state highlighting via `usePathname` |
| `StarField.tsx` | client | 250+ CSS-animated stars, shooting stars, nebula glow (DOM injection via `useRef`) |
| `ScrollReveal.tsx` | client | `IntersectionObserver` fade-in/slide-up wrapper |
| `ImageLightbox.tsx` | client | fullscreen overlay via `createPortal`, escape-to-close |
| `TechStack.tsx` | client | 9 tech icons with 3D tilt + glow |
| `ProjectsSection.tsx` | client | renders project cards from `@/data/projects`, accepts `limit`/`showSeeAll` props |
| `Footer.tsx` | server | contact me bar with GitHub & Instagram links |
| `ProfileAvatar.tsx` | server | abstract SVG face portrait |
| `AboutSection.tsx` | server | bio section |
| `EducationSection.tsx` | server | diploma & bootcamp entries |

## Key conventions

- **Dark slate theme** — background `#0f172a`, accent sky blue `#38bdf8` (CSS custom properties in `globals.css`)
- **CSS animations** in `globals.css` (`.shooting-star`, `.reveal`, `.glass`)
- **Scroll reveal** uses `IntersectionObserver` via `ScrollReveal` wrapper
- **No env files** — `.env*` gitignored
- **No unit tests** in this project
- **Styling** uses Tailwind utility classes + `globals.css` keyframes; no separate CSS modules
