import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    description:
      "Manage patients, appointments, billing and clinical workflows in one secure platform.",
  },
  {
    name: "Education",
    description:
      "Streamline admissions, student records, fee management and campus operations.",
  },
  {
    name: "IT Hardware",
    description:
      "Track assets, manage service tickets and streamline hardware lifecycle operations.",
  },
  {
    name: "Manufacturing",
    description:
      "Manage production, inventory, quality control and supply chain from one dashboard.",
  },
  {
    name: "Hospitality",
    description:
      "Simplify reservations, guest management, billing and staff scheduling.",
  },
  {
    name: "Travel Agencies",
    description:
      "Organize bookings, itineraries, client communication and vendor management.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-22">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white px-4 py-2 text-sm font-medium leading-none tracking-normal text-[#2B5142] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
          <Sparkles size={14} className="text-brand-400" />
          Industry solutions
        </span>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-brand-ink lg:text-[40px]">
              Built for Every Industry
            </h2>
            <p className="mt-4 max-w-[720px] text-base text-brand-muted">
              Flexible enough to adapt to your industry while keeping the
              workflow simple for your team.
            </p>
          </div>
          <Link
            href="/#industries"
            className="flex h-10 shrink-0 items-center gap-2 rounded-lg border border-transparent bg-gradient-to-l from-brand-400 to-brand-700 px-6 text-base font-medium text-white transition-opacity hover:opacity-90 hover:text-white hover:border-transparent"
          >
            View All Industries &rarr;
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <li key={ind.name}>
              <Link
                href="/#experience"
                className="group flex h-full flex-col rounded-2xl border border-transparent bg-[#f9f9f9] p-6 transition-all hover:border-brand-300 hover:bg-white hover:shadow-[0_5px_20px_rgba(0,0,0,0.06)] focus-visible:border-brand-300 focus-visible:bg-white focus-visible:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-400">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="flex-1 text-xl font-semibold text-brand-ink">
                    {ind.name}
                  </h3>
                  <span className="flex size-6 items-center justify-center rounded-full text-brand-ink transition-colors group-hover:bg-brand-400 group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                </div>
                <p className="mt-5 text-[15px] leading-6.5 text-brand-muted">
                  {ind.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
