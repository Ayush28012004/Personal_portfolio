# Portfolio Documentation

## Overview
This project is a pure Next.js 16 App Router portfolio template.

## Core Architecture
- `app/`: routes, layout, and pages
- `components/`: reusable UI sections and utilities
- `config/`: site-level configuration and shared types
- `data/`: structured content for projects, experience, and blog posts
- `public/`: static assets

## Content Management
Update content in these files:
- `config/site.ts`: personal/profile/site settings
- `data/experience.ts`: experience entries
- `data/projects.ts`: project entries
- `data/blog.ts`: blog list and article content

## Theme
Theme variables are defined in `app/globals.css` with light/dark token blocks (`:root` and `.dark`).
Theme switching is handled via `next-themes` and `components/ThemeToggle.tsx`.

## SEO
SEO uses the Next.js metadata API:
- global metadata in `app/layout.tsx`
- page metadata in route files
- helper builder in `components/SeoMeta.ts`

## Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
```
