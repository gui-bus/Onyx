'use client';

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function aboutSection() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-32 md:py-48 px-6 bg-onyx-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="law-border p-4">
              <div className="relative aspect-[4/5] overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
                  alt={t('TheBoutique')}
                  fill
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                />
              </div>
            </div>
            {/* Decorative Seal */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-gold/30 rounded-full flex items-center justify-center bg-onyx-dark hidden md:flex">
              <span className="text-[8px] uppercase tracking-[0.3em] font-black text-gold text-center">
                {t('Ranking').split(' ')[0]}<br/>{t('Ranking').split(' ')[1]}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-12">
            <div className="flex items-center gap-6">
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-black">
                {t('TheBoutique')}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight tracking-tighter">
              {t('Title')}
            </h2>
            
            <p className="text-xl text-white/40 leading-relaxed font-light italic border-l-2 border-gold/20 pl-8">
              {t('Description')}
            </p>
            
            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-serif text-white tracking-tighter">20+</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold">
                  {t('Experience')}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-serif text-white tracking-tighter">500+</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold">
                  {t('Matters')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
