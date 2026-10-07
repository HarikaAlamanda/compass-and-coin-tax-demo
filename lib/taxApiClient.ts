import { TaxCalculatorInput, TaxCalculatorResult } from "@/lib/taxCalculator";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ??
  "http://localhost:8000";

export class TaxApiError extends Error {}

type TaxDemoApiResponse = {
  annual_revenue: number;
  taxable_income: number;
  business_type: string;
  location: "mainland" | "freezone";
  estimated_tax: number;
  applicable_rate: string;
  note: string;
};

export async function fetchDemoTax(
  input: TaxCalculatorInput
): Promise<TaxCalculatorResult> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/tax/demo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        annual_revenue: input.annualRevenue,
        taxable_income: input.taxableIncome,
        business_type: input.businessType,
        location: input.location,
        is_qualifying_free_zone_person: input.isQualifyingFreeZonePerson,
      }),
    });
  } catch {
    throw new TaxApiError(
      "Could not reach the demo tax service. Showing a local demo result instead."
    );
  }

  if (!response.ok) {
    throw new TaxApiError(
      "The demo tax service returned an unexpected response."
    );
  }

  const data = (await response.json()) as TaxDemoApiResponse;

  return {
    annualRevenue: data.annual_revenue,
    taxableIncome: data.taxable_income,
    businessType: data.business_type,
    location: data.location,
    estimatedTax: data.estimated_tax,
    applicableRate: data.applicable_rate,
    note: data.note,
  };
}
