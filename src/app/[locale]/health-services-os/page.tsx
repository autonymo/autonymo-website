"use client";

import { Link } from "@/i18n/navigation";
import {
  Heart,
  Calendar,
  ShieldCheck,
  FileText,
  Clock,
  Phone,
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Bell,
  Users,
  ClipboardList,
  UserCheck,
  Stethoscope,
  Brain,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

/* ─── Health Dashboard Illustration ─────────────────────────── */
function HealthIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
    >
      {/* Glow behind card */}
      <div className="absolute -inset-6 bg-gradient-to-br from-green-500/[0.04] via-transparent to-sand/20 rounded-[2rem] blur-2xl pointer-events-none" />

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
            <div className="w-3 h-3 rounded-sm bg-green-100 flex items-center justify-center">
              <Stethoscope className="w-2 h-2 text-green-600" />
            </div>
            <span className="text-[10px] text-text-muted font-medium">app.autonymo.com/practice</span>
          </div>
          <div className="w-14" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-[52px] bg-charcoal flex flex-col items-center py-4 gap-3.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-white" />
            </div>
            {[Calendar, Users, Activity, FileText, ShieldCheck].map((Icon, i) => (
              <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white/10' : 'hover:bg-white/5'} transition-colors`}>
                <Icon className="w-3.5 h-3.5 text-white/40" />
              </div>
            ))}
            <div className="mt-auto w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">DR</span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex-1 p-5 bg-cream/40 min-h-[340px]">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display text-sm font-bold text-charcoal">Today&apos;s Schedule</div>
                <div className="text-[10px] text-text-muted">Tuesday, 17 Jun · Dr. García&apos;s Clinic</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {[
                { label: "Appointments", value: "18", sub: "2 auto-filled", icon: Calendar },
                { label: "Show-up Rate", value: "96%", sub: "+12% vs last mo", icon: Users },
                { label: "Avg Wait", value: "4 min", sub: "−8 min improved", icon: Clock },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-2.5 border border-sand/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <stat.icon className="w-3 h-3 text-warm-gray" />
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">{stat.sub}</span>
                  </div>
                  <div className="font-display text-lg font-bold text-charcoal leading-none">{stat.value}</div>
                  <div className="text-[9px] text-text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Timeline / Schedule */}
            <div className="bg-white rounded-xl border border-sand/50 p-3 mb-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-bold text-charcoal">Morning Block</span>
                <span className="text-[9px] text-green-600 font-medium">100% booked</span>
              </div>
              <div className="space-y-1">
                {[
                  { time: "09:00", name: "Elena M.", type: "Follow-up", duration: "30m", status: "Checked In", color: "bg-green-400", barColor: "bg-green-100 border-green-200" },
                  { time: "09:30", name: "Javier P.", type: "New Patient", duration: "45m", status: "AI Intake Done", color: "bg-accent-blue", barColor: "bg-blue-50 border-blue-200" },
                  { time: "10:15", name: "Sofia L.", type: "Check-up", duration: "30m", status: "Reminder Sent", color: "bg-yellow-400", barColor: "bg-yellow-50 border-yellow-200" },
                  { time: "10:45", name: "Marco D.", type: "Consultation", duration: "30m", status: "Confirmed", color: "bg-green-400", barColor: "bg-green-50 border-green-200" },
                ].map((slot, i) => (
                  <div key={i} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 border ${slot.barColor}`}>
                    <span className="text-[9px] font-mono font-bold text-charcoal/60 w-8 shrink-0">{slot.time}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${slot.color} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold text-charcoal">{slot.name}</span>
                      <span className="text-[9px] text-text-muted ml-1">· {slot.type}</span>
                    </div>
                    <span className="text-[8px] font-medium text-text-muted bg-white px-1.5 py-0.5 rounded shrink-0">{slot.duration}</span>
                    <span className="text-[8px] font-medium text-green-600 shrink-0">{slot.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient satisfaction mini-bar */}
            <div className="bg-white rounded-xl border border-sand/50 p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-charcoal">Patient Satisfaction</span>
                <span className="text-[9px] text-accent-blue font-medium">96% this month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-cream rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{ width: '96%' }} />
                </div>
                <span className="text-[9px] font-bold text-green-600">96%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating: AI Voice Agent card ── */}
      <motion.div
        initial={{ opacity: 0, y: 12, x: 12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-sand shadow-xl shadow-charcoal/10 p-3 flex items-center gap-2.5 z-10"
      >
        <div className="w-9 h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
          <Phone className="w-4.5 h-4.5 text-accent-blue" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">Cancellation Recovered</div>
          <div className="text-[9px] text-text-muted">10:15 slot auto-filled from waitlist</div>
          <div className="text-[9px] text-green-600 font-medium mt-0.5">Revenue saved: €120</div>
        </div>
      </motion.div>

      {/* ── Floating: Compliance badge top-left ── */}
      <motion.div
        initial={{ opacity: 0, y: -8, x: -8 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-3 -left-3 bg-charcoal rounded-lg shadow-lg px-3 py-2 flex items-center gap-2 z-10"
      >
        <div className="w-5 h-5 rounded-md bg-green-500 flex items-center justify-center">
          <ShieldCheck className="w-3 h-3 text-white" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">HIPAA Compliant</div>
          <div className="text-[8px] text-white/50">End-to-end encrypted</div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      </motion.div>

      {/* ── Floating: No-show reduction badge ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-2 right-12 bg-white rounded-lg shadow-md border border-sand px-2.5 py-1.5 flex items-center gap-1.5 z-10"
      >
        <Activity className="w-3 h-3 text-green-500" />
        <span className="text-[9px] font-bold text-charcoal">No-shows ↓ 50%</span>
      </motion.div>
    </motion.div>
  );
}

export default function HealthServicesOS() {
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
                Health Services OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your team heals.
                <br />
                <span className="text-warm-gray">Our AI takes care of</span>
                <br />
                the rest.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                Your front desk is stretched thin. Patients miss appointments.
                Insurance paperwork keeps piling up. We build AI systems that
                handle scheduling, follow-ups, and patient communication so
                your clinical team can stay focused on what they do best.
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
              <HealthIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ──────── STATS — Full-width with descriptions ──────── */}
      <section className="py-16 px-6 bg-white border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { metric: "50%", label: "Fewer no-shows", desc: "AI-powered reminders and smart rescheduling keep your chairs full" },
              { metric: "35%", label: "Faster insurance processing", desc: "Automated eligibility checks and pre-authorizations" },
              { metric: "8hrs", label: "Admin time saved weekly", desc: "Per staff member, on scheduling, calls, and data entry" },
              { metric: "98%", label: "Patient satisfaction", desc: "Faster responses and smoother experiences across every touchpoint" },
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
              Your team spends more time on admin <br />
              than on patient care.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Your receptionist juggles phone calls, appointment changes, and insurance questions all day.
              Patients wait on hold. No-shows cost you thousands each month. And your clinicians spend
              evenings catching up on documentation instead of going home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Phone,
                title: "Overwhelmed front desk",
                desc: "Your staff answers the same 15 questions all day \u2014 hours, availability, insurance coverage. Patients give up and call somewhere else.",
              },
              {
                icon: Calendar,
                title: "No-shows and empty chairs",
                desc: "15\u201320% of appointments go unfilled because reminders are inconsistent and rescheduling is manual and slow.",
              },
              {
                icon: FileText,
                title: "Documentation overload",
                desc: "Clinical notes, treatment plans, follow-up letters \u2014 your team stays late to catch up on paperwork every single day.",
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
              We build an AI layer on top of <br />
              your practice management system.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mt-4">
              No rip-and-replace. We integrate with the tools you already use — your PMS, your
              phone system, your patient portal — and add intelligence on top. Everything gets
              smarter without disrupting your clinical workflows.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "AI handles patient communication",
                desc: "Your new AI voice agent picks up the phone, confirms appointments, answers FAQs, and handles rescheduling \u2014 in Spanish, English, German, or Catalan. It sounds natural and empathetic, and it works 24/7 so patients never hit voicemail again.",
                icon: Phone,
                detail: "Inbound calls \u00b7 Appointment confirmations \u00b7 FAQ handling \u00b7 After-hours coverage",
              },
              {
                step: "02",
                title: "Smart scheduling fills every gap",
                desc: "When a patient cancels, the AI immediately contacts patients on your waitlist and fills the slot \u2014 automatically. It optimizes your schedule based on treatment type, provider availability, and chair time to maximize your daily capacity.",
                icon: Calendar,
                detail: "Waitlist management \u00b7 Cancellation recovery \u00b7 Schedule optimization \u00b7 No-show prediction",
              },
              {
                step: "03",
                title: "Insurance and intake on autopilot",
                desc: "Before a patient walks in, their insurance is already verified, their intake forms are completed, and their history is summarized for the clinician. No clipboard. No scanning. No surprises at checkout.",
                icon: ClipboardList,
                detail: "Insurance verification \u00b7 Digital intake forms \u00b7 Patient history summary \u00b7 Pre-auth automation",
              },
              {
                step: "04",
                title: "Follow-ups and retention run automatically",
                desc: "After each visit, the AI sends personalized follow-up messages \u2014 care instructions, appointment reminders for the next visit, review requests, and recall notices for overdue patients. Your practice grows on autopilot.",
                icon: UserCheck,
                detail: "Post-visit follow-ups \u00b7 Recall campaigns \u00b7 Review requests \u00b7 Reactivation sequences",
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
                Everything your practice needs, <br />built for patient trust.
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                We design every system with privacy and compliance at its core.
                Your patient data stays encrypted, access-controlled, and fully
                under your ownership. We integrate — we don&apos;t replace.
              </p>
              <div className="flex flex-col gap-3">
                {["HIPAA-ready architecture", "End-to-end encryption", "Role-based access controls", "Full audit trail & logging"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-accent-blue" />
                    </div>
                    <span className="text-charcoal text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, title: "AI Patient Voice Agent", desc: "Handles calls, confirms appointments, answers questions, and routes emergencies \u2014 in multiple languages, 24/7. Patients never hit voicemail." },
                { icon: Calendar, title: "Smart Scheduling Engine", desc: "Fills cancellation gaps instantly, optimizes provider schedules, and reduces no-shows with predictive reminders." },
                { icon: ShieldCheck, title: "Insurance & Intake Automation", desc: "Verifies coverage, processes pre-authorizations, and collects intake forms before the patient even arrives." },
                { icon: Activity, title: "Practice Analytics Dashboard", desc: "Patient flow, revenue per provider, treatment acceptance rates, and operational KPIs \u2014 all in real-time." },
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
              From first conversation to <br />
              live system in 4\u20136 weeks.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "Week 1",
                title: "Practice Audit",
                desc: "We shadow your front desk, map patient touchpoints, review your PMS setup, and identify the biggest time and revenue drains. You get a detailed automation roadmap.",
              },
              {
                step: "Week 2\u20134",
                title: "Build & Integrate",
                desc: "We build your AI agents, connect your scheduling system, set up insurance automation, and design your analytics dashboard. Everything is tested with real patient data.",
              },
              {
                step: "Week 5\u20136",
                title: "Launch & Optimize",
                desc: "We go live alongside your team. For 30 days, we monitor every interaction, fine-tune the AI\u2019s tone and accuracy, and train your staff until the system runs seamlessly.",
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

      {/* ──────── CTA — Full-width Book a Call ──────── */}
      <section className="bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let&apos;s talk about freeing <br />
                your practice from admin.
              </h2>
              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-lg">
                Book a free 30-minute call. We&apos;ll walk through your current
                patient workflow, identify the biggest bottlenecks, and show you
                exactly how AI can help — no pressure, no obligation.
              </p>
              <div className="mt-8">
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-medium tracking-tight text-charcoal rounded-xl bg-white hover:bg-cream transition-all text-base active:scale-[0.98]"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              {[
                { icon: Clock, text: "30-minute call with a healthcare automation specialist" },
                { icon: ShieldCheck, text: "We understand HIPAA, GDPR, and patient privacy" },
                { icon: CheckCircle2, text: "Walk away with a clear automation roadmap" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.06] border border-white/[0.08]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white/50" />
                  </div>
                  <span className="text-white/80 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
