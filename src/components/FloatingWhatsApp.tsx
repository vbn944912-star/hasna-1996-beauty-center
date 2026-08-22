import React, { useState } from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { getWhatsAppLink } from '../data/content';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const t = TRANSLATIONS[lang];
  const isAr = lang === 'ar';

  return (
    <div
      className={`fixed bottom-6 ${
        isAr ? 'left-6' : 'right-6'
      } z-40 flex items-center gap-3`}
    >
      {/* Quiet Luxury Hover Tooltip */}
      {showTooltip && (
        <div
          className="hidden sm:block bg-[#171513] text-[#F3EEE6] border border-[#D8B477]/40 py-1.5 px-3.5 text-xs rounded shadow-lg whitespace-nowrap animate-in fade-in zoom-in-95 duration-150"
          role="tooltip"
        >
          {t.floatingWhatsApp.tooltip}
        </div>
      )}

      {/* Floating Quiet-Luxury WhatsApp Button (Deep Forest Green + Gold Rim) */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#1C3A27] text-[#E8F8ED] border-2 border-[#D8B477]/80 shadow-2xl hover:bg-[#254C34] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D8B477]"
        aria-label={t.floatingWhatsApp.ariaLabel}
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#254C34]/40 animate-ping pointer-events-none opacity-60" />

        <MessageCircle size={26} className="relative z-10 text-[#71DB92] group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};
