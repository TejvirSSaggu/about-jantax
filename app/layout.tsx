import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "JantaX — Sell out your next event.",
  description:
    "Create the listing, sell the tickets, check people in at the door, and get paid — one platform built for the people running real events in your city.",
  openGraph: {
    title: "JantaX — Sell out your next event.",
    description: "End-to-end event hosting for hyperlocal organizers.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable} ${mono.variable}`}>
      <body className="bg-ink text-white font-body antialiased">{children}</body>
    </html>
  );
}
