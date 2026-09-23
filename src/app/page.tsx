import Image from "next/image";
import Link from "next/link";
import { HelpModule } from "@/components/HelpModule";
import { InsightsTeasers } from "@/components/InsightsTeasers";
import { ListingCard } from "@/components/ListingCard";
import { SuccessStories } from "@/components/SuccessStories";
import { featuredListings } from "@/data/listings";
import { pillars, siteConfig, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Retail corridor and storefronts"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-prg relative flex min-h-[78vh] items-center py-20">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-gold">
              Bakersfield · Central California · Retail Specialists
            </p>
            <h1 className="font-serif text-4xl leading-[1.15] text-cream md:text-5xl lg:text-6xl">
              Retail commercial real estate, built on local relationships.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
              {siteConfig.name} represents buyers, sellers, landlords, and tenants
              across retail property and business opportunity transactions in
              Bakersfield and greater Central California.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/listings" className="btn-gold">
                Browse listings →
              </Link>
              <Link href="/contact" className="btn-outline-light">
                Speak with a broker
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <div className="container-prg grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-8 text-center md:py-10">
              <p className="font-serif text-3xl text-navy md:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How can we help — C&W-inspired */}
      <HelpModule />

      {/* Featured listings */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-prg">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-2">Featured</p>
              <h2 className="font-serif text-3xl text-navy md:text-4xl">
                Active sample inventory
              </h2>
            </div>
            <Link
              href="/listings"
              className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
            >
              View all listings →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container-prg">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="max-w-xl font-serif text-3xl md:text-4xl">
            Four pillars of retail brokerage
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="border-t border-gold/40 pt-5">
                <h3 className="font-serif text-xl text-cream">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/services/tenant-representation" className="btn-gold">
              Tenant rep →
            </Link>
            <Link href="/services/agency-leasing" className="btn-outline-light">
              Agency leasing →
            </Link>
            <Link href="/services" className="btn-outline-light">
              All services →
            </Link>
          </div>
        </div>
      </section>

      {/* Client success stories */}
      <SuccessStories />

      {/* Insights */}
      <InsightsTeasers />

      {/* Who we are */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-prg grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Who we are</p>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">
              A boutique retail desk for Bakersfield and the Central Valley.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate">
              We focus on the corridors, centers, and operating businesses that
              define everyday retail here — not generic office towers elsewhere.
              Straight talk, local comps, and a process built for owners and
              operators who value substance.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
            >
              About Prime Retail Group →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Street-level retail storefronts"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-cream-deep py-16 text-center md:py-20">
        <div className="container-prg max-w-2xl">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">
            Have a retail property or business to sell?
          </h2>
          <p className="mt-4 text-slate">
            Tell us what you&apos;re working on — we&apos;ll respond with a clear next step.
          </p>
          <Link href="/contact" className="btn-gold mt-8">
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
