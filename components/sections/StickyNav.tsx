"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl text-white tracking-tight">
          JantaX
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo</a>
        </div>
        <a
          href="#waitlist"
          className={cn(
            buttonVariants({ size: "sm" }),
            "rounded-full bg-gradient-to-br from-pink to-[#c44d9a] hover:opacity-90 text-white text-xs font-semibold"
          )}
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
