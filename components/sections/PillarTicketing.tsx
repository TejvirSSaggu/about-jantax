"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";

const TIER_CARDS = [
  { tier: "EARLY-BIRD", price: "$25", perks: ["First 50 only", "Best price", "GA standing"] },
  { tier: "GENERAL", price: "$40", perks: ["Standing room", "Coat check", "Bar access"] },
  { tier: "VIP", price: "$95", perks: ["Reserved table", "Bottle service", "Skip the line"] },
];

const ROWS = 8;
const COLS = 14;

export function PillarTicketing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0% -20% 0%" });

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-transparent via-deep/15 to-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Advanced ticketing"
          title={<>From club nights<br/>to <em className="italic text-pink">weddings</em> — handled.</>}
          sub="Multiple ticket types, reserved seating with sections + tables, all pricing modes (fixed, dynamic, tiered)."
        />

        <FadeUp>
          <div ref={ref} className="bg-deep/30 border border-white/5 rounded-2xl p-8 mb-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-1 text-center">STAGE</div>
            <div className="h-1 bg-gradient-to-r from-transparent via-pink/40 to-transparent mb-8" />
            <div className="grid gap-1.5 max-w-3xl mx-auto" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
              {Array.from({ length: ROWS * COLS }).map((_, i) => {
                const row = Math.floor(i / COLS);
                // deterministic fill pattern (avoids SSR hydration mismatch)
                const filled = inView && ((i * 53 + 7) % 100) > 35;
                const vip = row < 2;
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm transition-all duration-1000 ${
                      filled
                        ? vip
                          ? "bg-pink shadow-[0_0_8px_rgba(224,108,176,0.5)]"
                          : "bg-rose/70"
                        : "bg-white/10"
                    }`}
                    style={{ transitionDelay: `${i * 6}ms` }}
                  />
                );
              })}
            </div>
            <div className="flex gap-6 justify-center mt-6 text-[10px] font-mono uppercase tracking-wider">
              <Legend color="bg-pink" label="VIP filled" />
              <Legend color="bg-rose/70" label="GA filled" />
              <Legend color="bg-white/10" label="Available" />
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-4">
          {TIER_CARDS.map((t, i) => (
            <FadeUp key={t.tier} delay={i * 0.08}>
              <div className="bg-deep/30 border border-white/5 hover:border-pink/30 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-pink mb-3">{t.tier}</div>
                <div className="font-display font-light text-4xl text-white mb-4">{t.price}</div>
                <ul className="space-y-2 text-white/65 text-sm">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-pink" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-white/55">
      <span className={`w-2.5 h-2.5 rounded-sm ${color}`} />
      {label}
    </div>
  );
}
