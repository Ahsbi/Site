import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorks } from "@/data/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-ink-950 py-24 text-white sm:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} variant="dark" />

        <div className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {howItWorks.steps.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-ink-900 font-display text-sm font-bold text-brand-300">
                  {step.number}
                </span>
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-brand-300 lg:hidden">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
              </div>
              <step.icon className="hidden size-6 text-brand-300 lg:block" aria-hidden="true" />
              <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
