import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SbaCalculator } from "@/components/SbaCalculator";

export const metadata: Metadata = {
  title: "SBA Calculator",
  description:
    "Estimate a monthly payment for an SBA-style commercial loan. Illustrative only — not a lender quote.",
};

export default function SbaCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing tools"
        title="SBA Loan Calculator"
        description="Estimate a monthly payment and total loan cost for an SBA-backed commercial or related real estate loan. For qualified guidance, speak with one of our advisors."
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="container-prg">
          <SbaCalculator />
        </div>
      </section>
    </>
  );
}
