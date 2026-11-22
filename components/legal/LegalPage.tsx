import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

// The legal pages: plain, readable, printable. Same ink background as the
// site, light text, generous measure. Content components are generated from
// counsel's documents (see the header of each *Body.tsx).
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="px-6 lg:px-12 py-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display text-2xl text-white tracking-tight">JantaX</Link>
          <nav className="flex gap-5 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/sms-terms" className="hover:text-white">SMS terms</Link>
          </nav>
        </div>
      </header>
      <main className="px-6 lg:px-12 py-12">
        <article className="legal max-w-3xl mx-auto">
          <h1 className="font-display font-light text-4xl lg:text-5xl text-white mb-6">{title}</h1>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
