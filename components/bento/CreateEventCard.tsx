import { PreviewTag } from "./PreviewTag";

export function CreateEventCard() {
  return (
    <div className="relative col-span-2 rounded-xl bg-deep/40 border border-pink/15 p-3 backdrop-blur-sm">
      <PreviewTag />
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-2 pr-16">
        Create event
      </div>
      <div className="bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-1.5 mb-1">
        <span className="text-white/85 text-[11px] font-semibold">Event title</span>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-1.5 text-[10px] text-white/55">
          📍 Venue
        </div>
        <div className="bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-1.5 text-[10px] text-white/55">
          📅 Date · time
        </div>
      </div>
      <div className="mt-1 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-1.5 text-[10px] text-white/45">
        + Add cover image
      </div>
    </div>
  );
}
