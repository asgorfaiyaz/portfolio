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
   - `--subtle-foreground` (`oklch(0.62 0.007 260)`): Metadata, timestamps, and section counters (boosted for clear legibility).
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
  - View Resume button (temporary notification alert while resume is being refreshed) and Get in touch action.
- **`navbar.tsx`**: Sticky top navigation container with backdrop blur, active section detection, and primary "Resume" CTA (triggers alert that resume is currently being updated).

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

### F. About Section (`components/about/about.tsx`)
- Section anchor: `#about`.
- Personal and technical narrative:
  - 10+ full-stack projects experience across PERN and MERN stacks with TypeScript.
  - Focus on clean architecture, type safety, and real-world web application scalability.
- Bento highlight cards:
  - `AI-Assisted Engineering`: Accelerating shipping cycles with modern AI workflows.
  - `Open to Opportunities`: Actively seeking Full Stack or Frontend roles.
  - `Movies, Series & Fluency`: How watching movies and TV series powers English fluency and natural cross-border communication.

### G. Skills & Architecture Section (`components/skills/skills.tsx`)
- Section anchor: `#skills`.
- 4-Domain Architectural Grid:
  - **01. Frontend & UI Engineering**: Next.js 16 (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Zustand, Redux / RTK Query.
  - **02. Backend & Server Architecture**: Node.js, Express.js, Drizzle ORM, Stripe Payments, RESTful APIs, Server Actions.
  - **03. Databases & Data Modeling**: PostgreSQL, MongoDB, Drizzle ORM, Relational Schema Design, CRUD Architectures.
  - **04. Authentication & Dev Tooling**: Better Auth, Clerk, Git & GitHub, AI-Assisted Development, Turbopack, ESLint / TypeScript 5.
- Core Architectural Focus Strip:
  - Dual stack versatility (PERN & MERN).
  - End-to-end type safety (Drizzle schema to React components).
  - Production integrations (Stripe, Better Auth, Clerk, TanStack caching).

### H. Featured Projects & Case Studies (`components/projects/`, `app/projects/`)
- **`lib/projects-data.ts`**:
  - Full typed project data models (`Project` interface) supporting architecture layer breakdowns (Frontend, Backend, Database, Auth/Security), delivered features, tags, and engineering challenges & solutions.
  - Included projects: **Pulseboard** (Developer Analytics SaaS), **Kuro Commerce** (Headless E-Commerce), **SyncSpace** (Kanban Workspace), **DevStack** (Tech Stack Builder), **FitLog** (Workout Companion), and **Productify** (Full-Stack E-Commerce & Product Management).
- **`components/projects/`**:
  - `projects.tsx`: Responsive grid header with terminal index, direct GitHub link, and modular project card map.
  - `project-card.tsx`: Dark terminal mockup preview with uploaded interface screenshots (`devstack.png`, `fitlog.png`, `productify.png`), hover scale zoom with floating "View Case Study" glass badge, stack tags, live status indicator, and direct deep-dive action links.
- **`app/projects/[slug]/page.tsx`**:
  - Deep-dive dynamic case study page with `generateStaticParams()`, `generateMetadata()`, and full-width browser mockup screenshot display.
  - Next.js 16 Suspense boundary wrapping `<ProjectDetailContent params={params} />` with skeleton fallback, eliminating "URL data outside of Suspense" navigation warnings.
- **Route-Aware Navigation System**:
  - `components/navbar/navbar.tsx`: Automatically activates the `"projects"` tab when on `/projects/*` routes, preventing false scroll-spy detections.
  - `nav-links.tsx`, `mobile-nav.tsx`, and `nav-logo.tsx`: Dynamically adjust link targets (`/#section` when off the home page, `#section` with smooth-scrolling when on the home page).

### I. Contact & Connect Section (`components/contact/`)
- Section anchor: `#contact`.
- Two-column responsive architecture:
  - **Direct Channels & Status Card (Left Column)**:
    - Quick email widget with one-click copy (`asgorfaiyaz@gmail.com`) providing visual `Copied!` tooltip feedback.
    - Verified direct email client launcher button (`mailto:asgorfaiyaz@gmail.com`).
    - Direct phone & WhatsApp card with one-click copy (`01889445355`), direct call trigger (`tel:+8801889445355`), and WhatsApp quick launch.
  - **Terminal-Style Contact Form (Right Column)**:
    - Styled with obsidian elevation (`border border-border bg-card/60 backdrop-blur-xs`) and mock window header `faiyaz.dev/send-message.ts`.
    - Fields: Name, Email, Phone (optional), Inquiry Category selector, and multi-line Message textarea.
    - Interactive dispatch feedback state with animated spinner and completion receipt with direct `mailto:` fallback.

### J. Minimalist Obsidian Footer (`components/footer/`)
- Brand chip monogram with active green availability pulse dot.
- Quick anchor navigation (`#home`, `#about`, `#skills`, `#projects`, `#contact`).
- Developer social profile shortcuts and smooth scroll-to-top button.
- Dynamic copyright year and technical build metadata.

### K. Single Page Application Shell (`app/page.tsx`)
- Structured single-page layout with anchor sections:
  - `#home`: Hero banner with developer narrative and action CTAs.
  - `#about`: Technical philosophy, background, and bento highlights.
  - `#skills`: 4-domain systems architecture matrix.
  - `#projects`: Featured engineering projects with interactive preview cards.
  - `#contact`: Comprehensive contact widget, copyable email, and interactive inquiry form.

---

## 5. Completed vs. Upcoming Feature Roadmap

- [x] **Hero Section**: High-impact two-column layout, developer copy, direct portrait presentation, action buttons.
- [x] **About Me Section**: Full stack narrative, bento highlights (`AI-Assisted Engineering`, `Open to Opportunities`).
- [x] **Skills & Architecture Matrix**: 4-domain technical grid (Frontend, Backend, Databases, Auth & Tooling).
- [x] **Featured Projects & Case Studies**:
  - Full projects with architecture breakdowns (**Pulseboard**, **Kuro Commerce**, **SyncSpace**, **DevStack**, **FitLog**, **Productify**).
  - Next.js 16 Suspense-wrapped dynamic detail routes (`/projects/[slug]`).
  - Route-aware universal navigation with automatic active tab handling and home-anchor routing.
- [x] **Contact Section & Footer**:
  - Minimalist terminal contact form, direct email copy button with copied feedback, and social link badges (GitHub, LinkedIn, Twitter/X, Email).
  - Clean obsidian footer with smooth back-to-top trigger.
- [ ] **Optional Polish & Additions**:
  - Optional custom resume PDF asset placed at `public/resume.pdf`.
  - Analytics integration or email dispatch provider (e.g., Resend / Formspree) if remote webhook desired.
