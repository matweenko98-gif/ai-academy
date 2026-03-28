import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Курсы", href: "/kursy" },
  { label: "Преподаватели", href: "/#teachers" },
  { label: "О нас", href: "/#about" },
  { label: "Корпоративное обучение", href: "/#corporate" },
  { label: "Контакты", href: "/#contacts" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
            <span className="text-secondary-foreground font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-lg text-primary hidden sm:inline">ИИ Академия</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === link.href ? "text-secondary" : "text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+74951234567" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors">
            <Phone className="w-4 h-4" />
            +7 (495) 123-45-67
          </a>
          <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg px-5 font-semibold">
            Записаться
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-secondary ${
                  location.pathname === link.href ? "text-secondary" : "text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+74951234567" className="flex items-center gap-1.5 text-sm font-medium text-primary py-2">
              <Phone className="w-4 h-4" />
              +7 (495) 123-45-67
            </a>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg font-semibold mt-2">
              Записаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
