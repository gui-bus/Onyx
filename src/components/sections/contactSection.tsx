'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function contactSection() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-32 md:py-48 px-6 bg-[#050505]">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-bold mb-6 block">
              {t('Subtitle')}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight mb-12">{t('Title')}</h2>
            <div className="w-16 h-[1px] bg-gold/50 mb-12"></div>
            <p className="text-lg text-white/40 font-light leading-relaxed max-w-md">
              {t('Description')}
            </p>
          </div>

          <form className="flex flex-col gap-12">
            <div className="relative group">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold outline-none transition-colors peer text-white font-light text-xl"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-white/40 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px] uppercase tracking-widest font-bold"
              >
                {t('Name')}
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold outline-none transition-colors peer text-white font-light text-xl"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-white/40 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px] uppercase tracking-widest font-bold"
              >
                {t('Email')}
              </label>
            </div>

            <div className="relative group mt-4">
              <textarea
                id="message"
                placeholder=" "
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-gold outline-none transition-colors peer resize-none text-white font-light text-xl"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-4 text-white/40 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px] uppercase tracking-widest font-bold"
              >
                {t('Message')}
              </label>
            </div>

            <div className="mt-8 flex justify-end">
              <motion.button
                whileHover={{ x: 10 }}
                className="group flex items-center gap-6"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white group-hover:text-gold transition-colors">
                  {t('Submit')}
                </span>
                <div className="w-16 h-[1px] bg-white/30 group-hover:bg-gold transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
