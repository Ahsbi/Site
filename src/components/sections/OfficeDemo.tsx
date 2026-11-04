import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { officeDemo, siteConfig } from "@/data/content";

/** Team cost per hour used to split profitable from unprofitable clients (fictitious). */
const COST_PER_HOUR = 150;
const MAX_HOURS = 40;
const MAX_FEE = 6000;

/** Deterministic pseudo-random generator so the fictitious sample is identical on every render. */
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildSample() {
  const rand = seeded(42);
  const points: { hours: number; fee: number }[] = [];
  for (let i = 0; i < 36; i++) {
    const hours = 2 + rand() * 22;
    // Most clients pay comfortably above cost; a few are under-priced.
    const fee = hours * COST_PER_HOUR * (1.15 + rand() * 0.4) + 200;
    points.push({ hours, fee });
  }
  // A handful of under-priced clients: many hours, low fee.
  points.push({ hours: 31, fee: 2900 }, { hours: 27, fee: 2500 }, { hours: 35, fee: 3800 }, { hours: 22, fee: 2100 });
  return points;
}

const W = 520;
const H = 300;
const PAD = { left: 56, right: 16, top: 16, bottom: 40 };
const x = (hours: number) => PAD.left + (hours / MAX_HOURS) * (W - PAD.left - PAD.right);
const y = (fee: number) => H - PAD.bottom - (fee / MAX_FEE) * (H - PAD.top - PAD.bottom);

function ProfitabilityMatrix() {
  const points = buildSample();
  const xTicks = [0, 10, 20, 30, 40];
  const yTicks = [0, 2000, 4000, 6000];
  const lineEnd = MAX_FEE / COST_PER_HOUR; // hours at which cost reaches the top of the chart

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={officeDemo.matrixSubtitle}>
      {yTicks.map((t) => (
        <g key={`y${t}`}>
          <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="currentColor" className="text-ink-100" />
          <text x={PAD.left - 8} y={y(t) + 4} textAnchor="end" className="fill-ink-400 text-[11px]">
            {t === 0 ? "R$ 0" : `R$ ${t / 1000} mil`}
          </text>
        </g>
      ))}
      {xTicks.map((t) => (
        <text key={`x${t}`} x={x(t)} y={H - PAD.bottom + 18} textAnchor="middle" className="fill-ink-400 text-[11px]">
          {t}h
        </text>
      ))}
      <text x={(PAD.left + W - PAD.right) / 2} y={H - 4} textAnchor="middle" className="fill-ink-500 text-[11px]">
        Horas da equipe por mês
      </text>

      <line
        x1={x(0)}
        y1={y(0)}
        x2={x(Math.min(lineEnd, MAX_HOURS))}
        y2={y(Math.min(lineEnd, MAX_HOURS) * COST_PER_HOUR)}
        stroke="currentColor"
        strokeDasharray="4 4"
        className="text-ink-300"
      />
      <text x={x(39)} y={y(39 * COST_PER_HOUR) + 16} textAnchor="end" className="fill-ink-400 text-[10px]">
        custo da equipe
      </text>

      {points.map((p, i) => {
        const unprofitable = p.fee < p.hours * COST_PER_HOUR;
        return (
          <circle
            key={i}
            cx={x(p.hours)}
            cy={y(p.fee)}
            r={unprofitable ? 6 : 5}
            className={unprofitable ? "fill-amber-500" : "fill-brand-500/70"}
            stroke="white"
            strokeWidth={1.5}
          />
        );
      })}
    </svg>
  );
}

export function OfficeDemo() {
  const total = officeDemo.regimes.reduce((sum, r) => sum + r.value, 0);

  return (
    <section id="exemplo" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={officeDemo.eyebrow} title={officeDemo.title} subtitle={officeDemo.subtitle} />

        <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-premium">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-100 px-6 py-4 sm:px-8">
            <p className="font-display text-base font-bold text-ink-950">Painel de Gestão · Escritório Exemplo</p>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              {officeDemo.note}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-ink-100 lg:grid-cols-4">
            {officeDemo.kpis.map((kpi) => (
              <div key={kpi.label} className="bg-white p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-ink-500">{kpi.label}</p>
                <p className="mt-2 font-display text-2xl font-bold tabular-nums text-ink-950 sm:text-3xl">{kpi.value}</p>
                <p className="mt-1 text-xs text-ink-500">{kpi.trend}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="flex min-w-0 flex-col gap-3">
              <div>
                <h3 className="font-display text-lg font-bold text-ink-950">{officeDemo.matrixTitle}</h3>
                <p className="text-sm text-ink-500">{officeDemo.matrixSubtitle}</p>
              </div>
              <ProfitabilityMatrix />
              <div className="flex flex-wrap gap-4 text-xs text-ink-600">
                <span className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-brand-500/70" /> {officeDemo.matrixLegend.ok}
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-amber-500" /> {officeDemo.matrixLegend.bad}
                </span>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-6">
              <div>
                <h3 className="font-display text-lg font-bold text-ink-950">{officeDemo.regimeTitle}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {officeDemo.regimes.map((r) => (
                    <li key={r.label} className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-ink-700">{r.label}</span>
                        <span className="font-semibold tabular-nums text-ink-950">{r.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-ink-100">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-400"
                          style={{ width: `${(r.value / total) * 100}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <p>{officeDemo.insight}</p>
              </div>

              <Button href={siteConfig.whatsapp} external variant="primary" className="self-start">
                {officeDemo.cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
