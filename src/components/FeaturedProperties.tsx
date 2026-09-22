import Link from "next/link";
import { sampleProperties } from "@/lib/site";
import { PropertyCard } from "./PropertyCard";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProperties() {
  return (
    <section className="bg-cream-deep/60 py-16 md:py-20">
      <div className="container-prg">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured sample listings"
            description="Illustrative opportunities for Kern County retail and commercial users. Clearly labeled as examples—reach out for current inventory."
          />
          <Link
            href="/properties"
            className="shrink-0 text-sm font-semibold text-terracotta hover:text-terracotta-deep"
          >
            View all properties →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sampleProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
