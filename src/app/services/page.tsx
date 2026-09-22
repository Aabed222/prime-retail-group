import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Retail leasing, tenant representation, investment sales, development advisory, property management, and multi-venture advisory in Bakersfield.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-cream-deep/50 py-16 md:py-20">
        <div className="container-prg max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal md:text-5xl">
            How we work with owners, tenants & investors
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Six integrated lines of work—so conversations stay coherent whether
            you are leasing a pad, representing a brand, selling an asset, or
            managing a center.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prg space-y-8">
          {services.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid gap-4 rounded-sm border border-charcoal/10 bg-white p-6 md:grid-cols-12 md:gap-8 md:p-8"
            >
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-charcoal">
                  {service.title}
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-slate">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex text-sm font-semibold text-terracotta hover:text-terracotta-deep"
                >
                  Discuss this service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
