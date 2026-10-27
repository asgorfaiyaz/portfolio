# Project History & Context Tracker

> **Project**: Full Stack Developer Portfolio (SPA)  
> **Target Audience**: Technical Recruiters, Engineering Managers, Clients  
> **Brand / Name**: Faiyaz (`faiyaz.dev`)  
> **Last Updated**: October 2026

---

## 1. Tech Stack & Architecture

- **Framework**: [Next.js 16.4.3](https://nextjs.org) (App Router, Turbopack default)
- **Runtime / UI Library**: React 19.3.0, React DOM 19.3.0
- **Language**: TypeScript 5 with path alias `@/*` -> `./*`
- **Styling**: Tailwind CSS v4 (`@tailwindcss/turbopack`, `@import "tailwindcss";`, `@theme inline`)
- **Component Primitives**: shadcn UI `base-nova` style powered by `@base-ui/react` (Base UI)
- **Icons**: `lucide-react`
- **Typography**: `Inter` via `next/font/google` (`--font-inter`)
- **Class Utilities**: `cn` package directly via `lib/utils.ts`

---

## 2. Design System & Tokens Philosophy ("Engineered Obsidian")

The portfolio follows an intentional, minimalist, dark-mode-first aesthetic tailored for a senior software engineer:

1. **Strictly Dark Mode**: 
   - `html` has class `dark` and `color-scheme: dark`.
   - Native dark scrollbars, dark form inputs, and zero light-flash.
2. **Zero Gradients & Zero Rainbow Clutter**:
   - Multi-color glows and gradient text are strictly prohibited.
   - Visual richness is achieved through **typography contrast** and **stepped surface elevation**.
3. **Stepped Surface Hierarchy (OKLCH)**:
   - `--background` (`oklch(0.12 0.005 260)`): Deep canvas obsidian.
   - `--card` / `--surface-raised` (`oklch(0.155 0.006 260)`): First elevation layer for cards and wells.
   - `--popover` / `--surface-overlay` (`oklch(0.19 0.008 260)`): Floating panels, dropdowns, and drawers.
   - `--muted` (`oklch(0.175 0.006 260)`): Secondary interactive background and pills.
4. **Typographic Hierarchy**:
   - `--foreground` (`oklch(0.985 0 0)`): Primary headings and body copy (high contrast).
   - `--muted-foreground` (`oklch(0.70 0.008 260)`): Secondary descriptions and captions.
   - `--subtle-foreground` (`oklch(0.48 0.006 260)`): Metadata, timestamps, and section counters.
5. **Hairline Structural Borders**:
   - `--border`: `oklch(1 0 0 / 10%)`
   - `--border-subtle`: `oklch(1 0 0 / 6%)`
   - `--border-hover`: `oklch(1 0 0 / 20%)`
6. **Single Semantic Status Color**:
   - `--status-online` (`oklch(0.72 0.17 155)`): Refined terminal emerald for live availability and git commit indicators.

---

## 3. Strict Coding Conventions for AI Agents

> [!IMPORTANT]
> **Base UI Button Linking Rule**:
> Do **NOT** use `<Button asChild>` (which was a Radix UI convention). Base UI does not use `asChild`.
> Always use `buttonVariants` directly on Next.js `<Link>`:
> ```tsx
> import { buttonVariants } from "@/components/ui/button";
> import Link from "next/link";
> 
> <Link 
>   href="/target" 
>   className={buttonVariants({ variant: "default", size: "default" })}
> >
>   Label
> </Link>
> ```

> [!IMPORTANT]
> **React 19 Immutability Rule (`react-hooks/immutability`)**:
> Never mutate `window.location.hash = ...` inside click handlers.
> Use `element.scrollIntoView({ behavior: "smooth" })` and `window.history.pushState(null, "", href)`.

---

## 4. Completed Features & Components

### A. Design Tokens & Styling
- **`app/globals.css`**: Tailwind v4 theme, OKLCH semantic color mapping, smooth scrolling with `scroll-padding-top: 5rem`.
- **`app/layout.tsx`**: Inter font integration, dark mode root, metadata configuration.

### B. Primitives (`components/ui/`)
- **`components/ui/button.tsx`**: Base UI button primitive with CVA variants (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`) and sizes (`default`, `xs`, `sm`, `lg`, `icon`).
- **`components/ui/badge.tsx`**: Minimal status badge with semantic variants (`default`, `outline`, `secondary`, `success`, `subtle`).

### C. Custom Hooks (`hooks/`)
- **`hooks/use-is-scrolled.ts`**: Tracks scroll position for dynamic navbar backdrop elevation (> 20px).
- **`hooks/use-scroll-spy.ts`**: Automatically tracks the active section in view (`home`, `about`, `skills`, `projects`, `contact`).

### D. Navigation System (`components/navbar/`)
- **`nav-logo.tsx`**: Unique developer brand logo:
  - Square micro-chip container with terminal icon.
  - Pulsing emerald live availability status dot (`bg-status-online`).
  - Monogram text: `Faiyaz.dev`.
- **`nav-links.tsx`**: Responsive desktop nav links with active indicator and smooth scrolling:
  - Links: `Home`, `About`, `Skills`, `Projects`, `Contact`.
- **`status-badge.tsx`**: "Available for work" status pill with live pulsating green indicator.
- **`mobile-nav.tsx`**: Responsive drawer menu for screens `< md`:
  - Backdrop blur overlay.
  - Keyboard Escape trap & background body scroll locking.
  - View Resume button (`/resume.pdf`, new tab) and Get in touch action.
- **`navbar.tsx`**: Sticky top navigation container with backdrop blur, active section detection, and primary "Resume" CTA.

### E. Banner / Hero Component (`components/banner/banner.tsx`)
- High-impact two-column layout (`12-column grid` on desktop, stacked on mobile).
- Tailored developer copy:
  - Heading: `"Hi, I'm Faiyaz."` with sub-heading `"In love with Next.js & TypeScript."`.
  - Narrative: Highlighting `"10+ completed projects"`, `"PERN"`, and `"MERN"` with technical micro-badges.
  - CTAs: `"Explore Projects"` (smooth scroll to `#projects`) and `"Get in touch"` (to `#contact`).
  - Core Focus row: Next.js 16, TypeScript, PostgreSQL, MongoDB, Tailwind CSS.
- **Clean Portrait Presentation** (`public/images/transparent-bg-main.png`):
  - Pure, minimal presentation with static import (`import portraitImg from "@/public/images/transparent-bg-main.png"`) to automatically handle the cropped `1002 × 909` aspect ratio and bust browser cache.
  - Centered in the 5-column right grid with responsive sizing (`max-w-sm sm:max-w-md`).
  - Next.js `<Image>` with `priority` for optimal LCP.

### F. Single Page Application Shell (`app/page.tsx`)
- Structured single-page layout with anchor sections:
  - `#home`: Hero section with quick action buttons.
  - `#about`: Background & philosophy placeholder.
  - `#skills`: Tech stack matrix placeholder.
  - `#projects`: Featured engineering work placeholder.
  - `#contact`: Get in touch placeholder.

---

## 5. Upcoming Feature Roadmap

1. **Hero Section Enhancement**:
   - Refined copy, terminal command snippet or quick interactive bio, social link badges (GitHub, LinkedIn, Email).
2. **About Me Section**:
   - Technical background, systems engineering focus, approach to building full-stack products.
3. **Skills & Architecture Matrix**:
   - Categorized stack (Backend, Frontend, Databases, DevOps/Cloud, Tooling).
   - Clean badges or cards without visual clutter.
4. **Featured Projects**:
   - Architecture highlights, tech tags, GitHub/Live demo links, clean previews.
5. **Contact Section**:
   - Minimalist contact card / form, direct email copy button with feedback toast.
