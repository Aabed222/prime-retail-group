import Image from "next/image";
import Link from "next/link";
import { successStories } from "@/content/success-stories";

export function SuccessStories() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container-prg">
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className="hidden h-px flex-1 bg-border sm:block" />
          <h2 className="text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-navy">
            Client success stories
          </h2>
          <span className="hidden h-px flex-1 bg-border sm:block" />
        </div>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate">
          Illustrative examples of how we approach grocery, strip-center, and QSR
          work in the Central Valley — ask us about real engagements for your asset
          or concept.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {successStories.map((story) => (
            <article
              key={story.id}
              className="flex flex-col overflow-hidden border border-border bg-white"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                  {story.category}
                </p>
                <h3 className="mt-2 font-serif text-xl text-navy">{story.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                  {story.narrative}
                </p>
                <Link
                  href={story.href}
                  className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-outline-dark">
            See more stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
