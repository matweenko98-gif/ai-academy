import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-primary-foreground">
      <div className="container bg-[#0F172A] py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg">ИИ Академия</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Образовательная платформа для изучения искусственного интеллекта. 100% онлайн, практика с первого занятия.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-primary-foreground">Курсы</h4>
            <ul className="space-y-2.5">
              <li><Link to="/vaibkoding" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Вайбкодинг</Link></li>
              <li><Link to="/kursy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Промптинжиниринг</Link></li>
              <li><Link to="/kursy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">ИИ для руководителей</Link></li>
              <li><Link to="/kursy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Все курсы</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-primary-foreground">Компания</h4>
            <ul className="space-y-2.5">
              <li><Link to="/#about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">О нас</Link></li>
              <li><Link to="/#teachers" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Преподаватели</Link></li>
              <li><Link to="/#corporate" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Корпоративное обучение</Link></li>
              <li><Link to="/#contacts" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Контакты</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-primary-foreground">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+74951234567" className="hover:opacity-100 transition-opacity">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@ai-academy.ru" className="hover:opacity-100 transition-opacity">info@ai-academy.ru</a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Москва, Россия (100% онлайн)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">© 2026 ИИ Академия. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Политика конфиденциальности</a>
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
