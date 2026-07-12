import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import founderImage from "../assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About — Annie AI",
      },
      {
        name: "description",
        content:
          "Annie AI was built to give every business an AI agent with a human touch — for bookkeeping, back office, and everything in between.",
      },
      {
        property: "og:title",
        content: "About — Annie AI",
      },
      {
        property: "og:description",
        content:
          "One AI agent for bookkeeping, virtual assistance, payroll, inventory, AI training, and fund accounting.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Accuracy first",
    description:
      "Automation is only useful when it is trustworthy. Every task Annie performs is explainable and reviewable.",
  },
  {
    title: "Human in the loop",
    description:
      "Annie handles the routine, but you stay in control. Founders, controllers, and directors approve what matters.",
  },
  {
    title: "Quiet software",
    description:
      "A great back office runs in the background. We design for calm, not noise.",
  },
];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="About"
            title="Built by people who hate busywork"
            description="Annie AI started with a simple idea: every business deserves an AI agent that handles the back office with a human touch."
          />
        </Container>
      </section>

      {/* Story */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">

            {/* Left Side */}
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-8 font-display text-4xl text-foreground md:mb-10 md:text-5xl">
                Our story
              </h2>

              <img
                src={founderImage}
                alt="Shubhang Bombaywala"
                className="h-56 w-56 rounded-full border-4 border-border object-cover sm:h-64 sm:w-64 md:h-80 md:w-80"
              />

              <div className="mt-6 md:mt-8">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Our Founder
                </p>

                <h3 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                  Shubhang Bombaywala
                </h3>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6 font-body text-base leading-8 text-muted-foreground md:space-y-8">
              <p>
                After years of watching founders and nonprofit leaders drown in
                bookkeeping, data entry, and coordination work, we set out to
                build an AI agent that was always on, always accurate, and never
                judgmental.
              </p>

              <p>
                Annie AI combines large-language models with accounting rules,
                operational playbooks, and your own data to automate the tedious
                parts of running a business — bookkeeping, virtual assistance,
                data entry, inventory, payroll, AI training, and fund
                accounting.
              </p>

              <p>
                Today, Annie AI and our team of professionals support businesses
                of every size with bookkeeping, virtual assistance, payroll,
                inventory management, AI training, and fund accounting. We are
                based in Los Angeles, New York, and India and backed by
                investors who believe in calm, useful software.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-secondary py-16 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="How we build"
            description="These principles guide every product decision we make."
          />

          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-border bg-background p-6 md:p-8"
              >
                <h3 className="font-display text-xl text-foreground">
                  {value.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}