import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18next
i18n
  .use(HttpBackend) // Load translations from your locales directory
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Bind i18n to React
  .init({
    fallbackLng: "en", // Default language if translation for the current language is not available
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      // Path to the translation files
      loadPath: "/locales/{{lng}}.json", // Adjust this path if needed
    },
    // Add the following configuration to handle the language persistence
    lng: localStorage.getItem("selectedLanguage") || undefined, // Use saved language if available
  });

export default i18n;
