"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Building2, Heart, Settings2, Zap, BarChart3, Users, FileText, Calendar, Phone, Workflow, Cpu, Plug, LayoutDashboard } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const tabs = [
  {
    key: "realEstate" as const,
    icon: Building2,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    activeColor: "bg-blue-600",
    activeBorder: "border-blue-600",
    href: "/real-estate-os" as const,
    moduleIcons: [Zap, BarChart3, Users, FileText],
  },
  {
    key: "healthServices" as const,
    icon: Heart,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    activeColor: "bg-emerald-600",
    activeBorder: "border-emerald-600",
    href: "/health-services-os" as const,
    moduleIcons: [Calendar, Users, Phone, FileText],
  },
  {
    key: "custom" as const,
    icon: Settings2,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    activeColor: "bg-amber-600",
    activeBorder: "border-amber-600",
    href: "/custom-solutions" as const,
    moduleIcons: [Workflow, Cpu, Plug, LayoutDashboard],
  },
];

const moduleKeys = ["module1", "module2", "module3", "module4"] as const;

export function SolutionTabs() {
  const t = useTranslations("whatWeBuild");
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = tabs[activeTab];

  return (
    <section id="solutions" className="py-14 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4"
          >
            {t("label")}
          </motion.h2>
          <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-[1.1] tracking-tight">
            {t("title")}
          </h3>
          <p className="mt-4 text-text-muted text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab, index) => {
            const isActive = index === activeTab;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-charcoal text-white border-charcoal shadow-lg shadow-charcoal/10"
                    : "bg-white text-text-muted border-sand hover:border-warm-gray hover:text-charcoal"
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                {t(`tabs.${tab.key}.label`)}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border border-sand overflow-hidden shadow-sm"
          >
            {/* Tagline bar */}
            <div className="px-8 pt-6 pb-0">
              <p className="text-text-muted text-sm font-medium">
                {t(`tabs.${currentTab.key}.tagline`)}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Modules List */}
              <div className="p-8 flex flex-col gap-1">
                {moduleKeys.map((moduleKey, i) => {
                  const ModuleIcon = currentTab.moduleIcons[i];
                  return (
                    <div
                      key={moduleKey}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-cream/70 transition-colors duration-200"
                    >
                      <div className={`w-10 h-10 rounded-xl ${currentTab.color} flex items-center justify-center flex-shrink-0`}>
                        <ModuleIcon className={`w-5 h-5 ${currentTab.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm font-bold text-charcoal mb-1">
                          {t(`tabs.${currentTab.key}.modules.${moduleKey}.title`)}
                        </h4>
                        <p className="text-text-muted text-xs leading-relaxed">
                          {t(`tabs.${currentTab.key}.modules.${moduleKey}.description`)}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* CTA Link */}
                <div className="mt-4 ml-4">
                  <Link
                    href={currentTab.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-charcoal transition-colors group/link"
                  >
                    {t(`tabs.${currentTab.key}.cta`)}
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="p-8 flex items-center justify-center bg-sand/10 border-t lg:border-t-0 lg:border-l border-sand/50">
                <div className="w-full aspect-[4/3] rounded-xl bg-white border border-sand/80 overflow-hidden relative shadow-sm">
                  {/* System mockup visualization */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-sand/20 border-b border-sand/40 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                    <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                    <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                    <div className="ml-auto px-2 py-0.5 rounded bg-white/60 border border-sand/50">
                      <span className="text-[8px] font-bold text-charcoal/30 uppercase tracking-wider">
                        {t(`tabs.${currentTab.key}.label`)}
                      </span>
                    </div>
                  </div>

                  {/* Dashboard content area */}
                  <div className="absolute top-8 left-0 right-0 bottom-0 p-3 grid grid-cols-3 grid-rows-3 gap-2">
                    {/* Sidebar */}
                    <div className="row-span-3 bg-sand/15 rounded-lg border border-sand/30 p-2 flex flex-col gap-1.5">
                      {moduleKeys.map((_, i) => (
                        <div key={i} className={`h-5 rounded ${i === 0 ? `${currentTab.color} border ${currentTab.iconColor.replace('text-', 'border-')}/20` : 'bg-sand/20'} flex items-center px-1.5`}>
                          <div className={`w-2 h-2 rounded-sm ${i === 0 ? currentTab.iconColor.replace('text-', 'bg-') + '/30' : 'bg-charcoal/5'}`} />
                          <div className={`ml-1.5 h-1 rounded-full flex-1 ${i === 0 ? 'bg-charcoal/15' : 'bg-charcoal/5'}`} />
                        </div>
                      ))}
                      <div className="flex-1" />
                      <div className="h-4 rounded bg-sand/20 flex items-center px-1.5">
                        <div className="w-2 h-2 rounded-full bg-charcoal/5" />
                        <div className="ml-1.5 h-1 rounded-full w-2/3 bg-charcoal/5" />
                      </div>
                    </div>

                    {/* Stat cards */}
                    <div className="bg-white border border-sand/30 rounded-lg p-2 flex flex-col justify-between">
                      <div className="h-1 w-1/2 bg-charcoal/10 rounded-full" />
                      <div className="font-display text-sm font-bold text-charcoal/20">
                        {activeTab === 0 ? "3.2x" : activeTab === 1 ? "50%" : "85%"}
                      </div>
                      <div className="h-1 w-3/4 bg-success/20 rounded-full" />
                    </div>

                    <div className="bg-white border border-sand/30 rounded-lg p-2 flex flex-col justify-between">
                      <div className="h-1 w-1/3 bg-charcoal/10 rounded-full" />
                      <div className="font-display text-sm font-bold text-charcoal/20">
                        {activeTab === 0 ? "24/7" : activeTab === 1 ? "98%" : "10x"}
                      </div>
                      <div className="h-1 w-1/2 bg-accent-blue/20 rounded-full" />
                    </div>

                    {/* Chart area */}
                    <div className="col-span-2 row-span-2 bg-white border border-sand/30 rounded-lg p-2 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-1 w-1/4 bg-charcoal/10 rounded-full" />
                        <div className="flex gap-1">
                          <div className="w-4 h-2 rounded-sm bg-sand/30" />
                          <div className="w-4 h-2 rounded-sm bg-sand/30" />
                        </div>
                      </div>
                      <div className="flex-1 flex items-end gap-1 px-1">
                        {[35, 50, 42, 65, 55, 72, 60, 78, 68, 85, 75, 92].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col justify-end">
                            <div
                              className={`rounded-sm transition-all duration-500 ${i >= 8 ? currentTab.iconColor.replace('text-', 'bg-') + '/30' : 'bg-sand/30'}`}
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SolutionTabs;
