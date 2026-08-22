import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { LogoMark } from './Logo';

interface StoryProps {
  lang: Language;
}

export const Story: React.FC<StoryProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="story" className="bg-[#211D1A] text-[#F3EEE6] py-20 sm:py-28 relative overflow-hidden">
      {/* Background Subtle Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8B477] font-semibold block mb-4">
              {t.story.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#F3EEE6] leading-[1.18] tracking-tight mb-8">
              {t.story.headingLine1}
              <br />
              <span className="text-[#D8B477] italic font-normal">
                {t.story.headingLine2}
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#F3EEE6]/90 font-light leading-relaxed mb-8 max-w-2xl">
              {t.story.description}
            </p>

            <div className="pt-6 border-t border-[#D8B477]/20 flex items-center gap-4 text-xs text-[#A69D92]">
              <LogoMark size={24} className="text-[#D8B477] opacity-80" />
              <span>{t.story.quoteNote}</span>
            </div>
          </div>

          {/* Large Architectural 1996 Milestone Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#171513] border border-[#D8B477]/25 p-8 sm:p-12 relative shadow-2xl">
              
              {/* Corner Accents */}
              <div className="absolute top-0 start-0 w-4 h-4 border-t-2 border-s-2 border-[#D8B477]" />
              <div className="absolute bottom-0 end-0 w-4 h-4 border-b-2 border-e-2 border-[#D8B477]" />

              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A69D92] mb-3">
                  {lang === 'ar' ? 'العين · تأسس عام' : 'Al Ain · Est.'}
                </span>

                <div className="text-6xl sm:text-7xl font-serif font-bold text-[#D8B477] tracking-tight mb-2">
                  {t.story.year}
                </div>

                <div className="w-12 h-px bg-[#D8B477]/40 mb-4" />

                <span className="text-sm font-serif uppercase tracking-[0.25em] text-[#F3EEE6] font-medium">
                  {t.story.yearLabel}
                </span>

                <p className="text-xs text-[#A69D92] mt-4 font-light leading-relaxed">
                  {lang === 'ar'
                    ? 'رحلة تمتد لأكثر من 30 عاماً من العناية المتفانية بجمال وثقة المرأة.'
                    : 'Over 30 years dedicated to personal grace, tranquility, and refined care.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
