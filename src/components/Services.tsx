import React, { useState, useMemo } from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { SERVICES_LIST, getServiceWhatsAppLink, ServiceItem } from '../data/content';
import { ArrowUpRight, Sparkles, Search, X, Filter } from 'lucide-react';

interface ServicesProps {
  lang: Language;
  onSelectServiceForBooking?: (service: ServiceItem) => void;
}

type FilterCategory = 'all' | 'hair' | 'hammam' | 'skin' | 'nails' | 'hennaMakeup' | 'bridal';

export const Services: React.FC<ServicesProps> = ({
  lang,
  onSelectServiceForBooking,
}) => {
  const t = TRANSLATIONS[lang];
  const isAr = lang === 'ar';

  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: t.filters.all },
    { id: 'hair', label: t.filters.hair },
    { id: 'hammam', label: t.filters.hammam },
    { id: 'skin', label: t.filters.skin },
    { id: 'nails', label: t.filters.nails },
    { id: 'hennaMakeup', label: t.filters.hennaMakeup },
    { id: 'bridal', label: t.filters.bridal },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      // Category match
      const matchCategory =
        activeCategory === 'all' || service.categoryTag === activeCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchCategory;

      const matchText =
        service.nameAr.toLowerCase().includes(query) ||
        service.nameEn.toLowerCase().includes(query) ||
        service.descAr.toLowerCase().includes(query) ||
        service.descEn.toLowerCase().includes(query) ||
        service.categoryAr.toLowerCase().includes(query) ||
        service.categoryEn.toLowerCase().includes(query);

      return matchCategory && matchText;
    });
  }, [activeCategory, searchQuery]);

  const handleBookService = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(service);
    } else {
      const url = getServiceWhatsAppLink(service.nameAr, service.nameEn, lang);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="services" className="bg-[#211D1A] text-[#F3EEE6] py-20 sm:py-28 relative">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D8B477]/25 bg-[#211D1A] text-xs uppercase tracking-[0.2em] text-[#D8B477] mb-4">
            <Sparkles size={12} className="text-[#D8B477]" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#F3EEE6] leading-[1.18] tracking-tight mb-6">
            {t.services.headingLine1}
            <br />
            <span className="text-[#D8B477] italic font-normal">
              {t.services.headingLine2}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A69D92] leading-relaxed font-light">
            {t.services.description}
          </p>
        </div>

        {/* Speed Controls: Fast Category Filter & Instant Live Search */}
        <div className="mb-10 space-y-4">
          {/* Live Search Bar */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-[#D8B477]">
              <Search size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.filters.searchPlaceholder}
              className="w-full bg-[#171513] border border-[#D8B477]/30 text-[#F3EEE6] text-xs sm:text-sm ps-10 pe-9 py-3 focus:outline-none focus:border-[#D8B477] placeholder:text-[#A69D92]/60 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 end-0 pe-3 flex items-center text-[#A69D92] hover:text-[#D8B477]"
                aria-label={t.filters.clearSearch}
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Fast Category Filter Chips (Single row scrollable for instant access) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`py-2 px-3.5 text-xs font-medium whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-[#D8B477] text-[#211D1A] border-[#D8B477] font-semibold shadow-sm'
                      : 'bg-[#171513] text-[#A69D92] border-[#D8B477]/20 hover:text-[#F3EEE6] hover:border-[#D8B477]/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Results count indicator */}
          <div className="flex items-center justify-between text-xs text-[#A69D92] pt-1">
            <span>
              {filteredServices.length} {t.filters.resultsCount}
            </span>
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="text-[#D8B477] hover:underline text-xs"
              >
                {isAr ? 'عرض الكل' : 'Reset filters'}
              </button>
            )}
          </div>
        </div>

        {/* Large Editorial Services List */}
        {filteredServices.length > 0 ? (
          <div className="divide-y divide-[#D8B477]/15 border-t border-b border-[#D8B477]/15" role="list">
            {filteredServices.map((service, index) => {
              const serviceName = isAr ? service.nameAr : service.nameEn;
              const subName = isAr ? service.nameEn : service.nameAr;
              const category = isAr ? service.categoryAr : service.categoryEn;
              const desc = isAr ? service.descAr : service.descEn;

              return (
                <div
                  key={service.id}
                  onClick={() => {
                    const url = getServiceWhatsAppLink(service.nameAr, service.nameEn, lang);
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                  className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 cursor-pointer transition-all duration-150 hover:bg-[#D8B477]/5 px-3 sm:px-6 -mx-3 sm:-mx-6 rounded-none relative focus-within:ring-2 focus-within:ring-[#D8B477]"
                  role="listitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      const url = getServiceWhatsAppLink(service.nameAr, service.nameEn, lang);
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  {/* Left Side: Number & Name */}
                  <div className="flex items-start sm:items-center gap-5 sm:gap-8 flex-1">
                    <span className="font-serif text-lg sm:text-2xl text-[#D8B477]/50 group-hover:text-[#D8B477] font-light min-w-[30px]">
                      {service.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-2.5 mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-serif text-[#F3EEE6] group-hover:text-[#D8B477] transition-colors font-medium">
                          {serviceName}
                        </h3>
                        <span className="text-xs uppercase tracking-wider text-[#A69D92] font-normal">
                          — {subName}
                        </span>
                        {service.popular && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#D8B477]/15 text-[#D8B477] border border-[#D8B477]/30">
                            {isAr ? 'الأكثر طلباً' : 'Signature'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#A69D92] font-light max-w-2xl">
                        {desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Category & WhatsApp Booking CTA */}
                  <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 mt-1 md:mt-0 ps-12 sm:ps-16 md:ps-0">
                    <span className="text-xs font-mono tracking-widest text-[#D8B477]/80 uppercase hidden lg:block">
                      [{category}]
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleBookService(service, e)}
                      className="inline-flex items-center gap-2 py-2 px-4 rounded-none bg-transparent border border-[#D8B477]/40 text-[#F3EEE6] group-hover:bg-[#D8B477] group-hover:text-[#211D1A] group-hover:border-[#D8B477] transition-all text-xs font-medium uppercase tracking-wider whitespace-nowrap active:translate-y-0.5"
                      aria-label={`Book ${serviceName} on WhatsApp`}
                    >
                      <span>{t.services.bookViaWhatsApp}</span>
                      <ArrowUpRight size={14} className="text-[#D8B477] group-hover:text-[#211D1A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center border border-[#D8B477]/20 bg-[#171513] p-8">
            <p className="text-[#A69D92] text-sm mb-4">{t.filters.noResults}</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="py-2.5 px-5 bg-[#D8B477] text-[#211D1A] font-semibold text-xs uppercase tracking-wider"
            >
              {t.filters.clearSearch}
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-10 text-center text-xs text-[#A69D92] tracking-wide">
          <span>{t.services.allServicesNotice}</span>
        </div>
      </div>
    </section>
  );
};
