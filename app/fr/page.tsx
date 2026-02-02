import Portfolio from '@/components/Portfolio';
import { getTranslations } from '@/lib/translations';

export default function FrenchPage() {
  const t = getTranslations('fr');
  
  return <Portfolio t={t} />;
}