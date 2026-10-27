import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/lib/projects-data";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-6 sm:p-7 backdrop-blur-xs transition-all duration-300 hover:border-border-hover hover:bg-surface-raised/40">
      <div>
        {/* Card Header: Index, Stack Badge & Live Status */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-foreground-subtle">
              [{formattedIndex}]
            </span>
            <Badge
              variant="outline"
              className="border-border bg-surface-raised/80 font-mono text-[11px] text-foreground-muted"
            >
              {project.stackBadge}
            </Badge>
          </div>

          <div
            className="flex items-center gap-1.5 text-[11px] font-mono text-foreground-subtle"
            title="Live in Production"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-online opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-status-online" />
            </span>
            <span>Live</span>
          </div>
        </div>

        {/* Minimal Terminal / Browser Preview Mockup */}
        <Link
          href={`/projects/${project.slug}`}
          className="relative mt-2 block aspect-video w-full overflow-hidden rounded-xl border border-border-subtle bg-surface-raised/60 transition-all duration-300 group-hover:border-border"
        >
          {/* Mock Browser Title Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-border-subtle bg-surface-overlay/90 px-3 py-2 text-xs text-foreground-subtle font-mono backdrop-blur-xs">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-foreground-subtle/30" />
              <span className="size-2 rounded-full bg-foreground-subtle/30" />
              <span className="size-2 rounded-full bg-foreground-subtle/30" />
            </div>
            <span className="text-[11px] truncate max-w-50">
              {project.slug}.dev
            </span>
            <Terminal className="size-3 text-foreground-subtle/50" />
          </div>

          {/* Interior Preview: Image or Architectural Canvas */}
          {project.image ? (
            <div className="relative h-[calc(100%-29px)] w-full overflow-hidden bg-surface-raised">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/5 transition-opacity duration-300 group-hover:bg-transparent" />
              {/* Subtle Overlay Callout on Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 backdrop-blur-2xs transition-opacity duration-200 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 font-mono text-xs font-medium text-foreground shadow-lg">
                  <span>View Case Study</span>
                  <ArrowUpRight className="size-3" />
                </span>
              </div>
            </div>
          ) : (
            <div className="flex h-[calc(100%-29px)] flex-col items-center justify-center p-6 text-center">
              <span className="font-mono text-xs text-foreground-subtle uppercase tracking-widest">
                Architecture Preview
              </span>
              <h4 className="mt-1 text-lg font-bold tracking-tight text-foreground">
                {project.title}
              </h4>
              <p className="mt-1 text-xs text-foreground-muted line-clamp-1 max-w-xs">
                {project.tagline}
              </p>

              {/* Subtle Hover Callout */}
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-foreground-subtle opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-foreground">
                <span>View Case Study</span>
                <ArrowUpRight className="size-3" />
              </span>
            </div>
          )}
        </Link>

        {/* Project Title & Summary */}
        <div className="mt-5 space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground">
            <Link
              href={`/projects/${project.slug}`}
              className="outline-none focus-visible:underline"
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-border-subtle bg-surface-raised/70 px-2 py-0.5 font-mono text-[11px] text-foreground-muted"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="inline-flex items-center px-1.5 py-0.5 font-mono text-[10px] text-foreground-subtle">
              +{project.tags.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions: Details Link + Live & GitHub */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-border-subtle">
        <Link
          href={`/projects/${project.slug}`}
          className={buttonVariants({
            variant: "default",
            size: "sm",
            className: "gap-1 text-xs font-medium",
          })}
        >
          <span>View Details</span>
          <ArrowUpRight className="size-3.5" />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub Repository for ${project.title}`}
            className={buttonVariants({
              variant: "outline",
              size: "icon-sm",
              className:
                "border-border text-foreground-muted hover:text-foreground",
            })}
          >
            <FaGithub className="size-3.5" />
          </Link>

          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live Demo for ${project.title}`}
            className={buttonVariants({
              variant: "outline",
              size: "icon-sm",
              className:
                "border-border text-foreground-muted hover:text-foreground",
            })}
          >
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
