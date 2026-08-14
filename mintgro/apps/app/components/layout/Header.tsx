"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/lib/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.05] bg-white/95 backdrop-blur-md">
      <div className="container flex h-[68px] items-center">
        <Link href="/" className="flex items-center shrink-0">
          <span className="serif text-[23px] tracking-[-1px] text-[#315b4d]">
            Mintgro
          </span>
          <span className="mx-2 h-7 w-px bg-[#d7dedb]" />
          <span className="hidden text-[8px] leading-[10px] sm:flex sm:flex-col">
            <span className="font-bold">Business Growth</span>
            <span className="text-[#8b918e]">Made Simple</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.items.length && setActive(item.label)}
              onMouseLeave={() => setActive(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[11px] font-medium text-[#303634] hover:text-[#008d69]"
              >
                {item.label}
                {item.items.length > 0 && <ChevronDown size={11} />}
              </Link>

              {item.items.length > 0 && active === item.label && (
                <div className="absolute left-1/2 top-full mt-4 w-44 -translate-x-1/2 rounded-xl border border-[#e4ebe7] bg-white p-2 shadow-xl">
                  {item.items.map((sub) => (
                    <Link
                      key={sub}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-xs text-[#58625e] hover:bg-[#f0f8f4] hover:text-[#008d69]"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="#contact"
            className="text-[11px] font-medium hover:text-[#008d69]"
          >
            Book a Demo
          </Link>

          <Link href="#pricing" className="btn btn-green h-8 min-h-8">
            Start Free Trial
            <ArrowRight size={12} />
          </Link>
        </nav>

        <button
          className="ml-auto rounded-md p-2 lg:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/[.05] bg-white lg:hidden">
          <nav className="container flex flex-col py-4">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-[#edf0ef] py-4 text-sm font-medium"
              >
                {item.label}
                {item.items.length > 0 && <ChevronDown size={14} />}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="py-4 text-sm font-medium"
            >
              Book a Demo
            </Link>

            <Link
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="btn btn-green mt-2"
            >
              Start Free Trial <ArrowRight size={14} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
