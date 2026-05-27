import { PreviewTag } from "./PreviewTag";

const FEED = [
  {
    kind: "EVENT",
    title: "Diwali Bash · Sat 7pm",
    venue: "SAN JOSE CIVIC",
    accent: "from-pink to-[#c44d9a]",
  },
  {
    kind: "DEAL",
    title: "15% off Diwali jewelry",
    venue: "SHANTI JEWELERS",
    accent: "from-[#a64b8c] to-[#7a2470]",
  },
  {
    kind: "PROFILE",
    title: "Bharat Bistro · 4.8★",
    venue: "0.8 MI · OPEN NOW",
    accent: "from-[#7a2470] to-[#3b1f6b]",
  },
];

export function CityFeedCard() {
  return (
    <div className="relative col-span-2 rounded-xl bg-deep/40 border border-pink/15 p-3 backdrop-blur-sm">
      <PreviewTag />
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-2 pr-16">
        JantaX · your city today
      </div>
      <div className="space-y-1.5">
        {FEED.map((f) => (
          <div
            key={f.kind}
            className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-1.5"
          >
            <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${f.accent} shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="text-white/90 text-[11px] font-semibold truncate">{f.title}</div>
              <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/45 mt-0.5 truncate">
                {f.venue}
              </div>
            </div>
            <span className="font-mono text-[8px] tracking-[0.18em] bg-pink/15 text-pink px-1.5 py-0.5 rounded-full uppercase shrink-0">
              {f.kind}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
