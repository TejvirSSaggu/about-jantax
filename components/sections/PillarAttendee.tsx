"use client";

import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PillarAttendee() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0% -20% 0%" });

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Channel · Business profile"
          title={<>Get <em className="italic text-pink">found</em> by your community.</>}
          sub="Your hours, location, photos, menu, reviews — a real business profile that the South Asian community in your area can discover, save, and share."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Profile preview */}
          <FadeUp className="lg:col-span-2 lg:row-span-2">
            <div className="h-full bg-deep/30 border border-white/5 rounded-2xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-4">
                Your business profile
              </div>
              <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                <div className="grid grid-cols-12 gap-px w-40 h-40">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square"
                      style={{
                        background: ((i * 37 + 11) % 100) > 50 ? "#0d0820" : "transparent",
                      }}
                    />
                  ))}
                </div>
                <div className="text-ink text-xs font-mono mt-4">BHARAT BISTRO · 4.8 ★</div>
              </div>
            </div>
          </FadeUp>

          {/* Customer messages */}
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div className="h-full bg-deep/30 border border-white/5 rounded-2xl p-6 min-h-[180px]">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-3">
                Customer messages
              </div>
              {inView && (
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/8 text-white/85 text-xs px-3 py-2 rounded-2xl rounded-bl-none max-w-[80%]"
                  >
                    Hey — do you take walk-ins on Saturday?
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-pink text-white text-xs px-3 py-2 rounded-2xl rounded-br-none max-w-[80%] ml-auto"
                  >
                    Yes, all day — come by anytime 🙌
                  </motion.div>
                </div>
              )}
            </div>
          </FadeUp>

          {/* In-app discovery */}
          <FadeUp delay={0.2}>
            <div className="h-full bg-deep/30 border border-white/5 rounded-2xl p-6 flex flex-col">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-3">
                Discovery feed
              </div>
              <div className="bg-white/8 rounded-xl p-3 mt-auto">
                <div className="text-[10px] text-white/50 font-mono mb-1">JANTAX · NOW</div>
                <div className="text-white text-xs leading-snug">Bharat Bistro is offering 15% off Diwali week — 0.8 mi away</div>
              </div>
            </div>
          </FadeUp>

          {/* Mobile native */}
          <FadeUp delay={0.3}>
            <div className="h-full bg-deep/30 border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center gap-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                Mobile native
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/8 text-white text-xs font-medium">iOS · Live</span>
                <span className="px-3 py-1.5 rounded-full bg-white/8 text-white/50 text-xs font-medium">Android · soon</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
