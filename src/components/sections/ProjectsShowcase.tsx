"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, Maximize2, Minimize2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { projects } from "@/data/content";

export function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const frameWrapperRef = useRef<HTMLDivElement>(null);

  const activeProject = projects.items[activeIndex];

  const selectProject = (index: number) => {
    setActiveIndex(index);
    setLoaded(false);
  };

  useEffect(() => {
    const handleChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const toggleFullscreen = () => {
    if (!frameWrapperRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      frameWrapperRef.current.requestFullscreen();
    }
  };

  return (
    <section className="bg-ink-50/60 py-24 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={projects.eyebrow} title={projects.title} subtitle={projects.subtitle} />

        <Reveal className="flex flex-wrap justify-center gap-3">
          {projects.items.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => selectProject(index)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                index === activeIndex
                  ? "border-transparent bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-premium"
                  : "border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700",
              )}
            >
              <project.icon className="size-4" aria-hidden="true" />
              {project.title}
            </button>
          ))}
        </Reveal>

        <Reveal delay={120} className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-premium">
          <div className="flex flex-col gap-4 border-b border-ink-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-display text-lg font-bold text-ink-950 sm:text-xl">{activeProject.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-600">{activeProject.description}</p>
            </div>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-ink-200 px-4 py-2.5 text-xs font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 sm:self-auto"
            >
              {isFullscreen ? (
                <Minimize2 className="size-4" aria-hidden="true" />
              ) : (
                <Maximize2 className="size-4" aria-hidden="true" />
              )}
              Tela cheia
            </button>
          </div>

          <div ref={frameWrapperRef} className="relative aspect-[8/5] w-full bg-ink-50">
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink-50">
                <Loader2 className="size-6 animate-spin text-brand-500" aria-hidden="true" />
                <p className="text-xs font-medium text-ink-400">Carregando dashboard...</p>
              </div>
            )}
            <iframe
              key={activeProject.embedUrl}
              title={`Dashboard ${activeProject.title}`}
              src={activeProject.embedUrl}
              className="absolute inset-0 h-full w-full"
              frameBorder={0}
              allowFullScreen
              onLoad={() => setLoaded(true)}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
