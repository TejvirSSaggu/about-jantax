import { StickyNav } from "@/components/sections/StickyNav";
import { Hero } from "@/components/sections/Hero";
import { PillarHosting } from "@/components/sections/PillarHosting";
import { PillarAudience } from "@/components/sections/PillarAudience";
import { PillarAttendee } from "@/components/sections/PillarAttendee";
import { PillarTicketing } from "@/components/sections/PillarTicketing";
import { PillarPromotions } from "@/components/sections/PillarPromotions";
import { Founders } from "@/components/sections/Founders";
import { WhyNow } from "@/components/sections/WhyNow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <StickyNav />
      <main>
        <Hero />
        <PillarHosting />
        <PillarAudience />
        <PillarAttendee />
        <PillarTicketing />
        <PillarPromotions />
        <Founders />
        <WhyNow />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
