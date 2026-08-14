import {
  Building2,
  GraduationCap,
  HeartPulse,
  BriefcaseBusiness,
  ShoppingBag,
  Factory
} from "lucide-react";

const industries = [
  ["Healthcare", HeartPulse],
  ["Education", GraduationCap],
  ["Professional Services", BriefcaseBusiness],
  ["Retail", ShoppingBag],
  ["Manufacturing", Factory],
  ["Real Estate", Building2]
];

export default function Industries() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Built for every industry</p>
          <h2 className="section-title mt-4">Built for Every Industry</h2>
          <p className="mt-4 text-sm leading-6 text-[#747e79]">
            Flexible enough to adapt to your industry while keeping the
            workflow simple for your team.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(([name, Icon]) => {
            const I = Icon as typeof Building2;
            return (
              <div
                key={String(name)}
                className="rounded-xl border border-[#e5eae7] bg-[#fbfcfc] p-5 transition hover:-translate-y-0.5 hover:border-[#b9ddd0] hover:shadow-lg"
              >
                <I size={20} className="text-[#008d69]" />
                <h3 className="mt-4 text-sm font-bold text-[#315449]">{String(name)}</h3>
                <p className="mt-2 text-xs leading-5 text-[#7b8580]">
                  Adaptable tools for teams, customers and processes in this industry.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
