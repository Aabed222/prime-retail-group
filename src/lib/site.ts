export const siteConfig = {
  name: "Prime Retail Group",
  shortName: "PRG",
  tagline: "Bakersfield & Central Valley commercial real estate",
  description:
    "Prime Retail Group is a Bakersfield-based commercial platform spanning retail leasing, tenant representation, investment sales, development, property management, and multi-venture advisory across Kern County and the Central Valley.",
  url: "https://prime-retail-group.vercel.app",
  phone: "(661) 496-0838",
  phoneHref: "tel:+16614960838",
  email: "info@primeretailgroup.com",
  address: {
    line1: "1005 Stine Road",
    line2: "Bakersfield, CA 93309",
    market: "Bakersfield / Kern County, California",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "retail-leasing",
    title: "Retail Leasing",
    short: "Landlord-side leasing for centers, pads, and street retail.",
    description:
      "Position assets, market vacancies, and secure creditworthy tenants along Bakersfield and Central Valley retail corridors.",
    href: "/services#retail-leasing",
  },
  {
    id: "tenant-rep",
    title: "Tenant Representation",
    short: "Site selection and lease negotiation for growing brands.",
    description:
      "Help retailers and service concepts evaluate rooftops, co-tenancy, and deal structure before committing to Kern County locations.",
    href: "/services#tenant-rep",
  },
  {
    id: "investment-sales",
    title: "Investment Sales",
    short: "Buy- and sell-side advisory for income-producing retail.",
    description:
      "Underwrite, market, and close retail and mixed-use investments with local comps and ownership-minded diligence.",
    href: "/services#investment-sales",
  },
  {
    id: "development",
    title: "Development Advisory",
    short: "Pad deals, entitlements guidance, and build-to-suit strategy.",
    description:
      "Support owners and users navigating site readiness, user requirements, and delivery timelines in the Central Valley.",
    href: "/services#development",
  },
  {
    id: "property-mgmt",
    title: "Property Management",
    short: "Day-to-day operations with a landlord's long-view.",
    description:
      "Leasing coordination, vendor oversight, and tenant relations that protect NOI and asset reputation.",
    href: "/services#property-mgmt",
  },
  {
    id: "ventures",
    title: "Multi-Venture Advisory",
    short: "Holding-company perspective across retail and related ventures.",
    description:
      "An umbrella for brand ventures and capital decisions that sit alongside commercial real estate ownership.",
    href: "/services#ventures",
  },
] as const;

export type PropertyStatus = "For Lease" | "For Sale" | "Example Listing";

export const sampleProperties = [
  {
    id: "stine-retail-pad",
    title: "Southwest Retail Pad Opportunity",
    location: "Stine Road Corridor, Bakersfield",
    type: "Retail Pad",
    size: "±3,200 SF",
    status: "Example Listing" as PropertyStatus,
    price: "Call for pricing",
    blurb:
      "High-visibility retail pad concept near established traffic generators. Suitable for QSR, service retail, or medical-adjacent use.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageCredit: "Unsplash — commercial skyline",
  },
  {
    id: "ming-strip-center",
    title: "Neighborhood Strip Center",
    location: "Ming Avenue Area, Bakersfield",
    type: "Strip Center",
    size: "±18,500 SF",
    status: "Example Listing" as PropertyStatus,
    price: "Investment inquiry",
    blurb:
      "Multi-tenant neighborhood center concept with strong local-serving tenancy. Built for investors seeking Kern County retail exposure.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageCredit: "Unsplash — retail storefront",
  },
  {
    id: "downtown-flex",
    title: "Downtown Flex / Creative Space",
    location: "Downtown Bakersfield",
    type: "Flex / Office-Retail",
    size: "±6,800 SF",
    status: "Example Listing" as PropertyStatus,
    price: "Lease rate TBD",
    blurb:
      "Adaptive reuse opportunity for professional services, boutique retail, or experiential concepts near civic and dining activity.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageCredit: "Unsplash — office interior",
  },
  {
    id: "highway-land",
    title: "Highway-Adjacent Commercial Land",
    location: "Greater Kern County",
    type: "Land",
    size: "±2.4 Acres",
    status: "Example Listing" as PropertyStatus,
    price: "Price upon request",
    blurb:
      "Commercial land concept for retail development, drive-thru users, or build-to-suit delivery along a regional corridor.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageCredit: "Unsplash — architecture site",
  },
] as const;

export const insights = [
  {
    slug: "kern-county-retail-corridor-watch",
    title: "Kern County Retail Corridor Watch: What Local Landlords Should Track",
    category: "Market Brief",
    date: "2026-09-10",
    excerpt:
      "A practical look at traffic patterns, tenancy resilience, and leasing dynamics along key Bakersfield retail corridors.",
    readTime: "5 min read",
  },
  {
    slug: "tenant-mix-that-holds-up",
    title: "Building a Tenant Mix That Holds Up in Secondary Markets",
    category: "Ownership",
    date: "2026-08-22",
    excerpt:
      "How neighborhood centers in markets like Bakersfield can prioritize everyday demand without chasing every national brand.",
    readTime: "6 min read",
  },
  {
    slug: "site-selection-for-growing-brands",
    title: "Site Selection for Growing Brands Entering the Central Valley",
    category: "Occupier",
    date: "2026-07-15",
    excerpt:
      "A checklist for retailers evaluating rooftops, visibility, co-tenancy, and lease structure before signing in Kern County.",
    readTime: "4 min read",
  },
] as const;

export const stats = [
  { value: "15+", label: "Years focused on Kern County" },
  { value: "CV", label: "Central Valley market fluency" },
  { value: "6", label: "Integrated service lines" },
  { value: "Local", label: "Ownership & brokerage lens" },
] as const;

export const aboutPoints = [
  {
    title: "Bakersfield first",
    body: "We lead with Central Valley expertise—not borrowed global scale. Advice is rooted in the corridors, landlords, and tenants that actually define this market.",
  },
  {
    title: "Platform mindset",
    body: "Brokerage, ownership, management, and ventures under one umbrella—useful when a deal spans more than one seat at the table.",
  },
  {
    title: "Straight talk",
    body: "Clear options, honest tradeoffs, and next steps. Built for owners and operators who value substance over slogans.",
  },
] as const;

export const caseStudies = [
  {
    title: "Neighborhood center lease-up",
    outcome: "Stabilized occupancy through local-serving tenancy and disciplined lease structure.",
    market: "Southwest Bakersfield",
  },
  {
    title: "Retail user site search",
    outcome: "Matched a growing brand to a high-visibility pad with workable access and co-tenancy.",
    market: "Kern County corridor",
  },
  {
    title: "Investment disposition support",
    outcome: "Positioned an income asset for sale with clear underwriting and buyer outreach.",
    market: "Greater Bakersfield",
  },
] as const;
