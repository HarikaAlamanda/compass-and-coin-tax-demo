import Link from "next/link";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

type NavigationProps = {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export default function Navigation({
  className = "",
  linkClassName = "",
  onLinkClick,
}: NavigationProps) {
  return (
    <nav className={className} aria-label="Main navigation">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={`text-sm font-medium text-foreground transition-colors hover:text-brand-orange ${linkClassName}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
