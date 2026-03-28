import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, Monitor, ArrowRight, X } from "lucide-react";

const allCourses = [
  {
    title: "Вайбкодинг",
    description: "Запускай сайты, веб-приложения и AI-сервисы без кода",
    lessons: "12 занятий",
    price: 49000,
    start: "30 марта 2026",
    format: "Онлайн",
    slug: "/vaibkoding",
    category: "Вайбкодинг",
    level: "Начальный",
    available: true,
  },
  {
    title: "Промптинжиниринг",
    description: "Заставь ИИ работать на тебя в 10 раз эффективнее",
    lessons: "10 занятий",
    price: 35000,
    start: "5 апреля 2026",
    format: "Онлайн",
    slug: "/kursy",
    category: "Промптинжиниринг",
    level: "Начальный",
    available: true,
  },
  {
    title: "ИИ для руководителя",
    description: "Нейросети для руководителей: оптимизируй рутину и принимай решения в 5 раз быстрее",
    lessons: "6 занятий",
    price: 42000,
    start: "27 марта 2026",
    format: "Онлайн",
    slug: "/kursy",
    category: "ИИ для руководителей",
    level: "Средний",
    available: true,
  },
  {
    title: "ИИ для бизнеса: стратегия и внедрение",
    description: "Разработайте стратегию внедрения ИИ в ваш бизнес",
    lessons: "8 занятий",
    price: 55000,
    start: "",
    format: "Онлайн",
    slug: "/kursy",
    category: "ИИ для бизнеса",
    level: "Продвинутый",
    available: false,
  },
  {
    title: "Автоматизация процессов с ИИ",
    description: "Научись автоматизировать рутинные задачи с помощью нейросетей",
    lessons: "10 занятий",
    price: 45000,
    start: "",
    format: "Онлайн",
    slug: "/kursy",
    category: "Автоматизация процессов",
    level: "Средний",
    available: false,
  },
  {
    title: "Нейросети и креатив",
    description: "Генерация изображений, видео и контента с помощью ИИ",
    lessons: "8 занятий",
    price: 38000,
    start: "",
    format: "Онлайн",
    slug: "/kursy",
    category: "Нейросети и креатив",
    level: "Начальный",
    available: false,
  },
  {
    title: "Продвинутый промптинжиниринг",
    description: "Углублённые техники работы с LLM для профессионалов",
    lessons: "12 занятий",
    price: 52000,
    start: "",
    format: "Онлайн",
    slug: "/kursy",
    category: "Промптинжиниринг",
    level: "Продвинутый",
    available: false,
  },
];

const categories = ["Вайбкодинг", "Промптинжиниринг", "ИИ для руководителей", "ИИ для бизнеса", "Автоматизация процессов", "Нейросети и креатив"];
const levels = ["Начальный", "Средний", "Продвинутый"];
const priceRanges = ["до 35 000 ₽", "35–50 000 ₽", "от 50 000 ₽"];

export default function Kursy() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const filtered = allCourses.filter((c) => {
    if (search && !c.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedCategory && c.category !== selectedCategory) return false;
    if (selectedLevel && c.level !== selectedLevel) return false;
    if (selectedPrice) {
      if (selectedPrice === "до 35 000 ₽" && c.price > 35000) return false;
      if (selectedPrice === "35–50 000 ₽" && (c.price < 35000 || c.price > 50000)) return false;
      if (selectedPrice === "от 50 000 ₽" && c.price < 50000) return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSelectedLevel("");
    setSelectedPrice("");
  };

  const hasFilters = search || selectedCategory || selectedLevel || selectedPrice;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/20 blur-[120px] opacity-60" />
            <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/20 blur-[120px] opacity-60" />
          </div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                Курсы Академии ИИ
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Выберите направление под цель: быстрый старт, рост эффективности или внедрение ИИ в рабочие процессы.
              </p>
            </div>

            {/* Search (glass) */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="rounded-[var(--radius-lg)] bg-white/60 backdrop-blur-2xl border border-white/40 shadow-2xl p-4 md:p-5">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Поиск по курсам (например: промпт, бизнес, автоматизация)…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full h-12 rounded-[var(--radius-md)] border border-white/40 bg-white/70 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Промпт‑инжиниринг", "Автоматизация", "ИИ для бизнеса", "Вайбкодинг"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-foreground/80 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-10 md:py-16">
          <div className="container">
            {/* Filters */}
            <div className="mb-8 space-y-4">
              {/* Category */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Категория</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5 ${
                        selectedCategory === cat
                          ? "bg-secondary text-secondary-foreground border-secondary shadow-sm"
                          : "bg-white/60 backdrop-blur-2xl text-foreground border-white/40 hover:border-secondary/60 hover:text-secondary hover:shadow-sm"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                {/* Level */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Уровень</p>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((lev) => (
                      <button
                        key={lev}
                        onClick={() => setSelectedLevel(selectedLevel === lev ? "" : lev)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5 ${
                          selectedLevel === lev
                            ? "bg-secondary text-secondary-foreground border-secondary shadow-sm"
                            : "bg-white/60 backdrop-blur-2xl text-foreground border-white/40 hover:border-secondary/60 hover:text-secondary hover:shadow-sm"
                        }`}
                      >
                        {lev}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Цена</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((pr) => (
                      <button
                        key={pr}
                        onClick={() => setSelectedPrice(selectedPrice === pr ? "" : pr)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5 ${
                          selectedPrice === pr
                            ? "bg-secondary text-secondary-foreground border-secondary shadow-sm"
                            : "bg-white/60 backdrop-blur-2xl text-foreground border-white/40 hover:border-secondary/60 hover:text-secondary hover:shadow-sm"
                        }`}
                      >
                        {pr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {hasFilters && (
                <Button
                  variant="ghost"
                  onClick={resetFilters}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-1" /> Сбросить все фильтры
                </Button>
              )}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <Link
                  key={course.title}
                  to={course.slug}
                  className="group relative rounded-[var(--radius-lg)] bg-white/60 backdrop-blur-2xl border border-border shadow-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {!course.available && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/70 border border-white/40 backdrop-blur text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Скоро
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                      course.available ? "bg-secondary/10 text-secondary border border-white/40" : "bg-white/60 border border-white/40 text-muted-foreground"
                    }`}>
                      {course.format}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.lessons}</span>
                    </div>
                    {course.start && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Старт {course.start}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Monitor className="w-4 h-4" />
                      <span>{course.format}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-bold text-foreground">{course.price.toLocaleString()} ₽</span>
                    <span className="text-secondary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      {course.available ? "Подробнее" : "Скоро"} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Ничего не найдено. Попробуйте изменить фильтры или запрос.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
