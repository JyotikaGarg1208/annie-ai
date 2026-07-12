import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group border border-border bg-card p-8 transition-colors hover:bg-accent">
      <div className="mb-6 inline-flex items-center justify-center border border-border bg-background p-3">
        <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl text-card-foreground">{title}</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
