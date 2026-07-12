import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Annie AI" },
      {
        name: "description",
        content:
          "Simple, transparent pricing for Annie AI. Contact us for a tailored plan built around your workflows, integrations, and compliance needs.",
      },
      { property: "og:title", content: "Pricing — Annie AI" },
      {
        property: "og:description",
        content:
          "Simple, transparent pricing for every stage of your business.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple, transparent pricing for every stage of your business."
              description="No setup fees, no hidden charges. Cancel anytime. An AI agent and a team of professionals that scale from solo founder to enterprise. We'll build a plan around your workflows, integrations, and compliance needs. Book a consultation."
            />

            <a
              href="/contact"
              className="mt-10 inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-4 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto sm:px-10"
            >
              Contact sales
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl text-foreground md:text-4xl lg:text-5xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-8 md:space-y-10">
              {[
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. All plans are month-to-month unless you choose annual billing.",
                },
                {
                  q: "Do I still need an accountant?",
                  a: "No. Annie AI and our team of professionals handle all of your bookkeeping and back-office work.",
                },
                {
                  q: "What does 'AI agent training' mean?",
                  a: "We train the AI agents you already use — support bots, sales assistants, ops copilots — on your data, tone, and workflows so they behave like part of your team.",
                },
                {
                  q: "Do you support fund accounting?",
                  a: "Yes. Annie AI and our team track restricted funds, grants, and allocations, and produce board-ready reports for nonprofits and funds.",
                },
                {
                  q: "Is my bank data safe?",
                  a: "We use read-only connections, 256-bit encryption, and never store your bank credentials.",
                },
                {
                  q: "What software do you integrate with?",
                  a: "QuickBooks, Xero, FreshBooks, Shopify, Gusto, and more. Custom integrations available.",
                },
              ].map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-display text-xl text-foreground md:text-2xl">
                    {faq.q}
                  </h3>

                  <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}