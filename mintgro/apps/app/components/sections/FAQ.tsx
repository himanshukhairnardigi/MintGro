"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["What is Mintgro?", "Mintgro is a business growth platform that brings customer management, sales, workflows and reporting together."],
  ["Who is Mintgro for?", "It is designed for growing businesses and teams that want simpler, more connected processes."],
  ["Can I try Mintgro for free?", "Yes. The homepage CTA is prepared for a free-trial flow that can later connect to your signup API."],
  ["Can I customize the platform?", "The architecture supports configurable modules, workflows and permissions."],
  ["How does onboarding work?", "Create an account, add your business information, configure your workspace and start using the modules you need."],
  ["Can Mintgro integrate with other tools?", "Yes. Integrations can be added through the NestJS API layer as your product requirements are finalized."]
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-4">Frequently Asked Questions</h2>
          <p className="mt-4 text-sm text-[#737d78]">
            Quick answers to the questions your customers are most likely to ask.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[#e5eae7] border-y border-[#e5eae7]">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div key={question}>
                <button
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-[#36413d]"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {question}
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${isOpen ? "rotate-180 text-[#008d69]" : ""}`}
                  />
                </button>

                {isOpen && (
                  <p className="pb-5 pr-8 text-xs leading-6 text-[#737d78]">
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <a href="#contact" className="btn btn-light">Contact Us</a>
          <a href="#pricing" className="btn btn-green">Start Free Trial</a>
        </div>
      </div>
    </section>
  );
}
