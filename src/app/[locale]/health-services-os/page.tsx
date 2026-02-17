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
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
  Users,
  Stethoscope,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import WhyWeDifferent from "@/components/WhyWeDifferent";
import FinalCTA from "@/components/FinalCTA";

/* ─── Health Dashboard Illustration ─────────────────────────── */
function HealthIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="absolute -inset-6 bg-gradient-to-br from-green-500/[0.04] via-transparent to-sand/20 rounded-[2rem] blur-2xl pointer-events-none" />
      <div className="relative bg-white rounded-2xl border border-sand/80 shadow-2xl shadow-charcoal/8 overflow-hidden">
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
          <div className="flex-1 p-5 bg-cream/40 min-h-[340px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display text-sm font-bold text-charcoal">Today&apos;s Schedule</div>
                <div className="text-[10px] text-text-muted">Tuesday, 17 Jun · Dr. García&apos;s Clinic</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>
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
      <motion.div initial={{ opacity: 0, y: 12, x: 12 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -bottom-5 -right-5 bg-white rounded-xl border border-sand shadow-xl shadow-charcoal/10 p-3 flex items-center gap-2.5 z-10">
        <div className="w-9 h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
          <Phone className="w-4.5 h-4.5 text-accent-blue" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">Cancellation Recovered</div>
          <div className="text-[9px] text-text-muted">10:15 slot auto-filled from waitlist</div>
          <div className="text-[9px] text-green-600 font-medium mt-0.5">Revenue saved: €120</div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -8, x: -8 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -top-3 -left-3 bg-charcoal rounded-lg shadow-lg px-3 py-2 flex items-center gap-2 z-10">
        <div className="w-5 h-5 rounded-md bg-green-500 flex items-center justify-center">
          <ShieldCheck className="w-3 h-3 text-white" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">HIPAA Compliant</div>
          <div className="text-[8px] text-white/50">End-to-end encrypted</div>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="absolute -top-2 right-12 bg-white rounded-lg shadow-md border border-sand px-2.5 py-1.5 flex items-center gap-1.5 z-10">
        <Activity className="w-3 h-3 text-green-500" />
        <span className="text-[9px] font-bold text-charcoal">No-shows ↓ 50%</span>
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

export default function HealthServicesOS() {
  const solutions = [
    { title: "Dormant Patient Reactivation", promise: "Bring back patients who haven\u2019t visited in months.", desc: "Patients who are overdue for treatment receive personalized, automated outreach. They book directly, no manual calls from your front desk needed." },
    { title: "Multi-Doctor Booking System", promise: "Every practitioner\u2019s schedule stays full, without the coordination headaches.", desc: "Appointments are scheduled intelligently across doctors, rooms, and availability. Conflicts disappear. Empty slots get filled." },
    { title: "Patient Communication Manager", promise: "Every patient gets the right message at the right time.", desc: "Reminders, follow-ups, and updates flow automatically. Your patients feel cared for. Your team doesn\u2019t spend hours on the phone." },
    { title: "Post-Visit Review Collector", promise: "Turn happy patients into five-star reviews. Automatically.", desc: "After every visit, patients receive a simple prompt to leave a review. Your online reputation grows without anyone asking awkwardly in person." },
  ];

  const faqs = [
    { q: "What tools do you work with?", a: "We work with your existing tools. No forced migrations." },
    { q: "How long before we see results?", a: "First automation live within 4 weeks." },
    { q: "What if it doesn\u2019t work?", a: "If we can\u2019t find savings or deliver on time, you don\u2019t pay." },
    { q: "Do we need technical skills?", a: "No. We deploy, manage, and train your team." },
    { q: "What happens if we stop?", a: "You keep everything we built. It\u2019s yours." },
    { q: "How is this different from buying software?", a: "Software is a tool. We\u2019re an operations team." },
    { q: "Will my staff need technical skills?", a: "No. We train your team on every new system. If they can use a phone, they can use what we build." },
    { q: "We already use our own practice management system", a: "We integrate with your existing systems. No migration needed." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      {/* ──────── T1: HERO ──────── */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Health Services OS
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your practitioners treat.{" "}
                Our AI fills the chairs.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                We become your clinic&apos;s AI operations team. Reactivate dormant patients,
                fill empty appointment slots, automate patient communication. All deployed on
                your existing systems, managed by our team, and continuously improved.
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
              <HealthIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ──────── T2: SOCIAL PROOF BAR ──────── */}
      <section className="py-4 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium text-text-muted/60 tracking-wide">
            Deployed for clinics across Spain.
          </p>
        </div>
      </section>

      {/* ──────── T3: THE PROBLEM ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">The Problem</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              Empty chairs cost you thousands every week. And your front desk can&apos;t fix it.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              You have hundreds of patients who haven&apos;t come back in months. Meanwhile, your
              team is manually calling, texting, and following up, when they have time, which
              isn&apos;t often. Appointments get missed, reviews don&apos;t get collected, and
              scheduling across multiple practitioners is a daily headache. The result: empty
              slots that should be generating revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Users, title: "Dormant patients not coming back", desc: "Your database has hundreds of patients who need treatment but haven\u2019t booked. Nobody has time to reach out to all of them." },
              { icon: Calendar, title: "Scheduling chaos", desc: "Coordinating appointments across multiple doctors, rooms, and availability windows takes hours of manual work every week." },
              { icon: Clock, title: "No time for patient follow-up", desc: "Post-visit reviews, appointment reminders, and reactivation messages fall through the cracks because your team is already stretched thin." },
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
        industryExample="When we audit a clinic, we typically find that 40-60% of the patient database hasn't been contacted in over 6 months. We don't sell you scheduling software and leave. We build the systems, train your staff, and optimize monthly."
      />

      {/* ──────── T5: SOLUTION PORTFOLIO ──────── */}
      <section id="solutions" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">What We Deploy</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Your practice, fully equipped.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              If we can&apos;t find significant operational savings or the first automation isn&apos;t live in 4 weeks, you don&apos;t pay.
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
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">What your practice can expect.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Typical clinic audit identifies 8\u201312 automation opportunities",
              "First automation live within 4 weeks",
              "Average practice saves 15\u201320 hours/month from the first solution",
              "Patient response time drops from hours to seconds",
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
      <FinalCTA verticalPhrase="your practice" />
    </div>
  );
}
