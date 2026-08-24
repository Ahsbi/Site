import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { dashboards } from "@/data/content";

export function Dashboards() {
  return (
    <section id="dashboards" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={dashboards.eyebrow} title={dashboards.title} subtitle={dashboards.subtitle} />

        <div className="grid gap-6 lg:grid-cols-3">
          {dashboards.groups.map((group) => (
            <Card key={group.title} hover className="flex flex-col">
              <span className="flex size-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                <group.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink-600">
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
