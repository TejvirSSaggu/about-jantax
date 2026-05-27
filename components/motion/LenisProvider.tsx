"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registerMotion, ScrollTrigger } from "@/lib/motion";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerMotion();
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}
