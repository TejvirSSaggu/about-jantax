import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { ScrollPhone } from "@/components/ui/ScrollPhone";

export function PillarAttendee() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Business Profile Channel"
          title={<>Get <em className="italic text-pink">found</em> by your community.</>}
          sub="Your profile, posts, followers, and DMs — a real presence the South Asian community in your area can discover, follow, and message."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start max-w-3xl mx-auto">
          <FadeUp>
            <div className="flex flex-col items-center gap-3">
              <ScrollPhone
                src="/screens/profile.png"
                alt="JantaX iOS app — a member profile with events, deals and posts"
                height={540}
                width={264}
              />
              <div className="text-center">
                <div className="text-white text-sm font-semibold">A profile people follow</div>
                <p className="text-white/50 text-xs mt-1 max-w-[220px]">Bio, stats, highlights, events, deals, and a post feed.</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center gap-3">
              <ScrollPhone
                src="/screens/chat.png"
                alt="JantaX iOS app — direct messages with customers"
                height={540}
                width={264}
              />
              <div className="text-center">
                <div className="text-white text-sm font-semibold">Chat with your customers</div>
                <p className="text-white/50 text-xs mt-1 max-w-[220px]">Answer questions and take bookings, right in the app.</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="flex justify-center gap-2 mt-12">
            <span className="px-3 py-1.5 rounded-full bg-white/8 text-white text-xs font-medium">iOS · Live</span>
            <span className="px-3 py-1.5 rounded-full bg-white/8 text-white/50 text-xs font-medium">Android · soon</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
