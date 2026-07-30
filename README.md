# El Ras Attorneys Inc — Website

A premium, cinematic law firm website for El Ras Attorneys Inc (Mahikeng, North West).
Built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP (ScrollTrigger),
Lenis smooth scroll, and React Three Fiber for a single hero accent.

## Stack

- **React 19 + TypeScript + Vite** — app shell and build
- **Tailwind CSS** — utility styling, themed with the firm's brand tokens (`tailwind.config.ts`)
- **Framer Motion** — mobile menu, loader, magnetic buttons, contact wizard transitions
- **GSAP + ScrollTrigger** — hero headline word-reveal animation
- **Lenis** — smooth scroll, wired into GSAP's ticker (`src/hooks/useLenis.ts`)
- **React Three Fiber** — one abstract 3D gold form in the hero (`src/components/three/HeroScene.tsx`)
- **React Router** — multi-page routing (Home, About, Practice Areas, Team, Insights, Contact)
- **lucide-react** — icon set

## Project structure

```
src/
  components/
    ui/         reusable primitives (Button, Reveal, Counter, Magnetic, SectionHead...)
    layout/      Navbar, Footer, MobileMenu, Loader, CustomCursor, RootLayout...
    sections/    page sections (Hero, Stats, PracticeAreas, ContactWizard...)
    three/       the R3F hero scene
  data/          all site copy and content, centralized and typed
  hooks/         scroll progress, on-screen detection, counters, Lenis
  pages/         one file per route
  lib/           small utilities (cn helper)
```

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Pushing to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Initial commit: El Ras Attorneys site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first, without a README, then run the commands above.)

## Before this goes live — placeholder content to replace

- **`src/data/team.ts`** — attorney name, real bio, admission date, qualifications
- **`src/data/insights.ts`** — currently placeholder articles for layout purposes
- **`src/components/layout/FloatingButtons.tsx`** — `WHATSAPP_NUMBER` constant
- **`src/components/sections/ContactSection.tsx`** — phone number and email
- Hero and attorney-profile visuals are intentionally abstract (gold line art / R3F form)
  since no real firm photography exists yet — swap in real photos when available
- The contact wizard currently only stores form state locally; wire `onSubmit` in
  `src/components/sections/ContactWizard.tsx` to your email/CRM endpoint of choice

## Notes on the build

- Tailwind uses only core utilities plus the brand tokens defined in `tailwind.config.ts`
  (`emerald`, `gold`, `ivory`, `inkdark`, `font-display`/`font-body`).
- Motion respects `prefers-reduced-motion` (Lenis is skipped, CSS transitions collapse — see
  `src/index.css`).
- Lighthouse/accessibility: semantic landmarks, visible focus states via Tailwind defaults,
  labeled form fields, `aria-label`s on icon-only buttons.
