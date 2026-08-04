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
};

/**
 * A fixed-size iOS device frame whose screenshot scrolls *inside* the phone —
 * so a tall app screen shows at real iPhone proportions instead of one giant
 * image.
 *
 * Desktop: the screen is a normal scroll container you drag with the mouse.
 *
 * Touch: the frame is nearly full-bleed, so a finger landing on it would scroll
 * the screenshot instead of the page and the user gets stuck. There the screen
 * is overflow:hidden (see globals.css) and we drive scrollTop from the page's
 * own scroll position, revealing the app screen as the phone travels through
 * the viewport. Nothing to discover, and the page always scrolls.
 */
export function ScrollPhone({ src, alt, height = 560, width = 264, className = "", priority = false }: Props) {
  // The frame adds 10px of padding on each side, so the scroll window is
  // (width - 20) wide. Expressing its ratio against that keeps the desktop
  // height pixel-identical to `height` while letting mobile scale up.
  const screenAspect = `${width - 20} / ${height}`;
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;

    const coarse = window.matchMedia("(max-width: 767px)");
    if (!coarse.matches) return;

    // Respect users who don't want motion — leave the screen at the top.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = false;

    const apply = () => {
      frame = 0;
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the phone is just below the fold, 1 once it has cleared the top.
      const raw = (vh - rect.top) / (vh + rect.height);
      // Hold at the top of the screenshot until the phone is properly in view
      // (otherwise it starts pre-scrolled and clips the app's own header), then
      // reveal the rest before it leaves.
      const p = Math.min(1, Math.max(0, (raw - 0.3) / 0.55));
      el.scrollTop = p * max;
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
    io.observe(el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
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
}
