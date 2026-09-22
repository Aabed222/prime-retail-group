"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const searchParams = useSearchParams();
  const property = searchParams.get("property") ?? "";
  const [submitted, setSubmitted] = useState(false);

  const defaultMessage = useMemo(() => {
    if (!property) return "";
    return `I am inquiring about listing: ${property}`;
  }, [property]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-sm border border-sage/30 bg-white p-8"
        role="status"
      >
        <h3 className="text-xl font-semibold text-charcoal">Thank you</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          This demo form does not send email yet. Please call{" "}
          <a className="font-semibold text-terracotta" href={siteConfig.phoneHref}>
            {siteConfig.phone}
          </a>{" "}
          or email{" "}
          <a
            className="font-semibold text-terracotta"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>{" "}
          and we will follow up promptly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-charcoal/10 bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-charcoal">Full name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-1.5 w-full rounded-sm border border-charcoal/15 bg-cream px-3 py-2.5 text-charcoal outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-charcoal">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-1.5 w-full rounded-sm border border-charcoal/15 bg-cream px-3 py-2.5 text-charcoal outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-charcoal">Phone</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-sm border border-charcoal/15 bg-cream px-3 py-2.5 text-charcoal outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-charcoal">Interest</span>
          <select
            name="interest"
            defaultValue={property ? "property" : ""}
            className="mt-1.5 w-full rounded-sm border border-charcoal/15 bg-cream px-3 py-2.5 text-charcoal outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
          >
            <option value="">Select…</option>
            <option value="leasing">Retail leasing</option>
            <option value="tenant">Tenant representation</option>
            <option value="investment">Investment sales</option>
            <option value="property">Property inquiry</option>
            <option value="management">Property management</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block text-sm">
        <span className="font-medium text-charcoal">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          defaultValue={defaultMessage}
          className="mt-1.5 w-full rounded-sm border border-charcoal/15 bg-cream px-3 py-2.5 text-charcoal outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
        />
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-terracotta px-5 py-3 text-sm font-semibold text-cream transition hover:bg-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 sm:w-auto"
      >
        Schedule a Consultation
      </button>
    </form>
  );
}
