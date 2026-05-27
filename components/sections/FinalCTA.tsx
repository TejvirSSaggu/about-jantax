"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/FadeUp";
import { FoundersDialog } from "@/components/sections/FoundersDialog";

export function FinalCTA() {
  const [foundersOpen, setFoundersOpen] = useState(false);

  return (
    <section id="waitlist" className="px-6 lg:px-12 py-32">
      <div
        className="max-w-5xl mx-auto rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2a1a4e 0%, #7a2470 50%, #e06cb0 100%)" }}
      >
        <FadeUp>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/80 mb-4">
            For investors &amp; partners
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-light text-4xl lg:text-6xl text-white leading-[1.02] tracking-tight mb-6">
            Want to be part of <em className="italic">what we&apos;re building?</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/80 text-base lg:text-lg max-w-xl mx-auto mb-8">
            Investors, partners, fellow founders — drop us a note. We&apos;re early, we&apos;re shipping, and we&apos;d love to hear from you.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <Button
            type="button"
            onClick={() => setFoundersOpen(true)}
            className="rounded-full bg-white text-ink hover:bg-white/90 text-sm font-semibold px-8 py-3 h-auto"
          >
            Talk to the founders →
          </Button>
        </FadeUp>
      </div>
      <FoundersDialog open={foundersOpen} onOpenChange={setFoundersOpen} source="final-cta" />
    </section>
  );
}
