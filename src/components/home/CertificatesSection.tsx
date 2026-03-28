import { Award, BadgeCheck, Sparkles } from "lucide-react";

export default function CertificatesSection() {
  const highlights = [
    "Умение ставить задачу ИИ и оценивать качество ответа",
    "Практические кейсы: автоматизация, контент, бизнес‑сценарии",
    "Результаты по итоговым заданиям и защите проекта",
  ];

  const certificates = [
    {
      title: "Сертификат Академии ИИ",
      desc: "Подтверждает прохождение программы и освоение практических навыков в выбранном треке.",
      icon: Award,
      tone: "secondary",
    },
    {
      title: "Сертификат о повышении квалификации",
      desc: "Официальный документ для усиления профиля и переговоров о новой роли/зарплате.",
      icon: BadgeCheck,
      tone: "primary",
    },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 right-10 h-80 w-80 rounded-full bg-secondary/10 blur-[120px] opacity-70" />
        <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-primary/10 blur-[120px] opacity-70" />
      </div>

      <div className="container">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="max-w-[40rem] text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold text-secondary">
                  <Sparkles className="h-3.5 w-3.5 text-secondary" />
                  Подтверждение навыков
                </div>
                <h2 className="mt-4 text-[34px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[52px]">
                  Сертификаты, которые усиливают резюме и доверие
                </h2>
                <p className="mt-4 text-[14px] leading-[1.55] text-muted-foreground md:text-[16px]">
                  По итогам обучения вы получаете документы, которые подтверждают прогресс и освоенные навыки.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-primary/5 p-6 shadow-sm md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary/10 ring-1 ring-border">
                    <BadgeCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-semibold text-secondary">
                    2 документа
                  </span>
                </div>

                <p className="mt-5 text-[24px] font-bold leading-[1.15] text-foreground">Что именно подтверждаем</p>
                <ul className="mt-4 space-y-2 text-[13px] leading-[1.55] text-muted-foreground">
                  {highlights.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-3xl bg-slate-50 p-6 md:p-8">
              <img src="/images/сертификаты.png" alt="Сертификаты" className="h-auto w-full object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <div key={cert.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary/10 ring-1 ring-border">
                    <cert.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${
                      cert.tone === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    Готово к резюме
                  </span>
                </div>

                <h3 className="mt-5 text-[24px] font-bold leading-[1.1] text-foreground">
                  {index + 1}. {cert.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] text-muted-foreground">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
