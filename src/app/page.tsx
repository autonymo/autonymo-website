"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Workflow, BarChart3, Star, Bot, Phone, Target, Activity, Zap, Settings2, Layers, ShieldCheck, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { LogoLoop } from "@/components/LogoLoop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <div className="bg-off-white rounded-b-3xl border-b border-sand/30 relative overflow-hidden">
        {/* Dotted Background Pattern */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(--color-warm-gray) 1.2px, transparent 1.2px)`,
            backgroundSize: '32px 32px'
          }}
        />
        {/* Hero Section */}
        <section className="relative pt-28 pb-40 px-6 sm:pt-36 sm:pb-48 lg:pt-40 lg:pb-60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative inline-flex items-center p-[1px] rounded-[4px] bg-transparent mb-6 overflow-hidden group"
              >
                {/* Subtle Border Base */}
                <div className="absolute inset-0 border border-sand rounded-[4px]" />

                {/* Spinning Lines */}
                <div
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(18,18,18,0.6)_30deg,transparent_60deg,transparent_180deg,rgba(18,18,18,0.6)_210deg,transparent_240deg)] animate-[spin_10s_linear_infinite]"
                  style={{ filter: 'blur(0.5px)' }}
                />

                {/* Badge Internal */}
                <div className="relative z-10 px-4 py-1 rounded-[3px] bg-white flex items-center justify-center w-full h-full">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                    Trusted By Top Performing Teams Globally
                  </span>
                </div>
              </motion.div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                Automate your business <br />
                with AI.
              </h1>
              <p className="mt-8 text-lg leading-8 text-text-muted max-w-2xl mx-auto sm:text-xl">
                We build AI systems that don't just look smart, they adapt to you and deliver real value.
              </p>
              <div className="mt-12 flex items-center justify-center relative">
                {/* Center Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,var(--color-sand)_0%,transparent_70%)] opacity-30 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative p-1 rounded-2xl border border-sand/20 bg-white/30 backdrop-blur-md"
                >
                  <Link
                    href="/book-call"
                    className="inline-flex items-center justify-center px-8 py-3 font-medium tracking-tight text-white rounded-xl bg-charcoal text-lg shadow-xl shadow-charcoal/10 hover:bg-black transition-all active:scale-95"
                  >
                    Book a Call
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>


        </section>

        {/* Featured Platforms Section */}
        <section className="pb-16 px-6 bg-transparent relative z-10 -mt-20 sm:-mt-24 lg:-mt-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "DentalOS",
                  intro: "The intelligent backbone for modern dental practices. Automate patient scheduling, AI-assisted diagnostics, and autonomous insurance verification in one unified interface.",
                  color: "bg-[#E8F0FE]"
                },
                {
                  title: "EstateOS",
                  intro: "Next-generation real estate management. AI-driven property valuation, automated lead nurturing, and seamless transaction orchestration for high-performing teams.",
                  color: "bg-[#F5F5F7]"
                },
                {
                  title: "CustomOS",
                  intro: "Your business logic, powered by our AI core. A modular, highly-flexible operating system designed to automate any complex enterprise workflow from the ground up.",
                  color: "bg-[#F0F4F8]"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-xl border border-sand p-8 relative flex flex-col h-full overflow-hidden group hover:border-warm-gray transition-colors duration-300 cursor-pointer"
                >
                  <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 transition-all duration-300" />

                  <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                    {card.title}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-8 min-h-[4.5rem] line-clamp-3">
                    {card.intro}
                  </p>

                  <div className={`mt-auto aspect-[4/3] rounded-2xl ${card.color} border border-sand/50 overflow-hidden relative group`}>
                    {/* Placeholder Visual */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/2 h-[1px] bg-charcoal/5 rotate-45" />
                      <div className="w-1/2 h-[1px] bg-charcoal/5 -rotate-45" />
                    </div>
                    <div className="absolute top-4 left-4 flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                      <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                      <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-white/40 backdrop-blur-sm rounded-xl border border-white/50" />
                    <div className="absolute top-1/4 right-4 w-12 h-12 bg-white/80 rounded-lg shadow-sm" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* AI Solutions Section */}
      <section id="ai-solutions" className="pt-24 pb-16 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-[1.1] tracking-tight">
              We are your one-stop partner to bring your company into the age of AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Automation Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />

              <h4 className="font-display text-xl font-bold text-charcoal mb-3">Automation Agents</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                Automate repetitive workflows and requests across your business. Free your team from manual tasks and make your operations faster, smarter, and more efficient.
              </p>

              <div className="mt-auto aspect-[16/8] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative group-hover:bg-sand/30 transition-colors">
                <div className="absolute top-3 left-3 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                </div>
                {/* Workflow Nodes Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4">
                    <div className="w-10 h-6 rounded bg-white/80 border border-sand shadow-sm" />
                    <div className="w-4 h-[1px] bg-charcoal/10 self-center" />
                    <div className="w-10 h-6 rounded bg-white/80 border border-sand shadow-sm" />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-white/40 backdrop-blur-sm border-t border-white/50" />
              </div>
            </motion.div>

            {/* AI Voice Agent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />

              <h4 className="font-display text-xl font-bold text-charcoal mb-3">AI Voice Agent</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-4">
                Handle inbound and outbound calls automatically qualify leads, answer questions, or schedule appointments in multiple languages.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Vision", "Planning", "Marketing"].map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full bg-off-white border border-sand text-[9px] font-bold uppercase tracking-wider text-charcoal/40">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mb-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-charcoal text-white text-[10px] font-bold hover:bg-black transition-all shadow-md shadow-charcoal/10 active:scale-95 w-fit">
                Try our AI Voice Agent Now
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="mt-auto aspect-[16/8] rounded-xl bg-[#E8F0FE]/50 border border-sand/50 overflow-hidden relative group-hover:bg-[#E8F0FE] transition-colors">
                <div className="absolute top-3 left-3 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-1 bg-charcoal/10 rounded-full" style={{ height: `${20 + i * 5}%` }} />
                  ))}
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-charcoal/40" />
                </div>
              </div>
            </motion.div>

            {/* Lead Qualification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />

              <h4 className="font-display text-xl font-bold text-charcoal mb-3">Lead Qualification</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-4">
                Capture and qualify leads automatically across every channel. Our systems prioritise the best opportunities and sync data directly with your CRM or ERP.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Conversion", "Sales"].map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full bg-off-white border border-sand text-[9px] font-bold uppercase tracking-wider text-charcoal/40">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto aspect-[16/8] rounded-xl bg-[#F5F5F7] border border-sand/50 overflow-hidden relative group-hover:bg-[#EAEAEA] transition-colors">
                <div className="absolute top-3 left-3 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                </div>
                <div className="absolute top-8 inset-x-4 flex flex-col gap-1.5">
                  <div className="h-5 bg-white/80 rounded border border-sand shadow-sm flex items-center px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/20 mr-2" />
                    <div className="w-10 h-1 bg-charcoal/5 rounded" />
                  </div>
                  <div className="h-5 bg-white/80 rounded border border-sand shadow-sm translate-x-2" />
                </div>
              </div>
            </motion.div>

            {/* Data & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />

              <h4 className="font-display text-xl font-bold text-charcoal mb-3">Data & Analytics</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                Turn your data into decisions. We integrate AI and ML models to extract insights, identify trends, and surface opportunities hidden in your business data.
              </p>

              <div className="mt-auto aspect-[16/8] rounded-xl bg-[#F0F4F8] border border-sand/50 overflow-hidden relative group-hover:bg-[#E2EAF1] transition-colors">
                <div className="absolute top-3 left-3 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                </div>
                <div className="absolute bottom-0 inset-x-0 h-3/4 flex items-end justify-around px-8 pb-3">
                  <div className="w-3 bg-charcoal/5 rounded-t h-[30%]" />
                  <div className="w-3 bg-charcoal/10 rounded-t h-[60%]" />
                  <div className="w-3 bg-charcoal/5 rounded-t h-[45%]" />
                  <div className="w-3 bg-charcoal/10 rounded-t h-[80%]" />
                </div>
                <div className="absolute top-4 right-4 w-10 h-6 bg-white/60 backdrop-blur-sm rounded border border-white/50 shadow-sm" />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 pt-12 border-t border-sand/50 pointer-events-none select-none overflow-hidden">
            <LogoLoop
              logos={[
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">OpenAI</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Anthropic</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">LangChain</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Mistral</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Pinecone</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">NVIDIA</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Meta</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Groq</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">HuggingFace</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">LlamaIndex</span> },
              ]}
              speed={35}
              gap={60}
              logoHeight={32}
              fadeOut={true}
              fadeOutColor="#ffffff"
              pauseOnHover={false}
              scaleOnHover={false}
            />
          </div>
        </div>
      </section>

      {/* What sets Autonymo apart Section */}
      <section id="benefits" className="py-24 px-6 bg-off-white border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              What sets Autonymo apart
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              Built for the demands <br />
              of the modern enterprise.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Speed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <Zap className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">Speed</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                Faster time-to-value with our enterprise AI solutions and AI agent marketplace.
              </p>
              <div className="mt-auto h-2 bg-off-white rounded-full overflow-hidden border border-sand/50">
                <div className="h-full bg-accent-blue w-3/4 animate-pulse" />
              </div>
            </motion.div>

            {/* Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <Settings2 className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">Control</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                The power of a standardized platform built for the demands of the enterprise.
              </p>
              <div className="mt-auto flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 h-1 bg-sand rounded-full overflow-hidden">
                    <div className="h-full bg-charcoal/20 w-1/2" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ready to get started (Dark) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-xl bg-[#1a1a1a] text-white transition-all duration-500 h-full flex flex-col relative shadow-2xl shadow-charcoal/20"
            >
              <div className="mb-6">
                <div className="bg-white/10 w-fit p-2 rounded-lg mb-4">
                  <Sparkles className="w-5 h-5 text-accent-blue" />
                </div>
                <h4 className="font-display text-2xl font-bold mb-2">Ready to get started?</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Let’s make this happen. <br />
                  We’re ready when you are.
                </p>
              </div>
              <div className="mt-auto flex justify-end">
                <button className="px-5 py-2.5 rounded-lg bg-off-white text-charcoal text-xs font-bold hover:bg-white transition-all active:scale-95 w-fit">
                  Talk to an expert
                </button>
              </div>
            </motion.div>

            {/* Flexibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <Share2 className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">Flexibility</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                Take control with seamless connection to any AI model, data source, enterprise app, or company infrastructure you need.
              </p>
              <div className="mt-auto flex gap-3 justify-center items-center">
                <div className="w-6 h-6 rounded-lg border border-sand bg-off-white" />
                <div className="w-3 h-px bg-sand" />
                <div className="w-8 h-8 rounded-full border border-sand bg-off-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                </div>
                <div className="w-3 h-px bg-sand" />
                <div className="w-6 h-6 rounded-lg border border-sand bg-off-white" />
              </div>
            </motion.div>

            {/* Deep Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <Layers className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">Deep capabilities</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise ecosystem it’s deployed into.
              </p>
              <div className="mt-auto flex flex-col gap-1.5">
                <div className="h-1 bg-accent-blue/40 w-full rounded" />
                <div className="h-1 bg-accent-blue/20 w-3/4 rounded" />
                <div className="h-1 bg-accent-blue/10 w-1/2 rounded" />
              </div>
            </motion.div>

            {/* Proven Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">Proven experience</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                We are an AI-first company that has built its technology and success hand-in-hand with global enterprise customers.
              </p>
              <div className="mt-auto flex items-end gap-1 px-4">
                {[4, 7, 5, 8, 6].map((h, i) => (
                  <div key={i} className="flex-1 bg-charcoal/5 rounded-t" style={{ height: `${h * 4}px` }} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6 bg-white border-y border-sand relative overflow-hidden">
        {/* Serpentine Dotted Line Path */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
            {/* Base Dotted Line */}
            <motion.path
              d="M 0,330 L 1000,330 C 1120,330 1120,480 1000,480 L 200,480 C 80,480 80,630 200,630 L 1200,630"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeDasharray="12 12"
              className="opacity-20"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            {/* Animated Pulse Line */}
            <motion.path
              d="M 0,330 L 1000,330 C 1120,330 1120,480 1000,480 L 200,480 C 80,480 80,630 200,630 L 1200,630"
              fill="none"
              stroke="#0066FF"
              strokeWidth="3"
              strokeDasharray="12 12"
              className="opacity-40"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              How It Works
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              Getting started is easy
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6 items-stretch">
            {[
              {
                step: "01",
                title: "Introductory Call",
                desc: "We learn about your business and identify the key areas where AI can make an impact."
              },
              {
                step: "02",
                title: "Consulting Phase",
                desc: "We analyse your operations in depth and define clear, high-value use cases for AI integration"
              },
              {
                step: "03",
                title: "Development",
                desc: "Your automations and agents are built, connected, and tested within your systems."
              },
              {
                step: "04",
                title: "Testing & Launch",
                desc: "Final testing to ensure everything runs smoothly before going live."
              },
              {
                step: "05",
                title: "Follow-Up & Learning",
                desc: "We provide documentation and training so your team can operate confidently, plus a 30-day support and optimisation period."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] min-h-[320px]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-4xl font-bold text-sand/40 group-hover:text-accent-blue/40 transition-colors duration-300">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-off-white border border-sand flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                  </div>
                </div>

                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Decorative Visual */}
                <div className="mt-8 pt-6 border-t border-sand/30 flex gap-2">
                  <div className="w-1/3 h-1 bg-off-white rounded-full overflow-hidden">
                    <div className="h-full bg-sand w-1/2" />
                  </div>
                  <div className="w-2/3 h-1 bg-off-white rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-off-white border-b border-sand relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Simple Pricing
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              Predictable costs, <br />
              unbeatable value.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Growth Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-10 rounded-2xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col relative overflow-hidden shadow-sm"
            >
              <div className="mb-8">
                <span className="px-3 py-1 rounded-full bg-off-white text-[10px] font-bold text-warm-gray uppercase tracking-widest border border-sand">
                  Monthly Partnership
                </span>
                <h4 className="font-display text-3xl font-bold text-charcoal mt-4 mb-2">Growth Plan</h4>
                <p className="text-text-muted text-sm leading-relaxed">Your external AI Partner that leads your AI strategy and implementation.</p>
              </div>

              <div className="flex flex-col mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-charcoal tracking-tight">5.000€</span>
                  <span className="text-text-muted text-sm">/month</span>
                </div>
                <span className="text-warm-gray text-[11px] mt-1 font-medium">(3 month minimum commitment)</span>
              </div>

              <div className="mb-6">
                <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-4">Plan Includes</p>
                <ul className="space-y-4 flex-grow">
                  {[
                    "Ongoing AI strategy, design, and implementation",
                    "1-2 fully managed Al agents (voice, automation, or data) per month",
                    "Monthly analytics, reporting, and optimisation sessions",
                    "Continuous integration with your CRM and ERP",
                    "Dedicated technical support and compliance monitoring",
                    "Private, custom infrastructure setup (if needed)"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-text-muted">
                      <div className="w-5 h-5 rounded-full bg-off-white border border-sand flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/book-call" className="w-full py-4 text-center text-xs font-bold text-charcoal border border-charcoal/10 rounded-xl hover:bg-off-white transition-all active:scale-95 group/btn flex items-center justify-center gap-2 mt-auto">
                Book a Free Call
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>

              {/* OS Decoration */}
              <div className="mt-8 pt-6 border-t border-sand/30 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-12 h-1.5 bg-off-white rounded-full overflow-hidden">
                    <div className="h-full bg-accent-blue w-1/3" />
                  </div>
                  <div className="w-8 h-1.5 bg-off-white rounded-full" />
                </div>
                <div className="w-4 h-4 rounded-full bg-off-white border border-sand animate-pulse" />
              </div>
            </motion.div>

            {/* Project Basis */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-10 rounded-2xl bg-[#1a1a1a] text-white flex flex-col relative overflow-hidden shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 px-6 py-2 bg-accent-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl shadow-lg">
                Ideal for Enterprise
              </div>

              <div className="mb-8">
                <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest border border-white/10">
                  Fixed Scope
                </span>
                <h4 className="font-display text-3xl font-bold mt-4 mb-2">Project Basis</h4>
                <p className="text-white/60 text-sm leading-relaxed">A complete AI system, built once and ready to scale with you.</p>
              </div>

              <div className="flex flex-col mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">Custom Quotation</span>
                </div>
                <span className="text-white/40 text-[11px] mt-1 font-medium">(project-based)</span>
              </div>

              <div className="mb-6">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-4">Project Includes</p>
                <ul className="space-y-4 flex-grow">
                  {[
                    "Discovery and design of your automation or AI use cases",
                    "Full implementation of one or more systems (Voice, Automation, or Data)",
                    "Integration with your existing tools",
                    "Testing, documentation, and 30-day follow-up period",
                    "Training for your team to manage and maintain the system",
                    "Option to upgrade to Growth Plan anytime"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-white/70">
                      <div className="w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(0,102,255,0.6)]" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/book-call" className="w-full py-4 text-center text-xs font-bold text-charcoal bg-off-white rounded-xl hover:bg-white transition-all active:scale-95 group/btn flex items-center justify-center gap-2 mt-auto">
                Book a Free Call
                <ArrowUpRight className="w-4 h-4 opacity-50 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>

              {/* OS Decoration */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-blue w-3/4" />
                  </div>
                  <div className="w-8 h-1.5 bg-white/10 rounded-full" />
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-[#1a1a1a] bg-white/10" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to automate <br />
            the unthinkable?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Join the forward-thinking teams using Autonymo to transform their operations into a competitive advantage.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center justify-center px-8 py-2.5 font-medium tracking-tight text-white rounded-lg bg-accent-blue text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>


    </div>
  );
}
