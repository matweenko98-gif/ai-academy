import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      source: "contact_main_page",
    });
    setLoading(false);
    if (error) {
      alert("Ошибка при отправке заявки. Попробуйте ещё раз.");
      return;
    }
    alert("Заявка успешно отправлена!");
    setForm({ name: "", phone: "", email: "", message: "" });
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 right-10 h-80 w-80 rounded-full bg-secondary/20 blur-[110px] opacity-60" />
        <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-primary/20 blur-[110px] opacity-60" />
      </div>

      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            Связаться с нами
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
            Расскажите, какую задачу хотите решить с ИИ
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            Подскажем трек, формат и быстрый план — без “впаривающих” звонков и лишних обещаний.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-bold text-foreground mb-2">Спасибо! Заявка отправлена</p>
            <p className="text-sm text-muted-foreground">
              Мы свяжемся с вами в ближайшее время и предложим подходящий курс и следующий шаг.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm lg:col-span-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/15 bg-secondary/10">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <span className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold">
                  Быстрый ответ
                </span>
              </div>

              <p className="mt-5 text-lg font-bold text-foreground">Что написать</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "Кем вы работаете сейчас",
                  "Какая цель: новая роль / эффективность / внедрение",
                  "Какие задачи хочется автоматизировать",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-[var(--radius-md)] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Mail className="h-4 w-4 text-secondary" />
                  Почта для связи
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Оставьте email — пришлём подборку и план.</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm lg:col-span-8"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Имя"
                  className="h-12 rounded-xl border border-slate-200 bg-white"
                  required
                />
                <PhoneInput
                  defaultCountry="ru"
                  value={form.phone}
                  onChange={(phone) => setForm({ ...form, phone })}
                  inputClassName="!h-12 !w-full !rounded-xl !border !border-slate-200 !bg-white !text-sm !shadow-sm placeholder:!text-muted-foreground focus:!outline-none focus:!ring-1 focus:!ring-ring"
                  countrySelectorStyleProps={{
                    buttonClassName: "!h-12 !rounded-l-xl !border !border-slate-200 !bg-white !px-3 !shadow-sm",
                  }}
                />
                <Input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email"
                  className="h-12 rounded-xl border border-slate-200 bg-white md:col-span-2"
                  type="email"
                  required
                />
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Коротко опишите цель или задачу (например: “хочу автоматизировать отчёты и письма”)"
                  className="min-h-[110px] rounded-xl border border-slate-200 bg-white md:col-span-2"
                />
              </div>

              <div className="mt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-[var(--radius-md)] bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all hover:-translate-y-0.5 hover:shadow-xl text-base font-semibold"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
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
  );
}
