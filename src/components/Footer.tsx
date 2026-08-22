import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/content';
import { Logo } from './Logo';
import { Instagram, MessageSquare, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171513] text-[#F3EEE6] border-t border-[#D8B477]/15 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Slogan */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#D8B477]/15">
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-xl sm:text-2xl font-serif text-[#D8B477] italic">
              {t.footer.slogan}
            </p>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A69D92] hover:text-[#D8B477] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477] py-1"
          >
            <span>{isAr ? 'العودة إلى الأعلى' : 'Back to top'}</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-[#D8B477]" />
          </button>
        </div>

        {/* Middle Navigation & Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-[#D8B477]/15">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8B477] font-semibold mb-4">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A69D92]">
              <li>
                <a href="#services" className="hover:text-[#F3EEE6] transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F3EEE6] transition-colors">
                  {t.nav.experience}
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F3EEE6] transition-colors">
                  {t.nav.story}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F3EEE6] transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8B477] font-semibold mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A69D92]">
              <li>
                <a href="tel:+971523214984" className="hover:text-[#F3EEE6] flex items-center gap-2 transition-colors">
                  <Phone size={14} className="text-[#D8B477]" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F3EEE6] flex items-center gap-2 transition-colors"
                >
                  <MessageSquare size={14} className="text-[#D8B477]" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F3EEE6] flex items-center gap-2 transition-colors"
                >
                  <Instagram size={14} className="text-[#D8B477]" />
                  <span>@salonhasna1996</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8B477] font-semibold mb-4">
              {t.location.hoursTitle}
            </h4>
            <p className="text-sm text-[#F3EEE6] font-medium mb-1">
              10:00 — 22:00
            </p>
            <p className="text-xs text-[#A69D92] mb-3">
              {isAr ? 'يوميًا في خدمتكم' : 'Daily for your comfort'}
            </p>
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#D8B477] hover:underline flex items-center gap-1.5"
            >
              <MapPin size={13} />
              <span>{isAr ? 'عرض الموقع في الخرائط' : 'View on Google Maps'}</span>
            </a>
          </div>

          {/* Sanctuary Badge */}
          <div className="bg-[#211D1A] p-5 border border-[#D8B477]/15">
            <p className="text-xs font-serif text-[#D8B477] uppercase tracking-wider mb-2 font-medium">
              {BUSINESS_INFO.nameEn}
            </p>
            <p className="text-xs text-[#A69D92] leading-relaxed font-light">
              {t.footer.privacyNotice}
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A69D92]">
          <p>{t.footer.copyright}</p>
          <p className="font-mono text-[11px] text-[#A69D92]/70">
            Al Ain · United Arab Emirates
          </p>
        </div>

      </div>
    </footer>
  );
};
