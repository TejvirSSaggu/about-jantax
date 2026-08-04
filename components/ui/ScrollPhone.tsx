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
 * An iOS device frame holding an app screenshot.
 *
 * Desktop: the screen is a scroll container — drag it and the tall screenshot
 * scrolls inside the phone, so a long app screen reads at real proportions.
 *
 * Mobile: static. The frame is close to full-bleed there, so an inner scroll
 * container swallows the page scroll — a finger lands on the phone and the
 * page appears frozen. The screenshot is simply framed and cropped instead.
 */
export function ScrollPhone({ src, alt, height = 560, width = 264, className = "", priority = false }: Props) {
  // The frame adds 10px of padding on each side, so the scroll window is
  // (width - 20) wide. Expressing its ratio against that keeps the desktop
  // height pixel-identical to `height` while letting mobile size itself.
  const screenAspect = `${width - 20} / ${height}`;

  return (
    <div
      className={`jx-scroll-phone relative mx-auto ${className}`}
      style={
        {
          "--phone-w": `${width}px`,
          // Passed as a custom property rather than an inline aspect-ratio so
          // the mobile rules can turn it off — an inline style would outrank
          // them, and aspect-ratio fighting a set height shrinks the box's
          // *width*, which leaves a white gutter beside the screenshot.
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
          <div className="jx-phone-screen overflow-y-auto overflow-x-hidden [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15">
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
