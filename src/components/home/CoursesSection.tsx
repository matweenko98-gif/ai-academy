import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Monitor, Sparkles } from "lucide-react";

const courses = [
  {
    title: "Вайбкодинг",
    description: "Запускай сайты, веб-приложения и AI-сервисы без кода",
    lessons: "12 занятий",
    price: "49 000 ₽",
    start: "Старт 30 марта 2026",
    format: "Онлайн",
    slug: "/vaibkoding",
  },
  {
    title: "Промптинжиниринг",
    description: "Заставь ИИ работать на тебя в 10 раз эффективнее",
    lessons: "10 занятий",
    price: "35 000 ₽",
    start: "Старт 5 апреля 2026",
    format: "Онлайн",
    slug: "/kursy",
  },
  {
    title: "ИИ для руководителя",
    description: "Нейросети для руководителей: оптимизируй рутину и принимай решения в 5 раз быстрее",
    lessons: "6 занятий",
    price: "42 000 ₽",
    start: "Старт 27 марта 2026",
    format: "Онлайн",
    slug: "/kursy",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              Витрина курсов
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Выбирай курс — собирай навык, который окупается
            </h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed">
              Короткие программы, много практики и понятная структура. Начни с актуального направления и прокачайся за
              недели, а не месяцы.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="w-full lg:w-auto border-border/70 bg-white/60 backdrop-blur hover:bg-white rounded-[var(--radius-md)] px-7 h-11 font-semibold"
          >
            <Link to="/kursy">
              Смотреть все курсы <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured course (bigger bento tile) */}
          <Link
            to={courses[0].slug}
            className="group lg:col-span-5 rounded-[var(--radius-lg)] border border-border/60 bg-white/55 backdrop-blur-md shadow-sm overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative p-6 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
              <div className="relative">
                <span className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold">
                  {courses[0].format}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                  {courses[0].title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {courses[0].description}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span>{courses[0].lessons}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span>{courses[0].start}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Monitor className="h-4 w-4 text-secondary" />
                    <span>{courses[0].format}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
                  <span className="text-lg font-bold text-foreground">{courses[0].price}</span>
                  <span className="text-secondary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Подробнее <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid of remaining courses */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {courses.slice(1).map((course) => (
              <Link
                key={course.title}
                to={course.slug}
                className="group rounded-[var(--radius-lg)] border border-border/60 bg-white/55 backdrop-blur-md shadow-sm p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                    {course.format}
                  </span>
                  <div className="h-9 w-9 rounded-[var(--radius-md)] border border-border/60 bg-white/60 backdrop-blur flex items-center justify-center">
                    <div className="h-3.5 w-3.5 rounded-full bg-secondary/80" />
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-secondary transition-colors">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{course.description}</p>

                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.lessons}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{course.start}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-base font-bold text-foreground">{course.price}</span>
                  <span className="text-secondary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Подробнее <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-white/60 px-3 py-1 font-semibold backdrop-blur">
            100% онлайн
          </span>
          <span className="inline-flex items-center rounded-full border border-border/60 bg-white/60 px-3 py-1 font-semibold backdrop-blur">
            Практика в каждом модуле
          </span>
          <span className="inline-flex items-center rounded-full border border-border/60 bg-white/60 px-3 py-1 font-semibold backdrop-blur">
            Поддержка менторов
          </span>
        </div>
      </div>
    </section>
  );
}
