"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Globe, ArrowUpRight, Menu, X, Building2, Heart, Settings2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import Image from "next/image";

export const Navbar = () => {
  const t = useTranslations("nav");
  const tLang = useTranslations("languages");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      title: t("realEstateOS"),
      description: t("realEstateOSDesc"),
      href: "/real-estate-os" as const,
      icon: Building2,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: t("healthServicesOS"),
      description: t("healthServicesOSDesc"),
      href: "/health-services-os" as const,
      icon: Heart,
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: t("customSolutions"),
      description: t("customSolutionsDesc"),
      href: "/custom-solutions" as const,
      icon: Settings2,
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ];

  const moreLinks = [
    { title: t("about"), href: "/about" as const },
    { title: t("customSolutions"), href: "/custom-solutions" as const },
    { title: t("blog"), href: "/blog" as const },
    { title: t("bookCall"), href: "/book-a-call" as const },
  ];

  const locales: Locale[] = ["en", "es", "de", "ca"];
  const localeLabels: Record<Locale, string> = {
    en: "EN",
    es: "ES",
    de: "DE",
    ca: "CA",
  };

  const closeAll = () => {
    setIsSolutionsOpen(false);
    setIsLangOpen(false);
    setIsMoreOpen(false);
  };

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    closeAll();
    setIsMobileOpen(false);
  };

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-3 sm:px-0">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-50 px-3 py-2 bg-white/80 backdrop-blur-xl border-x border-b border-sand rounded-b-xl"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <Image
              src="/Logo%20Images/autonymo_logo_transparent%20(1).png"
              alt="Autonymo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain transition-transform duration-500 group-hover:rotate-12"
            />
            <span className="font-display text-xl font-bold tracking-tight text-charcoal">
              Autonymo
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div>
              <button
                onClick={() => {
                  setIsSolutionsOpen(!isSolutionsOpen);
                  setIsLangOpen(false);
                  setIsMoreOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-charcoal transition-colors focus:outline-none"
              >
                {t("solutions")}
                <ArrowDownRight
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            <Link
              href={{ pathname: "/", hash: "why-autonymo" }}
              onClick={closeAll}
              className="text-sm font-medium text-text-muted hover:text-charcoal transition-colors"
            >
              {t("industries")}
            </Link>
            <Link
              href={{ pathname: "/", hash: "how-it-works" }}
              onClick={closeAll}
              className="text-sm font-medium text-text-muted hover:text-charcoal transition-colors"
            >
              {t("process")}
            </Link>
            <div>
              <button
                onClick={() => {
                  setIsMoreOpen(!isMoreOpen);
                  setIsSolutionsOpen(false);
                  setIsLangOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-charcoal transition-colors focus:outline-none"
              >
                {t("more")}
                <ArrowDownRight
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLangOpen(!isLangOpen);
                  setIsSolutionsOpen(false);
                  setIsMoreOpen(false);
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-muted hover:text-charcoal hover:bg-cream rounded-lg transition-all focus:outline-none"
              >
                <Globe className="w-4 h-4" />
                {localeLabels[locale]}
                <ArrowDownRight
                  className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[calc(100%+8px)] right-0 w-36 bg-white/90 backdrop-blur-2xl border border-sand rounded-xl shadow-lg p-1 z-50"
                  >
                    <div className="flex flex-col gap-0.5">
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => switchLocale(loc)}
                          className={`w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 group flex items-center justify-between hover:bg-cream ${loc === locale
                            ? "text-charcoal bg-cream"
                            : "text-text-muted hover:text-charcoal"
                            }`}
                        >
                          {tLang(loc)}
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-accent-blue transition-opacity duration-300 ${loc === locale ? "opacity-100" : "opacity-0"
                              }`}
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book a Call CTA */}
            <Link
              href="/book-a-call"
              className="hidden sm:flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-charcoal rounded-lg hover:bg-opacity-90 transition-all active:scale-95"
            >
              <ArrowUpRight className="w-4 h-4" />
              {t("bookCall")}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-charcoal hover:bg-cream rounded-lg transition-colors"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Solutions Mega Menu */}
      <AnimatePresence>
        {isSolutionsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+8px)] left-0 w-full z-40 hidden md:grid grid-cols-3 gap-2 px-3 sm:px-0"
          >
            {industries.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={closeAll}
                className="block group bg-white/90 backdrop-blur-2xl border border-sand rounded-2xl shadow-lg p-6 relative overflow-hidden hover:border-warm-gray transition-all duration-300"
              >
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />

                <div
                  className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>

                <h4 className="font-display text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h4>

                <p className="text-text-muted text-xs leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* More Mega Menu */}
      <AnimatePresence>
        {isMoreOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+8px)] left-0 w-full z-40 hidden md:grid grid-cols-2 gap-2 px-3 sm:px-0"
          >
            {/* Left: Company Links */}
            <div className="bg-white/90 backdrop-blur-2xl border border-sand rounded-2xl shadow-lg p-6 h-full">
              <div className="flex flex-col gap-0.5 items-start">
                {moreLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={closeAll}
                    className="group flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-cream transition-all duration-300 w-full max-w-[240px]"
                  >
                    <span className="text-sm font-medium text-text-muted group-hover:text-charcoal transition-colors duration-300">
                      {link.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-charcoal opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Cards */}
            <div className="flex flex-col gap-2">
              <div className="bg-white/90 backdrop-blur-2xl border border-sand rounded-2xl shadow-lg p-5 flex flex-col hover:border-warm-gray transition-colors group cursor-pointer overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-sm font-bold text-charcoal">
                    {t("newsletter")}
                  </h5>
                  <ArrowUpRight className="w-4 h-4 text-warm-gray group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed mb-4">
                  {t("newsletterDesc")}
                </p>
                <div className="aspect-[3.5/1] rounded-lg bg-light-gray border border-sand/50 overflow-hidden relative">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/60 backdrop-blur-sm border-t border-white/40 shadow-sm" />
                </div>
              </div>

              <Link
                href="/blog"
                onClick={closeAll}
                className="bg-white/90 backdrop-blur-2xl border border-sand rounded-2xl shadow-lg p-5 flex flex-col hover:border-warm-gray transition-colors group cursor-pointer overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-sm font-bold text-charcoal">
                    {t("deepDiveBlogs")}
                  </h5>
                  <ArrowUpRight className="w-4 h-4 text-warm-gray group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed mb-4">
                  {t("deepDiveBlogsDesc")}
                </p>
                <div className="aspect-[3.5/1] rounded-lg bg-sand/30 border border-sand/50 overflow-hidden relative">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded border border-white shadow-sm" />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+8px)] left-3 right-3 md:hidden z-40 bg-white/95 backdrop-blur-2xl border border-sand rounded-2xl shadow-xl p-6 max-h-[80vh] overflow-y-auto"
          >
            {/* Industry Solutions */}
            <div className="mb-6">
              <h5 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
                {t("solutions")}
              </h5>
              <div className="flex flex-col gap-2">
                {industries.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-cream transition-colors group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}
                    >
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-charcoal">
                        {item.title}
                      </h4>
                      <p className="text-text-muted text-xs leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-sand/50 my-4" />

            {/* More Links */}
            <div className="mb-6">
              <h5 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
                {t("more")}
              </h5>
              <div className="flex flex-col gap-1">
                {moreLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-cream transition-colors"
                  >
                    <span className="text-sm font-medium text-text-muted">
                      {link.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-warm-gray" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-sand/50 my-4" />

            {/* Language */}
            <div className="mb-6">
              <h5 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
                Language
              </h5>
              <div className="flex gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${loc === locale
                      ? "bg-charcoal text-white"
                      : "bg-cream text-text-muted hover:bg-sand/50"
                      }`}
                  >
                    {localeLabels[loc]}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/book-a-call"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full px-5 py-3 text-sm font-semibold text-white bg-charcoal rounded-xl hover:bg-opacity-90 transition-all active:scale-95"
            >
              <ArrowUpRight className="w-4 h-4" />
              {t("bookCall")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
