import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      <div className="container-prg grid items-stretch gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Bakersfield · Kern County · Central Valley
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Commercial real estate with a local ownership lens
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            Prime Retail Group pairs retail brokerage, tenant representation,
            investment sales, and property management with the perspective of
            owners who work this market every day—not a borrowed national playbook.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-terracotta px-5 py-3 text-sm font-semibold text-cream transition hover:bg-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-sm border border-cream/35 px-5 py-3 text-sm font-semibold text-cream transition hover:border-cream/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              View Available Properties
            </Link>
          </div>
        </div>
        <div className="relative min-h-[280px] md:min-h-[360px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Modern commercial buildings representing institutional real estate quality"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-charcoal/10 lg:to-charcoal/40"
            aria-hidden
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-sm border border-cream/15 bg-charcoal/70 p-4 backdrop-blur-sm md:bottom-8 md:left-8 md:right-auto md:max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Local focus
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-cream/90">
              Retail corridors, strip centers, pads, and investment assets across
              Bakersfield and Kern County.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
