"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionHeader } from "@/components/sections/SectionHeader";

const EVENTS = [
  { title: "Bhangra Night", venue: "REX THEATRE", price: "$30" },
  { title: "Sunset Soiree", venue: "ROOFTOP 401", price: "$45" },
  { title: "Comedy Underground", venue: "BACKROOM", price: "$20" },
  { title: "Diwali Bash", venue: "MARQUEE HALL", price: "$55" },
  { title: "Bollywood Brunch", venue: "PALMS BISTRO", price: "$25" },
];

export function PillarAudience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0% -20% 0%" });

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-transparent via-deep/20 to-transparent">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Built-in audience"
            title={<><em className="italic text-pink">Don&apos;t</em> start<br/>from zero.</>}
            sub="JantaX already brings thousands of locals looking for their next night out — through search, categories, deals, and a social feed. Your event lands in front of them on day one."
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
                {[...EVENTS, ...EVENTS].map((e, i) => (
                  <div key={i} className="rounded-2xl bg-deep/60 border border-white/5 p-3 flex gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink to-[#7a2470] shrink-0" />
                    <div className="flex-1">
                      <div className="text-white text-xs font-semibold">{e.title}</div>
                      <div className="font-mono text-[8px] uppercase text-white/45 mt-1">{e.venue}</div>
                    </div>
                    <div className="text-pink text-xs font-semibold self-center">{e.price}</div>
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
