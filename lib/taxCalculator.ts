export type TaxCalculatorInput = {
  annualRevenue: number;
  businessType: string;
  location: "mainland" | "freezone";
};

export type TaxCalculatorResult = {
  annualRevenue: number;
  businessType: string;
  location: "mainland" | "freezone";
  note: string;
};

export function calculateDemoTax(
  input: TaxCalculatorInput
): TaxCalculatorResult {
  return {
    ...input,
    note: "Tax calculation logic is currently for demonstration purposes only. No actual UAE tax amount is calculated.",
  };
}
