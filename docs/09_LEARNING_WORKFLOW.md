# 09 — Learning Workflow: How to Build Any Future Website

Use this project as your reusable template.

## Stage 1 — Idea

Write:
- What is the product?
- Who is it for?
- What problem does it solve?

## Stage 2 — Requirements

Create:
- Project brief
- User types
- Business objectives
- Functional requirements
- Non-functional requirements
- Assumptions
- Out-of-scope list

## Stage 3 — UX

Create:
- Sitemap
- User journeys
- Page specifications
- Wireframes

## Stage 4 — UI

Create:
- Brand colours
- Typography
- Spacing
- Components
- Responsive rules
- Accessibility rules

## Stage 5 — Technical planning

Decide: Framework, Language, Styling, Components, Data, APIs, Database, Hosting.

Use the simplest stack that satisfies requirements.

## Stage 6 — Development

Build in this order:
1. Foundation
2. Global components
3. One page
4. Reusable components
5. Interactive features
6. Forms
7. Integrations

## Stage 7 — Testing

Test: Functionality, Validation, Responsive layout, Accessibility, SEO, Performance.

## Stage 8 — Deployment

Typical flow:

```
Local → Git → GitHub → Vercel → Production
```

## Stage 9 — Iteration

After launch:
- Review analytics
- Gather user feedback
- Identify failures
- Prioritize improvements
- Update requirements
- Implement changes

## The reusable AI prompt pattern

For future projects, give Claude Code:

1. Project overview
2. Requirements
3. UX/UI specification
4. Technical design
5. Content
6. Testing requirements
7. Clear instruction to inspect before changing anything
8. Explicit scope and out-of-scope
9. Definition of done

Then ask it to work phase-by-phase.

## The most important rule

Do not ask AI:

> Build my whole website.

Ask:

> Read the project documents. Inspect the repository. Tell me what you understand, identify conflicts or missing requirements, propose the next implementation phase, and wait for approval before making major changes.

This keeps the AI controlled and makes the development process teachable.
