import Portfolio from '@/components/Portfolio';
import { getTranslations } from '@/lib/translations';

export default function EnglishPage() {
  const t = getTranslations('en');
  
  return <Portfolio t={t} />;
}