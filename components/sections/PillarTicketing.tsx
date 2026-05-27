import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";

const RENTAL_CATEGORIES = [
  { tier: "PARTY", price: "Coming v2", perks: ["Chairs · tables · linens", "AV · photo booths", "Decor · backdrops"] },
  { tier: "VENUES", price: "Coming v2", perks: ["Banquet halls", "Backyards · pavilions", "Studios · clubs"] },
  { tier: "GENERAL", price: "Coming v2", perks: ["Camera · DJ kit", "Catering supplies", "Cars · trailers"] },
];

export function PillarTicketing() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-transparent via-deep/15 to-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Channel · Rentals (coming soon)"
          title={<>From <em className="italic text-pink">party rentals</em> to venue bookings.</>}
          sub="A future release will open the platform to rentals — party supplies, equipment, venues, and more. Same audience, same payouts, more revenue per booking."
        />

        <FadeUp>
          <div className="bg-deep/30 border border-pink/15 rounded-2xl p-10 mb-6 flex items-center justify-center min-h-[280px]">
            <div className="text-center max-w-md">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] bg-pink/15 text-pink px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink shadow-[0_0_8px_var(--color-pink)]" />
                V2 · Roadmap
              </div>
              <h3 className="font-display font-light text-3xl text-white leading-tight mb-3">A full rental marketplace, on the same platform.</h3>
              <p className="text-white/55 text-sm leading-relaxed">Once Events, Deals, and Business profiles are running smoothly, we&apos;ll open up rentals — your community will be able to book everything from a backyard pavilion to a chai dispenser.</p>
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-4">
          {RENTAL_CATEGORIES.map((t, i) => (
            <FadeUp key={t.tier} delay={i * 0.08}>
              <div className="bg-deep/30 border border-white/5 hover:border-pink/30 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-pink mb-3">{t.tier}</div>
                <div className="font-display font-light text-2xl text-pink/60 mb-4">{t.price}</div>
                <ul className="space-y-2 text-white/65 text-sm">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-pink" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
