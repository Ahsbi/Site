import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { consultant, siteConfig } from "@/data/content";

export function Consultant() {
  return (
    <section id="quem-conduz" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-xs">
          <div className="overflow-hidden rounded-[2rem] border border-ink-100 bg-ink-50 shadow-premium">
            <Image
              src="/apresentacao/foto.png"
              alt={`Foto de ${consultant.name}`}
              width={328}
              height={437}
              className="w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 flex w-[calc(100%+1rem)] max-w-[20rem] -translate-x-1/2 items-center gap-3 rounded-2xl border border-ink-100 bg-white p-3 pr-4 shadow-premium">
            <Image
              src="/apresentacao/certificacao-microsoft.png"
              alt="Selo Microsoft Certified: Associate"
              width={113}
              height={117}
              className="size-11 shrink-0"
            />
            <p className="text-xs font-semibold leading-snug text-ink-800">{consultant.credential}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start gap-5 lg:mt-0">
          <Badge>{consultant.eyebrow}</Badge>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">{consultant.name}</h2>
            <p className="mt-2 font-medium text-brand-700">{consultant.role}</p>
          </div>
          <p className="max-w-xl leading-relaxed text-ink-600">{consultant.text}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {consultant.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="/apresentacao" variant="secondary">
              {consultant.cta}
            </Button>
            {siteConfig.linkedin && (
              <Button href={siteConfig.linkedin} external variant="secondary" withIcon={false}>
                LinkedIn
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
