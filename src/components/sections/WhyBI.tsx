import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { whyBI } from "@/data/content";

export function WhyBI() {
  return (
    <section className="bg-ink-950 py-24 text-white sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <Badge variant="dark">{whyBI.eyebrow}</Badge>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">{whyBI.title}</h2>
          <p className="max-w-lg text-balance leading-relaxed text-ink-200">{whyBI.intro}</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {whyBI.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-white"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-400" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
