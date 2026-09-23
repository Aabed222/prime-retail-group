"use client";

import { useCallback, useState } from "react";
import { brands, type BrandLogo } from "@/content/brands";

function logoSrc(file: string) {
  return `/brands/${file}`;
}

function BrandMark({ brand }: { brand: BrandLogo }) {
  const [failed, setFailed] = useState(false);

  const onError = useCallback(() => {
    setFailed(true);
  }, []);

  return (
    <div
      className="brand-logo-item flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#e5ddd0] bg-white shadow-[0_1px_3px_rgba(16,33,63,0.06)] sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]"
      title={brand.name}
    >
      {failed ? (
        <span
          className="px-1 text-center text-[0.55rem] font-semibold uppercase leading-tight tracking-wide text-navy sm:text-[0.6rem]"
          aria-label={brand.name}
        >
          {brand.initials}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoSrc(brand.file)}
          alt={brand.name}
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          onError={onError}
          className="h-[62%] w-[62%] object-contain"
        />
      )}
    </div>
  );
}

function LogoTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="brand-logo-track flex items-center gap-5 pe-5 sm:gap-7 sm:pe-7 md:gap-9 md:pe-9"
      aria-hidden={ariaHidden || undefined}
    >
      {brands.map((brand) => (
        <li key={`${ariaHidden ? "dup-" : ""}${brand.slug}`} className="list-none">
          <BrandMark brand={brand} />
        </li>
      ))}
    </ul>
  );
}

export function BrandLogoCarousel() {
  return (
    <section
      className="border-b border-border bg-cream py-12 md:py-14"
      aria-labelledby="brand-logo-heading"
    >
      <div className="container-prg mb-8 text-center md:mb-10">
        <h2
          id="brand-logo-heading"
          className="font-serif text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-navy md:text-[0.85rem]"
        >
          NATIONAL BRANDS. LOCAL EXPERTISE.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate">
          Connecting leading national retailers with commercial real estate
          opportunities.
        </p>
      </div>

      <div className="brand-logo-marquee relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent sm:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent sm:w-16"
          aria-hidden
        />
        <div className="brand-logo-marquee-inner flex w-max items-center">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>

      <p className="mt-8 text-center text-[0.65rem] leading-relaxed text-slate-soft">
        Brand names and trademarks are the property of their respective owners.
      </p>
    </section>
  );
}

export { brandLogoCount } from "@/content/brands";
