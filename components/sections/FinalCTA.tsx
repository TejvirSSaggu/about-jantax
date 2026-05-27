"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { submitWaitlist } from "@/lib/forms";
import { FoundersDialog } from "@/components/sections/FoundersDialog";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [foundersOpen, setFoundersOpen] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("err");
      return;
    }
    setStatus("loading");
    const r = await submitWaitlist(email, "final-cta");
    setStatus(r.ok ? "ok" : "err");
  }

  return (
    <section id="waitlist" className="px-6 lg:px-12 py-32">
      <div
        className="max-w-5xl mx-auto rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2a1a4e 0%, #7a2470 50%, #e06cb0 100%)" }}
      >
        <FadeUp>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/80 mb-4">
            Be among the first
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-light text-4xl lg:text-6xl text-white leading-[1.02] tracking-tight mb-6">
            Be first to <em className="italic">host on JantaX.</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/80 text-base lg:text-lg max-w-xl mx-auto mb-8">
            Join the organizer waitlist. We&apos;ll personally onboard you when San Jose goes live.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <form onSubmit={onSubmit} noValidate className="flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full p-1.5 pl-5 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourevent.com"
              className="flex-1 bg-transparent border-0 text-sm text-white placeholder:text-white/60 focus-visible:ring-0"
              required
              disabled={status === "ok"}
            />
            <Button
              type="submit"
              disabled={status === "loading" || status === "ok"}
              className="rounded-full bg-white text-ink hover:bg-white/90 text-xs font-semibold px-4"
            >
              {status === "ok" ? <><Check size={12} className="mr-1" /> You&apos;re in</> : status === "loading" ? "..." : <>Join waitlist <ArrowRight size={12} className="ml-1" /></>}
            </Button>
          </form>
        </FadeUp>
        {status === "err" && (
          <p className="text-rose text-xs mt-3">Please use a valid email.</p>
        )}
        <FadeUp delay={0.2}>
          <button
            type="button"
            onClick={() => setFoundersOpen(true)}
            className="inline-block mt-6 text-white/90 hover:text-white text-sm transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            Talk to the founders →
          </button>
        </FadeUp>
      </div>
      <FoundersDialog open={foundersOpen} onOpenChange={setFoundersOpen} source="final-cta" />
    </section>
  );
}
