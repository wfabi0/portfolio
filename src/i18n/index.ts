import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "./locales/en.json";
import PT from "./locales/pt.json";

i18next.use(initReactI18next).init({
  resources: {
    pt: { translation: PT },
    en: { translation: EN },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
