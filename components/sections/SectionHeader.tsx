import { FadeUp } from "@/components/motion/FadeUp";

export function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl mb-12">
      <FadeUp>
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-pink mb-4">
          {eyebrow}
        </div>
      </FadeUp>
      <FadeUp delay={0.05}>
        <h2 className="font-display font-light text-4xl lg:text-6xl leading-[1.02] tracking-tight text-white">
          {title}
        </h2>
      </FadeUp>
      {sub && (
        <FadeUp delay={0.1}>
          <p className="text-white/60 text-base leading-relaxed mt-5">{sub}</p>
        </FadeUp>
      )}
    </div>
  );
}
