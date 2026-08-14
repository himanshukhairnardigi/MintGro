import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: ["Features", "CRM & Sales", "Automation", "Pricing"]
  },
  {
    title: "Company",
    links: ["About", "Industries", "Contact", "Careers"]
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "FAQ", "Help Center"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#1a211f] text-white">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="serif text-2xl text-white">Mintgro</Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
            Business growth made simple. Manage customers, streamline
            workflows and build a more scalable business.
          </p>
          <div className="mt-6 flex gap-2">
            {["f", "in", "x"].map((item) => (
              <span
                key={item}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-bold">{column.title}</h3>
            <div className="mt-5 grid gap-3">
              {column.links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-xs text-white/50 hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container flex min-h-14 flex-col justify-center gap-2 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mintgro. All rights reserved.</span>
          <span>Privacy Policy · Terms · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
