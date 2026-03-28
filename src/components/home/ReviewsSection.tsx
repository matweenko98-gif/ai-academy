import { Quote, Star, User } from "lucide-react";

const reviews = [
  {
    name: "Мария К.",
    text: "За две недели я автоматизировала рутину: отчёты, письма и сбор данных. Теперь трачу меньше времени на “механику” и больше — на решения.",
    rating: 5,
    course: "Автоматизация с ИИ",
  },
  {
    name: "Алексей Д.",
    text: "Наконец-то появилась система: как ставить задачи модели, как проверять ответы и как получать стабильное качество, а не “как повезёт”.",
    rating: 5,
    course: "Промпт‑инжиниринг",
  },
  {
    name: "Ольга С.",
    text: "Разложили внедрение ИИ по шагам: выбор кейса, метрики, пилот, масштабирование. После курса запустили первый процесс без хаоса и лишних затрат.",
    rating: 5,
    course: "ИИ для бизнеса",
  },
];

export default function ReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-[#070A1A] py-16 md:py-20 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-20 h-[520px] w-[520px] rounded-full bg-secondary/25 blur-[140px] opacity-70" />
        <div className="absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/10" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <header className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Отзывы</p>
            <h2 className="mt-3 max-w-[40rem] text-[34px] font-bold leading-[1.05] tracking-tight text-white md:text-[44px]">
              Люди приходят за навыком —<br />
              уходят с результатом
            </h2>
            <p className="mt-4 max-w-[34rem] text-[13px] leading-[1.65] text-white/70 md:text-[14px]">
              Мы строим обучение вокруг практики и понятных шагов.
              <br />
              Поэтому эффект ощущается быстро.
            </p>
          </header>

          <aside className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="w-full max-w-[28.5rem] rounded-[18px] border border-white/10 bg-white/5 px-6 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-semibold text-secondary">
                  5.0 средняя оценка
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-[12px] leading-[1.55] text-white/70">
                {["Понятная структура", "Много практики", "Быстрый фидбек", "Применимо к работе"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <ul className="lg:col-span-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <li
                key={r.name}
                className="rounded-[18px] border border-white/10 bg-white/5 px-6 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold text-primary">
                    {r.course}
                  </span>
                  <div className="flex gap-1 pt-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-[12px] leading-[1.7] text-white/70">«{r.text}»</p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="relative h-10 w-10 rounded-full bg-secondary/25 ring-1 ring-white/10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/35 to-primary/20 blur-[10px]" />
                    <div className="relative grid h-full w-full place-items-center rounded-full bg-[#2A1B59]/55">
                      <User className="h-5 w-5 text-[#B59BFF]" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[12px] font-semibold text-white">{r.name}</div>
                    <div className="text-[11px] text-white/55">Выпускник Академии ИИ</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
