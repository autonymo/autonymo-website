"use client";

import { Link } from "@/i18n/navigation";
import {
  Target,
  Magnet,
  Filter,
  Mail,
  BarChart3,
  Zap,
  Phone,
  Database,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Globe,
  Clock,
  CheckCircle2,
  Users,
  Bell,
  Calendar,
} from "lucide-react";
import { motion } from "motion/react";

/* ─── Lead Gen Dashboard Illustration ─────────────────────────── */
function LeadGenIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
    >
      {/* Glow behind card */}
      <div className="absolute -inset-6 bg-gradient-to-br from-accent-blue/[0.04] via-transparent to-sand/20 rounded-[2rem] blur-2xl pointer-events-none" />

      {/* ── Main dashboard card ── */}
      <div className="relative bg-white rounded-2xl border border-sand/80 shadow-2xl shadow-charcoal/8 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-light-gray border-b border-sand/60">
          <div className="flex gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-1.5 bg-white rounded-md border border-sand/60 px-2.5 py-1">
            <div className="w-3 h-3 rounded-sm bg-accent-blue/15 flex items-center justify-center">
              <Target className="w-2 h-2 text-accent-blue" />
            </div>
            <span className="text-[10px] text-text-muted font-medium">app.autonymo.com/pipeline</span>
          </div>
          <div className="w-14" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-[52px] bg-charcoal flex flex-col items-center py-4 gap-3.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-accent-blue flex items-center justify-center">
              <Target className="w-3.5 h-3.5 text-white" />
            </div>
            {[BarChart3, Users, Mail, Phone, Database].map((Icon, i) => (
              <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white/10' : 'hover:bg-white/5'} transition-colors`}>
                <Icon className="w-3.5 h-3.5 text-white/40" />
              </div>
            ))}
            <div className="mt-auto w-7 h-7 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">LG</span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex-1 p-5 bg-cream/40 min-h-[340px]">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display text-sm font-bold text-charcoal">Lead Pipeline</div>
                <div className="text-[10px] text-text-muted">Tuesday, 17 Jun · All Channels</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {['bg-accent-blue', 'bg-purple-500', 'bg-green-500'].map((bg, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                      <span className="text-[7px] font-bold text-white">{['AI','S','M'][i]}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>

            {/* Funnel stats */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: "Captured", value: "1,847", trend: "+24%", icon: Magnet },
                { label: "Scored", value: "892", trend: "48%", icon: Filter },
                { label: "Nurtured", value: "634", trend: "71%", icon: Mail },
                { label: "Converted", value: "187", trend: "+31%", icon: CheckCircle2 },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-2 border border-sand/50">
                  <div className="flex items-center justify-between mb-1">
                    <stat.icon className="w-3 h-3 text-warm-gray" />
                    <span className="text-[8px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded">{stat.trend}</span>
                  </div>
                  <div className="font-display text-sm font-bold text-charcoal leading-none">{stat.value}</div>
                  <div className="text-[8px] text-text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Channel performance chart */}
            <div className="bg-white rounded-xl border border-sand/50 p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-charcoal">Channel Performance</span>
                <span className="text-[9px] text-accent-blue font-medium">This month</span>
              </div>
              <div className="flex items-end gap-1.5 h-10">
                {[
                  { h: 72, label: "Web", color: "bg-accent-blue" },
                  { h: 55, label: "Ads", color: "bg-accent-blue/60" },
                  { h: 48, label: "Social", color: "bg-accent-blue/40" },
                  { h: 35, label: "Email", color: "bg-accent-blue/30" },
                  { h: 28, label: "Ref", color: "bg-accent-blue/20" },
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className={`w-full rounded-sm ${item.color}`}
                      style={{ height: `${item.h * 0.55}%` }}
                    />
                    <span className="text-[7px] text-warm-gray">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live lead feed */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-charcoal uppercase tracking-wider">Active Sequences</span>
                <span className="text-[9px] text-text-muted">23 running</span>
              </div>
              {[
                { name: "Sarah L.", avatar: "SL", source: "Google Ads", status: "AI Calling", time: "now", dot: "bg-green-400", avatarBg: "bg-purple-100 text-purple-600" },
                { name: "James W.", avatar: "JW", source: "LinkedIn", status: "Email Seq #3", time: "2m", dot: "bg-accent-blue", avatarBg: "bg-blue-100 text-blue-600" },
                { name: "Priya M.", avatar: "PM", source: "Website", status: "Meeting Booked", time: "5m", dot: "bg-yellow-400", avatarBg: "bg-amber-100 text-amber-600" },
              ].map((lead, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 border border-sand/30 mb-1.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${lead.avatarBg}`}>
                    {lead.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-charcoal">{lead.name}</span>
                      <span className="text-[9px] text-text-muted truncate">· {lead.source}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${lead.dot}`} />
                      <span className="text-[9px] text-text-muted">{lead.status}</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-warm-gray shrink-0">{lead.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating: Meeting Booked notification ── */}
      <motion.div
        initial={{ opacity: 0, y: 12, x: 12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-sand shadow-xl shadow-charcoal/10 p-3 flex items-center gap-2.5 z-10"
      >
        <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
          <Calendar className="w-4.5 h-4.5 text-green-600" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">Meeting Booked!</div>
          <div className="text-[9px] text-text-muted">Sarah L. · Tomorrow 2pm</div>
          <div className="text-[9px] text-green-600 font-medium mt-0.5">Via AI cold call</div>
        </div>
      </motion.div>

      {/* ── Floating: AI Agent badge top-left ── */}
      <motion.div
        initial={{ opacity: 0, y: -8, x: -8 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-3 -left-3 bg-charcoal rounded-lg shadow-lg px-3 py-2 flex items-center gap-2 z-10"
      >
        <div className="w-5 h-5 rounded-md bg-accent-blue flex items-center justify-center">
          <Bot className="w-3 h-3 text-white" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">AI Outbound Active</div>
          <div className="text-[8px] text-white/50">Running 5 campaigns</div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      </motion.div>

      {/* ── Floating: Lead score badge top-right ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-2 right-12 bg-white rounded-lg shadow-md border border-sand px-2.5 py-1.5 flex items-center gap-1.5 z-10"
      >
        <TrendingUp className="w-3 h-3 text-accent-blue" />
        <span className="text-[9px] font-bold text-charcoal">Score: 94</span>
        <div className="w-4 h-4 rounded-full bg-green-500 text-[8px] text-white font-bold flex items-center justify-center">A</div>
      </motion.div>
    </motion.div>
  );
}

export default function LeadGenerationOS() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* ──────── HERO — Left heading + Right illustration ──────── */}
      <section className="relative pt-28 pb-16 px-6 sm:pt-36 sm:pb-20 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Lead Generation OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Fill your pipeline.
                <br />
                <span className="text-warm-gray">AI handles</span>
                <br />
                the outreach.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                Your team shouldn&apos;t spend hours chasing cold leads. Our AI operating
                system captures, scores, nurtures, and books meetings automatically —
                across every channel — so your closers only talk to qualified prospects.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-all active:scale-95"
                >
                  Book a Discovery Call
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right — Illustration */}
            <div className="hidden lg:block">
              <LeadGenIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ──────── STATS — Full-width with descriptions ──────── */}
      <section className="py-16 px-6 bg-white border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { metric: "5×", label: "More qualified meetings", desc: "AI pre-qualifies every lead before your team picks up the phone" },
              { metric: "70%", label: "Less manual outreach", desc: "Automated sequences replace cold calls, follow-ups, and data entry" },
              { metric: "3×", label: "Pipeline velocity", desc: "Leads move from capture to meeting 3x faster with AI nurturing" },
              { metric: "45%", label: "Higher conversion rates", desc: "Smart scoring ensures your team focuses on leads ready to buy" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-2">{item.metric}</div>
                <div className="font-display text-sm font-semibold text-charcoal mb-1">{item.label}</div>
                <div className="text-text-muted text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── THE PROBLEM ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              The Problem
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              Your sales team is drowning in busywork. <br />
              The pipeline pays the price.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              You&apos;re spending on ads, building landing pages, running campaigns — but leads
              go cold before anyone follows up. Your best reps are stuck doing research, sending
              templated emails, and dialing numbers that never pick up. Meanwhile, competitors
              with AI-powered outreach are booking the meetings you should be having.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Clock,
                title: "Leads go cold fast",
                desc: "The average B2B lead is contacted 47 hours after filling out a form. By then, they've already talked to your competitors.",
              },
              {
                icon: Users,
                title: "Reps waste time on unqualified leads",
                desc: "Without scoring, your team treats every lead the same — spending hours on prospects who were never going to buy.",
              },
              {
                icon: BarChart3,
                title: "No visibility into what works",
                desc: "You can\u2019t tell which channels, sequences, or messaging actually drives conversions. You\u2019re flying blind on spend.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-xl bg-white border border-sand flex flex-col"
              >
                <item.icon className="w-5 h-5 text-charcoal/30 mb-4" />
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── HOW WE SOLVE IT — Vertical Flow ──────── */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              How We Solve It
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              We build an AI operating system <br />
              around your sales funnel.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mt-4">
              Not another CRM plugin. A complete system that captures leads from every channel,
              scores them with AI, runs personalized outreach, and books meetings on your calendar —
              all without your team lifting a finger.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Capture leads from every channel",
                desc: "We connect your website forms, landing pages, social ads, LinkedIn, and referral sources into one unified pipeline. Every lead is instantly captured, enriched with company data, and routed to the right workflow — no manual entry, no leads slipping through.",
                icon: Magnet,
                detail: "Web forms · Landing pages · Social ads · LinkedIn · Referral tracking",
              },
              {
                step: "02",
                title: "Score and prioritize with AI",
                desc: "Our AI analyzes behavioral signals, firmographic data, engagement history, and intent indicators to score every lead in real time. Your team sees a ranked pipeline — hottest leads at the top, tire-kickers filtered out automatically.",
                icon: Filter,
                detail: "Lead scoring · Intent detection · Firmographic enrichment · Behavioral analysis",
              },
              {
                step: "03",
                title: "Nurture with intelligent outreach",
                desc: "For leads not yet ready, the system deploys multi-channel sequences — personalized emails, LinkedIn touches, and SMS follow-ups. AI adapts messaging and timing based on each prospect\u2019s engagement, moving them down the funnel without manual effort.",
                icon: Mail,
                detail: "Email sequences · LinkedIn automation · SMS campaigns · Dynamic personalization",
              },
              {
                step: "04",
                title: "AI calls and books meetings",
                desc: "When a lead hits the right score threshold, our AI voice agent makes the call — qualifying the prospect, handling objections, and booking directly into your team\u2019s calendar. Your closers show up to meetings, not cold calls.",
                icon: Phone,
                detail: "AI voice calling · Meeting scheduling · Objection handling · Calendar sync",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="flex md:flex-col items-center gap-3 md:gap-0">
                    <div className="w-14 h-14 rounded-2xl bg-cream border border-sand flex items-center justify-center group-hover:border-accent-blue/30 group-hover:bg-accent-blue/5 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-charcoal/40 group-hover:text-accent-blue transition-colors duration-300" />
                    </div>
                    {i < 3 && <div className="hidden md:block w-px h-16 bg-sand mx-auto mt-3" />}
                  </div>

                  <div className="pb-6 md:pb-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display text-xs font-bold text-accent-blue/60 uppercase tracking-wider bg-accent-blue/5 px-2 py-1 rounded-full">
                        Step {item.step}
                      </span>
                    </div>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-3">{item.title}</h4>
                    <p className="text-text-muted leading-relaxed text-[15px] max-w-2xl mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.detail.split(" · ").map((tag, j) => (
                        <span
                          key={j}
                          className="text-[11px] font-medium text-charcoal/50 bg-cream border border-sand px-2.5 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── WHAT'S INCLUDED — Left text + Right list ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
                What&apos;s Included
              </h2>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
                A complete pipeline machine, <br />not another tool to configure.
              </h3>
              <p className="text-text-muted text-lg leading-relaxed">
                We don&apos;t hand you a login and walk away. We audit your funnel, build the
                automation layer, connect your existing tools, and stay on for 30 days to
                optimize performance until the pipeline is flowing.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Bot, title: "AI Voice & Chat Agent", desc: "Makes outbound calls, handles inbound inquiries, qualifies prospects, and books meetings — 24/7, in any language your market speaks." },
                { icon: Magnet, title: "Multi-Channel Lead Capture", desc: "Unified capture from web forms, social ads, LinkedIn, landing pages, and referrals. Every lead enriched and scored automatically." },
                { icon: BarChart3, title: "Conversion Analytics Dashboard", desc: "Track every touchpoint from first click to closed deal. See channel ROI, funnel drop-off, and rep performance in real time." },
                { icon: Zap, title: "Automated Nurture Sequences", desc: "AI-personalized email, LinkedIn, and SMS sequences that adapt based on prospect behavior. No manual follow-ups needed." },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 p-5 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cream border border-sand flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-charcoal mb-1">{feature.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────── OUR PROCESS — Timeline cards ──────── */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Our Process
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              From first call to live pipeline <br />
              in 4–6 weeks.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "Week 1",
                title: "Funnel Audit & Strategy",
                desc: "We map your current lead sources, sales process, and tech stack. You walk away with a clear automation roadmap showing exactly where AI will have the biggest impact on your pipeline.",
              },
              {
                step: "Week 2–4",
                title: "Build & Integrate",
                desc: "Our team connects your lead sources, builds AI scoring models, configures outreach sequences, and sets up the analytics dashboard. Everything is tested with real data before going live.",
              },
              {
                step: "Week 5–6",
                title: "Launch & Optimize",
                desc: "We go live with your team on standby. During the first 30 days, we monitor conversion rates, fine-tune AI messaging, and optimize sequences until your pipeline runs like clockwork.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-xl bg-cream border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col"
              >
                <span className="font-display text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/5 px-3 py-1 rounded-full self-start mb-5">
                  {item.step}
                </span>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CTA — Book a Call Card ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto rounded-2xl bg-charcoal text-white relative overflow-hidden">
          <div className="p-12 md:p-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Let&apos;s talk about filling <br />
                  your pipeline.
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                  Book a free 30-minute discovery call. We&apos;ll audit your current funnel,
                  show you where AI can book more meetings, and give you a clear
                  roadmap — no commitment required.
                </p>
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-medium tracking-tight text-charcoal rounded-xl bg-white hover:bg-white/90 transition-all text-base"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden lg:flex flex-col gap-4">
                {[
                  { icon: Clock, text: "30 minutes — that\u2019s all we need" },
                  { icon: Globe, text: "We work across Europe, any timezone" },
                  { icon: CheckCircle2, text: "Walk away with an actionable pipeline plan" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-white/60" />
                    </div>
                    <span className="text-white/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Subtle decorative element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
