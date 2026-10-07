from backend.schemas.tax import TaxCalculatorInput, TaxCalculatorResult

SMALL_BUSINESS_THRESHOLD = 375_000
STANDARD_RATE = 0.09

DISCLAIMER = (
    "This calculator provides a basic indicative UAE Corporate Tax estimate "
    "based on the inputs provided. It does not implement all UAE Corporate "
    "Tax rules, exemptions, reliefs, deductions, or Free Zone conditions. It "
    "is not tax advice. Consult a qualified UAE tax professional for an "
    "actual tax calculation."
)


def _standard_estimate(taxable_income: float) -> tuple[float, str]:
    estimated_tax = max(taxable_income - SMALL_BUSINESS_THRESHOLD, 0) * STANDARD_RATE
    if taxable_income <= SMALL_BUSINESS_THRESHOLD:
        rate_note = "0% (taxable income at or below AED 375,000)"
    else:
        rate_note = "9% on taxable income above AED 375,000"
    return estimated_tax, rate_note


def calculate_demo_tax(data: TaxCalculatorInput) -> TaxCalculatorResult:
    estimated_tax, rate_note = _standard_estimate(data.taxable_income)

    if data.location == "freezone" and data.is_qualifying_free_zone_person:
        applicable_rate = (
            "Simplified estimate only: as a Qualifying Free Zone Person, "
            "qualifying income may be subject to 0% while non-qualifying "
            "income may be subject to 9%. This estimate does not determine "
            "which portion of your income qualifies."
        )
    else:
        applicable_rate = rate_note

    return TaxCalculatorResult(
        annual_revenue=data.annual_revenue,
        taxable_income=data.taxable_income,
        business_type=data.business_type,
        location=data.location,
        estimated_tax=estimated_tax,
        applicable_rate=applicable_rate,
        note=DISCLAIMER,
    )
