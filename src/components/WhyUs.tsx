import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface WhyUsProps {
  lang: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isAr = lang === 'ar';

  const pillars = [
    {
      number: t.whyUs.pillar1Number,
      title: t.whyUs.pillar1Title,
      desc: t.whyUs.pillar1Desc,
    },
    {
      number: t.whyUs.pillar2Number,
      title: t.whyUs.pillar2Title,
      desc: t.whyUs.pillar2Desc,
    },
    {
      number: t.whyUs.pillar3Number,
      title: t.whyUs.pillar3Title,
      desc: t.whyUs.pillar3Desc,
    },
  ];

  return (
    <section id="why-us" className="bg-[#F3EEE6] text-[#171513] py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-24">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4B3527] font-semibold block mb-4">
              {lang === 'ar' ? 'فلسفة حسنا 1996' : 'Our Philosophy'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171513] leading-[1.2] tracking-tight font-medium">
              {t.whyUs.headingLine1}
              <br />
              <span className="text-[#4B3527] italic font-normal">
                {t.whyUs.headingLine2}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-base sm:text-lg text-[#171513]/85 leading-relaxed mb-6 font-light">
              {t.whyUs.description}
            </p>
            <a
              href="#story"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4B3527] hover:text-[#171513] group transition-colors pb-1 border-b border-[#4B3527]/40 hover:border-[#171513] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B3527]"
            >
              <span>{t.whyUs.storyLink}</span>
              {isAr ? (
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              )}
            </a>
          </div>
        </div>

        {/* 3 Open Pillars with Fine Hairline Divider Lines (Editorial, not SaaS cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:rtl:divide-x-reverse divide-[#171513]/15 border-t border-b border-[#171513]/15 py-8 md:py-12">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.number}
              className={`py-8 md:py-4 ${
                idx === 0
                  ? 'md:pe-10'
                  : idx === 1
                  ? 'md:px-10'
                  : 'md:ps-10'
              }`}
            >
              <div className="text-3xl sm:text-4xl font-serif text-[#4B3527]/40 mb-4 font-light">
                {pillar.number}
              </div>
              <h3 className="text-xl font-serif font-medium text-[#171513] mb-2 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#171513]/75 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
