import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { FOUNDERS } from "@/lib/founders";

export function Founders() {
  return (
    <section className="py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-pink mb-4">
            Built by
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-white mb-14 max-w-2xl leading-[1.05]">
            The people <em className="italic text-pink">throwing the events</em>,<br/>building the platform.
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOUNDERS.map((f, i) => (
            <FadeUp key={f.name} delay={i * 0.06}>
              <div className="bg-deep/30 border border-white/5 hover:border-pink/30 transition-colors rounded-2xl p-5">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-deep to-mid border border-white/5 mb-4 flex items-center justify-center overflow-hidden">
                  {f.photo ? (
                    <Image src={f.photo} alt={f.name} width={240} height={240} className="object-cover w-full h-full" />
                  ) : (
                    <span className="font-display font-light text-4xl text-pink/80">{f.initials}</span>
                  )}
                </div>
                <div className="text-white font-semibold text-base">{f.name}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 mt-1">{f.role}</div>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">{f.bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
