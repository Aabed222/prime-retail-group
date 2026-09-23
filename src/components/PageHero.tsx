type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "navy" | "cream";
};

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "navy",
}: PageHeroProps) {
  if (tone === "cream") {
    return (
      <section className="bg-cream py-14 md:py-20">
        <div className="container-prg max-w-3xl text-center md:mx-auto">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-serif text-4xl leading-tight text-navy md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
              {description}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero-navy">
      <div className="container-prg max-w-3xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="font-serif text-4xl leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
