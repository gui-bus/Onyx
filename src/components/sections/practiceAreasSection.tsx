'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Gavel, Landmark, Scale } from "lucide-react";

export default function practiceAreasSection() {
  const t = useTranslations('Practice');

  const areas = [
    { title: t('Corporate'), desc: t('CorporateDesc'), icon: <Landmark strokeWidth={1} aria-hidden="true" />, num: "01" },
    { title: t('Wealth'), desc: t('WealthDesc'), icon: <Gavel strokeWidth={1} aria-hidden="true" />, num: "02" },
    { title: t('Tax'), desc: t('TaxDesc'), icon: <Scale strokeWidth={1} aria-hidden="true" />, num: "03" },
  ];

  return (
    <section id="practice" className="py-32 md:py-48 px-6 bg-onyx-dark border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-black mb-6 block">
              {t('Subtitle')}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-none text-white tracking-tighter">
              {t('Title')}
            </h2>
          </div>
          <div className="w-24 h-px bg-gold/30 mb-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              tabIndex={0}
              role="article"
              className="group p-12 bg-onyx-navy/30 law-border transition-all duration-700 hover:bg-onyx-navy/50 cursor-pointer focus:bg-onyx-navy/50 focus:border-gold outline-none"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="w-12 h-12 text-gold opacity-60 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                  {area.icon}
                </div>
                <span className="text-gold/20 font-serif text-2xl group-hover:text-gold/40 group-focus:text-gold/40 transition-colors">
                  {area.num}
                </span>
              </div>
              
              <h3 className="text-3xl font-serif mb-8 text-white group-hover:text-gold group-focus:text-gold transition-colors">
                {area.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed mb-12 group-hover:text-white/70 group-focus:text-white/70 transition-colors">
                {area.desc}
              </p>

              <div className="flex items-center gap-4 text-gold uppercase text-[9px] tracking-[0.2em] font-bold overflow-hidden">
                <span className="transform -translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-500">
                  {t('Explore')}
                </span>
                <ArrowRight size={14} className="transform -translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-500 delay-75" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
