"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";

export function NavLogo() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      const homeEl = document.getElementById("home");
      if (homeEl) {
        e.preventDefault();
        homeEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#home");
      }
    }
  };

  return (
    <Link
      href={isHomePage ? "#home" : "/"}
      onClick={handleClick}
      aria-label="Faiyaz - Full Stack Developer"
      className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md transition-all"
    >
      {/* Engineered Monogram Micro-Chip */}
      <div className="relative flex size-8 items-center justify-center rounded-lg border border-border bg-surface-raised transition-all duration-300 group-hover:border-border-hover group-hover:bg-surface-overlay">
        <Terminal className="size-4 text-foreground transition-transform duration-300 group-hover:scale-110" />
        {/* Availability / System Live Pulse Dot */}
        <span
          className="absolute -top-0.5 -right-0.5 flex size-2"
          title="System Online / Available for projects"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-online opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-status-online" />
        </span>
      </div>

      {/* Brand Typography */}
      <div className="flex items-baseline">
        <span className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground">
          Faiyaz
        </span>
        <span className="ml-1 text-xs font-mono font-medium text-foreground-subtle transition-colors group-hover:text-foreground-muted">
          .dev
        </span>
      </div>
    </Link>
  );
}
