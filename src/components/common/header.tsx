"use client";

import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import LanguageSelector from "./languageSelector";

export default function header() {
  const t = useTranslations("Header");
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  // Animations
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 11, 16, 0)", "rgba(10, 11, 16, 0.95)"],
  );
  const headerHeight = useTransform(scrollY, [0, 50], ["120px", "80px"]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "#about", label: t("About") },
    { href: "#practice", label: t("Practice") },
    { href: "#philosophy", label: t("Philosophy") },
    { href: "#team", label: t("Team") },
  ];

  if (!mounted) return null;

  return (
    <>
      <motion.header
        role="banner"
        style={{
          backgroundColor: headerBg,
          height: headerHeight,
        }}
        className="fixed top-0 left-0 right-0 z-100 transition-all duration-500 px-6 md:px-12 w-full max-w-440 mx-auto"
      >
        {/* Bottom border line revealed on scroll */}
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/30 to-transparent"
        />

        <div className="max-w-400 mx-auto h-full grid grid-cols-3 items-center">
          {/* Left: Navigation */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40 hover:text-gold focus:text-gold outline-none transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center: Logo Crest */}
          <div className="flex justify-center">
            <button
              aria-label="Back to top"
              className="relative flex flex-col items-center cursor-pointer group outline-none"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="absolute -top-8 w-px h-6 bg-gold/50 group-hover:h-8 group-focus:h-8 transition-all duration-500" />
              <span className="text-2xl md:text-3xl font-serif tracking-[0.5em] uppercase font-bold text-white group-hover:text-gold group-focus:text-gold transition-colors">
                Onyx
              </span>
              <span className="text-[7px] uppercase tracking-[0.8em] font-black text-gold/50 mt-1">
                Associados
              </span>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-8 md:gap-12">
            <div className="hidden md:block">
              <LanguageSelector />
            </div>

            <motion.button
              whileHover={{ letterSpacing: "0.3em" }}
              aria-label={t("Contact")}
              className="hidden lg:block text-[10px] uppercase tracking-[0.2em] font-black text-white border-b border-gold/50 pb-1 hover:text-gold focus:text-gold outline-none transition-all"
            >
              {t("Contact")}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white/80 hover:text-gold focus:text-gold outline-none transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} strokeWidth={1} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className="fixed inset-0 bg-onyx-deep z-110 flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-xl font-serif tracking-[0.3em] uppercase text-gold">
                Onyx
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white outline-none focus:text-gold"
                aria-label="Close menu"
              >
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <nav className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif text-white/50 hover:text-gold focus:text-gold transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-10 border-t border-white/5 flex flex-col gap-8"
              >
                <LanguageSelector />
                <button className="btn-luxury w-full">{t("Contact")}</button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
