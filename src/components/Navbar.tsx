import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { TRANSLATIONS, Language } from '../data/translations';
import { getWhatsAppLink } from '../data/content';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.location, href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#211D1A]/90 backdrop-blur-md border-b border-[#D8B477]/15 py-3 shadow-lg'
            : 'bg-gradient-to-b from-[#211D1A]/80 via-[#211D1A]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477] rounded-sm py-1"
              aria-label="Hasna 1996 Ladies Beauty Center"
            >
              <Logo />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-[#F3EEE6]/85 hover:text-[#D8B477] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477] rounded-sm py-1 px-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions (Language Toggle & Book Button) */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={onToggleLang}
                className="text-xs uppercase tracking-wider font-semibold py-1.5 px-3 rounded border border-[#D8B477]/30 text-[#F3EEE6] hover:text-[#D8B477] hover:border-[#D8B477] hover:bg-[#D8B477]/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477] whitespace-nowrap active:translate-y-0.5"
                aria-label={`Switch to ${lang === 'ar' ? 'English' : 'Arabic'}`}
              >
                {t.nav.switchLang}
              </button>

              {/* Book Appointment CTA Button (Desktop) */}
              <button
                type="button"
                onClick={() => {
                  if (onOpenBookingModal) {
                    onOpenBookingModal();
                  } else {
                    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
                  }
                }}
                className="hidden sm:inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded-none bg-[#D8B477] text-[#211D1A] hover:bg-[#E5C791] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477] focus-visible:ring-offset-2 focus-visible:ring-offset-[#211D1A] whitespace-nowrap active:translate-y-0.5"
              >
                {t.nav.book}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#F3EEE6] hover:text-[#D8B477] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477] rounded"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#211D1A]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 transition-opacity animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div>
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#D8B477]/15">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F3EEE6] hover:text-[#D8B477] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477]"
                aria-label="Close navigation menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#F3EEE6] hover:text-[#D8B477] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-[#D8B477]/15 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
                }
              }}
              className="w-full py-3.5 px-4 bg-[#D8B477] text-[#211D1A] font-semibold text-center uppercase tracking-wider text-sm hover:bg-[#E5C791] active:translate-y-0.5 transition-all"
            >
              {t.nav.book}
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+971523214984"
                className="flex items-center justify-center gap-2 py-3 px-3 border border-[#D8B477]/30 text-xs font-medium text-[#F3EEE6] hover:border-[#D8B477] hover:text-[#D8B477]"
              >
                <Phone size={16} className="text-[#D8B477]" />
                <span>+971 52 321 4984</span>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-[#243328] border border-[#3E6547] text-xs font-medium text-[#E3F4E7] hover:bg-[#2F4435]"
              >
                <MessageSquare size={16} className="text-[#64C87F]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                onToggleLang();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-center text-[#A69D92] hover:text-[#D8B477] py-2 uppercase tracking-widest"
            >
              {lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
