# 06 — Testing & UAT Plan

## 1. Testing levels

- **Level 1 — Component testing**: Test buttons, form fields, cards and calculators.
- **Level 2 — Feature testing**: Test complete mortgage, tax and AML flows.
- **Level 3 — Integration testing**: Only after APIs/integrations are introduced.
- **Level 4 — Responsive testing**: Desktop, tablet and mobile.
- **Level 5 — Accessibility testing**: Keyboard, labels, focus, headings and basic automated checks.
- **Level 6 — User acceptance testing**: A non-developer should be able to complete key journeys without assistance.

## 2. Core test cases

### Navigation
- Home link works
- All nav links work
- Mobile menu works
- Footer links work

### Mortgage
- Empty submission shows errors
- Negative values rejected
- Invalid age rejected
- Down payment greater than price rejected
- Valid values produce results
- Results display AED formatting
- Disclaimer is visible

### Tax
- Questions can be answered
- Incomplete state handled
- Result displayed
- Disclaimer visible
- CTA works

### AML
- Questions can be answered
- Score/category calculated
- Result is educational
- No claim of certification
- CTA works

### Contact
- Required fields validate
- Email validation works
- Consent required
- Success state appears
- No accidental duplicate submission in demo

### Responsive
- 360px-ish mobile viewport
- Tablet
- Desktop
- No horizontal scrolling
- Navigation usable

## 3. Browser testing

At minimum:
- Chrome
- Edge
- Safari if available

## 4. Accessibility acceptance criteria

- Keyboard can reach all interactive controls
- Focus is visible
- Inputs have labels
- Images have appropriate alt text
- Headings follow a logical order

## 5. Performance acceptance criteria

- Avoid unnecessary large images
- Compress/optimize images
- Avoid unnecessary dependencies
- Keep client-side code limited

## 6. UAT scenarios

A tester should be able to:
1. Understand the company proposition.
2. Find Mortgage.
3. Complete the calculator.
4. Find Tax.
5. Complete the tax assessment.
6. Find AML.
7. Complete the AML health check.
8. Request a consultation.
9. Use the site on mobile.
