# 02 — Functional Specification

## 1. Page inventory

### Home
Sections:
1. Header/navigation
2. Hero
3. Service overview
4. Why Compass & Coin
5. Property-to-compliance journey
6. Interactive tools
7. Resources preview
8. CTA
9. Footer

### Mortgage
Sections:
1. Hero
2. Mortgage service overview
3. Eligibility calculator
4. Mortgage journey
5. Benefits
6. FAQs
7. CTA

### Tax
Sections:
1. Hero
2. Tax service overview
3. Services
4. Tax assessment
5. Common questions
6. CTA

### AML
Sections:
1. Hero
2. AML overview
3. AML services
4. AML health check
5. Compliance process
6. FAQs
7. CTA

### Resources
Sections:
1. Hero
2. Category filters
3. Article cards
4. CTA

### Contact
Sections:
1. Contact introduction
2. Consultation form
3. Contact details
4. Service selector
5. Confirmation state

## 2. Mortgage calculator specification

**Inputs**
- income: positive number
- commitments: zero or positive number
- age: realistic positive integer
- propertyPrice: positive number
- downPayment: zero or positive number

**Validation**
- Income > 0
- Commitments >= 0
- Age within configured demo range
- Property price > 0
- Down payment >= 0
- Down payment < property price
- Currency shown as AED

**Calculation architecture**

Keep the calculation logic in a pure function, separate from UI.

Example conceptual interface:

```
calculateMortgageEstimate(input) -> MortgageEstimate
```

The actual assumptions/formulas must be explicitly documented in code and labelled as demo assumptions.

**Result**

Show:
- Estimated financing
- Estimated down payment
- Estimated monthly payment
- Estimated term

Do not present the result as a bank offer.

## 3. Tax assessment specification

Example questions:
1. Are you operating a business in the UAE?
2. What type of activity do you conduct?
3. Is the entity newly established or existing?
4. Do you maintain accounting records?
5. Have you reviewed your tax obligations?

Result categories:
- Initial review recommended
- Further assessment recommended
- Appears to have basic preparation

The exact regulatory interpretation must not be represented as legal advice.

## 4. AML health check specification

Example questions:
- Do you have a written AML policy?
- Do you perform KYC/CDD?
- Do you identify beneficial owners where applicable?
- Do you conduct customer risk assessment?
- Do you maintain records?
- Do you have a process for escalating suspicious activity?
- Do you review/update customer information?

Each answer can contribute to an educational readiness score.

**Result:**
- Needs attention
- Developing
- Basic readiness
- Strong basic framework

Do not claim certification or regulatory compliance solely from the score.

## 5. Lead form specification

**Fields:**
- fullName: required
- email: required
- phone: required
- service: required
- message: optional
- consent: required

**Client validation:**
- Required fields
- Email format
- Reasonable phone length
- Consent must be checked

**Demo behaviour:**
- Prevent invalid submit
- Show inline errors
- Show success state
- Reset or retain fields according to UX decision

**Production behaviour:**
- Connect to a secure server/API
- Add spam protection
- Store only necessary data
- Add privacy/consent language
