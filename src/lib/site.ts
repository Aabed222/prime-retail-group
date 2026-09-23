export const siteConfig = {
  name: "Prime Retail Group",
  shortName: "PRG",
  tagline: "Retail commercial real estate & business opportunities",
  description:
    "Prime Retail Group advises on retail commercial real estate and business opportunities across Bakersfield, Kern County, and Central California.",
  url: "https://prime-retail-group.vercel.app",
  phone: "(661) 496-0838",
  phoneHref: "tel:+16614960838",
  email: "info@primeretailgroup.com",
  hours: "By appointment",
  address: {
    line1: "1005 Stine Road",
    line2: "Bakersfield, CA 93309",
    market: "Bakersfield / Kern County, California",
  },
} as const;

export type NavLink = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

export const navLinks: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/leasing", label: "Leasing" },
  { href: "/future-dev", label: "Future Dev" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/tenant-representation", label: "Tenant Rep" },
      { href: "/services/agency-leasing", label: "Agency Leasing" },
      { href: "/services", label: "All Services" },
    ],
  },
  { href: "/insights", label: "Insights" },
  { href: "/sba-calculator", label: "SBA Calc" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const CREXI_BROWSE_URL =
  "https://www.crexi.com/properties?query=Bakersfield%2C%20CA";

export const LOOPNET_BROWSE_URL =
  "https://www.loopnet.com/search/commercial-real-estate/bakersfield-ca/for-sale/";

export const LOOPNET_LEASE_BROWSE_URL =
  "https://www.loopnet.com/search/commercial-real-estate/bakersfield-ca/for-lease/";

export const JOBAH_INVENTORY_REF_URL = "https://jobahcri.com/listings";

export const pillars = [
  {
    title: "Commercial sales",
    body: "Retail centers, pads, strip, and income properties across Kern County and the Central Valley.",
  },
  {
    title: "Business opportunities",
    body: "Markets, restaurants, convenience, and operating businesses ready for a new owner.",
  },
  {
    title: "Leasing",
    body: "Landlord and tenant representation for neighborhood retail and corridor storefronts.",
  },
  {
    title: "Investment advisory",
    body: "Underwriting, positioning, and disposition strategy for retail investors.",
  },
] as const;

export const services = [
  {
    id: "commercial-sales",
    title: "Commercial property sales",
    description:
      "Buy- and sell-side advisory for retail centers, pads, strip assets, and mixed-use investments throughout Bakersfield and Central California.",
  },
  {
    id: "business-ops",
    title: "Business opportunity sales",
    description:
      "Guidance for restaurants, markets, convenience concepts, and other operating businesses seeking a confidential sale or acquisition.",
  },
  {
    id: "landlord-rep",
    title: "Landlord representation",
    description:
      "Vacancy marketing, tenant screening, and lease negotiation that protects NOI and asset reputation.",
  },
  {
    id: "tenant-rep",
    title: "Tenant representation",
    description:
      "Site selection and lease structure for retailers and service brands entering or expanding in Kern County.",
  },
  {
    id: "investment",
    title: "Investment advisory",
    description:
      "Comps, underwriting support, and exit planning for owners holding Central Valley retail exposure.",
  },
  {
    id: "consultations",
    title: "Owner consultations",
    description:
      "Straight-talk sessions for landlords and operators weighing lease-up, refinance, or sale options.",
  },
] as const;

export const teamMembers = [
  {
    role: "Principal Advisor",
    focus: "Retail sales, investment, and client strategy",
    blurb:
      "Leads client relationships across retail disposition, acquisition, and business opportunity work in the Central Valley.",
  },
  {
    role: "Leasing Advisor",
    focus: "Landlord & tenant representation",
    blurb:
      "Supports vacancy marketing, site tours, and lease negotiation for neighborhood and corridor retail.",
  },
  {
    role: "Transaction Coordinator",
    focus: "Diligence & closing support",
    blurb:
      "Keeps files organized from LOI through closing so brokers and clients stay focused on decisions.",
  },
] as const;

export const stats = [
  { value: "Local", label: "Bakersfield-rooted relationships" },
  { value: "Central CA", label: "Kern County & Valley coverage" },
  { value: "Retail+", label: "Retail & business opportunities" },
] as const;
