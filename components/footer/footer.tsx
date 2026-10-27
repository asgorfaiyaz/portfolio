"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (isHomePage && href.startsWith("#")) {
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className="border-t border-border/60 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-border-subtle">
          {/* Brand & Micro Tag */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="relative flex size-7 items-center justify-center rounded-lg border border-border bg-surface-raised">
                <Terminal className="size-3.5 text-foreground" />
                <span className="absolute -top-0.5 -right-0.5 flex size-1.5">
                  <span className="size-1.5 rounded-full bg-status-online" />
                </span>
              </div>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Faiyaz
                <span className="font-mono text-xs text-foreground-muted">
                  .dev
                </span>
              </span>
            </div>
            <p className="text-xs text-foreground-muted max-w-sm">
              Full Stack Developer focused on clean architecture, systems
              performance, and end-to-end type safety.
            </p>
          </div>

          {/* Quick Anchor Navigation */}
          <nav
            className="flex flex-wrap items-center gap-6"
            aria-label="Footer Navigation"
          >
            {FOOTER_LINKS.map((link) => {
              const href = isHomePage ? link.href : `/${link.href}`;

              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-medium text-foreground-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/asgorfaiyaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex size-8 items-center justify-center rounded-lg border border-border bg-surface-raised/60 text-foreground-muted transition-colors hover:border-border-hover hover:text-foreground"
            >
              <FaGithub className="size-3.5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/asgorfaiyaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex size-8 items-center justify-center rounded-lg border border-border bg-surface-raised/60 text-foreground-muted transition-colors hover:border-border-hover hover:text-foreground"
            >
              <FaLinkedin className="size-3.5" />
            </Link>

            <Link
              href="https://youtube.com/asgorfaiyaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X Profile"
              className="flex size-8 items-center justify-center rounded-lg border border-border bg-surface-raised/60 text-foreground-muted transition-colors hover:border-border-hover hover:text-foreground"
            >
              <FaYoutube className="size-3.5" />
            </Link>

            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 border-border text-foreground-muted hover:text-foreground"
            >
              <ArrowUp className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground-muted">
          <p suppressHydrationWarning>
            © 2026 Asgor Faiyaz. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 16, React 19 &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
