"use client";

import { useState } from "react";
import { Sparkles, CircleX, Check } from "lucide-react";

const challenges = [
  {
    challenge: "Customer Data Scattered",
    description:
      "Leads and customer information live in spreadsheets, notebooks and email threads — so your team wastes hours looking for context instead of closing deals.",
    solution: "Automated reminders and lead tracking",
    bullets: [
      "All customer data in one secure workspace",
      "Automatic follow-up reminders",
      "Complete activity timeline for every contact",
    ],
  },
  {
    challenge: "Manual Follow-ups",
    description:
      "Important tasks slip through the cracks when follow-ups depend on memory rather than a reliable system.",
    solution: "Smart task automation and alerts",
    bullets: [
      "Automatic task creation from deals",
      "Escalation alerts for overdue items",
      "Daily digest of what needs attention",
    ],
  },
  {
    challenge: "No Clear Pipeline Visibility",
    description:
      "Managers cannot see where deals stand, making forecasting unreliable and coaching difficult.",
    solution: "Visual pipeline with real-time data",
    bullets: [
      "Drag-and-drop deal stages",
      "Revenue forecasting dashboard",
      "Team performance tracking",
    ],
  },
  {
    challenge: "Disconnected Teams",
    description:
      "Sales, support and operations use different tools — leading to duplicated work and miscommunication.",
    solution: "Unified workspace for every department",
    bullets: [
      "Shared customer context across teams",
      "Internal notes and mentions",
      "Role-based access control",
    ],
  },
  {
    challenge: "Too Many Spreadsheets",
    description:
      "Finance, invoicing and reporting all live in separate files that require manual updates and are prone to errors.",
    solution: "Integrated finance and invoicing",
    bullets: [
      "Auto-generated invoices from deals",
      "Revenue tracking in real time",
      "One-click financial reports",
    ],
  },
  {
    challenge: "Poor Reporting",
    description:
      "Without centralized data, creating reports takes hours and the insights are often outdated by the time they are ready.",
    solution: "Live dashboards and custom reports",
    bullets: [
      "Real-time analytics across all modules",
      "Exportable custom reports",
      "KPI tracking with visual dashboards",
    ],
  },
  {
    challenge: "Low Retention Rates",
    description:
      "Without proactive engagement, customers churn silently and you only notice when revenue drops.",
    solution: "Customer health scoring and alerts",
    bullets: [
      "Automated renewal reminders",
      "Customer health score tracking",
      "Proactive outreach triggers",
    ],
  },
  {
    challenge: "Scalability Issues",
    description:
      "As your team grows, your tools do not — creating bottlenecks, permission issues and workflow chaos.",
    solution: "Enterprise-ready architecture",
    bullets: [
      "Unlimited users and modules",
      "Custom workflows and approvals",
      "Advanced security and permissions",
    ],
  },
];

export default function Challenges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = challenges[activeIndex];

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-22">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white px-4 py-2 text-sm font-medium leading-none tracking-normal text-[#2B5142] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
            <Sparkles size={14} className="text-brand-400" />
            Business Challenges Vs Mintgro Solutions
          </span>
          <h2 className="mt-6 max-w-[720px] text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-brand-ink lg:text-[40px]">
            Turn Everyday Challenges into Business Success
          </h2>
          <p className="mt-4 max-w-[640px] text-pretty text-base leading-6.5 text-brand-muted lg:text-lg">
            Replace fragmented tools and repetitive work with a system that
            makes your business easier to run.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Left: Without Mintgro */}
          <div className="rounded-2xl border border-[#f5dcdd] bg-[linear-gradient(180deg,#fff2f3_0%,#fffcfc_55%)] p-6 lg:p-7">
            <h3 className="text-lg font-semibold text-[#e2483d]">
              Without Mintgro
            </h3>
            <ul className="mt-5 space-y-1">
              {challenges.map((c, i) => (
                <li key={c.challenge}>
                  <button
                    onClick={() => setActiveIndex(i)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all ${
                      i === activeIndex
                        ? "bg-white shadow-[0_5px_20px_rgba(0,0,0,0.08)]"
                        : "hover:bg-white/70"
                    }`}
                  >
                    <CircleX
                      size={22}
                      className="shrink-0 text-[#e2483d]/35"
                    />
                    <span
                      className={`flex-1 text-[15px] ${
                        i === activeIndex
                          ? "font-medium text-brand-ink"
                          : "text-brand-ink/75"
                      }`}
                    >
                      {c.challenge}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: With Mintgro */}
          <div className="flex flex-col rounded-2xl border border-black/10 bg-white bg-[radial-gradient(80%_60%_at_100%_0%,#eefbf4_0%,rgba(255,255,255,0)_70%)] p-6 lg:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-600">
              <Sparkles size={14} className="text-brand-400" />
              With Mintgro
            </span>

            <h3 className="mt-6 flex items-start gap-3 text-xl font-bold text-brand-ink lg:text-2xl">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-400 text-white">
                <Check size={14} />
              </span>
              {active.solution}
            </h3>

            <p className="mt-4 text-[15px] leading-6.5 text-brand-muted">
              {active.description}
            </p>

            <ul className="mt-6 space-y-3">
              {active.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-[15px] text-brand-ink/80"
                >
                  <span className="mt-1.75 size-1.75 shrink-0 rounded-full bg-brand-400" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/[0.07] pt-5 lg:mt-auto">
              <div className="flex items-center gap-1.5" role="tablist">
                {challenges.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex
                        ? "w-7 bg-brand-400"
                        : "w-4 bg-black/10"
                    }`}
                    role="tab"
                    aria-selected={i === activeIndex}
                  />
                ))}
              </div>
              <p className="text-sm text-brand-muted">
                {activeIndex + 1} / {challenges.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
