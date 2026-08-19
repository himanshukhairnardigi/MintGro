import { Sparkles, Cloud, LayoutGrid, ShieldCheck, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white bg-[radial-gradient(70%_80%_at_0%_0%,#d7f7e6_0%,rgba(255,255,255,0)_62%),radial-gradient(70%_80%_at_100%_0%,#ddf8ea_0%,rgba(255,255,255,0)_62%),linear-gradient(180deg,#eefdf4_0%,#ffffff_78%)]">
      <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-22">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white px-4 py-2 text-sm font-medium leading-none tracking-normal text-[#2B5142] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
          <Sparkles size={14} className="text-brand-400" />
          Mintgro ERP For Every Industry
        </span>

        <h1 className="mt-10 max-w-[960px] text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-brand-ink sm:text-[52px] lg:text-[64px]">
          Business Growth Made Simple with{" "}
          <span className="text-brand-400">Mintgro</span>
        </h1>

        <p className="mt-6 max-w-[810px] text-pretty text-base leading-7 text-brand-muted lg:text-lg lg:leading-8">
          Run your entire business from one intelligent platform. Manage
          customers, streamline operations and accelerate growth — whether you
          are in healthcare, education, IT, retail or any industry.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
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
            Start Free Trial &rarr;
          </a>
        </div>

        <ul className="mt-11 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
          <li className="flex items-center gap-2 text-sm font-medium text-brand-ink/80">
            <Sparkles size={14} className="text-brand-400" /> Smart Insights
          </li>
          <li className="flex items-center gap-2 text-sm font-medium text-brand-ink/80">
            <Cloud size={14} className="text-brand-400" /> Cloud based
          </li>
          <li className="flex items-center gap-2 text-sm font-medium text-brand-ink/80">
            <LayoutGrid size={14} className="text-brand-400" /> Multi industry
          </li>
          <li className="flex items-center gap-2 text-sm font-medium text-brand-ink/80">
            <ShieldCheck size={14} className="text-brand-400" /> Secure
          </li>
          <li className="flex items-center gap-2 text-sm font-medium text-brand-ink/80">
            <Smartphone size={14} className="text-brand-400" /> Mobile ready
          </li>
        </ul>
      </div>
    </section>
  );
}
