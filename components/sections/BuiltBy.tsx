import { FadeUp } from "@/components/motion/FadeUp";

const GROUPS = [
  {
    index: "01",
    title: "Organizers",
    body: "Every feature starts with someone who has actually run an event — sold the tickets, chased the sponsors, and stacked the chairs at the end of the night.",
  },
  {
    index: "02",
    title: "Local businesses",
    body: "The shops, restaurants, and services that keep a city's culture alive shape how deals, profiles, and promotions work on the platform.",
  },
  {
    index: "03",
    title: "The people showing up",
    body: "Attendees tell us what's broken long before we ship it. If it doesn't work for the people walking through the door, it doesn't go out.",
  },
];

export function BuiltBy() {
  return (
    <section className="py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-pink mb-4">
            Built by
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-white mb-6 max-w-2xl leading-[1.05]">
            The people <em className="italic text-pink">throwing the events</em>,<br/>building the platform.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-14">
            JantaX isn&apos;t built in a boardroom. It&apos;s built by people from the community it
            serves — organizers, small business owners, and volunteers who have spent years filling
            rooms across the city.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GROUPS.map((g, i) => (
            <FadeUp key={g.title} delay={i * 0.06}>
              <div className="h-full bg-deep/30 border border-white/5 hover:border-pink/30 transition-colors rounded-2xl p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-pink/70 mb-4">
                  {g.index}
                </div>
                <div className="text-white font-semibold text-base">{g.title}</div>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">{g.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
