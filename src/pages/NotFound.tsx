import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden px-4">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-secondary/20 blur-[120px] opacity-60" />
        <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-primary/20 blur-[120px] opacity-60" />
        <svg
          className="absolute left-1/2 top-1/2 h-[860px] w-[980px] -translate-x-1/2 -translate-y-1/2 opacity-80 animate-ai-drift"
          viewBox="0 0 980 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="nfGrad" x1="120" y1="140" x2="860" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7C3AED" stopOpacity="0.55" />
              <stop offset="0.55" stopColor="#3B82F6" stopOpacity="0.35" />
              <stop offset="1" stopColor="#7C3AED" stopOpacity="0.25" />
            </linearGradient>
            <filter id="nfBlur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="46" />
            </filter>
          </defs>
          <g filter="url(#nfBlur)">
            <circle cx="340" cy="420" r="220" fill="url(#nfGrad)" />
            <circle cx="640" cy="460" r="240" fill="url(#nfGrad)" opacity="0.9" />
          </g>
          <path
            d="M140 520 C 280 420, 420 420, 560 520 C 700 620, 820 610, 900 520"
            stroke="url(#nfGrad)"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      </div>

      <div className="w-full max-w-2xl">
        <div className="rounded-[var(--radius-lg)] bg-white/60 backdrop-blur-2xl border border-white/40 shadow-2xl p-7 md:p-10 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            Академия ИИ
          </div>

          <h1 className="mt-6 text-6xl md:text-8xl font-extrabold leading-none tracking-tight text-foreground">
            404
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Такой страницы нет. Но есть курсы, которые реально прокачивают навык.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl px-6 font-semibold"
            >
              <Home className="mr-2 h-4 w-4" />
              На главную
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-white/50 bg-white/60 backdrop-blur hover:bg-white transition-all duration-300 px-6 font-semibold text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад
            </button>
          </div>

          <div className="mt-8 text-xs text-muted-foreground">
            Путь: <span className="font-semibold text-foreground/80">{location.pathname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
