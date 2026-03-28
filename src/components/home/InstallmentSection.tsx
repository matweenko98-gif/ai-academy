import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, Shield, Sparkles, Wallet } from "lucide-react";

export default function InstallmentSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/15 blur-[110px] opacity-70" />
        <div className="absolute -bottom-28 right-12 h-80 w-80 rounded-full bg-primary/10 blur-[110px] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 rounded-[var(--radius-lg)] border border-border bg-white bg-[linear-gradient(135deg,_#7C3AED1A_0%,_#7C3AED00_50%,_#1D4ED81A_100%)] shadow-sm p-7 md:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold text-secondary">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                Гибкая оплата
              </div>
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-secondary-foreground">
                Без скрытых комиссий
              </span>
            </div>

            <h2 className="mt-5 text-[34px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[44px]">
              Учись сейчас — оплачивай комфортно
            </h2>
            <p className="mt-4 max-w-2xl text-[13px] leading-[1.65] text-muted-foreground md:text-[14px]">
              Рассрочка помогает начать обучение без откладывания. Мы всё объясним и подберём удобный вариант под ваш
              бюджет.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Wallet, title: "Платёж частями", desc: "Понятный график и фиксированная сумма" },
                { icon: Calendar, title: "Старт сразу", desc: "Не ждёте «идеального момента»" },
                { icon: Shield, title: "Прозрачные условия", desc: "Без неожиданных доплат" },
              ].map((x) => (
                <div key={x.title} className="rounded-[var(--radius-md)] border border-border bg-background/80 p-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-secondary/10 ring-1 ring-border">
                      <x.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold leading-tight text-foreground">{x.title}</div>
                      <div className="mt-1 text-[11px] leading-[1.35] text-muted-foreground">{x.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button className="h-11 rounded-[var(--radius-md)] bg-secondary px-5 text-secondary-foreground hover:bg-secondary/90">
                Узнать условия
              </Button>
              <Button variant="ghost" className="h-11 justify-start px-1 text-muted-foreground hover:bg-transparent hover:text-foreground">
                Подобрать курс
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[var(--radius-lg)] bg-muted/35 border border-border shadow-sm p-7 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-secondary/10 ring-1 ring-border">
                <CreditCard className="h-5.5 w-5.5 text-secondary" />
              </div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                Пример расчёта
              </span>
            </div>

            <p className="mt-5 text-[14px] font-bold text-foreground">Как это выглядит</p>
            <p className="mt-2 text-[12px] leading-[1.6] text-muted-foreground">
              Вы выбираете курс — мы показываем варианты оплаты. Дальше учитесь по программе, а платежи идут по графику.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { k: "Первый платёж", v: "от 3 900 ₽" },
                { k: "Срок", v: "3–12 месяцев" },
                { k: "Оформление", v: "5–10 минут" },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between rounded-[var(--radius-md)] bg-background border border-border px-4 py-3">
                  <span className="text-[12px] font-medium text-muted-foreground">{row.k}</span>
                  <span className="text-[12px] font-bold text-foreground">{row.v}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[11px] leading-[1.5] text-muted-foreground">
              Финальные условия зависят от курса и выбранного варианта оплаты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
