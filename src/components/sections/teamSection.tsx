'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function teamSection() {
  const t = useTranslations('Team');

  const partners = [
    {
      name: t('P1'),
      role: t('R1'),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: t('P2'),
      role: t('R2'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-32 md:py-48 px-6 bg-onyx-deep">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-black mb-6 block">
            {t('Subtitle')}
          </span>
          <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-none">
            {t('Title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {partners.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="w-full relative aspect-[3/4] mb-12 law-border p-3 overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={p.image} 
                    alt={p.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{p.name}</h3>
              <div className="w-8 h-px bg-gold/30 mb-4"></div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black text-center">{p.role}</p>
              
              <button className="mt-12 text-[9px] uppercase tracking-[0.2em] font-bold text-gold border border-gold/20 px-8 py-3 hover:bg-gold hover:text-onyx-deep transition-all duration-500">
                {t('VerPerfil')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
