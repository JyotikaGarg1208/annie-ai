interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="border border-border bg-card p-8">
      <blockquote className="font-display text-lg leading-relaxed text-card-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 border-t border-border pt-6">
        <p className="font-body text-sm font-medium text-foreground">{author}</p>
        <p className="font-body text-xs text-muted-foreground">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
