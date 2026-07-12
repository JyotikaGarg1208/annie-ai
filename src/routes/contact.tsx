import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact — Annie AI",
      },
      {
        name: "description",
        content:
          "Get in touch with Annie AI for demos of bookkeeping, virtual assistants, payroll, inventory management, AI training, and fund accounting.",
      },
      {
        property: "og:title",
        content: "Contact — Annie AI",
      },
      {
        property: "og:description",
        content:
          "Book a consultation with Annie AI — the AI agent with a human touch.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build your AI-powered back office"
            description="Book a consultation to see how Annie AI and our team of professionals can support your bookkeeping, virtual assistance, payroll, inventory management, AI training, and fund accounting."
          />
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Contact Details */}
            <div>

              <div className="text-center lg:text-left">
                <h2 className="font-display text-2xl text-foreground md:text-3xl">
                  Get in touch
                </h2>

                <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-muted-foreground lg:mx-0">
                  Whether you need bookkeeping, a virtual assistant, payroll,
                  fund accounting, or help training your other AI agents —
                  we're happy to walk you through it.
                </p>
              </div>

              <div className="mt-10 space-y-6">

                <div className="flex items-start gap-4">
                  <div className="border border-border p-2">
                    <Mail
                      className="h-5 w-5 text-foreground"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      Email
                    </p>

                    <p className="font-body text-sm text-muted-foreground">
                      hello@annie.global
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="border border-border p-2">
                    <Phone
                      className="h-5 w-5 text-foreground"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      Phone
                    </p>

                    <p className="font-body text-sm text-muted-foreground">
                      +1 (310) 310-1157
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="border border-border p-2">
                    <MapPin
                      className="h-5 w-5 text-foreground"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      Office
                    </p>

                    <p className="font-body text-sm text-muted-foreground">
                      Century City, Los Angeles, CA, USA
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="border border-border bg-card p-8">
              {submitted ? (
                <div className="text-center">
                  <h3 className="font-display text-2xl text-card-foreground">
                    Message sent
                  </h3>

                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    Thanks for reaching out. We'll get back to you within one
                    business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">

                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="font-body text-xs font-semibold uppercase tracking-wider text-foreground"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="w-full border border-input bg-background px-4 py-3 font-body text-sm text-foreground outline-none focus:border-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="font-body text-xs font-semibold uppercase tracking-wider text-foreground"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full border border-input bg-background px-4 py-3 font-body text-sm text-foreground outline-none focus:border-foreground"
                      />
                    </div>

                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="font-body text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full border border-input bg-background px-4 py-3 font-body text-sm text-foreground outline-none focus:border-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="font-body text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about what you'd like Annie to handle..."
                      className="w-full border border-input bg-background px-4 py-3 font-body text-sm text-foreground outline-none focus:border-foreground"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-4 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send message
                  </button>

                </form>
              )}
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}