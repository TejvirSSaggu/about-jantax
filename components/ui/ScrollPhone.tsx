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
    const img = el?.querySelector("img");
    if (!el || !img) return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    // Respect users who don't want motion — leave the screen at the top. The
    // matching CSS also drops the pin, so the layout stays consistent.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // How far the screenshot has to travel to reveal its full height. Measured
    // on load and on resize only — never per frame, which is what made the old
    // version thrash layout.
    const measure = () => {
      const distance = Math.max(0, img.getBoundingClientRect().height - el.clientHeight);
      el.style.setProperty("--jx-scrub", `${distance}px`);
      return distance;
    };

    measure();
    if (!img.complete) img.addEventListener("load", measure, { once: true });

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    ro.observe(img);

    // Where supported, the CSS scroll timeline drives the transform on the
    // compositor and there is nothing for JS to do.
    const nativeTimeline =
      typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()");
    if (nativeTimeline) return () => ro.disconnect();

    // ── Fallback for browsers without scroll-driven animations ─────────────
    // Still a transform (composited) rather than scrollTop, and layout reads
    // are cached between scrolls so the handler stays cheap.
    const track = pinOnMobile ? trackRef.current : null;
    let frame = 0;
    let visible = false;
    let distance = measure();
    let geom = { top: 0, height: 0 };

    const readGeometry = () => {
      const node = track ?? el;
      geom = {
        top: node.getBoundingClientRect().top + window.scrollY,
        height: node.offsetHeight,
      };
      distance = measure();
    };

    const apply = () => {
      frame = 0;
      if (distance <= 0) return;

      const vh = window.innerHeight;
      const relative = window.scrollY - geom.top;
      const p = track
        ? relative / Math.max(1, geom.height - vh)
        : (relative + vh) / (vh + geom.height) / 0.55 - 0.3 / 0.55;

      img.style.transform = `translate3d(0, ${-Math.min(1, Math.max(0, p)) * distance}px, 0)`;
    };

    const onScroll = () => {
      if (!visible || frame) return;
      frame = requestAnimationFrame(apply);
    };

    const onResize = () => {
      readGeometry();
      apply();
    };

    readGeometry();

    // Only listen while the phone is anywhere near the viewport.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          readGeometry();
          apply();
        }
      },
      { rootMargin: "100px 0px" },
    );
    io.observe(track ?? el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pinOnMobile]);

  const frame = (
    <div
      className={`jx-scroll-phone relative mx-auto ${className}`}
      style={
        {
          "--phone-w": `${width}px`,
          // Passed as a custom property rather than an inline aspect-ratio so
          // the mobile rules can turn it off — an inline style would outrank
          // them, and aspect-ratio fighting a capped height shrinks the box's
          // *width*, which left a white gutter beside the screenshot.
          "--screen-aspect": screenAspect,
        } as React.CSSProperties
      }
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
