import { PreviewTag } from "./PreviewTag";

export function DealCard() {
  return (
    <div className="relative rounded-xl bg-deep/40 border border-pink/15 p-3 backdrop-blur-sm">
      <PreviewTag />
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-2 pr-16">
        Active deal
      </div>
      <div className="aspect-[5/3] rounded-md bg-gradient-to-br from-pink/30 via-[#7a2470]/40 to-deep/60 border border-white/[0.06] mb-2 flex items-end p-2">
        <span className="font-mono text-[8px] tracking-[0.18em] bg-pink text-white px-1.5 py-0.5 rounded-full uppercase">
          –15%
        </span>
      </div>
      <div className="text-white/90 text-[11px] font-semibold leading-snug">
        Diwali jewelry collection
      </div>
      <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/45 mt-1">
        Shanti Jewelers · ends Sun
      </div>
    </div>
  );
}
