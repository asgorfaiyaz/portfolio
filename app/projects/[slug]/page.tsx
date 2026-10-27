import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  ExternalLink,
  Terminal,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getAllProjects, getProjectBySlug } from "@/lib/projects-data";
import { FaGithub } from "react-icons/fa";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Full Stack Case Study`,
    description: project.summary,
  };
}

async function ProjectDetailContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 pb-12 sm:pb-16">
      <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
        {/* Back Navigation Breadcrumb */}
        <div className="pb-8">
          <Link
            href="/#projects"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className:
                "gap-2 text-foreground-muted hover:text-foreground -ml-2.5",
            })}
          >
            <ArrowLeft className="size-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <div className="space-y-6 pb-12 border-b border-border/60">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              variant="outline"
              className="border-border bg-surface-raised/80 font-mono text-xs text-foreground-muted"
            >
              <Terminal className="size-3.5 text-foreground-subtle" />
              <span>{project.stackBadge}</span>
            </Badge>

            <span className="font-mono text-xs text-foreground-subtle">
              Year: {project.year}
            </span>

            <span className="font-mono text-xs text-foreground-subtle">
              •
            </span>

            <span className="font-mono text-xs text-foreground-subtle">
              Role: {project.role}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>

          <p className="text-xl text-foreground-muted leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Live & Source CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "default",
                size: "default",
                className: "gap-2 font-medium",
              })}
            >
              <span>Live Demo</span>
              <ExternalLink className="size-4" />
            </Link>

            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "default",
                className: "gap-2 border-border font-medium",
              })}
            >
              <FaGithub className="size-4" />
              <span>Source Code</span>
              <ArrowUpRight className="size-3.5 opacity-60" />
            </Link>
          </div>
        </div>

        {/* Project Interface Screenshot Preview */}
        {project.image && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-raised/40 shadow-2xl">
            {/* Window Chrome Title Bar */}
            <div className="flex items-center justify-between border-b border-border/70 bg-surface-overlay/80 px-4 py-3 font-mono text-xs text-foreground-subtle">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-foreground-subtle/30" />
                <span className="size-2.5 rounded-full bg-foreground-subtle/30" />
                <span className="size-2.5 rounded-full bg-foreground-subtle/30" />
              </div>
              <span className="truncate max-w-xs text-[11px]">
                {project.liveUrl.replace("https://", "")}
              </span>
              <Terminal className="size-3.5 text-foreground-subtle/50" />
            </div>

            <div className="relative aspect-video w-full overflow-hidden bg-surface-raised">
              <Image
                src={project.image}
                alt={`${project.title} interface preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
              />
            </div>
          </div>
        )}

        {/* Deep-Dive Narrative & Architecture */}
        <div className="mt-12 space-y-16">
          {/* Overview / Problem & Solution */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Project Overview &amp; Architecture
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </section>

          {/* Architecture Stack Breakdown */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <Boxes className="size-5 text-foreground-subtle" />
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                System Architecture Breakdown
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Frontend */}
              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xs">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                  Frontend Layer
                </span>
                <ul className="mt-4 space-y-2.5">
                  {project.architecture.frontend.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs text-foreground-muted"
                    >
                      <CheckCircle2 className="size-3.5 text-foreground-subtle shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend */}
              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xs">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                  Backend &amp; API Layer
                </span>
                <ul className="mt-4 space-y-2.5">
                  {project.architecture.backend.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs text-foreground-muted"
                    >
                      <CheckCircle2 className="size-3.5 text-foreground-subtle shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Database */}
              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xs">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                  Database &amp; Data Pipeline
                </span>
                <ul className="mt-4 space-y-2.5">
                  {project.architecture.database.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs text-foreground-muted"
                    >
                      <CheckCircle2 className="size-3.5 text-foreground-subtle shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Auth & Payments */}
              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xs">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                  Auth, Security &amp; Payments
                </span>
                <ul className="mt-4 space-y-2.5">
                  {project.architecture.authAndPayments.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs text-foreground-muted"
                    >
                      <CheckCircle2 className="size-3.5 text-foreground-subtle shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features Delivered */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Key Features Delivered
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {project.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-raised/40 p-4"
                >
                  <span className="size-1.5 rounded-full bg-status-online shrink-0" />
                  <span className="text-xs font-medium text-foreground">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering Challenges & Solutions */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <Wrench className="size-5 text-foreground-subtle" />
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Engineering Challenges &amp; Solutions
              </h3>
            </div>

            <div className="space-y-4">
              {project.challengesAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xs space-y-3"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-destructive">
                      Challenge #{idx + 1}
                    </span>
                    <p className="text-sm font-semibold text-foreground">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border-subtle space-y-1">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-status-online">
                      Architectural Solution
                    </span>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Technologies Tag Cloud */}
          <section className="space-y-4 pt-6 border-t border-border/60">
            <h4 className="text-sm font-semibold text-foreground">
              Technologies Used in this Project
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-lg border border-border bg-surface-raised/80 px-3 py-1 font-mono text-xs text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Bottom Actions CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-surface-raised/40 p-6 sm:p-8">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground">
                Ready to explore another project or connect?
              </h4>
              <p className="text-xs text-foreground-muted">
                Open to Full Stack and Frontend Developer opportunities.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#projects"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "border-border font-medium",
                })}
              >
                All Projects
              </Link>

              <Link
                href="/#contact"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                  className: "font-medium",
                })}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProjectDetailSkeleton() {
  return (
    <main className="flex-1 pb-12 sm:pb-16 animate-pulse">
      <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8 space-y-8">
        <div className="h-4 w-32 rounded bg-surface-raised" />
        <div className="space-y-4 pb-12 border-b border-border/60">
          <div className="h-5 w-48 rounded bg-surface-raised" />
          <div className="h-10 w-2/3 rounded bg-surface-raised" />
          <div className="h-6 w-full max-w-2xl rounded bg-surface-raised" />
          <div className="flex gap-4 pt-4">
            <div className="h-9 w-28 rounded bg-surface-raised" />
            <div className="h-9 w-32 rounded bg-surface-raised" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-6 w-40 rounded bg-surface-raised" />
          <div className="h-20 w-full rounded bg-surface-raised" />
        </div>
      </div>
    </main>
  );
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Universal Sticky Navbar */}
      <Navbar />

      <Suspense fallback={<ProjectDetailSkeleton />}>
        <ProjectDetailContent params={params} />
      </Suspense>

      {/* Obsidian Minimalist Footer */}
      <Footer />
    </div>
  );
}
