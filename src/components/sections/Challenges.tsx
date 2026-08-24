import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { challenges } from "@/data/content";

export function Challenges() {
  return (
    <section id="desafios" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={challenges.eyebrow} title={challenges.title} subtitle={challenges.subtitle} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.items.map((question, index) => (
            <div
              key={question}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-ink-50/50 p-8 transition-colors duration-300 hover:border-brand-200 hover:bg-white hover:shadow-premium"
            >
              <span className="font-display text-4xl font-bold text-ink-100 transition-colors duration-300 group-hover:text-brand-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink-800">{question}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
