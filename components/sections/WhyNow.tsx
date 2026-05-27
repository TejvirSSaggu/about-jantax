import { FadeUp } from "@/components/motion/FadeUp";

const PANELS = [
  {
    label: "01 · THE SHIFT",
    title: "Local discovery moved on.",
    body: "Eventbrite and Facebook Events were built for a different internet. The next generation finds their plans in social, hyperlocal apps — not in their inboxes.",
  },
  {
    label: "02 · THE GAP",
    title: "Incumbents price-gouge.",
    body: "Global ticketing takes 8–15% per ticket and gives nothing back to the organizer's audience. The economics are upside-down for the people making the events.",
  },
  {
    label: "03 · OUR WEDGE",
    title: "Full-stack, city-first.",
    body: "Host, discover, transact, cross-promote — one mobile-native platform built around city scenes, not global aggregation. Organizer economics first.",
  },
];

export function WhyNow() {
  return (
    <section className="py-28 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-pink mb-3">
            For the investor in the room
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-light text-3xl lg:text-4xl text-white mb-14 max-w-2xl">
            Why this, <em className="italic text-pink">why now.</em>
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-8">
          {PANELS.map((p, i) => (
            <FadeUp key={p.label} delay={i * 0.08}>
              <div>
                <div className="font-mono text-[10px] text-white/45 uppercase tracking-[0.2em] mb-3">{p.label}</div>
                <h3 className="text-white text-lg font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
