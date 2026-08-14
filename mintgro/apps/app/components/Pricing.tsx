"use client";

import { useState } from "react";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: 19,
    desc: "For solopreneurs and small teams getting started.",
    features: [
      { label: "Up to 3 users", included: true },
      { label: "5 dashboards", included: true },
      { label: "1,000 contacts", included: true },
      { label: "Email support", included: true },
      { label: "Basic automations", included: true },
      { label: "AI Copilot", included: false },
      { label: "Custom integrations", included: false },
      { label: "White-label", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: 49,
    desc: "For scaling teams that need power and flexibility.",
    features: [
      { label: "Up to 20 users", included: true },
      { label: "Unlimited dashboards", included: true },
      { label: "25,000 contacts", included: true },
      { label: "Priority support", included: true },
      { label: "Advanced automations", included: true },
      { label: "AI Copilot", included: true },
      { label: "Custom integrations", included: true },
      { label: "White-label", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    desc: "For organizations that need unlimited scale & control.",
    features: [
      { label: "Unlimited users", included: true },
      { label: "Unlimited dashboards", included: true },
      { label: "Unlimited contacts", included: true },
      { label: "Dedicated support", included: true },
      { label: "Advanced automations", included: true },
      { label: "AI Copilot", included: true },
      { label: "Custom integrations", included: true },
      { label: "White-label", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Flexible Plans That{" "}
            <span className="gradient-text">Scale With You</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Start free. Upgrade when you&apos;re ready. No hidden fees, ever.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`text-sm ${!annual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
              annual ? "bg-primary" : "bg-white/20"
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                annual ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm ${annual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Annual
          </span>
          {annual && (
            <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => {
            const price = annual
              ? Math.round(tier.price * 0.8)
              : tier.price;

            return (
              <div
                key={i}
                className={`relative rounded-xl border p-6 transition-all duration-300 ${
                  tier.popular
                    ? "border-primary/50 bg-card shadow-[0_0_40px_rgba(16,185,129,0.08)] scale-[1.02]"
                    : "border-white/5 bg-card hover:border-white/10"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                  <p className="text-xs text-muted-foreground">{tier.desc}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">${price}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>

                <a
                  href="#subscribe"
                  className={`group flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-6 ${
                    tier.popular
                      ? "bg-primary hover:bg-primary-dark text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-foreground"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <div className="space-y-2.5">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      {f.included ? (
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0" />
                      )}
                      <span
                        className={`text-xs ${
                          f.included
                            ? "text-foreground"
                            : "text-muted-foreground/50"
                        }`}
                      >
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}