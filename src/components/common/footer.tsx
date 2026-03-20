'use client';

import { useTranslations } from "next-intl";

export default function footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-onyx-deep pt-32 pb-12 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-serif tracking-[0.3em] uppercase font-bold text-gold block mb-8">
              Onyx
            </span>
            <p className="text-xs uppercase tracking-widest text-white/40 leading-relaxed max-w-sm">
              {t('Description')}
            </p>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white mb-8 block">{t('Offices')}</span>
            <ul className="space-y-4 text-xs font-light text-white/50 tracking-wider uppercase">
              <li>{t('Geneva')}</li>
              <li>{t('London')}</li>
              <li>{t('NewYork')}</li>
              <li>{t('SaoPaulo')}</li>
            </ul>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white mb-8 block">{t('Social')}</span>
            <ul className="space-y-4 text-xs font-light text-white/50 tracking-wider uppercase">
              <li><a href="#" className="hover:text-gold transition-colors">{t('LinkedIn')}</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">{t('Instagram')}</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">{t('Twitter')}</a></li>
            </ul>
          </div>
        </div>

        {/* Massive Footer Text */}
        <div className="border-t border-white/10 pt-12 flex flex-col items-center text-center">
          <h2 className="text-7xl md:text-9xl lg:text-[12rem] leading-none font-serif tracking-tighter text-white/5 select-none w-full">
            ONYX
          </h2>
          <div className="flex flex-col md:flex-row justify-between w-full mt-12 text-[9px] uppercase tracking-widest font-bold text-white/30">
            <span>© {new Date().getFullYear()} ONYX {t('TheBoutique').toUpperCase()}.</span>
            <span>{t('Rights')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
