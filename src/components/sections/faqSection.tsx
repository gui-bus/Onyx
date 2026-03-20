'use client';

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function faqSection() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('Q1'), a: t('A1') },
    { q: t('Q2'), a: t('A2') },
  ];

  return (
    <section className="py-32 md:py-48 px-6 bg-[#050608]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24">
          <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-black mb-6 block">
            {t('Subtitle')}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none">
            {t('Title')}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-onyx-navy/10 border border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-10 text-left group outline-none"
              >
                <span className={`text-xl md:text-3xl font-serif transition-colors duration-500 ${openIndex === i ? 'text-gold' : 'text-white/70 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <ChevronRight className={`w-6 h-6 text-gold transition-transform duration-500 ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="px-10 pb-10 text-lg text-white/40 font-light leading-relaxed border-t border-white/5 pt-8">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
