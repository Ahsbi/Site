import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { differential } from "@/data/apresentacao";

export function Differential() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />

      <Container className="flex flex-col items-center gap-10 text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <Badge variant="dark">{differential.eyebrow}</Badge>
          <h2 className="max-w-3xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {differential.title}
          </h2>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-300 sm:text-sm">
            {differential.equation}
          </p>
          <p className="max-w-2xl text-balance leading-relaxed text-ink-200">{differential.text}</p>
        </Reveal>

        <Reveal
          delay={150}
          className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-y-4">
            {differential.flow.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex w-32 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-ink-900 px-3 py-4 text-center sm:w-36">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                    <step.icon className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-semibold leading-snug text-white">{step.label}</p>
                </div>
                {index < differential.flow.length - 1 && (
                  <ArrowRight className="size-4 shrink-0 text-brand-400" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
