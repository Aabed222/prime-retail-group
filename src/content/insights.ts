export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "central-valley-retail-corridors-2026",
    category: "Market View",
    title: "Which Central Valley retail corridors are holding demand",
    excerpt:
      "Neighborhood centers along everyday traffic routes continue to outperform speculative pads when tenant mix and parking work.",
    date: "Sep 2026",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Busy retail shopping corridor",
    body: [
      "In Bakersfield and nearby Central Valley markets, retailers still prioritize visibility, parking count, and adjacency to daily needs — grocery, pharmacy, QSR, and essential services. Speculative freestanding pads without a clear traffic story are slower to lease than well-anchored neighborhood centers with a coherent tenant mix.",
      "For landlords, the practical takeaway is positioning: clear rents, transparent NNN estimates, and a marketing package that shows who shops the center — not just square footage. For tenants, corridor-level comps and co-tenancy risk still matter more than glossy renderings.",
    ],
  },
  {
    slug: "lease-structure-trends-retail-tenants",
    category: "Leasing",
    title: "Lease structures retailers are negotiating in Kern County",
    excerpt:
      "Tenants are pushing for clearer occupancy-cost caps, TI clarity, and renewal options that match real operating cycles.",
    date: "Aug 2026",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Retail storefront interior",
    body: [
      "Retail operators expanding in Kern County are scrutinizing total occupancy cost — base rent plus CAM, taxes, insurance, and HVAC reserves — as carefully as headline $/SF. Letters of intent that leave those numbers vague often stall once the draft lease arrives.",
      "On the landlord side, well-documented TI allowances, as-is vs. turnkey scopes, and realistic delivery timelines reduce renegotiation mid-deal. Renewal and early-termination language should reflect how the concept actually performs, not a generic office form.",
    ],
  },
  {
    slug: "business-opportunity-vs-property-sale",
    category: "Business Opportunities",
    title: "When to sell the business, the real estate, or both",
    excerpt:
      "Operators weighing an exit often confuse enterprise value with property value — and leave money or certainty on the table.",
    date: "Jul 2026",
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Small business storefront",
    body: [
      "A market, restaurant, or convenience concept can be sold as a going concern, as a leasehold opportunity, or packaged with owned real estate. Each path has different buyers, diligence timelines, and financing (including SBA-backed structures).",
      "Before listing, owners should separate what is transferable — licenses, equipment, brand goodwill, lease assignment rights — from what stays with the land. A clear package attracts serious operators and avoids months of mismatched tours.",
    ],
  },
];
