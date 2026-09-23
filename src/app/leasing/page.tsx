import type { Metadata } from "next";
import Link from "next/link";
import { LeasingDualCta } from "@/components/LeasingDualCta";
import { ListingsFilter } from "@/components/ListingsFilter";
import { PageHero } from "@/components/PageHero";
import { SampleInventoryNotice } from "@/components/SampleInventoryNotice";
import { leaseListings } from "@/data/listings";
import { LOOPNET_LEASE_BROWSE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leasing",
  description:
    "Retail, mixed-use, and general commercial spaces available for lease in Bakersfield and Kern County.",
};

const whyLease = [
  {
    title: "Local corridor knowledge",
    body: "We track traffic counts, parking, and co-tenancy across Bakersfield and Kern County corridors — not just national averages pulled from a database.",
  },
  {
    title: "Straight talk on occupancy cost",
    body: "Base rent is only part of the number. We walk landlords and tenants through NNN, CAM, and TI scope before it becomes a surprise mid-negotiation.",
  },
  {
    title: "One team, both sides of the table",
    body: "Because we work landlord and tenant representation, we know how deals actually get done locally — and where they usually stall.",
  },
];

export default function LeasingPage() {
  return (
    <>
      <PageHero
        eyebrow="Leasing"
        title="Leasing"
        description="Retail, mixed-use, automotive-adjacent, and general commercial spaces across Bakersfield and Kern County — for landlords filling vacancies and tenants finding the right site."
      />

      <LeasingDualCta />

      <section className="bg-cream py-14 md:py-20">
        <div className="container-prg">
          <p className="eyebrow mb-3">Why lease with PRG</p>
          <h2 className="max-w-xl font-serif text-3xl text-navy md:text-4xl">
            A leasing desk that knows the corridors, not just the comps.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {whyLease.map((w) => (
              <div key={w.title} className="border-t border-gold/50 pt-5">
                <h3 className="font-serif text-xl text-navy">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 md:py-20">
        <div className="container-prg grid gap-10 md:grid-cols-2">
          <div className="border border-border p-6 md:p-8">
            <p className="eyebrow mb-2">For landlords</p>
            <h3 className="font-serif text-2xl text-navy">Fill vacancies with the right tenant mix</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              We package the space with clear rent guidance and NNN estimates,
              run outreach to operators that fit your center&apos;s traffic and
              parking, and negotiate LOIs and leases that protect NOI — not just
              the fastest signature. Tour coordination and basic use/credit
              screening keep your time focused on real decisions.
            </p>
            <Link
              href="/services/agency-leasing"
              className="mt-6 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
            >
              Agency leasing process →
            </Link>
          </div>
          <div className="border border-border p-6 md:p-8">
            <p className="eyebrow mb-2">For tenants</p>
            <h3 className="font-serif text-2xl text-navy">Find the site that fits how you operate</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              From first search through lease execution, we compare corridors,
              co-tenants, and total occupancy cost against how your concept
              actually runs — visibility, drive-thru potential, parking, and
              access. We stay involved through LOI, lease review, and TI
              coordination so build-out doesn&apos;t stall.
            </p>
            <Link
              href="/services/tenant-representation"
              className="mt-6 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
            >
              Tenant representation process →
            </Link>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-cream-deep/60">
        <div className="container-prg flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">Looking for live lease inventory beyond our samples?</p>
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
          <p className="eyebrow mb-2">Sample inventory</p>
          <h2 className="mb-6 font-serif text-2xl text-navy md:text-3xl">
            Spaces available for lease
          </h2>
          <div className="mb-6">
            <SampleInventoryNotice />
          </div>
          <ListingsFilter items={leaseListings} showStatus={false} />
        </div>
      </section>

      <section className="border-t border-border bg-navy py-16 text-center text-white md:py-20">
        <div className="container-prg max-w-2xl">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Have space to lease or a site to find?
          </h2>
          <p className="mt-4 text-white/70">
            Tell us what you&apos;re working on — landlord or tenant side — and
            we&apos;ll follow up with a clear next step.
          </p>
          <Link href="/contact" className="btn-gold mt-8">
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
