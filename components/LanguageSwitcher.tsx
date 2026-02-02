"use client";

import { usePathname, useRouter } from "next/navigation";

type Props = {
  isScrolled: boolean;
};

export default function LanguageSwitcher({ isScrolled }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.startsWith("/en") ? "en" : "fr";

  const switchLocale = () => {
    const newLocale = currentLocale === "fr" ? "en" : "fr";
    router.push(pathname.replace(/^\/(fr|en)/, `/${newLocale}`));
  };

  return (
    <div
      onClick={switchLocale}
      className={`
        relative w-16 h-8 rounded-full cursor-pointer select-none
        transition-all duration-300
        ${
          isScrolled
            ? "bg-gradient-to-r from-[#4A90E2] to-[#8B7EC8] hover:shadow-lg"
            : "bg-white/20 hover:bg-white/30"
        }
      `}
    >
      {/* Bouton glissant - couvre la langue ACTIVE */}
      <div
        className={`
          absolute top-1 left-1 h-6 w-7 rounded-full bg-white shadow-md
          flex items-center justify-center
          transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          hover:scale-105
          ${currentLocale === "en" ? "translate-x-7" : "translate-x-0"}
        `}
      >
        <span 
          className="text-xs font-bold text-foreground transition-all duration-200"
          key={currentLocale} // Force re-render pour animation du texte
        >
          {currentLocale.toUpperCase()}
        </span>
      </div>

      {/* Labels en arrière-plan (langue inactive) */}
      <div className="flex h-full items-center justify-between px-2 text-xs font-medium pointer-events-none">
        <span
          className={`
            transition-all duration-400 ease-out
            ${currentLocale === "fr" ? "opacity-0 scale-75" : "opacity-70 scale-100"}
            text-white
          `}
        >
          FR
        </span>
        <span
          className={`
            transition-all duration-400 ease-out
            ${currentLocale === "en" ? "opacity-0 scale-75" : "opacity-70 scale-100"}
            text-white
          `}
        >
          EN
        </span>
      </div>
    </div>
  );
}