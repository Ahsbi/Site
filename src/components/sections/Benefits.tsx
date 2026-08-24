import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { benefits } from "@/data/content";

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-20 bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((benefit) => (
            <Card key={benefit.title} hover>
              <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                <benefit.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
