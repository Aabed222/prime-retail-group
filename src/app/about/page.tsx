import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutPoints, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Prime Retail Group—Bakersfield commercial real estate, retail ventures, and ownership across Kern County.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-cream-deep/50 py-16 md:py-20">
        <div className="container-prg max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal md:text-5xl">
            A Central Valley platform for retail real estate
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            {siteConfig.name} is led by Bassam (Sam) Abed and based in Bakersfield.
            We treat commercial real estate as a local craft—brokerage, ownership,
            management, and related ventures under one disciplined umbrella.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prg grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Who we are"
              title="Built for Kern County decision-makers"
              description="Owners, tenants, and investors who want clear counsel grounded in this market—not a recycled national pitch deck."
            />
          </div>
          <div className="space-y-6 lg:col-span-7">
            {aboutPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-sm border border-charcoal/10 bg-white p-6"
              >
                <h2 className="text-xl font-semibold text-charcoal">{point.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-14 text-cream">
        <div className="container-prg grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Leadership
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-cream/75 md:text-base">
              Bassam (Sam) Abed brings a practical, owner-oriented approach to
              commercial conversations across Bakersfield and Kern County—bridging
              brokerage, asset thinking, and multi-venture judgment.
            </p>
          </div>
          <div className="rounded-sm border border-cream/15 bg-charcoal-soft p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Contact
            </p>
            <p className="mt-3 text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-cream/75">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
            <p className="mt-4">
              <a className="text-cream hover:underline" href={siteConfig.phoneHref}>
                {siteConfig.phone}
              </a>
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-sm bg-terracotta px-4 py-2.5 text-sm font-semibold text-cream hover:bg-terracotta-deep"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
