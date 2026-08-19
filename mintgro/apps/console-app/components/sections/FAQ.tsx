import { Sparkles, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Mintgro suitable for my industry?",
    answer:
      "Yes. Mintgro is built with a flexible, modular architecture that adapts to any industry — from healthcare and education to manufacturing, retail and professional services. You can choose pre-built industry templates or customize every module to match your workflow.",
  },
  {
    question: "Can I try Mintgro before committing?",
    answer:
      "Absolutely. We offer a free trial so you can explore every feature, invite your team and see how Mintgro fits your business before making any commitment. No credit card required.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "Getting started is simple: create an account, choose your industry, invite your team and configure your workspace. Our guided setup walks you through each step, and our support team is available if you need help.",
  },
  {
    question: "Can I customize the platform for my team?",
    answer:
      "Yes. Mintgro supports custom workflows, role-based permissions, branded dashboards and configurable modules. You can enable exactly the features your team needs and hide what you don't.",
  },
  {
    question: "Does Mintgro integrate with other tools?",
    answer:
      "Yes. Mintgro integrates with popular tools for email, accounting, calendars and more. Our API also lets you build custom integrations to connect with your existing tech stack.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer email support for all plans, priority support for Growth and above, and a dedicated account manager for Professional and Enterprise customers. Our help center and documentation are available 24/7.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-22">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white px-4 py-2 text-sm font-medium leading-none tracking-normal text-[#2B5142] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
            <Sparkles size={14} className="text-brand-400" />
            FAQ&apos;s
          </span>
          <h2 className="mt-6 max-w-[640px] text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-brand-ink lg:text-[40px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[850px] space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              open={i === 0}
              className="group rounded-xl border border-black/10 bg-white px-6 open:shadow-[0_5px_20px_rgba(0,0,0,0.05)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-medium text-brand-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-brand-ink/60 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="-mt-1 pb-5 pr-10 text-sm leading-6 text-brand-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@mintgro.com"
            className="flex h-10 items-center gap-2 rounded-lg border border-[#cfcfcf] bg-white px-6 text-base font-medium text-brand-ink transition-colors hover:border-brand-500 hover:bg-brand-50 hover:text-brand-ink"
          >
            Book A Demo
          </a>
          <a
            href="/faq"
            className="flex h-10 items-center gap-2 rounded-lg border border-transparent bg-gradient-to-l from-brand-400 to-brand-700 px-6 text-base font-medium text-white transition-opacity hover:opacity-90 hover:text-white hover:border-transparent"
          >
            View All FAQ&apos;s &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
