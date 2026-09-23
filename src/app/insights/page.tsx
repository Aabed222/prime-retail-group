import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Original retail CRE insights for Bakersfield, Kern County, and Central California — leasing, corridors, and business opportunities.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        tone="cream"
        eyebrow="Insights"
        title="Retail market notes for Central California"
        description="Short, practical reads for landlords, tenants, and operators — not national boilerplate."
      />
      <section className="border-t border-border bg-cream pb-20">
        <div className="container-prg space-y-14">
          {insights.map((item) => (
            <article
              key={item.slug}
              id={item.slug}
              className="scroll-mt-28 grid gap-8 border border-border bg-white p-6 md:grid-cols-[280px_1fr] md:p-8"
            >
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[200px]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                  {item.category} · {item.date}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                  {item.title}
                </h2>
                {item.body.map((p) => (
                  <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-slate">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="container-prg mt-14 text-center">
          <Link href="/contact" className="btn-gold">
            Talk through your market →
          </Link>
        </div>
      </section>
    </>
  );
}
