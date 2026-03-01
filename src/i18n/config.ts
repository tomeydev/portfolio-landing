import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esLocale from '../locales/es.json';
import enLocale from '../locales/en.json';

const resources = {
  es: {
    translation: esLocale,
  },
  en: {
    translation: enLocale,
  },
};

// Detect saved language preference or system preference
const getSavedLanguage = () => {
  const saved = localStorage.getItem('i18nextLng');
  if (saved) return saved;

  const systemLang = navigator.language.split('-')[0];
  return systemLang === 'es' ? 'es' : 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
