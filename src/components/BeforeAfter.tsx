"use client";

import React from "react";
import { motion } from "motion/react";
import { X, Check, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const itemKeys = ["item1", "item2", "item3", "item4", "item5", "item6"] as const;

export function BeforeAfter() {
  const t = useTranslations("beforeAfter");

  return (
    <section id="why-autonymo" className="py-14 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
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
          <p className="mt-4 text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* BEFORE Column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-sand bg-sand/15 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-charcoal/5 border border-sand flex items-center justify-center">
                <X className="w-4 h-4 text-warm-gray" />
              </div>
              <h4 className="font-display text-lg font-bold text-charcoal/60">
                {t("before.title")}
              </h4>
            </div>

            <div className="flex flex-col gap-3">
              {itemKeys.map((key) => (
                <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-white/50">
                  <div className="w-5 h-5 rounded-full bg-charcoal/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-warm-gray/60" />
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {t(`before.items.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AFTER Column */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-sand bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-accent-blue" />
              </div>
              <h4 className="font-display text-lg font-bold text-charcoal">
                {t("after.title")}
              </h4>
            </div>

            <div className="flex flex-col gap-3">
              {itemKeys.map((key) => (
                <div key={key} className="flex items-start gap-3 p-3 rounded-lg hover:bg-cream/50 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-blue" />
                  </div>
                  <p className="text-charcoal text-sm leading-relaxed font-medium">
                    {t(`after.items.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-center"
        >
          <p className="text-text-muted text-sm inline-flex items-center gap-2">
            {t("bottomNote")}
            <ArrowRight className="w-3.5 h-3.5" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default BeforeAfter;
