import type { Metadata } from "next";
import { LeasingDualCta } from "@/components/LeasingDualCta";
import { ListingsFilter } from "@/components/ListingsFilter";
import { PageHero } from "@/components/PageHero";
import { leaseListings } from "@/data/listings";
import { LOOPNET_LEASE_BROWSE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leasing",
  description:
    "Retail, mixed-use, and general commercial spaces available for lease in Bakersfield and Kern County.",
};

export default function LeasingPage() {
  return (
    <>
      <PageHero
        eyebrow="Available now"
        title="Leasing"
        description="Retail, mixed-use, automotive-adjacent, and general commercial spaces — sample inventory for conversation. Pricing shown as $/mo or $/SF NNN where noted."
      />
      <LeasingDualCta />
      <div className="border-b border-border bg-white">
        <div className="container-prg flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">Looking for live lease inventory?</p>
          <a
            href={LOOPNET_LEASE_BROWSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark !py-2 !text-[0.65rem]"
          >
            Browse leases on LoopNet
          </a>
        </div>
      </div>
      <section className="bg-cream py-12 md:py-16">
        <div className="container-prg">
          <ListingsFilter items={leaseListings} showStatus={false} />
        </div>
      </section>
    </>
  );
}
