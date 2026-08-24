import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { partnership } from "@/data/apresentacao";

export function Partnership() {
  return (
    <section id="parceria" className="relative scroll-mt-20 overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div className="absolute right-0 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[120px]" />

      <Container className="flex flex-col gap-16">
        <Reveal className="flex flex-col items-start gap-5">
          <Badge variant="dark">{partnership.eyebrow}</Badge>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {partnership.title}
          </h2>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">{partnership.subtitle}</p>
          <p className="max-w-2xl text-balance leading-relaxed text-ink-200">{partnership.text}</p>
        </Reveal>

        <Reveal delay={120} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-center gap-y-4">
            {partnership.flow.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex w-28 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-ink-900 px-3 py-4 text-center sm:w-32">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                    <step.icon className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-semibold leading-snug text-white">{step.label}</p>
                </div>
                {index < partnership.flow.length - 1 && (
                  <ArrowRight className="size-4 shrink-0 text-brand-400" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnership.benefits.map((benefit, index) => (
            <Reveal key={benefit.label} delay={index * 80}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <benefit.icon className="mt-0.5 size-5 shrink-0 text-brand-400" aria-hidden="true" />
                <p className="text-sm font-medium leading-relaxed text-white">{benefit.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
