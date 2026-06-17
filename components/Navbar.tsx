import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Navbar() {
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#fbf7ef]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group">
          <div className="text-[1.35rem] font-semibold tracking-tight text-[#151515]">
            Balaji Arts
          </div>
          <div className="mt-0.5 text-[0.65rem] uppercase tracking-[0.24em] text-black/50">
            Offset Printing & Packaging
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteContent.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black/60 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
        >
          Get Quote
        </a>
      </nav>
    </header>
  );
}