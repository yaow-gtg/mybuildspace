# mybuildspace — Portfolio (Next.js 16)

## Commands

| Command | What |
|---|---|
| `npm run dev` | dev server at `localhost:3000` |
| `npm run build` | production build + TypeScript check |
| `npm run lint` | ESLint (config in `eslint.config.mjs`) |
| `npm start` | start production build |

Build order: `lint → build`. Build includes `tsc` typecheck.

## Stack

- **Next.js 16.2.11** (App Router, Turbopack for dev/build)
- **React 19.2.4** with React Compiler enabled (`reactCompiler: true` in `next.config.ts`)
- **TypeScript 5** — strict mode, `@/*` alias → `./src/*`
- **Tailwind CSS v4** — config via CSS `@theme` directive in `src/app/globals.css`, *not* `tailwind.config.*`
- **PostCSS** via `@tailwindcss/postcss`

## Structure

```
src/
  app/            — App Router entries (layout, page, globals.css, icon.svg)
    layout.tsx    — root layout, metadata, Geist font
    page.tsx      — single portfolio page (server component, composes client components)
    icon.svg      — favicon
  components/     — 7 components, mix of server & client
    StarField.tsx     — client: CSS-animated stars + shooting stars + nebula
    ProfileAvatar.tsx — server: abstract SVG face portrait
    TechStack.tsx     — client: 9 tech icons with 3D tilt + glow (react-icons/si + react-icons/fa6)
    ProjectsSection.tsx — client: project link cards
    ScrollReveal.tsx  — client: IntersectionObserver fade-in/slide-up
    AboutSection.tsx  — server
    EducationSection.tsx — server
```

## Key conventions

- **Single-page portfolio** — no routes beyond `/`
- **Dark slate theme** — background `#0f172a`, accent sky blue `#38bdf8` (defined as CSS custom properties in `globals.css`)
- **CSS animations** in `globals.css` (`.shooting-star`, `.reveal`, `.glass`)
- **Scroll reveal** uses `IntersectionObserver` via `ScrollReveal` wrapper
- **Tech logos** use `react-icons/si` and `react-icons/fa6` packages
- **No env files** — `.env*` gitignored
- **No unit tests** in this project
