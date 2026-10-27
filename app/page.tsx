import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Sticky Responsive Unique Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section (#home) */}
        <section
          id="home"
          className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl space-y-6">
            <Badge
              variant="outline"
              className="border-border bg-surface-raised/80 py-1 text-xs text-foreground-muted"
            >
              <Terminal className="size-3.5 text-foreground-subtle" />
              <span>Full Stack Systems & Web Architecture</span>
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl sm:leading-[1.1]">
              Hi, I&apos;m Faiyaz.
              <br />
              <span className="text-foreground-muted font-normal">
                Crafting robust web systems with minimalist precision.
              </span>
            </h1>

            <p className="max-w-xl text-lg text-foreground-muted leading-relaxed">
              Specializing in scalable distributed backends, resilient APIs, and
              ultra-fast user interfaces. Built with a passion for software
              craftsmanship and clean architecture.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#projects"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "font-medium gap-2",
                })}
              >
                Explore Projects
                <ArrowDown className="size-4" />
              </Link>

              <Link
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "font-medium gap-2 border-border",
                })}
              >
                Get in touch
                <ArrowUpRight className="size-4 text-foreground-subtle" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section (#about) */}
        <section id="about" className="border-t border-border/60 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                01 / About
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Engineering with clarity and purpose.
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Background, engineering journey, and technical philosophy.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section (#skills) */}
        <section
          id="skills"
          className="border-t border-border/60 bg-surface-raised/20 py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                02 / Skills
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Core technologies & technical stack.
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Proficiencies spanning frontend performance, backend services,
                and cloud infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section (#projects) */}
        <section id="projects" className="border-t border-border/60 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                03 / Projects
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Selected engineering work.
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Production-grade applications, open source libraries, and
                systems architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section (#contact) */}
        <section
          id="contact"
          className="border-t border-border/60 bg-surface-raised/20 py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                04 / Contact
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s build something together.
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Open for opportunities, architectural consulting, and full stack
                roles.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
