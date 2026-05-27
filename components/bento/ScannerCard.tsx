import { PreviewTag } from "./PreviewTag";

export function ScannerCard() {
  return (
    <div className="relative rounded-xl bg-deep/40 border border-pink/15 p-3 backdrop-blur-sm">
      <PreviewTag />
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-2 pr-16">
        Door check-in
      </div>
      <div className="relative aspect-[4/3] rounded-lg bg-black/40 border border-success/25 flex items-center justify-center">
        <div className="absolute inset-3 border border-dashed border-success/40 rounded" />
        <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_6px_var(--color-success)]" />
      </div>
    </div>
  );
}
