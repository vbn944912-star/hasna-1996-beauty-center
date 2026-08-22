import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { Star, ShieldCheck } from 'lucide-react';

interface ReviewSummaryProps {
  lang: Language;
}

export const ReviewSummary: React.FC<ReviewSummaryProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="bg-[#171513] text-[#F3EEE6] py-16 sm:py-24 border-t border-b border-[#D8B477]/15 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Verified Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D8B477]/30 bg-[#211D1A] text-xs uppercase tracking-[0.2em] text-[#D8B477] mb-8">
          <ShieldCheck size={14} className="text-[#D8B477]" />
          <span>{t.reviews.badge}</span>
        </div>

        {/* Large Metric & Stars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="text-5xl sm:text-6xl md:text-7xl font-serif font-semibold text-[#D8B477] tracking-tight">
            {t.reviews.score}
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
            <div className="flex items-center gap-1.5 text-[#D8B477] mb-1.5" aria-label="Rating 4.8 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#D8B477" className="text-[#D8B477]" />
              ))}
            </div>
            <p className="text-xs uppercase tracking-widest text-[#A69D92] font-medium">
              {t.reviews.countLabel}
            </p>
          </div>
        </div>

        {/* Verified Source Summary Quote */}
        <div className="max-w-2xl mx-auto">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-serif font-normal text-[#F3EEE6] leading-relaxed italic mb-4">
            "{t.reviews.quote}"
          </blockquote>
          <cite className="block text-xs uppercase tracking-[0.2em] text-[#D8B477] font-sans not-italic">
            {t.reviews.source}
          </cite>
        </div>
      </div>
    </section>
  );
};
