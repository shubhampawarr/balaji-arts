'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteContent } from '@/data/siteContent';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#fbf7ef]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-12 w-40 md:h-14 md:w-48">
            <Image
              src="/images/balaji-logo.png"
              alt="Balaji Arts logo"
              fill
              priority
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain object-left"
            />
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

        <div className="hidden md:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
          >
            Get Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-black/10 bg-[#fbf7ef] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {siteContent.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-black/70"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-[#151515] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get Quote on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}