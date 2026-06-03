import { FadeUp } from "@/components/motion/FadeUp";

const PANELS = [
  {
    label: "01 · THE MARKET",
    title: "The community exists. The platform doesn’t.",
    body: "Millions of South Asians already gather online, organize events, discover businesses, and make purchasing decisions through fragmented tools. Yet no platform owns the community relationship.",
  },
  {
    label: "02 · THE GAP",
    title: "Global platforms aren’t built for community-first commerce.",
    body: "Existing platforms optimize for transactions. Communities need discovery, trust, identity, and local relevance. South Asian businesses compete in crowded marketplaces instead of being connected directly to their audience.",
  },
  {
    label: "03 · THE FLYWHEEL",
    title: "One audience. Multiple revenue engines.",
    body: "Events, deals, business profiles, rentals, and future services all connect to the same local audience. Every new channel increases engagement, retention, and monetization.",
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
            Why now. <em className="italic text-pink">Why JantaX.</em>
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

        <FadeUp delay={0.3}>
          <div className="mt-16 rounded-2xl border border-pink/20 bg-gradient-to-br from-pink/10 via-deep/20 to-transparent p-8 lg:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-pink mb-3">
              The bridge
            </div>
            <p className="font-display font-light text-2xl lg:text-3xl text-white leading-tight mb-4">
              The wedge is events. The opportunity is <em className="italic text-pink">community commerce</em>.
            </p>
            <p className="text-white/65 text-sm lg:text-base leading-relaxed max-w-3xl">
              We start by helping organizers fill events. From there, businesses promote offers,
              build profiles, sell services, rent equipment, and reach the same audience through a
              single platform.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
