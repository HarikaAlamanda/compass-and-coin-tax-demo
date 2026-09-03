import Link from "next/link";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Mortgage", href: "/mortgage" },
  { label: "Tax", href: "/tax" },
  { label: "AML", href: "/aml" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
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
