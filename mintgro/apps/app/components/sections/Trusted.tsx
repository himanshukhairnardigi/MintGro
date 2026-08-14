export default function Trusted() {
  return (
    <section className="border-y border-[#e9edeb] bg-white py-7">
      <div className="container grid gap-6 md:grid-cols-[.8fr_2fr] md:items-center">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9aa39f]">
            Trusted by growing businesses
          </p>
          <p className="mt-2 text-xs leading-5 text-[#77817c]">
            One platform to manage the work behind your growth.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 text-center sm:grid-cols-6">
          {["Mintgro", "Mintgro", "Mintgro", "Mintgro", "Mintgro", "Mintgro"].map((x, i) => (
            <span key={i} className="serif text-sm text-[#b6c0bb]">{x}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
