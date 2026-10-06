from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.schemas.tax import TaxCalculatorInput, TaxCalculatorResult
from backend.services.tax_service import calculate_demo_tax

app = FastAPI(title="Compass and Coin Tax Demo API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


@app.post("/tax/demo", response_model=TaxCalculatorResult)
def tax_demo(payload: TaxCalculatorInput) -> TaxCalculatorResult:
    return calculate_demo_tax(payload)
