import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { FeatureCard } from "../components/FeatureCard";
import { TestimonialCard } from "../components/TestimonialCard";
import heroIllustration from "../assets/hero-illustration.jpg";
import {
  Receipt,
  BrainCircuit,
  Users,
  FileText,
  Boxes,
  Wallet,
  Landmark,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Annie AI — The AI Agent With a Human Touch",
      },
      {
        name: "description",
        content:
          "Annie AI is a full-service AI agent for bookkeeping, virtual assistance, data entry, inventory and payroll management, AI agent training, and fund accounting.",
      },
      {
        property: "og:title",
        content: "Annie AI — The AI Agent With a Human Touch",
      },
      {
        property: "og:description",
        content:
          "One AI agent for bookkeeping, virtual assistance, data entry, inventory, payroll, AI training, and fund accounting.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Receipt,
    title: "Bookkeeping",
    description:
      "Annie AI reads receipts, categorizes transactions, and reconciles your books every day — not just at month-end.",
  },
  {
    icon: Users,
    title: "Virtual assistants",
    description:
      "Delegate inbox triage, scheduling, research, and CRM updates to an assistant that works around the clock.",
  },
  {
    icon: FileText,
    title: "Data entry",
    description:
      "Invoices, forms, spreadsheets, PDFs — Annie AI extracts, structures, and enters data with human-level accuracy.",
  },
  {
    icon: Boxes,
    title: "Inventory management",
    description:
      "Track stock levels, reorder points, and supplier orders across every channel from one AI-managed ledger.",
  },
  {
    icon: Wallet,
    title: "Payroll management",
    description:
      "Run payroll, file taxes, and handle contractor payments with AI checks that flag issues before they cost you.",
  },
  {
    icon: BrainCircuit,
    title: "AI agent training",
    description:
      "We train other AI agents on your workflows, tone, and data so your entire stack thinks the way you do.",
  },
  {
    icon: Landmark,
    title: "Fund accounting",
    description:
      "Purpose-built for nonprofits, hedge funds, and grant-driven teams — track restrictions, allocations, and reporting.",
  },
];

const testimonials = [
  {
    quote:
      "Annie AI closed our books in two days and now runs payroll and inventory too. It's like hiring a whole back office.",
    author: "Elena Voss",
    role: "Head of Finance",
    company: "Archetype Labs",
  },
  {
    quote:
      "Our virtual assistant handles the inbox, the AI trainer keeps our support bot sharp. I finally have my week back.",
    author: "Marcus Chen",
    role: "Founder",
    company: "Cohort Coffee",
  },
  {
    quote:
      "As a nonprofit, fund accounting is brutal. Annie tracks every restricted dollar and produces board-ready reports.",
    author: "Priya Shah",
    role: "Executive Director",
    company: "Northwind Foundation",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background">
        <Container className="py-16 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <span className="mb-6 inline-block font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                The AI agent with a human touch
              </span>

              <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                One AI agent for your books, your back office, and everything
                in between. Perfected by professionals.
              </h1>

              <p className="mt-6 font-body text-base leading-8 text-muted-foreground sm:text-lg">
                Annie AI and our team of professionals run your bookkeeping,
                virtual assistance, data entry, inventory, payroll, fund
                accounting — and train the other AI agents in your business too.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-border bg-background px-8 py-4 font-body text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Get in touch
                </Link>
              </div>

              <p className="mt-6 font-body text-xs text-muted-foreground">
                Get in touch with our professionals and discover how Annie AI
                can help your business.
              </p>
            </div>

            <div className="relative">
              <img
                src={heroIllustration}
                alt="Abstract illustration of an AI agent orchestrating finance and operations work"
                width={1200}
                height={900}
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-secondary">
        <Container className="py-6 md:py-8">
          <p className="text-center font-body text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by fast-moving teams, nonprofits, and funds
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {["Archetype", "Northwind", "Cohort", "Meridian", "Sable"].map(
              (name) => (
                <span
                  key={name}
                  className="font-display text-base text-muted-foreground/60 sm:text-lg"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </Container>
      </section>
      {/* Features grid */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="The AI agent that runs your back office."
            description="Annie AI and our team of professionals handle the repetitive, error-prone work across finance and operations - so your team can focus on what matters."
          />

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-secondary py-16 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Hire Annie once, scale everywhere"
            description="Onboard Annie AI and our team of professionals to your stack, teach us your playbook, and let us run the operational work of a full team."
          />

          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3 md:gap-8">
            {[
              {
                step: "01",
                title: "Connect",
                description:
                  "Link your banks, tools, inventory, and payroll systems in a single guided setup.",
              },
              {
                step: "02",
                title: "Train",
                description:
                  "Teach Annie your workflows once. She learns your rules and applies them to every task.",
              },
              {
                step: "03",
                title: "Delegate",
                description:
                  "Hand off books, back-office operations, and even other AI agents. Review a clean weekly summary.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <span className="font-display text-4xl text-muted-foreground/30">
                  {item.step}
                </span>

                <h3 className="mt-5 font-display text-2xl text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 font-body text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by finance, ops, and nonprofit teams"
            description="See why founders, controllers, and executive directors rely on Annie AI to run their back office."
          />

          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                {...testimonial}
              />
            ))}
          </div>
        </Container>
      </section>
      {/* CTA */}
      <section className="bg-foreground py-16 md:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Ready to hand your back office to an AI agent and a team of
              professionals?
            </h2>

            <p className="mt-6 font-body text-base leading-8 text-primary-foreground/70 sm:text-lg">
              Join the teams closing books, running payroll, managing inventory,
              and training AI agents with Annie AI and our team of professionals.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center bg-primary-foreground px-8 py-4 font-body text-sm font-medium text-foreground transition-colors hover:bg-primary-foreground/90 sm:w-auto"
              >
                Get in touch
              </Link>

              <Link
                to="/pricing"
                className="inline-flex w-full items-center justify-center border border-primary-foreground/30 bg-transparent px-8 py-4 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
              >
                View pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}