import Link from "next/link";

export function CtaBand() {
  return (
    <section className="bg-terracotta">
      <div className="container-prg flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center md:py-14">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-cream md:text-3xl">
            Ready to talk retail in Kern County?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-cream/85 md:text-base">
            Whether you are leasing, buying, selling, or managing—schedule a
            consultation or browse sample inventory.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-sm bg-charcoal px-5 py-3 text-sm font-semibold text-cream hover:bg-charcoal-soft"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/properties"
            className="rounded-sm border border-cream/50 px-5 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
          >
            View Available Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
