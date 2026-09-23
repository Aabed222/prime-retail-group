import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ListingCard } from "@/components/ListingCard";
import {
  getListingById,
  getRelatedListings,
  listings,
  type Listing,
} from "@/data/listings";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) {
    return { title: "Listing not found" };
  }
  const description = `${listing.status} · ${listing.category} in ${listing.city} — ${listing.detail}. ${listing.price}.`;
  return {
    title: listing.title,
    description,
    openGraph: {
      title: listing.title,
      description,
      images: [{ url: listing.image }],
    },
  };
}

function buildDescription(listing: Listing): string[] {
  const statusVerb =
    listing.status === "For Lease"
      ? "available for lease"
      : listing.status === "Sold"
        ? "recently marketed as sold"
        : "offered for sale";

  const intro = `${listing.title} is a ${listing.category.toLowerCase()} opportunity ${statusVerb} in the ${listing.location} area of ${listing.city}. Asking ${listing.price}, with published specs of ${listing.detail}.`;

  const voice = listing.sample
    ? `This page is an illustrative Prime Retail Group sample — not a live MLS listing. It shows how we present ${listing.category.toLowerCase()} inventory for conversation with buyers, sellers, landlords, and tenants across Bakersfield and Central California.`
    : `Prime Retail Group can walk you through positioning, comps, and next steps for this ${listing.category.toLowerCase()} in ${listing.city}.`;

  const ctaLine =
    listing.status === "For Lease"
      ? `If you are evaluating space along this corridor — or representing a landlord with similar vacancy — contact us to discuss fit, occupancy cost, and tour availability.`
      : `If this asset type fits your acquisition criteria, or you have a comparable property to bring to market, reach out and we will outline a clear next step.`;

  return [intro, voice, ctaLine];
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) notFound();

  const related = getRelatedListings(listing, 3);
  const paragraphs = buildDescription(listing);

  return (
    <>
      {listing.sample && (
        <div className="border-b border-gold/40 bg-gold/15">
          <div className="container-prg py-3 text-center text-sm text-navy">
            <span className="font-bold uppercase tracking-[0.12em] text-[0.7rem] text-gold-deep">
              Sample listing — illustrative only
            </span>
            <span className="mx-2 text-slate-soft">·</span>
            <span className="text-slate">
              Not a live MLS offering. Contact us for current availability.
            </span>
          </div>
        </div>
      )}

      <section className="bg-cream">
        <div className="container-prg py-8 md:py-12">
          <Link
            href="/listings"
            className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
          >
            ← Back to listings
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[16/11] overflow-hidden border border-border bg-cream-deep lg:aspect-auto lg:min-h-[28rem]">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="absolute left-4 top-4 bg-white px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-navy">
                {listing.status}
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-3">{listing.category}</p>
              <h1 className="font-serif text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
                {listing.title}
              </h1>
              <p className="mt-3 text-base text-slate md:text-lg">
                {listing.location}, {listing.city}
              </p>
              <p className="mt-6 font-serif text-3xl text-navy md:text-4xl">
                {listing.price}
              </p>
              <p className="mt-2 text-sm text-slate-soft">{listing.detail}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-gold">
                  Contact about this listing →
                </Link>
                <a href={siteConfig.phoneHref} className="btn-outline-dark">
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts / highlights */}
      <section className="border-y border-border bg-white">
        <div className="container-prg grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {[
            { label: "Status", value: listing.status },
            { label: "Category", value: listing.category },
            { label: "Price", value: listing.price },
            { label: "Area / specs", value: listing.detail },
          ].map((fact) => (
            <div key={fact.label} className="px-4 py-6 md:px-6 md:py-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">
                {fact.label}
              </p>
              <p className="mt-2 font-serif text-xl text-navy md:text-2xl">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Description + CTA sidebar */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container-prg grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow mb-3">Overview</p>
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
              About this opportunity
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            <dl className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">
                  Location
                </dt>
                <dd className="mt-1 text-navy">
                  {listing.location}, {listing.city}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">
                  Market
                </dt>
                <dd className="mt-1 text-navy">
                  {siteConfig.address.market}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">
                  Listing type
                </dt>
                <dd className="mt-1 text-navy">{listing.category}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">
                  Availability
                </dt>
                <dd className="mt-1 text-navy">{listing.status}</dd>
              </div>
            </dl>
          </div>

          <aside className="border border-border bg-white p-6 md:p-8 h-fit">
            <p className="eyebrow mb-2">Next step</p>
            <h3 className="font-serif text-2xl text-navy">
              Interested in this listing?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Tell us what you&apos;re evaluating — acquisition, lease, or a
              comparable asset to bring to market — and we&apos;ll follow up.
            </p>
            <Link href="/contact" className="btn-gold mt-6 w-full">
              Contact us →
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="mt-4 block text-center text-sm font-semibold text-navy hover:text-gold"
            >
              {siteConfig.phone}
            </a>
            <p className="mt-2 text-center text-xs text-slate-soft">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
            <Link
              href="/listings"
              className="mt-6 block text-center text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
            >
              ← All listings
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-white py-12 md:py-16">
          <div className="container-prg">
            <p className="eyebrow mb-2">Related samples</p>
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
              More in this market
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((l) => (
                <ListingCard key={l.id} listing={l} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
