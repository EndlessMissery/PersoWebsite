import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cs from './data/locales/cs/translation.json';
import en from './data/locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      cs: { translation: cs },
    },
    lng: "cs",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
