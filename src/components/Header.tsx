import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center px-5 py-4 md:grid-cols-3 lg:px-8">

        {/* Logo */}
        <div className="justify-self-start">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="font-display text-lg tracking-tight text-foreground sm:text-xl"
          >
            Annie AI

            <span className="mt-1 block font-body text-[8px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
              POWERED BY AI. PERFECTED BY PROFESSIONALS.
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-self-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{
                className: "text-foreground font-medium",
              }}
              className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden justify-self-end md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-border bg-background px-6 py-2 font-body text-sm text-foreground transition-colors hover:bg-accent"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="justify-self-end md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md border border-border p-2 transition hover:bg-accent"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                activeProps={{
                  className: "bg-accent text-foreground font-medium",
                }}
                className="px-6 py-4 font-body text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <div className="px-6 py-4">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center border border-border bg-background px-6 py-3 font-body text-sm text-foreground transition hover:bg-accent"
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}