import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrations } from "@/data/content";

export function Integrations() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={integrations.eyebrow} title={integrations.title} subtitle={integrations.subtitle} />

        <div className="relative rounded-3xl border border-ink-100 bg-ink-50/50 p-10 sm:p-14">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {integrations.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5 text-center shadow-premium"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-xs font-semibold leading-snug text-ink-800">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-relaxed text-ink-500">{integrations.note}</p>
        </div>
      </Container>
    </section>
  );
}
