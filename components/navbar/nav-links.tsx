"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

interface NavLinksProps {
  activeSection: string;
  onItemClick?: (id: string) => void;
  className?: string;
  itemClassName?: string;
}

export function NavLinks({
  activeSection,
  onItemClick,
  className,
  itemClassName,
}: NavLinksProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    const targetElement = document.getElementById(item.id);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", item.href);
    }
    onItemClick?.(item.id);
  };

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      aria-label="Main Navigation"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={(e) => handleClick(e, item)}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "text-foreground bg-secondary/70 shadow-sm"
                : "text-foreground-muted hover:text-foreground hover:bg-muted/40",
              itemClassName
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
