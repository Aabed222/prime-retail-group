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
  {
    slug: "gas-station-cstore-diligence",
    category: "Gas Stations",
    title: "What real diligence looks like on a gas station or c-store deal",
    excerpt:
      "Fuel and convenience acquisitions carry environmental and franchise wrinkles that a standard retail checklist misses.",
    date: "Jun 2026",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Gas station and convenience store forecourt",
    body: [
      "Gas station and convenience-store transactions carry diligence items a general retail checklist doesn't cover: underground storage tank history, Phase I (and, where warranted, Phase II) environmental reports, tank monitoring records, and any open remediation cases with the local regulator. Buyers and lenders will ask for these early — sellers who assemble the file before listing move faster to close.",
      "Fuel supply agreements and brand franchise terms also shape value. A branded site with a long-term supply contract sells differently than an unbranded or open-dealer site, and financing sources treat the two very differently. We walk owners through what buyers will actually diligence before a listing goes to market, not after an LOI falls apart.",
    ],
  },
  {
    slug: "multifamily-retail-corridor-adjacency",
    category: "Multifamily",
    title: "Why multifamily buyers are watching retail corridor adjacency",
    excerpt:
      "Proximity to a healthy retail corridor is showing up in the way Central Valley multifamily buyers underwrite rent growth.",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Multifamily residential buildings near a retail street",
    body: [
      "Multifamily investors in the Central Valley are increasingly underwriting walkability and everyday-needs access as a rent-growth driver, not just a nice-to-have. Properties within an easy drive — or better, a walk — of a well-anchored grocery or service corridor tend to hold occupancy better through softer leasing cycles.",
      "For owners evaluating a multifamily acquisition or refinance in Bakersfield and Kern County, we look at the health of the nearest retail corridor alongside the standard rent-comp analysis: vacancy trends, tenant mix, and whether nearby centers are reinvesting or deferring maintenance. That context often explains rent-growth gaps between otherwise similar properties.",
    ],
  },
  {
    slug: "pad-vs-inline-qsr-site-selection",
    category: "Leasing",
    title: "Pad vs. inline: how QSR operators are deciding in Kern County",
    excerpt:
      "Freestanding pads cost more but convert differently than inline end-caps — the right call depends on drive-thru volume assumptions.",
    date: "Apr 2026",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fast food restaurant drive-thru lane",
    body: [
      "Quick-service operators expanding into Kern County are weighing freestanding pads against inline end-caps corridor by corridor. Pads carry higher land and construction cost but allow a dedicated drive-thru stacking lane and full brand visibility — factors that matter most on high-traffic arterials where drive-thru sales carry the unit.",
      "Inline end-cap space in an established center costs less to occupy and benefits from shared parking and existing co-tenant traffic, but drive-thru geometry is often constrained by the center's original site plan. We help operators pressure-test both scenarios against realistic sales-per-unit assumptions before committing to a site.",
    ],
  },
  {
    slug: "sba-financing-retail-acquisitions",
    category: "Business Opportunities",
    title: "How SBA financing shapes a retail or c-store acquisition",
    excerpt:
      "SBA 7(a) and 504 structures open doors for owner-operators — but they also shape timelines, seller terms, and what a deal needs to look like.",
    date: "Mar 2026",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Small business owner reviewing paperwork",
    body: [
      "Many buyers of retail businesses and owner-user commercial property in Kern County lean on SBA 7(a) or 504 financing. Both programs can lower the down payment and extend amortization compared to conventional commercial loans, but they also come with underwriting requirements — seller financial history, appraisal, environmental screening on real estate — that shape how a deal needs to be structured from the start.",
      "Sellers who understand the SBA timeline (typically longer than an all-cash close) and buyers who get pre-qualified before writing an offer both avoid the most common source of blown deals: financing contingencies that surface too late. We coordinate early with lenders familiar with Central Valley retail and business-opportunity deals to keep timelines realistic.",
    ],
  },
];
