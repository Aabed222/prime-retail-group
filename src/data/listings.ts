export type ListingStatus = "For Sale" | "For Lease" | "Sold";
export type ListingType =
  | "Gas Station"
  | "Supermarket / Retail"
  | "Strip Center"
  | "Vacant Lot"
  | "Business"
  | "Retail Pad"
  | "Storefront";

export type Listing = {
  id: string;
  title: string;
  location: string;
  city: string;
  category: ListingType;
  status: ListingStatus;
  price: string;
  /** Numeric price for filtering (sale price or monthly rent) */
  priceValue: number;
  detail: string;
  image: string;
  featured?: boolean;
  sample?: boolean;
};

/**
 * Sample Central Valley retail inventory for design / conversation.
 * Clearly fictional PRG samples — not live MLS or Jobah listings.
 */
export const listings: Listing[] = [
  {
    id: "sw-food-mart",
    title: "Southwest Food Mart & Fuel",
    location: "Stine Road Corridor",
    city: "Bakersfield",
    category: "Gas Station",
    status: "For Sale",
    price: "$1,850,000",
    priceValue: 1850000,
    detail: "±3,200 SF · C-store + fuel",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    sample: true,
  },
  {
    id: "ming-market",
    title: "Neighborhood Market",
    location: "Ming Avenue Area",
    city: "Bakersfield",
    category: "Supermarket / Retail",
    status: "For Sale",
    price: "$2,450,000",
    priceValue: 2450000,
    detail: "±12,500 SF · Grocery",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    sample: true,
  },
  {
    id: "rosedale-strip",
    title: "Rosedale Strip Center",
    location: "Rosedale Highway",
    city: "Bakersfield",
    category: "Strip Center",
    status: "For Sale",
    price: "$3,200,000",
    priceValue: 3200000,
    detail: "±18,400 SF · Multi-tenant",
    image: "https://images.unsplash.com/photo-1555529902-5261145633bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    featured: true,
    sample: true,
  },
  {
    id: "panama-pad",
    title: "Panama Lane Retail Pad",
    location: "Panama Lane",
    city: "Bakersfield",
    category: "Retail Pad",
    status: "For Sale",
    price: "$875,000",
    priceValue: 875000,
    detail: "±0.85 Ac · Build-to-suit ready",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    sample: true,
  },
  {
    id: "downtown-cafe",
    title: "Established Café Concept",
    location: "Downtown Bakersfield",
    city: "Bakersfield",
    category: "Business",
    status: "For Sale",
    price: "$425,000",
    priceValue: 425000,
    detail: "Business opportunity · FF&E included",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    sample: true,
  },
  {
    id: "cal-ave-storefront",
    title: "California Avenue Storefront",
    location: "California Avenue",
    city: "Bakersfield",
    category: "Storefront",
    status: "For Lease",
    price: "$2,800/mo",
    priceValue: 2800,
    detail: "±1,450 SF · NNN",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    sample: true,
  },
  {
    id: "olive-drive-suite",
    title: "Olive Drive Retail Suite",
    location: "Olive Drive",
    city: "Bakersfield",
    category: "Storefront",
    status: "For Lease",
    price: "$1.25/SF NNN",
    priceValue: 1875,
    detail: "±1,500 SF · End-cap",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sample: true,
  },
  {
    id: "white-lane-inline",
    title: "White Lane Inline Bay",
    location: "White Lane",
    city: "Bakersfield",
    category: "Strip Center",
    status: "For Lease",
    price: "$3,200/mo",
    priceValue: 3200,
    detail: "±2,100 SF · Inline",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sample: true,
  },
  {
    id: "stockdale-shop",
    title: "Stockdale Boutique Bay",
    location: "Stockdale Highway",
    city: "Bakersfield",
    category: "Storefront",
    status: "For Lease",
    price: "$4,000 + NNN",
    priceValue: 4000,
    detail: "±2,400 SF · High visibility",
    image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sample: true,
  },
  {
    id: "kern-vacant",
    title: "Highway-Adjacent Commercial Lot",
    location: "Greater Kern County",
    city: "Kern County",
    category: "Vacant Lot",
    status: "For Sale",
    price: "$650,000",
    priceValue: 650000,
    detail: "±1.8 Ac · Retail-zoned concept",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    sample: true,
  },
  {
    id: "delano-market",
    title: "Community Market Opportunity",
    location: "Delano Area",
    city: "Delano",
    category: "Business",
    status: "For Sale",
    price: "$980,000",
    priceValue: 980000,
    detail: "±8,200 SF · Operating market",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sample: true,
  },
  {
    id: "wasco-cstore",
    title: "Wasco Convenience + Fuel",
    location: "Wasco",
    city: "Wasco",
    category: "Gas Station",
    status: "For Sale",
    price: "$1,350,000",
    priceValue: 1350000,
    detail: "±2,800 SF · C-store + pumps",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    sample: true,
  },
];

export const featuredListings = listings.filter((l) => l.featured).slice(0, 6);

export const leaseListings = listings.filter((l) => l.status === "For Lease");

export const pipelineProjects = [
  {
    id: "stine-pad-pipeline",
    title: "Southwest Retail Pad Pipeline",
    location: "Stine Road Corridor, Bakersfield",
    stage: "Site planning",
    summary:
      "Conceptual pad opportunity near established traffic generators. Suitable for QSR, service retail, or medical-adjacent use.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ming-infill",
    title: "Ming Corridor Infill Concept",
    location: "Ming Avenue Area, Bakersfield",
    stage: "Early diligence",
    summary:
      "Neighborhood retail infill concept under early evaluation — not an offering unless and until marketed.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "rosedale-growth-corridor",
    title: "Rosedale Growth Corridor Concept",
    location: "Rosedale Highway, Bakersfield",
    stage: "Conceptual",
    summary:
      "Early-stage look at pad and small-shop potential along a growing rooftop corridor — conceptual only, no active entitlements.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "delano-corridor-concept",
    title: "Delano Corridor Pad Concept",
    location: "Delano, Kern County",
    stage: "Conceptual",
    summary:
      "Preliminary evaluation of pad and inline retail potential to support a growing Kern County community — not yet marketed.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function getRelatedListings(listing: Listing, limit = 3): Listing[] {
  const scored = listings
    .filter((l) => l.id !== listing.id)
    .map((l) => {
      let score = 0;
      if (l.category === listing.category) score += 2;
      if (l.city === listing.city) score += 1;
      if (l.status === listing.status) score += 1;
      return { listing: l, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((x) => x.listing);
}
