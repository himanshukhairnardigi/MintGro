import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

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
  { label: "About Us", href: "/customers" },
  { label: "Career", href: "/blog" },
  { label: "Partners", href: "/customers" },
  { label: "Contact Us", href: "mailto:hello@mintgro.com" },
  { label: "Security", href: "/faq" },
];

const footerResources = [
  { label: "Help Center", href: "https://docs.mintgro.com" },
  { label: "Documentation", href: "https://docs.mintgro.com" },
  { label: "Blogs", href: "/blog" },
  { label: "FAQ's", href: "/faq" },
  { label: "Release Notes", href: "/roadmap" },
];

const socials = [
  { icon: FacebookIcon, href: "https://facebook.com/mintgro", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com/mintgro", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://linkedin.com/company/mintgro", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e5eae7] bg-[#f9fcfa] pt-14 pb-8">
      <div className="container">
        {/* Top area */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_3fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="serif text-[23px] tracking-[-1px] text-[#315b4d]">
                Mintgro
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-xs leading-5 text-[#7b8580]">
              Business growth made simple. One connected platform for every
              department, every industry.
            </p>

            <div className="mt-5 space-y-2.5">
              <a
                href="mailto:hello@mintgro.com"
                className="flex items-center gap-2 text-xs text-[#5f6764] hover:text-[#008d69] transition-colors"
              >
                <Mail size={13} className="text-[#008d69]" />
                hello@mintgro.com
              </a>
              <a
                href="tel:+12345678900"
                className="flex items-center gap-2 text-xs text-[#5f6764] hover:text-[#008d69] transition-colors"
              >
                <Phone size={13} className="text-[#008d69]" />
                +1 (234) 567-8900
              </a>
              <div className="flex items-center gap-2 text-xs text-[#5f6764]">
                <MapPin size={13} className="text-[#008d69]" />
                Location of Mintgro will go here
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf5f0] text-[#5f6764] hover:bg-[#008d69] hover:text-white transition-all"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h4 className="text-xs font-bold text-[#315449]">Industries</h4>
              <ul className="mt-3 space-y-2">
                {footerIndustries.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] text-[#7b8580] hover:text-[#008d69] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#315449]">Product</h4>
              <ul className="mt-3 space-y-2">
                {footerProduct.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] text-[#7b8580] hover:text-[#008d69] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#315449]">Company</h4>
              <ul className="mt-3 space-y-2">
                {footerCompany.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] text-[#7b8580] hover:text-[#008d69] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#315449]">Resources</h4>
              <ul className="mt-3 space-y-2">
                {footerResources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] text-[#7b8580] hover:text-[#008d69] transition-colors"
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
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#e5eae7] pt-6 sm:flex-row">
          <span className="text-[10px] text-[#9aa39f]">
            &copy; 2026 Mintgro. All rights reserved.
          </span>
          <div className="flex gap-4 text-[10px] text-[#9aa39f]">
            <Link href="/privacy-policy" className="hover:text-[#008d69] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#008d69] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-[#008d69] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
