import { FadeUp } from "@/components/motion/FadeUp";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ScrollPhone } from "@/components/ui/ScrollPhone";
import { Calendar, Ticket, ScanLine, Banknote } from "lucide-react";

const TILES = [
  { icon: Calendar, title: "Publish an Event", body: "Launch your event page in minutes." },
  { icon: Ticket, title: "Sell tickets", body: "Paid tickets, free RSVPs, VIP access, and early-bird pricing." },
  { icon: ScanLine, title: "Fast Event Check-In", body: "Scan tickets and track attendance in real time." },
  { icon: Banknote, title: "Get paid", body: "Secure payouts sent directly to your account." },
];

export function PillarHosting() {
  return (
    <section id="features" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Events Channel"
          title={<>The community&apos;s <em className="italic text-pink">calendar</em>.</>}
          sub="Reach local South Asians looking for things to do, then manage tickets, RSVPs, check-ins, and payouts from one place."
        />

        <div className="grid lg:grid-cols-[0.85fr_1fr] gap-14 lg:gap-16 items-center">
          {/* Organizer dashboard — real app */}
          <FadeUp>
            <div className="flex flex-col items-center gap-3">
              <ScrollPhone
                src="/screens/dashboard.png"
                alt="JantaX iOS app — organizer dashboard with sales, check-ins and payouts"
                height={560}
                width={272}
              />
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Your event, live
              </div>
            </div>
          </FadeUp>

          {/* Capability tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TILES.map((t, i) => (
              <FadeUp key={t.title} delay={i * 0.08}>
                <div className="h-full bg-deep/30 border border-white/5 hover:border-pink/30 transition-colors rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-pink/15 text-pink flex items-center justify-center mb-5">
                    <t.icon size={18} />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">{t.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{t.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.4}>
          <p className="text-white/65 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto text-center mt-12">
            Every event is promoted across JantaX&apos;s local community feed—helping you reach the
            people most likely to attend.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
