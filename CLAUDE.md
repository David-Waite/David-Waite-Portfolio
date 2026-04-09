# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

Next.js 13 App Router portfolio site using TypeScript and CSS Modules.

**Routing** is directory-based under `app/`. Each project has its own route directory (e.g., `app/SmartCoasterWithFriends/`). The only API route is `app/contact/send/route.ts` (POST, uses SendGrid).

**Root layout** (`app/layout.tsx`) wraps all pages with `NavBar` and `Footer`. The home page (`app/page.tsx`) includes a Google Analytics script tag.

**Component structure** under `app/components/`:
- `Nav/NavBar/NavBar.tsx` — client component; dynamically changes the Home/About link based on current path
- `Home/Projects/Projects.tsx` — main projects showcase with Featured/All toggle (Dropdown component)
- `Contact/contact.tsx` — contact form, currently disabled/commented out

**Styling**: CSS Modules per component/page. Global CSS variables defined in `app/globals.css`:
- `--primary: #255b48` (teal), `--background: #f3eddf` (cream), `--black: #191d1b`
- Responsive breakpoints at 768px and 425px

**Images**: All project screenshots are WebP files in `public/`, served via Next.js `<Image>` component.

## Environment Variables

- `SENDGRID_API_KEY` — required for contact form email submission (currently disabled in UI)
