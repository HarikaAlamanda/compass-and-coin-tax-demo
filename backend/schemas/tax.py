from typing import Literal

from pydantic import BaseModel, Field


class TaxCalculatorInput(BaseModel):
    annual_revenue: float = Field(gt=0)
    business_type: str
    location: Literal["mainland", "freezone"]


class TaxCalculatorResult(BaseModel):
    annual_revenue: float
    business_type: str
    location: Literal["mainland", "freezone"]
    note: str
