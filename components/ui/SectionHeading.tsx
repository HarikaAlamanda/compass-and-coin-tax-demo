type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  level?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  level = "h2",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const Heading = level;
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-orange">
          {eyebrow}
        </p>
      )}
      <Heading className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-3 text-base leading-7 text-muted-text">{subtitle}</p>
      )}
    </div>
  );
}
