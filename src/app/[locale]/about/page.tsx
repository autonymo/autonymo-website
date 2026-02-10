"use client";

import { Link } from "@/i18n/navigation";
import { Sparkles, Users, Globe, Target, Heart, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Outcome-Driven",
      desc: "We lead with results, not features. Every project is measured by the real business impact it delivers.",
    },
    {
      icon: Users,
      title: "Hands-On Partnership",
      desc: "We're not just vendors — we embed with your team, understand your operations, and build alongside you.",
    },
    {
      icon: Zap,
      title: "Speed with Quality",
      desc: "We move fast without cutting corners. Rapid iteration, rigorous testing, and production-ready delivery.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      desc: "We serve clients across industries and geographies, bringing diverse insights to every engagement.",
    },
    {
      icon: Heart,
      title: "Trust First",
      desc: "Transparency, honest advice, and long-term relationships matter more to us than short-term wins.",
    },
    {
      icon: Sparkles,
      title: "AI-Native Thinking",
      desc: "We don't bolt AI onto legacy processes. We rethink workflows from the ground up with intelligence at the core.",
    },
  ];

  const team = [
    {
      name: "Co-Founder & CEO",
      role: "Strategy & Operations",
      desc: "Leads client partnerships and AI strategy. Background in enterprise consulting and digital transformation.",
    },
    {
      name: "Co-Founder & CTO",
      role: "Engineering & AI",
      desc: "Architects our AI platform and agent systems. Deep expertise in ML, NLP, and distributed systems.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
              About Autonymo
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl leading-[1.05]">
              We build AI systems that actually work.
            </h1>
            <p className="mt-8 text-lg leading-8 text-text-muted max-w-2xl sm:text-xl">
              Autonymo is a premium AI studio that helps businesses integrate
              artificial intelligence into their operations. We build custom
              operating systems — not generic tools. We're consultative,
              hands-on, and results-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-cream border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
                Our Story
              </h2>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6">
                Born from a simple observation.
              </h3>
              <div className="space-y-4 text-text-muted text-base leading-relaxed">
                <p>
                  Most businesses know they need AI, but they don't know where
                  to start. The market is flooded with generic chatbots and SaaS
                  tools that promise automation but deliver complexity.
                </p>
                <p>
                  We founded Autonymo to bridge that gap. We're the senior
                  advisor who also rolls up their sleeves — helping businesses
                  identify the highest-impact AI opportunities, then building
                  and deploying the systems to realize them.
                </p>
                <p>
                  Today, we work with teams across real estate, healthcare, and
                  enterprise to build AI systems that don't just look smart —
                  they adapt, deliver, and scale.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-xl bg-white border border-sand"
            >
              <div className="aspect-[4/3] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative">
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-accent-blue/20" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 h-1/3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Our Values
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              What we believe <br />
              and how we work.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col relative"
              >
                <value.icon className="w-5 h-5 text-accent-blue mb-6" />
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">
                  {value.title}
                </h4>
                <p className="text-text-muted leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-cream border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              The Founders
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              A team built to deliver.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-sand/30 border border-sand/50 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-charcoal/20" />
                </div>
                <h4 className="font-display text-xl font-bold text-charcoal mb-1">
                  {member.name}
                </h4>
                <span className="text-accent-blue text-sm font-medium mb-4">
                  {member.role}
                </span>
                <p className="text-text-muted leading-relaxed text-sm">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto p-12 md:p-20 rounded-2xl bg-charcoal text-white text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Want to work with us?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Whether you're exploring AI for the first time or scaling an
            existing system, we'd love to talk.
          </p>
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center font-medium tracking-tight text-white text-lg bg-accent-blue rounded-xl px-8 py-2.5 hover:opacity-90 transition-colors active:scale-95"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
