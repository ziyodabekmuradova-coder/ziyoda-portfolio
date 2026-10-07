# Ziyoda Usman — Product Designer Portfolio

A production-ready one-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## Project images

Replace the placeholder cover files by adding your real images at:

- `public/projects/ziyoly/cover.jpg`
- `public/projects/wedrive/cover.jpg`
- `public/projects/testbor/cover.jpg`
- `public/projects/shum-agency/cover.jpg`
- `public/projects/kvadratik/cover.jpg`
- `public/projects/gshop/cover.jpg`
- `public/projects/demand/cover.jpg`
- `public/projects/testbor-ambassador/cover.jpg`

If a cover is missing, the UI automatically renders an elegant local placeholder instead of a broken-image state.

## Environment variables

Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_FULL_PORTFOLIO_URL=https://your-full-portfolio-link.com
NEXT_PUBLIC_EMAIL=you@example.com
NEXT_PUBLIC_TELEGRAM=https://t.me/yourusername
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/yourusername
```

If `NEXT_PUBLIC_FULL_PORTFOLIO_URL` is missing, the CTA temporarily falls back to `https://www.figma.com/` as requested.

## Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the `NEXT_PUBLIC_*` environment variables in Vercel Project Settings.
4. Deploy. Vercel will detect Next.js automatically.

## Architecture

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  About.tsx
  Capabilities.tsx
  Contact.tsx
  Experience.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  Process.tsx
  ProjectCard.tsx
  ProjectVisual.tsx
  Projects.tsx
  Reveal.tsx
  Testimonials.tsx
data/
  projects.ts
public/
  favicon.svg
  projects/
```
