import { CircleCheck, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for startups and small teams.",
    features: [
      "Up to 5 users",
      "CRM & contacts",
      "Basic automation",
      "Email support",
      "Mobile app access",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$39",
    description: "For growing businesses that need more.",
    badge: "Most Popular",
    features: [
      "Up to 25 users",
      "Everything in Starter",
      "Advanced workflows",
      "Reports & analytics",
      "Priority support",
      "Custom integrations",
    ],
    featured: true,
  },
  {
    name: "Professional",
    price: "$69",
    description: "For established teams with complex needs.",
    features: [
      "Up to 100 users",
      "Everything in Growth",
      "Advanced permissions",
      "Custom reports",
      "Dedicated account manager",
      "API access",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom requirements.",
    features: [
      "Unlimited users",
      "Everything in Professional",
      "Custom setup",
      "Dedicated support",
      "Advanced security",
      "SLA guarantee",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[linear-gradient(180deg,#ffffff_55%,#f1fff7_100%)]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-22">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white px-4 py-2 text-sm font-medium leading-none tracking-normal text-[#2B5142] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
            <Sparkles size={14} className="text-brand-400" />
            Pricing
          </span>
          <h2 className="mt-6 max-w-[640px] text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-brand-ink lg:text-[40px]">
            Flexible pricing that grows with your business
          </h2>
          <p className="mt-4 max-w-[430px] text-pretty text-base text-brand-muted">
            Start small and move up when your business needs more. No hidden
            fees, no surprises.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`flex flex-col rounded-[24px] border p-[6px] ${
                plan.featured
                  ? "border-transparent shadow-[0_8px_20px_0_#2563EB1F] [background:linear-gradient(white,white)_padding-box,linear-gradient(270deg,#10A66E_0%,#2563EB_100%)_border-box]"
                  : "border-black/10 bg-white"
              }`}
            >
              <div
                className={`relative rounded-[18px] p-6 ${
                  plan.featured
                    ? "bg-[linear-gradient(120deg,#dbfbe8_0%,#d5f9e5_45%,#90cfe2_100%)]"
                    : "bg-[#f4f4f4]"
                }`}
              >
                {plan.badge && (
                  <span className="inline-flex h-[23px] items-center gap-2 rounded-full bg-[linear-gradient(270deg,#10A66E_0%,#2563EB_100%)] px-4 text-xs font-bold uppercase leading-none tracking-normal text-white">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-brand-ink">
                  {plan.name}
                </h3>
                <p className="mt-4 flex h-10 items-baseline gap-1.5">
                  <span className="text-[40px] font-bold leading-none text-brand-ink">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-brand-muted">
                      /user/monthly
                    </span>
                  )}
                </p>
                <p className="mt-3 min-h-11 text-sm leading-5.5 text-brand-muted">
                  {plan.description}
                </p>
                <a
                  href="https://app.mintgro.com/signup"
                  className={`mt-5 flex h-11 w-full items-center justify-center rounded-lg text-[15px] font-medium text-white transition-opacity hover:opacity-90 ${
                    plan.featured
                      ? "bg-[linear-gradient(270deg,#10A66E_0%,#2563EB_100%)]"
                      : "bg-[#2b2b2b]"
                  }`}
                >
                  Start Free Trial
                </a>
              </div>

              <ul className="flex-1 space-y-3.5 p-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[15px] text-brand-ink/85"
                  >
                    <CircleCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-ink/70"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
