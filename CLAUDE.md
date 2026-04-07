# Kacper Ryske — Portfolio

## Project
Portfolio site for Kacper Ryske, general software developer portfolio.

## Stack
- **Framework:** Next.js 14.2.5 (static export via `output: 'export'`)
- **UI:** React 18, Tailwind CSS 3.3.x (NOT v4 — do not use `@theme`, do not use CSS-first config)
- **Animation:** Framer Motion 11

## Deployment
GitHub Pages via GitHub Actions. Static output to `/out` directory.

## Fonts
Loaded via `next/font/google` in `app/layout.js`. Add new fonts here only.
- **Display / Mono:** Space Mono (400, 700) — headings, nav, metadata, tags
- **Body:** Work Sans (variable) — prose, descriptions, body text

## Styling Rules
- All utility classes must exist in Tailwind v3 base stylesheet (no JIT-only classes that won't purge correctly)
- Custom CSS goes in `globals.css` using `@layer` or plain class definitions
- All colours defined as CSS custom properties in `globals.css` and as Tailwind theme tokens in `tailwind.config.js`

## Component Conventions
- All interactive components are `'use client'`; static components can be server components
- No default exports from `/data` files — use named exports only

## Image Handling
- `next/image` is disabled (`unoptimized: true`)
- Use standard `<img>` tags with CDN URLs for icons

## Do Not Modify
- `next.config.js`
- `.github/workflows/deploy.yml`
- `package.json` (unless adding a new Google Font that needs no install)

## Design System — Swiss Grid / Brutalist Typography

### Colour Palette
- **Canvas (bg):** `#0A0A0A` — near-black
- **Surface:** `#111111` — slightly raised backgrounds
- **Ink (fg):** `#E8E4DC` — warm off-white
- **Muted:** `#6B6560` — warm gray for secondary text
- **Accent:** `#D4580A` — burnt orange (Bauhaus-inspired)
- **Rule:** `#2A2A2A` — visible structural rules
- **Stroke:** `#1E1E1E` — subtle borders

### Key Accent Colour
`#D4580A` (burnt orange) — Bauhaus-inspired editorial accent.

### Design Decisions
- About section: restored in page.js with Swiss grid two-column layout
- AIOrb: removed — felt decorative, not intentional in this aesthetic
- CursorBuddy: removed — radial gradient glow conflicts with brutalist direction
