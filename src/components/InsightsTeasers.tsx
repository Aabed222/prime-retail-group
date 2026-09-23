import Image from "next/image";
import Link from "next/link";
import { insights } from "@/content/insights";

export function InsightsTeasers() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-prg">
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className="hidden h-px flex-1 bg-border sm:block" />
          <h2 className="text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-navy">
            Market insights
          </h2>
          <span className="hidden h-px flex-1 bg-border sm:block" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.slug}
              className="flex flex-col overflow-hidden border border-border bg-cream"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                  {item.category}
                </p>
                <h3 className="mt-2 font-serif text-xl text-navy">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                  {item.excerpt}
                </p>
                <p className="mt-3 text-xs text-slate-soft">{item.date}</p>
                <Link
                  href={`/insights#${item.slug}`}
                  className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/insights" className="btn-gold">
            Discover more insights →
          </Link>
        </div>
      </div>
    </section>
  );
}
