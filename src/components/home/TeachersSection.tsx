type Teacher = {
  name: string;
  role: string;
  exp: string;
  tag: string;
  imageSrc: string;
};

const teachers: Teacher[] = [
  {
    name: "Евгений Гнедчик",
    role: "Full‑Stack / AI‑Builder",
    exp: "Собирает веб‑продукты и AI‑сервисы. Фокус: быстрые прототипы, автоматизация и вайбкодинг.",
    tag: "Практика на проектах",
    imageSrc: "/images/евгений.png",
  },
  {
    name: "Анна Петрова",
    role: "LLM / Prompt Engineer",
    exp: "Показывает, как получать стабильное качество от моделей: шаблоны, проверки, цепочки, системное мышление.",
    tag: "LLM‑методология",
    imageSrc: "/images/анна.png",
  },
  {
    name: "Дмитрий Козлов",
    role: "AI для бизнеса (Strategy)",
    exp: "Помогает внедрять ИИ в процессы: от выбора кейсов до метрик эффективности и запуска пилотов.",
    tag: "Внедрение в компании",
    imageSrc: "/images/дмитрий.png",
  },
];

export default function TeachersSection() {
  return (
    <section id="teachers" className="relative py-16 md:py-20">
      <div className="container">
        <header className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Команда</p>
            <h2 className="mt-3 max-w-[38rem] text-[32px] leading-[1.05] tracking-tight text-foreground md:text-[40px] md:leading-[1.05]">
              Преподаватели‑практики,
              <br />
              которые работают с ИИ каждый день
            </h2>
            <p className="mt-4 max-w-[34rem] text-[14px] leading-[1.6] text-muted-foreground md:text-[15px]">
              Мы объясняем сложное простыми шагами: сценарий → практика → результат. Без воды и «магии»
              <br />
            </p>
          </div>

          <aside className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="w-full max-w-[28.5rem] rounded-[var(--radius-lg)] border border-border bg-white px-6 py-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[12px] font-semibold text-foreground">Формат работы</p>
                <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold text-secondary">
                  Менторство
                </span>
              </div>
              <p className="mt-3 text-[12px] leading-[1.6] text-muted-foreground">
                Живые разборы, практика на реальных задачах и быстрый фидбек. Выходишь с навыком, а не с конспектом.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Разбор работ", "Шаблоны", "Чек‑листы"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-[11px] font-semibold text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {teachers.map((t) => (
            <li key={t.name} className="rounded-[var(--radius-lg)] border border-border bg-white p-4 shadow-sm">
              <figure className="relative overflow-hidden rounded-[20px]">
                <div className="relative aspect-[3/4] w-full">
                  <img
                    src={t.imageSrc}
                    alt={t.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />

                  <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-border bg-white/90 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
                    {t.tag}
                  </span>

                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/55 to-transparent" />
                    <div className="relative">
                      <p className="text-[13px] font-semibold leading-[1.2] text-white">{t.name}</p>
                      <p className="mt-1 text-[11px] font-semibold leading-[1.2] text-secondary">{t.role}</p>
                      <p className="mt-3 text-[11px] leading-[1.55] text-white/80">{t.exp}</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
