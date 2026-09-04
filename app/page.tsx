import {
  Receipt,
  FileSpreadsheet,
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import ServiceCard from "@/components/marketing/ServiceCard";
import ContactForm from "@/components/forms/ContactForm";
import {
  TAX_SERVICES,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  TAX_FAQS,
} from "@/content/tax-services";

const SERVICE_ICONS = [Receipt, FileSpreadsheet, ClipboardCheck, MessageCircle];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <Container className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
          <Badge variant="brand">Tax Services</Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Tax Services, Explained Clearly
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-text">
            A demo Tax Services page showing how Compass &amp; Coin could help
            UAE businesses understand and stay on top of their tax
            obligations.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" variant="primary">
              Book a Consultation
            </Button>
          </div>
        </Container>
      </section>

      {/* Tax Services */}
      <section id="services" className="scroll-mt-20 bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What we offer"
            title="Tax Services"
            subtitle="General guidance across the areas that matter most to your business."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TAX_SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={SERVICE_ICONS[index % SERVICE_ICONS.length]}
                name={service.title}
                summary={service.description}
                href="#contact"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="scroll-mt-20 bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Why Compass & Coin" title="Why Choose Us" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((point) => (
              <div key={point.title}>
                <h3 className="text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-text">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="How it works" title="Simple Process" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <li
                key={item.step}
                className="flex flex-col rounded-xl border border-border-color bg-white p-6"
              >
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-semibold text-white">
                  {item.step}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-text">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-white">
        <Container className="max-w-3xl py-16 sm:py-20">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 divide-y divide-border-color">
            {TAX_FAQS.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="cursor-pointer list-none text-base font-medium text-foreground marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-6 text-muted-text">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-surface">
        <Container className="max-w-xl py-16 sm:py-20">
          <SectionHeading
            eyebrow="Get in touch"
            title="Contact Us"
            subtitle="Send a demo enquiry below — this form does not send a real message."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 rounded-xl border border-border-color bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
