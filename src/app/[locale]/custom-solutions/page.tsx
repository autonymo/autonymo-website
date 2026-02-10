"use client";

import { Link } from "@/i18n/navigation";
import {
  Settings2,
  Workflow,
  Cpu,
  Lock,
  Plug,
  Code2,
  RefreshCw,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Globe,
  Zap,
  LayoutDashboard,
  Database,
  Users,
  Search,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

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
        {/* Window dots */}
        <div className="flex gap-1.5 mb-5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>

        {/* Dashboard header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <Settings2 className="w-4 h-4 text-accent-blue" />
            </div>
            <span className="font-display text-sm font-bold text-charcoal">Workflow Engine</span>
          </div>
          <span className="text-[10px] font-medium text-white bg-green-500 px-2 py-0.5 rounded-full">Active</span>
        </div>

        {/* Workflow visualization */}
        <div className="bg-cream rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-charcoal">Active Workflows</span>
            <span className="text-[10px] text-text-muted">8 running</span>
          </div>

          {/* Flow nodes */}
          <div className="flex flex-col items-center gap-2">
            {/* Row 1 */}
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

            {/* Row 2 */}
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

            {/* Row 3 */}
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

        {/* Stats row */}
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

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, y: 12, x: 12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-sand shadow-lg p-3 flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center">
          <Plug className="w-4 h-4 text-accent-blue" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-charcoal">New integration</div>
          <div className="text-[10px] text-text-muted">SAP connected successfully</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CustomSolutions() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* ──────── HERO — Left heading + Right illustration ──────── */}
      <section className="relative pt-28 pb-16 px-6 sm:pt-36 sm:pb-20 bg-cream overflow-hidden">
        {/* Lines background pattern */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="1000" y2="1000" stroke="rgba(163, 158, 151, 0.08)" strokeWidth="1" />
            <line x1="1000" y1="0" x2="0" y2="1000" stroke="rgba(163, 158, 151, 0.08)" strokeWidth="1" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
                Custom AI Solutions
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl leading-[1.08]">
                Your workflow.
                <br />
                <span className="text-warm-gray">Our AI engine.</span>
                <br />
                Built from scratch.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                Off-the-shelf tools don&apos;t fit your business. Your processes are unique,
                your systems are complex, and generic software creates more problems than
                it solves. We build custom AI systems designed around the way you actually work.
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
              <WorkflowIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ──────── WHO IT'S FOR ──────── */}
      <section className="py-16 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Who This Is For
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              If your industry doesn&apos;t fit a template, <br />
              you need a custom solution.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Enterprise teams",
                desc: "Complex, multi-department operations that need unified AI automation across sales, ops, finance, and support.",
              },
              {
                icon: Zap,
                title: "Scaling startups",
                desc: "Fast-growing companies that need to automate before hiring becomes the bottleneck. Build systems that scale with you.",
              },
              {
                icon: Wrench,
                title: "Niche industries",
                desc: "Logistics, legal, manufacturing, agencies — verticals where off-the-shelf tools don\u2019t understand your workflow.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-xl bg-cream border border-sand flex flex-col"
              >
                <item.icon className="w-5 h-5 text-charcoal/30 mb-4" />
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── THE PROBLEM ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              The Problem
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              You&apos;ve outgrown the tools that got you here.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Your team stitches together Zapier automations, spreadsheets, and 6 different SaaS tools just
              to do what should be one seamless process. Data lives in silos. Manual handoffs cause errors.
              And every &quot;quick fix&quot; adds another layer of complexity that makes the next fix even harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Database,
                title: "Data lives in silos",
                desc: "Customer info in your CRM, orders in your ERP, support tickets in Zendesk. Nothing talks to anything. Your team wastes hours bridging the gaps manually.",
              },
              {
                icon: RefreshCw,
                title: "Processes don\u2019t scale",
                desc: "What worked with 10 people breaks at 50. Manual handoffs, tribal knowledge, and \u201CJust ask Sarah\u201D don\u2019t work when you\u2019re growing fast.",
              },
              {
                icon: Code2,
                title: "Generic tools don\u2019t fit",
                desc: "You\u2019ve tried the platforms. They\u2019re built for someone else\u2019s workflow. You end up bending your process to fit the software instead of the other way around.",
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
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              How We Solve It
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              We build AI systems that work <br />
              the way your business actually operates.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mt-4">
              No templates. No cookie-cutter platforms. We start from your operations and
              engineer a system that automates your specific workflows, connects your specific
              tools, and solves your specific problems.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Deep-dive discovery audit",
                desc: "We spend a week with your team \u2014 shadowing operations, interviewing stakeholders, mapping data flows, and documenting every manual process. We don\u2019t just ask what you need. We watch how you work and find what you didn\u2019t know you could automate.",
                icon: Search,
                detail: "Process mapping \u00b7 Stakeholder interviews \u00b7 Data flow analysis \u00b7 Tech stack review",
              },
              {
                step: "02",
                title: "Solution architecture & blueprint",
                desc: "We design a custom AI system blueprint \u2014 mapping agents, integrations, data flows, and automation logic. You see exactly what we\u2019ll build, how the systems connect, and what the expected impact will be before we write a single line of code.",
                icon: LayoutDashboard,
                detail: "System design \u00b7 Integration mapping \u00b7 AI agent specification \u00b7 ROI projections",
              },
              {
                step: "03",
                title: "Build, integrate, and test",
                desc: "Our engineering team builds your custom AI agents, connects your existing tools (CRMs, ERPs, databases, APIs), creates automation workflows, and designs real-time dashboards. Everything is tested with your actual data before going live.",
                icon: Cpu,
                detail: "Custom AI agents \u00b7 System integrations \u00b7 Workflow automation \u00b7 Dashboard design",
              },
              {
                step: "04",
                title: "Launch, train, and optimize",
                desc: "We deploy alongside your team with full support. We train your staff, document everything, and stay on for 30 days of active optimization \u2014 tuning models, adjusting workflows, and making sure the system delivers real results from day one.",
                icon: RefreshCw,
                detail: "Team training \u00b7 Documentation \u00b7 30-day optimization \u00b7 Ongoing support",
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
                  <div className="flex md:flex-col items-center gap-0">
                    <div className="w-14 h-14 rounded-2xl bg-cream border border-sand flex items-center justify-center group-hover:border-accent-blue/30 group-hover:bg-accent-blue/5 transition-all duration-300 relative z-10">
                      <item.icon className="w-6 h-6 text-charcoal/40 group-hover:text-accent-blue transition-colors duration-300" />
                    </div>
                    {i < 3 && <div className="hidden md:block w-px flex-1 min-h-[calc(100%-3.5rem)] bg-sand mx-auto" />}
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

      {/* ──────── WHAT WE BUILD — Left text + Right list ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
                What We Build
              </h2>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
                Every system is built <br />around your operations.
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                We don&apos;t have a product you install. We have an engineering team
                that builds exactly what your business needs — trained on your data,
                connected to your tools, and designed for your team.
              </p>
              <div className="flex flex-col gap-3">
                {["Private infrastructure — your data stays yours", "Full source code ownership", "No vendor lock-in or recurring license fees", "Designed to evolve as your business grows"].map((item, i) => (
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
                { icon: Cpu, title: "Custom AI Agents", desc: "Purpose-built AI agents trained on your data, your business rules, and your edge cases. Not generic models \u2014 truly custom intelligence." },
                { icon: Plug, title: "System Integration Layer", desc: "Connect any combination of CRMs, ERPs, databases, APIs, and legacy systems into one intelligent, automated ecosystem." },
                { icon: Workflow, title: "Workflow Automation Engine", desc: "Map, design, and automate any business process end-to-end \u2014 from simple routing to complex multi-system orchestration." },
                { icon: LayoutDashboard, title: "Real-time Operations Dashboard", desc: "Custom dashboards designed around your KPIs, data sources, and decision-making patterns. See what matters, act on it instantly." },
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

      {/* ──────── EXISTING OS PLATFORMS ──────── */}
      <section className="py-24 px-6 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Or Start With a Proven System
            </h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              We also have ready-to-deploy <br />
              AI operating systems.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mt-4">
              If your business fits one of our existing verticals, you can get started faster
              with a pre-built system that&apos;s already proven — and still fully customizable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Real Estate OS",
                desc: "AI-powered lead response, listing management, and contract automation for real estate agencies.",
                href: "/real-estate-os" as const,
                color: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: CheckCircle2,
                title: "Health Services OS",
                desc: "Smart scheduling, patient reactivation, and clinical documentation for modern practices.",
                href: "/health-services-os" as const,
                color: "bg-emerald-50",
                iconColor: "text-emerald-600",
              },
              {
                icon: Zap,
                title: "Lead Generation OS",
                desc: "AI-powered lead capture, scoring, nurturing, and outbound calling to fill your pipeline automatically.",
                href: "/lead-generation-os" as const,
                color: "bg-purple-50",
                iconColor: "text-purple-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={item.href} className="block group h-full">
                  <div className="p-6 rounded-xl bg-cream border border-sand hover:border-warm-gray transition-all duration-300 flex flex-col h-full relative cursor-pointer">
                    <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-warm-gray group-hover:text-charcoal group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h4 className="font-display text-lg font-bold text-charcoal mb-2 pr-8">{item.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CTA — Book a Call Card ──────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto rounded-2xl bg-charcoal text-white relative overflow-hidden">
          <div className="p-12 md:p-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Have a complex workflow <br />
                  that needs AI?
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                  Start with a free discovery audit. We&apos;ll map your operations,
                  identify the highest-impact automation opportunities, and give you
                  a clear blueprint — even if you don&apos;t work with us.
                </p>
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center justify-center gap-2 font-medium tracking-tight text-charcoal text-base bg-white rounded-xl px-8 py-3.5 hover:opacity-90 transition-colors active:scale-95"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden lg:flex flex-col gap-4">
                {[
                  { icon: Clock, text: "30-minute call with a solutions architect" },
                  { icon: Search, text: "Free workflow audit and bottleneck analysis" },
                  { icon: CheckCircle2, text: "Custom blueprint with ROI projections" },
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
