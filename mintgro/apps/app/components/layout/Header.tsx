"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Modules",
    href: "/modules",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-white">
      <div className="mx-auto flex h-[89px] max-w-[1200px] items-center px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
        >
          <div className="flex items-center">

            <span className="font-serif text-[30px] leading-none tracking-[-1.5px] text-[#315B4D]">
              Mintgro
            </span>

            <span className="mx-3 h-[35px] w-px bg-[#D8DED9]" />

            <span className="flex flex-col text-[12px] leading-[14px]">
              <span className="font-medium text-[#292929]">
                Business Growth
              </span>

              <span className="text-[#8A8A8A]">
                Made Simple
              </span>
            </span>

          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center lg:flex">

          <div className="flex items-center gap-8">

            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1.5 text-[13px] font-medium text-[#292929] transition-colors hover:text-[#008C68]"
              >
                {item.label}

                <ChevronDown
                  size={13}
                  strokeWidth={1.7}
                  className="transition-transform duration-200 group-hover:translate-y-[1px]"
                />
              </Link>
            ))}

          </div>

          {/* CTA area */}
          <div className="ml-24 flex items-center gap-5">

            <Link
              href="/contact"
              className="whitespace-nowrap text-[13px] font-medium text-[#292929] transition-colors hover:text-[#008C68]"
            >
              Book a Demo
            </Link>

            <Link
              href="/signup"
              className="group flex h-[31px] items-center gap-2 rounded-[6px] bg-[#008F6B] px-4 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#00795B]"
            >
              Start Free Trial

              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </nav>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto flex lg:hidden"
        >
          {mobileOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-black/[0.06] bg-white px-6 py-5 lg:hidden">

          <nav className="flex flex-col">

            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-black/[0.06] py-4 text-[15px] font-medium"
              >
                {item.label}

                <ChevronDown size={15} />
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-5 text-[15px] font-medium"
            >
              Book a Demo
            </Link>

            <Link
              href="/signup"
              className="mt-4 flex h-11 items-center justify-center gap-2 rounded-md bg-[#008F6B] text-sm font-medium text-white"
            >
              Start Free Trial
              <ArrowRight size={16} />
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}