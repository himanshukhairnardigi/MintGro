"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.07] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-[1360px] items-center gap-8 px-5 sm:px-8 lg:h-30 lg:px-10">
        <Link href="/" className="shrink-0">
          <span className="text-xl font-bold tracking-tight text-brand-ink lg:text-2xl">
            Mintgro
          </span>
        </Link>

        <nav className="ml-8 hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-medium text-brand-ink/85 transition-colors hover:text-brand-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Link
            href="mailto:hello@mintgro.com"
            className="hidden text-base font-medium text-brand-ink transition-colors hover:text-brand-500 lg:block"
          >
            Book a Demo
          </Link>
          <Link
            href="https://app.mintgro.com/signup"
            className="hidden h-10 items-center gap-2 rounded-lg border border-transparent bg-gradient-to-l from-brand-400 to-brand-700 px-6 text-base font-medium text-white hover:opacity-90 hover:text-white lg:inline-flex"
          >
            Start Free Trial &rarr;
          </Link>
          <button
            className="flex size-10 items-center justify-center rounded-lg border border-black/10 text-brand-ink lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/[0.07] bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1360px] flex-col px-5 py-4">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-black/[0.07] py-3 text-base font-medium text-brand-ink/85"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="mailto:hello@mintgro.com"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-brand-ink"
            >
              Book a Demo
            </Link>

            <Link
              href="https://app.mintgro.com/signup"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex h-10 items-center justify-center rounded-lg bg-gradient-to-l from-brand-400 to-brand-700 px-6 text-base font-medium text-white"
            >
              Start Free Trial &rarr;
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
