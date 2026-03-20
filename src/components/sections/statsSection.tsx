'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function statsSection() {
  const t = useTranslations('Stats');

  const stats = [
    { value: "15B+", label: t('Billion') },
    { value: "98%", label: t('Success') },
    { value: "200+", label: t('Clients') },
  ];

  return (
    <section className="py-24 bg-onyx-deep border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="text-gold uppercase tracking-[0.4em] text-[8px] font-black mb-4 block">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-7xl font-serif text-white tracking-tighter">
                  {stat.value}
                </span>
                <div className="w-2 h-2 bg-gold rotate-45 mb-2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
