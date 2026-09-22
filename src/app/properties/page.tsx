import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PropertyCard } from "@/components/PropertyCard";
import { sampleProperties } from "@/lib/site";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Sample commercial and retail listings across Bakersfield and Kern County. Inquire for current inventory.",
};

export default function PropertiesPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-cream-deep/50 py-16 md:py-20">
        <div className="container-prg flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              Properties
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal md:text-5xl">
              Available & sample inventory
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              The cards below are clearly labeled example listings for design and
              conversation. Contact us for live for-lease and for-sale opportunities
              in Bakersfield and greater Kern County.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-sm bg-terracotta px-5 py-3 text-sm font-semibold text-cream hover:bg-terracotta-deep"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prg">
          <div className="mb-6 rounded-sm border border-gold/40 bg-cream-deep/80 px-4 py-3 text-sm text-charcoal">
            <strong className="font-semibold">Note:</strong> All listings on this
            page are sample / illustrative unless otherwise confirmed in writing.
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {sampleProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
