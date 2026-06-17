import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Balaji Arts for multicolour offset printing, packaging products, stickers and labels in Malad West, Mumbai.',
};

const enquiryChecklist = [
  'Type of work required',
  'Approximate quantity',
  'Size or sample reference',
  'Material or finish preference',
  'Artwork/design file if available',
  'Pickup or delivery expectation',
];

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}?text=${encodeURIComponent(
    'Hello Balaji Arts, I would like to enquire about printing and packaging work. My requirement is:'
  )}`;

  return (
    <div className="overflow-hidden bg-[#fbf7ef] px-5 pt-24 md:px-8 md:pt-36">
      {/* Hero */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#111111] p-5 text-center text-white md:rounded-[2rem] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.18),transparent_34%)]" />
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60 md:px-4 md:text-xs md:tracking-[0.24em]">
              Contact Balaji Arts
            </p>

            <h1 className="mt-5 text-[2.35rem] font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
              Let’s discuss your print or packaging requirement.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base md:leading-8">
              Call or WhatsApp Balaji Arts for multicolour offset printing,
              packaging products, stickers, labels and custom print work from
              Malad West, Mumbai.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#fbf7ef]"
              >
                WhatsApp Now
                <ArrowRight size={16} />
              </a>

              <a
                href={`tel:${siteContent.company.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                Call {siteContent.company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          <a
            href={`tel:${siteContent.company.phone}`}
            className="group rounded-[1.6rem] border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 md:p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 md:h-11 md:w-11">
              <Phone size={21} />
            </div>

            <h2 className="mt-5 text-lg font-semibold tracking-[-0.03em] md:mt-6 md:text-xl">
              Phone
            </h2>

            <p className="mt-2 text-xs leading-5 text-black/55 md:text-sm md:leading-6">
              Speak directly for printing, packaging or label requirements.
            </p>

            <p className="mt-4 text-xs font-semibold text-black underline underline-offset-4 md:text-sm">
              {siteContent.company.phone}
            </p>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.6rem] border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 md:p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 md:h-11 md:w-11">
              <MessageCircle size={21} />
            </div>

            <h2 className="mt-5 text-lg font-semibold tracking-[-0.03em] md:mt-6 md:text-xl">
              WhatsApp
            </h2>

            <p className="mt-2 text-xs leading-5 text-black/55 md:text-sm md:leading-6">
              Send your requirement, reference image or artwork file.
            </p>

            <p className="mt-4 text-xs font-semibold text-black underline underline-offset-4 md:text-sm">
              Start enquiry
            </p>
          </a>

          <div className="col-span-2 rounded-[1.6rem] border border-black/10 bg-white p-4 shadow-sm md:col-span-1 md:p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 md:h-11 md:w-11">
              <Clock size={21} />
            </div>

            <h2 className="mt-5 text-lg font-semibold tracking-[-0.03em] md:mt-6 md:text-xl">
              Business Timing
            </h2>

            <p className="mt-2 text-sm leading-6 text-black/55">
              Please call or WhatsApp directly to confirm availability before
              visiting.
            </p>

            <p className="mt-4 text-sm font-semibold text-black">
              Contact before visit
            </p>
          </div>
        </div>
      </section>

      {/* Location + Enquiry Details */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.7rem] border border-black/10 bg-white p-5 shadow-sm md:rounded-[2rem] md:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white">
              <MapPin size={22} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">
              Visit Balaji Arts
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60">
              {siteContent.company.address}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteContent.company.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#fbf7ef]"
              >
                <Send size={16} />
                Send Requirement
              </a>
            </div>

            <div className="mt-6 flex gap-2">
              <span className="h-1.5 flex-1 rounded-full bg-cyan-400" />
              <span className="h-1.5 flex-1 rounded-full bg-pink-500" />
              <span className="h-1.5 flex-1 rounded-full bg-yellow-400" />
              <span className="h-1.5 flex-1 rounded-full bg-black" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#fbf7ef] shadow-sm md:rounded-[2rem]">
            <iframe
              title="B.J. Industrial Estate location map"
              src="https://www.google.com/maps?q=19.1890067,72.8377401&z=18&output=embed"
              className="h-[260px] w-full border-0 md:h-full md:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Enquiry Checklist */}
      <section className="mx-auto max-w-7xl pb-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-5 text-center shadow-sm md:rounded-[2rem] md:p-10">
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400" />

          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              Faster Enquiry
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              What to share when you contact us.
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/55">
              These details help Balaji Arts understand the requirement faster
              and guide the next step clearly.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {enquiryChecklist.map((item, index) => {
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
                  <p className="text-xs font-semibold leading-5 text-black/70 md:text-sm md:leading-6">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl pb-16 md:pb-20">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#111111] p-5 text-center text-white shadow-sm md:rounded-[2rem] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(236,72,153,0.2),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.2),transparent_35%)]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              Start an Enquiry
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              Send your printing or packaging requirement today.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/58">
              Share your requirement on WhatsApp with quantity, size, material
              preference or a reference image.
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