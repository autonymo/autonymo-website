"use client";

import { Link } from "@/i18n/navigation";
import {
  Target,
  Magnet,
  Filter,
  Mail,
  BarChart3,
  Phone,
  Database,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Bot,
  Clock,
  CheckCircle2,
  Users,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import WhyWeDifferent from "@/components/WhyWeDifferent";
import FinalCTA from "@/components/FinalCTA";

/* ─── Lead Gen Dashboard Illustration ─────────────────────────── */
function LeadGenIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="absolute -inset-6 bg-gradient-to-br from-accent-blue/[0.04] via-transparent to-sand/20 rounded-[2rem] blur-2xl pointer-events-none" />
      <div className="relative bg-white rounded-2xl border border-sand/80 shadow-2xl shadow-charcoal/8 overflow-hidden">
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
          <div className="flex-1 p-5 bg-cream/40 min-h-[340px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display text-sm font-bold text-charcoal">Lead Pipeline</div>
                <div className="text-[10px] text-text-muted">Tuesday, 17 Jun · All Channels</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {['bg-accent-blue', 'bg-purple-500', 'bg-green-500'].map((bg, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                      <span className="text-[7px] font-bold text-white">{['AI', 'S', 'M'][i]}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>
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
                    <div className={`w-full rounded-sm ${item.color}`} style={{ height: `${item.h * 0.55}%` }} />
                    <span className="text-[7px] text-warm-gray">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
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
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${lead.avatarBg}`}>{lead.avatar}</div>
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
      <motion.div initial={{ opacity: 0, y: 12, x: 12 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-sand shadow-xl shadow-charcoal/10 p-3 flex items-center gap-2.5 z-10">
        <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
          <Calendar className="w-4.5 h-4.5 text-green-600" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">Meeting Booked!</div>
          <div className="text-[9px] text-text-muted">Sarah L. · Tomorrow 2pm</div>
          <div className="text-[9px] text-green-600 font-medium mt-0.5">Via AI cold call</div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -8, x: -8 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -top-3 -left-3 bg-charcoal rounded-lg shadow-lg px-3 py-2 flex items-center gap-2 z-10">
        <div className="w-5 h-5 rounded-md bg-accent-blue flex items-center justify-center">
          <Bot className="w-3 h-3 text-white" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">AI Outbound Active</div>
          <div className="text-[8px] text-white/50">Running 5 campaigns</div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="absolute -top-2 right-12 bg-white rounded-lg shadow-md border border-sand px-2.5 py-1.5 flex items-center gap-1.5 z-10">
        <TrendingUp className="w-3 h-3 text-accent-blue" />
        <span className="text-[9px] font-bold text-charcoal">Score: 94</span>
        <div className="w-4 h-4 rounded-full bg-green-500 text-[8px] text-white font-bold flex items-center justify-center">A</div>
      </motion.div>
    </motion.div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-sand">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer">
          <span className="font-display text-base font-semibold text-charcoal pr-4">{question}</span>
          <ChevronDown className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
              <p className="text-text-muted text-sm leading-relaxed pb-5">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function LeadGenerationOS() {
  const solutions = [
    { title: "Outbound Engine", promise: "Qualified conversations in your inbox. Every day.", desc: "We build, launch, and manage your outbound campaigns across email and LinkedIn. You show up to calls with pre-qualified prospects." },
    { title: "Lead Qualification System", promise: "Only talk to people who are ready to buy.", desc: "Every lead is scored and qualified before reaching your calendar. No more wasting time on tire-kickers." },
    { title: "Booking & Nurture Pipeline", promise: "From first touch to booked call. Fully automated.", desc: "Leads receive the right follow-up at the right time. When they\u2019re ready, they book directly on your calendar." },
  ];

  const faqs = [
    { q: "What tools do you work with?", a: "We work with your existing tools. No forced migrations." },
    { q: "How long before we see results?", a: "First automation live within 4 weeks." },
    { q: "What if it doesn\u2019t work?", a: "If we can\u2019t find savings or deliver on time, you don\u2019t pay." },
    { q: "Do we need technical skills?", a: "No. We deploy, manage, and train your team." },
    { q: "What happens if we stop?", a: "You keep everything we built. It\u2019s yours." },
    { q: "How is this different from buying software?", a: "Software is a tool. We\u2019re an operations team." },
    { q: "What channels do you use?", a: "We build on the channels that work for your market, typically email and LinkedIn, adapted to your audience." },
    { q: "Do I need to be involved?", a: "Only for initial setup and approving messaging. After that, the system runs and we manage it." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* ──────── T1: HERO ──────── */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Lead Generation OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your calendar full.{" "}
                Every week. On autopilot.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                We build and run the lead generation systems that keep your pipeline full,
                from prospecting to qualification to booking. Deployed, managed, and continuously
                improved by our team.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-a-call" className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-all active:scale-95">
                  Book a Free Assessment
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
                <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3.5 font-medium tracking-tight text-charcoal text-base rounded-xl bg-white border border-charcoal/15 hover:border-charcoal/30 transition-all active:scale-95">
                  See how it works
                  <ArrowDown className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <div className="hidden lg:block">
              <LeadGenIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ──────── T2: SOCIAL PROOF BAR ──────── */}
      {/* Skipped, no real client data yet */}

      {/* ──────── T3: THE PROBLEM ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">The Problem</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              You know you need more leads. You just don&apos;t have time to build the machine.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              You&apos;ve tried cold email tools, LinkedIn automation, maybe even hired a VA.
              Some of it worked for a while, none of it stuck. Building a lead generation system
              that runs consistently takes expertise and daily attention and you&apos;re too
              busy delivering for current clients to maintain it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: TrendingUp, title: "Feast or famine pipeline", desc: "Some months are great, others are dry. Without a consistent system, revenue is unpredictable." },
              { icon: Database, title: "Tools without a system", desc: "You\u2019ve bought the software but nobody\u2019s running it properly. Sequences stop, lists go stale, follow-ups fall through." },
              { icon: Clock, title: "No time to prospect AND deliver", desc: "You\u2019re choosing between finding new clients and serving existing ones. You shouldn\u2019t have to." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="p-6 rounded-xl bg-white border border-sand flex flex-col">
                <item.icon className="w-5 h-5 text-charcoal/30 mb-4" />
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── T4: WHY WE'RE DIFFERENT ──────── */}
      <WhyWeDifferent
        industryExample="Most lead gen agencies sell you leads. We build and operate your entire acquisition system: outbound, nurture, qualification, and booking. And we keep optimizing it monthly."
      />

      {/* ──────── T5: SOLUTION PORTFOLIO ──────── */}
      <section id="solutions" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">What We Deploy</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Your pipeline, fully automated.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <div className="h-full p-6 rounded-xl bg-white border border-sand">
                  <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg font-bold text-charcoal mb-1">{sol.title}</h4>
                  <p className="text-accent-blue text-sm font-medium mb-3">{sol.promise}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── T6: HOW TO GET STARTED ──────── */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">How to Get Started</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">Start with one win. Scale from there.</h3>
            <p className="text-text-muted text-lg leading-relaxed mb-12">
              We begin with a focused engagement: audit your operations, identify the biggest
              opportunities, and put your first automation live, all within 4 weeks.
              If the results make sense, we expand. If not, you keep everything we built and
              walk away. No lock-in. No risk.
            </p>
            <div className="flex flex-col items-center gap-4 mb-12">
              {[
                { label: "Audit", desc: "We find what matters" },
                { label: "Build", desc: "First automation live" },
                { label: "Decide", desc: "You choose what\u2019s next" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  {i > 0 && <div className="w-px h-6 bg-sand mb-4" />}
                  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-center gap-4 px-8 py-4 rounded-xl bg-cream border border-sand">
                    <span className="font-display text-sm font-bold text-accent-blue uppercase">{step.label}</span>
                    <span className="text-text-muted text-sm">{step.desc}</span>
                  </motion.div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mb-8 italic">
              If we can&apos;t deliver a working lead generation system within 4 weeks, you don&apos;t pay.
            </p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-tight text-white rounded-xl bg-charcoal text-base shadow-xl shadow-charcoal/10 hover:bg-black transition-all active:scale-95">
              Book a Free Assessment
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────── T7: PROCESS ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">How It Works</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">From first call to live system in 4 weeks.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Step 1", title: "Book a call", desc: "15-minute assessment to understand your situation and whether we can help." },
              { step: "Step 2", title: "We audit your operations", desc: "Weeks 1\u20132: We map your processes, find where time and money are leaking, and put a number on each." },
              { step: "Step 3", title: "First automation goes live", desc: "Weeks 3\u20134: We take the biggest opportunity and build it. Live, working, saving you time." },
              { step: "Step 4", title: "You decide what\u2019s next", desc: "Based on results, we map out what else could be automated. You choose the pace." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="group p-6 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col">
                <span className="font-display text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/5 px-3 py-1 rounded-full self-start mb-5">{item.step}</span>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── T8: WHAT TO EXPECT ──────── */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">What to Expect</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">What your pipeline can expect.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Typical audit identifies 8\u201312 automation opportunities",
              "First automation live within 4 weeks",
              "Average business saves 15\u201320 hours/month from the first solution",
              "Lead response time drops from hours to seconds",
            ].map((text, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-start gap-3 p-4 rounded-xl bg-cream border border-sand">
                <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-charcoal leading-relaxed">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── T9: FAQ ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">FAQ</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-12">Common questions</h3>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────── T10: FINAL CTA ──────── */}
      <FinalCTA verticalPhrase="your pipeline" />
    </div>
  );
}
