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
  metadataBase: new URL("https://janta-x.com"),
  title: "JantaX — Your city's South Asian community, all in one place.",
  description:
    "Discover local events, trusted businesses, exclusive deals, housing, and community opportunities — all curated for South Asians in your city. Launching first in San Jose.",
  openGraph: {
    title: "JantaX — Your city's South Asian community, all in one place.",
    description: "Events, deals, business profiles, and rentals — one platform for the South Asian community. Launching first in San Jose.",
    url: "https://janta-x.com",
    siteName: "JantaX",
    // JPEG, not PNG: the same card as a PNG is ~940KB, and WhatsApp and
    // iMessage skip previews over a few hundred KB. 2400x1260 is 2x the
    // canonical 1200x630 so it stays sharp on retina.
    images: [
      {
        url: "/og-image.jpg",
        width: 2400,
        height: 1260,
        alt: "JantaX — your city's South Asian community, all in one place.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JantaX — Your city's South Asian community, all in one place.",
    description: "Events, deals, business profiles, and rentals — one platform for the South Asian community. Launching first in San Jose.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(cormorant.variable, raleway.variable, mono.variable, "font-sans", geist.variable)}>
      <body className="bg-ink text-white font-body antialiased"><LenisProvider>{children}</LenisProvider></body>
    </html>
  );
}
