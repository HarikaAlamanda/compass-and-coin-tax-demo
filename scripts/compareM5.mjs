// M5 comparison harness: old TS demo logic vs new Python/FastAPI demo logic.
// Read-only comparison tool. Does not modify either implementation.
import { calculateDemoTax } from "../lib/taxCalculator.ts";

const API_URL = process.env.M5_API_URL ?? "http://127.0.0.1:8001";

const cases = [
  { id: "T1", input: { annualRevenue: 100000, businessType: "LLC", location: "mainland" } },
  { id: "T2", input: { annualRevenue: 250000, businessType: "Partnership", location: "mainland" } },
  { id: "T3", input: { annualRevenue: 250000, businessType: "Partnership", location: "freezone" } },
  { id: "T4", input: { annualRevenue: 0, businessType: "LLC", location: "mainland" } },
  { id: "T5", input: { annualRevenue: -5000, businessType: "LLC", location: "mainland" } },
  { id: "T6", input: { annualRevenue: 999999999999, businessType: "LLC", location: "freezone" } },
  { id: "T7", input: { businessType: "LLC", location: "mainland" } }, // missing annualRevenue
  { id: "T8", input: { annualRevenue: 100000, location: "mainland" } }, // missing businessType
  { id: "T9", input: { annualRevenue: 100000, businessType: "LLC" } }, // missing location
  { id: "T10", input: { annualRevenue: 100000, businessType: "LLC", location: "offshore" } }, // invalid location
  { id: "T11", input: { annualRevenue: 100000, businessType: "", location: "mainland" } }, // invalid/empty business type
  { id: "T12", input: { annualRevenue: 1, businessType: "Sole Proprietorship", location: "freezone" } },
  { id: "T13", input: { annualRevenue: 50000.5, businessType: "Other", location: "mainland" } },
  { id: "T14", input: { annualRevenue: 7500000, businessType: "LLC", location: "freezone" } },
];

function runOldTs(input) {
  try {
    const result = calculateDemoTax(input);
    return { ok: true, status: "n/a (pure function, no validation layer)", body: result };
  } catch (e) {
    return { ok: false, status: "threw", body: String(e) };
  }
}

async function runNewPython(input) {
  const body = {
    annual_revenue: input.annualRevenue,
    business_type: input.businessType,
    location: input.location,
  };
  try {
    const res = await fetch(`${API_URL}/tax/demo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, body: json };
  } catch (e) {
    return { ok: false, status: "network-error", body: String(e) };
  }
}

const results = [];
for (const c of cases) {
  const oldResult = runOldTs(c.input);
  const newResult = await runNewPython(c.input);
  results.push({ id: c.id, input: c.input, oldResult, newResult });
}

console.log(JSON.stringify(results, null, 2));
