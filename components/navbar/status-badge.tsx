import { Badge } from "@/components/ui/badge";

export function StatusBadge() {
  return (
    <Badge
      variant="outline"
      className="hidden lg:inline-flex items-center gap-2 border-border-subtle bg-surface-raised/60 px-3 py-1 text-xs text-foreground-muted"
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-online opacity-70" />
        <span className="relative inline-flex size-2 rounded-full bg-status-online" />
      </span>
      <span>Available for work</span>
    </Badge>
  );
}
