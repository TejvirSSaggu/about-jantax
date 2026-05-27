"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionHeader } from "@/components/sections/SectionHeader";

const DEALS = [
  { title: "15% off Diwali jewelry", venue: "SHANTI JEWELERS", price: "—" },
  { title: "BOGO weekday lunch", venue: "BHARAT BISTRO", price: "—" },
  { title: "Free henna w/ bridal", venue: "GLOW SALON", price: "—" },
  { title: "20% off party rentals", venue: "DESI RENTALS", price: "—" },
  { title: "Buy 2 get 1 sweets", venue: "MISTHI BOX", price: "—" },
];

export function PillarAudience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0% -20% 0%" });

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-transparent via-deep/20 to-transparent">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Channel · Deals"
            title={<>Turn the community into <em className="italic text-pink">walk-ins</em>.</>}
            sub="Run targeted promotions for your restaurant, salon, jeweler, or any business — surfaced to JantaX users in your neighborhood. New customers, no Yelp fees."
          />
        </div>

        <div ref={ref} className="relative mx-auto" style={{ perspective: 1200 }}>
          <div
            className="w-[280px] h-[560px] rounded-[44px] border-[10px] border-deep bg-ink overflow-hidden shadow-2xl shadow-pink/10"
            style={{ transform: "rotateY(-8deg) rotateX(2deg)" }}
          >
            <div className="px-4 pt-6 pb-2 font-mono text-[10px] text-white/40">9:41 · DISCOVER</div>
            <div className="px-4 overflow-hidden h-[480px] relative">
              <div
                className="flex flex-col gap-3"
                style={{
                  animation: inView ? "scroll-feed 18s linear infinite" : "none",
                }}
              >
                {[...DEALS, ...DEALS].map((d, i) => (
                  <div key={i} className="rounded-2xl bg-deep/60 border border-white/5 p-3 flex gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink to-[#7a2470] shrink-0" />
                    <div className="flex-1">
                      <div className="text-white text-xs font-semibold">{d.title}</div>
                      <div className="font-mono text-[8px] uppercase text-white/45 mt-1">{d.venue}</div>
                    </div>
                    <span className="text-pink font-mono text-[9px] uppercase tracking-wider self-center bg-pink/15 px-2 py-0.5 rounded-full">DEAL</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-feed {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
}
