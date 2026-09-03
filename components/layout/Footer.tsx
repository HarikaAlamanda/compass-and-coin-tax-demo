import Link from "next/link";
import Container from "@/components/layout/Container";
import { NAV_LINKS } from "@/components/layout/Navigation";
import Disclaimer from "@/components/ui/Disclaimer";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-color bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-foreground">
              Compass &amp; Coin
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-text">
              Your complete UAE property, finance and compliance ecosystem.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Explore</p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-text transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-text">
              <li>Real Estate</li>
              <li>Mortgage</li>
              <li>Tax</li>
              <li>AML &amp; Compliance</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Legal</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-text transition-colors hover:text-brand-orange"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-text transition-colors hover:text-brand-orange"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Disclaimer className="mt-10">
          Compass &amp; Coin provides educational and indicative information
          only. Mortgage, tax and AML tools on this site are demo
          self-assessments, not financial, legal or regulatory advice, and do
          not constitute bank approval, tax filing or official compliance
          certification. Always seek professional guidance for your specific
          circumstances.
        </Disclaimer>

        <p className="mt-8 text-xs text-muted-text">
          &copy; {year} Compass &amp; Coin. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
