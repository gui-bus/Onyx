"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function philosophySection() {
  const t = useTranslations("Philosophy");

  const principles = [
    { num: "ART. I", title: t("P1"), desc: t("D1") },
    { num: "ART. II", title: t("P2"), desc: t("D2") },
    { num: "ART. III", title: t("P3"), desc: t("D3") },
  ];

  return (
    <section
      id="philosophy"
      className="py-32 md:py-48 px-6 bg-onyx-navy/20 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-black mb-8 block">
              {t("Subtitle")}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none mb-12">
              {t("Title")}
            </h2>
            <div className="w-full h-px bg-linear-to-r from-gold/50 to-transparent"></div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-24">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-8 mb-8">
                  <span className="text-gold font-serif text-xl tracking-widest">
                    {p.num}
                  </span>
                  <div className="flex-1 h-px bg-white/5 group-hover:bg-gold/20 transition-colors"></div>
                </div>
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 group-hover:text-gold transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-xl md:text-2xl font-light text-white/40 leading-relaxed max-w-2xl group-hover:text-white/60 transition-colors">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
