import Link from "next/link";

export function LeasingDualCta() {
  return (
    <section className="border-b border-border bg-navy py-12 text-white md:py-14">
      <div className="container-prg">
        <p className="eyebrow mb-6 text-center text-gold">Leasing &amp; tenant rep</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-white/20 bg-navy-soft/60 p-6 md:p-8">
            <h2 className="font-serif text-2xl text-cream">Looking for space?</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Tenant representation for retailers and operators who need the right
              site, lease structure, and occupancy-cost clarity in Central California.
            </p>
            <Link href="/services/tenant-representation" className="btn-gold mt-6">
              Tenant representation →
            </Link>
          </div>
          <div className="border border-white/20 bg-navy-soft/60 p-6 md:p-8">
            <h2 className="font-serif text-2xl text-cream">
              Need tenants for your center?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Agency leasing for landlords — vacancy marketing, tenant mix, and
              negotiation that protects NOI and asset reputation.
            </p>
            <Link href="/services/agency-leasing" className="btn-outline-light mt-6">
              Agency leasing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
