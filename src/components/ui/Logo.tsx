import { cn } from "@/lib/utils";

/** AhsBi symbol: three rising bars and a spark on a blue rounded square. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-9 shrink-0", className)} aria-hidden="true">
      <defs>
        <linearGradient id="ahsbi-mark" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1856b3" />
          <stop offset="0.55" stopColor="#1c6bde" />
          <stop offset="1" stopColor="#59aeff" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#ahsbi-mark)" />
      <rect x="14" y="37" width="9" height="13" rx="2.5" fill="#fff" fillOpacity="0.7" />
      <rect x="27.5" y="28" width="9" height="22" rx="2.5" fill="#fff" fillOpacity="0.85" />
      <rect x="41" y="18" width="9" height="32" rx="2.5" fill="#fff" />
      <path d="M20 13.5c.5 3 1.5 4 4.5 4.5-3 .5-4 1.5-4.5 4.5-.5-3-1.5-4-4.5-4.5 3-.5 4-1.5 4.5-4.5Z" fill="#fff" />
    </svg>
  );
}

interface LogoProps {
  /** "light" for light backgrounds, "dark" for navy backgrounds. */
  tone?: "light" | "dark";
  showTagline?: boolean;
  /** Extra classes for the tagline, e.g. to hide it at some breakpoints. */
  taglineClassName?: string;
  className?: string;
}

/** Full logo: symbol + "AhsBi" wordmark, optionally with the tagline. */
export function Logo({ tone = "light", showTagline = false, taglineClassName, className }: LogoProps) {
  const dark = tone === "dark";
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-extrabold tracking-tight",
            dark ? "text-white" : "text-ink-950",
          )}
        >
          Ahs<span className={dark ? "text-brand-400" : "text-brand-600"}>Bi</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em]",
              dark ? "text-ink-300" : "text-ink-500",
              taglineClassName,
            )}
          >
            BI para escritórios contábeis
          </span>
        )}
      </span>
    </span>
  );
}
