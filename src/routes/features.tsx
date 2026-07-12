import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { FeatureCard } from "../components/FeatureCard";
import {
  Receipt,
  BrainCircuit,
  Users,
  FileText,
  Boxes,
  Wallet,
  Landmark,
  ShieldCheck,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      {
        title: "Services — Annie AI",
      },
      {
        name: "description",
        content:
          "Bookkeeping, virtual assistants, data entry, inventory, payroll, AI agent training, and fund accounting — delivered by Annie AI and our team of professionals.",
      },
      {
        property: "og:title",
        content: "Services — Annie AI",
      },
      {
        property: "og:description",
        content:
          "Bookkeeping, virtual assistants, data entry, inventory, payroll, AI agent training, and fund accounting — delivered by Annie AI and our team of professionals.",
      },
    ],
  }),
  component: Features,
});

const features = [
  {
    icon: Receipt,
    title: "Bookkeeping",
    description:
      "Daily categorization, reconciliation, and tax-ready reports. Your books close themselves.",
  },
  {
    icon: Users,
    title: "Virtual assistants",
    description:
      "Inbox, calendar, research, CRM updates, and follow-ups — handled by an assistant that never sleeps.",
  },
  {
    icon: FileText,
    title: "Data entry",
    description:
      "PDFs, invoices, forms, spreadsheets — extracted, structured, and entered into your systems.",
  },
  {
    icon: Boxes,
    title: "Inventory management",
    description:
      "Live stock levels, reorder alerts, and supplier orders synced across every sales channel.",
  },
  {
    icon: Wallet,
    title: "Payroll management",
    description:
      "Run payroll, file payroll taxes, and pay contractors with AI checks that catch errors before submission.",
  },
  {
    icon: BrainCircuit,
    title: "AI agent training",
    description:
      "We train your other AI agents — support, sales, operations — on your data, tone, and workflows.",
  },
  {
    icon: Landmark,
    title: "Fund accounting",
    description:
      "Grant tracking, restricted funds, and board-ready reporting for nonprofits and funds.",
  },
  {
    icon: ShieldCheck,
    title: "Human in the loop",
    description:
      "Every task has a reviewable trail. Approve exceptions, keep control, let Annie do the work.",
  },
  {
    icon: Lock,
    title: "Role-based access",
    description:
      "Invite your accountant, CFO, and team members with granular permissions.",
  },
];

function Features() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="The AI agent that runs your back office"
            description="Annie AI and our team of professionals handle the repetitive, error-prone work across finance and operations — so your team can focus on what matters."
          />
        </Container>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}