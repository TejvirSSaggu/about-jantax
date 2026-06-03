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
  title: "JantaX — Your city's South Asian community, all in one place.",
  description:
    "Discover local events, trusted businesses, exclusive deals, housing, and community opportunities — all curated for South Asians in your city. Launching first in San Jose.",
  openGraph: {
    title: "JantaX — Your city's South Asian community, all in one place.",
    description: "Events, deals, business profiles, and rentals — one platform for the South Asian community. Launching first in San Jose.",
    url: "https://about.jantax.com",
    siteName: "JantaX",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JantaX — Your city's South Asian community, all in one place.",
    description: "Events, deals, business profiles, and rentals — one platform for the South Asian community. Launching first in San Jose.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(cormorant.variable, raleway.variable, mono.variable, "font-sans", geist.variable)}>
      <body className="bg-ink text-white font-body antialiased"><LenisProvider>{children}</LenisProvider></body>
    </html>
  );
}
