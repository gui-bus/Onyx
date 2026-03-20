'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function heritageSection() {
  const t = useTranslations('Heritage');

  const events = [
    { year: t('Y1'), desc: t('E1') },
    { year: t('Y2'), desc: t('E2') },
    { year: t('Y3'), desc: t('E3') }
  ];

  return (
    <section id="heritage" className="py-32 md:py-48 px-6 bg-onyx-deep relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-black mb-6 block">
            {t('Subtitle')}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter">
            {t('Title')}
          </h2>
        </div>

        <div className="relative border-l border-gold/20 pl-8 md:pl-24 space-y-32 py-12">
          {events.map((ev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Dot */}
              <div className="absolute -left-[33px] md:-left-[97px] top-4 w-4 h-4 rounded-full bg-onyx-deep border border-gold flex items-center justify-center">
                <div className="w-1 h-1 bg-gold rounded-full"></div>
              </div>

              <span className="text-gold font-serif text-2xl md:text-4xl mb-6 block tracking-widest">
                {ev.year}
              </span>
              <p className="text-2xl md:text-4xl font-light text-white/60 leading-tight max-w-3xl italic">
                {ev.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
