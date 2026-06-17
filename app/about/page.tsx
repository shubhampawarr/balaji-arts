import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Factory,
  Handshake,
  Layers3,
  MapPin,
  PackageCheck,
  Printer,
  Sparkles,
  Users,
} from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Balaji Arts, a family-run multicolour offset printing and packaging business based in Malad West, Mumbai.',
};

const storyPoints = [
  {
    icon: Building2,
    title: 'Started with print craftsmanship',
    text: 'Balaji Arts began as a hands-on printing business built around practical production, client trust and consistent delivery.',
    accent: 'bg-cyan-50 text-cyan-600 border-cyan-400/30',
  },
  {
    icon: Factory,
    title: 'Grew into packaging support',
    text: 'Over time, the work expanded from multicolour offset printing into packaging products, stickers, labels and custom print requirements.',
    accent: 'bg-pink-50 text-pink-600 border-pink-400/30',
  },
  {
    icon: Users,
    title: 'Carried forward by the next generation',
    text: 'Today, Shivam Swami helps his father take the business forward with sharper communication, modern presentation and growth-focused service.',
    accent: 'bg-yellow-50 text-yellow-600 border-yellow-400/40',
  },
];

const strengths = [
  '30+ years of practical printing experience',
  'Multicolour offset printing expertise',
  'Packaging product manufacturing',
  'Sticker and label support',
  'Direct owner-led coordination',
  'Located in Malad West, Mumbai',
];

const values = [
  {
    title: 'Dependable Execution',
    text: 'The business is built around practical delivery, clear coordination and print work that clients can rely on.',
  },
  {
    title: 'Clean Finishing',
    text: 'Every product should look presentable, finished and suitable for real business use.',
  },
  {
    title: 'Long-Term Trust',
    text: 'Balaji Arts focuses on building working relationships, not just completing one-time jobs.',
  },
];

const timeline = [
  {
    year: 'Foundation',
    title: 'A family printing business begins',
    text: 'Balaji Arts was started with a focus on print production, dependable service and hands-on client work.',
  },
  {
    year: 'Growth',
    title: 'Printing expands into packaging',
    text: 'As client requirements evolved, the business strengthened its work across packaging products, labels and custom print solutions.',
  },
  {
    year: 'Today',
    title: 'Legacy with a modern direction',
    text: 'With Shivam Swami supporting the business, Balaji Arts is working toward stronger presentation, better communication and wider business reach.',
  },
];

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}?text=${encodeURIComponent(
    'Hello Balaji Arts, I would like to enquire about printing and packaging work.'
  )}`;

  return (
    <div className="overflow-hidden bg-[#fbf7ef] px-5 pt-24 md:px-8 md:pt-36">
      {/* Hero */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#111111] p-5 text-center text-white md:rounded-[2rem] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.18),transparent_34%)]" />
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60 md:px-4 md:text-xs md:tracking-[0.24em]">
              About Balaji Arts
            </p>

            <h1 className="mt-5 text-[2.35rem] font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
              A family-run printing and packaging business built on trust.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base md:leading-8">
              Balaji Arts is a Malad-based multicolour offset printing and
              packaging business shaped by years of practical experience,
              hands-on production and long-term client relationships.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-2 md:mx-auto md:max-w-2xl md:gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                <p className="text-xl font-semibold md:text-2xl">30+</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-white/45">
                  Years
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                <p className="text-xl font-semibold md:text-2xl">Offset</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-white/45">
                  Printing
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                <p className="text-xl font-semibold md:text-2xl">Mumbai</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-white/45">
                  Based
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.7rem] border border-black/10 bg-white p-5 shadow-sm md:rounded-[2rem] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              Company Story
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-black md:text-4xl">
              Started by Sugumaran Swami. Now growing forward with Shivam
              Swami.
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/60 md:text-base md:leading-8">
              Balaji Arts was built through practical work, client referrals and
              years of experience in printing. The business started with a
              simple belief: printing should be reliable, clearly coordinated
              and finished well enough to support the client’s product or
              business.
            </p>

            <p className="mt-4 text-sm leading-7 text-black/60 md:text-base md:leading-8">
              Over the years, the company’s work expanded beyond offset printing
              into packaging products, stickers, labels and custom print
              requirements. This growth came from understanding what businesses
              actually need: presentable output, dependable finishing and direct
              communication.
            </p>

            <p className="mt-4 text-sm leading-7 text-black/60 md:text-base md:leading-8">
              Today, Shivam Swami helps his father carry the business forward
              with a more modern outlook while keeping the same foundation of
              trust, practical production and hands-on service.
            </p>

            <div className="mt-7 flex gap-2">
              <span className="h-1.5 flex-1 rounded-full bg-cyan-400" />
              <span className="h-1.5 flex-1 rounded-full bg-pink-500" />
              <span className="h-1.5 flex-1 rounded-full bg-yellow-400" />
              <span className="h-1.5 flex-1 rounded-full bg-black" />
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-sm md:min-h-full md:rounded-[2rem]">
            <Image
              src="/images/printing-machine.jpg"
              alt="Balaji Arts printing production"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                Legacy in Production
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                Built through hands-on print and packaging work.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Story Cards */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          {storyPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${item.accent}`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/58">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strengths */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-5 text-center shadow-sm md:rounded-[2rem] md:p-10">
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />

          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              What Balaji Arts Stands For
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              Print work that feels professional before the product is even
              opened.
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/55">
              The focus is not only on printing. It is on presentation,
              finishing, communication and making sure the final output supports
              the client’s business.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {strengths.map((item, index) => {
              const accent =
                index % 3 === 0
                  ? 'border-cyan-400/40 bg-cyan-50'
                  : index % 3 === 1
                    ? 'border-pink-400/40 bg-pink-50'
                    : 'border-yellow-400/50 bg-yellow-50';

              return (
                <div
                  key={item}
                  className={`rounded-2xl border p-3.5 text-center shadow-sm md:p-4 ${accent}`}
                >
                  <p className="text-xs font-semibold leading-5 text-black/72 md:text-sm md:leading-6">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="rounded-[1.7rem] bg-[#111111] p-5 text-white md:rounded-[2rem] md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              Journey
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              From a print shop to a trusted packaging partner.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/58">
              The story of Balaji Arts is steady growth: printing expertise,
              packaging capability and a stronger business presence over time.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {timeline.map((item, index) => {
              const color =
                index === 0
                  ? 'bg-cyan-400 text-black'
                  : index === 1
                    ? 'bg-pink-500 text-white'
                    : 'bg-yellow-400 text-black';

              return (
                <div
                  key={item.title}
                  className="rounded-[1.45rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <div
                    className={`inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${color}`}
                  >
                    {item.year}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/58">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Mindset */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-64 overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-sm md:min-h-full md:rounded-[2rem]">
            <Image
              src="/images/packaging-products.jpg"
              alt="Balaji Arts packaging products"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                Packaging Focus
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
                Packaging that helps products look market-ready.
              </h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-5 shadow-sm md:rounded-[2rem] md:p-10">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-cyan-300/25 md:h-28 md:w-28" />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-pink-300/20 md:h-28 md:w-28" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
                Production Mindset
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-black md:text-4xl">
                Practical guidance, clean output and direct coordination.
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/60">
                Every requirement is different. Some clients need packaging that
                looks premium on a shelf. Some need labels that clearly identify
                the product. Some need offset printing that looks sharp and
                consistent. Balaji Arts works around the requirement instead of
                forcing every project into one fixed format.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Requirement-based approach',
                  'Material and finish discussion',
                  'Print and packaging support',
                  'Client-first coordination',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#fbf7ef] p-3.5"
                  >
                    <PackageCheck size={17} className="mt-0.5 shrink-0" />
                    <p className="text-sm font-medium leading-6 text-black/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white">
                <Sparkles size={21} />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/58">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="rounded-[1.7rem] border border-black/10 bg-white p-5 text-center shadow-sm md:rounded-[2rem] md:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white">
            <MapPin size={23} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            Based in Malad West
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
            Serving businesses from BJ Patel Industrial Estate, Mumbai.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/58">
            {siteContent.company.address}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl pb-16 md:pb-20">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#111111] p-5 text-center text-white shadow-sm md:rounded-[2rem] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(236,72,153,0.2),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.2),transparent_35%)]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              Work With Balaji Arts
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              Looking for reliable printing or packaging support?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/58">
              Send your requirement, quantity, size, material preference or
              reference image. Balaji Arts can coordinate the next step directly.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#fbf7ef]"
              >
                WhatsApp Requirement
                <ArrowRight size={16} />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}