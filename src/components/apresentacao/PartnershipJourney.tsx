import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { partnershipJourney } from "@/data/apresentacao";

export function PartnershipJourney() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={partnershipJourney.eyebrow} title={partnershipJourney.title} />

        <div className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block" />

          {partnershipJourney.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-ink-100 bg-white font-display text-sm font-bold text-brand-600 shadow-premium">
                  {step.number}
                </span>
                <span className="flex size-10 items-center justify-center rounded-xl bg-ink-50 text-brand-600 lg:hidden">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
              </div>
              <step.icon className="hidden size-6 text-brand-600 lg:block" aria-hidden="true" />
              <h3 className="font-display text-lg font-bold text-ink-950">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
