import { PreviewTag } from "./PreviewTag";

const TIERS = [
  { name: "Early-bird", price: "$25" },
  { name: "General",    price: "$40" },
  { name: "VIP",        price: "$95" },
];

export function TicketTypesCard() {
  return (
    <div className="relative rounded-xl bg-deep/40 border border-pink/15 p-3 backdrop-blur-sm">
      <PreviewTag />
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-2 pr-16">
        Ticket types
      </div>
      <div className="space-y-1">
        {TIERS.map((t) => (
          <div key={t.name} className="flex items-center justify-between bg-white/[0.03] rounded-md px-2 py-1.5">
            <span className="text-white/85 text-[11px] font-medium">{t.name}</span>
            <span className="text-pink font-mono text-[11px]">{t.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
