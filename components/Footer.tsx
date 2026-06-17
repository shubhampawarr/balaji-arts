import Link from 'next/link';
import Image from 'next/image';
import { siteContent } from '@/data/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
        <div>
          <div className="relative h-20 w-64 rounded-2xl bg-white p-3">
            <Image
              src="/images/balaji-logo.png"
              alt="Balaji Arts logo"
              fill
              sizes="256px"
              className="object-contain p-3"
            />
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Multicolour offset printing and packaging solutions from Malad,
            Mumbai, built on three decades of practical experience.
          </p>

          <div className="mt-6 flex gap-2">
            <span className="h-1.5 w-10 rounded-full bg-cyan-400" />
            <span className="h-1.5 w-10 rounded-full bg-pink-500" />
            <span className="h-1.5 w-10 rounded-full bg-yellow-400" />
            <span className="h-1.5 w-10 rounded-full bg-white" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Navigation
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            {siteContent.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/65 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Contact
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/65">
            {siteContent.company.address}
          </p>

          <p className="mt-4 text-sm font-medium text-white">
            Phone: {siteContent.company.phone}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Balaji Arts. All rights reserved.
      </div>
    </footer>
  );
}