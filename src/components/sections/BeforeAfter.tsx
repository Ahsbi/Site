import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { beforeAfter } from "@/data/content";

export function BeforeAfter() {
  return (
    <section className="bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={beforeAfter.eyebrow} title={beforeAfter.title} />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10">
            <h3 className="font-display text-lg font-bold text-ink-500">{beforeAfter.before.label}</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {beforeAfter.before.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-500">
                  <X className="mt-0.5 size-4 shrink-0 text-ink-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-brand-200 bg-ink-950 p-8 shadow-premium sm:p-10">
            <h3 className="font-display text-lg font-bold text-brand-300">{beforeAfter.after.label}</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {beforeAfter.after.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-white">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
