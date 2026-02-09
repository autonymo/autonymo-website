"use client";

import { Link } from "@/i18n/navigation";
import {
  Building2,
  TrendingUp,
  Users,
  MessageSquare,
  BarChart3,
  Bot,
  Globe,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Clock,
  Target,
  CheckCircle2,
  Zap,
  Calendar,
  FileText,
  Bell,
} from "lucide-react";
import { motion } from "framer-motion";

/* ─── Dashboard Illustration ─────────────────────────────────── */
function RealEstateIllustration() {
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
              <Building2 className="w-2 h-2 text-accent-blue" />
            </div>
            <span className="text-[10px] text-text-muted font-medium">app.autonymo.com/dashboard</span>
          </div>
          <div className="w-14" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-[52px] bg-charcoal flex flex-col items-center py-4 gap-3.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-accent-blue flex items-center justify-center">
              <Building2 className="w-3.5 h-3.5 text-white" />
            </div>
            {[BarChart3, Users, MessageSquare, Calendar, FileText].map((Icon, i) => (
              <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white/10' : 'hover:bg-white/5'} transition-colors`}>
                <Icon className="w-3.5 h-3.5 text-white/40" />
              </div>
            ))}
            <div className="mt-auto w-7 h-7 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">JR</span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex-1 p-5 bg-cream/40 min-h-[340px]">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display text-sm font-bold text-charcoal">Lead Pipeline</div>
                <div className="text-[10px] text-text-muted">Tuesday, 17 Jun · Barcelona Office</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {['bg-accent-blue', 'bg-green-500', 'bg-yellow-500'].map((bg, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                      <span className="text-[7px] font-bold text-white">{['A','M','C'][i]}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {[
                { label: "Active Leads", value: "247", trend: "+18%", icon: Users },
                { label: "Avg Response", value: "< 2m", trend: "−73%", icon: Clock },
                { label: "Conversion", value: "34%", trend: "+12%", icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-2.5 border border-sand/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <stat.icon className="w-3 h-3 text-warm-gray" />
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">{stat.trend}</span>
                  </div>
                  <div className="font-display text-lg font-bold text-charcoal leading-none">{stat.value}</div>
                  <div className="text-[9px] text-text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mini chart */}
            <div className="bg-white rounded-xl border border-sand/50 p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-charcoal">Leads This Week</span>
                <span className="text-[9px] text-accent-blue font-medium">+24% vs last week</span>
              </div>
              <div className="flex items-end gap-1 h-10">
                {[35, 52, 41, 68, 55, 72, 48].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className={`w-full rounded-sm ${i === 5 ? 'bg-accent-blue' : 'bg-accent-blue/20'}`}
                      style={{ height: `${h * 0.55}%` }}
                    />
                    <span className="text-[7px] text-warm-gray">{'MTWTFSS'[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live lead feed */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-charcoal uppercase tracking-wider">Live Feed</span>
                <span className="text-[9px] text-text-muted">12 new today</span>
              </div>
              {[
                { name: "Maria G.", avatar: "MG", property: "3BR Eixample", status: "Viewing Booked", time: "2m", dot: "bg-green-400", avatarBg: "bg-purple-100 text-purple-600" },
                { name: "Carlos R.", avatar: "CR", property: "2BR Gràcia", status: "AI Qualifying", time: "5m", dot: "bg-accent-blue", avatarBg: "bg-blue-100 text-blue-600" },
                { name: "Anna K.", avatar: "AK", property: "Penthouse Born", status: "Follow-up Sent", time: "12m", dot: "bg-yellow-400", avatarBg: "bg-amber-100 text-amber-600" },
              ].map((lead, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 border border-sand/30 mb-1.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${lead.avatarBg}`}>
                    {lead.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-charcoal">{lead.name}</span>
                      <span className="text-[9px] text-text-muted truncate">· {lead.property}</span>
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

      {/* ── Floating: Deal Closed notification ── */}
      <motion.div
        initial={{ opacity: 0, y: 12, x: 12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-sand shadow-xl shadow-charcoal/10 p-3 flex items-center gap-2.5 z-10"
      >
        <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-4.5 h-4.5 text-green-600" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">Deal Closed!</div>
          <div className="text-[9px] text-text-muted">Calle Mayor 12 · €285,000</div>
          <div className="text-[9px] text-green-600 font-medium mt-0.5">Commission: €8,550</div>
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
          <div className="text-[10px] font-bold text-white">AI Agent Active</div>
          <div className="text-[8px] text-white/50">Handling 3 conversations</div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      </motion.div>

      {/* ── Floating: Notification bell top-right ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-2 right-12 bg-white rounded-lg shadow-md border border-sand px-2.5 py-1.5 flex items-center gap-1.5 z-10"
      >
        <Bell className="w-3 h-3 text-accent-blue" />
        <span className="text-[9px] font-bold text-charcoal">4 new leads</span>
        <div className="w-4 h-4 rounded-full bg-accent-blue text-[8px] text-white font-bold flex items-center justify-center">4</div>
      </motion.div>
    </motion.div>
  );
}

export default function RealEstateOS() {
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
                Real Estate OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your agents sell.
                <br />
                <span className="text-warm-gray">Our AI handles</span>
                <br />
                everything else.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                Leads come in at midnight. Buyers want answers on Sunday.
                Your team can&apos;t be everywhere — but your AI operating system can.
                We build the automation layer that captures, qualifies, and nurtures
                every lead so your agents focus on closing.
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
              <RealEstateIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ──────── STATS — Full-width with descriptions ──────── */}
      <section className="py-16 px-6 bg-white border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { metric: "3×", label: "Faster lead response", desc: "AI answers in under 2 minutes, day or night" },
              { metric: "40%", label: "More qualified leads", desc: "Smart scoring filters out tire-kickers automatically" },
              { metric: "60%", label: "Less manual work", desc: "Automated follow-ups, scheduling, and data entry" },
              { metric: "24/7", label: "Always-on availability", desc: "Your AI agents never sleep, take breaks, or miss a call" },
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
               Every hour counts in real estate. <br />
               Most teams are losing hours they don&apos;t even notice.
             </h3>
             <p className="text-text-muted text-lg leading-relaxed mb-8">
               A lead fills out a form at 11pm. By Monday morning, they&apos;ve already spoken to three other
               agencies. Your best agents know this, but they&apos;re buried in busywork. Updating the CRM,
               sending follow-up emails, coordinating viewings. The work that actually wins deals keeps
               getting pushed to the bottom of the list.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Clock,
                title: "Slow response times",
                desc: "The average real estate team takes 5+ hours to respond to a new lead. By then, the buyer has moved on.",
              },
              {
                icon: Users,
                title: "Manual lead management",
                desc: "Your agents copy-paste between portals, CRMs, and WhatsApp. Critical leads fall through the cracks.",
              },
              {
                icon: BarChart3,
                title: "No visibility into the pipeline",
                desc: "You don\u2019t know which leads are hot, which need a nudge, or which agents are actually following up.",
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
              around your real estate workflow.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mt-4">
              Not a plugin. Not another tool to learn. A complete system that plugs into your existing
              stack and handles the busywork so your team can sell.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Capture every lead, instantly",
                desc: "We connect your website forms, property portals (Idealista, Fotocasa, Immoscout), social ads, and WhatsApp into one unified inbox. When a lead comes in, your AI agent responds in under 60 seconds — asking the right qualifying questions, in the buyer\u2019s language.",
                icon: Target,
                detail: "Portal integrations \u00b7 Website forms \u00b7 Social media DMs \u00b7 WhatsApp Business",
              },
              {
                step: "02",
                title: "Qualify and score automatically",
                desc: "Not every inquiry is a serious buyer. Our AI scores each lead based on budget signals, timeline, engagement history, and behavior patterns. Your agents only see the opportunities worth pursuing — ranked by likelihood to close.",
                icon: TrendingUp,
                detail: "Lead scoring \u00b7 Budget detection \u00b7 Timeline analysis \u00b7 Intent signals",
              },
              {
                step: "03",
                title: "Nurture with intelligent follow-ups",
                desc: "For leads that aren\u2019t ready yet, the system runs personalized drip sequences — property recommendations based on their search criteria, market updates for their target neighborhoods, and gentle check-ins that feel human, not robotic.",
                icon: MessageSquare,
                detail: "Email sequences \u00b7 SMS reminders \u00b7 Property alerts \u00b7 Market reports",
              },
              {
                step: "04",
                title: "Book viewings and manage the pipeline",
                desc: "When a qualified lead is ready to move, the AI schedules viewings directly into your agents\u2019 calendars, sends confirmation reminders, and keeps the CRM updated in real-time. From first touch to signed contract — nothing falls through the cracks.",
                icon: Calendar,
                detail: "Calendar sync \u00b7 CRM updates \u00b7 Viewing reminders \u00b7 Document tracking",
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
                      {item.detail.split(" \u00b7 ").map((tag, j) => (
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
                A complete system, <br />not another tool to learn.
              </h3>
              <p className="text-text-muted text-lg leading-relaxed">
                We don&apos;t just hand you software and walk away. We audit your current workflow,
                build the automation layer around it, integrate with your existing tools, train your
                team, and stay on for 30 days to make sure everything runs smoothly.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Bot, title: "AI Voice & Chat Agent", desc: "Handles inbound calls and messages 24/7. Qualifies leads, answers questions, schedules viewings — in Spanish, English, German, or Catalan." },
                { icon: Globe, title: "Portal & CRM Integration", desc: "Connects to Idealista, Fotocasa, your website, and your CRM. All leads in one place, automatically enriched and scored." },
                { icon: BarChart3, title: "Real-time Analytics Dashboard", desc: "See response times, conversion rates, agent performance, and pipeline health at a glance. Know exactly where to focus." },
                { icon: Zap, title: "Automated Workflows", desc: "From lead capture to contract signing — trigger follow-ups, reminders, document requests, and status updates automatically." },
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
              From first call to live system <br />
              in 4–6 weeks.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "Week 1",
                title: "Discovery & Audit",
                desc: "We sit with your team, map your lead sources, understand your CRM setup, and identify the biggest time sinks. You walk away with a clear automation roadmap — even if you don\u2019t work with us.",
              },
              {
                step: "Week 2\u20134",
                title: "Build & Integrate",
                desc: "Our engineers connect your portals, build your AI agents, set up automation flows, and design your analytics dashboard. We test everything with real data before going live.",
              },
              {
                step: "Week 5\u20136",
                title: "Launch & Optimize",
                desc: "We launch with your team on standby. During the first 30 days, we monitor performance, fine-tune the AI responses, and train your agents until the system runs like clockwork.",
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
                  Let&apos;s talk about your <br />
                  real estate workflow.
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                  Book a free 30-minute discovery call. We&apos;ll audit your current setup,
                  show you where AI can save your team the most time, and give you a clear
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
                  { icon: Clock, text: "30 minutes — that's all we need" },
                  { icon: Globe, text: "We work across Europe, any timezone" },
                  { icon: CheckCircle2, text: "Walk away with an actionable automation plan" },
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
