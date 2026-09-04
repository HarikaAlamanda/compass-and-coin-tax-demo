export type TaxServiceItem = {
  title: string;
  description: string;
};

export const TAX_SERVICES: TaxServiceItem[] = [
  {
    title: "Corporate Tax Guidance",
    description:
      "General guidance to help UAE businesses understand corporate tax registration, filing timelines and record-keeping requirements.",
  },
  {
    title: "VAT Support",
    description:
      "Support understanding VAT registration thresholds, invoicing practices and periodic return preparation.",
  },
  {
    title: "Tax Health Review",
    description:
      "A structured review of your current tax setup to help identify gaps or areas needing professional follow-up.",
  },
  {
    title: "Ongoing Advisory",
    description:
      "Periodic check-ins to help keep your business informed as your tax obligations or circumstances change.",
  },
];

export type ValuePoint = {
  title: string;
  description: string;
};

export const WHY_CHOOSE_US: ValuePoint[] = [
  {
    title: "Clear Communication",
    description:
      "We explain tax concepts in plain language, so you understand what applies to your business and why.",
  },
  {
    title: "Structured Process",
    description:
      "A consistent, step-by-step approach from initial consultation through to ongoing support.",
  },
  {
    title: "Dubai-Focused",
    description:
      "Familiar with the practical realities of running a business in the UAE market.",
  },
  {
    title: "Personal Attention",
    description:
      "Direct access to your consultant rather than being passed between departments.",
  },
];

export type ProcessStepItem = {
  step: number;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: 1,
    title: "Consultation",
    description: "We start with a conversation about your business and current tax situation.",
  },
  {
    step: 2,
    title: "Assessment",
    description: "We review your circumstances to understand what applies to you and where the gaps are.",
  },
  {
    step: 3,
    title: "Guidance",
    description: "We explain your options in plain terms so you can make informed decisions.",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "We remain available as your questions or circumstances evolve.",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const TAX_FAQS: FAQItem[] = [
  {
    question: "Is this a substitute for professional tax or legal advice?",
    answer:
      "No. This page is an educational demonstration. Always consult a licensed tax professional or legal advisor for advice specific to your situation.",
  },
  {
    question: "Who is this service intended for?",
    answer:
      "Small and medium-sized businesses in the UAE looking for general guidance on understanding their tax obligations.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "It begins with an initial conversation, followed by a review of your circumstances and clear next-step guidance.",
  },
  {
    question: "Do you handle VAT and corporate tax together?",
    answer:
      "Yes, general guidance can cover both areas, though the specific scope depends on your business needs.",
  },
];
