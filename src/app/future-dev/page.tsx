import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pipelineProjects } from "@/data/listings";

export const metadata: Metadata = {
  title: "Future Dev",
  description:
    "Retail development pipeline concepts under evaluation in Bakersfield and Kern County.",
};

const process = [
  {
    step: "01",
    title: "Site & market planning",
    body: "We start with traffic counts, rooftop growth, and co-tenancy potential to judge whether a site or corridor can support retail before anything is marketed.",
  },
  {
    step: "02",
    title: "Diligence",
    body: "Zoning, access, utilities, and basic feasibility are reviewed alongside comparable rents and sale pricing for the corridor.",
  },
  {
    step: "03",
    title: "Marketing & positioning",
    body: "Concepts that clear diligence move to active marketing — pad packaging, broker outreach, or a listing, depending on the owner's goals.",
  },
];

export default function FutureDevPage() {
  return (
    <>
      <PageHero
        eyebrow="Pipeline"
        title="Future development"
        description="Conceptual retail projects and pad opportunities under early evaluation. These are not active offerings unless marketed separately."
      />

      <section className="bg-cream pt-14 md:pt-20">
        <div className="container-prg max-w-3xl">
          <p className="eyebrow mb-3">Where we look</p>
          <h2 className="font-serif text-2xl text-navy md:text-3xl">
            Evaluating pads and infill across Kern County growth corridors.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Bakersfield and surrounding Kern County communities continue to add
            rooftops along corridors like Rosedale, Panama Lane, and the outer
            edges of Delano and Wasco. Prime Retail Group tracks these areas for
            landowners and investors weighing whether a parcel is ready for
            retail, and for retailers looking a few years ahead of their next
            expansion.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            The concepts below are early-stage evaluations, not entitled or
            actively marketed projects. If you own land or are considering a
            pad concept, we can walk through what it would take to get it
            market-ready.
          </p>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-16">
        <div className="container-prg grid gap-8 md:grid-cols-2">
          {pipelineProjects.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden border border-border bg-white"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  {p.stage}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-navy">{p.title}</h2>
                <p className="mt-1 text-sm text-slate">{p.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate">{p.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-navy py-14 text-white md:py-20">
        <div className="container-prg">
          <p className="eyebrow mb-3 text-gold">What we look for</p>
          <h2 className="max-w-xl font-serif text-3xl text-cream md:text-4xl">
            From raw site to market-ready pad.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {process.map((s) => (
              <div key={s.step} className="border-t border-gold/40 pt-5">
                <p className="font-serif text-3xl text-gold">{s.step}</p>
                <h3 className="mt-2 font-serif text-xl text-cream">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-16">
        <div className="container-prg text-center">
          <p className="text-slate">Have land or a pad concept to discuss?</p>
          <Link href="/contact" className="btn-gold mt-5 inline-flex">
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
