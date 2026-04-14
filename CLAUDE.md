# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for "Associami Subito" built with Astro 6 and Tailwind CSS v4. Requires Node >= 22.12.0.

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally

## Architecture

- **Astro 6** static site with Tailwind CSS v4 integrated via the `@tailwindcss/vite` plugin (configured in `astro.config.mjs`)
- Tailwind is imported in `src/styles/global.css` using the v4 `@import "tailwindcss"` syntax
- `src/layouts/Layout.astro` — Base HTML layout, imports global CSS
- `src/pages/` — File-based routing (currently single `index.astro` page)
- `src/components/` — Astro components
- `src/assets/` — Static assets processed by Astro (SVGs)
- `public/` — Static assets served as-is (favicons)
- TypeScript configured with Astro's `strict` preset