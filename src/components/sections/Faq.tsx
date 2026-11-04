import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/data/content";

export function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <Container className="flex max-w-3xl flex-col gap-12">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="flex flex-col divide-y divide-ink-100 rounded-3xl border border-ink-100 bg-white">
          {faq.items.map((item) => (
            <details key={item.q} className="group px-6 py-5 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  className="size-5 shrink-0 text-ink-400 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
