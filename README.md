# Prime Retail Group website

A clean website for **Prime Retail Group** — retail commercial real estate and business opportunities in Bakersfield, Kern County, and Central California.

The look and page layout follow a boutique brokerage style (inspired by Jobah CRI), with **Prime Retail Group** branding and **retail** photography (shopping centers, storefronts, markets) — not office towers.

## Pages

| Page | What it is |
|------|------------|
| Home (`/`) | Hero, stats, featured listings, services pillars, about teaser |
| Listings (`/listings`) | Filterable sample inventory + Crexi / LoopNet browse links |
| Leasing (`/leasing`) | For-lease sample spaces |
| Future Dev (`/future-dev`) | Pipeline / future retail concepts |
| Services (`/services`) | Six service descriptions |
| SBA Calc (`/sba-calculator`) | Simple loan estimate tool (not a lender quote) |
| Team (`/team`) | Role-based team placeholders |
| About (`/about`) | Firm story and values |
| Contact (`/contact`) | Office details + message form (opens email) |

## Contact used on the site

- Phone: **(661) 496-0838**
- Mailing: **1005 Stine Road, Bakersfield, CA 93309**
- Email: **info@primeretailgroup.com**

## How to run (for developers)

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## Adding Crexi & LoopNet live feeds

The listings page already has **Browse on Crexi** and **Browse on LoopNet** buttons for Bakersfield searches.

When you get official embed codes (Crexi Fuse or LoopNet LoopLink):

1. Paste them into `src/content/marketplace-embeds.ts`, **or**
2. Put them in a `.env.local` file (see `.env.example`).

If those fields are empty, the site hides iframes on purpose so you never see a blank box.

## Sample listings

Cards on Listings / Leasing / Home are **sample** Central Valley–style retail inventory for design and conversation. Replace them later with live data or marketplace embeds.

## Photos

Retail stock photos live in `public/images/` (Unsplash, free to use with attribution where required). Hero and section backgrounds are shopping / storefront / corridor scenes with a dark overlay for readable text.

## Tech

- Next.js 15 (App Router)
- Tailwind CSS 4
- Fonts: Cormorant Garamond (headlines) + Inter (UI)

## Deploy

Push to GitHub (`main`). Connect the repo to Vercel for a public URL, or run `npm run build && npm start` on any Node host.
