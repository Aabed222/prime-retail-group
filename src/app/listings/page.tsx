import type { Metadata } from "next";
import { ListingsFilter } from "@/components/ListingsFilter";
import { MarketplaceBar } from "@/components/MarketplaceBar";
import { PageHero } from "@/components/PageHero";
import { listings } from "@/data/listings";

export const metadata: Metadata = {
  title: "Listings",
  description:
    "Sample retail commercial inventory and business opportunities across Bakersfield and Central California.",
};

export default function ListingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Active inventory"
        title="Listings"
        description="Commercial property and business opportunities across Bakersfield and Central California. Cards below are PRG sample inventory for reference."
      />
      <MarketplaceBar />
      <section className="bg-cream py-12 md:py-16">
        <div className="container-prg">
          <ListingsFilter items={listings} />
        </div>
      </section>
    </>
  );
}
