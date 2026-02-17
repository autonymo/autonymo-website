"use client";

import { Link } from "@/i18n/navigation";
import {
  Settings2,
  Workflow,
  Cpu,
  Plug,
  Code2,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
  Clock,
  Zap,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import WhyWeDifferent from "@/components/WhyWeDifferent";
import FinalCTA from "@/components/FinalCTA";

/* ─── Custom Workflow Illustration ──────────────────────────── */
function WorkflowIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="bg-white rounded-2xl border border-sand shadow-xl shadow-charcoal/5 p-6 relative overflow-hidden">
        <div className="flex gap-1.5 mb-5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <Settings2 className="w-4 h-4 text-accent-blue" />
            </div>
            <span className="font-display text-sm font-bold text-charcoal">Workflow Engine</span>
          </div>
          <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Active</span>
        </div>
        <div className="bg-cream rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-charcoal">Active Workflows</span>
            <span className="text-[10px] text-text-muted">8 running</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 w-full">
              <div className="flex-1 bg-white rounded-lg border border-sand/60 p-2 flex items-center gap-2">
                <Zap className="w-3 h-3 text-accent-blue/50" />
                <div className="h-1.5 w-12 bg-charcoal/10 rounded-full" />
              </div>
              <ArrowRight className="w-3 h-3 text-sand flex-shrink-0" />
              <div className="flex-1 bg-white rounded-lg border border-sand/60 p-2 flex items-center gap-2">
                <Cpu className="w-3 h-3 text-accent-blue/50" />
                <div className="h-1.5 w-10 bg-charcoal/10 rounded-full" />
              </div>
            </div>
            <div className="w-px h-3 bg-sand" />
            <div className="flex items-center gap-3 w-full">
              <div className="flex-1 bg-accent-blue/5 rounded-lg border border-accent-blue/15 p-2 flex items-center gap-2">
                <Workflow className="w-3 h-3 text-accent-blue/50" />
                <div className="h-1.5 w-14 bg-accent-blue/10 rounded-full" />
              </div>
              <ArrowRight className="w-3 h-3 text-sand flex-shrink-0" />
              <div className="flex-1 bg-white rounded-lg border border-sand/60 p-2 flex items-center gap-2">
                <Plug className="w-3 h-3 text-accent-blue/50" />
                <div className="h-1.5 w-8 bg-charcoal/10 rounded-full" />
              </div>
            </div>
            <div className="w-px h-3 bg-sand" />
            <div className="flex items-center gap-3 w-full">
              <div className="flex-1 bg-white rounded-lg border border-sand/60 p-2 flex items-center gap-2">
                <LayoutDashboard className="w-3 h-3 text-accent-blue/50" />
                <div className="h-1.5 w-11 bg-charcoal/10 rounded-full" />
              </div>
              <ArrowRight className="w-3 h-3 text-sand flex-shrink-0" />
              <div className="flex-1 bg-green-50 rounded-lg border border-green-200/60 p-2 flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-green-500/50" />
                <div className="h-1.5 w-9 bg-green-200/50 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Workflows", value: "8", color: "text-charcoal" },
            { label: "Integrations", value: "14", color: "text-charcoal" },
            { label: "Uptime", value: "99.9%", color: "text-green-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-cream rounded-xl p-2.5 text-center">
              <div className={`font-display text-base font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[9px] text-text-muted mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 12, x: 12 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-sand shadow-lg p-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center">
          <Plug className="w-4 h-4 text-accent-blue" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">New integration</div>
          <div className="text-[10px] text-text-muted">New system connected</div>
        </div>
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

export default function CustomSolutions() {
  const solutions = [
    { title: "Process Automation", desc: "Turn manual, repetitive workflows into automated systems that run without human intervention." },
    { title: "Intelligent Document Processing", desc: "Extract, classify, and route information from documents, emails, and forms automatically." },
    { title: "Client & Lead Management", desc: "Custom CRM workflows, lead qualification, and communication automation tailored to your sales process." },
    { title: "Reporting & Business Intelligence", desc: "Dashboards and automated reports that show you what matters, without anyone compiling spreadsheets." },
    { title: "AI-Powered Communication", desc: "Voice agents, chat systems, and automated outreach that handle routine conversations." },
  ];

  const faqs = [
    { q: "What tools do you work with?", a: "We work with your existing tools. No forced migrations." },
    { q: "How long before we see results?", a: "First automation live within 4 weeks." },
    { q: "What if it doesn\u2019t work?", a: "If we can\u2019t find savings or deliver on time, you don\u2019t pay." },
    { q: "Do we need technical skills?", a: "No. We deploy, manage, and train your team." },
    { q: "What happens if we stop?", a: "You keep everything we built. It\u2019s yours." },
    { q: "How is this different from buying software?", a: "Software is a tool. We\u2019re an operations team." },
    { q: "What industries do you work with?", a: "We work across industries, manufacturing, professional services, agencies, and more. The common thread is complex operations with manual processes." },
    { q: "How much does it cost?", a: "Every engagement starts with a focused project to prove value. Book a call and we\u2019ll scope it based on your situation." },
    { q: "Can you work with our existing systems?", a: "Yes. We build on what you have. No forced migrations." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* ──────── T1: HERO ──────── */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="1000" y2="1000" stroke="rgba(163, 158, 151, 0.08)" strokeWidth="1" />
            <line x1="1000" y1="0" x2="0" y2="1000" stroke="rgba(163, 158, 151, 0.08)" strokeWidth="1" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Custom Solutions
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                AI operations built for your business.{" "}
                Not a template.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                For companies with complex operations and unique processes, we design, build,
                and manage AI systems tailored to how you actually work. We start with a focused
                engagement to prove value fast. Then scale from there.
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
              <WorkflowIllustration />
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
              Your team is spending thousands of hours on work that should be automated.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              You know there are processes in your business that could be faster, cheaper, or
              eliminated entirely. But every vendor sells their tool as the solution, without
              understanding how your business actually operates. The result: expensive implementations
              that don&apos;t fit, tools nobody uses, and the same manual work continuing underneath.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Clock, title: "Manual processes eating margin", desc: "Your team spends hours on data entry, report generation, coordination, and repetitive tasks that add no value." },
              { icon: Code2, title: "Tools that don\u2019t fit", desc: "You\u2019ve tried off-the-shelf software. It solved 60% of the problem and created new ones for the other 40%." },
              { icon: Cpu, title: "No internal AI expertise", desc: "You know AI could help but you don\u2019t have the team to evaluate, build, and maintain the right solutions." },
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
        industryExample="We don't sell a platform. We audit your operations first, find where time and money are leaking. Then build exactly what you need on the tools you already use. We stay to manage it, optimize it, and expand it as your needs evolve."
      />

      {/* ──────── T5: SOLUTION PORTFOLIO ──────── */}
      <section id="solutions" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">What We Deploy</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Built around your operations.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <div className="h-full p-6 rounded-xl bg-white border border-sand">
                  <span className="font-display text-3xl font-bold text-accent-blue/30 mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg font-bold text-charcoal mb-3">{sol.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-text-muted text-sm leading-relaxed mt-8 max-w-2xl">
            Every engagement starts with an operational audit. We find the opportunities, build the
            first solution, and prove value before scaling.
          </p>
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
              If we can&apos;t find at least €3,000/month in operational savings or the first automation isn&apos;t live in 4 weeks, you don&apos;t pay.
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
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Benchmarks from custom engagements.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Average audit identifies 8\u201312 automation opportunities",
              "First automation live within 4 weeks",
              "60% reduction in manual work from the first solution",
              "You own everything we build, no vendor lock-in",
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
      <FinalCTA verticalPhrase="your operations" />
    </div>
  );
}
