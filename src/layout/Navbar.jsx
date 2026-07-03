import { useState, useEffect } from 'react';
import { navLinks } from '../data/content';

export default function Navbar({ isDark, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      const sections = navLinks
        .map(link => link.href.replace('#', ''))
        .filter(id => id);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] glass transition-all duration-300 ${
        scrolled ? 'shadow-premium h-16' : 'h-20'
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter h-full flex flex-row-reverse justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-primary font-extrabold text-2xl tracking-tight">
            الأستاذة نادين السيد
          </span>
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">science</span>
          </div>
        </div>

        <div className="hidden lg:flex flex-row-reverse items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = sectionId === '' ? activeSection === '' : activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary transition-colors'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:block bg-primary text-on-primary px-6 py-3 rounded-button font-bold hover:scale-95 transition-transform"
          >
            احجز حصتك الآن
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-primary p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="تبديل الوضع الليلي"
          >
            <span className="material-symbols-outlined text-3xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary p-2"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-surface-pure border-b border-outline-variant/30 shadow-premium">
          <div className="px-margin-mobile py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-on-background font-bold py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}