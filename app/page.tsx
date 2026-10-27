import Banner from "@/components/banner/banner";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Sticky Responsive Unique Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section (#home) */}
        <Banner />
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
