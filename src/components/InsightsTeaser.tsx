import Link from "next/link";
import { insights } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

export function InsightsTeaser() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container-prg">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Local market perspective"
            description="Brief takes on retail corridors, tenant mix, and site selection across Kern County and the Central Valley."
          />
          <Link
            href="/insights"
            className="shrink-0 text-sm font-semibold text-terracotta hover:text-terracotta-deep"
          >
            All insights →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <Link
              key={item.slug}
              href={`/insights#${item.slug}`}
              className="flex flex-col rounded-sm border border-charcoal/10 bg-white p-6 transition hover:border-terracotta/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            >
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-sage">
                <span>{item.category}</span>
                <span aria-hidden>·</span>
                <span>{item.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                {item.excerpt}
              </p>
              <p className="mt-4 text-xs text-slate/80">{formatDate(item.date)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
