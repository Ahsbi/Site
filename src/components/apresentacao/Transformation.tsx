import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { transformation } from "@/data/apresentacao";

export function Transformation() {
  return (
    <section className="bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={transformation.eyebrow} title={transformation.title} />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-ink-100 bg-white p-8 sm:p-10">
              <h3 className="font-display text-lg font-bold text-ink-500">{transformation.before.label}</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {transformation.before.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-500">
                    <X className="mt-0.5 size-4 shrink-0 text-ink-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-brand-200 bg-ink-950 p-8 shadow-premium sm:p-10">
              <h3 className="font-display text-lg font-bold text-brand-300">{transformation.after.label}</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {transformation.after.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-white">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="rounded-3xl border border-ink-100 bg-white p-8 shadow-premium sm:p-10">
          <div className="flex flex-wrap items-center justify-center gap-y-4">
            {transformation.flow.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                  {step}
                </span>
                {index < transformation.flow.length - 1 && (
                  <ArrowRight className="size-4 shrink-0 text-ink-300" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
