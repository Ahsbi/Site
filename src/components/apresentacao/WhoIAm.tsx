import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { whoIAm } from "@/data/apresentacao";

export function WhoIAm() {
  return (
    <section id="quem-sou" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5">
          <Badge>{whoIAm.eyebrow}</Badge>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            {whoIAm.title}
          </h2>
          <p className="max-w-lg text-balance leading-relaxed text-ink-600">{whoIAm.text}</p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {whoIAm.areas.map((area) => (
            <div
              key={area.label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-ink-100 bg-ink-50/50 p-5 transition-colors duration-300 hover:border-brand-200 hover:bg-white hover:shadow-premium"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                <area.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-snug text-ink-900">{area.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
