import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Layers3,
  MapPin,
  Phone,
  Printer,
  Sparkles,
} from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export default function Home() {
  const whatsappLink = `https://wa.me/${siteContent.company.whatsapp}`;

  return (
    <div className="overflow-hidden bg-[#fbf7ef]">
      {/* Hero */}
      <section className="relative min-h-screen px-5 pt-32 md:px-8 md:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute right-[-8%] top-[20%] h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="absolute bottom-[8%] left-[35%] h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-black/55 shadow-sm">
              <Sparkles size={14} />
              30 Years of Print Craftsmanship
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[#111111] md:text-7xl">
              Multicolour Offset Printing & Packaging Manufacturing
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60 md:text-xl">
              Balaji Arts is a Malad-based printing and packaging business
              helping brands create sharp, reliable and professionally finished
              print products.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 text-sm font-semibold text-white transition hover:bg-black"
              >
                Get a Quote
                <ArrowRight size={17} />
              </a>

              <a
                href={`tel:${siteContent.company.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/60 px-7 py-4 text-sm font-semibold text-black transition hover:bg-white"
              >
                <Phone size={17} />
                Call {siteContent.company.phone}
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
                <div className="text-3xl font-semibold">30+</div>
                <p className="mt-1 text-sm text-black/55">Years Experience</p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
                <div className="text-3xl font-semibold">CMYK</div>
                <p className="mt-1 text-sm text-black/55">Print Expertise</p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
                <div className="text-3xl font-semibold">Mumbai</div>
                <p className="mt-1 text-sm text-black/55">Malad West</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2.5rem] border border-black/10 bg-[#111111] p-5 shadow-2xl">
              <div className="rounded-[2rem] bg-[#fbf7ef] p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <Printer className="text-cyan-500" size={34} />
                    <h3 className="mt-8 text-xl font-semibold">
                      Offset Printing
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">
                      Multicolour print solutions with clean output and
                      dependable finishing.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <Factory className="text-pink-500" size={34} />
                    <h3 className="mt-8 text-xl font-semibold">Packaging</h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">
                      Manufacturing of packaging products for business and brand
                      use.
                    </p>
                  </div>

                  <div className="col-span-2 rounded-3xl bg-white p-5 shadow-sm">
                    <Layers3 className="text-yellow-500" size={34} />
                    <h3 className="mt-8 text-xl font-semibold">
                      Stickers, Labels & Custom Work
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">
                      Practical, brand-ready print work tailored to client
                      requirements, quantity and finishing needs.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <span className="h-2 flex-1 rounded-full bg-cyan-400" />
                  <span className="h-2 flex-1 rounded-full bg-pink-500" />
                  <span className="h-2 flex-1 rounded-full bg-yellow-400" />
                  <span className="h-2 flex-1 rounded-full bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-black/10 bg-white/70 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-12">
          <div>
            <div className="inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Legacy
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              A family business built on consistency.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-black/60">
              Started by Shivam&apos;s father, Balaji Arts has served businesses
              for over three decades with dependable multicolour offset printing
              and packaging work. The business is built on practical experience,
              repeat relationships and careful attention to finishing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {siteContent.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#fbf7ef] p-4"
                >
                  <BadgeCheck className="mt-0.5 text-black" size={19} />
                  <p className="text-sm leading-6 text-black/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/40">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Print and packaging solutions for business use.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {siteContent.services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-black/10 bg-white/70 p-7 transition hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-black/35">
                    0{index + 1}
                  </span>
                  <span className="h-3 w-3 rounded-full bg-black transition group-hover:scale-125" />
                </div>

                <h3 className="mt-10 text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-black/55">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Placeholder */}
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#111111] p-6 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
                Work Showcase
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Real project photos coming soon.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/55">
                Once Shivam shares actual packaging and printing photos, this
                section will become a premium visual gallery.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Product Packaging',
                'Offset Print Sheets',
                'Labels & Stickers',
                'Custom Print Finishing',
              ].map((item) => (
                <div
                  key={item}
                  className="min-h-40 rounded-3xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <p className="text-lg font-semibold">{item}</p>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    Placeholder for Balaji Arts work samples.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-black/10 bg-white p-6 md:grid-cols-[1fr_0.8fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/40">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Need printing or packaging for your business?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/55">
              Share your requirement, quantity, material preference or reference
              sample. Balaji Arts can coordinate directly for print and
              packaging work from Malad West, Mumbai.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 text-sm font-semibold text-white transition hover:bg-black"
              >
                WhatsApp Now
                <ArrowRight size={17} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#fbf7ef]"
              >
                View Contact Details
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#fbf7ef] p-6">
            <MapPin size={30} />
            <h3 className="mt-8 text-2xl font-semibold">Balaji Arts</h3>
            <p className="mt-4 text-sm leading-7 text-black/60">
              {siteContent.company.address}
            </p>
            <a
              href={`tel:${siteContent.company.phone}`}
              className="mt-5 inline-block text-sm font-semibold text-black underline underline-offset-4"
            >
              Call {siteContent.company.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}