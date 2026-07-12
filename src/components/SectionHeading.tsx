import { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, children, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-4 inline-block font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
