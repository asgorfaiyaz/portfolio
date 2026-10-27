"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLogo } from "./nav-logo";
import { NavLinks, NAV_ITEMS } from "./nav-links";
import { StatusBadge } from "./status-badge";
import { MobileNav } from "./mobile-nav";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useIsScrolled } from "@/hooks/use-is-scrolled";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const scrollSpySection = useScrollSpy(isHomePage ? SECTION_IDS : [], 120);

  // When viewing project detail pages or projects subroutes, activate "projects" tab
  const activeSection = pathname.startsWith("/projects")
    ? "projects"
    : isHomePage
    ? scrollSpySection
    : "";

  const isScrolled = useIsScrolled(20);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-md py-3 shadow-sm"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm py-4",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Standing-out Brand Monogram & Name */}
        <div className="flex items-center gap-4">
          <NavLogo />
        </div>

        {/* Center: Desktop Nav Links Pill Container */}
        <div className="hidden md:flex items-center rounded-full border border-border/60 bg-surface-raised/40 p-1 backdrop-blur-md">
          <NavLinks activeSection={activeSection} />
        </div>

        {/* Right: Availability Badge & Quick Resume CTA */}
        <div className="flex items-center gap-3">
          <StatusBadge />

          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={() =>
              alert(
                "My resume is currently being updated with recent Next.js 16 projects and will be available shortly! In the meantime, feel free to reach out via the contact section."
              )
            }
            className="hidden sm:inline-flex items-center gap-1.5 font-medium shadow-none cursor-pointer"
          >
            <FileText className="size-3.5 opacity-80" />
            <span>Resume</span>
          </Button>

          {/* Mobile Hamburger Drawer */}
          <MobileNav activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
}
