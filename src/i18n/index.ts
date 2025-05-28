import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import arTranslation from './locales/ar.json';

// Default language from localStorage or browser preference
const getDefaultLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) return savedLanguage;
  
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'fr', 'ar'].includes(browserLang)) return browserLang;
  
  return 'en'; // Default fallback
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      ar: { translation: arTranslation }
    },
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  });

export default i18n;