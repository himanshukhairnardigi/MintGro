const categories = [
  "Healthcare",
  "Education",
  "IT Hardware",
  "Manufacturing",
  "Hospitality",
  "Professional Services",
];

export default function Trusted() {
  return (
    <section className="bg-[linear-gradient(90deg,#f4f8ff_0%,#eefff8_50%,#f4f9ff_100%)]">
      <div className="mx-auto grid w-full max-w-[1360px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <div>
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink">
              Trusted by
            </h2>
            <span className="h-px w-24 bg-[linear-gradient(90deg,#10a66e_0%,rgba(16,166,110,0)_100%)]" />
          </div>
          <p className="mt-8 max-w-[480px] text-sm leading-7 text-brand-muted">
            Businesses across industries trust Mintgro to manage their
            operations, customers and growth — all from one connected platform.
          </p>
        </div>

        <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3">
          {categories.map((name) => (
            <li key={name} className="flex justify-center">
              <span className="flex h-[34px] w-[130px] items-center text-sm font-semibold text-brand-ink/20">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
