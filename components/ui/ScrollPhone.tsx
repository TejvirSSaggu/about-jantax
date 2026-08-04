"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  /** visible screen height in px (content scrolls within this) */
  height?: number;
  /** device frame width in px */
  width?: number;
  className?: string;
  priority?: boolean;
  /**
   * Mobile only: pin the phone to the viewport and scrub the screenshot as the
   * page scrolls past, then release. Deliberately opt-in and used once (the
   * hero) — repeated pinned sections read as a tunnel, not a signature moment.
   */
  pinOnMobile?: boolean;
};

/**
 * A fixed-size iOS device frame whose screenshot scrolls *inside* the phone —
 * so a tall app screen shows at real iPhone proportions instead of one giant
 * image.
 *
 * Desktop: the screen is a normal scroll container you drag with the mouse.
 * Nothing below applies — it's all gated behind a max-width:767px media query.
 *
 * Touch: the frame is nearly full-bleed, so a finger landing on it would scroll
 * the screenshot instead of the page and the user gets stuck. There the screen
 * is overflow:hidden (see globals.css) and we drive scrollTop from the page's
 * own scroll position instead. Two flavours:
 *   - default: reveal as the phone travels through the viewport
 *   - pinOnMobile: the phone sticks to the viewport for a bounded stretch and
 *     the screenshot scrubs through, then the page carries on
 */
export function ScrollPhone({
  src,
  alt,
  height = 560,
  width = 264,
  className = "",
  priority = false,
  pinOnMobile = false,
}: Props) {
  // The frame adds 10px of padding on each side, so the scroll window is
  // (width - 20) wide. Expressing its ratio against that keeps the desktop
  // height pixel-identical to `height` while letting mobile scale up.
  const screenAspect = `${width - 20} / ${height}`;
  const screenRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    // Respect users who don't want motion — leave the screen at the top. The
    // matching CSS also drops the pin, so the layout stays consistent.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const track = pinOnMobile ? trackRef.current : null;
    let frame = 0;
    let visible = false;

    const apply = () => {
      frame = 0;
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) return;

      const vh = window.innerHeight;
      let p: number;

      if (track) {
        // Progress through the pinned stretch: 0 when the track's top hits the
        // top of the viewport, 1 when the track has been fully consumed.
        const distance = track.offsetHeight - vh;
        p = distance > 0 ? -track.getBoundingClientRect().top / distance : 0;
      } else {
        const rect = el.getBoundingClientRect();
        // 0 when the phone is just below the fold, 1 once it has cleared the top.
        const raw = (vh - rect.top) / (vh + rect.height);
        // Hold at the top of the screenshot until the phone is properly in view
        // (otherwise it starts pre-scrolled and clips the app's own header),
        // then reveal the rest before it leaves.
        p = (raw - 0.3) / 0.55;
      }

      el.scrollTop = Math.min(1, Math.max(0, p)) * max;
    };

    const onScroll = () => {
      if (!visible || frame) return;
      frame = requestAnimationFrame(apply);
    };

    // Only listen while the phone is anywhere near the viewport.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) apply();
      },
      { rootMargin: "100px 0px" },
    );
    io.observe(track ?? el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pinOnMobile]);

  const frame = (
    <div
      className={`jx-scroll-phone relative mx-auto ${className}`}
      style={{ "--phone-w": `${width}px` } as React.CSSProperties}
    >
      {/* Soft brand glow behind the device. It sits inside the frame on phones —
          at full-bleed width a negative inset would push past the viewport and
          create a horizontal scrollbar. The blur still paints outside; painted
          overflow doesn't scroll. */}
      <div aria-hidden className="absolute inset-0 md:-inset-8 rounded-[60px] bg-pink/10 blur-3xl pointer-events-none" />
      <div className="relative rounded-[46px] bg-ink p-[10px] shadow-2xl shadow-black/60 ring-1 ring-white/10">
        <div className="relative rounded-[36px] overflow-hidden bg-white">
          <div
            ref={screenRef}
            className="jx-phone-screen overflow-y-auto overflow-x-hidden [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15"
            style={{ aspectRatio: screenAspect }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="w-full block select-none"
              draggable={false}
              loading={priority ? "eager" : "lazy"}
            />
          </div>
          {/* bottom scroll-affordance fade */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );

  if (!pinOnMobile) return frame;

  // Both wrappers are inert above 767px and under reduced-motion (see globals.css),
  // so the desktop DOM box model is unchanged.
  return (
    <div ref={trackRef} className="jx-phone-pin-track">
      <div className="jx-phone-pin-sticky">{frame}</div>
    </div>
  );
}
