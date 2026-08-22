import React, { useState, useEffect } from 'react';
import { Language } from './data/translations';
import { ServiceItem } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { HammamExperience } from './components/HammamExperience';
import { HennaSection } from './components/HennaSection';
import { ReviewSummary } from './components/ReviewSummary';
import { QuickFAQ } from './components/QuickFAQ';
import { Story } from './components/Story';
import { VisitLocation } from './components/VisitLocation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickMobileBar } from './components/QuickMobileBar';
import { BookingModal } from './components/BookingModal';
import { ToastProvider } from './components/Toast';

export default function App() {
  // Arabic default, saved in localStorage
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hasna_lang');
      if (saved === 'ar' || saved === 'en') return saved;
    }
    return 'ar';
  });

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Sync html attributes on language change
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('hasna_lang', lang);
    } catch (e) {
      // ignore storage errors
    }
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <ToastProvider>
      <div className={`min-h-screen bg-[#211D1A] text-[#F3EEE6] selection:bg-[#D8B477] selection:text-[#211D1A] pb-14 md:pb-0 ${lang === 'ar' ? 'font-body-ar' : 'font-body-en'}`}>
        {/* 1. Header / Navbar */}
        <Navbar
          lang={lang}
          onToggleLang={handleToggleLang}
          onOpenBookingModal={() => handleOpenBooking()}
        />

        {/* Main Content Sections */}
        <main id="main-content">
          {/* 2. Hero Section */}
          <Hero
            lang={lang}
            onOpenBookingModal={() => handleOpenBooking()}
          />

          {/* 3. Why Hasna 1996? */}
          <WhyUs lang={lang} />

          {/* 4. Services Section (with instant live search & category filters) */}
          <Services
            lang={lang}
            onSelectServiceForBooking={handleOpenBooking}
          />

          {/* 5. Signature Moroccan Hammam */}
          <HammamExperience lang={lang} />

          {/* 6. Henna Artistry */}
          <HennaSection lang={lang} />

          {/* 7. Verified Reviews / Rating Strip */}
          <ReviewSummary lang={lang} />

          {/* 8. Quick FAQ & Essential Info */}
          <QuickFAQ lang={lang} />

          {/* 9. Story Section */}
          <Story lang={lang} />

          {/* 10. Location & Visiting Hours */}
          <VisitLocation lang={lang} />
        </main>

        {/* 11. Footer */}
        <Footer lang={lang} />

        {/* 12. Desktop Floating WhatsApp Button (hidden on mobile to avoid clutter with QuickMobileBar) */}
        <div className="hidden md:block">
          <FloatingWhatsApp lang={lang} />
        </div>

        {/* 13. Mobile Speed Action Dock (Fixed at bottom on phones) */}
        <QuickMobileBar
          lang={lang}
          onOpenBookingModal={() => handleOpenBooking()}
        />

        {/* 14. Interactive Speed Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          lang={lang}
          selectedService={selectedService}
        />
      </div>
    </ToastProvider>
  );
}
