import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { IMAGES, getServiceWhatsAppLink } from '../data/content';
import { Sparkles, Check, ArrowUpRight } from 'lucide-react';

interface HammamExperienceProps {
  lang: Language;
}

export const HammamExperience: React.FC<HammamExperienceProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const handleBookHammam = () => {
    const url = getServiceWhatsAppLink(
      "الحمام المغربي الملكي",
      "Royal Moroccan Hammam Ritual",
      lang
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="experience" className="bg-[#171513] text-[#F3EEE6] py-20 sm:py-28 relative overflow-hidden border-t border-[#D8B477]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (Tall Image with Subtle Gold Frame Accent) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img
                src={IMAGES.hammam}
                alt="Hasna 1996 Moroccan Hammam Sanctuary"
                className="w-full h-[460px] sm:h-[560px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/80 via-transparent to-transparent" />
            </div>

            {/* Geometric Accent Line */}
            <div className="absolute -bottom-4 -end-4 w-full h-full border border-[#D8B477]/25 pointer-events-none hidden sm:block -z-0" />

            {/* Floating Luxury Tag */}
            <div className="absolute bottom-6 start-6 z-20 bg-[#211D1A]/90 backdrop-blur-md border border-[#D8B477]/30 py-2.5 px-4 max-w-xs">
              <p className="text-xs font-serif text-[#D8B477] tracking-wider">
                {lang === 'ar' ? 'طقس الاسترخاء والتجديد' : 'Serenity & Renewal Ritual'}
              </p>
              <p className="text-[11px] text-[#A69D92] mt-0.5">
                {lang === 'ar' ? 'خصوصية تامة بأيدي خبيرات' : 'Private sanctuary with seasoned masters'}
              </p>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            {/* Beloved Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8B477]/15 border border-[#D8B477]/30 text-[#D8B477] text-xs uppercase tracking-widest font-medium mb-6">
              <span>{t.hammam.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#F3EEE6] leading-[1.18] tracking-tight mb-6">
              {t.hammam.headingLine1}
              <br />
              <span className="text-[#D8B477] italic font-normal">
                {t.hammam.headingLine2}
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#F3EEE6]/85 font-light leading-relaxed mb-8">
              {t.hammam.description}
            </p>

            {/* Key Ritual Highlights */}
            <div className="space-y-3.5 mb-10 border-s-2 border-[#D8B477]/30 ps-4">
              {t.hammam.features.map((feature, idx) => (
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
                onClick={handleBookHammam}
                className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-[#D8B477] text-[#211D1A] font-semibold text-sm uppercase tracking-wider hover:bg-[#E5C791] active:translate-y-0.5 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477]"
              >
                <span>{t.hammam.cta}</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
