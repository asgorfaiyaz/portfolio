import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "./project-card";
import { getAllProjects } from "@/lib/projects-data";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border/60">
          <div className="max-w-2xl space-y-4">
            <Badge
              variant="outline"
              className="border-border bg-surface-raised/80 px-3 py-1 text-xs text-foreground-muted"
            >
              <Terminal className="size-3.5 text-foreground-subtle" />
              <span>03 / Featured Projects</span>
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]">
              Real-world systems, built for production.
            </h2>

            <p className="text-lg text-foreground-muted leading-relaxed">
              Selected engineering projects highlighting end-to-end
              architecture, from relational database design to reactive user
              interfaces.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="https://github.com/asgorfaiyaz"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "default",
                className: "gap-2 border-border font-medium",
              })}
            >
              <FaGithub className="size-4" />
              <span>More on GitHub</span>
              <ArrowUpRight className="size-3.5 opacity-60" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
