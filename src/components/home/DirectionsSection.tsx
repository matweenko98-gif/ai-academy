import { ArrowRight, Brain, Briefcase, Code2, MessageSquareText, Palette, Sparkles, Workflow } from "lucide-react";

const directions = [
  { icon: Code2, title: "Вайбкодинг", desc: "Собирай сайты, веб‑приложения и AI‑сервисы быстрее: от идеи до запуска.", tag: "No‑code + AI" },
  { icon: MessageSquareText, title: "Промпт‑инжиниринг", desc: "Системные техники запросов и проверки качества для стабильного результата.", tag: "LLM" },
  { icon: Briefcase, title: "ИИ для бизнеса", desc: "Выбор кейсов, метрики, пилоты и масштабирование — без хаоса и лишних затрат.", tag: "Strategy" },
  { icon: Workflow, title: "Автоматизация", desc: "Workflows, агенты и интеграции: превращаем рутину в поток, который работает сам.", tag: "Workflows" },
  { icon: Brain, title: "Нейросети (GenAI)", desc: "Понимание моделей + практика: как применять GenAI в задачах, а не в абстракции.", tag: "GenAI" },
  { icon: Palette, title: "ИИ и креатив", desc: "Изображения, видео и контент под KPI: быстрее, качественнее, управляемо.", tag: "Creative" },
];

export default function DirectionsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-muted overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-8 h-80 w-80 rounded-full bg-secondary/20 blur-[110px] opacity-60" />
        <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/20 blur-[110px] opacity-60" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                Карта направлений
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground">
                Выбирай направление — собирай карьеру из модулей
              </h2>
              <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed">
                Стартуй с нуля или усили текущую роль. Мы держим структуру и даём практику, чтобы навыки превращались в
                результат.
              </p>
            </div>

            <div className="mt-8 rounded-[var(--radius-lg)] bg-[#0c234b] backdrop-blur-2xl border border-white/40 shadow-sm p-6 md:p-7 h-fit min-h-[100px] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-white">Как выбрать трек</p>
              <p className="mt-3 text-lg font-bold text-white leading-6">Начни с цели — мы поможем собрать маршрут</p>
              <p className="mt-2 text-sm text-[#a7b5c8] leading-relaxed">
                Хотите новую роль, рост эффективности или внедрение ИИ в компании? Подберём трек и первые шаги — без лишней теории.
              </p>

              <span className="mt-6 inline-flex items-center rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold">
                Итог → портфолио
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Для новичков", "Для специалистов", "Для руководителей"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-border/60 bg-white/60 px-3 py-1 text-xs font-semibold text-foreground/80 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Directions grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
              {directions.map((d) => (
                <div
                  key={d.title}
                  className="group rounded-[var(--radius-lg)] bg-white/60 backdrop-blur-2xl border border-white/40 shadow-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold">
                      {d.tag}
                    </span>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-secondary/25 to-primary/20 border border-white/40 backdrop-blur flex items-center justify-center">
                      <d.icon className="h-5 w-5 text-secondary" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/40 pt-4">
                    <span className="text-xs font-semibold text-muted-foreground">Смотреть программы</span>
                    <span className="inline-flex items-center text-secondary text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
