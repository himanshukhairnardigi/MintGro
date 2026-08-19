import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerIndustries = [
  { label: "Healthcare", href: "/#industries" },
  { label: "Education", href: "/#industries" },
  { label: "IT Hardware", href: "/#industries" },
  { label: "Manufacturing", href: "/#industries" },
  { label: "Retail", href: "/#industries" },
  { label: "Professional Services", href: "/#industries" },
  { label: "View All", href: "/#industries" },
];

const footerProduct = [
  { label: "Features", href: "/#features" },
  { label: "Modules", href: "/#experience" },
  { label: "Industries", href: "/#industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/#features" },
];

const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Career", href: "/blog" },
  { label: "Partners", href: "/about" },
  { label: "Contact Us", href: "mailto:hello@mintgro.com" },
  { label: "Security", href: "/faq" },
];

const footerResources = [
  { label: "Help Center", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Blogs", href: "/blog" },
  { label: "FAQ's", href: "/faq" },
  { label: "Release Notes", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#2b2b2b] text-white">
      <span className="pointer-events-none absolute inset-x-0 bottom-[100px] flex justify-center overflow-hidden">
        <span className="w-[95%] overflow-hidden">
          <span className="block w-[196%] max-w-none text-[120px] font-bold leading-none opacity-[0.045] text-white select-none">
            Mintgro
          </span>
        </span>
      </span>

      <div className="relative mx-auto w-full max-w-[1360px] px-5 py-22 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_repeat(4,minmax(0,1fr))] lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <span className="text-xl font-bold tracking-tight text-white">
              Mintgro
            </span>
            <p className="mt-6 max-w-[300px] text-sm leading-5.5 text-white/60">
              Business growth made simple. One connected platform for every
              department, every industry.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-brand-400" />
                <a
                  href="mailto:hello@mintgro.com"
                  className="border-b border-transparent transition-colors hover:border-brand-400"
                >
                  hello@mintgro.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-brand-400" />
                <a
                  href="tel:+12345678900"
                  className="border-b border-transparent transition-colors hover:border-brand-400"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-brand-400" />
                <span>123 Business Ave, Suite 100</span>
              </li>
            </ul>

            {/* Social icons */}
            <ul className="mt-8 flex items-center gap-3">
              <li>
                <a
                  href="https://facebook.com/mintgro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:opacity-80"
                >
                  <svg viewBox="0 0 24 24" fill="#1877F2" className="size-6">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mintgro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:opacity-80"
                >
                  <svg viewBox="0 0 24 24" fill="#E4405F" className="size-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com/mintgro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="flex size-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:opacity-80"
                >
                  <svg viewBox="0 0 24 24" fill="#BD081C" className="size-6">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24 18.635 24 24 18.633 24 12.013 24 5.393 18.635 0 12.017 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/mintgro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:opacity-80"
                >
                  <svg viewBox="0 0 24 24" fill="#0A66C2" className="size-6">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h3 className="text-lg font-semibold text-white">Industries</h3>
            <ul className="mt-6 space-y-3.5">
              {footerIndustries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-all hover:border-b hover:border-brand-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product */}
          <div>
            <h3 className="text-lg font-semibold text-white">Product</h3>
            <ul className="mt-6 space-y-3.5">
              {footerProduct.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-all hover:border-b hover:border-brand-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-6 space-y-3.5">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-all hover:border-b hover:border-brand-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-6 space-y-3.5">
              {footerResources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-all hover:border-b hover:border-brand-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-[#222222]">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-white/55 sm:flex-row sm:px-8 lg:px-10">
          <p>&copy; 2026 Mintgro. All rights reserved.</p>
          <nav className="flex items-center gap-3">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="h-4 w-px bg-white/20" />
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
            <span className="h-4 w-px bg-white/20" />
            <Link
              href="/cookie-policy"
              className="transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
