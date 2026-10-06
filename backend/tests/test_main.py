from fastapi.testclient import TestClient

from backend.main import app

client = TestClient(app)


def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_tax_demo_returns_demo_note():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["annual_revenue"] == 100000
    assert body["business_type"] == "LLC"
    assert body["location"] == "mainland"
    assert "demonstration purposes only" in body["note"]


def test_tax_demo_rejects_invalid_revenue():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": -5,
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
            "business_type": "LLC",
            "location": "mainland",
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["annual_revenue"] == 1_000_000_000_000
    assert "demonstration purposes only" in body["note"]


def test_tax_demo_rejects_missing_annual_revenue():
    response = client.post(
        "/tax/demo",
        json={
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
            "location": "mainland",
        },
    )
    assert response.status_code == 422


def test_tax_demo_rejects_missing_location():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
            "business_type": "LLC",
        },
    )
    assert response.status_code == 422


def test_tax_demo_rejects_invalid_location_value():
    response = client.post(
        "/tax/demo",
        json={
            "annual_revenue": 100000,
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
            "business_type": "Sole Proprietorship",
            "location": "freezone",
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["location"] == "freezone"
    assert "demonstration purposes only" in body["note"]
