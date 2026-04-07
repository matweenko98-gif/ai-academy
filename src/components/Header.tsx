import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const navLinks = [
  { label: "Курсы", href: "/kursy" },
  { label: "Преподаватели", href: "/#teachers" },
  { label: "О нас", href: "/#about" },
  { label: "Корпоративное обучение", href: "/#corporate" },
  { label: "Контакты", href: "/#contacts" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();

  const handleOpenSignup = () => {
    setIsSignupOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", phone: "" });
  };

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
          <Button
            size="sm"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg px-5 font-semibold"
            onClick={handleOpenSignup}
          >
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
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg font-semibold mt-2"
              onClick={() => {
                setMobileOpen(false);
                handleOpenSignup();
              }}
            >
              Записаться
            </Button>
          </nav>
        </div>
      )}

      <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Записаться на обучение</DialogTitle>
            <DialogDescription>
              Оставьте минимальные данные, и мы свяжемся с вами.
            </DialogDescription>
          </DialogHeader>
          {isSubmitted ? (
            <div className="rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-foreground">
              Заявка отправлена. Скоро вам перезвоним.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ваше имя"
                required
              />
              <PhoneInput
                defaultCountry="ru"
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClassName="!h-9 !w-full !rounded-md !border-input !bg-transparent !text-sm !shadow-sm !ring-offset-background placeholder:!text-muted-foreground focus:!outline-none focus:!ring-1 focus:!ring-ring"
                countrySelectorStyleProps={{
                  buttonClassName: "!h-9 !rounded-l-md !border-input !bg-transparent !px-3 !shadow-sm",
                }}
              />
              <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Отправить
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
}
