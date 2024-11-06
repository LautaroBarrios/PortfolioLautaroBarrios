import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "./assets/translations/es.json";
import en from "./assets/translations/en.json";

const savedLanguage = localStorage.getItem("language") || "es";

// Configurar i18next con el idioma inicial
i18next.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  lng: savedLanguage, // usar el idioma guardado
  resources: {
    es: {
      global: es,
    },
    en: {
      global: en,
    },
  },
  detection: {
    order: ["localStorage", "navigator"],
  },
  fallbackLng: "es",
});

// Escuchar los cambios de idioma y guardar en localStorage
i18next.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
