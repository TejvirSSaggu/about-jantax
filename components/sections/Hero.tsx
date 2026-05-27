"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CityFeedCard } from "@/components/bento/CityFeedCard";
import { DealCard } from "@/components/bento/DealCard";
import { ChannelsCard } from "@/components/bento/ChannelsCard";
import { FadeUp } from "@/components/motion/FadeUp";
import { FoundersDialog } from "@/components/sections/FoundersDialog";
import { WaitlistDialog } from "@/components/sections/WaitlistDialog";

export function Hero() {
  const [foundersOpen, setFoundersOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="relative overflow-hidden px-6 lg:px-12 pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[640px] h-[640px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(224,108,176,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        {/* LEFT — copy + CTA */}
        <div>
          {/* Eyebrow — no motion wrapper so it paints immediately (LCP-critical path) */}
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-pink flex items-center gap-2 mb-5">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-pink animate-ping opacity-75" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-pink shadow-[0_0_8px_var(--color-pink)]" />
            </span>
            Coming soon · San Jose
          </div>

          {/* H1 — no motion wrapper so LCP text paints without waiting for framer-motion */}
          <h1 className="font-display font-light text-5xl lg:text-7xl leading-[0.95] tracking-tight text-white mb-4">
            The platform South Asian{" "}
            <em className="italic bg-gradient-to-br from-pink to-rose bg-clip-text text-transparent">
              businesses
            </em>{" "}
            don&apos;t have yet.
          </h1>

          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-md mb-7">
              We&apos;re building one platform where the South Asian business community in your city
              can reach its customers — through events, deals, business profiles, and more. Built
              around your city, not against it.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={() => setFoundersOpen(true)}
                className="rounded-full bg-gradient-to-br from-pink to-[#c44d9a] hover:opacity-90 text-white text-xs font-semibold px-5"
              >
                Talk to the founders →
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setWaitlistOpen(true)}
                className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/85 text-xs font-semibold px-5"
              >
                Join the waitlist
              </Button>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT — PREVIEW bento */}
        <FadeUp delay={0.3}>
          <div className="grid grid-cols-2 grid-rows-[1.1fr_0.8fr] gap-2">
            <CityFeedCard />
            <DealCard />
            <ChannelsCard />
          </div>
        </FadeUp>
      </div>

      <FoundersDialog open={foundersOpen} onOpenChange={setFoundersOpen} source="hero" />
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} source="hero" />
    </section>
  );
}
