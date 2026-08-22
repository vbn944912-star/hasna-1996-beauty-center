// High-performance direct ES imports for Vite asset pipeline
import heroWebp from '../assets/images/hero_salon_interior_1787400125313.webp';
import heroMobileWebp from '../assets/images/hero_salon_interior_1787400125313_mobile.webp';
import heroJpg from '../assets/images/hero_salon_interior_1787400125313.jpg';

import hammamWebp from '../assets/images/moroccan_hammam_ritual_1787400140444.webp';
import hammamMobileWebp from '../assets/images/moroccan_hammam_ritual_1787400140444_mobile.webp';
import hammamJpg from '../assets/images/moroccan_hammam_ritual_1787400140444.jpg';

import hennaWebp from '../assets/images/henna_art_luxury_1787400157639.webp';
import hennaMobileWebp from '../assets/images/henna_art_luxury_1787400157639_mobile.webp';
import hennaJpg from '../assets/images/henna_art_luxury_1787400157639.jpg';

import placeholders from '../assets/images/placeholders.json';

export interface ServiceItem {
  id: string;
  number: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  duration?: string;
  popular?: boolean;
}

export const BUSINESS_INFO = {
  nameEn: "Hasna 1996 Ladies Beauty Center",
  nameAr: "مركز حسنا 1996 لتجميل السيدات",
  shortName: "HASNA 1996",
  cityEn: "Al Ain, United Arab Emirates",
  cityAr: "العين · الإمارات العربية المتحدة",
  addressEn: "7P9V+P84 - Al Qattarah - Al Mragha - Abu Dhabi - United Arab Emirates",
  addressAr: "7P9V+P84 · القطارة · المراغة · أبوظبي · الإمارات العربية المتحدة",
  phoneDisplay: "+971 52 321 4984",
  phoneRaw: "+971523214984",
  instagramUrl: "https://instagram.com/salonhasna1996",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=24.2693125,55.7433125",
  rating: 4.8,
  reviewCount: 38,
  reviewPlatform: "PRO Makeup",
  openingHoursEn: "10:00 AM – 10:00 PM Daily",
  openingHoursAr: "10:00 — 22:00 يوميًا",
  establishedYear: 1996,
};

export const IMAGES = {
  hero: {
    src: heroWebp,
    mobileSrc: heroMobileWebp,
    fallback: heroJpg,
    placeholder: placeholders.hero_salon_interior_1787400125313,
    alt: "Hasna 1996 Boutique Beauty Salon Interior",
  },
  hammam: {
    src: hammamWebp,
    mobileSrc: hammamMobileWebp,
    fallback: hammamJpg,
    placeholder: placeholders.moroccan_hammam_ritual_1787400140444,
    alt: "Hasna 1996 Moroccan Hammam Sanctuary Ritual",
  },
  henna: {
    src: hennaWebp,
    mobileSrc: hennaMobileWebp,
    fallback: hennaJpg,
    placeholder: placeholders.henna_art_luxury_1787400157639,
    alt: "Hasna 1996 Intricate Henna Artistry",
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "hair-styling",
    number: "01",
    nameAr: "تصفيف وقص الشعر",
    nameEn: "Hair styling & cuts",
    categoryAr: "العناية بالشعر",
    categoryEn: "Hair Care",
    descAr: "قصات عصرية واستشارات دقيقة تلائم ملامحكِ وتبرز كثافة وحيوية شعركِ.",
    descEn: "Modern precision cuts and styling consultations tailored to your features and natural hair vitality.",
    popular: true,
  },
  {
    id: "hair-color",
    number: "02",
    nameAr: "صبغات وتسريحات",
    nameEn: "Color & styling",
    categoryAr: "الشعر والمناسبات",
    categoryEn: "Color & Updos",
    descAr: "تدرجات لونية راقية بأجود المستحضرات العالمية مع تسريحات خاصة للمناسبات.",
    descEn: "Refined color palettes using premium gentle products, paired with bespoke event styling.",
  },
  {
    id: "moroccan-hammam",
    number: "03",
    nameAr: "الحمام المغربي",
    nameEn: "Moroccan hammam",
    categoryAr: "طقوس الاسترخاء",
    categoryEn: "Signature Rituals",
    descAr: "طقس أصيل بالصابون المغربي والأعشاب الطبيعية والبخار لاستعادة نضارة بشرتكِ واسترخائكِ.",
    descEn: "An authentic ritual with Moroccan black soap, natural herbs, and steam to restore your skin and serenity.",
    popular: true,
  },
  {
    id: "skin-rituals",
    number: "04",
    nameAr: "العناية بالبشرة",
    nameEn: "Skin rituals",
    categoryAr: "نضارة وإشراق",
    categoryEn: "Facial Care",
    descAr: "جلسات تنظيف وترطيب عميق مصممة خصيصًا لاحتياجات بشرتكِ بمنتجات نقية ومغذية.",
    descEn: "Deep cleansing and nourishing hydration sessions curated specifically for your skin's unique needs.",
  },
  {
    id: "manicure-pedicure",
    number: "05",
    nameAr: "مانيكير وباديكير",
    nameEn: "Manicure & pedicure",
    categoryAr: "الأظافر واليدين",
    categoryEn: "Nail Care",
    descAr: "عناية متكاملة لليدين والقدمين، مع تقشير لطيف وترطيب وألوان طلاء كلاسيكية ومعاصرة.",
    descEn: "Complete hand and foot grooming with gentle exfoliation, deep moisture, and timeless polish shades.",
  },
  {
    id: "henna-artistry",
    number: "06",
    nameAr: "فن الحناء",
    nameEn: "Henna artistry",
    categoryAr: "الفن التراثي",
    categoryEn: "Traditional Art",
    descAr: "نقوش حناء استثنائية تمزج بين الأصالة الإماراتية والخطوط الهندسية الناعمة.",
    descEn: "Exquisite henna adornments blending authentic Emirati heritage with delicate contemporary geometry.",
    popular: true,
  },
  {
    id: "makeup-artistry",
    number: "07",
    nameAr: "المكياج",
    nameEn: "Makeup artistry",
    categoryAr: "الإطلالات الفاخرة",
    categoryEn: "Luxury Beauty",
    descAr: "مكياج يبرز جمالكِ الطبيعي بأسلوب راقٍ يدوم طوال مناسبتكِ بتفاصيل متقنة.",
    descEn: "Elevated makeup that accentuates your natural beauty with an enduring, polished finish.",
  },
  {
    id: "bridal-preparation",
    number: "08",
    nameAr: "تجهيز العرائس",
    nameEn: "Bridal preparation",
    categoryAr: "اليوم الكبير",
    categoryEn: "Bridal Suite",
    descAr: "باقة عناية وتجهيز ملكية شاملة للعروس لتتألقي بثقة وهدوء في ليلتكِ الاستثنائية.",
    descEn: "A comprehensive royal bridal suite package designed for serene confidence on your momentous day.",
    popular: true,
  },
];

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg = "مرحباً، أرغب في حجز موعد في مركز حسنا 1996";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/971523214984?text=${text}`;
};

export const getServiceWhatsAppLink = (serviceNameAr: string, serviceNameEn: string, lang: 'ar' | 'en') => {
  const message = lang === 'ar'
    ? `مرحباً، أود الاستفسار والحجز لخدمة (${serviceNameAr}) في مركز حسنا 1996.`
    : `Hello, I would like to inquire and book an appointment for (${serviceNameEn}) at Hasna 1996 Beauty Center.`;
  return getWhatsAppLink(message);
};
