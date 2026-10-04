/**
 * Sayt konfiqurasiyası
 * Mətn, link və şəkilləri buradan dəyişin.
 */
export const siteConfig = {
  // Səhifə başlığı və SEO
  site: {
    title: 'Emlakci.az — Daşınmaz Əmlak və İnvestisiya',
    description:
      'Emlakci.az — Daşınmaz əmlak və investisiya şirkəti. Türkiyə, Şimali Kipr, Dubay, Baku/Sea Breeze',
  },

  // Header: karusel, Instagram, logo
  header: {
    logo: '/assets/logo.png',
    logoAlt: 'Emlakci.az',
    logoLink: '/',
    instagram: 'https://www.instagram.com/shaigalieff/',
    carouselInterval: 3500, // ms
    carousel: [
      { name: 'Türkiyə', image: '/assets/carousel/turkiye.jpg' },
      { name: 'Şimali Kipr', image: '/assets/carousel/simali-kipr.jpg' },
      { name: 'Dubay', image: '/assets/carousel/dubay.jpg' },
      { name: 'Baku/Sea Breeze', image: '/assets/carousel/seabreeze.jpg' },
    ],
  },

  // Hero: banner mətni, WhatsApp, şəkil
  hero: {
    badge: 'Xidmətlərimiz',
    question: 'Əmlakınızı satırsız - icarəyə verirsiz?',
    subtitle: 'Bizə həvalə edin — peşəkar video çəkiliş (video-təqdimat).',
    phone: '+994 70 289 44 44',
    whatsappNumber: '994702894444', // yalnız rəqəmlər, + olmadan
    whatsappButtonText: 'WhatsApp ilə yazın',
    image: '/assets/hero-bg.png',
    imageAlt: 'Emlakci.az',
  },

  // Footer
  footer: {
    blinkText: 'Dizayn, Təmir / Tikinti',
    title: 'Siz evinizin Xəyalını qurun',
    subtitle: 'Biz sıfırdan tikək-təmir edək',
    backgroundImage: '/assets/footer-bg.jpg',
  },
}

/** WhatsApp linki avtomatik yaranır */
export function getWhatsAppUrl(number = siteConfig.hero.whatsappNumber) {
  return `https://wa.me/${number}`
}
