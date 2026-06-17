import Image from 'next/image';
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

  const services = [
    {
      title: 'Multicolour Offset Printing',
      description:
        'Colour-accurate offset printing for business, product and brand communication.',
      image: '/images/offset-printing.jpg',
      points: ['Print-ready finishing', 'Business material', 'Product communication'],
    },
    {
      title: 'Packaging Products',
      description:
        'Packaging products made for clean presentation, durability and brand value.',
      image: '/images/packaging-products.jpg',
      points: ['Product packaging', 'Custom sizes', 'Business-ready output'],
    },
    {
      title: 'Stickers & Labels',
      description:
        'Custom stickers and labels for packaging, identification and brand use.',
      image: '/images/labels-stickers.jpg',
      points: ['Product labels', 'Brand stickers', 'Packaging labels'],
    },
    {
      title: 'Custom Print Work',
      description:
        'Requirement-based printing and packaging support based on material, quantity and finish.',
      image: '/images/printing-machine.jpg',
      points: ['Custom requirements', 'Finish guidance', 'Direct coordination'],
    },
  ];

  const showcase = [
    {
      title: 'Product Packaging',
      image: '/images/packaging-products.jpg',
    },
    {
      title: 'Offset Print Sheets',
      image: '/images/offset-printing.jpg',
    },
    {
      title: 'Labels & Stickers',
      image: '/images/labels-stickers.jpg',
    },
    {
      title: 'Machine & Production',
      image: '/images/printing-machine.jpg',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#fbf7ef]">
      {/* Hero */}
      <section className="relative isolate min-h-screen overflow-hidden px-5 pt-24 md:px-8 md:pt-32">
        <Image
          src="/images/hero-packaging.jpg"
          alt="Premium packaging products by Balaji Arts"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover object-[66%_center] md:object-center"
        />

        <div className="absolute inset-0 z-10 bg-[#fbf7ef]/10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#fbf7ef] via-[#fbf7ef]/88 to-[#fbf7ef]/20 md:to-[#fbf7ef]/5" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#fbf7ef] to-transparent md:h-40" />

        <div className="relative z-20 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center md:min-h-[calc(100vh-8rem)]">
          <div className="max-w-2xl">
            <div className="relative h-14 w-44 md:h-20 md:w-72">
              <Image
                src="/images/balaji-logo.png"
                alt="Balaji Arts logo"
                fill
                priority
                sizes="(max-width: 768px) 176px, 288px"
                className="object-contain object-left"
              />
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3.5 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-black/55 shadow-sm backdrop-blur md:mt-6 md:px-4 md:text-[0.7rem] md:tracking-[0.22em]">
              <Sparkles size={12} />
              30 Years of Print Craftsmanship
            </div>

            <h1 className="mt-6 max-w-3xl text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#111111] sm:text-5xl md:mt-7 md:text-6xl">
              Premium Printing & Packaging Manufacturing
            </h1>

            <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-black/65 md:mt-6 md:text-lg md:leading-8">
              Balaji Arts delivers multicolour offset printing and packaging
              products for businesses that need clean finishing, dependable
              quality and professional presentation.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-black/10 transition hover:bg-black"
              >
                Request a Quote
                <ArrowRight size={16} />
              </a>

              <a
                href={`tel:${siteContent.company.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/75 px-6 py-3.5 text-sm font-semibold text-black shadow-sm backdrop-blur transition hover:bg-white"
              >
                <Phone size={16} />
                Call {siteContent.company.phone}
              </a>
            </div>

            <div className="mt-7 grid max-w-xl grid-cols-3 gap-2 md:mt-9 md:gap-3">
              <div className="rounded-2xl border border-black/10 bg-white/75 p-3 shadow-sm backdrop-blur md:p-4">
                <div className="text-xl font-semibold md:text-2xl">30+</div>
                <p className="mt-1 text-[0.68rem] leading-4 text-black/55 md:text-xs md:leading-5">
                  Years
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/75 p-3 shadow-sm backdrop-blur md:p-4">
                <div className="text-xl font-semibold md:text-2xl">Offset</div>
                <p className="mt-1 text-[0.68rem] leading-4 text-black/55 md:text-xs md:leading-5">
                  Colour Print
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/75 p-3 shadow-sm backdrop-blur md:p-4">
                <div className="text-xl font-semibold md:text-2xl">Mumbai</div>
                <p className="mt-1 text-[0.68rem] leading-4 text-black/55 md:text-xs md:leading-5">
                  Malad West
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Strip */}
      <section className="px-5 pb-10 pt-3 md:px-8 md:pb-12 md:pt-4">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3 md:gap-4">
          <div className="rounded-[1.4rem] border border-black/10 bg-white/80 p-5 shadow-sm md:rounded-[1.6rem]">
            <Printer className="text-cyan-500" size={26} />
            <h3 className="mt-5 text-base font-semibold md:mt-6 md:text-lg">
              Offset Printing
            </h3>
            <p className="mt-2 text-sm leading-6 text-black/55">
              Controlled colour output, sharp detail and professional print
              finishing.
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white/80 p-5 shadow-sm md:rounded-[1.6rem]">
            <Factory className="text-pink-500" size={26} />
            <h3 className="mt-5 text-base font-semibold md:mt-6 md:text-lg">
              Packaging Products
            </h3>
            <p className="mt-2 text-sm leading-6 text-black/55">
              Packaging manufactured for presentation, protection and everyday
              business use.
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white/80 p-5 shadow-sm md:rounded-[1.6rem]">
            <Layers3 className="text-yellow-500" size={26} />
            <h3 className="mt-5 text-base font-semibold md:mt-6 md:text-lg">
              Labels & Custom Work
            </h3>
            <p className="mt-2 text-sm leading-6 text-black/55">
              Stickers, labels and custom print work tailored to client
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.7rem] border border-black/10 bg-white/75 shadow-sm md:grid-cols-[0.75fr_1.25fr] md:rounded-[2rem]">
          <div className="relative min-h-56 md:min-h-full">
            <Image
              src="/images/printing-machine.jpg"
              alt="Printing machine and production capability"
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black md:bottom-5 md:left-5 md:px-4 md:text-[0.7rem]">
              Since 30+ Years
            </div>
          </div>

          <div className="p-5 md:p-10">
            <div className="inline-flex rounded-full bg-black px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white md:text-[0.7rem] md:tracking-[0.22em]">
              Legacy
            </div>

            <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              A family-run print business built on consistency.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60 md:mt-5 md:text-base md:leading-8">
              Started by Sugumaran Swami, Balaji Arts has served businesses for
              over three decades with dependable printing and packaging work.
              Today, Shivam Swami helps his father expand the business while
              carrying forward the same focus on trust, finishing and practical
              production quality.
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-black/60 md:mt-4 md:text-base md:leading-8">
              From multicolour offset printing to packaging products, stickers
              and labels, every requirement is handled with direct coordination,
              clear communication and a focus on clean finishing.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-7">
              {[
                '30+ years of practical print experience',
                'Packaging product manufacturing',
                'Colour-accurate offset printing',
                'Direct coordination from Malad West',
                'Sticker and label solutions',
                'Requirement-based custom work',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#fbf7ef] p-3.5 md:p-4"
                >
                  <BadgeCheck className="mt-0.5 shrink-0 text-black" size={16} />
                  <p className="text-sm leading-6 text-black/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services With Images */}
      <section className="px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              Services
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              Printing and packaging, finished for business use.
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/55">
              Focused services for businesses that need reliable production,
              neat presentation and dependable finishing.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-[1.25rem] border border-black/10 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:bg-white md:rounded-[1.6rem]"
              >
                <div className="relative h-28 overflow-hidden md:h-40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>

                <div className="p-3.5 md:p-5">
                  <h3 className="text-sm font-semibold leading-5 md:text-lg md:leading-6">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-black/55 md:mt-3 md:text-sm md:leading-6">
                    {service.description}
                  </p>

                  <div className="mt-3 hidden space-y-2 md:block">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-black" />
                        <p className="text-xs text-black/50">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section className="px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl rounded-[1.7rem] bg-[#111111] p-5 text-white md:rounded-[2rem] md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
              Work Showcase
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              Print work that makes products look finished and brand-ready.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              These are temporary visuals. Once actual Balaji Arts work photos
              are available, this section will become a real project gallery.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-4">
            {showcase.map((item) => (
              <div
                key={item.title}
                className="group relative min-h-36 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] md:min-h-44 md:rounded-3xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs font-semibold leading-4 md:bottom-5 md:left-5 md:right-5 md:text-sm">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA with Map */}
      <section className="px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl rounded-[1.7rem] border border-black/10 bg-white p-5 shadow-sm md:rounded-[2rem] md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">
              Contact
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
              Need printing or packaging for your business?
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/55">
              Share your requirement, quantity, material preference or sample
              reference. Balaji Arts can coordinate directly from Malad West,
              Mumbai.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
              >
                WhatsApp Now
                <ArrowRight size={16} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#fbf7ef]"
              >
                View Contact Details
              </Link>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:mt-8 md:grid-cols-[0.85fr_1.15fr] md:gap-5">
            <div className="rounded-[1.4rem] bg-[#fbf7ef] p-5 md:rounded-[1.6rem] md:p-6">
              <MapPin size={24} />

              <h3 className="mt-5 text-lg font-semibold md:mt-6 md:text-xl">
                Balaji Arts
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60 md:mt-4">
                {siteContent.company.address}
              </p>

              <a
                href={`tel:${siteContent.company.phone}`}
                className="mt-4 inline-block text-sm font-semibold text-black underline underline-offset-4 md:mt-5"
              >
                Call {siteContent.company.phone}
              </a>
            </div>

            <div className="overflow-hidden rounded-[1.4rem] border border-black/10 bg-[#fbf7ef] shadow-sm md:rounded-[1.6rem]">
              <iframe
                title="B.J. Industrial Estate location map"
                src="https://www.google.com/maps?q=19.1890067,72.8377401&z=18&output=embed"
                className="h-[240px] w-full border-0 md:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}