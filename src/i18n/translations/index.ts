import { en } from './en';
import { es } from './es';
import { it } from './it';
import { ptBR } from './pt-BR';

export const translations = {
  en,
  es,
  it,
  'pt-BR': ptBR,
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;