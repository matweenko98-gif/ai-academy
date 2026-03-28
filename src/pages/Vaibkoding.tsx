import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  CreditCard,
  FileText,
  Monitor,
  Rocket,
  Sparkles,
  Star,
  User,
  Users,
  Workflow,
} from "lucide-react";

const modules = [
  {
    icon: Rocket,
    title: "Старт и первый результат",
    text: "Собираем “скелет” проекта: цель, аудитория, структура, первые экраны. Сразу делаем работающий прототип.",
  },
  {
    icon: Code2,
    title: "Web‑основа без зубрёжки",
    text: "HTML/CSS/JS ровно в том объёме, который нужен, чтобы уверенно управлять результатом ИИ и править интерфейс.",
  },
  {
    icon: Cpu,
    title: "Инструменты 2026: IDE + AI",
    text: "Выбор платформы и стека под задачу. Как ускорять разработку без потери качества и контроля.",
  },
  {
    icon: Workflow,
    title: "Промпты для разработки",
    text: "Как ставить задачу модели так, чтобы она делала именно то, что нужно. Шаблоны, проверки, итерации.",
  },
  {
    icon: Monitor,
    title: "Лендинг за одно занятие",
    text: "Собираем страницу с сильной структурой: заголовки, секции, CTA, форма заявки. Красиво и быстро.",
  },
  {
    icon: FileText,
    title: "Данные, авторизация, API",
    text: "Подключаем базу, регистрацию, внешние сервисы и API — без боли. Учимся думать “как продукт”.",
  },
  {
    icon: BadgeCheck,
    title: "MVP и публикация",
    text: "Деплой, домены, аналитика. Готовим проект к показу: чтобы можно было реально запускать и собирать пользователей.",
  },
];

const advantages = [
  { icon: CheckCircle2, title: "Практика в каждом модуле", text: "Делаем руками: от первого прототипа до MVP, который можно показать и развивать." },
  { icon: Users, title: "Фидбек и разборы", text: "Получаете быстрые правки и понятные шаги, чтобы не застревать на деталях." },
  { icon: Cpu, title: "Инструменты 2026", text: "Работаем с актуальными AI‑подходами и сценариями, которые применяются в реальных продуктах." },
  { icon: Award, title: "Сертификаты и итог", text: "Фиксируем прогресс: итоговая работа + документы, которые усиливают резюме." },
];

const faqs = [
  {
    q: "Нужно ли уметь программировать?",
    a: "Нет. Мы учим управлять результатом: ставить задачи ИИ, проверять качество и доводить продукт до релиза. Код — инструмент, а не барьер.",
  },
  {
    q: "Что я сделаю в итоге?",
    a: "Рабочий лендинг или мини‑веб‑приложение (MVP) с формой, данными и деплоем. Его можно показать работодателю или использовать в своём проекте.",
  },
  {
    q: "Сколько времени нужно в неделю?",
    a: "Ориентир: 4–6 часов. Это занятия + практика. Главный принцип: меньше чтения — больше действий.",
  },
  {
    q: "Есть ли рассрочка?",
    a: "Да. Условия зависят от варианта оплаты. Покажем график и итоговую сумму заранее — без сюрпризов.",
  },
];

export default function Vaibkoding() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", goal: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/20 blur-glow opacity-60" />
            <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/20 blur-glow opacity-60" />
            <svg
              className="absolute left-1/2 top-1/2 h-[980px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-85 animate-ai-drift"
              viewBox="0 0 1100 980"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="vkGrad" x1="120" y1="180" x2="980" y2="760" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7C3AED" stopOpacity="0.65" />
                  <stop offset="0.55" stopColor="#3B82F6" stopOpacity="0.40" />
                  <stop offset="1" stopColor="#7C3AED" stopOpacity="0.30" />
                </linearGradient>
                <filter id="vkBlur" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="54" />
                </filter>
              </defs>
              <g filter="url(#vkBlur)">
                <ellipse cx="420" cy="450" rx="290" ry="320" fill="url(#vkGrad)" />
                <ellipse cx="720" cy="540" rx="310" ry="340" fill="url(#vkGrad)" opacity="0.9" />
              </g>
              <path
                d="M150 590 C 320 450, 420 430, 560 460 C 710 492, 800 380, 960 300"
                stroke="url(#vkGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.30"
              />
            </svg>
          </div>

          <div className="container">
            <div className="mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-pill border border-brand-glass-border bg-brand-glass-strong px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-glass">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                Курс • Вайбкодинг
              </div>

              <h1 className="mt-6 text-balance text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl lg:text-[60px]">
                Вайбкодинг: запускай{" "}
                <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent drop-shadow-glow">
                  web‑продукты с ИИ
                </span>{" "}
                без страха перед кодом
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Быстрый старт в создании лендингов, веб‑приложений и MVP. 100% онлайн. Практика с первого занятия.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="rounded-card border border-border/60 bg-white/70 p-6 text-left shadow-glass backdrop-blur-glass-strong lg:col-span-8 md:p-8">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-sm font-semibold text-foreground">
                        Научитесь превращать идею в работающий продукт — быстро и контролируемо.
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Вы получаете систему: сценарий → прототип → MVP → релиз.
                      </p>
                    </div>
                    <Button
                      asChild
                      className="h-12 rounded-md bg-secondary px-6 font-semibold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-xl"
                    >
                      <a href="#signup">
                        Записаться на курс <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {[
                      { icon: Clock, label: "12 занятий" },
                      { icon: CreditCard, label: "49 000 ₽" },
                      { icon: Calendar, label: "Старт 30 марта 2026" },
                      { icon: Monitor, label: "Онлайн" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 rounded-md border border-border/70 bg-background/80 px-4 py-3 shadow-glass-soft backdrop-blur-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glass"
                      >
                        <div className="grid h-9 w-9 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
                          <item.icon className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground/90">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-card border border-border/60 bg-gradient-to-br from-secondary/10 via-white/70 to-primary/10 p-6 text-left shadow-glass backdrop-blur-glass-strong lg:col-span-4 md:p-7">
                  <p className="inline-flex items-center rounded-pill bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                    Маршрут курса
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    Идея → Прототип → MVP → Релиз
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Вы получаете систему: сценарий → прототип → MVP → релиз.
                  </p>
                  <div className="mt-6 space-y-3">
                    {["Практика с первого занятия", "Быстрые итерации с AI", "Финальный проект для портфолио"].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-md border border-border/60 bg-white/70 px-4 py-3">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-semibold text-foreground/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="relative overflow-hidden bg-muted/40 py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 right-10 h-80 w-80 rounded-full bg-secondary/15 blur-glow opacity-60" />
            <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-primary/15 blur-glow opacity-60" />
          </div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Для кого</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                Если хочешь создавать — это твой вход в web + AI
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Курс подходит тем, кто хочет быстро собрать продукт и не зависеть от “идеального разработчика”.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="rounded-card border border-border/60 bg-white/70 p-7 shadow-glass backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-glass lg:col-span-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
                    <User className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="inline-flex items-center rounded-pill bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                    Быстрый старт
                  </span>
                </div>
                <p className="mt-5 text-lg font-bold text-foreground">Что получишь</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {["Понятную систему работы с ИИ", "MVP в портфолио", "Шаблоны промптов и чек‑листы"].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                {[
                  { title: "Предпринимателям", text: "Соберёте MVP и проверите гипотезу без долгой разработки.", icon: Rocket },
                  { title: "Новичкам в IT", text: "Поймёте структуру web‑продукта и начнёте делать, а не читать.", icon: Code2 },
                  { title: "Дизайнерам и креаторам", text: "Научитесь запускать страницы и сервисы самостоятельно.", icon: Monitor },
                  { title: "Специалистам", text: "Автоматизируете рутину и ускорите производство результата.", icon: Workflow },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-card border border-border/60 bg-white/70 p-6 shadow-glass backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
                      <x.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="mt-4 text-base font-bold text-foreground">{x.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section className="relative overflow-hidden bg-[#0F172A] py-24 text-white md:py-32">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-12 h-[520px] w-[520px] rounded-full bg-secondary/25 blur-glow-lg opacity-65" />
            <div className="absolute -bottom-32 right-10 h-[520px] w-[520px] rounded-full bg-primary/25 blur-glow-lg opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/10" />
          </div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Программа</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Структура курса: от идеи до MVP
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
                Каждый модуль заканчивается практикой: вы закрепляете навык и переносите его в свой проект.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-glass-dark backdrop-blur-glass lg:col-span-4">
                <p className="text-lg font-bold text-white">Формат обучения</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Занятия + практика + разбор. В конце — итоговая работа, которую не стыдно показать.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Практика", "MVP", "Фидбек", "Деплой"].map((t) => (
                    <span key={t} className="inline-flex items-center rounded-pill bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-glass">
                  <p className="text-sm font-semibold text-white">Итог</p>
                  <p className="mt-1 text-sm text-slate-400">Рабочий продукт + чек‑лист запуска.</p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <Accordion type="single" collapsible className="space-y-3">
                  {modules.map((mod, i) => (
                    <AccordionItem
                      key={mod.title}
                      value={`mod-${i}`}
                      className="rounded-3xl border border-white/10 bg-white/5 px-6 shadow-glass-dark backdrop-blur-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glass data-[state=open]:border-secondary/40"
                    >
                      <AccordionTrigger className="py-5 hover:no-underline">
                        <div className="flex items-center gap-3 text-left">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/35 to-primary/20 backdrop-blur-glass">
                            <mod.icon className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white md:text-base">{mod.title}</div>
                            <div className="text-xs text-white/60">Модуль {i + 1}</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-400">
                        {mod.text}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Installment */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/18 blur-glow opacity-50" />
            <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/18 blur-glow opacity-50" />
          </div>

          <div className="container">
            <div className="rounded-card border border-border/60 bg-white/70 p-7 shadow-glass backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-glass md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Оплата</p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-foreground">
                    Начни обучение сейчас — оплати частями
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                    Рассрочка помогает не откладывать рост. Покажем условия заранее и подберём комфортный вариант.
                  </p>
                </div>
                <Button className="h-12 rounded-md bg-secondary px-7 font-semibold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-xl">
                  Узнать условия
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="relative overflow-hidden bg-muted/45 py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 right-10 h-80 w-80 rounded-full bg-secondary/18 blur-glow opacity-50" />
            <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-primary/18 blur-glow opacity-50" />
          </div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Преимущества</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                Курс, который экономит время и даёт навык
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Фокус на результате: вы учитесь делать продукт, а не “учиться учиться”.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="rounded-card border border-border/60 bg-white/70 p-7 shadow-glass backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-glass lg:col-span-4">
                <p className="text-lg font-bold text-foreground">Подходит, если вам нужно</p>
                <div className="mt-4 space-y-3">
                  {["Запустить проект быстро", "Ускорить работу с ИИ", "Собрать портфолио"].map((t) => (
                    <div key={t} className="flex items-center gap-3 rounded-md border border-border/60 bg-background/80 px-4 py-3 shadow-glass-soft backdrop-blur-glass">
                      <div className="grid h-9 w-9 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/90">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                {advantages.map((adv) => (
                  <div
                    key={adv.title}
                    className="rounded-card border border-border/60 bg-white/70 p-6 shadow-glass backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
                      <adv.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="mt-4 text-base font-bold text-foreground">{adv.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{adv.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Teacher */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/18 blur-glow opacity-50" />
            <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/18 blur-glow opacity-50" />
          </div>

          <div className="container max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Преподаватель</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                Ведёт практик, который строит продукты с AI
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Вы получаете не “лекции”, а рабочие приёмы, которые можно использовать сразу.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="rounded-card border border-border/60 bg-white/70 p-7 shadow-glass backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-glass lg:col-span-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
                    <User className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="inline-flex items-center rounded-pill bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                    Практика на проектах
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">Евгений Гнедчик</h3>
                <p className="mt-1 text-sm font-semibold text-secondary">Full‑Stack / AI‑Builder</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Помогает доводить продукт до релиза: структура, UI‑логика, данные, интеграции и публикация.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { icon: Cpu, label: "AI‑workflows" },
                    { icon: Monitor, label: "Web‑MVP" },
                    { icon: Workflow, label: "Автоматизация" },
                    { icon: Rocket, label: "Запуск" },
                  ].map((x) => (
                    <div
                      key={x.label}
                      className="flex items-center gap-2 rounded-md border border-border/60 bg-background/80 px-4 py-3 backdrop-blur-glass"
                    >
                      <x.icon className="h-4 w-4 text-secondary" />
                      <span className="text-xs font-semibold text-foreground/80">{x.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-card border border-border/60 bg-white/70 p-7 shadow-glass backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-glass lg:col-span-7 md:p-8">
                <p className="text-lg font-bold text-foreground">Как проходит разбор</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  На каждом этапе — понятные критерии качества и быстрые правки. Вы видите, что улучшить, и как это сделать.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Шаблоны", text: "Готовые промпты и структуры, которые экономят часы.", icon: Sparkles },
                    { title: "Чек‑листы", text: "Проверка качества: UI, логика, тексты, ошибки.", icon: CheckCircle2 },
                    { title: "Фидбек", text: "Точные правки и рекомендации, без “в общем неплохо”.", icon: Users },
                    { title: "Релиз", text: "Деплой и упаковка результата под портфолио.", icon: Rocket },
                  ].map((x) => (
                    <div
                      key={x.title}
                      className="rounded-md border border-border/60 bg-background/80 p-5 shadow-glass-soft backdrop-blur-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
                        <x.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <p className="mt-4 text-sm font-bold text-foreground">{x.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{x.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="relative overflow-hidden bg-[#0F172A] py-24 text-white md:py-32">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 right-10 h-80 w-80 rounded-full bg-secondary/20 blur-glow opacity-55" />
            <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-primary/20 blur-glow opacity-55" />
          </div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Отзывы</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Учатся те, кто хочет сделать продукт — и делает
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
                Результат виден быстро: появляются работающие страницы, сервисы и уверенность в процессе.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Игорь М.", text: "Собрал MVP для бизнеса и выкатил на домен. Понял, как управлять ИИ, а не просто “просить сделать”." },
                { name: "Елена В.", text: "Сделала лендинг за вечер и перестала зависеть от разработчиков. Самое ценное — структура и проверка качества." },
                { name: "Дмитрий Р.", text: "Наконец-то системно: промпты, итерации, контроль результата. Экономлю часы каждую неделю." },
              ].map((r) => (
                <div
                  key={r.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass-dark backdrop-blur-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-dark"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="inline-flex items-center rounded-pill bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                      Вайбкодинг
                    </span>
                    <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-star text-brand-star" />
                    ))}
                  </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">«{r.text}»</p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-brand-avatar/55">
                      <User className="h-5 w-5 text-brand-avatar-text" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{r.name}</div>
                      <div className="text-xs text-white/60">Выпускник Академии ИИ</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/18 blur-glow opacity-50" />
            <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/18 blur-glow opacity-50" />
          </div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Сертификаты</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                Подтверждение навыков — без лишнего шума
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                По итогам курса вы получаете документы, которые фиксируют прогресс и результат.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
              {[
                { title: "Сертификат Академии ИИ", desc: "Подтверждает прохождение трека и освоение практических навыков запуска продукта." },
                { title: "Сертификат о повышении квалификации", desc: "Документ для усиления профиля в резюме и переговоров о новой роли." },
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-card border border-border/60 bg-white/70 p-7 text-left shadow-glass backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="inline-flex items-center rounded-pill bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      Готово к резюме
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">{cert.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden bg-[#0F172A] py-24 text-white md:py-32">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 right-10 h-80 w-80 rounded-full bg-secondary/20 blur-glow opacity-50" />
            <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-primary/20 blur-glow opacity-50" />
          </div>

          <div className="container max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Вопросы по курсу
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
                Коротко и по делу — чтобы вы быстро приняли решение.
              </p>
            </div>

            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-3xl border border-white/10 bg-white/5 px-6 shadow-glass-dark backdrop-blur-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glass-dark data-[state=open]:border-secondary/40"
                >
                  <AccordionTrigger className="py-5 text-sm font-semibold text-white hover:text-secondary hover:no-underline md:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Application Form */}
        <section id="signup" className="relative overflow-hidden py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/18 blur-glow opacity-50" />
            <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/18 blur-glow opacity-50" />
          </div>

          <div className="container max-w-4xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Заявка</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                Запишись на курс — стартуй без лишних шагов
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Оставь контакты и цель — мы подтвердим место и подскажем оптимальную траекторию.
              </p>
            </div>

            {submitted ? (
              <div className="mt-10 rounded-card border border-border/60 bg-white/70 p-8 text-center shadow-glass backdrop-blur-glass-strong">
                <p className="text-lg font-bold text-foreground mb-2">Спасибо! Заявка отправлена</p>
                <p className="text-sm text-muted-foreground">
                  Мы свяжемся с вами в ближайшее время и подтвердим старт.
                </p>
              </div>
            ) : (
              <div className="mt-10 rounded-card border border-border/60 bg-white/70 p-6 shadow-glass backdrop-blur-glass-strong md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Выбирай направление и начни карьеру в ИИ
                </p>
                <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Имя"
                    className="h-12 border-border/70 bg-background/85"
                    required
                  />
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Телефон"
                    className="h-12 border-border/70 bg-background/85"
                    type="tel"
                    required
                  />
                  <Input
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="h-12 border-border/70 bg-background/85 md:col-span-2"
                    type="email"
                    required
                  />

                  <Select value={formData.goal} onValueChange={(v) => setFormData({ ...formData, goal: v })}>
                    <SelectTrigger className="h-12 border-border/70 bg-background/85 md:col-span-2">
                      <SelectValue placeholder="Цель обучения" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Запустить MVP/стартап",
                        "Собрать лендинг/сайт быстро",
                        "Автоматизировать рутину",
                        "Сменить роль / войти в IT",
                      ].map((g) => (
                        <SelectItem key={g} value={g}>
                          {g}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="md:col-span-2 pt-1">
                    <Button
                      type="submit"
                      className="h-12 w-full rounded-md bg-secondary text-base font-semibold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-xl"
                    >
                      Записаться на курс <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Мы используем контакты только для связи по вашему запросу.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
