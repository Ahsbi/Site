import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-ink-100 bg-white p-8 shadow-premium",
        hover && "transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
