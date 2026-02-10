"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Building2, Stethoscope, Briefcase, Factory, Megaphone, Puzzle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const industries = [
  {
    key: "realEstate" as const,
    icon: Building2,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/real-estate-os" as const,
  },
  {
    key: "healthcare" as const,
    icon: Stethoscope,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    href: "/health-services-os" as const,
  },
  {
    key: "professional" as const,
    icon: Briefcase,
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    href: "/custom-solutions" as const,
  },
  {
    key: "industrial" as const,
    icon: Factory,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "/custom-solutions" as const,
  },
  {
    key: "agencies" as const,
    icon: Megaphone,
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    href: "/custom-solutions" as const,
  },
  {
    key: "other" as const,
    icon: Puzzle,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    href: "/custom-solutions" as const,
  },
];

export function IndustryGrid() {
  const t = useTranslations("industryGrid");

  return (
    <section className="py-14 px-6 bg-cream border-y border-sand">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4"
          >
            {t("label")}
          </motion.h2>
          <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-[1.1] tracking-tight">
            {t("title")}
          </h3>
          <p className="mt-4 text-text-muted text-lg leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => {
            const IndustryIcon = industry.icon;
            return (
              <motion.div
                key={industry.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={industry.href} className="block group h-full">
                  <div className="p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-300 flex flex-col h-full relative cursor-pointer hover:shadow-md overflow-hidden group-hover:bg-cream/30">
                    {/* Background Icon */}
                    <IndustryIcon
                      className={`absolute -top-8 -left-8 w-48 h-48 ${industry.iconColor} opacity-[0.06] transform -rotate-12 pointer-events-none transition-transform duration-500 group-hover:scale-110`}
                      strokeWidth={1}
                      style={{
                        maskImage: "linear-gradient(to bottom right, black 50%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom right, black 40%, transparent 90%)",
                      }}
                    />

                    <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-text-muted/40 group-hover:text-charcoal group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 z-20" />

                    <div className="relative z-10 pt-2 h-full flex flex-col">
                      <h4 className="font-display text-xl font-bold text-charcoal mb-3 pr-8">
                        {t(`industries.${industry.key}.title`)}
                      </h4>

                      <p className="text-text-muted text-pretty leading-relaxed">
                        {t(`industries.${industry.key}.description`)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustryGrid;
