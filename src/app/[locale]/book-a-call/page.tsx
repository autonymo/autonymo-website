"use client";

import { motion } from "motion/react";
import Cal from "@calcom/embed-react";
import { CheckCircle2 } from "lucide-react";

export default function BookACall() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
              Book a Free Assessment
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl leading-[1.08] mb-4">
              Let&apos;s find where AI can make the biggest impact.
            </h1>
            <p className="text-lg leading-relaxed text-text-muted max-w-2xl mx-auto mb-6">
              A free 15-minute call to understand your situation, identify opportunities, and see if we can help. No commitment, no pitch.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["15 minutes", "No obligation", "Actionable insights"].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue" />
                  <span className="text-charcoal text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-white border border-sand overflow-hidden"
          >
            <Cal
              calLink="arnau-fabrega-nscdht/meeting-arnau-fabrega-autonymo"
              config={{
                layout: "month_view",
                theme: "light",
              }}
              style={{
                width: "100%",
                height: "700px",
                overflow: "auto",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              What Happens Next
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              From first call to live system in 4 weeks.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "We talk", desc: "A 15-minute call to understand your business, your challenges, and whether we can help." },
              { num: "02", title: "We audit", desc: "We map your operations, find where time and money are leaking, and identify the biggest opportunities." },
              { num: "03", title: "First automation goes live", desc: "We build the highest-impact solution first. Live, working, and saving you time within 4 weeks." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-xl bg-white border border-sand"
              >
                <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                  {step.num}
                </span>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{step.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
