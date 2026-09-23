"use client";

import { useMemo, useState } from "react";
import { ListingCard } from "./ListingCard";
import type { Listing } from "@/data/listings";

type Props = {
  items: Listing[];
  showStatus?: boolean;
};

export function ListingsFilter({ items, showStatus = true }: Props) {
  const [q, setQ] = useState("");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const [location, setLocation] = useState("all");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const types = useMemo(
    () => Array.from(new Set(items.map((i) => i.category))).sort(),
    [items],
  );
  const cities = useMemo(
    () => Array.from(new Set(items.map((i) => i.city))).sort(),
    [items],
  );

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const hay = `${item.title} ${item.location} ${item.category} ${item.city}`.toLowerCase();
      if (q && !hay.includes(q.toLowerCase())) return false;
      if (type !== "all" && item.category !== type) return false;
      if (showStatus && status !== "all" && item.status !== status) return false;
      if (location !== "all" && item.city !== location) return false;
      const minN = min ? Number(min) : null;
      const maxN = max ? Number(max) : null;
      if (minN != null && !Number.isNaN(minN) && item.priceValue < minN) return false;
      if (maxN != null && !Number.isNaN(maxN) && item.priceValue > maxN) return false;
      return true;
    });
  }, [items, q, type, status, location, min, max, showStatus]);

  function reset() {
    setQ("");
    setType("all");
    setStatus("all");
    setLocation("all");
    setMin("");
    setMax("");
  }

  return (
    <div>
      <div className="border border-border bg-cream-deep/60 p-4 md:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title, address, category..."
            className="input-prg min-w-[14rem] flex-1"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="input-prg w-full lg:w-40"
          >
            <option value="all">All types</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {showStatus && (
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="input-prg w-full lg:w-36"
            >
              <option value="all">Any status</option>
              <option value="For Sale">For Sale</option>
              <option value="For Lease">For Lease</option>
              <option value="Sold">Sold</option>
            </select>
          )}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input-prg w-full lg:w-40"
          >
            <option value="all">Any location</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            value={min}
            onChange={(e) => setMin(e.target.value)}
            placeholder="Min $"
            inputMode="numeric"
            className="input-prg w-full lg:w-28"
          />
          <input
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="Max $"
            inputMode="numeric"
            className="input-prg w-full lg:w-28"
          />
          <button
            type="button"
            onClick={reset}
            className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
          >
            Reset
          </button>
        </div>
      </div>

      <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate">
        {filtered.length} of {items.length} results
      </p>

      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-slate">
          No listings match these filters. Try resetting.
        </p>
      )}
    </div>
  );
}
