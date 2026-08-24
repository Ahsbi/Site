import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { audience } from "@/data/apresentacao";

export function Audience() {
  return (
    <section className="bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={audience.eyebrow} title={audience.title} />

        <div className="grid gap-6 lg:grid-cols-2">
          {audience.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 120}>
              <div className="flex h-full flex-col gap-6 rounded-3xl border border-ink-100 bg-white p-8 shadow-premium sm:p-10">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-ink-950 text-white">
                  <group.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-950">{group.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-500">{group.description}</p>
                </div>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
