# Backend (M1 — Python/FastAPI migration foundation)

This is the minimum FastAPI scaffold for the Python migration exercise. It does **not**
replace or connect to the existing Next.js frontend yet.

## Setup

```
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

## Run

```
uvicorn backend.main:app --reload
```

## Test

```
pytest backend/tests
```

## Database migration status

**M1 database migration is NOT APPLICABLE to the current demo because no existing
database was found.** The current Next.js demo has no database, no API routes, and no
backend — `calculateDemoTax` runs entirely client-side with static placeholder logic.
No database was created to artificially satisfy M1.
