"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export interface ParticlesProps {
  className?: string
  children?: React.ReactNode
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
}

export const Particles: React.FC<ParticlesProps> = ({
  className,
  children,
  color = "#ffffff",
}) => {
  return (
    <div
      className={cn("fixed inset-0 overflow-hidden bg-neutral-950", className)}
    >
      {/* Static CSS dot pattern - no JS animation */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Subtle floating dots via CSS animation */}
      <div
        className="absolute inset-0 opacity-15 animate-drift"
        style={{
          backgroundImage: `radial-gradient(${color} 0.8px, transparent 0.8px)`,
          backgroundSize: "48px 48px",
          backgroundPosition: "16px 16px",
        }}
      />
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
}

Particles.displayName = "Particles"
