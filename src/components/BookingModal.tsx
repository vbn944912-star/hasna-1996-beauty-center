import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { SERVICES_LIST, BUSINESS_INFO, ServiceItem, getWhatsAppLink } from '../data/content';
import { X, Calendar, Clock, MessageSquare, Phone, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedService,
}) => {
  const t = TRANSLATIONS[lang];
  const isAr = lang === 'ar';

  const [serviceId, setServiceId] = useState<string>(
    selectedService ? selectedService.id : SERVICES_LIST[0].id
  );
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<'morning' | 'afternoon' | 'evening'>('afternoon');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
    }
  }, [selectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceObj = SERVICES_LIST.find((s) => s.id === serviceId) || SERVICES_LIST[0];
    const serviceName = isAr ? serviceObj.nameAr : serviceObj.nameEn;
    const timeSlotName =
      preferredTime === 'morning'
        ? t.bookingModal.morning
        : preferredTime === 'afternoon'
        ? t.bookingModal.afternoon
        : t.bookingModal.evening;

    const message = isAr
      ? `مرحباً، أود حجز موعد في مركز حسنا 1996:\n` +
        `• الخدمة المطلوبة: ${serviceName}\n` +
        (preferredDate ? `• التاريخ المفضل: ${preferredDate}\n` : '') +
        `• الفترة الزمنية: ${timeSlotName}\n` +
        (notes.trim() ? `• ملاحظات: ${notes.trim()}\n` : '') +
        `\nشكراً لكم!`
      : `Hello, I would like to arrange an appointment at Hasna 1996 Beauty Center:\n` +
        `• Desired Service: ${serviceName}\n` +
        (preferredDate ? `• Preferred Date: ${preferredDate}\n` : '') +
        `• Preferred Time: ${timeSlotName}\n` +
        (notes.trim() ? `• Notes: ${notes.trim()}\n` : '') +
        `\nThank you!`;

    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171513]/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-booking-title"
    >
      <div
        className="bg-[#211D1A] border border-[#D8B477]/30 text-[#F3EEE6] w-full max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 end-5 p-2 text-[#A69D92] hover:text-[#D8B477] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B477]"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pe-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B477] font-semibold mb-2">
            <Sparkles size={13} />
            <span>{BUSINESS_INFO.shortName}</span>
          </div>
          <h3
            id="modal-booking-title"
            className="text-2xl sm:text-3xl font-serif font-medium text-[#F3EEE6] leading-tight"
          >
            {t.bookingModal.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#A69D92] mt-2 font-light leading-relaxed">
            {t.bookingModal.subtitle}
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service Selector */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#D8B477] font-medium mb-2">
              {t.bookingModal.selectService}
            </label>
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className="w-full bg-[#171513] border border-[#D8B477]/30 text-[#F3EEE6] py-3 px-4 text-sm focus:border-[#D8B477] focus:outline-none"
            >
              {SERVICES_LIST.map((srv) => (
                <option key={srv.id} value={srv.id} className="bg-[#171513] text-[#F3EEE6]">
                  {srv.number} — {isAr ? srv.nameAr : srv.nameEn} ({isAr ? srv.nameEn : srv.nameAr})
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#D8B477] font-medium mb-2">
              {t.bookingModal.selectDate}
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-[#171513] border border-[#D8B477]/30 text-[#F3EEE6] py-3 px-4 text-sm focus:border-[#D8B477] focus:outline-none"
            />
          </div>

          {/* Preferred Time Slot */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#D8B477] font-medium mb-2">
              {t.bookingModal.selectTime}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['morning', 'afternoon', 'evening'] as const).map((slot) => {
                const label =
                  slot === 'morning'
                    ? isAr ? 'صباحاً' : 'Morning'
                    : slot === 'afternoon'
                    ? isAr ? 'عصراً' : 'Afternoon'
                    : isAr ? 'مساءً' : 'Evening';

                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setPreferredTime(slot)}
                    className={`py-2.5 px-2 text-xs font-medium border text-center transition-all ${
                      preferredTime === slot
                        ? 'bg-[#D8B477] text-[#211D1A] border-[#D8B477] font-semibold'
                        : 'bg-[#171513] text-[#F3EEE6]/80 border-[#D8B477]/20 hover:border-[#D8B477]/50'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#D8B477] font-medium mb-2">
              {t.bookingModal.notes}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.bookingModal.notesPlaceholder}
              className="w-full bg-[#171513] border border-[#D8B477]/30 text-[#F3EEE6] py-2.5 px-4 text-sm focus:border-[#D8B477] focus:outline-none placeholder:text-[#A69D92]/50 resize-none"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-4 px-6 bg-[#D8B477] text-[#211D1A] font-semibold text-xs uppercase tracking-wider hover:bg-[#E5C791] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare size={16} />
              <span>{t.bookingModal.submitBtn}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="py-3 px-5 border border-[#D8B477]/30 text-[#A69D92] hover:text-[#F3EEE6] text-xs uppercase tracking-wider"
            >
              {t.bookingModal.cancelBtn}
            </button>
          </div>
        </form>

        {/* Direct Call Shortcut */}
        <div className="mt-6 pt-4 border-t border-[#D8B477]/15 flex items-center justify-between text-xs text-[#A69D92]">
          <span>{isAr ? 'أو تواصلي هاتفياً مباشرة:' : 'Or call directly:'}</span>
          <a
            href="tel:+971523214984"
            className="text-[#D8B477] hover:underline font-mono font-medium flex items-center gap-1.5"
          >
            <Phone size={13} />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
