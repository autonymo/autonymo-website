"use client";

import React, { memo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Heart,
  Settings2,
  Zap,
  BarChart3,
  Users,
  FileText,
  Calendar,
  Phone,
  Workflow,
  Cpu,
  Plug,
  LayoutDashboard,
  TrendingUp,
  Target,
  Magnet,
  Filter,
  Mail,
  Clock,
  Bell,
  CheckCircle2,
  Activity,
  MessageSquare,
  Shield,
  Database,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import CardSwap, { Card } from "./CardSwap";

const tabs = [
  {
    key: "realEstate" as const,
    icon: Building2,
    href: "/real-estate-os" as const,
    moduleIcons: [Zap, BarChart3, Users, FileText],
  },
  {
    key: "healthServices" as const,
    icon: Heart,
    href: "/health-services-os" as const,
    moduleIcons: [Calendar, Users, Phone, FileText],
  },
  {
    key: "leadGeneration" as const,
    icon: Target,
    href: "/lead-generation-os" as const,
    moduleIcons: [Magnet, Filter, Mail, Phone],
  },
  {
    key: "custom" as const,
    icon: Settings2,
    href: "/custom-solutions" as const,
    moduleIcons: [Workflow, Cpu, Plug, LayoutDashboard],
  },
];

const moduleKeys = ["module1", "module2", "module3", "module4"] as const;

/* ── Real Estate OS Illustration ────────────────────────────── */
const RealEstateIllustration = memo(function RealEstateIllustration() {
  return (
    <div className="w-full h-full rounded-xl bg-white border border-sand/80 overflow-hidden relative shadow-sm">
      {/* Title bar */}
      <div className="absolute top-0 left-0 right-0 h-9 bg-[#FAFAF8] border-b border-sand/40 flex items-center px-4 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="ml-3 h-4 w-24 bg-charcoal/5 rounded" />
        <div className="ml-auto flex gap-1.5">
          <div className="h-5 px-2 rounded bg-charcoal/[0.03] border border-charcoal/[0.06] flex items-center gap-1">
            <Bell className="w-2.5 h-2.5 text-charcoal/20" />
            <div className="w-3 h-3 rounded-full bg-accent-blue/15 flex items-center justify-center">
              <span className="text-[6px] font-bold text-accent-blue/60">3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-9 left-0 right-0 bottom-0 flex">
        {/* Sidebar */}
        <div className="w-[72px] border-r border-sand/30 bg-[#FAFAF8] p-2 flex flex-col gap-1">
          <div className="h-6 rounded bg-charcoal/[0.06] flex items-center px-1.5 gap-1">
            <Zap className="w-2.5 h-2.5 text-charcoal/25" />
            <div className="h-1 w-6 bg-charcoal/10 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <Building2 className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-5 bg-charcoal/5 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <Users className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-7 bg-charcoal/5 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <FileText className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-4 bg-charcoal/5 rounded-full" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 flex flex-col gap-2.5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="h-1 w-6 bg-charcoal/8 rounded-full" />
                <TrendingUp className="w-2.5 h-2.5 text-success/40" />
              </div>
              <span className="font-display text-xs font-bold text-charcoal/30">12</span>
              <div className="h-0.5 w-full bg-success/10 rounded-full">
                <div className="h-full w-3/4 bg-success/25 rounded-full" />
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="h-1 w-5 bg-charcoal/8 rounded-full" />
                <Clock className="w-2.5 h-2.5 text-accent-blue/40" />
              </div>
              <span className="font-display text-xs font-bold text-charcoal/30">4s</span>
              <div className="h-0.5 w-full bg-accent-blue/10 rounded-full">
                <div className="h-full w-[90%] bg-accent-blue/25 rounded-full" />
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="h-1 w-7 bg-charcoal/8 rounded-full" />
                <CheckCircle2 className="w-2.5 h-2.5 text-charcoal/20" />
              </div>
              <span className="font-display text-xs font-bold text-charcoal/30">94%</span>
              <div className="h-0.5 w-full bg-charcoal/5 rounded-full">
                <div className="h-full w-[94%] bg-charcoal/10 rounded-full" />
              </div>
            </div>
          </div>

          {/* Lead feed */}
          <div className="flex-1 bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between mb-0.5">
              <div className="h-1.5 w-14 bg-charcoal/10 rounded-full" />
              <div className="h-3 px-1.5 rounded bg-accent-blue/8 flex items-center">
                <span className="text-[6px] font-semibold text-accent-blue/50">Live</span>
              </div>
            </div>
            {/* Lead rows */}
            {[
              { status: "new", time: "2s" },
              { status: "qualified", time: "1m" },
              { status: "contacted", time: "5m" },
              { status: "new", time: "8s" },
            ].map((lead, i) => (
              <div key={i} className="flex items-center gap-1.5 h-5 px-1.5 rounded bg-white/80 border border-sand/20">
                <div className={`w-1 h-1 rounded-full ${lead.status === "new" ? "bg-accent-blue/40" : lead.status === "qualified" ? "bg-success/40" : "bg-charcoal/15"}`} />
                <div className="h-1 w-10 bg-charcoal/8 rounded-full" />
                <div className="h-1 w-6 bg-charcoal/5 rounded-full" />
                <div className="ml-auto flex items-center gap-1">
                  <span className="text-[6px] text-charcoal/20 font-medium">{lead.time}</span>
                  {lead.status === "new" && (
                    <div className="h-3 px-1 rounded bg-accent-blue/8 flex items-center">
                      <span className="text-[5px] font-semibold text-accent-blue/50">NEW</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

/* ── Health Services OS Illustration ────────────────────────── */
const HealthIllustration = memo(function HealthIllustration() {
  return (
    <div className="w-full h-full rounded-xl bg-white border border-sand/80 overflow-hidden relative shadow-sm">
      {/* Title bar */}
      <div className="absolute top-0 left-0 right-0 h-9 bg-[#FAFAF8] border-b border-sand/40 flex items-center px-4 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="ml-3 h-4 w-28 bg-charcoal/5 rounded" />
        <div className="ml-auto flex gap-1.5">
          <div className="h-5 px-2 rounded bg-charcoal/[0.03] border border-charcoal/[0.06] flex items-center gap-1">
            <Activity className="w-2.5 h-2.5 text-charcoal/20" />
          </div>
        </div>
      </div>

      <div className="absolute top-9 left-0 right-0 bottom-0 flex">
        {/* Sidebar */}
        <div className="w-[72px] border-r border-sand/30 bg-[#FAFAF8] p-2 flex flex-col gap-1">
          <div className="h-6 rounded bg-charcoal/[0.06] flex items-center px-1.5 gap-1">
            <Calendar className="w-2.5 h-2.5 text-charcoal/25" />
            <div className="h-1 w-6 bg-charcoal/10 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <Users className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-5 bg-charcoal/5 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <MessageSquare className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-7 bg-charcoal/5 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <Shield className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-4 bg-charcoal/5 rounded-full" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 flex flex-col gap-2.5">
          {/* Calendar grid */}
          <div className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between mb-0.5">
              <div className="h-1.5 w-12 bg-charcoal/10 rounded-full" />
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded bg-charcoal/5 flex items-center justify-center">
                  <span className="text-[5px] text-charcoal/20">&lt;</span>
                </div>
                <div className="w-3 h-3 rounded bg-charcoal/5 flex items-center justify-center">
                  <span className="text-[5px] text-charcoal/20">&gt;</span>
                </div>
              </div>
            </div>
            {/* Time slots */}
            <div className="grid grid-cols-5 gap-1">
              {["M", "T", "W", "T", "F"].map((day, i) => (
                <div key={i} className="text-center">
                  <span className="text-[5px] text-charcoal/20 font-medium">{day}</span>
                </div>
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 rounded-sm ${[2, 5, 7, 11, 13].includes(i)
                    ? "bg-charcoal/8 border border-charcoal/[0.06]"
                    : i === 3
                      ? "bg-accent-blue/10 border border-accent-blue/15"
                      : "bg-white border border-sand/20"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1">
              <div className="h-1 w-8 bg-charcoal/8 rounded-full" />
              <div className="flex items-end gap-1">
                <span className="font-display text-xs font-bold text-charcoal/30">98%</span>
                <span className="text-[6px] text-success/50 font-medium mb-0.5">+2.1%</span>
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1">
              <div className="h-1 w-10 bg-charcoal/8 rounded-full" />
              <div className="flex items-end gap-1">
                <span className="font-display text-xs font-bold text-charcoal/30">24</span>
                <span className="text-[6px] text-charcoal/20 font-medium mb-0.5">today</span>
              </div>
            </div>
          </div>

          {/* Patient list */}
          <div className="flex-1 bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1">
            <div className="h-1.5 w-16 bg-charcoal/10 rounded-full mb-0.5" />
            {[
              { type: "confirmed" },
              { type: "pending" },
              { type: "reactivated" },
            ].map((patient, i) => (
              <div key={i} className="flex items-center gap-1.5 h-5 px-1.5 rounded bg-white/80 border border-sand/20">
                <div className="w-3 h-3 rounded-full bg-charcoal/5 flex items-center justify-center">
                  <span className="text-[5px] text-charcoal/15 font-bold">{["A", "M", "R"][i]}</span>
                </div>
                <div className="h-1 w-8 bg-charcoal/8 rounded-full" />
                <div className="ml-auto flex items-center gap-1">
                  <div className={`h-3 px-1 rounded flex items-center ${patient.type === "confirmed" ? "bg-success/8" : patient.type === "reactivated" ? "bg-accent-blue/8" : "bg-charcoal/[0.04]"
                    }`}>
                    <span className={`text-[5px] font-semibold ${patient.type === "confirmed" ? "text-success/50" : patient.type === "reactivated" ? "text-accent-blue/50" : "text-charcoal/25"
                      }`}>
                      {patient.type === "confirmed" ? "CONF" : patient.type === "reactivated" ? "REACT" : "PEND"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

/* ── Lead Generation OS Illustration ────────────────────────── */
const LeadGenIllustration = memo(function LeadGenIllustration() {
  return (
    <div className="w-full h-full rounded-xl bg-white border border-sand/80 overflow-hidden relative shadow-sm">
      {/* Title bar */}
      <div className="absolute top-0 left-0 right-0 h-9 bg-[#FAFAF8] border-b border-sand/40 flex items-center px-4 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="ml-3 h-4 w-22 bg-charcoal/5 rounded" />
        <div className="ml-auto flex gap-1.5">
          <div className="h-5 px-2 rounded bg-charcoal/[0.03] border border-charcoal/[0.06] flex items-center gap-1">
            <Target className="w-2.5 h-2.5 text-charcoal/20" />
            <div className="w-3 h-3 rounded-full bg-accent-blue/15 flex items-center justify-center">
              <span className="text-[6px] font-bold text-accent-blue/60">5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-9 left-0 right-0 bottom-0 flex">
        {/* Sidebar */}
        <div className="w-[72px] border-r border-sand/30 bg-[#FAFAF8] p-2 flex flex-col gap-1">
          <div className="h-6 rounded bg-charcoal/[0.06] flex items-center px-1.5 gap-1">
            <Target className="w-2.5 h-2.5 text-charcoal/25" />
            <div className="h-1 w-6 bg-charcoal/10 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <Magnet className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-5 bg-charcoal/5 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <Mail className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-7 bg-charcoal/5 rounded-full" />
          </div>
          <div className="h-6 rounded flex items-center px-1.5 gap-1">
            <BarChart3 className="w-2.5 h-2.5 text-charcoal/15" />
            <div className="h-1 w-4 bg-charcoal/5 rounded-full" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 flex flex-col gap-2.5">
          {/* Funnel stats */}
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { label: "Captured", value: "1.8k", color: "bg-accent-blue/10" },
              { label: "Scored", value: "892", color: "bg-accent-blue/8" },
              { label: "Nurtured", value: "634", color: "bg-accent-blue/6" },
              { label: "Won", value: "187", color: "bg-success/8" },
            ].map((stat, i) => (
              <div key={i} className={`${stat.color} rounded-lg border border-sand/30 p-1.5 text-center`}>
                <span className="font-display text-xs font-bold text-charcoal/30 block">{stat.value}</span>
                <span className="text-[5px] text-charcoal/15 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Channel chart */}
          <div className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between mb-0.5">
              <div className="h-1.5 w-16 bg-charcoal/10 rounded-full" />
              <div className="h-3 px-1.5 rounded bg-accent-blue/8 flex items-center">
                <span className="text-[6px] font-semibold text-accent-blue/50">Live</span>
              </div>
            </div>
            <div className="flex items-end gap-1 h-8">
              {[65, 48, 38, 25, 18].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className={`w-full rounded-sm ${i === 0 ? 'bg-accent-blue/40' : 'bg-accent-blue/15'}`}
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[5px] text-charcoal/15">{['Web', 'Ads', 'LI', 'Em', 'Ref'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active sequences */}
          <div className="flex-1 bg-[#FAFAF8] rounded-lg border border-sand/30 p-2 flex flex-col gap-1">
            <div className="h-1.5 w-20 bg-charcoal/10 rounded-full mb-0.5" />
            {[
              { status: "calling", channel: "AI Call" },
              { status: "email", channel: "Seq #3" },
              { status: "booked", channel: "Meeting" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 h-5 px-1.5 rounded bg-white/80 border border-sand/20">
                <div className={`w-1 h-1 rounded-full ${item.status === "calling" ? "bg-green-400" : item.status === "booked" ? "bg-success/40" : "bg-accent-blue/40"}`} />
                <div className="h-1 w-8 bg-charcoal/8 rounded-full" />
                <div className="ml-auto flex items-center gap-1">
                  <div className={`h-3 px-1 rounded flex items-center ${item.status === "booked" ? "bg-success/8" : item.status === "calling" ? "bg-green-50" : "bg-accent-blue/8"
                    }`}>
                    <span className={`text-[5px] font-semibold ${item.status === "booked" ? "text-success/50" : item.status === "calling" ? "text-green-600/50" : "text-accent-blue/50"
                      }`}>
                      {item.channel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

/* ── Custom Solutions Illustration ──────────────────────────── */
const CustomIllustration = memo(function CustomIllustration() {
  return (
    <div className="w-full h-full rounded-xl bg-white border border-sand/80 overflow-hidden relative shadow-sm">
      {/* Title bar */}
      <div className="absolute top-0 left-0 right-0 h-9 bg-[#FAFAF8] border-b border-sand/40 flex items-center px-4 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="w-2 h-2 rounded-full bg-charcoal/8" />
        <div className="ml-3 h-4 w-20 bg-charcoal/5 rounded" />
        <div className="ml-auto flex gap-1.5">
          <div className="h-5 px-2 rounded bg-charcoal/[0.03] border border-charcoal/[0.06] flex items-center gap-1">
            <Database className="w-2.5 h-2.5 text-charcoal/20" />
          </div>
        </div>
      </div>

      <div className="absolute top-9 left-0 right-0 bottom-0 p-3 flex flex-col gap-2.5">
        {/* Workflow visualization */}
        <div className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-2.5 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="h-1.5 w-16 bg-charcoal/10 rounded-full" />
            <div className="h-3 px-1.5 rounded bg-success/8 flex items-center">
              <span className="text-[5px] font-semibold text-success/50">Active</span>
            </div>
          </div>

          {/* Flow nodes */}
          <div className="flex-1 flex flex-col items-center justify-center gap-2 relative">
            {/* Node 1 - Trigger */}
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 h-7 rounded-md bg-white border border-sand/40 flex items-center px-2 gap-1.5">
                <Zap className="w-2.5 h-2.5 text-charcoal/20" />
                <div className="h-1 w-8 bg-charcoal/10 rounded-full" />
              </div>
              <div className="w-4 h-[1px] bg-charcoal/10" />
              <div className="flex-1 h-7 rounded-md bg-white border border-sand/40 flex items-center px-2 gap-1.5">
                <Cpu className="w-2.5 h-2.5 text-charcoal/20" />
                <div className="h-1 w-6 bg-charcoal/10 rounded-full" />
              </div>
            </div>

            {/* Connector */}
            <div className="w-[1px] h-2 bg-charcoal/10" />

            {/* Node 2 - Processing */}
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 h-7 rounded-md bg-accent-blue/[0.04] border border-accent-blue/10 flex items-center px-2 gap-1.5">
                <Workflow className="w-2.5 h-2.5 text-accent-blue/30" />
                <div className="h-1 w-10 bg-accent-blue/10 rounded-full" />
              </div>
              <div className="w-4 h-[1px] bg-charcoal/10" />
              <div className="flex-1 h-7 rounded-md bg-white border border-sand/40 flex items-center px-2 gap-1.5">
                <Plug className="w-2.5 h-2.5 text-charcoal/20" />
                <div className="h-1 w-7 bg-charcoal/10 rounded-full" />
              </div>
            </div>

            {/* Connector */}
            <div className="w-[1px] h-2 bg-charcoal/10" />

            {/* Node 3 - Output */}
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 h-7 rounded-md bg-white border border-sand/40 flex items-center px-2 gap-1.5">
                <LayoutDashboard className="w-2.5 h-2.5 text-charcoal/20" />
                <div className="h-1 w-9 bg-charcoal/10 rounded-full" />
              </div>
              <div className="w-4 h-[1px] bg-charcoal/10" />
              <div className="flex-1 h-7 rounded-md bg-white border border-sand/40 flex items-center px-2 gap-1.5">
                <CheckCircle2 className="w-2.5 h-2.5 text-success/30" />
                <div className="h-1 w-5 bg-charcoal/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Workflows", value: "8" },
            { label: "Integrations", value: "14" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#FAFAF8] rounded-lg border border-sand/30 p-1.5 text-center">
              <span className="font-display text-xs font-bold text-charcoal/25 block">{stat.value}</span>
              <span className="text-[5px] text-charcoal/15 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const illustrations = [RealEstateIllustration, HealthIllustration, LeadGenIllustration, CustomIllustration];

export function SolutionTabs() {
  const t = useTranslations("whatWeBuild");
  const [activeTab, setActiveTab] = useState(0);
  const [swapTrigger, setSwapTrigger] = useState(0);

  const handleTabClick = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
    setSwapTrigger((n) => n + 1);
  };

  const currentTab = tabs[activeTab];


  return (
    <section id="solutions" className="py-14 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mb-4 max-w-xl">
          {tabs.map((tab, index) => {
            const isActive = index === activeTab;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabClick(index)}
                className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${isActive
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
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-sand overflow-hidden shadow-sm"
        >
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Modules List */}
            <div className="p-8 flex flex-col gap-1">
              {/* Tagline */}
              <p className="text-text-muted text-sm font-medium mb-2">
                {t(`tabs.${currentTab.key}.tagline`)}
              </p>
              {moduleKeys.map((moduleKey, i) => {
                const ModuleIcon = currentTab.moduleIcons[i];
                return (
                  <div
                    key={moduleKey}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-cream/70 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-sand/60 flex items-center justify-center flex-shrink-0">
                      <ModuleIcon className="w-[18px] h-[18px] text-charcoal/40" />
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

            {/* Right: Illustration — oversized cards clipped at edges */}
            <div className="relative overflow-hidden bg-[#FAFAF8] border-t lg:border-t-0 lg:border-l border-sand/50 self-stretch flex items-end justify-end min-h-[360px]">
              <CardSwap
                trigger={swapTrigger}
                width={580}
                height={440}
                cardDistance={60}
                verticalDistance={70}
                skewAmount={4}
                easing="elastic"
                className="translate-x-[6%] translate-y-[14%]"
              >
                {illustrations.map((Illustration, i) => (
                  <Card key={i} customClass="!bg-transparent !border-none !rounded-xl overflow-hidden">
                    <Illustration />
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SolutionTabs;
