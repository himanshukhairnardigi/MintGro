import { Sparkles, Crown, UserCog, CircleUser, Briefcase } from "lucide-react";

const roles = [
  {
    name: "Owner",
    description:
      "Full business visibility with KPIs, revenue tracking, team performance and strategic insights — all in one place.",
    icon: Crown,
    iconColor: "text-[#e8b931]",
    span: true,
  },
  {
    name: "Administrator",
    description:
      "Manage settings, users, permissions and system configuration across the entire platform.",
    icon: UserCog,
    iconColor: "text-brand-300",
  },
  {
    name: "Employee",
    description:
      "Access tasks, projects, attendance and relevant information for your role.",
    icon: CircleUser,
    iconColor: "text-brand-300",
  },
  {
    name: "Customer Portal",
    description:
      "Let customers view invoices, track orders and raise support requests independently.",
    icon: Briefcase,
    iconColor: "text-brand-300",
  },
  {
    name: "Vendor / Contractor",
    description:
      "Give external partners access to purchase orders, invoices and project updates.",
    icon: Briefcase,
    iconColor: "text-brand-300",
  },
];

export default function Personalized() {
  const owner = roles[0];
  const others = roles.slice(1);

  return (
    <section className="relative isolate overflow-hidden bg-brand-900 bg-[radial-gradient(120%_140%_at_100%_50%,#2f5f4b_0%,#2b5041_35%,#2b2d2c_75%)]">
      <div className="relative mx-auto grid w-full max-w-[1360px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16 lg:py-22">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white/10 px-4 py-2 text-sm font-medium leading-none tracking-normal text-white shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
            <Sparkles size={14} className="text-brand-300" />
            Role Based Experience
          </span>
          <h2 className="mt-6 text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-white lg:text-[40px]">
            Personalized experience for every user
          </h2>
          <p className="mt-4 text-[15px] leading-6.5 text-white/65">
            Give every person a workspace that keeps their priorities, customers
            and actions clear — from the owner to external partners.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Owner card - spans 2 rows */}
          <div className="group flex flex-col rounded-xl border border-white/12 bg-white/[0.04] p-5 transition-colors duration-200 hover:border-brand-300/40 hover:bg-[#3c715c] lg:row-span-2 lg:flex-col lg:justify-center">
            <div className="flex items-center gap-3">
              <owner.icon size={24} className={owner.iconColor} />
              <h3 className="text-lg font-semibold text-white">
                {owner.name}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-5.5 text-white/60 transition-colors duration-200 group-hover:text-white/85">
              {owner.description}
            </p>
          </div>

          {/* Other role cards */}
          {others.map((role) => (
            <div
              key={role.name}
              className="group flex flex-col rounded-xl border border-white/12 bg-white/[0.04] p-5 transition-colors duration-200 hover:border-brand-300/40 hover:bg-[#3c715c]"
            >
              <div className="flex items-center gap-3">
                <role.icon size={20} className={role.iconColor} />
                <h3 className="text-base font-semibold text-white">
                  {role.name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-5.5 text-white/60 transition-colors duration-200 group-hover:text-white/85">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
