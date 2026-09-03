# Compass & Coin — Website

A learning project + fully functional demo website for Compass & Coin, a Dubai/UAE property, mortgage, tax and AML compliance business.

This project's documentation is the source of truth for scope, requirements, design and technical decisions. See [`docs/`](./docs) — start with [`docs/00_PROJECT_OVERVIEW.md`](./docs/00_PROJECT_OVERVIEW.md).

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- npm for package management
- Git for version control

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            Next.js App Router pages and layouts
components/
  layout/       Header, Footer, navigation
  ui/           Generic reusable UI primitives (Button, Container, Badge...)
  marketing/    ServiceCard, FeatureCard, CTASection, ArticleCard...
  forms/        Form fields and the lead/consultation form
  calculators/  Mortgage calculator UI
  assessments/  Tax and AML assessment UI
lib/            Pure calculation/validation/formatting logic (no UI)
content/        Static content/data (services, resources, FAQs)
types/          Shared TypeScript types
public/         Static assets served as-is
assets/         Source brand assets (e.g. the supplied logo) not yet wired into the app
docs/           Project documentation (source of truth)
```

## Project status

Phase 1 (project setup) complete. No pages, calculators, or assessments have been built yet — see `docs/08_CLAUDE_CODE_INSTRUCTIONS.md` for the phased build plan.
