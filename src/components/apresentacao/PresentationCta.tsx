import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { presentationCta } from "@/data/apresentacao";
import { siteConfig } from "@/data/content";

export function PresentationCta() {
  return (
    <section id="contato-apresentacao" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[120px]" />

      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <Badge variant="dark">{presentationCta.eyebrow}</Badge>
          <h2 className="max-w-3xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {presentationCta.title}
          </h2>
          <p className="max-w-xl text-balance leading-relaxed text-ink-200">{presentationCta.text}</p>
        </Reveal>

        <Reveal delay={120} className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button href={siteConfig.whatsapp} variant="primary" external>
            {presentationCta.whatsappCta}
          </Button>
          <Button href={`mailto:${siteConfig.email}`} variant="ghost" withIcon={false}>
            {siteConfig.email}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
