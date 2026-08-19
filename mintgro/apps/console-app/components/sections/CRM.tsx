"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const modules = [
  {
    label: "CRM",
    title: "CRM & Sales",
    subtitle:
      "See your leads, customers and sales pipeline at a glance.",
    description:
      "Give your team the context they need to follow up at the right time. Track every deal from first contact to closed-won.",
    linkText: "Read More",
    features: [
      "Lead tracking",
      "Sales pipeline",
      "Contact management",
      "Deal forecasting",
      "Email integration",
      "Activity timeline",
    ],
    stats: [
      { label: "Leads", value: "1,248" },
      { label: "Deals", value: "386" },
      { label: "Revenue", value: "$42.8K" },
    ],
    bars: [28, 42, 35, 51, 46, 63, 59, 74, 69, 84, 78, 93],
    barColor: "bg-[#b9c8fb]",
    lastBarColor: "bg-brand-700",
  },
  {
    label: "Finance",
    title: "Finance & Invoicing",
    subtitle:
      "Create invoices, track payments and manage revenue in real time.",
    description:
      "Automate recurring billing, send professional invoices and keep your cash flow healthy — all from one place.",
    linkText: "Read More",
    features: [
      "Invoice generation",
      "Payment tracking",
      "Revenue dashboards",
      "Expense management",
      "Tax reporting",
      "Recurring billing",
    ],
    stats: [
      { label: "Invoiced", value: "$128K" },
      { label: "Collected", value: "$96K" },
      { label: "Pending", value: "$32K" },
    ],
    bars: [20, 35, 45, 55, 40, 60, 70, 65, 80, 75, 85, 90],
    barColor: "bg-[#6b8afd]",
    lastBarColor: "bg-[#2563eb]",
  },
  {
    label: "HRMS",
    title: "HR & People Management",
    subtitle:
      "Manage attendance, leaves, payroll and performance from one dashboard.",
    description:
      "Give HR teams and employees a simple, connected experience for everything people-related.",
    linkText: "Read More",
    features: [
      "Employee directory",
      "Attendance tracking",
      "Leave management",
      "Payroll processing",
      "Performance reviews",
      "Onboarding workflows",
    ],
    stats: [
      { label: "Employees", value: "248" },
      { label: "Present", value: "231" },
      { label: "On Leave", value: "17" },
    ],
    bars: [90, 85, 92, 88, 95, 87, 91, 89, 93, 86, 94, 90],
    barColor: "bg-[#a8e6c6]",
    lastBarColor: "bg-brand-400",
  },
  {
    label: "Inventory",
    title: "Inventory Management",
    subtitle:
      "Track stock levels, manage warehouses and prevent stockouts.",
    description:
      "Know exactly what you have, where it is and when to reorder — across every location and channel.",
    linkText: "Read More",
    features: [
      "Stock tracking",
      "Warehouse management",
      "Purchase orders",
      "Stock alerts",
      "Barcode scanning",
      "Supplier management",
    ],
    stats: [
      { label: "Products", value: "3,842" },
      { label: "In Stock", value: "3,120" },
      { label: "Low Stock", value: "722" },
    ],
    bars: [60, 55, 70, 65, 75, 80, 68, 72, 78, 85, 82, 90],
    barColor: "bg-[#fbbf24]",
    lastBarColor: "bg-[#d97706]",
  },
  {
    label: "Projects",
    title: "Project Management",
    subtitle:
      "Plan, track and deliver projects on time with full team visibility.",
    description:
      "Keep every project on track with task management, timelines and collaborative workspaces.",
    linkText: "Read More",
    features: [
      "Task management",
      "Gantt timelines",
      "Kanban boards",
      "Time tracking",
      "Milestone tracking",
      "Team collaboration",
    ],
    stats: [
      { label: "Active", value: "24" },
      { label: "Completed", value: "18" },
      { label: "On Track", value: "92%" },
    ],
    bars: [40, 50, 60, 55, 70, 65, 75, 80, 72, 85, 88, 92],
    barColor: "bg-[#c4b5fd]",
    lastBarColor: "bg-[#7c3aed]",
  },
  {
    label: "Chat",
    title: "Team Chat & Communication",
    subtitle:
      "Keep conversations organized with channels, threads and direct messages.",
    description:
      "Stop switching between email and chat. Keep work conversations in context with your projects and customers.",
    linkText: "Read More",
    features: [
      "Channels",
      "Direct messages",
      "Threaded replies",
      "File sharing",
      " @mentions",
      "Message search",
    ],
    stats: [
      { label: "Messages", value: "12.4K" },
      { label: "Channels", value: "48" },
      { label: "Active Users", value: "231" },
    ],
    bars: [30, 45, 55, 60, 50, 65, 70, 75, 68, 80, 82, 88],
    barColor: "bg-[#67e8f9]",
    lastBarColor: "bg-[#0891b2]",
  },
  {
    label: "Automation",
    title: "Workflow Automation",
    subtitle:
      "Automate repetitive tasks and create custom workflows without code.",
    description:
      "Set up triggers, conditions and actions that keep your business running smoothly — even when you are not online.",
    linkText: "Read More",
    features: [
      "Visual workflow builder",
      "Conditional logic",
      "Email triggers",
      "Task automation",
      "API integrations",
      "Scheduled actions",
    ],
    stats: [
      { label: "Workflows", value: "86" },
      { label: "Runs Today", value: "1,240" },
      { label: "Time Saved", value: "34h" },
    ],
    bars: [20, 30, 40, 50, 45, 60, 55, 70, 65, 75, 80, 90],
    barColor: "bg-[#fca5a5]",
    lastBarColor: "bg-[#dc2626]",
  },
  {
    label: "Approvals",
    title: "Approval Workflows",
    subtitle:
      "Create multi-level approval chains for purchases, leaves and expenses.",
    description:
      "Eliminate bottlenecks with automated approval routing and real-time status tracking.",
    linkText: "Read More",
    features: [
      "Multi-level approvals",
      "Custom approval chains",
      "Mobile approvals",
      "Escalation rules",
      "Audit trail",
      "Bulk approvals",
    ],
    stats: [
      { label: "Pending", value: "12" },
      { label: "Approved", value: "384" },
      { label: "Avg Time", value: "2.1h" },
    ],
    bars: [85, 80, 90, 88, 92, 86, 94, 91, 89, 93, 95, 97],
    barColor: "bg-[#a8e6c6]",
    lastBarColor: "bg-brand-400",
  },
  {
    label: "Documents",
    title: "Document Management",
    subtitle:
      "Store, organize and share files with version control and access permissions.",
    description:
      "Keep every document in a secure, searchable workspace — with full version history and team access control.",
    linkText: "Read More",
    features: [
      "File storage",
      "Version control",
      "Access permissions",
      "Full-text search",
      "Folder organization",
      "Document templates",
    ],
    stats: [
      { label: "Files", value: "8,420" },
      { label: "Shared", value: "2,140" },
      { label: "Storage", value: "42 GB" },
    ],
    bars: [40, 50, 55, 60, 65, 70, 68, 75, 72, 80, 78, 85],
    barColor: "bg-[#93c5fd]",
    lastBarColor: "bg-[#2563eb]",
  },
  {
    label: "Report",
    title: "Reports & Analytics",
    subtitle:
      "Generate custom reports and track KPIs across every module.",
    description:
      "Turn raw data into actionable insights with visual dashboards, scheduled reports and export options.",
    linkText: "Read More",
    features: [
      "Custom dashboards",
      "Scheduled reports",
      "Export to PDF/CSV",
      "KPI tracking",
      "Comparative analysis",
      "Data visualization",
    ],
    stats: [
      { label: "Reports", value: "156" },
      { label: "Views Today", value: "842" },
      { label: "Exports", value: "124" },
    ],
    bars: [30, 35, 45, 50, 55, 60, 58, 65, 70, 75, 80, 88],
    barColor: "bg-[#c4b5fd]",
    lastBarColor: "bg-[#7c3aed]",
  },
  {
    label: "Settings",
    title: "Settings & Configuration",
    subtitle:
      "Customize your workspace, manage users and configure system preferences.",
    description:
      "Fine-tune every aspect of your Mintgro setup — from branding and permissions to integrations and automation rules.",
    linkText: "Read More",
    features: [
      "User management",
      "Role permissions",
      "Brand customization",
      "Integration settings",
      "Notification preferences",
      "System audit log",
    ],
    stats: [
      { label: "Users", value: "248" },
      { label: "Roles", value: "12" },
      { label: "Integrations", value: "8" },
    ],
    bars: [90, 88, 92, 85, 95, 90, 87, 93, 91, 94, 96, 98],
    barColor: "bg-[#a8e6c6]",
    lastBarColor: "bg-brand-400",
  },
];

export default function CRM() {
  const [activeTab, setActiveTab] = useState(0);
  const active = modules[activeTab];

  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-brand-900 bg-[radial-gradient(120%_140%_at_100%_50%,#2f5f4b_0%,#2b5041_35%,#2b2d2c_75%)] scroll-mt-24"
    >
      <div className="pointer-events-none absolute -left-40 -top-40 size-[560px] rounded-full border border-white/[0.06] before:absolute before:inset-16 before:rounded-full before:border before:border-white/[0.05] after:absolute after:inset-32 after:rounded-full after:border after:border-white/[0.04]" />

      <div className="relative mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-22">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white/10 px-4 py-2 text-sm font-medium leading-none tracking-normal text-white shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
            <Sparkles size={14} className="text-brand-300" />
            Mintgro Features
          </span>
          <h2 className="mt-6 max-w-[640px] text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-white lg:text-[40px]">
            Everything You Need to Run Your Business
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto border-b border-white/15 no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            className="flex min-w-max justify-between gap-8"
          >
            {modules.map((m, i) => (
              <button
                key={m.label}
                onClick={() => setActiveTab(i)}
                className={`-mb-px shrink-0 border-b-2 pb-3 text-[15px] transition-colors ${
                  i === activeTab
                    ? "border-white font-semibold text-white"
                    : "border-transparent text-white/55 hover:text-white/85"
                }`}
                role="tab"
                aria-selected={i === activeTab}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm text-white/45">
              {activeTab + 1}/{modules.length}
            </p>
            <h3 className="mt-3 text-[32px] font-bold leading-tight text-white lg:text-[40px]">
              {active.title}
            </h3>
            <p className="mt-4 max-w-[420px] text-lg font-semibold leading-7 text-white">
              {active.subtitle}
            </p>
            <p className="mt-4 max-w-[440px] text-[15px] leading-6.5 text-white/65">
              {active.description}
            </p>
            <a className="mt-7 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[15px] font-medium text-white transition-colors hover:border-white">
              {active.linkText} <ArrowRight size={14} />
            </a>
          </div>

          <div className="relative lg:min-h-[420px]">
            <div className="flex flex-col gap-4 lg:block">
              {/* Card 1: Stats */}
              <div className="rounded-xl bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)] lg:absolute lg:right-0 lg:top-0 lg:w-[320px]">
                <div className="text-sm font-semibold text-brand-ink">
                  {active.label} Overview
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {active.stats.map((s) => (
                    <div key={s.label} className="rounded-lg bg-[#f5f6f8] p-3">
                      <div className="text-[10px] text-brand-muted">
                        {s.label}
                      </div>
                      <div className="mt-1 text-sm font-bold text-brand-ink">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Module label */}
              <div className="rounded-xl bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)] lg:absolute lg:left-0 lg:top-[104px] lg:w-[190px]">
                <div className="text-xs text-brand-muted">Active Module</div>
                <div className="mt-2 text-sm font-bold text-brand-ink">
                  {active.label}
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {active.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="rounded bg-brand-50 px-2 py-0.5 text-[9px] font-medium text-brand-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3: Bar chart */}
              <div className="rounded-xl bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)] lg:absolute lg:bottom-0 lg:right-6 lg:w-[365px]">
                <div className="text-xs font-medium text-brand-ink">
                  Monthly Trend
                </div>
                <div className="mt-3 flex h-32 items-end gap-1.5">
                  {active.bars.map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t ${
                        i === active.bars.length - 1
                          ? active.lastBarColor
                          : active.barColor
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[8px] text-brand-muted">
                  <span>J</span>
                  <span>F</span>
                  <span>M</span>
                  <span>A</span>
                  <span>M</span>
                  <span>J</span>
                  <span>J</span>
                  <span>A</span>
                  <span>S</span>
                  <span>O</span>
                  <span>N</span>
                  <span>D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
