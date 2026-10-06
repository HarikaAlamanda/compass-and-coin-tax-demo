import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.schemas.tax import TaxCalculatorInput, TaxCalculatorResult
from backend.services.tax_service import calculate_demo_tax

app = FastAPI(title="Compass and Coin Tax Demo API", version="0.1.0")

allowed_origins = {"http://localhost:3000"}
frontend_origin = os.environ.get("FRONTEND_ORIGIN")
if frontend_origin:
    allowed_origins.add(frontend_origin)

# Matches only Vercel Preview deployments of this specific project under this
# specific team (e.g. https://compass-and-coin-tax-demo-<hash>-compass-and-coin1.vercel.app).
# Preview URLs include a per-deployment hash, so a single exact FRONTEND_ORIGIN
# value cannot stay valid across Preview deploys. Intentionally scoped to this
# project/team only — not a wildcard for arbitrary *.vercel.app domains.
VERCEL_PREVIEW_ORIGIN_REGEX = (
    r"^https://compass-and-coin-tax-demo-[a-z0-9]+-compass-and-coin1\.vercel\.app$"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=list(allowed_origins),
    allow_origin_regex=VERCEL_PREVIEW_ORIGIN_REGEX,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


@app.post("/tax/demo", response_model=TaxCalculatorResult)
def tax_demo(payload: TaxCalculatorInput) -> TaxCalculatorResult:
    return calculate_demo_tax(payload)
