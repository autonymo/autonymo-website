"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Threads from "@/components/Threads";
import { SolutionTabs } from "@/components/SolutionTabs";
import { IndustryGrid } from "@/components/IndustryGrid";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations();

  const stepKeys = ["discovery", "build", "launch"] as const;

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* ──────────────────── HERO SECTION ──────────────────── */}
      <div className="bg-cream rounded-b-3xl border-b border-sand/30 relative overflow-hidden will-change-transform">
        <section className="relative pt-32 pb-40 px-6 sm:pt-44 sm:pb-48 lg:pt-52 lg:pb-60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="relative inline-block">
                {/* Subtle radial blur behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cream/80 blur-xl rounded-full -z-10" />

                {/* Heading */}
                <h1 className="relative z-10 font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                  {t("hero.title")} <br />
                  {t("hero.titleHighlight")}
                </h1>

                {/* Subtitle */}
                <p className="relative z-20 mt-8 text-lg leading-8 text-charcoal/80 max-w-2xl mx-auto sm:text-xl">
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="relative z-20 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href="/book-a-call"
                    className="inline-flex items-center justify-center font-medium tracking-tight text-white text-lg bg-charcoal rounded-xl px-8 py-3 hover:bg-charcoal/90 transition-colors active:scale-95"
                  >
                    {t("hero.cta")}
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={{ pathname: "/", hash: "solutions" }}
                    className="relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-tight text-charcoal rounded-xl bg-white/80 border border-sand/50 text-lg hover:bg-white transition-all active:scale-95"
                  >
                    {t("hero.ctaSecondary")}
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Threads Overlay */}
          <div className="absolute -top-[15%] left-0 right-0 bottom-0 z-0 pointer-events-none">
            <Threads
              color={[0.64, 0.62, 0.59]}
              amplitude={0.5}
              distance={0.15}
              enableMouseInteraction={false}
              speed={0.4}
            />
          </div>
        </section>

        {/* ──────────────────── FEATURED PLATFORM CARDS (half-visible) ──────────────────── */}
        <section className="pb-16 px-6 bg-transparent relative z-10 -mt-20 sm:-mt-24 lg:-mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  title: t("whatWeBuild.tabs.realEstate.label"),
                  intro: t("whatWeBuild.tabs.realEstate.tagline"),
                  color: "bg-[#E8F0FE]",
                  href: "/real-estate-os" as const,
                },
                {
                  title: t("whatWeBuild.tabs.healthServices.label"),
                  intro: t("whatWeBuild.tabs.healthServices.tagline"),
                  color: "bg-[#F5F5F7]",
                  href: "/health-services-os" as const,
                },
                {
                  title: t("whatWeBuild.tabs.leadGeneration.label"),
                  intro: t("whatWeBuild.tabs.leadGeneration.tagline"),
                  color: "bg-[#F3F0FF]",
                  href: "/lead-generation-os" as const,
                },
                {
                  title: t("whatWeBuild.tabs.custom.label"),
                  intro: t("whatWeBuild.tabs.custom.tagline"),
                  color: "bg-[#F0F4F8]",
                  href: "/custom-solutions" as const,
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={card.href}
                    className="flex bg-white rounded-xl border border-sand p-6 relative flex-col h-full overflow-hidden group hover:border-warm-gray transition-colors duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 transition-all duration-300" />

                    <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                      {card.title}
                    </h3>

                    <p className="text-text-muted text-sm leading-relaxed mb-8 min-h-[3rem] line-clamp-3">
                      {card.intro}
                    </p>

                    <div className={`mt-auto aspect-[4/3] rounded-2xl ${card.color} border border-sand/50 overflow-hidden relative`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1/2 h-[1px] bg-charcoal/5 rotate-45" />
                        <div className="w-1/2 h-[1px] bg-charcoal/5 -rotate-45" />
                      </div>
                      <div className="absolute top-4 left-4 flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                        <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                        <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-white/40 backdrop-blur-sm rounded-xl border border-white/50" />
                      <div className="absolute top-1/4 right-4 w-12 h-12 bg-white/80 rounded-lg shadow-sm" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ──────────────────── SOCIAL PROOF STRIP ──────────────────── */}
      <section className="py-4 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-text-muted/50 uppercase tracking-widest">
            {t("hero.trustedBy")}
          </p>
        </div>
      </section>

      {/* ──────────────────── SOLUTION TABS (What We Build) ──────────────────── */}
      <SolutionTabs />

      {/* ──────────────────── INDUSTRY GRID ──────────────────── */}
      <IndustryGrid />

      {/* ──────────────────── HOW IT WORKS SECTION ──────────────────── */}
      <section id="how-it-works" className="py-14 px-6 bg-cream border-y border-sand relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              {t("howItWorks.label")}
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              {t("howItWorks.title")}
            </h3>
          </div>

          {/* Step Cards — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {stepKeys.map((stepKey, index) => (
              <motion.div
                key={stepKey}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col relative min-h-[220px]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-sand/40 group-hover:text-accent-blue/40 transition-colors duration-300">
                    {t(`howItWorks.steps.${stepKey}.step`)}
                  </span>
                  <span className="text-[10px] font-bold text-accent-blue/60 uppercase tracking-wider bg-accent-blue/5 px-2 py-1 rounded-full">
                    {t(`howItWorks.steps.${stepKey}.timeline`)}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">
                  {t(`howItWorks.steps.${stepKey}.title`)}
                </h4>
                <p className="text-text-muted leading-relaxed text-sm flex-1">
                  {t(`howItWorks.steps.${stepKey}.description`)}
                </p>

                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-sand/30">
                  <div className="h-1 bg-cream rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-blue/30 rounded-full transition-all duration-500"
                      style={{ width: `${((index + 1) / stepKeys.length) * 100}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── FINAL CTA SECTION ──────────────────── */}
      <section className="py-14 px-3 sm:px-px bg-cream">
        <div className="max-w-7xl mx-auto p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden shadow-2xl">
          <div className="flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {t("cta.title")} <br />
              {t("cta.titleLine2")}
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center font-medium tracking-tight text-charcoal text-lg bg-white rounded-xl px-8 py-4 hover:bg-white/90 transition-colors active:scale-95"
            >
              {t("cta.button")}
              <ArrowUpRight className="ml-2 w-5 h-5 text-charcoal" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
