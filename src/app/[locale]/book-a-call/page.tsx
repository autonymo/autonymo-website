"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Calendar, Clock, Globe, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BookACall() {
  const benefits = [
    "Free 30-minute consultation with an AI specialist",
    "No-obligation audit of your current operations",
    "Personalized recommendations for AI integration",
    "Clear pricing and timeline estimates",
    "Q&A on any automation or AI topic"
  ];

  const expectations = [
    {
      icon: Clock,
      title: "30 Minutes",
      desc: "A focused session to understand your business and identify quick wins."
    },
    {
      icon: Globe,
      title: "Any Timezone",
      desc: "We work with teams globally. Pick a time that works for you."
    },
    {
      icon: Sparkles,
      title: "Actionable Insights",
      desc: "Walk away with concrete next steps, whether you work with us or not."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Book a Call
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
                Let's talk about <br />
                your AI strategy.
              </h1>
              <p className="text-lg leading-8 text-text-muted max-w-xl mb-10">
                Schedule a free consultation with our team. We'll learn about your business, identify high-impact opportunities, and show you what's possible with AI automation.
              </p>

              <div className="space-y-4 mb-10">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-cream border border-sand flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    </div>
                    <span className="text-charcoal text-sm font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {expectations.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="p-4 rounded-xl bg-white border border-sand"
                  >
                    <item.icon className="w-5 h-5 text-accent-blue mb-3" />
                    <h4 className="font-display text-sm font-bold text-charcoal mb-1">{item.title}</h4>
                    <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Booking Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-xl bg-white border border-sand"
            >
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-charcoal mb-2">Schedule Your Call</h3>
                <p className="text-text-muted text-sm">Choose a time that works best for you.</p>
              </div>

              {/* Calendar Placeholder */}
              <div className="aspect-[4/3] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative mb-6">
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                  <Calendar className="w-12 h-12 text-charcoal/10" />
                  <span className="text-charcoal/30 text-sm font-medium">Calendar Widget</span>
                  <span className="text-charcoal/20 text-xs">Calendly or Cal.com integration</span>
                </div>
              </div>

              {/* Or contact directly */}
              <div className="pt-6 border-t border-sand/30">
                <p className="text-text-muted text-xs mb-4">Or reach out directly:</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:hello@autonymo.com"
                    className="flex items-center gap-2 text-charcoal text-sm font-medium hover:text-accent-blue transition-colors group"
                  >
                    hello@autonymo.com
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
            Why Teams Choose Autonymo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {[
              { title: "No Obligation", desc: "Our introductory call is completely free. No pressure, no hard sells — just honest advice." },
              { title: "Fast Turnaround", desc: "From first call to live AI system in weeks, not months. We move at your pace." },
              { title: "Proven Results", desc: "Our clients see measurable ROI within the first 30 days of deployment." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col"
              >
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
