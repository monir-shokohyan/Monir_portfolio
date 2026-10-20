import { useTranslation } from "react-i18next";
import { changeLanguage, type Language } from "../i18n/config";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fa", label: "FA" },
];

// Full class names so Tailwind can find them at build time
const marginClasses = {
  1: "ml-1",
  4: "ml-4",
} as const;

type LanguageSwitcherProps = {
  ml?: keyof typeof marginClasses;
};

export const LanguageSwitcher = ({ ml = 4 }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  return (
    <div className={`flex gap-1 ${marginClasses[ml]}`}>
      {languages.map((lang) => {
        const isActive = i18n.resolvedLanguage === lang.code;

        return (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              border rounded-full px-3 py-1 text-sm font-medium
              transition-all duration-300
              ${isActive
                ? "border-red-700 text-red-700 bg-red-700/10"
                : "border-gray-700 text-gray-400 hover:border-red-700 hover:text-red-700"
              }
            `}
            style={{ opacity: isActive ? 1 : 0.8 }}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};
