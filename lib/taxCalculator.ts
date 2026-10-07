export type TaxCalculatorInput = {
  annualRevenue: number;
  taxableIncome: number;
  businessType: string;
  location: "mainland" | "freezone";
  isQualifyingFreeZonePerson?: boolean;
};

export type TaxCalculatorResult = {
  annualRevenue: number;
  taxableIncome: number;
  businessType: string;
  location: "mainland" | "freezone";
  estimatedTax: number;
  applicableRate: string;
  note: string;
};

const SMALL_BUSINESS_THRESHOLD = 375_000;
const STANDARD_RATE = 0.09;

export const DISCLAIMER =
  "This calculator provides a basic indicative UAE Corporate Tax estimate based on the inputs provided. It does not implement all UAE Corporate Tax rules, exemptions, reliefs, deductions, or Free Zone conditions. It is not tax advice. Consult a qualified UAE tax professional for an actual tax calculation.";

export function calculateDemoTax(
  input: TaxCalculatorInput
): TaxCalculatorResult {
  const estimatedTax =
    Math.max(input.taxableIncome - SMALL_BUSINESS_THRESHOLD, 0) *
    STANDARD_RATE;

  let applicableRate: string;
  if (input.location === "freezone" && input.isQualifyingFreeZonePerson) {
    applicableRate =
      "Simplified estimate only: as a Qualifying Free Zone Person, qualifying income may be subject to 0% while non-qualifying income may be subject to 9%. This estimate does not determine which portion of your income qualifies.";
  } else if (input.taxableIncome <= SMALL_BUSINESS_THRESHOLD) {
    applicableRate = "0% (taxable income at or below AED 375,000)";
  } else {
    applicableRate = "9% on taxable income above AED 375,000";
  }

  return {
    annualRevenue: input.annualRevenue,
    taxableIncome: input.taxableIncome,
    businessType: input.businessType,
    location: input.location,
    estimatedTax,
    applicableRate,
    note: DISCLAIMER,
  };
}
