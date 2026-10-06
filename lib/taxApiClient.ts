import { TaxCalculatorInput, TaxCalculatorResult } from "@/lib/taxCalculator";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ??
  "http://localhost:8000";

export class TaxApiError extends Error {}

type TaxDemoApiResponse = {
  annual_revenue: number;
  business_type: string;
  location: "mainland" | "freezone";
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
        business_type: input.businessType,
        location: input.location,
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
    businessType: data.business_type,
    location: data.location,
    note: data.note,
  };
}
