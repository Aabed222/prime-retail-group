export type SuccessStory = {
  id: string;
  category: string;
  title: string;
  narrative: string;
  image: string;
  imageAlt: string;
  href: string;
};

/** Illustrative case teasers — fictional but plausible Central Valley retail scenarios. */
export const successStories: SuccessStory[] = [
  {
    id: "grocery-expansion",
    category: "Example · Grocery expansion",
    title: "Neighborhood grocery finds a second Kern County site",
    narrative:
      "Helped a regional grocer compare three corridors, model occupancy cost, and secure a lease with TI terms that matched a phased remodel timeline.",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Grocery retail aisle",
    href: "/contact",
  },
  {
    id: "strip-center-leaseup",
    category: "Example · Agency leasing",
    title: "Strip-center landlord fills two long-vacant bays",
    narrative:
      "Repositioned a neighborhood strip with clearer rent cards, targeted outreach to complementary uses, and dual-track LOIs that restored foot traffic.",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Neighborhood shopping center exterior",
    href: "/services/agency-leasing",
  },
  {
    id: "qsr-relocation",
    category: "Example · Tenant representation",
    title: "QSR operator relocates for drive-thru and visibility",
    narrative:
      "Represented a quick-service brand exiting a constrained pad, negotiating assignment and a new site with stronger traffic counts and cleaner access.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Quick-service restaurant exterior",
    href: "/services/tenant-representation",
  },
];
