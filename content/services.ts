export type ServiceKey = "real-estate" | "mortgage" | "tax" | "aml";

export type Service = {
  key: ServiceKey;
  name: string;
  href: string;
  summary: string;
};

export const SERVICES: Service[] = [
  {
    key: "real-estate",
    name: "Real Estate",
    href: "/real-estate",
    summary:
      "Guidance across buying, selling, leasing and investing in UAE property.",
  },
  {
    key: "mortgage",
    name: "Mortgage",
    href: "/mortgage",
    summary:
      "Financing guidance and an indicative eligibility calculator for UAE property purchases.",
  },
  {
    key: "tax",
    name: "Tax",
    href: "/tax",
    summary:
      "Practical UAE tax education and an indicative self-assessment to understand your position.",
  },
  {
    key: "aml",
    name: "AML & Compliance",
    href: "/aml",
    summary:
      "KYC, CDD and risk-focused compliance support, including an educational AML readiness check.",
  },
];
