import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import fa from "./locales/fa.json";

// Translations are bundled instead of fetched over HTTP, so the first render
// doesn't have to wait for an extra network round-trip.
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "fa"],
    ns: ["translation"],
    defaultNS: "translation",

    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
