import { Link } from "@tanstack/react-router";

const footerLinks = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Services" },
      { to: "/pricing", label: "Pricing" },
      { to: "/contact", label: "Book a consultation" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-16 lg:px-8">

        <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">

          <div className="sm:col-span-2">
            <Link
              to="/"
              className="font-display text-2xl text-foreground"
            >
              Annie AI
            </Link>

            <p className="mx-auto mt-4 max-w-md font-body text-sm leading-7 text-muted-foreground lg:mx-0">
              The AI agent with a human touch — for bookkeeping,
              virtual assistance, data entry, inventory, payroll,
              and fund accounting. Perfected by professionals.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-4">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:flex-row md:text-left">

          <p className="font-body text-xs text-muted-foreground">
            © {year} Annie AI. All rights reserved.
          </p>

          <p className="font-body text-xs text-muted-foreground">
            Built for founders, finance teams, nonprofits, and funds.
          </p>

        </div>
      </div>
    </footer>
  );
}