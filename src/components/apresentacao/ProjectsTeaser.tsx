import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/content";

export function ProjectsTeaser() {
  return (
    <section className="bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow={projects.eyebrow} title={projects.title} subtitle={projects.subtitle} />

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {projects.items.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <Card hover className="flex h-full flex-col">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                  <project.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{project.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Button href="/#dashboards" variant="primary">
          Ver dashboards ao vivo
        </Button>
      </Container>
    </section>
  );
}
