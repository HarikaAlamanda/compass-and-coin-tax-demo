import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="bg-brand-orange">
      <Container className="flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-xl text-base leading-7 text-white/90">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            href={primaryHref}
            variant="secondary"
            className="border-white bg-white text-brand-orange hover:bg-white/90"
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              href={secondaryHref}
              variant="secondary"
              className="border-white text-white hover:bg-white/10"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
