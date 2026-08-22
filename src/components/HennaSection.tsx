import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { IMAGES, getServiceWhatsAppLink } from '../data/content';
import { OptimizedImage } from './OptimizedImage';
import { LogoMark } from './Logo';
import { ArrowUpRight } from 'lucide-react';

interface HennaSectionProps {
  lang: Language;
}

export const HennaSection: React.FC<HennaSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const handleInquireHenna = () => {
    const url = getServiceWhatsAppLink(
      "تصاميم ونقوش الحناء",
      "Henna Artistry & Bridal Motifs",
      lang
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-[#211D1A] text-[#F3EEE6] py-20 sm:py-28 relative overflow-hidden border-t border-[#D8B477]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Column (Left in LTR / Right in RTL) */}
          <div className="lg:col-span-6">
            {/* Category Tag */}
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8B477] font-semibold block mb-4">
              {t.henna.badge}
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#F3EEE6] leading-[1.18] tracking-tight mb-6">
              {t.henna.headingLine1}
              <br />
              <span className="text-[#D8B477] italic font-normal">
                {t.henna.headingLine2}
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#F3EEE6]/85 font-light leading-relaxed mb-8">
              {t.henna.description}
            </p>

            {/* Ritual Highlights */}
            <div className="space-y-3.5 mb-10 border-s-2 border-[#D8B477]/30 ps-4">
              {t.henna.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-[#A69D92]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8B477]" />
                  <span className="text-[#F3EEE6]/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={handleInquireHenna}
                className="inline-flex items-center justify-center gap-3 py-4 px-8 border border-[#D8B477] text-[#D8B477] hover:bg-[#D8B477] hover:text-[#211D1A] font-semibold text-sm uppercase tracking-wider active:translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477]"
              >
                <span>{t.henna.cta}</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Visual Column with Hasna 1996 Luxury Seal */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <OptimizedImage
                image={IMAGES.henna}
                className="w-full h-[460px] sm:h-[540px]"
                imgClassName="transform hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle Geometric Background Frame */}
            <div className="absolute -top-4 -start-4 w-full h-full border border-[#D8B477]/25 pointer-events-none hidden sm:block -z-0" />

            {/* Hasna 1996 Architectural Seal Stamp */}
            <div className="absolute top-6 end-6 z-20 w-24 h-24 rounded-full border border-[#D8B477]/60 bg-[#211D1A]/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-2 shadow-xl">
              <LogoMark size={22} className="mb-1" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D8B477] font-semibold leading-tight">
                HASNA
              </span>
              <span className="text-[8px] tracking-[0.25em] text-[#F3EEE6]/80 font-mono">
                1996
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
