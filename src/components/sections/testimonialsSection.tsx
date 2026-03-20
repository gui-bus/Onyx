'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function testimonialsSection() {
  const t = useTranslations('Testimonials');

  const testimonials = [
    { text: t('T1'), author: t('A1') },
    { text: t('T2'), author: t('A2') },
  ];

  return (
    <section id="testimonials" className="py-32 md:py-48 px-6 bg-onyx-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 items-start">
          <div className="md:w-1/3">
            <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-black mb-6 block">
              {t('Subtitle')}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
              {t('Title')}
            </h2>
            <div className="w-16 h-px bg-gold"></div>
          </div>

          <div className="md:w-2/3 grid gap-24">
            {testimonials.map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <p className="text-2xl md:text-4xl font-light text-white/70 leading-[1.4] mb-12 italic">
                  &quot;{test.text}&quot;
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-8 h-px bg-gold/30"></div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gold">
                    {test.author}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
