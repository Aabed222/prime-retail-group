import Image from "next/image";
import type { Listing } from "@/data/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-border bg-white">
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-deep">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-navy">
          {listing.status}
        </span>
        {listing.featured && (
          <span className="absolute right-3 top-3 bg-gold px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-navy">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold">
          {listing.category}
        </p>
        <h3 className="font-serif text-xl leading-snug text-navy">{listing.title}</h3>
        <p className="text-sm text-slate">
          {listing.location}, {listing.city}
        </p>
        <p className="mt-2 text-base font-semibold text-navy">{listing.price}</p>
        <p className="text-xs text-slate-soft">{listing.detail}</p>
        {listing.sample && (
          <p className="mt-auto pt-3 text-[0.65rem] uppercase tracking-wider text-slate-soft">
            Sample listing
          </p>
        )}
      </div>
    </article>
  );
}
