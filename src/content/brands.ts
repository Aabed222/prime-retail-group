export type BrandLogo = {
  name: string;
  slug: string;
  file: string;
  initials: string;
};

export const brands: BrandLogo[] = [
  { name: "Circle K", slug: "circlek", file: "circlek.svg", initials: "CK" },
  { name: "McDonald's", slug: "mcdonalds", file: "mcdonalds.svg", initials: "M" },
  { name: "Walmart", slug: "walmart", file: "walmart.svg", initials: "W" },
  { name: "Chipotle", slug: "chipotle", file: "chipotle.svg", initials: "C" },
  { name: "Starbucks", slug: "starbucks", file: "starbucks.svg", initials: "Sb" },
  { name: "AutoZone", slug: "autozone", file: "autozone.svg", initials: "AZ" },
  { name: "CVS", slug: "cvs", file: "cvs.svg", initials: "CVS" },
  { name: "Walgreens", slug: "walgreens", file: "walgreens.svg", initials: "Wg" },
  { name: "Target", slug: "target", file: "target.svg", initials: "T" },
  { name: "Costco", slug: "costco", file: "costco.svg", initials: "Co" },
  { name: "Chick-fil-A", slug: "chickfila", file: "chickfila.svg", initials: "CFA" },
  { name: "Taco Bell", slug: "tacobell", file: "tacobell.svg", initials: "TB" },
  { name: "Burger King", slug: "burgerking", file: "burgerking.svg", initials: "BK" },
  { name: "Wendy's", slug: "wendys", file: "wendys.svg", initials: "Wen" },
  { name: "7-Eleven", slug: "7eleven", file: "7eleven.svg", initials: "7E" },
  { name: "Dollar General", slug: "dollargeneral", file: "dollargeneral.svg", initials: "DG" },
  { name: "Dollar Tree", slug: "dollartree", file: "dollartree.svg", initials: "DT" },
  { name: "O'Reilly Auto Parts", slug: "oreilly", file: "oreilly.svg", initials: "OR" },
  { name: "ALDI", slug: "aldi", file: "aldi.svg", initials: "ALDI" },
  { name: "Ross", slug: "ross", file: "ross.svg", initials: "Ross" },
  { name: "TJ Maxx", slug: "tjmaxx", file: "tjmaxx.svg", initials: "TJ" },
  { name: "Panda Express", slug: "pandaexpress", file: "pandaexpress.svg", initials: "PE" },
  { name: "Jersey Mike's", slug: "jerseymikes", file: "jerseymikes.svg", initials: "JM" },
  { name: "Dutch Bros", slug: "dutchbros", file: "dutchbros.svg", initials: "DB" },
  { name: "Home Depot", slug: "homedepot", file: "homedepot.svg", initials: "HD" },
  { name: "Lowe's", slug: "lowes", file: "lowes.svg", initials: "LOW" },
  { name: "Best Buy", slug: "bestbuy", file: "bestbuy.svg", initials: "BB" },
  { name: "KFC", slug: "kfc", file: "kfc.svg", initials: "KFC" },
  { name: "Subway", slug: "subway", file: "subway.svg", initials: "Sub" },
  { name: "Domino's", slug: "dominos", file: "dominos.svg", initials: "Dom" },
  { name: "PetSmart", slug: "petsmart", file: "petsmart.svg", initials: "PS" },
  { name: "Ulta", slug: "ulta", file: "ulta.svg", initials: "Ulta" },
];

export const brandLogoCount = brands.length;
