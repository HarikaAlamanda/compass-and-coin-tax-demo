import {
  Home as HomeIcon,
  Landmark,
  Receipt,
  ShieldCheck,
  Network,
  GraduationCap,
  Calculator,
  UserCheck,
  Search,
  FileCheck2,
  ClipboardList,
  ShieldAlert,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import ServiceCard from "@/components/marketing/ServiceCard";
import FeatureCard from "@/components/marketing/FeatureCard";
import CTASection from "@/components/marketing/CTASection";
import { SERVICES } from "@/content/services";

const SERVICE_ICONS = {
  "real-estate": HomeIcon,
  mortgage: Landmark,
  tax: Receipt,
  aml: ShieldCheck,
} as const;

const FEATURES = [
  {
    icon: Network,
    title: "One connected ecosystem",
    description:
      "Property, financing, tax and compliance handled through a single, joined-up service rather than separate disconnected providers.",
  },
  {
    icon: GraduationCap,
    title: "UAE-focused expertise",
    description:
      "Guidance shaped around the UAE property, mortgage, tax and AML environment.",
  },
  {
    icon: Calculator,
    title: "Indicative self-service tools",
    description:
      "Explore mortgage, tax and AML tools that give you an indicative starting point before speaking to a professional.",
  },
  {
    icon: UserCheck,
    title: "Professional review, always",
    description:
      "Every indicative result is designed to lead into a proper consultation, not to replace one.",
  },
];

const JOURNEY_STEPS = [
  {
    icon: Search,
    title: "Explore property",
    description: "Understand the UAE real estate options available to you.",
  },
  {
    icon: Landmark,
    title: "Secure financing",
    description: "Get an indicative view of mortgage eligibility and cost.",
  },
  {
    icon: FileCheck2,
    title: "Manage tax",
    description: "Understand your UAE tax position with an indicative review.",
  },
  {
    icon: ShieldCheck,
    title: "Stay compliant",
    description: "Check your AML readiness with an educational self-assessment.",
  },
];

const TOOLS = [
  {
    icon: Calculator,
    name: "Mortgage Eligibility Calculator",
    description:
      "Enter your income and property details for an indicative financing estimate.",
    href: "/mortgage",
  },
  {
    icon: ClipboardList,
    name: "Tax Assessment",
    description:
      "A short questionnaire that gives an indicative UAE tax readiness result.",
    href: "/tax",
  },
  {
    icon: ShieldAlert,
    name: "AML Health Check",
    description:
      "A self-assessment of your business's basic AML control readiness.",
    href: "/aml",
  },
];

const RESOURCE_CATEGORIES = [
  {
    name: "Mortgage Guides",
    description: "Educational articles on UAE property financing.",
    href: "/resources",
  },
  {
    name: "Tax Insights",
    description: "Practical explainers on UAE tax topics.",
    href: "/resources",
  },
  {
    name: "AML & Compliance",
    description: "Guidance on KYC, CDD and compliance readiness.",
    href: "/resources",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <Container className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
          <Badge variant="brand">Property. Finance. Compliance.</Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Your complete UAE property, finance and compliance ecosystem
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-text">
            Compass &amp; Coin connects real estate, mortgage, tax and AML
            support into one clear destination &mdash; so you can move from
            property idea to compliant outcome with confidence.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a Consultation
            </Button>
            <Button href="/mortgage" variant="secondary">
              Explore Mortgage
            </Button>
          </div>
        </Container>
      </section>

      {/* Service overview */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What we do"
            title="Four services, one destination"
            subtitle="Explore the areas Compass & Coin supports across the UAE property and compliance journey."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.key}
                icon={SERVICE_ICONS[service.key]}
                name={service.name}
                summary={service.summary}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Compass & Coin */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Compass & Coin"
            title="Built around clarity and professional review"
            subtitle="Every tool and page is designed to inform you, not to replace qualified professional advice."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Property-to-compliance journey */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How it connects"
            title="From property idea to compliant outcome"
            subtitle="A typical Compass & Coin journey moves through all four service areas."
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col rounded-xl border border-border-color bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <step.icon
                    className="h-5 w-5 text-brand-orange"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-text">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Interactive tools preview */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Try it yourself"
            title="Indicative self-service tools"
            subtitle="Get a starting point in minutes. Every result is indicative and educational, not a bank approval, tax filing or compliance certification."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col rounded-xl border border-border-color bg-white p-6"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <tool.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {tool.name}
                  </h3>
                  <Badge variant="neutral">Indicative tool</Badge>
                </div>
                <p className="text-sm leading-6 text-muted-text">
                  {tool.description}
                </p>
                <Button
                  href={tool.href}
                  variant="secondary"
                  className="mt-4 self-start"
                >
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Resources preview */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Resources"
            title="Learn before you decide"
            subtitle="Educational guides across mortgage, tax and AML topics."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {RESOURCE_CATEGORIES.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="flex flex-col rounded-xl border border-border-color bg-white p-6 transition-colors hover:border-brand-orange"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-text">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to explore your options?"
        subtitle="Speak to the Compass & Coin team about your property, finance or compliance needs."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        secondaryLabel="View Resources"
        secondaryHref="/resources"
      />
    </main>
  );
}
