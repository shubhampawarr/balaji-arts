import type { Metadata } from 'next';
import { BadgeCheck, Factory, MapPin, Printer } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Balaji Arts, a 30-year-old multicolour offset printing and packaging business based in Malad West, Mumbai.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#fbf7ef] px-5 pt-32 md:px-8 md:pt-40">
      <section className="mx-auto max-w-7xl pb-20">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/40">
              About Balaji Arts
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-[#111111] md:text-7xl">
              Built on three decades of print craftsmanship.
            </h1>
          </div>

          <p className="text-lg leading-8 text-black/60">
            Balaji Arts is a Malad-based multicolour offset printing and
            packaging business serving brands, businesses and product owners
            with dependable printing and packaging solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {[
            {
              icon: BadgeCheck,
              title: '30+ Years',
              text: 'A legacy business started by Shivam’s father.',
            },
            {
              icon: Printer,
              title: 'Offset Printing',
              text: 'Multicolour printing for business and product use.',
            },
            {
              icon: Factory,
              title: 'Packaging',
              text: 'Manufacturing of packaging products.',
            },
            {
              icon: MapPin,
              title: 'Malad West',
              text: 'Located in Mumbai for direct coordination.',
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/10 bg-white/70 p-6"
              >
                <Icon size={28} />
                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-24">
        <div className="grid gap-10 rounded-[2.5rem] bg-[#111111] p-6 text-white md:grid-cols-[0.8fr_1.2fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
              Legacy
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              A family-run business with practical experience.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/60">
              Started by Shivam&apos;s father, Balaji Arts has grown through
              consistent work, trusted relationships and practical understanding
              of printing and packaging. The business continues to serve clients
              with direct communication, reliable execution and attention to
              finishing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {siteContent.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <p className="text-sm leading-6 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-24">
        <div className="rounded-[2.5rem] border border-black/10 bg-white p-6 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/40">
            Philosophy
          </p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Good print work should make a product look more reliable, finished
            and brand-ready.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              'Clean colour output',
              'Reliable production coordination',
              'Practical packaging understanding',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-[#fbf7ef] p-6"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-4 text-sm leading-7 text-black/55">
                  Balaji Arts focuses on print and packaging work that is useful,
                  presentable and aligned with business requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}