import {
  Zap,
  AtSign,
  Share2,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Docs"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Help Center", "Community", "Templates", "Webinars", "Status"],
  Legal: ["Privacy", "Terms", "Security", "GDPR", "DPA"],
};

const socials = [
  { icon: AtSign, href: "#", label: "Twitter" },
  { icon: Share2, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Mintgro
              </span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mb-5">
              Business growth made simple. All the tools, analytics, and
              insights you need to scale — in one platform.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="w-3.5 h-3.5 text-primary" />
                hello@mintgro.com
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone className="w-3.5 h-3.5 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mintgro. All rights reserved.
          </span>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <s.icon className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}

            <a
              href="#subscribe"
              className="ml-2 text-xs font-medium bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-all duration-150 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}