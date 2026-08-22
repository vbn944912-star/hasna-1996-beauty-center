import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { IMAGES, getWhatsAppLink } from '../data/content';
import { OptimizedImage } from './OptimizedImage';
import { Star, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBookingModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBookingModal }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center bg-[#211D1A] overflow-hidden pt-24 pb-16">
      {/* Background Image with Dark Contrast Gradient Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <OptimizedImage
          image={IMAGES.hero}
          priority={true}
          className="w-full h-full"
          imgClassName="scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        {/* Layered Multi-Stop Dark Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-[#211D1A]/75 backdrop-contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A] via-[#211D1A]/60 to-[#211D1A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211D1A]/90 via-[#211D1A]/70 to-transparent" />
        {/* Subtle Warm Light Grain Overlay */}
        <div className="absolute inset-0 bg-noise opacity-40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-16">
        <div className="max-w-3xl">
          {/* Subtitle / Location Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D8B477]/30 bg-[#211D1A]/60 backdrop-blur-sm mb-6 text-xs uppercase tracking-[0.2em] text-[#D8B477]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B477] animate-pulse" />
            <span>{t.hero.locationTag}</span>
          </div>

          {/* Editorial Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F3EEE6] leading-[1.12] tracking-tight mb-6 whitespace-pre-line drop-shadow-sm font-medium">
            {t.hero.headingLine1}
            <br />
            <span className="text-[#D8B477] italic font-normal">
              {t.hero.headingLine2}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#F3EEE6]/90 font-light leading-relaxed max-w-2xl mb-10">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14 sm:mb-16">
            <button
              type="button"
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 py-4 px-8 bg-[#D8B477] text-[#211D1A] font-semibold text-sm uppercase tracking-wider hover:bg-[#E5C791] active:translate-y-0.5 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477] text-center"
            >
              <span>{t.hero.ctaPrimary}</span>
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 py-4 px-7 border border-[#F3EEE6]/30 text-[#F3EEE6] hover:border-[#D8B477] hover:text-[#D8B477] text-sm font-medium tracking-wide active:translate-y-0.5 transition-all bg-[#211D1A]/30 backdrop-blur-xs text-center"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Verified Stats & Heritage Badge (Strictly adhering to prompt data) */}
          <div className="pt-8 border-t border-[#D8B477]/20 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            {/* Rating Stat */}
            <div className="flex items-center gap-4">
              <div className="text-3xl font-serif font-bold text-[#D8B477] tracking-tight">
                {t.hero.ratingScore}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#D8B477] mb-1" aria-label="5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D8B477" className="text-[#D8B477]" />
                  ))}
                </div>
                <div className="text-xs text-[#A69D92] leading-tight">
                  {t.hero.reviewsCount}
                </div>
              </div>
            </div>

            {/* Heritage Stat */}
            <div className="flex items-center gap-4 sm:border-s sm:border-[#D8B477]/20 sm:ps-6">
              <div className="text-3xl font-serif font-bold text-[#D8B477] tracking-tight">
                1996
              </div>
              <div>
                <div className="text-xs font-semibold text-[#F3EEE6] uppercase tracking-wider mb-0.5">
                  {lang === 'ar' ? 'ثلاثة عقود من العناية' : 'Three Decades'}
                </div>
                <div className="text-xs text-[#A69D92] leading-tight">
                  {t.hero.heritageYears}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Subtle Scroll Indicator */}
      <a
        href="#why-us"
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#A69D92] hover:text-[#D8B477] transition-colors group focus-visible:outline-none"
        aria-label="Scroll to learn more"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          {t.hero.scrollPrompt}
        </span>
        <ChevronDown size={18} className="animate-bounce text-[#D8B477]" />
      </a>
    </section>
  );
};
