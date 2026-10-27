import { Badge } from "@/components/ui/badge";
import {
  Boxes,
  Database,
  Layers,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend & UI Engineering",
    icon: Layers,
    description:
      "Crafting reactive, accessible, and high-performance interfaces with modern state management.",
    skills: [
      "Next.js 16 (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
      "Redux / RTK Query",
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend & Server Architecture",
    icon: Server,
    description:
      "Developing resilient server-side services, robust REST APIs, and third-party payment integrations.",
    skills: [
      "Node.js",
      "Express.js",
      "Drizzle ORM",
      "Stripe Payments",
      "RESTful APIs",
      "Server Actions",
    ],
  },
  {
    id: "database",
    number: "03",
    title: "Databases & Data Modeling",
    icon: Database,
    description:
      "Designing relational schemas and document stores with type-safe query builders and migrations.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Relational Schema Design",
      "CRUD Architectures",
    ],
  },
  {
    id: "auth-tools",
    number: "04",
    title: "Authentication & Dev Tooling",
    icon: ShieldCheck,
    description:
      "Securing user identities and leveraging modern development environments to ship with speed.",
    skills: [
      "Better Auth",
      "Clerk",
      "Git & GitHub",
      "AI-Assisted Development",
      "Turbopack",
      "ESLint / TypeScript 5",
    ],
  },
];

const CORE_STACK_PILLARS = [
  {
    label: "PERN & MERN Stacks",
    detail: "Postgres / Mongo • Express • React / Next • Node",
  },
  {
    label: "End-to-End Type Safety",
    detail: "Strict TypeScript from Drizzle schema to React props",
  },
  {
    label: "Production Integrations",
    detail: "Stripe checkouts, Better Auth / Clerk sessions, TanStack caching",
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <Badge
            variant="outline"
            className="border-border bg-surface-raised/80 px-3 py-1 text-xs text-foreground-muted"
          >
            <Terminal className="size-3.5 text-foreground-subtle" />
            <span>02 / Skills & Architecture</span>
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]">
            Technologies & tools I build with daily.
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed">
            A breakdown of my technical stack across the full application lifecycle—focused on type safety, speed, and maintainable structure.
          </p>
        </div>

        {/* 4-Domain Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur-xs transition-all duration-300 hover:border-border-hover hover:bg-surface-raised/40"
              >
                <div>
                  {/* Top Bar: Icon + Domain Number */}
                  <div className="flex items-center justify-between pb-5">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-border/80 bg-surface-raised text-foreground transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-5 text-foreground" />
                    </span>
                    <span className="font-mono text-xs font-semibold text-foreground-subtle">
                      {category.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-border/80 bg-surface-raised/70 px-2.5 py-1 font-mono text-xs text-foreground transition-colors group-hover:border-border hover:bg-surface-overlay"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Pillars Strip */}
        <div className="mt-8 rounded-2xl border border-border bg-surface-raised/30 p-6 sm:p-8">
          <div className="flex items-center gap-2 pb-4 border-b border-border-subtle">
            <Boxes className="size-4 text-foreground-subtle" />
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-subtle">
              Architectural Focus
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {CORE_STACK_PILLARS.map((pillar) => (
              <div key={pillar.label} className="space-y-1">
                <h4 className="text-sm font-semibold text-foreground">
                  {pillar.label}
                </h4>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
