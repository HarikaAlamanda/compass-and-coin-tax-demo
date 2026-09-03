# 01 — Product Requirements Document (PRD)

## 1. Product name

Compass & Coin — Property, Finance & Compliance

## 2. Product purpose

A public-facing website and learning project for presenting Compass & Coin's real-estate-related services and demonstrating practical digital tools for mortgage, tax and AML.

## 3. Problem statement

Visitors currently encounter separate business concepts. The new site should give them one clear destination where they can understand services, assess their situation, and request assistance.

## 4. Product goals

- **G1 — Clarity**: A visitor should understand what the company does within 10 seconds.
- **G2 — Conversion**: A visitor should be able to request a consultation from any major service page.
- **G3 — Utility**: Visitors should have access to simple assessment tools.
- **G4 — Trust**: The website should communicate professionalism without making unsupported legal, tax or financial promises.
- **G5 — Reusability**: The codebase should be organized so the same approach can be reused for future websites.

## 5. User journeys

- **Journey A — Mortgage**: Home → Mortgage → Calculator → Results → Consultation form
- **Journey B — Tax**: Home → Tax → Tax Assessment → Indicative result → Consultation form
- **Journey C — AML**: Home → AML → AML Health Check → Readiness result → Consultation form
- **Journey D — Research**: Home → Resources → Article → Related service → Consultation
- **Journey E — General enquiry**: Any page → CTA → Contact → Form → Confirmation

## 6. Functional requirements

### FR-001 Navigation
The system shall provide a responsive navigation menu linking to all MVP pages.

**Acceptance criteria**
- Every menu item routes correctly.
- Mobile navigation opens/closes correctly.
- Active page state is visually clear.
- Logo links to Home.

### FR-002 Home hero
The Home page shall communicate Property, Finance and Compliance positioning.

**Acceptance criteria**
- Clear H1.
- Primary CTA.
- Secondary CTA.
- No excessive text.

### FR-003 Service cards
The Home page shall display Real Estate, Mortgage, Tax and AML service cards.

### FR-004 Mortgage calculator
The system shall accept valid mortgage inputs and calculate indicative results.

**Acceptance criteria**
- Required fields cannot be submitted empty.
- Numeric inputs reject invalid values.
- Results update after valid submission.
- Results are clearly labelled indicative.
- No claim of bank approval is made.

### FR-005 Tax assessment
The system shall present a short questionnaire and an indicative outcome.

### FR-006 AML assessment
The system shall present a short AML readiness questionnaire and an indicative score/category.

### FR-007 Lead form
The system shall validate a consultation form.

**Required:** Name, Email, Phone, Service, Consent
**Optional:** Message

### FR-008 Form success state
After valid submission, the UI shall show a clear confirmation state.

For the demo, submission may be simulated. Production integration will be a separate requirement.

### FR-009 Resources
The Resources page shall show cards for guides/articles with categories.

### FR-010 Responsive design
All pages shall work on desktop, tablet and mobile.

### FR-011 Accessibility
Interactive elements shall have labels, keyboard focus states and sufficient semantic structure.

### FR-012 SEO
Each public page shall have:
- Unique title
- Meta description
- Canonical strategy
- One primary H1
- Descriptive URLs
- Open Graph metadata

### FR-013 Legal/disclaimer layer
Pages involving financial, tax or compliance assessments shall display appropriate disclaimers.

Content must be reviewed before production use.

## 7. Non-functional requirements

- **NFR-001 Performance**: Avoid unnecessary client-side JavaScript and oversized assets.
- **NFR-002 Maintainability**: Use reusable components and centralized content where practical.
- **NFR-003 Security**: Never hard-code secrets. Never collect sensitive identity documents in the demo.
- **NFR-004 Reliability**: Invalid input must not crash the application.
- **NFR-005 Responsiveness**: The layout must adapt cleanly to common mobile and desktop widths.
- **NFR-006 Code quality**: Use TypeScript, meaningful naming, modular components and linting.

## 8. Assumptions

- The website is a demo and learning project.
- Exact UAE regulatory content will be reviewed separately.
- No real financial decision is made by the calculator.
- No government or bank integration is required for MVP.
