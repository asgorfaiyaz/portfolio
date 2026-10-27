import { Rocket, Sparkles, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HIGHLIGHT_CARDS = [
  {
    icon: Sparkles,
    tag: "Modern Workflow",
    title: "AI-Assisted Engineering",
    description:
      "Leveraging cutting-edge AI tools to accelerate shipping cycles while maintaining clean, maintainable architecture.",
  },
  {
    icon: Rocket,
    tag: "Current Goal",
    title: "Open to Opportunities",
    description:
      "Actively seeking Full Stack or Frontend roles to build impactful products and learn alongside senior engineers.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Heading */}
        <div className="max-w-3xl space-y-4">
          <Badge
            variant="outline"
            className="border-border bg-surface-raised/80 px-3 py-1 text-xs text-foreground-muted"
          >
            <Terminal className="size-3.5 text-foreground-subtle" />
            <span>01 / About Me</span>
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]">
            Bridging frontend craftsmanship with robust backend architecture.
          </h2>

          <p className="text-lg text-foreground-muted leading-relaxed">
            I am a Full Stack Developer who loves turning complex product
            requirements into clean, type-safe, and scalable web applications.
          </p>
        </div>

        {/* Content Grid: Narrative Story + Bento Highlights */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Narrative Story (7 cols) */}
          <div className="space-y-6 text-base text-foreground-muted leading-relaxed lg:col-span-7">
            <p>
              My engineering journey is grounded in continuous building. Having
              developed{" "}
              <span className="font-semibold text-foreground">
                10+ full-stack projects
              </span>
              , I don&apos;t just write code to make things work on surface
              level—I focus on how real-world production web applications are
              structured, maintained, and scaled.
            </p>

            <p>
              I specialize in the{" "}
              <span className="font-semibold text-foreground">PERN</span> and{" "}
              <span className="font-semibold text-foreground">MERN</span> stacks
              with{" "}
              <span className="font-semibold text-foreground">TypeScript</span>{" "}
              across the entire stack. From building reactive, accessible user
              interfaces with Next.js, React, and Tailwind CSS, to designing
              relational databases with PostgreSQL and Drizzle ORM, I prioritize
              reliability, performance, and clean developer experience.
            </p>

            <p>
              Beyond traditional development, I actively embrace{" "}
              <span className="font-semibold text-foreground">
                AI-assisted workflows
              </span>{" "}
              to test hypotheses, iterate on architecture, and ship web
              applications significantly faster, all while continually refining
              my communication and teamwork skills.
            </p>
          </div>

          {/* Right Column: Bento Highlight Cards (5 cols) */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {HIGHLIGHT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xs transition-all duration-300 hover:border-border-hover hover:bg-surface-raised/40"
                >
                  <div className="flex items-center justify-between pb-3">
                    <span className="rounded-lg border border-border/80 bg-surface-raised p-2 text-foreground transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-4 text-foreground" />
                    </span>
                    <span className="font-mono text-[11px] text-foreground-subtle uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground tracking-tight">
                    {card.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-foreground-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
