import Image from "next/image";
import Link from "next/link";
import type { sampleProperties } from "@/lib/site";

type Property = (typeof sampleProperties)[number];

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-white shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-deep">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-charcoal/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">
          {property.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-sage">
          {property.type} · {property.size}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold text-charcoal">
          {property.title}
        </h3>
        <p className="mt-1 text-sm text-slate">{property.location}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
          {property.blurb}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-charcoal/10 pt-4">
          <p className="text-sm font-semibold text-charcoal">{property.price}</p>
          <Link
            href={`/contact?property=${property.id}`}
            className="text-sm font-semibold text-terracotta hover:text-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            Inquire →
          </Link>
        </div>
      </div>
    </article>
  );
}
