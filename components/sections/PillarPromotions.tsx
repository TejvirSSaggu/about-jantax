"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeader } from "@/components/sections/SectionHeader";

const NODES = [
  { x: 50,  y: 20, label: "Bar Verde", type: "Restaurant" },
  { x: 80,  y: 30, label: "GoldStreet", type: "Bar" },
  { x: 85,  y: 60, label: "Glow Salon", type: "Beauty" },
  { x: 65,  y: 85, label: "Rideshare 25% off", type: "Transport" },
  { x: 25,  y: 85, label: "Late-night eats", type: "Food" },
  { x: 12,  y: 55, label: "DJ rentals", type: "Vendor" },
  { x: 20,  y: 25, label: "Brunch spots", type: "Restaurant" },
];

export function PillarPromotions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0% -15% 0%" });

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Deals network"
          title={<>Your event is the anchor.<br/>The <em className="italic text-pink">neighborhood</em> is the amplifier.</>}
          sub="Local restaurants, bars, vendors, and rideshares will cross-promote with your event. Their deals send traffic your way. You send traffic theirs. Everyone wins."
        />

        <div ref={ref} className="relative bg-deep/20 border border-white/5 rounded-2xl aspect-[16/9] overflow-hidden">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            {NODES.map((n, i) => (
              <motion.line
                key={i}
                x1="50" y1="50" x2={n.x} y2={n.y}
                stroke="url(#lineGrad)"
                strokeWidth="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
              />
            ))}
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e06cb0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#e06cb0" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* center: event */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-gradient-to-br from-pink to-[#c44d9a] text-white rounded-2xl px-5 py-4 shadow-2xl shadow-pink/30">
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] opacity-80">Your event</div>
              <div className="text-sm font-semibold mt-1">Bhangra Night</div>
            </div>
          </div>

          {/* surrounding nodes */}
          {NODES.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div className="bg-deep/80 backdrop-blur border border-pink/25 rounded-xl px-3 py-2">
                <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-pink">{n.type}</div>
                <div className="text-white text-[11px] font-medium mt-0.5 whitespace-nowrap">{n.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
