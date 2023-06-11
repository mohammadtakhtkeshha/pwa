import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import faTranslation from 'assets/locale/fa/translation.json';

const resources = {
  fa: {
    translation: faTranslation,
  },
};

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: ['fa', 'en'],
  lng: 'fa',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
