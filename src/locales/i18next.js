import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./eng.json";
import rus from "./rus.json";
import uzb from "./uzb.json";

i18next.use(initReactI18next).init({
  resources: {
    eng: { translation: eng },
    rus: { translation: rus },
    uzb: { translation: uzb },
  },
  lng: "eng",
  fallbackLng: "uzb",
  interpolation: {
    escapValue: false,
  },
});

export default i18next;
