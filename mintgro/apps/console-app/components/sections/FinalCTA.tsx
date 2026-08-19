export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d4927]">
      <span className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40" />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#0d4927_0%,rgba(13,73,39,0.97)_40%,rgba(13,73,39,0.80)_50%,rgba(13,73,39,0.25)_66%,rgba(13,73,39,0)_80%)]" />

      <div className="relative mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-[720px]">
          <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-white lg:text-[40px]">
            Ready to Simplify Your Business?
          </h2>
          <p className="mt-3 max-w-[660px] text-base text-white/85">
            Experience a smarter way to manage your business. Start your free
            trial today or book a demo to see Mintgro in action.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@mintgro.com"
              className="flex h-10 items-center gap-2 rounded-lg border border-transparent bg-white px-6 text-base font-medium text-brand-ink transition-opacity hover:opacity-90 hover:text-brand-ink hover:border-transparent"
            >
              Book A Demo &rarr;
            </a>
            <a
              href="https://app.mintgro.com/signup"
              className="flex h-10 items-center gap-2 rounded-lg border border-transparent bg-gradient-to-l from-brand-400 to-brand-700 px-6 text-base font-medium text-white transition-opacity hover:opacity-90 hover:text-white hover:border-transparent"
            >
              Start Free Trial
            </a>
            <a
              href="mailto:hello@mintgro.com"
              className="flex h-10 items-center gap-2 rounded-lg border border-brand-400 bg-transparent px-6 text-base font-medium text-white transition-colors hover:bg-brand-400/15 hover:text-white"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
