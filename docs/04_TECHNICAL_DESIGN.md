# 04 — Technical Design

## 1. Recommended learning stack

**Application**
- Next.js
- React
- TypeScript

**Styling**
- Tailwind CSS

**UI primitives**
- shadcn/ui where useful

**Icons**
- Lucide

**Version control**
- Git
- GitHub

**Deployment**
- Vercel

## 2. Architecture principle

Start as a simple frontend application.

Do not add a database or backend until a real requirement exists.

**Conceptual architecture:**

```
Browser
  → Next.js application
    → reusable React components
      → local calculation/assessment logic
        → optional API later
          → optional database/CRM later
```

## 3. Suggested folder structure

```
components/
    layout/
    ui/
    marketing/
    forms/
    calculators/
    assessments/

lib/
    mortgage.ts
    taxAssessment.ts
    amlAssessment.ts
    validation.ts
    formatters.ts

content/
    services.ts
    resources.ts
    faqs.ts

types/
    calculator.ts
    forms.ts
```

The exact structure may vary with the chosen Next.js version.

## 4. Component architecture

Pages should compose reusable components.

## 5. Data separation

Do not hard-code repeated content in JSX.

Keep service data, FAQs and article metadata in content/data modules.

## 6. Calculation separation

Keep business calculations independent from React UI.

This makes them:
- easier to test
- easier to change
- reusable
- easier for AI tools to review

## 7. Environment variables

Use `.env.local` only for local secrets/configuration.

Never commit secrets.

Provide `.env.example`.

## 8. Error handling

The application should:
- Validate inputs
- Handle empty states
- Handle invalid values
- Show user-friendly messages
- Avoid exposing internal errors

## 9. Future architecture

Only when justified:

Potential future integrations:
- Supabase
- CRM
- Email provider
- Analytics
- CMS

Do not install these until requirements require them.

## 10. Security boundaries

The demo must not:
- collect identity documents
- store passport/Emirates ID data
- store bank statements
- store financial credentials
- claim to perform actual KYC
- claim to perform actual regulatory reporting
