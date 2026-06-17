import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  MapPin,
  Printer,
  Sparkles,
  Users,
} from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Balaji Arts, a 30-year-old multicolour offset printing and packaging business based in Malad West, Mumbai.',
};

const usePlaceholderImages = true;

function PhotoPlaceholder({
  label,
  sublabel,
  className = '',
}: {
  label: string;
  sublabel: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-72 overflow-hidden rounded-[1.6rem] bg-[#111111] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),linear-gradient(135deg,rgba(6,182,212,0.18),rgba(236,72,153,0.12),rgba(250,204,21,0.12))]" />
      <div className="absolute inset-0 border border-white/10" />

      <div className="relative z-10 mt-auto p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
          Photo coming soon
        </p>
        <h3 className="mt-3 text-xl font-semibold">{label}</h3>
        <p className="mt-2 text-sm leading-6 text-white/55">{sublabel}</p>
      </div>
    </div>
  );
}

function PersonPhoto({
  src,
  name,
  role,
  description,
}: {
  src: string;
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-white shadow-sm">
      <div className="relative min-h-80">
        {usePlaceholderImages ? (
          <PhotoPlaceholder label={name} sublabel={role} className="h-full rounded-none" />
        ) : (
          <Image
            src={src}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/35">
          {role}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
          {name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-black/55">{description}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}`;

  const values = [
    {
      title: 'Reliable Production',
      text: 'Print and packaging work handled with practical coordination, clear communication and dependable execution.',
    },
    {
      title: 'Clean Finishing',
      text: 'A focus on sharp output, neat presentation and print work that supports the final product.',
    },
    {
      title: 'Business Understanding',
      text: 'Solutions shaped around quantity, material, finish and the practical needs of each client.',
    },
  ];

  const highlights = [
    '30+ years of print experience',
    'Started by Sugumaran Swami',
    'Now expanding with Shivam Swami',
    'Multicolour offset printing',
    'Packaging product manufacturing',
    'Based in Malad West, Mumbai',
  ];

  return (
    <div className="overflow-hidden bg-[#fbf7ef] px-5 pt-28 md:px-8 md:pt-36">
      {/* Hero */}
      <section className="mx-auto max-w-7xl pb-12 md:pb-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              About Balaji Arts
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[#111111] md:text-6xl">
              A family-run print business built over three decades.
            </h1>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-black/60 md:text-base md:leading-8">
            Balaji Arts is a Malad-based multicolour offset printing and
            packaging business serving brands, businesses and product owners
            with dependable print and packaging solutions.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="mx-auto max-w-7xl pb-12 md:pb-16">
        <div className="grid overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 shadow-sm md:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-72 md:min-h-full">
            {usePlaceholderImages ? (
              <PhotoPlaceholder
                label="Sugumaran Swami & Shivam Swami"
                sublabel="Founder and second generation"
                className="h-full rounded-none"
              />
            ) : (
              <Image
                src="/images/founder-next-gen.jpg"
                alt="Sugumaran Swami and Shivam Swami"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            )}
          </div>

          <div className="p-6 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white">
              <Users size={14} />
              Legacy & Growth
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Started by Sugumaran Swami. Growing forward with Shivam Swami.
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/60 md:text-base md:leading-8">
              Balaji Arts was started by Sugumaran Swami with a commitment to
              dependable print work, practical production and long-term client
              relationships. Over the years, the business has grown through
              consistency, trust and hands-on experience in printing and
              packaging.
            </p>

            <p className="mt-4 text-sm leading-7 text-black/60 md:text-base md:leading-8">
              Today, Shivam Swami helps his father expand the business while
              carrying forward the same values: clear communication, reliable
              finishing and quality-focused execution for every client
              requirement.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#fbf7ef] p-4"
                >
                  <BadgeCheck className="mt-0.5 shrink-0" size={17} />
                  <p className="text-sm leading-6 text-black/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* People Behind Balaji Arts */}
      <section className="mx-auto max-w-7xl pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            People Behind Balaji Arts
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Founder experience with next-generation growth.
          </h2>

          <p className="mt-4 text-sm leading-7 text-black/55">
            A business shaped by Sugumaran Swami’s practical experience and now
            supported by Shivam Swami’s focus on expanding its reach.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <PersonPhoto
            src="/images/sugumaran-swami.jpg"
            name="Sugumaran Swami"
            role="Founder"
            description="Started Balaji Arts with a focus on dependable printing, practical production and long-term client relationships."
          />

          <PersonPhoto
            src="/images/shivam-swami.jpg"
            name="Shivam Swami"
            role="Second Generation"
            description="Helps his father expand Balaji Arts while continuing the same commitment to quality, communication and reliable execution."
          />
        </div>
      </section>

      {/* Workshop / Process Visuals */}
      <section className="mx-auto max-w-7xl pb-12 md:pb-16">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 shadow-sm">
            <div className="relative min-h-72 md:min-h-[28rem]">
              {usePlaceholderImages ? (
                <PhotoPlaceholder
                  label="Workshop & Production"
                  sublabel="Printing and packaging workspace"
                  className="h-full rounded-none"
                />
              ) : (
                <Image
                  src="/images/workshop-team.jpg"
                  alt="Balaji Arts workshop and production"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#111111] p-6 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
              Production Mindset
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Practical execution, clean finishing and direct coordination.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Balaji Arts works closely with client requirements — from print
              quantity and material choice to packaging use and final finishing.
              The focus is simple: output that looks neat, works practically and
              supports the client’s product or business.
            </p>

            <div className="mt-7 space-y-3">
              {[
                'Requirement-based print and packaging support',
                'Focus on clean finishing and presentation',
                'Direct communication for production clarity',
                'Experience-backed guidance for practical output',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <BadgeCheck className="mt-0.5 shrink-0" size={17} />
                  <p className="text-sm leading-6 text-white/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capability Cards */}
      <section className="mx-auto max-w-7xl pb-12 md:pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.6rem] border border-black/10 bg-white/80 p-6 shadow-sm">
            <Printer className="text-cyan-500" size={30} />
            <h3 className="mt-7 text-lg font-semibold">
              Multicolour Offset Printing
            </h3>
            <p className="mt-3 text-sm leading-7 text-black/55">
              Printing work focused on controlled colour, sharp output and
              professional finishing for business and product use.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-black/10 bg-white/80 p-6 shadow-sm">
            <Factory className="text-pink-500" size={30} />
            <h3 className="mt-7 text-lg font-semibold">
              Packaging Manufacturing
            </h3>
            <p className="mt-3 text-sm leading-7 text-black/55">
              Manufacturing of packaging products designed for presentation,
              protection and practical business requirements.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-black/10 bg-white/80 p-6 shadow-sm">
            <MapPin className="text-yellow-500" size={30} />
            <h3 className="mt-7 text-lg font-semibold">Malad West, Mumbai</h3>
            <p className="mt-3 text-sm leading-7 text-black/55">
              Located at BJ Patel Industrial Estate, Kanchpada, Malad West for
              direct coordination across Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl pb-12 md:pb-16">
        <div className="rounded-[2rem] bg-[#111111] p-6 text-white md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
              Philosophy
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Good print work should make a product look finished, reliable and
              brand-ready.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Balaji Arts focuses on practical execution — not unnecessary
              complexity. The goal is to deliver print and packaging work that
              looks clean, works well and supports the client’s product or
              business.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"
              >
                <Sparkles size={22} className="text-white/80" />
                <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl pb-16 md:pb-20">
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 text-center shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
            Work With Balaji Arts
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Looking for reliable printing or packaging support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/55">
            Share your requirement, quantity, material preference or sample
            reference. Balaji Arts can guide the next step directly.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Request a Quote
              <ArrowRight size={16} />
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#fbf7ef]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}