"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateEventCard } from "@/components/bento/CreateEventCard";
import { TicketTypesCard } from "@/components/bento/TicketTypesCard";
import { ScannerCard } from "@/components/bento/ScannerCard";
import { FadeUp } from "@/components/motion/FadeUp";
import { FoundersDialog } from "@/components/sections/FoundersDialog";
import { submitWaitlist } from "@/lib/forms";
import { ArrowRight, Check } from "lucide-react";

export function Hero() {
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
    const r = await submitWaitlist(email, "hero");
    setStatus(r.ok ? "ok" : "err");
  }

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
          <FadeUp>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-pink flex items-center gap-2 mb-5">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-pink animate-ping opacity-75" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-pink shadow-[0_0_8px_var(--color-pink)]" />
              </span>
              Coming soon · San Jose
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-display font-light text-5xl lg:text-7xl leading-[0.95] tracking-tight text-white mb-4">
              A new way to
              <br />
              host{" "}
              <em className="italic bg-gradient-to-br from-pink to-rose bg-clip-text text-transparent">
                events.
              </em>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-md mb-7">
              We&apos;re building the platform we wish existed when we threw our first event — one
              place to list, sell tickets, check people in, and get paid. Built around your city,
              not against it.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap items-center gap-3">
              <form
                onSubmit={onSubmit}
                noValidate
                className="flex items-center bg-white/5 border border-white/10 rounded-full p-1.5 pl-5 max-w-md flex-1 min-w-[280px]"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourevent.com"
                  className="flex-1 bg-transparent border-0 text-sm text-white placeholder:text-white/35 focus-visible:ring-0"
                  required
                  disabled={status === "ok"}
                />
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "ok"}
                  className="rounded-full bg-gradient-to-br from-pink to-[#c44d9a] hover:opacity-90 text-white text-xs font-semibold px-4"
                >
                  {status === "ok" ? (
                    <><Check size={12} className="mr-1" /> You&apos;re in</>
                  ) : status === "loading" ? "..." : (
                    <>Join waitlist <ArrowRight size={12} className="ml-1" /></>
                  )}
                </Button>
              </form>
              <Button
                type="button"
                variant="outline"
                onClick={() => setFoundersOpen(true)}
                className="rounded-full border-white/18 bg-transparent text-white/80 hover:text-white hover:bg-white/5 text-xs px-4"
              >
                Talk to the founders →
              </Button>
            </div>
            {status === "err" && (
              <p className="text-rose text-xs mt-2">Please use a valid email.</p>
            )}
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 mt-5 uppercase">
              Be among the first to host on JantaX
            </p>
          </FadeUp>
        </div>

        {/* RIGHT — PREVIEW bento */}
        <FadeUp delay={0.3}>
          <div className="grid grid-cols-2 grid-rows-[1.1fr_0.8fr] gap-2">
            <CreateEventCard />
            <TicketTypesCard />
            <ScannerCard />
          </div>
        </FadeUp>
      </div>

      <FoundersDialog open={foundersOpen} onOpenChange={setFoundersOpen} source="hero" />
    </section>
  );
}
