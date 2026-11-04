import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/ui/Logo";
import { presentationHero } from "@/data/apresentacao";

export function PresentationHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />

      <Container className="relative grid gap-16 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <Reveal className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <LogoMark className="size-10" />
            <Badge variant="dark">{presentationHero.eyebrow}</Badge>
          </div>

          <h1 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {presentationHero.headline}
          </h1>

          <p className="max-w-xl text-balance text-base leading-relaxed text-ink-200 sm:text-lg">
            {presentationHero.subheadline}
          </p>

          <div className="mt-2 flex flex-wrap gap-2.5">
            {presentationHero.focusAreas.map((area) => (
              <span
                key={area.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-ink-100"
              >
                <area.icon className="size-3.5 text-brand-300" aria-hidden="true" />
                {area.label}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="#parceria" variant="primary">
              {presentationHero.primaryCta}
            </Button>
            <Button href="#contato" variant="ghost">
              {presentationHero.secondaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-brand-400/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-premium backdrop-blur-sm">
            <Image
              src="/apresentacao/foto.png"
              alt="Retrato profissional do especialista em Business Intelligence"
              width={328}
              height={437}
              className="w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/95 p-3 pr-5 shadow-premium backdrop-blur sm:-left-6 sm:translate-x-0">
            <Image
              src="/apresentacao/certificacao-microsoft.png"
              alt="Selo Microsoft Certified: Associate"
              width={113}
              height={117}
              className="size-11 shrink-0"
            />
            <div>
              <p className="text-xs font-semibold text-white">{presentationHero.credential.title}</p>
              <p className="text-[11px] leading-snug text-ink-300">{presentationHero.credential.subtitle}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
