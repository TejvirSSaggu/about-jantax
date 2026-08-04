"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/FadeUp";
import { TeamDialog } from "@/components/sections/TeamDialog";

export function FinalCTA() {
  const [teamOpen, setTeamOpen] = useState(false);

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
            Back the operating system for <em className="italic">South Asian communities.</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/80 text-base lg:text-lg max-w-2xl mx-auto mb-8">
            JantaX connects local businesses, organizers, and community members through a single
            city-first platform. We&apos;re starting in San Jose and expanding one community at a time.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <Button
            type="button"
            onClick={() => setTeamOpen(true)}
            className="rounded-full bg-white text-ink hover:bg-white/90 text-sm font-semibold px-8 py-3 h-auto"
          >
            Talk to the Team →
          </Button>
        </FadeUp>
      </div>
      <TeamDialog open={teamOpen} onOpenChange={setTeamOpen} source="final-cta" />
    </section>
  );
}
