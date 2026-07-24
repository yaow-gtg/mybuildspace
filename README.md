# My Build Space

Personal portfolio website built with Next.js 16, featuring a dark space theme with interactive star field, tech stack showcase, and project links.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **UI:** React 19, Tailwind CSS v4
- **Icons:** react-icons (Simple Icons, Font Awesome)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build + TypeScript check |
| `npm run lint` | Run ESLint |
| `npm start` | Start production server |

## Structure

```
src/
  app/          — App Router (layout, page, globals.css, icon.svg)
  components/   — 7 components (server & client)
```

## Sections

- Hero — Name, abstract avatar, tagline
- About — Bio
- Tech Stack — 9 tech icons with 3D tilt effect
- Projects — Link cards to websites
- Education — Diploma & bootcamp
- Footer — Social links
