import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { founderProgram, siteConfig } from "@/data/content";

const whatsappHref = `https://wa.me/${siteConfig.phoneHref.replace("+", "")}?text=${encodeURIComponent(
  founderProgram.whatsappText,
)}`;

export function FounderProgram() {
  return (
    <section id="programa-fundador" className="scroll-mt-20 bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow={founderProgram.eyebrow} title={founderProgram.title} subtitle={founderProgram.text} />

        <div className="grid w-full gap-6 md:grid-cols-3">
          {founderProgram.items.map((item, index) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-3xl border border-ink-100 bg-white p-8 shadow-premium">
              <span className="font-display text-sm font-bold text-brand-600">Vaga {index + 1} de 3</span>
              <h3 className="font-display text-lg font-bold text-ink-950">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{item.description}</p>
            </div>
          ))}
        </div>

        <Button href={whatsappHref} external variant="primary">
          {founderProgram.cta}
        </Button>
      </Container>
    </section>
  );
}
