import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { useI18n } from '../../i18n/I18nContext';
import type { Language } from '../../i18n/translations';

const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt-BR', name: 'Português (Brasil)' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useI18n();

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Select language"
      >
        <Globe className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between"
            >
              <span>{lang.name}</span>
              {language === lang.code && (
                <Check className="h-4 w-4 text-green-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}