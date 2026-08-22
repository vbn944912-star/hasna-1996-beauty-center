import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/content';
import { Phone, MessageSquare, MapPin, Sparkles } from 'lucide-react';

interface QuickMobileBarProps {
  lang: Language;
  onOpenBookingModal: () => void;
}

export const QuickMobileBar: React.FC<QuickMobileBarProps> = ({
  lang,
  onOpenBookingModal,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#171513]/95 backdrop-blur-lg border-t border-[#D8B477]/30 px-3 py-2 pb-safe"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* 1. Direct Call */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-[#211D1A] border border-[#D8B477]/20 text-[#F3EEE6] active:bg-[#D8B477] active:text-[#211D1A] transition-colors"
          aria-label={t.quickBar.call}
        >
          <Phone size={17} className="text-[#D8B477] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight whitespace-nowrap">
            {t.quickBar.call}
          </span>
        </a>

        {/* 2. Direct WhatsApp */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-[#211D1A] border border-[#25D366]/40 text-[#F3EEE6] active:bg-[#25D366] active:text-[#171513] transition-colors"
          aria-label={t.quickBar.whatsapp}
        >
          <MessageSquare size={17} className="text-[#25D366] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight whitespace-nowrap">
            {t.quickBar.whatsapp}
          </span>
        </a>

        {/* 3. Directions */}
        <a
          href={BUSINESS_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-[#211D1A] border border-[#D8B477]/20 text-[#F3EEE6] active:bg-[#D8B477] active:text-[#211D1A] transition-colors"
          aria-label={t.quickBar.directions}
        >
          <MapPin size={17} className="text-[#D8B477] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight whitespace-nowrap">
            {t.quickBar.directions}
          </span>
        </a>

        {/* 4. Instant Fast Book Modal */}
        <button
          type="button"
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-[#D8B477] text-[#211D1A] font-semibold active:bg-[#E5C791] transition-all shadow-sm"
          aria-label={t.quickBar.quickBook}
        >
          <Sparkles size={17} className="text-[#211D1A] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight whitespace-nowrap">
            {t.quickBar.quickBook}
          </span>
        </button>
      </div>
    </div>
  );
};
