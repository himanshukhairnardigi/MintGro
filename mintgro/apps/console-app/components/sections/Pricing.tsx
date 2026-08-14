"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "For small teams getting started.",
    features: ["CRM & contacts", "Basic automation", "Email support"]
  },
  {
    name: "Growth",
    price: "$39",
    description: "For growing businesses.",
    features: ["Everything in Starter", "Advanced workflows", "Reports & analytics", "Priority support"],
    featured: true
  },
  {
    name: "Scale",
    price: "$69",
    description: "For established teams.",
    features: ["Everything in Growth", "Advanced permissions", "Custom reports", "Team collaboration"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex organizations.",
    features: ["Custom setup", "Dedicated support", "Advanced security"]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#effcf6] py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Simple pricing</p>
          <h2 className="section-title mt-4">Flexible pricing that grows with your business</h2>
          <p className="mt-4 text-sm text-[#737e79]">
            Start small and move up when your business needs more.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .05 }}
              className={`rounded-xl border bg-white p-5 ${
                plan.featured
                  ? "border-[#32b68f] shadow-[0_15px_40px_rgba(0,141,105,.12)]"
                  : "border-[#e0e8e4]"
              }`}
            >
              {plan.featured && (
                <span className="rounded-full bg-[#dcf7ed] px-2 py-1 text-[8px] font-bold text-[#008d69]">
                  MOST POPULAR
                </span>
              )}

              <h3 className="mt-3 text-sm font-bold text-[#315449]">{plan.name}</h3>
              <p className="mt-2 min-h-10 text-[10px] leading-4 text-[#7b8580]">{plan.description}</p>

              <div className="mt-5 text-3xl font-bold text-[#203f35]">{plan.price}</div>
              {plan.price !== "Custom" && <div className="text-[9px] text-[#929b97]">per user / month</div>}

              <a href="#contact" className={`btn mt-5 w-full ${plan.featured ? "btn-green" : "btn-light"}`}>
                Get Started <ArrowRight size={12} />
              </a>

              <div className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-2 text-[10px] text-[#65706b]">
                    <Check size={13} className="shrink-0 text-[#008d69]" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}