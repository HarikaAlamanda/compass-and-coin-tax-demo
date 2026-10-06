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

## Local development

```
uvicorn backend.main:app --reload
```

Runs on `http://localhost:8000` by default.

## Production start command

```
uvicorn backend.main:app --host 0.0.0.0 --port $PORT
```

Binds to all interfaces and reads the port from the `$PORT` environment variable
provided by the hosting platform (e.g. Render). Does not use `--reload` in production.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `PORT` | Provided by host | Port uvicorn binds to in production. Not required locally (defaults to 8000). |
| `FRONTEND_ORIGIN` | Optional | The deployed frontend's origin (e.g. `https://your-app.vercel.app`) to allow via CORS, in addition to `http://localhost:3000`, which is always allowed. |

No secrets, API keys, or database credentials are required — this backend has no
database and no authentication.

## Deployment notes

- Point the hosting provider's build step at `backend/requirements.txt`.
- Use the production start command above; do not use `--reload`.
- Set `FRONTEND_ORIGIN` to the deployed frontend's HTTPS origin once known.
- No pinned Python version is enforced in this repo — confirm the host's available
  Python version supports the pinned dependency versions in `requirements.txt`.

## Endpoints

- `GET /health` — liveness check, returns `{"status": "ok"}`.
- `POST /tax/demo` — demo-only tax calculator endpoint. Accepts `annual_revenue`,
  `business_type`, `location` and returns the same values plus a static disclaimer.
  Performs no real tax calculation.

## Test

```
pytest backend/tests
```

## Database migration status

**M1 database migration is NOT APPLICABLE to the current demo because no existing
database was found.** The current Next.js demo has no database, no API routes, and no
backend — `calculateDemoTax` runs entirely client-side with static placeholder logic.
No database was created to artificially satisfy M1.
