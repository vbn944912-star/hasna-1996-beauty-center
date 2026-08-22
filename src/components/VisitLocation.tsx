import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/content';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Navigation, ExternalLink } from 'lucide-react';

interface VisitLocationProps {
  lang: Language;
}

export const VisitLocation: React.FC<VisitLocationProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isAr = lang === 'ar';

  return (
    <section id="location" className="bg-[#171513] text-[#F3EEE6] py-20 sm:py-28 relative overflow-hidden border-t border-[#D8B477]/15">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D8B477] font-semibold block mb-4">
            {t.location.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#F3EEE6] leading-[1.18] tracking-tight mb-6">
            {t.location.headingLine1}
            <br />
            <span className="text-[#D8B477] italic font-normal">
              {t.location.headingLine2}
            </span>
          </h2>
        </div>

        {/* 2-Column Luxury Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Information & Action Cards (Left Column) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Address & Navigation Card */}
            <div className="bg-[#211D1A] border border-[#D8B477]/20 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D8B477]/10 border border-[#D8B477]/30 text-[#D8B477] shrink-0">
                  <MapPin size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs uppercase tracking-widest text-[#D8B477] font-semibold mb-2">
                    {t.location.addressTitle}
                  </h3>
                  <p className="text-base sm:text-lg text-[#F3EEE6] font-medium leading-snug mb-1">
                    7P9V+P84 · {isAr ? 'القطارة · المراغة' : 'Al Qattarah · Al Mragha'}
                  </p>
                  <p className="text-sm text-[#A69D92] mb-6">
                    {isAr ? 'أبوظبي · دولة الإمارات العربية المتحدة' : 'Abu Dhabi · United Arab Emirates'}
                  </p>

                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 py-3 px-5 bg-[#D8B477] text-[#211D1A] font-semibold text-xs uppercase tracking-wider hover:bg-[#E5C791] active:translate-y-0.5 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477]"
                  >
                    <Navigation size={14} />
                    <span>{t.location.directionsBtn}</span>
                    <ExternalLink size={13} className="opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours & Direct Communication Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Visiting Hours Card */}
              <div className="bg-[#211D1A] border border-[#D8B477]/20 p-6">
                <div className="flex items-center gap-3 text-[#D8B477] mb-3">
                  <Clock size={20} />
                  <h3 className="text-xs uppercase tracking-widest font-semibold">
                    {t.location.hoursTitle}
                  </h3>
                </div>
                <div className="text-2xl font-serif font-medium text-[#F3EEE6] mb-1">
                  {t.location.hoursTime}
                </div>
                <p className="text-xs text-[#A69D92] tracking-wider uppercase">
                  {t.location.hoursSubtitle}
                </p>
              </div>

              {/* Instagram Card */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#211D1A] border border-[#D8B477]/20 hover:border-[#D8B477]/60 p-6 flex flex-col justify-between transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477]"
              >
                <div>
                  <div className="flex items-center justify-between text-[#D8B477] mb-3">
                    <div className="flex items-center gap-2">
                      <Instagram size={20} />
                      <span className="text-xs uppercase tracking-widest font-semibold">
                        {t.location.instagramTitle}
                      </span>
                    </div>
                    <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-lg font-mono text-[#F3EEE6] group-hover:text-[#D8B477] transition-colors">
                    @salonhasna1996
                  </div>
                </div>
                <p className="text-[11px] text-[#A69D92] mt-3">
                  {isAr ? 'تابعي أحدث أعمالنا وإطلالاتنا' : 'Follow our latest work & bridal looks'}
                </p>
              </a>
            </div>

            {/* Quick Contact Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+971523214984"
                className="flex items-center justify-center gap-3 py-3.5 px-4 bg-[#211D1A] border border-[#D8B477]/40 text-[#F3EEE6] hover:text-[#D8B477] hover:border-[#D8B477] transition-all text-xs font-semibold uppercase tracking-wider"
              >
                <Phone size={16} className="text-[#D8B477]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3.5 px-4 bg-[#203326] border border-[#3E6547] text-[#E3F4E7] hover:bg-[#284230] transition-all text-xs font-semibold uppercase tracking-wider"
              >
                <MessageSquare size={16} className="text-[#64C87F]" />
                <span>{t.location.chatBtn}</span>
              </a>
            </div>

          </div>

          {/* Stylized Architectural Map & Directions Guide (Right Column) */}
          <div className="lg:col-span-5 bg-[#211D1A] border border-[#D8B477]/25 flex flex-col justify-between p-6 sm:p-8 min-h-[380px] relative overflow-hidden shadow-2xl">
            
            {/* Ambient Map Visual Elements */}
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-[#D8B477]/15 pb-4">
                <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#D8B477]">
                  {isAr ? 'موقع المركز في العين' : 'Sanctuary Coordinates'}
                </span>
                <span className="text-[11px] font-mono text-[#A69D92]">
                  24.2693° N, 55.7433° E
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#171513] border border-[#D8B477]/15">
                  <p className="text-xs text-[#D8B477] uppercase tracking-wider mb-1">
                    {isAr ? 'الوصول السلس' : 'Effortless Arrival'}
                  </p>
                  <p className="text-xs text-[#A69D92] leading-relaxed">
                    {isAr
                      ? 'يقع المركز في منطقة القطارة الهادئة بالعين، مع مواقف سيارات مريحة وخصوصية تامة للسيدات.'
                      : 'Nestled in the serene Al Qattarah district of Al Ain, with convenient dedicated parking and complete privacy for ladies.'}
                  </p>
                </div>

                <div className="p-4 bg-[#171513] border border-[#D8B477]/15">
                  <p className="text-xs text-[#D8B477] uppercase tracking-wider mb-1">
                    {isAr ? 'الحجز المسبق' : 'Reservations'}
                  </p>
                  <p className="text-xs text-[#A69D92] leading-relaxed">
                    {isAr
                      ? 'نوصي بالحجز المسبق لضمان التفرغ الكامل لكِ وتخصيص الوقت المناسب لطقسكِ.'
                      : 'We recommend reserving in advance to ensure dedicated time and an unhurried, serene experience.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Google Maps Direct Launcher */}
            <div className="pt-6 mt-6 border-t border-[#D8B477]/15 relative z-10">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-transparent border border-[#D8B477] text-[#D8B477] hover:bg-[#D8B477] hover:text-[#211D1A] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Navigation size={15} />
                <span>{isAr ? 'فتح المسار في خرائط Google' : 'Open in Google Maps'}</span>
              </a>
            </div>

            {/* Subtle Aesthetic Accent Lines */}
            <div className="absolute -bottom-10 -end-10 w-32 h-32 rounded-full border border-[#D8B477]/10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
