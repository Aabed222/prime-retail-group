import { CaseStudyTeasers } from "@/components/CaseStudyTeasers";
import { CtaBand } from "@/components/CtaBand";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Hero } from "@/components/Hero";
import { InsightsTeaser } from "@/components/InsightsTeaser";
import { ServiceCards } from "@/components/ServiceCards";
import { StatsRow } from "@/components/StatsRow";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <FeaturedProperties />
      <StatsRow />
      <CaseStudyTeasers />
      <InsightsTeaser />
      <CtaBand />
    </>
  );
}
