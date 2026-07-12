interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export function PricingCard({ name, price, period, description, features, highlighted, cta }: PricingCardProps) {
  return (
    <div className={`relative border p-8 ${highlighted ? "border-foreground bg-foreground text-primary-foreground" : "border-border bg-card text-card-foreground"}`}>
      {highlighted && (
        <span className="absolute -top-3 left-8 bg-background px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-foreground">
          Most popular
        </span>
      )}
      <h3 className={`font-display text-xl ${highlighted ? "text-primary-foreground" : "text-card-foreground"}`}>{name}</h3>
      <p className={`mt-2 font-body text-sm ${highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className={`font-display text-4xl ${highlighted ? "text-primary-foreground" : "text-card-foreground"}`}>{price}</span>
        <span className={`font-body text-sm ${highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{period}</span>
      </div>
      <ul className="mt-8 space-y-3">
        {features.map((feature) => (
          <li key={feature} className={`flex items-start gap-3 font-body text-sm ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${highlighted ? "bg-primary-foreground" : "bg-foreground"}`} />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className={`mt-8 inline-flex w-full items-center justify-center px-4 py-3 font-body text-sm font-medium transition-colors ${highlighted ? "border border-primary-foreground bg-primary-foreground text-foreground hover:bg-primary-foreground/90" : "border border-border bg-background text-foreground hover:bg-accent"}`}
      >
        {cta}
      </a>
    </div>
  );
}
