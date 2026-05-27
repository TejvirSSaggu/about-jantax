import { FadeUp } from "@/components/motion/FadeUp";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Calendar, Ticket, ScanLine, Banknote } from "lucide-react";

const TILES = [
  { icon: Calendar, title: "Create event", body: "Title, date, venue, ticket types. 90 seconds." },
  { icon: Ticket, title: "Sell tickets", body: "Stripe checkout, VIP/GA/early-bird, free RSVP." },
  { icon: ScanLine, title: "Check in at the door", body: "Scan QR e-tickets from your phone." },
  { icon: Banknote, title: "Get paid", body: "Stripe Connect payouts to your bank." },
];

export function PillarHosting() {
  return (
    <section id="features" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Channel · Events"
          title={<>The community&apos;s <em className="italic text-pink">calendar</em>.</>}
          sub="List your event in front of thousands of South Asians actively looking for what&apos;s on this weekend. Tickets, RSVPs, QR check-in, payout — all in one flow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </section>
  );
}
