import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Подойдёт ли мне обучение, если я новичок?",
    a: "Да. В каждом треке есть понятный старт: базовые инструменты, шаблоны промптов и первые практические задания. Дальше — постепенное усложнение без перегруза.",
  },
  {
    q: "Как проходит обучение: записи или живые занятия?",
    a: "Формат — онлайн. Вы получаете материалы, практику и разборы. На ключевых этапах есть живые сессии и обратная связь по заданиям.",
  },
  {
    q: "Что именно я сделаю на практике?",
    a: "Соберёте набор рабочих сценариев: генерация и проверка контента, автоматизация рутины, шаблоны для LLM, кейсы под задачи бизнеса. Итог — мини‑проект, который можно показать.",
  },
  {
    q: "Какие курсы сейчас самые востребованные?",
    a: "Чаще всего выбирают промпт‑инжиниринг, автоматизацию процессов и «ИИ для бизнеса». Мы поможем выбрать трек под цель: новая роль, повышение эффективности или внедрение в компании.",
  },
  {
    q: "Есть ли рассрочка и можно ли начать сразу?",
    a: "Да. Рассрочка доступна, а старт — сразу после оформления. Условия зависят от курса, всё прозрачно: покажем график и итоговую сумму заранее.",
  },
  {
    q: "Будут ли сертификаты?",
    a: "Да. По итогам — документы, подтверждающие прохождение программы и освоенные навыки (включая практику и итоговую работу).",
  },
];

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0E] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/20 blur-[120px] opacity-30" />
        <div className="absolute -bottom-28 right-12 h-80 w-80 rounded-full bg-primary/20 blur-[120px] opacity-30" />
      </div>

      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            FAQ
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Ответы на частые вопросы
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
            Коротко и по делу — чтобы вы быстро поняли формат и результат.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] backdrop-blur-sm lg:col-span-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-secondary/30 to-primary/20">
                <HelpCircle className="h-6 w-6 text-secondary" />
              </div>
              <span className="inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                Поддержка
              </span>
            </div>
            <p className="mt-5 text-lg font-bold text-white">Не нашли ответ?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Напишите нам — подскажем подходящий трек и объясним, как быстро получить результат именно в вашей задаче.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Новичкам", "Специалистам", "Руководителям"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <Button
              type="button"
              className="mt-6 h-12 w-full rounded-[var(--radius-md)] bg-secondary text-base font-semibold text-secondary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-xl"
            >
              Связаться
            </Button>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 shadow-sm data-[state=open]:border-secondary/40"
                >
                  <AccordionTrigger className="py-5 text-sm font-semibold text-white hover:text-secondary hover:no-underline md:text-base [&[data-state=open]>svg]:text-secondary [&>svg]:text-white">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
