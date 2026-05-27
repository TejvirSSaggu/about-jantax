import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/motion/LenisProvider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["200", "300", "400", "600", "700"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://about.jantax.com"),
  title: "JantaX — The platform South Asian businesses don't have yet.",
  description:
    "We're building one platform where the South Asian business community in your city can reach its customers — through events, deals, business profiles, and more. Coming soon to San Jose.",
  openGraph: {
    title: "JantaX — The platform South Asian businesses don't have yet.",
    description: "Multi-channel platform for the South Asian business community. Events, deals, business profiles, rentals. Coming soon to San Jose.",
    url: "https://about.jantax.com",
    siteName: "JantaX",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JantaX — The platform South Asian businesses don't have yet.",
    description: "Multi-channel platform for the South Asian business community. Coming soon to San Jose.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(cormorant.variable, raleway.variable, mono.variable, "font-sans", geist.variable)}>
      <body className="bg-ink text-white font-body antialiased"><LenisProvider>{children}</LenisProvider></body>
    </html>
  );
}
