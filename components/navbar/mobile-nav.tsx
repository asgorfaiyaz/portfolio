"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Terminal, FileText } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { NAV_ITEMS, type NavItem } from "./nav-links";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  activeSection: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Close menu on ESC key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setIsOpen(false);
    if (isHomePage) {
      const targetElement = document.getElementById(item.id);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${item.id}`);
      }
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (isHomePage) {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        e.preventDefault();
        contactEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#contact");
      }
    }
  };

  return (
    <div className="md:hidden">
      {/* Toggle Button using shadcn Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="text-foreground hover:bg-muted/50 border border-border/40"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-md transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        className={cn(
          "fixed inset-x-4 top-20 z-50 rounded-2xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out md:hidden",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        {/* Availability Status */}
        <div className="mb-6 flex items-center justify-between border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2 text-xs text-foreground-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-online opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-status-online" />
            </span>
            <span>Available for projects</span>
          </div>
          <span className="font-mono text-xs text-foreground-subtle">
            faiyaz.dev
          </span>
        </div>

        {/* Links List */}
        <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const href = isHomePage ? `#${item.id}` : `/#${item.id}`;

            return (
              <Link
                key={item.id}
                href={href}
                onClick={(e) => handleLinkClick(e, item)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-foreground font-semibold"
                    : "text-foreground-muted hover:bg-muted/40 hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <Terminal className="size-4 text-foreground-subtle" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Action CTAs */}
        <div className="mt-6 flex flex-col gap-2 pt-4 border-t border-border-subtle">
          <Button
            type="button"
            variant="default"
            size="default"
            onClick={() => {
              setIsOpen(false);
              alert(
                "My resume is currently being updated with recent Next.js 16 projects and will be available shortly! In the meantime, feel free to reach out via the contact section."
              );
            }}
            className="w-full justify-center gap-2 font-medium cursor-pointer"
          >
            <FileText className="size-4" />
            <span>View Resume</span>
          </Button>

          <Link
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={handleContactClick}
            className={buttonVariants({
              variant: "outline",
              size: "default",
              className: "w-full justify-center gap-2 font-medium border-border",
            })}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
