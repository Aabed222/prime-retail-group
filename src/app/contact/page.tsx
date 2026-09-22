import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a consultation with Prime Retail Group in Bakersfield. Call (661) 496-0838 or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-cream-deep/50 py-16 md:py-20">
        <div className="container-prg max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal md:text-5xl">
            Schedule a consultation
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Tell us what you are working on—leasing, tenant search, investment,
            development, or management. We will respond with clear next steps.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prg grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-xl font-semibold text-charcoal">Reach us directly</h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-slate">
              <p className="font-medium text-charcoal">{siteConfig.name}</p>
              <p className="mt-2">{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
              <p className="mt-4">
                Phone:{" "}
                <a className="font-semibold text-terracotta" href={siteConfig.phoneHref}>
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="font-semibold text-terracotta"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-4 text-slate/80">{siteConfig.address.market}</p>
            </address>
            <div className="mt-8 rounded-sm border border-charcoal/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                Prefer properties first?
              </p>
              <p className="mt-2 text-sm text-slate">
                Browse sample listings, then inquire on a specific card—or call for
                live inventory.
              </p>
              <a
                href="/properties"
                className="mt-4 inline-flex text-sm font-semibold text-terracotta hover:text-terracotta-deep"
              >
                View Available Properties →
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="rounded-sm bg-white p-8 text-sm text-slate">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
