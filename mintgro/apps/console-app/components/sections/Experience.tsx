"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const industries = [
  "Healthcare",
  "Education",
  "IT Hardware",
  "Manufacturing",
  "Hospitality",
  "Retail",
  "Travel",
];

const roles = ["Owner", "Administrator", "Employee", "Customer", "Contractor"];

const descriptions: Record<string, string> = {
  "Healthcare-Owner":
    "Patients, doctors, appointments and pharmacy in one clinical workspace.",
  "Healthcare-Administrator":
    "Manage clinic staff, schedules, billing and compliance from one dashboard.",
  "Healthcare-Employee":
    "Access your schedule, patient records and tasks for the day.",
  "Healthcare-Customer":
    "Book appointments, view reports and manage prescriptions online.",
  "Healthcare-Contractor":
    "View assigned contracts, invoices and project milestones.",
};

const moduleLists: Record<string, string[]> = {
  "Healthcare-Owner": [
    "Patients",
    "Appointments",
    "Doctors",
    "Pharmacy",
    "Billing",
    "Lab Reports",
  ],
  "Healthcare-Administrator": [
    "Staff",
    "Schedules",
    "Billing",
    "Compliance",
    "Reports",
  ],
  "Healthcare-Employee": ["Schedule", "Patients", "Tasks", "Reports"],
  "Healthcare-Customer": [
    "Appointments",
    "Prescriptions",
    "Reports",
    "Billing",
  ],
  "Healthcare-Contractor": ["Contracts", "Invoices", "Milestones"],
};

function getKey(industry: string, role: string) {
  return `${industry}-${role}`;
}

export default function Experience() {
  const [selectedIndustry, setSelectedIndustry] = useState("Healthcare");
  const [selectedRole, setSelectedRole] = useState("Owner");

  const key = getKey(selectedIndustry, selectedRole);
  const description =
    descriptions[key] ||
    `${selectedIndustry} tools tailored for ${selectedRole} role.`;
  const modules =
    moduleLists[key] || ["Dashboard", "Reports", "Settings", "Team"];

  return (
    <section id="experience" className="relative isolate scroll-mt-24 overflow-hidden bg-white">
      <div className="pointer-events-none absolute right-8 top-24 hidden lg:block">
        <div className="grid grid-cols-5 gap-7">
          {Array.from({ length: 25 }).map((_, i) => {
            const isCorner =
              i < 5 ||
              i >= 20 ||
              i % 5 === 0 ||
              i % 5 === 4;
            return (
              <span
                key={i}
                className={`text-lg font-light ${
                  isCorner ? "text-brand-400" : "text-brand-200/70"
                }`}
              >
                +
              </span>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-22">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white px-4 py-2 text-sm font-medium leading-none tracking-normal text-[#2B5142] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
            <Sparkles size={14} className="text-brand-400" />
            Interactive Preview
          </span>
          <h2 className="mt-6 max-w-[640px] text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-brand-ink lg:text-[40px]">
            Experience Mintgro
          </h2>
          <p className="mt-4 max-w-[810px] text-pretty text-base leading-6.5 text-brand-muted lg:text-lg">
            Select an industry and role to see a tailored preview of how Mintgro
            adapts to your workflow.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.05)] lg:p-7">
          {/* Industry filter */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">
              Industry
            </span>
            <div className="flex flex-wrap gap-2.5">
              {industries.map((ind) => {
                const active = ind === selectedIndustry;
                return (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                      active
                        ? "border-brand-300 bg-brand-50 font-medium text-brand-700"
                        : "border-black/12 bg-white text-brand-ink/80 hover:border-brand-200 hover:text-brand-ink"
                    }`}
                  >
                    <Sparkles
                      size={14}
                      className={active ? "text-brand-400" : "text-black/30"}
                    />
                    {ind}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Role filter */}
          <div className="mt-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
              <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">
                Role
              </span>
              <div className="flex flex-wrap gap-2.5">
                {roles.map((role) => {
                  const active = role === selectedRole;
                  return (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                        active
                          ? "border-brand-300 bg-brand-50 font-medium text-brand-700"
                          : "border-black/12 bg-white text-brand-ink/80 hover:border-brand-200 hover:text-brand-ink"
                      }`}
                    >
                      <Sparkles
                        size={14}
                        className={active ? "text-brand-400" : "text-black/30"}
                      />
                      {role}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Description + modules */}
          <div className="mt-6 flex flex-col gap-4 border-t border-black/[0.07] pt-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-brand-muted">{description}</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {modules.map((m) => (
                <li key={m} className="text-sm font-medium text-brand-ink">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Screenshot placeholder */}
        <div className="mx-auto mt-12 flex h-[300px] max-w-[1000px] items-center justify-center rounded-2xl bg-brand-50/50 lg:h-[529px]">
          <p className="text-sm text-brand-muted">
            Dashboard preview — {selectedIndustry} / {selectedRole}
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@mintgro.com"
            className="flex h-10 items-center gap-2 rounded-lg border border-[#cfcfcf] bg-white px-6 text-base font-medium text-brand-ink transition-colors hover:border-brand-500 hover:bg-brand-50 hover:text-brand-ink"
          >
            Book A Demo
          </a>
          <a
            href="https://app.mintgro.com/signup"
            className="flex h-10 items-center gap-2 rounded-lg border border-transparent bg-gradient-to-l from-brand-400 to-brand-700 px-6 text-base font-medium text-white transition-opacity hover:opacity-90 hover:text-white hover:border-transparent"
          >
            Want to Experience Mintgro &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
