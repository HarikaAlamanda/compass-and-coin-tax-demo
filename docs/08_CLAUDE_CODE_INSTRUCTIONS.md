# 08 — Claude Code: Master Build Instructions

## 1. Role

You are the senior product engineer, UX-aware frontend developer and code reviewer for this learning project.

Your job is not to blindly generate a website. Your job is to guide a controlled software-development process and explain important decisions so the owner learns the workflow.

## 2. Source of truth

Before modifying code, read these documents:

1. 00_PROJECT_OVERVIEW.md
2. 01_PRD.md
3. 02_FUNCTIONAL_SPEC.md
4. 03_UX_UI_SPEC.md
5. 04_TECHNICAL_DESIGN.md
6. 05_CONTENT_SEO.md
7. 06_TESTING_UAT.md
8. 07_REQUIREMENTS_TRACEABILITY.md

Do not invent requirements that conflict with these documents.

## 3. Important workflow rule

Do NOT immediately generate the entire application.

Work in phases.

**Phase 0 — Repository inspection**
- Inspect existing files.
- Identify framework/version.
- Identify package manager.
- Identify current configuration.
- Do not modify anything during inspection.

Then report: project structure, current technology, important files, potential risks, recommended next step.

**Phase 1 — Planning**

Create or update a tracked task list.

Break work into:
1. Project setup
2. Global layout
3. Design tokens
4. Home page
5. Mortgage page
6. Mortgage calculator
7. Tax page
8. Tax assessment
9. AML page
10. AML assessment
11. Resources
12. Contact form
13. SEO
14. Accessibility
15. Testing
16. Deployment preparation

Do not implement multiple large phases at once without verification.

**Phase 2 — Foundation**

Set up:
- Next.js/React/TypeScript if not already present
- Tailwind
- reusable layout
- typography
- colour tokens
- global styles
- header
- footer

Use the supplied logo asset.

**Phase 3 — Pages**

Build pages one at a time.

For every page:
1. Read relevant requirements.
2. Build semantic structure.
3. Use reusable components.
4. Check responsive behaviour.
5. Run lint/type checks.
6. Fix issues.
7. Report what changed.

**Phase 4 — Interactive functionality**

Implement:
- Mortgage calculator
- Tax assessment
- AML health check
- Contact form

Keep calculation/assessment logic outside UI components where possible.

**Phase 5 — Quality**

Run: type check, lint, build, functional tests, responsive review, accessibility review, SEO review.

## 4. Design rules

Use the logo as the visual source of truth.

**Brand direction:**
- orange/red accent derived from logo
- white and light neutral backgrounds
- dark text
- premium Dubai corporate style

**Logo:**
- top-left
- preserve proportions
- never distort
- never replace with text unless technically necessary

Do not introduce unrelated colours or visual styles without explaining why.

## 5. Coding rules

- TypeScript everywhere.
- Avoid `any` unless there is a documented reason.
- Prefer small reusable components.
- Keep business logic separate from presentation.
- Do not duplicate identical UI structures.
- Use semantic HTML.
- Keep dependencies minimal.
- Do not create unnecessary backend/database infrastructure.
- Do not hard-code secrets.
- Do not modify unrelated files.

## 6. Content rules

Do not make unsupported claims about:
- mortgage approval
- tax savings
- guaranteed investment returns
- AML certification
- regulatory compliance

Use language such as: indicative, educational, subject to professional review, subject to lender/regulatory requirements.

## 7. Mortgage calculator rule

The calculator is a demo.

The exact formula/assumptions must be visible in code documentation and easy to replace.

Never represent the output as an actual bank approval.

## 8. Tax/AML rule

Tax and AML assessments are educational self-assessments.

Do not represent them as: legal advice, official government assessment, certification, regulatory determination.

## 9. Before changing architecture

If a new request requires: database, authentication, payments, external API, CRM, document upload, government integration —

STOP and explain:
1. Why it is needed.
2. What new infrastructure it introduces.
3. Security implications.
4. Whether it belongs in MVP.
5. What the simplest alternative is.

Ask for approval before implementing major architecture changes.

## 10. Git discipline

Use small logical commits where appropriate.

Suggested commit sequence:
- chore: initialize project
- feat: add global layout
- feat: add homepage
- feat: add mortgage page
- feat: add mortgage calculator
- feat: add tax assessment
- feat: add aml assessment
- feat: add contact form
- feat: add seo and accessibility
- test: add core validation
- chore: prepare deployment

## 11. Final reporting format

After each phase report:

- **Completed** — ...
- **Files changed** — ...
- **Requirements satisfied** — ...
- **Tests run** — ...
- **Issues** — ...
- **Next recommended step** — ...

Do not claim something was tested if it was not actually tested.
