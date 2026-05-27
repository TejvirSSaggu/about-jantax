// Inline SVG social icons — lucide-react in this project is v1 (pre-social-icons)
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4l16 16M20 4 4 20"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <a href="#" className="font-display text-2xl text-white tracking-tight">JantaX</a>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-3">
            Hyperlocal event hosting · Coming soon to San Jose
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <FooterCol title="Company">
            <a href="#" className="footer-link">About</a>
          </FooterCol>
          <FooterCol title="Legal">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </FooterCol>
        </div>
        <div className="flex gap-4 text-white/50">
          <a href="#" aria-label="Instagram" className="hover:text-pink transition-colors"><IconInstagram /></a>
          <a href="#" aria-label="LinkedIn"  className="hover:text-pink transition-colors"><IconLinkedin /></a>
          <a href="#" aria-label="X / Twitter" className="hover:text-pink transition-colors"><IconX /></a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mt-10">
        © 2026 JantaX · All rights reserved
      </div>
      <style>{`.footer-link { display:block; color:rgba(255,255,255,0.55); margin-top: 0.5rem; } .footer-link:hover { color: #e06cb0; }`}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">{title}</div>
      {children}
    </div>
  );
}
