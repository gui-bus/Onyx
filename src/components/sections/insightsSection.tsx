'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function insightsSection() {
  const t = useTranslations('Insights');

  const posts = [
    { title: t('I1'), date: "MAR 2026", cat: t('Strategy') },
    { title: t('I2'), date: "FEV 2026", cat: t('WealthManagement') }
  ];

  return (
    <section id="insights" className="py-32 md:py-48 px-6 bg-onyx-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-black mb-6 block">
              {t('Subtitle')}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none">
              {t('Title')}
            </h2>
          </div>
          <button className="text-[10px] uppercase tracking-[0.3em] font-black text-white hover:text-gold transition-colors border-b border-gold/30 pb-2">
            {t('ReadMore')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-6 mb-8">
                <span className="text-gold font-serif italic text-sm">{post.date}</span>
                <div className="w-px h-4 bg-white/10"></div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/30">{post.cat}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-white group-hover:text-gold transition-all duration-500 leading-[1.1] mb-10">
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-white/40 group-hover:text-gold transition-colors">
                <span className="text-[9px] uppercase tracking-widest font-black">{t('ReadMore')}</span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
