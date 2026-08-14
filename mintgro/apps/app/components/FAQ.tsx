"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the 14-day free trial work?",
    a: "You get full access to all Growth plan features for 14 days. No credit card required. At the end of the trial, you can choose a plan or your account will pause — your data is always safe.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Absolutely. Upgrade or downgrade at any time from your billing settings. When upgrading, you'll get immediate access to new features. Downgrades take effect at the next billing cycle.",
  },
  {
    q: "What integrations are available?",
    a: "We support 50+ native integrations including Salesforce, HubSpot, Slack, Stripe, QuickBooks, Google Workspace, and more. Our API also lets you build custom connections.",
  },
  {
    q: "Is my data secure?",
    a: "Security is our top priority. We're SOC2 Type II certified, GDPR compliant, and use AES-256 encryption at rest and TLS 1.3 in transit. We also offer HIPAA compliance on Enterprise plans.",
  },
  {
    q: "Do you offer onboarding support?",
    a: "Yes! All plans include self-serve onboarding with interactive guides. Growth plans get priority email support, and Enterprise plans include a dedicated customer success manager.",
  },
  {
    q: "What happens if I exceed my contact limit?",
    a: "We'll notify you as you approach your limit. You can upgrade your plan seamlessly, or purchase additional contact packs. We never cut off access unexpectedly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}