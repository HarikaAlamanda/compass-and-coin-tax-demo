import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  name: string;
  summary: string;
  href: string;
};

export default function ServiceCard({
  icon: Icon,
  name,
  summary,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border-color bg-white p-6 transition-colors hover:border-brand-orange"
    >
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-text">{summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-orange">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
