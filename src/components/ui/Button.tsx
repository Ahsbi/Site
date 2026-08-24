import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-premium hover:from-brand-500 hover:to-brand-300",
  secondary:
    "border border-ink-200 bg-white text-ink-900 hover:border-brand-300 hover:text-brand-700",
  ghost: "border border-white/20 text-white hover:bg-white/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  withIcon = true,
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  withIcon?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
        variantClasses[variant],
        className,
      )}
    >
      {children}
      {withIcon && <ArrowRight className="size-4" aria-hidden="true" />}
    </a>
  );
}
