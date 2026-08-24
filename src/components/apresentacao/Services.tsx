import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/apresentacao";

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} subtitle={services.subtitle} />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.items.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <Card hover className="flex h-full flex-col">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{service.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
