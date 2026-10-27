export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  stackBadge: string;
  featured: boolean;
  year: string;
  role: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  architecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    authAndPayments: string[];
  };
  keyFeatures: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "devstack",
    title: "DevStack",
    tagline: "Interactive Developer Technology Stack Builder & Explorer",
    summary:
      "A technology stack builder that allows developers to explore different technologies, view their details, and create a personalized development stack based on their interests and needs.",
    description:
      "DevStack is an interactive technology stack exploration and management tool. Built with React 19, TypeScript, Vite, and Tailwind CSS, it enables developers to browse categorized tech stacks with ratings and difficulty badges, assemble customized stacks in real time with duplicate prevention, and manage selections with instant toast feedback.",
    stackBadge: "React 19 + TypeScript",
    featured: true,
    year: "2026",
    role: "Frontend Developer",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Daisy UI",
      "React-Toastify",
      "React Icons",
    ],
    liveUrl: "https://dev-stack-asgorfaiyaz.netlify.app",
    githubUrl: "https://github.com/asgorfaiyaz/dev-stack",
    image: "/images/projects/devstack.png",
    architecture: {
      frontend: [
        "React 19 with Vite for ultra-fast HMR and optimized production bundles",
        "TypeScript for robust typing of technology data schemas and callback props",
        "Tailwind CSS & Daisy UI delivering a responsive, component-driven design system",
        "React-Toastify for non-intrusive alerts upon item additions, removals, and duplicates",
        "React Icons for crisp, lightweight iconography across technology cards",
      ],
      backend: [
        "Asynchronous JSON data loading simulating external API responses",
        "Client-side state orchestration using React 19 useState and useEffect hooks",
        "Modular architecture separating tech discovery cards from the stack sidebar",
      ],
      database: [
        "Structured JSON schema with ratings, difficulty levels, and category taxonomies",
        "In-memory state management with strict duplicate item validation guards",
      ],
      authAndPayments: [
        "Zero-friction client-side stack management without login friction",
        "Instant local state manipulation (single removal, bulk clear) with O(1) feedback",
      ],
    },
    keyFeatures: [
      "Dynamic Technology Grid: Dynamic rendering from JSON with ratings, category tags, and difficulty badges",
      "Interactive Stack Management: One-click addition to personal stack with duplicate prevention and full clear option",
      "Instant Feedback Engine: Responsive toast notifications with React-Toastify for additions, removals, and duplicates",
      "Responsive Multi-Device Layout: Fluid responsiveness across mobile, tablet, and desktop viewports with Daisy UI",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Preventing duplicate technology selections and maintaining clean state synchronization across interactive add and remove operations.",
        solution:
          "Utilized React 19 useState to store selected stacks, performing pre-insertion uniqueness checks before state updates and triggering informative warning toasts when duplicate entries are detected.",
      },
      {
        challenge:
          "Eliminating redundant data fetching and unintended re-renders during component mounting and list rendering.",
        solution:
          "Leveraged useEffect to fetch and parse the JSON dataset strictly once upon component mount, ensuring stable rendering and assigning unique key props to all list items for optimal React reconciliation.",
      },
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Gym & Workout Companion with Routine Builder & Metrics Tracker",
    summary:
      "A modern, dark-themed workout companion built with Next.js 16 and React 19 to discover exercises, build daily routines capped at 5 lifts, and track metrics like duration and calories.",
    description:
      "FitLog is a modern workout companion and routine management application. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, and shadcn/ui, it helps users explore exercises, build daily workout routines capped at 5 lifts, save favorites with multi-attribute sorting, and track estimated calorie expenditure and session duration in real time.",
    stackBadge: "Next.js 16 + React 19",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React-Toastify",
      "React Icons",
    ],
    liveUrl: "https://fit-log-asgorfaiyaz.vercel.app",
    githubUrl: "https://github.com/asgorfaiyaz/fit-log",
    image: "/images/projects/fitlog.png",
    architecture: {
      frontend: [
        "Next.js 16 App Router architecture leveraging React 19 client and server boundaries",
        "TypeScript for strict typing across exercise data schemas, routine states, and metrics",
        "Tailwind CSS paired with shadcn/ui delivering a dark-mode fitness experience",
        "React-Toastify providing non-blocking feedback for routine additions and capacity limits",
        "React Icons delivering intuitive gym and workout visual iconography",
      ],
      backend: [
        "Next.js 16 Route Handlers and modular data layer for workout library queries",
        "Client-side state orchestration for routine caps (5-lift constraint) and calculation pipelines",
        "Custom not-found handling providing dedicated dark-themed 404 recovery routes",
      ],
      database: [
        "Structured workout catalog with exercise duration, calorie burn estimates, and user ratings",
        "Reactive client-side collection state with multi-criteria sorting (Duration, Calories, Rating)",
      ],
      authAndPayments: [
        "Zero-friction local state management for routine building and saved exercises",
        "Instant client-side metric aggregations (total minutes, calories, exercise counts)",
      ],
    },
    keyFeatures: [
      "Workout Library: Comprehensive catalog with categories, durations, estimated calories, and ratings",
      "Personal Workout Plan: Daily routine builder with a 5-lift cap and live duration & calorie calculators",
      "Save for Later & Sorting: Bookmark workouts with dynamic sorting by duration, calories, or rating",
      "Custom 404 Recovery: Tailored dark-themed error page with quick navigation back to home or library",
      "Responsive Layout: Fluid cross-device experience across mobile, tablet, and desktop screens",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Enforcing routine business logic such as capping daily workout plans to a maximum of 5 lifts while keeping metric computations instantaneous.",
        solution:
          "Implemented state validation guards within routine dispatch handlers to prevent over-capacity additions while dynamically recomputing total session minutes and calories on state transitions.",
      },
      {
        challenge:
          "Delivering multi-criteria client-side sorting across saved workouts without causing layout shift or sluggish UI on mobile devices.",
        solution:
          "Designed memoized sorting routines that dynamically reorganize saved workout collections based on duration, calories, or ratings while preserving active filter states.",
      },
    ],
  },
  {
    slug: "productify",
    title: "Productify",
    tagline: "Full-Stack E-Commerce & Product Management Platform",
    summary:
      "A backend-focused e-commerce and product management system built with Express.js, TypeScript, PostgreSQL (Neon), and Drizzle ORM, featuring Clerk authentication and webhook synchronization.",
    description:
      "Productify is a full-stack e-commerce and inventory management platform designed with an emphasis on end-to-end type safety and scalable architecture. Built with React, TypeScript, Express.js, Drizzle ORM, and Neon Serverless PostgreSQL, it features seamless Clerk authentication with webhook synchronization, TanStack Query for advanced caching, and full CRUD operations on products and interactive comments.",
    stackBadge: "PERN + TypeScript",
    featured: true,
    year: "2026",
    role: "Full Stack Developer",
    tags: [
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "React",
      "TanStack Query",
      "Clerk Auth",
      "Neon DB",
      "Tailwind CSS",
      "Zod",
    ],
    liveUrl: "https://productify-client.onrender.com",
    githubUrl: "https://github.com/asgorfaiyaz/productify",
    image: "/images/projects/productify.png",
    architecture: {
      frontend: [
        "React.js with Vite and TypeScript for rapid HMR and strict UI type safety",
        "TanStack Query (React Query) for server state caching, background refetching, and optimistic updates",
        "Tailwind CSS & DaisyUI with Lucide React for modular component styling",
        "Axios interceptors automatically injecting Clerk JWT bearer tokens into API requests",
        "React Router for declarative client-side route navigation",
      ],
      backend: [
        "Express.js REST API with structured modular routing and Zod schema validation",
        "Clerk Express SDK middleware verifying incoming authorization tokens on protected routes",
        "Webhook handler pipeline synchronizing Clerk user events directly to PostgreSQL",
      ],
      database: [
        "PostgreSQL hosted on Neon Serverless with high-concurrency pooling",
        "Drizzle ORM for type-safe relational schemas (users, products, orders, comments)",
        "Drizzle Kit migration workflows optimized with pre-compiled TypeScript artifacts",
      ],
      authAndPayments: [
        "Clerk authentication across client (`clerk-react`) and server (`clerk-express`)",
        "Cryptographically verified Clerk webhooks for automated user registration and synchronization",
      ],
    },
    keyFeatures: [
      "Clerk Auth & Webhook Sync: Automated user lifecycle synchronization between Clerk and PostgreSQL database",
      "E-Commerce Core & CRUD: Full CRUD operations for products, interactive comments, and order management",
      "End-to-End Type Safety: Unified TypeScript interfaces shared across Drizzle ORM schema, API, and React components",
      "Optimized Server Caching: TanStack Query powered data fetching with optimistic updates and cache invalidation",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Resolving ESM module resolution (`NodeNext`) incompatibilities where Node expects `.js` import extensions while Drizzle CLI executes raw TypeScript source files.",
        solution:
          "Engineered a pre-compilation build step generating typed `.js` outputs in `/dist` before executing `drizzle-kit generate` and `drizzle-kit push`, seamlessly bridging Node ESM and Drizzle CLI requirements.",
      },
      {
        challenge:
          "Guaranteeing that every client API request securely transmits validated user credentials without manual token management on every fetch.",
        solution:
          "Created centralized Axios interceptors that retrieve the active Clerk session token and dynamically inject it into `Authorization: Bearer <token>` headers with centralized 401 error recovery.",
      },
    ],
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS_DATA;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}
