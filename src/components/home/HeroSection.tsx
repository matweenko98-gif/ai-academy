import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const courseOptions = useMemo(
    () => ["Вайбкодинг", "Промптинжиниринг", "ИИ для руководителя", "ИИ для бизнеса"],
    [],
  );

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      {/* Readability overlay + glow accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/35" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/25 blur-[120px] opacity-60" />
        <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/25 blur-[120px] opacity-60" />
      </div>

      <div className="container relative min-h-screen flex items-center justify-center py-[120px]">
        <div className="mx-auto max-w-[1100px] flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white/85 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            Академия ИИ • 100% онлайн • Практика
          </div>

          <h1 className="mt-6 text-balance text-[50px] leading-[100%] md:text-[92px] md:leading-[85px] font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            Карьерный рост начинается с{" "}
            <span
              className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(124,58,237,0.35)]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(100, 47, 193, 1) 0%, rgba(17, 69, 212, 1) 50%, rgba(73, 0, 209, 1) 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              актуальных знаний
            </span>
          </h1>

          <p className="mt-5 text-base md:text-xl leading-relaxed text-white/80 max-w-2xl drop-shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
            Для новичков, специалистов, руководителей и предпринимателей. 100% онлайн. Практика с первого занятия.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {["Онлайн‑формат", "Практика", "Сертификаты"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold text-white/85 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-sm"
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                {t}
              </span>
            ))}
          </div>

          {/* Glass form panel */}
          <div className="mt-10 w-full">
            <div className="rounded-[var(--radius-lg)] bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl p-5 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Выбирай направление и начни карьеру в ИИ
              </p>

              {submitted ? (
                <div className="mt-5 rounded-[var(--radius-md)] border border-white/40 bg-white/70 backdrop-blur p-5 text-left">
                  <p className="text-lg font-bold text-foreground">Заявка принята</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Мы свяжемся с вами в ближайшее время и поможем выбрать курс.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <Input
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Имя"
                    className="h-12 bg-white/70 border-white/40 focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="Телефон"
                    className="h-12 bg-white/70 border-white/40"
                    type="tel"
                    required
                  />
                  <Input
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="Email"
                    className="h-12 bg-white/70 border-white/40"
                    type="email"
                    required
                  />

                  <Select value={form.course} onValueChange={(v) => setForm((p) => ({ ...p, course: v }))}>
                    <SelectTrigger className="h-12 bg-white/70 border-white/40">
                      <SelectValue placeholder="Выбор курса" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseOptions.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="md:col-span-2 pt-1">
                    <Button
                      type="submit"
                      className="h-12 w-full rounded-[var(--radius-md)] bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Оставить заявку <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Нажимая «Оставить заявку», вы соглашаетесь на обработку данных для связи.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
