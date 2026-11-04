import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { offers } from "@/data/content";

export function Offers() {
  return (
    <section id="solucoes" className="scroll-mt-20 bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={offers.eyebrow} title={offers.title} subtitle={offers.subtitle} />

        <div className="grid gap-6 lg:grid-cols-2">
          {offers.items.map((offer) => (
            <Card key={offer.title} className="flex flex-col items-start gap-5">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                <offer.icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">{offer.eyebrow}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink-950">{offer.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{offer.description}</p>
              </div>
              <ul className="flex flex-col gap-3">
                {offer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
