import { BarChart3, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/content";

function DashboardMockup() {
  const bars = [42, 68, 54, 88, 62, 96, 74];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-brand-400/10 to-transparent blur-2xl" />
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-premium backdrop-blur-sm sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <BarChart3 className="size-4 text-brand-300" aria-hidden="true" />
            Dashboard Executivo
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Ao vivo
          </span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { label: "Faturamento", value: "+18%", icon: TrendingUp },
            { label: "Margem", value: "32%", icon: BarChart3 },
            { label: "Clientes ativos", value: "1.240", icon: Users },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <kpi.icon className="size-4 text-brand-300" aria-hidden="true" />
              <p className="mt-3 text-lg font-bold text-white">{kpi.value}</p>
              <p className="mt-1 text-xs text-ink-300">{kpi.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex h-32 items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-300"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />

      <Container className="relative grid gap-16 py-24 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="dark">{hero.eyebrow}</Badge>

          <h1 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {hero.headline}
          </h1>

          <p className="max-w-xl text-balance text-base leading-relaxed text-ink-200 sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="#contato" variant="primary">
              {hero.primaryCta}
            </Button>
            <Button href="#dashboards" variant="ghost">
              {hero.secondaryCta}
            </Button>
          </div>

          <dl className="mt-8 grid w-full grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-ink-300 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <DashboardMockup />
      </Container>
    </section>
  );
}
