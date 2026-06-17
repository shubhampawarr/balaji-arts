import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Layers3,
  Printer,
  Tags,
} from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Balaji Arts services including multicolour offset printing, packaging products, stickers, labels and custom print solutions.',
};

const serviceDetails = [
  {
    icon: Printer,
    title: 'Multicolour Offset Printing',
    description:
      'Professional offset printing for business communication, product material and brand requirements.',
    points: [
      'Multicolour print output',
      'Business and product printing',
      'Clean finishing',
      'Custom print requirements',
    ],
  },
  {
    icon: Boxes,
    title: 'Packaging Products',
    description:
      'Manufacturing of packaging products designed for presentation, product use and brand value.',
    points: [
      'Product packaging',
      'Custom packaging requirements',
      'Business-ready finishing',
      'Packaging support for brands',
    ],
  },
  {
    icon: Tags,
    title: 'Stickers & Labels',
    description:
      'Custom stickers and labels for products, packaging, branding and identification needs.',
    points: [
      'Product labels',
      'Custom stickers',
      'Brand labels',
      'Packaging labels',
    ],
  },
  {
    icon: Layers3,
    title: 'Custom Print Solutions',
    description:
      'Print and packaging work tailored to quantity, material, finish and client requirements.',
    points: [
      'Requirement-based work',
      'Material and finish guidance',
      'Bulk coordination',
      'Direct communication',
    ],
  },
];

export default function ServicesPage() {
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}`;

  return (
    <div className="bg-[#fbf7ef] px-5 pt-32 md:px-8 md:pt-40">
      <section className="mx-auto max-w-7xl pb-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/40">
            Services
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-[#111111] md:text-7xl">
            Printing and packaging solutions for brands and businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Balaji Arts provides multicolour offset printing, packaging product
            manufacturing, stickers, labels and custom print solutions from
            Malad West, Mumbai.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[2.25rem] border border-black/10 bg-white/75 p-7 transition hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <Icon size={34} />
                  <span className="text-sm font-semibold text-black/30">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-10 text-3xl font-semibold tracking-[-0.03em]">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-black/55">
                  {service.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-[#fbf7ef] p-4"
                    >
                      <BadgeCheck size={18} className="mt-0.5 shrink-0" />
                      <p className="text-sm leading-6 text-black/60">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-24">
        <div className="rounded-[2.5rem] bg-[#111111] p-6 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
                Process
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Simple coordination for print and packaging work.
              </h2>
            </div>

            <p className="text-sm leading-7 text-white/55">
              Share your requirement, reference, quantity and material details.
              Balaji Arts can guide the print or packaging work based on the
              required output and finish.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              'Share requirement',
              'Confirm quantity',
              'Finalize material & finish',
              'Production coordination',
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
              >
                <span className="text-sm font-semibold text-white/30">
                  Step 0{index + 1}
                </span>
                <h3 className="mt-8 text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-24">
        <div className="rounded-[2.5rem] border border-black/10 bg-white p-6 md:p-12">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Have a print or packaging requirement?
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-black/55">
            Contact Balaji Arts with your product details, print quantity or
            sample reference.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 text-sm font-semibold text-white transition hover:bg-black"
            >
              WhatsApp Requirement
              <ArrowRight size={17} />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#fbf7ef]"
            >
              Contact Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}