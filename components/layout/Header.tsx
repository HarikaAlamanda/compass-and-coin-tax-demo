"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navigation";
import Button from "@/components/ui/Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-color bg-white">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Compass & Coin — Home"
        >
          <Image
            src="/logo.jpg"
            alt="Compass & Coin"
            width={1280}
            height={1024}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </Link>

        <Navigation className="hidden items-center gap-8 lg:flex" />

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Request a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border-color bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-4 py-4">
            <Navigation
              className="flex flex-col gap-4"
              onLinkClick={() => setMenuOpen(false)}
            />
            <Button
              href="#contact"
              variant="primary"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              Request a Consultation
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
