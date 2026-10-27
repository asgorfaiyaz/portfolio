import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import portraitImg from "@/public/images/transparent-bg-main.png";

function Banner() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-4 pt-16 sm:px-6 sm:pt-24 lg:py-24 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Narrative & Actions (7 cols on lg) */}
        <div className="space-y-6 lg:col-span-7">
          <Badge
            variant="outline"
            className="border-border bg-surface-raised/80 px-3 py-1 text-xs text-foreground-muted"
          >
            <Terminal className="size-3.5 text-foreground-subtle" />
            <span>Full Stack Developer</span>
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl sm:leading-[1.1]">
            Hi, I&apos;m Faiyaz.
            <br />
            <span className="text-foreground-muted font-normal">
              In love with Next.js &amp; TypeScript.
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-foreground-muted leading-relaxed">
            Full Stack Developer with{" "}
            <span className="font-semibold text-foreground">
              10+ completed projects
            </span>{" "}
            built across the{" "}
            <span className="inline-flex items-center rounded-md border border-border bg-surface-raised/90 px-2 py-0.5 font-mono text-sm font-semibold text-foreground">
              PERN
            </span>{" "}
            and{" "}
            <span className="inline-flex items-center rounded-md border border-border bg-surface-raised/90 px-2 py-0.5 font-mono text-sm font-semibold text-foreground">
              MERN
            </span>{" "}
            ecosystems. Focused on writing clean, maintainable code and building
            real-world web applications that scale.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#projects"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "font-medium gap-2 shadow-xs",
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

          {/* Quick Technical Stack Indicator */}
          <div className="pt-4 border-t border-border-subtle">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-foreground-subtle">
              <span className="text-foreground-muted">Core Focus:</span>
              <span>Next.js 16</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>PostgreSQL / MongoDB</span>
              <span>•</span>
              <span>Node / Express</span>
            </div>
          </div>
        </div>

        {/* Right Column: Aligned Image with Soft Black Fade Effect at the bottom */}
        <div className="relative flex items-center justify-center lg:justify-end lg:col-span-5">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <Image
              src={portraitImg}
              alt="Faiyaz - Full Stack Developer"
              priority
              className="w-full h-auto object-contain object-bottom mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]"
            />
            {/* Smooth dark gradient fade to blend the bottom edge seamlessly into the background */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-linear-to-t from-background via-background/80 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
