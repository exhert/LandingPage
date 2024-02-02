import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ENGLISH_TRANS from "./res/en";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: ["en"],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: ENGLISH_TRANS,
    },
  });

export default i18n;
