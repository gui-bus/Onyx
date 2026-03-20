"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";

export default function heroSection() {
  const t = useTranslations("Hero");
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-image",
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 0.4, duration: 2.5, ease: "power2.out" },
    )
      .fromTo(
        ".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1.5",
      )
      .fromTo(
        ".hero-line",
        { width: 0 },
        { width: "100px", duration: 1, ease: "power2.inOut" },
        "-=0.5",
      );
  }, []);

  return (
    <section className="relative min-h-[800px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-onyx-deep">
      {/* Background Image - Law Library/Executive Boardroom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
          alt={t("TheBoutique")}
          fill
          priority
          className="hero-image object-cover grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-b from-onyx-deep via-onyx-dark/80 to-onyx-deep"></div>
      </div>

      <div className="hero-content z-10 max-w-5xl flex flex-col items-center">
        {/* Minimalist Seal/Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 w-20 h-20 border border-gold rounded-full flex items-center justify-center relative"
        >
          <div className="absolute inset-1 border border-gold/30 rounded-full"></div>
          <span className="text-2xl font-serif text-gold">O</span>
        </motion.div>

        <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-black mb-8 block">
          {t("Subtitle")}
        </span>

        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl font-serif mb-12 leading-[1.1] text-white tracking-tight"
        >
          {t("Title")}
        </h1>

        <div className="hero-line h-px bg-gold mb-12"></div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <button className="btn-luxury law-border group">
            <span className="relative z-10">{t("CTA")}</span>
          </button>

          <a
            href="#about"
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-gold transition-all duration-500 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-white/20"></span>
            {t("Explore")}
          </a>
        </div>
      </div>

      {/* Side Numbers */}
      <div className="absolute right-12 bottom-12 hidden xl:block">
        <div className="flex flex-col items-end gap-2 text-[10px] font-black tracking-[0.3em] text-white/20">
          <span>{t("YearRoman")}</span>
          <div className="w-12 h-px bg-white/10"></div>
          <span>{t("Established")}</span>
        </div>
      </div>
    </section>
  );
}
