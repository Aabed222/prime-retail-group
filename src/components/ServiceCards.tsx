import Link from "next/link";
import { services } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function ServiceCards({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <section className="bg-cream py-16 md:py-20" aria-labelledby="help-heading">
      <div className="container-prg">
        <SectionHeading
          eyebrow="How can we help"
          title="Commercial services for Bakersfield & the Central Valley"
          description="Retail leasing, tenant representation, investment sales, development, property management, and multi-venture advisory—under one local platform."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              id={i === 0 ? "help-heading" : undefined}
              className="group flex flex-col rounded-sm border border-charcoal/10 bg-white p-6 shadow-sm transition hover:border-terracotta/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-charcoal group-hover:text-terracotta">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                {service.short}
              </p>
              <span className="mt-5 text-sm font-semibold text-terracotta">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
