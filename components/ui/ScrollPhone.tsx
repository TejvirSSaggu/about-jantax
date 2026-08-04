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
 * image. Pure CSS (overflow-y:auto); no JS.
 */
export function ScrollPhone({ src, alt, height = 560, width = 264, className = "", priority = false }: Props) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width }}>
      {/* soft brand glow behind the device */}
      <div aria-hidden className="absolute -inset-8 rounded-[60px] bg-pink/10 blur-3xl pointer-events-none" />
      <div className="relative rounded-[46px] bg-ink p-[10px] shadow-2xl shadow-black/60 ring-1 ring-white/10">
        <div className="relative rounded-[36px] overflow-hidden bg-white">
          <div
            className="overflow-y-auto overflow-x-hidden [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15"
            style={{ height }}
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
