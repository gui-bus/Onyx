'use client';

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

export default function languageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLocale = (nextLocale: string) => {
    setIsOpen(false);
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
  };

  const languages = [
    { code: 'pt', name: 'Português', country: 'BR' },
    { code: 'en', name: 'English', country: 'US' }
  ];

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-white/60 hover:text-gold focus:text-gold outline-none transition-colors"
      >
        <span>{locale === 'pt' ? 'PT' : 'EN'}</span>
        <div className="w-4 h-4 rounded-full overflow-hidden border border-white/10">
          <ReactCountryFlag 
            countryCode={locale === 'pt' ? 'BR' : 'US'} 
            svg 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            role="listbox"
            className="absolute right-0 mt-4 w-40 bg-onyx-deep border border-gold/20 shadow-2xl py-2 z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                role="option"
                aria-selected={locale === lang.code}
                onClick={() => changeLocale(lang.code)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 focus:bg-white/5 outline-none transition-colors text-left"
              >
                <ReactCountryFlag countryCode={lang.country} svg style={{ width: '1.2em' }} />
                <span className={`text-[10px] uppercase tracking-widest font-bold ${locale === lang.code ? 'text-gold' : 'text-white/50'}`}>
                  {lang.name}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
