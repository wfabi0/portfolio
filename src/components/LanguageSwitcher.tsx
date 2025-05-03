import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 rounded-md border-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {i18n.language === "pt" ? "EN" : "PT"}
    </button>
  );
}
