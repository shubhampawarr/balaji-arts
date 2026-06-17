import type { Metadata } from 'next';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Balaji Arts for multicolour offset printing and packaging work in Malad West, Mumbai.',
};

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}?text=${encodeURIComponent(
    'Hello Balaji Arts, I would like to enquire about printing and packaging work.'
  )}`;

  return (
    <div className="bg-[#fbf7ef] px-5 pt-32 md:px-8 md:pt-40">
      <section className="mx-auto max-w-7xl pb-20">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/40">
              Contact
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-[#111111] md:text-7xl">
              Let’s discuss your print requirement.
            </h1>
          </div>

          <p className="text-lg leading-8 text-black/60">
            Call or WhatsApp Balaji Arts for multicolour offset printing,
            packaging product manufacturing, stickers, labels and custom print
            requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 pb-24 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2.5rem] bg-[#111111] p-6 text-white md:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            Balaji Arts
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/55">
            Multicolour offset printing and packaging solutions from Malad West,
            Mumbai.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
              <Phone size={24} />
              <h3 className="mt-5 text-lg font-semibold">Phone / WhatsApp</h3>
              <a
                href={`tel:${siteContent.company.phone}`}
                className="mt-2 inline-block text-sm text-white/65 underline underline-offset-4"
              >
                {siteContent.company.phone}
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
              <MapPin size={24} />
              <h3 className="mt-5 text-lg font-semibold">Address</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                {siteContent.company.address}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
              <Clock size={24} />
              <h3 className="mt-5 text-lg font-semibold">Business Hours</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Contact directly to confirm timings.
              </p>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#fbf7ef]"
          >
            WhatsApp Now
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="rounded-[2.5rem] border border-black/10 bg-white p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/40">
            Enquiry Details
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
            What to share when enquiring
          </h2>
          <p className="mt-4 text-sm leading-7 text-black/55">
            To get a faster and more accurate response, share the basic details
            of your print or packaging requirement.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              'Type of work — printing, packaging, stickers or labels',
              'Approximate quantity required',
              'Size, material or sample reference if available',
              'Design/artwork file if already prepared',
              'Delivery or pickup expectations',
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-black/10 bg-[#fbf7ef] p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-7 text-black/65">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-[#111111] p-6 text-white">
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Gala No. 10, BJ Patel Industrial Estate, Opposite Khwaish Hotel,
              Kanchpada, Malad West, Mumbai 400064.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}