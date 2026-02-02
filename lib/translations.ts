import frData from '@/data/fr.json';
import enData from '@/data/en.json';

export type Locale = 'fr' | 'en';

export function getTranslations(locale: Locale) {
  return locale === 'fr' ? frData : enData;
}

export type TranslationsType = typeof frData;