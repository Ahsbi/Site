import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { finalCta } from "@/data/content";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[120px]" />

      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-3xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {finalCta.headline}
        </h2>
        <p className="max-w-xl text-balance leading-relaxed text-ink-200">{finalCta.text}</p>
        <Button href="#contato" variant="primary" className="mt-2 px-8 py-4 text-base">
          {finalCta.button}
        </Button>
      </Container>
    </section>
  );
}
