from fastapi.testclient import TestClient

from backend.main import app

client = TestClient(app)


def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_tax_demo_returns_estimate_fields():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
            "taxable_income": 100000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["annual_revenue"] == 100000
    assert body["taxable_income"] == 100000
    assert body["business_type"] == "LLC"
    assert body["location"] == "mainland"
    assert body["estimated_tax"] == 0
    assert "not tax advice" in body["note"]


def test_tax_demo_rejects_invalid_revenue():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": -5,
            "taxable_income": 0,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 422


def test_tax_demo_rejects_zero_revenue():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 0,
            "taxable_income": 0,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 422


def test_tax_demo_rejects_negative_revenue():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": -100000,
            "taxable_income": 0,
            "business_type": "LLC",
            "location": "freezone",
        },
    )
    assert response.status_code == 422


def test_tax_demo_accepts_very_large_revenue():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 1_000_000_000_000,
            "taxable_income": 1_000_000_000_000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["annual_revenue"] == 1_000_000_000_000


def test_tax_demo_rejects_missing_annual_revenue():
    response = client.post(
        "/tax/demo",
        json={
            "taxable_income": 100000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 422


def test_tax_demo_rejects_missing_business_type():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
            "taxable_income": 100000,
            "location": "mainland",
        },
    )
    assert response.status_code == 422


def test_tax_demo_rejects_missing_location():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
            "taxable_income": 100000,
            "business_type": "LLC",
        },
    )
    assert response.status_code == 422


def test_tax_demo_rejects_invalid_location_value():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
            "taxable_income": 100000,
            "business_type": "LLC",
            "location": "offshore",
        },
    )
    assert response.status_code == 422


def test_tax_demo_accepts_freezone_location():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 250000,
            "taxable_income": 250000,
            "business_type": "Sole Proprietorship",
            "location": "freezone",
            "is_qualifying_free_zone_person": False,
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["location"] == "freezone"


def test_tax_demo_rejects_missing_taxable_income():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 422


def test_tax_demo_rejects_negative_taxable_income():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
            "taxable_income": -1,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 422


def test_taxable_income_300000_is_zero_tax():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 300000,
            "taxable_income": 300000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 200
    assert response.json()["estimated_tax"] == 0


def test_taxable_income_375000_is_zero_tax():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 375000,
            "taxable_income": 375000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 200
    assert response.json()["estimated_tax"] == 0


def test_taxable_income_500000_is_11250_tax():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 500000,
            "taxable_income": 500000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 200
    assert response.json()["estimated_tax"] == 11250


def test_taxable_income_1000000_is_56250_tax():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 1000000,
            "taxable_income": 1000000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 200
    assert response.json()["estimated_tax"] == 56250


def test_freezone_qfzp_yes_uses_simplified_wording():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 500000,
            "taxable_income": 500000,
            "business_type": "LLC",
            "location": "freezone",
            "is_qualifying_free_zone_person": True,
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert "Simplified estimate" in body["applicable_rate"]
    assert "qualifying income" in body["applicable_rate"]


def test_freezone_qfzp_no_uses_standard_calculation():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 500000,
            "taxable_income": 500000,
            "business_type": "LLC",
            "location": "freezone",
            "is_qualifying_free_zone_person": False,
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["estimated_tax"] == 11250
    assert "Simplified estimate" not in body["applicable_rate"]
