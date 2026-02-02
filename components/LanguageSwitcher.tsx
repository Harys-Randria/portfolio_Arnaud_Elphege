"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'fr';
  
  const switchLanguage = (locale: 'fr' | 'en') => {
    router.push(`/${locale}`);
  };
  
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-2 py-1 text-sm font-medium transition-all rounded ${
          currentLocale === 'fr'
            ? 'text-white'
            : 'text-white/60 hover:text-white/80'
        }`}
      >
        FR
      </button>
      <span className="text-white/40">|</span>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 text-sm font-medium transition-all rounded ${
          currentLocale === 'en'
            ? 'text-white'
            : 'text-white/60 hover:text-white/80'
        }`}
      >
        EN
      </button>
    </div>
  );
}