import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#home" className="text-lg font-semibold tracking-tight text-foreground">
          Samba <span className="text-brand">Website</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:text-sm"
        >
          Get a Quote
        </Link>
      </Container>
    </header>
  );
}
