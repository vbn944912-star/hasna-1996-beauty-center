import React, { useState } from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface QuickFAQProps {
  lang: Language;
}

export const QuickFAQ: React.FC<QuickFAQProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default for immediate preview

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#171513] text-[#F3EEE6] py-16 sm:py-24 relative border-t border-[#D8B477]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D8B477]/25 bg-[#211D1A] text-xs uppercase tracking-[0.2em] text-[#D8B477] mb-3">
            <Sparkles size={12} />
            <span>{t.quickFaq.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#F3EEE6] leading-tight mb-4">
            {t.quickFaq.headingLine1}{' '}
            <span className="text-[#D8B477] italic font-normal">
              {t.quickFaq.headingLine2}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#A69D92] font-light">
            {t.quickFaq.description}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {t.quickFaq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-[#D8B477]/20 bg-[#211D1A] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-5 flex items-center justify-between text-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-serif font-medium text-[#F3EEE6] flex items-center gap-3">
                    <span className="text-[#D8B477] text-xs font-mono">0{idx + 1}.</span>
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#D8B477] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A69D92] leading-relaxed border-t border-[#D8B477]/10 animate-in fade-in duration-150">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
