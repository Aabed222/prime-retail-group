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
      <section className="bg-cream py-14 md:py-20">
        <div className="container-prg grid gap-10 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t border-gold/50 pt-5">
              <h2 className="font-serif text-2xl text-navy">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{v.body}</p>
            </div>
          ))}
        </div>
        <div className="container-prg mt-14 max-w-3xl">
          <h2 className="font-serif text-2xl text-navy">How we work</h2>
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
