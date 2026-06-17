import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Layers3,
  PackageCheck,
  Printer,
  Tags,
} from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Balaji Arts services including multicolour offset printing, packaging products, stickers, labels and custom print solutions in Malad West, Mumbai.',
};

const primaryServices = [
  {
    icon: Printer,
    title: 'Multicolour Offset Printing',
    eyebrow: 'CMYK Print Production',
    image: '/images/offset-printing.jpg',
    accent: 'from-cyan-400/35 via-cyan-200/10 to-transparent',
    iconColor: 'text-cyan-500',
    description:
      'Sharp, colour-conscious offset printing for businesses that need professional output, clean finishing and dependable production quality.',
    points: [
      'Colour-accurate print output',
      'Business and product material',
      'Sharp detail and clean finish',
      'Requirement-based production',
    ],
  },
  {
    icon: Boxes,
    title: 'Packaging Products',
    eyebrow: 'Packaging Manufacturing',
    image: '/images/packaging-products.jpg',
    accent: 'from-pink-500/35 via-pink-200/10 to-transparent',
    iconColor: 'text-pink-500',
    description:
      'Packaging products manufactured to make your product look more presentable, reliable and market-ready.',
    points: [
      'Product packaging support',
      'Custom sizing and formats',
      'Presentation-first finishing',
      'Business-ready packaging output',
    ],
  },
  {
    icon: Tags,
    title: 'Stickers & Labels',
    eyebrow: 'Labels & Identification',
    image: '/images/labels-stickers.jpg',
    accent: 'from-yellow-400/40 via-yellow-200/10 to-transparent',
    iconColor: 'text-yellow-500',
    description:
      'Custom stickers and labels for products, packaging, branding, identification and polished final presentation.',
    points: [
      'Product labels',
      'Brand stickers',
      'Packaging labels',
      'Custom label requirements',
    ],
  },
  {
    icon: Layers3,
    title: 'Custom Print Work',
    eyebrow: 'Tailored Print Solutions',
    image: '/images/printing-machine.jpg',
    accent: 'from-black/35 via-black/10 to-transparent',
    iconColor: 'text-black',
    description:
      'Requirement-led print and packaging support based on quantity, material, size, finishing and business use.',
    points: [
      'Custom print requirements',
      'Material and finish guidance',
      'Bulk coordination',
      'Direct communication',
    ],
  },
];

const enquiryTypes = [
  'Product Packaging',
  'Offset Printing',
  'Stickers',
  'Product Labels',
  'Business Printing',
  'Packaging Labels',
  'Custom Sizes',
  'Bulk Orders',
];

const processSteps = [
  {
    title: 'Share Requirement',
    text: 'Send the product, print or packaging requirement with size, quantity and reference if available.',
  },
  {
    title: 'Confirm Details',
    text: 'Material, finish, quantity and usage are discussed before production direction is finalized.',
  },
  {
    title: 'Print & Production',
    text: 'The work is coordinated with focus on colour output, finishing and practical business use.',
  },
  {
    title: 'Final Handover',
    text: 'Finished print or packaging material is prepared for pickup, dispatch or further coordination.',
  },
];

export default function ServicesPage() {
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}?text=${encodeURIComponent(
    'Hello Balaji Arts, I would like to enquire about printing and packaging work.'
  )}`;

  return (
    <div className="overflow-hidden bg-[#fbf7ef] px-5 pt-24 md:px-8 md:pt-36">
      {/* Hero */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-16">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#111111] p-5 text-white md:rounded-[2rem] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(236,72,153,0.23),transparent_28%),radial-gradient(circle_at_55%_95%,rgba(250,204,21,0.2),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />

          <div className="relative z-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-8">
            <div>
              <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60 md:px-4 md:text-xs md:tracking-[0.24em]">
                Services
              </p>

              <h1 className="mt-5 max-w-3xl text-[2.35rem] font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
                Printing and packaging that makes products look finished.
              </h1>
            </div>

            <div>
              <p className="max-w-2xl text-sm leading-7 text-white/65 md:text-base md:leading-8">
                Balaji Arts provides multicolour offset printing, packaging
                product manufacturing, stickers, labels and custom print
                solutions from Malad West, Mumbai.
              </p>

              <div className="mt-5 flex gap-2 md:mt-6">
                <span className="h-1.5 flex-1 rounded-full bg-cyan-400 md:h-2" />
                <span className="h-1.5 flex-1 rounded-full bg-pink-500 md:h-2" />
                <span className="h-1.5 flex-1 rounded-full bg-yellow-400 md:h-2" />
                <span className="h-1.5 flex-1 rounded-full bg-white md:h-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service Cards */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-16">
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {primaryServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 md:rounded-[2rem]"
              >
                <div className="relative">
                  <div className="relative h-44 overflow-hidden md:h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.accent}`}
                    />

                    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3.5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-white/85 backdrop-blur md:left-5 md:top-5 md:px-4 md:text-[0.65rem] md:tracking-[0.2em]">
                      {service.eyebrow}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-lg md:h-12 md:w-12">
                        <Icon size={23} className={service.iconColor} />
                      </div>

                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:mt-4">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="border-t border-black/10 p-5 md:p-6">
                    <p className="text-sm leading-7 text-black/65">
                      {service.description}
                    </p>

                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2 rounded-2xl border border-black/10 bg-[#fbf7ef] p-3"
                        >
                          <BadgeCheck
                            size={15}
                            className="mt-0.5 shrink-0 text-black"
                          />
                          <p className="text-xs font-medium leading-5 text-black/65">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enquiry Types */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-16">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-5 shadow-sm md:rounded-[2rem] md:p-10">
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              What You Can Enquire For
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-black md:text-4xl">
              Practical print and packaging requirements, handled directly.
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60">
              Share product samples, artwork files, size details, quantity
              estimates or reference images for faster coordination.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4">
            {enquiryTypes.map((item, index) => {
              const accent =
                index % 4 === 0
                  ? 'border-cyan-400/40 bg-cyan-50'
                  : index % 4 === 1
                    ? 'border-pink-400/40 bg-pink-50'
                    : index % 4 === 2
                      ? 'border-yellow-400/50 bg-yellow-50'
                      : 'border-black/15 bg-[#fbf7ef]';

              return (
                <div
                  key={item}
                  className={`rounded-2xl border p-3.5 text-center shadow-sm md:p-4 ${accent}`}
                >
                  <p className="text-xs font-semibold leading-5 text-black/75 md:text-sm md:leading-6">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-16">
        <div className="rounded-[1.7rem] bg-[#111111] p-5 text-white md:rounded-[2rem] md:p-10">
          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-8">
            <div>
              <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/45 md:px-4 md:text-xs md:tracking-[0.24em]">
                Process
              </p>

              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
                From print requirement to finished output.
              </h2>
            </div>

            <p className="text-sm leading-7 text-white/60">
              The process is kept practical: understand the requirement, confirm
              the production direction, execute carefully and prepare the final
              material with clear communication.
            </p>
          </div>

          <div className="mt-7 grid gap-3 md:mt-8 md:grid-cols-4 md:gap-4">
            {processSteps.map((step, index) => {
              const color =
                index === 0
                  ? 'bg-cyan-400 text-black'
                  : index === 1
                    ? 'bg-pink-500 text-white'
                    : index === 2
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white text-black';

              return (
                <div
                  key={step.title}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.09] md:rounded-[1.5rem] md:p-5"
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold md:h-10 md:w-10 ${color}`}
                  >
                    {index + 1}
                  </div>

                  <h3 className="mt-5 text-base font-semibold md:mt-6 md:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/58 md:mt-3 md:leading-7">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-16">
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-5">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-5 shadow-sm md:rounded-[2rem] md:p-10">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-cyan-300/25 md:h-28 md:w-28" />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-pink-300/20 md:h-28 md:w-28" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
                Production Focus
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-black md:text-4xl">
                Built for clean presentation, dependable finishing and practical
                business use.
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/60">
                Printing and packaging are often the first physical touchpoint
                of a product or business. Balaji Arts focuses on output that
                looks neat, supports the brand and works reliably for the
                intended use.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-7">
                {[
                  'Colour-conscious print output',
                  'Material and finishing guidance',
                  'Packaging-focused execution',
                  'Direct production coordination',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#fbf7ef] p-3.5 md:p-4"
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

          <div className="relative min-h-64 overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-sm md:min-h-full md:rounded-[2rem]">
            <Image
              src="/images/printing-machine.jpg"
              alt="Printing and packaging production focus"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                Balaji Arts
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
                Print and packaging production from Malad West.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl pb-16 md:pb-20">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#111111] p-5 text-center text-white shadow-sm md:rounded-[2rem] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(236,72,153,0.2),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.2),transparent_35%)]" />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              Start an Enquiry
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              Have a printing, sticker, label or packaging requirement?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/58">
              Send your requirement, quantity, size, material preference or
              sample reference. Balaji Arts can coordinate the next step
              directly.
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
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}