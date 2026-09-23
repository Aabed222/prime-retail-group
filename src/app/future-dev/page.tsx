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

export default function FutureDevPage() {
  return (
    <>
      <PageHero
        eyebrow="Pipeline"
        title="Future development"
        description="Conceptual retail projects and pad opportunities under early evaluation. These are not active offerings unless marketed separately."
      />
      <section className="bg-cream py-14 md:py-20">
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
        <div className="container-prg mt-12 text-center">
          <p className="text-slate">Have land or a pad concept to discuss?</p>
          <Link href="/contact" className="btn-gold mt-5 inline-flex">
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
