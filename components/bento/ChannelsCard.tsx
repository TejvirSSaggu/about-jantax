import { PreviewTag } from "./PreviewTag";

const CHANNELS = [
  { name: "Events",            status: "LIVE" },
  { name: "Deals",             status: "LIVE" },
  { name: "Business profile",  status: "LIVE" },
  { name: "Rentals",           status: "V2"   },
  { name: "Cross-promo",       status: "LIVE" },
];

export function ChannelsCard() {
  return (
    <div className="relative rounded-xl bg-deep/40 border border-pink/15 p-3 backdrop-blur-sm">
      <PreviewTag />
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-2 pr-16">
        Channels
      </div>
      <div className="space-y-1">
        {CHANNELS.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between bg-white/[0.03] rounded-md px-2 py-1.5"
          >
            <span className="text-white/85 text-[11px] font-medium">{c.name}</span>
            <span
              className={
                c.status === "LIVE"
                  ? "font-mono text-[8px] tracking-[0.18em] uppercase bg-success/15 text-success px-1.5 py-0.5 rounded-full"
                  : "font-mono text-[8px] tracking-[0.18em] uppercase bg-pink/15 text-pink px-1.5 py-0.5 rounded-full"
              }
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
