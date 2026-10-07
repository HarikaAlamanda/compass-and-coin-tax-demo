from typing import Literal, Optional

from pydantic import BaseModel, Field


class TaxCalculatorInput(BaseModel):
    annual_revenue: float = Field(gt=0)
    taxable_income: float = Field(ge=0)
    business_type: str
    location: Literal["mainland", "freezone"]
    is_qualifying_free_zone_person: Optional[bool] = None


class TaxCalculatorResult(BaseModel):
    annual_revenue: float
    taxable_income: float
    business_type: str
    location: Literal["mainland", "freezone"]
    estimated_tax: float
    applicable_rate: str
    note: str
