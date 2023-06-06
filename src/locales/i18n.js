import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/lang/en/translation.json';
import viTranslation from '../locales/lang/vi/translation.json';
import jaTranslation from '../locales/lang/ja/translation.json';
import koTranslation from '../locales/lang/ko/translation.json';

// Cấu hình i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      vi: {
        translation: viTranslation,
      },
      ja: {
        translation: jaTranslation,
      },
      ko: {
        translation: koTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;