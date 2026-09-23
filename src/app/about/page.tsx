import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — retail commercial real estate in Bakersfield and Central California.`,
};

const values = [
  {
    title: "Local knowledge",
    body: "We work the corridors, centers, and operators that define Kern County retail — not borrowed narratives from coastal markets.",
  },
  {
    title: "Fiduciary discipline",
    body: "Clear options, honest tradeoffs, and documentation that protects both sides of a transaction.",
  },
  {
    title: "Confidential process",
    body: "Business opportunities and off-market conversations stay discreet until marketing is intentional.",
  },
];

const specialties = [
  {
    title: "Retail",
    body: "Neighborhood centers, strip retail, pads, and storefronts — sales, acquisitions, and leasing on both sides of the table.",
  },
  {
    title: "Multifamily",
    body: "Multifamily sales and acquisitions across the Central Valley, including assets adjacent to established retail corridors.",
  },
  {
    title: "Gas stations",
    body: "Gas station and convenience-store property and business opportunity sales, including fuel-and-c-store operations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tone="cream"
        eyebrow="About"
        title="Retail specialists for Bakersfield and the Central Valley."
        description={`${siteConfig.name} is a boutique commercial platform focused on retail property and business opportunities across Kern County.`}
      />
      <section className="bg-cream pb-8">
        <div className="container-prg">
          <div className="relative aspect-[21/9] overflow-hidden md:aspect-[2.4/1]">
            <Image
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Retail streetscape at golden hour"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>
      <section className="bg-cream pb-4 pt-14 md:pt-20">
        <div className="container-prg max-w-3xl">
          <p className="eyebrow mb-3">Our story</p>
          <h2 className="font-serif text-2xl text-navy md:text-3xl">
            Built in Bakersfield, for Bakersfield and the Central Valley.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            {siteConfig.name} is a boutique commercial brokerage headquartered on
            Stine Road in Bakersfield. We started with a simple premise: retail
            owners, operators, and investors in Kern County deserve a broker who
            actually knows the corridors — not a satellite office running
            playbooks built for coastal markets.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Today our brokers work retail sales and leasing, multifamily
            acquisitions, and gas station and convenience-store transactions
            across Bakersfield, Kern County, and greater Central California.
            Every deal is worked directly by our team — nothing outsourced,
            nothing generic.
          </p>
        </div>
      </section>

      <section className="bg-cream py-10 md:py-14">
        <div className="container-prg grid gap-10 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t border-gold/50 pt-5">
              <h2 className="font-serif text-2xl text-navy">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 md:py-20">
        <div className="container-prg">
          <p className="eyebrow mb-3">What we specialize in</p>
          <h2 className="max-w-xl font-serif text-3xl text-navy md:text-4xl">
            Three focused practice areas, one local team.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {specialties.map((s) => (
              <div key={s.title} className="border border-border p-6">
                <h3 className="font-serif text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{s.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/team"
            className="mt-8 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
          >
            Meet the team →
          </Link>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-prg max-w-3xl">
          <p className="eyebrow mb-3">Market focus</p>
          <h2 className="font-serif text-2xl text-navy">
            Bakersfield and Kern County first — Central Valley always in view.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            We concentrate on the markets we know best: Bakersfield corridors
            like Stine, Ming, Rosedale, and California Avenue, plus surrounding
            Kern County communities including Delano and Wasco. That focus means
            sharper comps, faster answers on zoning and traffic, and
            relationships with the landlords, operators, and lenders who
            actually move deals here.
          </p>
          <h2 className="mt-10 font-serif text-2xl text-navy">How we work</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            From first conversation through closing, we keep the process
            practical: market context, realistic pricing, and next steps you can
            act on. Whether you are leasing a bay, selling a center, or
            transferring an operating business, we stay close to the work.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-flex">
            Talk with our team →
          </Link>
        </div>
      </section>
    </>
  );
}
