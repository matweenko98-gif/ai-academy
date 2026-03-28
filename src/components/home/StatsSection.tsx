import { Award, Cpu, Gauge, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "1 200+",
    label: "Студентов прошли обучение",
    hint: "От первых шагов до продвинутых сценариев",
  },
  {
    icon: Cpu,
    value: "4",
    label: "Флагманских трека",
    hint: "Prompt • Бизнес • Автоматизация • Вайбкодинг",
  },
  {
    icon: Gauge,
    value: "2–6 недель",
    label: "до ощутимого результата",
    hint: "Практика в каждом модуле",
  },
  {
    icon: Award,
    value: "2",
    label: "сертификата по итогам",
    hint: "Подтверждение навыков и прогресса",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#070a1a]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-36 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-[110px] opacity-70" />
        <div className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[110px] opacity-60" />
      </div>

      <div className="container">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground text-slate-200">
            Цифры, которым можно верить
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-foreground text-white">
            Мы учим ИИ так, чтобы знания работали в жизни
          </h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-muted-foreground text-slate-200">
            Никакой «теории ради теории»: только практические сценарии, которые экономят время и приносят результат.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["100% онлайн", "Практика", "Поддержка"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-white/10 bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-[var(--radius-lg)] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-sm p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icons exist in the data model; in the screenshot layout the stat header is text-only. */}
              <div className="hidden" aria-hidden="true">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-secondary/25 to-primary/20 border border-white/40 backdrop-blur flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="h-9 w-9 rounded-[var(--radius-md)] border border-white/40 bg-white/50 backdrop-blur flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary/80" />
                  </div>
                </div>
              </div>

              <div className="mt-0 text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground/90 text-slate-200">{s.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-slate-200">{s.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
