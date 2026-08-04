import { SectionHeader } from "@/components/sections/SectionHeader";
import { ScrollPhone } from "@/components/ui/ScrollPhone";

export function PillarAudience() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-transparent via-deep/20 to-transparent">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Deals Channel"
            title={<>Turn the community into <em className="italic text-pink">walk-ins</em>.</>}
            sub="Reach nearby South Asians with targeted offers designed to drive visits, bookings, and first-time customers."
          />
          <p className="text-white/55 text-sm leading-relaxed max-w-md -mt-2">
            Appear where your community already discovers events, businesses, and local
            recommendations.
          </p>
        </div>

        <ScrollPhone
          src="/screens/deals.png"
          alt="JantaX iOS app — deals and vouchers to redeem in-store"
          height={560}
          width={272}
        />
      </div>
    </section>
  );
}
