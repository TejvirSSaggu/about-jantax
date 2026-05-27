import { FadeUp } from "@/components/motion/FadeUp";

const PANELS = [
  {
    label: "01 · THE SHIFT",
    title: "Diaspora communities have moved online — and want their own stack.",
    body: "The South Asian Bay Area is millions of people strong. They search for restaurants, plan weddings, attend events — but they use a fragmented mix of WhatsApp groups, Yelp, Eventbrite, Facebook events, and word-of-mouth. There’s no single place for this community.",
  },
  {
    label: "02 · THE GAP",
    title: "Global platforms aren’t built for community-first commerce.",
    body: "Eventbrite, Yelp, and Groupon are general-audience tools that take 8–15% per transaction and give nothing back to local communities. South Asian businesses get lost in the noise; community members miss what’s happening around them.",
  },
  {
    label: "03 · OUR WEDGE",
    title: "One platform, multi-channel, city-first, organizer-economics.",
    body: "JantaX gives a South Asian business a single home — events, deals, profile, rentals — and gives community members a single feed of what their people are doing. Organizer economics, not platform-skim economics.",
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
            Why this. <em className="italic text-pink">Why now.</em>
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
