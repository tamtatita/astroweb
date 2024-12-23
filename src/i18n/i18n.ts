// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-fs-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "vi",
    lng: "vi", // Ngôn ngữ mặc định
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false, // React đã xử lý XSS
    },
  });

export default i18n;
