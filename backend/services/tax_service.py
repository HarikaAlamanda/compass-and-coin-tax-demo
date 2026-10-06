from backend.schemas.tax import TaxCalculatorInput, TaxCalculatorResult

DEMO_NOTE = (
    "Tax calculation logic is currently for demonstration purposes only. "
    "No actual UAE tax amount is calculated."
)


def calculate_demo_tax(data: TaxCalculatorInput) -> TaxCalculatorResult:
    return TaxCalculatorResult(
        annual_revenue=data.annual_revenue,
        business_type=data.business_type,
        location=data.location,
        note=DEMO_NOTE,
    )
