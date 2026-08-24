import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      {eyebrow && <Badge variant={variant}>{eyebrow}</Badge>}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          variant === "light" ? "text-ink-950" : "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-balance text-base leading-relaxed sm:text-lg",
            variant === "light" ? "text-ink-600" : "text-ink-200",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
