"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Target, Magnet, Filter, Mail, BarChart3, Zap, Phone, Database, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function LeadGenerationOS() {
  const features = [
    {
      icon: Magnet,
      title: "Multi-Channel Capture",
      desc: "Capture leads from every touchpoint — web forms, social media, ads, landing pages, and referrals — into one unified pipeline."
    },
    {
      icon: Filter,
      title: "AI Lead Scoring",
      desc: "Automatically score and prioritize leads based on behavioral signals, firmographic data, and intent indicators in real time."
    },
    {
      icon: Phone,
      title: "AI Outbound Caller",
      desc: "Automate cold outreach and follow-up calls with AI voice agents that qualify prospects and book meetings on your behalf."
    },
    {
      icon: Mail,
      title: "Smart Email Sequences",
      desc: "Deploy personalized, AI-generated email campaigns that adapt content and timing based on recipient engagement patterns."
    },
    {
      icon: Database,
      title: "CRM Sync & Enrichment",
      desc: "Automatically enrich lead profiles with company data, social profiles, and activity history. Sync bidirectionally with your CRM."
    },
    {
      icon: BarChart3,
      title: "Conversion Analytics",
      desc: "Track every touchpoint from first click to closed deal. Understand your funnel, optimize spend, and forecast pipeline accurately."
    }
  ];

  const results = [
    { metric: "5x", label: "More qualified meetings" },
    { metric: "70%", label: "Less time on manual outreach" },
    { metric: "3x", label: "Pipeline velocity increase" },
    { metric: "45%", label: "Higher conversion rates" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
              Lead Generation OS
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl leading-[1.05]">
              Fill your pipeline. Book more meetings. Close faster.
            </h1>
            <p className="mt-8 text-lg leading-8 text-text-muted max-w-2xl sm:text-xl">
              Automated lead capture, scoring, and nurturing that fills your pipeline with qualified opportunities while your team focuses on closing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book-a-call"
                className="inline-flex items-center justify-center px-8 py-3 font-medium tracking-tight text-white rounded-xl bg-charcoal text-lg shadow-xl shadow-charcoal/10 hover:bg-black transition-all active:scale-95"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-12 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-2">{item.metric}</div>
                <div className="text-text-muted text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Platform Capabilities
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              Every stage of your funnel, <br />
              supercharged by AI.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col relative"
              >
                <feature.icon className="w-5 h-5 text-accent-blue mb-6" />
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{feature.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel Visualization */}
      <section className="py-24 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              The AI Funnel
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              From cold traffic to <br />
              closed revenue.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { stage: "Capture", desc: "Multi-channel lead capture across all your digital touchpoints", color: "bg-sand/30" },
              { stage: "Score", desc: "AI analyzes and ranks every lead by conversion probability", color: "bg-sand/20" },
              { stage: "Nurture", desc: "Automated outreach sequences adapt to each prospect's behavior", color: "bg-light-gray" },
              { stage: "Convert", desc: "Qualified leads delivered to your sales team, ready to close", color: "bg-sand/30" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} border border-sand/50 flex items-center justify-center mx-auto mb-4`}>
                  <span className="font-display text-lg font-bold text-charcoal/30">{i + 1}</span>
                </div>
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.stage}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ArrowUpRight className="w-4 h-4 text-sand rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to fill <br />
            your pipeline?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Let AI handle the prospecting while your team focuses on what they do best — closing deals.
          </p>
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center px-8 py-2.5 font-medium tracking-tight text-white rounded-lg bg-accent-blue text-lg"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
