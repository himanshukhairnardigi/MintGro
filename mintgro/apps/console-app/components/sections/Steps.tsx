import { Sparkles, Factory, UserRoundPlus, SlidersHorizontal, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Choose Your Industry",
    description:
      "Select from pre-built industry templates or start from scratch with a blank workspace.",
    icon: Factory,
  },
  {
    number: 2,
    title: "Set Up Your Team",
    description:
      "Invite your team, assign roles and configure permissions in minutes.",
    icon: UserRoundPlus,
  },
  {
    number: 3,
    title: "Customize Your Workspace",
    description:
      "Enable the modules you need, create workflows and tailor the platform to your process.",
    icon: SlidersHorizontal,
  },
  {
    number: 4,
    title: "Watch Your Business Grow",
    description:
      "Track performance, automate routine tasks and focus on what matters most.",
    icon: TrendingUp,
  },
];

export default function Steps() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050807]">
      <span className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30" />

      <div className="relative mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-22">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white/10 px-4 py-2 text-sm font-medium leading-none tracking-normal text-white shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
            <Sparkles size={14} className="text-brand-300" />
            How It Works
          </span>
          <h2 className="mt-6 max-w-[640px] text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-white lg:text-[40px]">
            Get started in four simple steps
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span className="absolute left-[12.5%] right-[12.5%] top-[27px] hidden border-t-2 border-dashed border-brand-400/45 lg:block" />

          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-full border border-white/25 bg-[#0b100e] text-lg font-semibold text-white">
                {step.number}
              </span>
              <step.icon size={44} className="mt-9 text-white" />
              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[280px] text-sm leading-6 text-white/60">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://app.mintgro.com/signup"
            className="flex h-10 items-center gap-2 rounded-lg border border-transparent bg-white px-6 text-base font-medium text-brand-ink transition-opacity hover:opacity-90 hover:text-brand-ink hover:border-transparent"
          >
            Sign Up
          </a>
          <a
            href="mailto:hello@mintgro.com"
            className="flex h-10 items-center gap-2 rounded-lg border border-transparent bg-gradient-to-l from-brand-400 to-brand-700 px-6 text-base font-medium text-white transition-opacity hover:opacity-90 hover:text-white hover:border-transparent"
          >
            Book A Demo &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
