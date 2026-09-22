import { caseStudies } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function CaseStudyTeasers() {
  return (
    <section className="bg-charcoal-soft py-16 text-cream md:py-20">
      <div className="container-prg">
        <SectionHeading
          light
          eyebrow="Work in market"
          title="Case study teasers"
          description="Representative outcomes that reflect how we approach leasing, tenant search, and investment conversations locally."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="rounded-sm border border-cream/15 bg-charcoal/40 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                {item.market}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {item.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
