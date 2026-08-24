import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "light",
  className,
}: {
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
        variant === "light"
          ? "border-brand-200 bg-brand-50 text-brand-700"
          : "border-white/15 bg-white/5 text-brand-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
