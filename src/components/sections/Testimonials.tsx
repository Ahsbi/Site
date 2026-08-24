import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="flex h-48 flex-col justify-between rounded-3xl border border-dashed border-ink-200 bg-white/60 p-6"
            >
              <Quote className="size-6 text-ink-200" aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <div className="h-2.5 w-full rounded-full bg-ink-100" />
                <div className="h-2.5 w-2/3 rounded-full bg-ink-100" />
              </div>
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-ink-100" />
                <div className="flex flex-col gap-1.5">
                  <div className="h-2 w-20 rounded-full bg-ink-100" />
                  <div className="h-2 w-14 rounded-full bg-ink-100" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-2xl text-balance text-center text-sm leading-relaxed text-ink-600">
          {testimonials.message}
        </p>
      </Container>
    </section>
  );
}
