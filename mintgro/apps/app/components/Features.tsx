import {
  BarChart3,
  Users,
  Zap,
  Globe,
  Shield,
  Cpu,
  Layers,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Real-time dashboards, custom reports, and predictive insights to drive decisions.",
  },
  {
    icon: Users,
    title: "CRM & Contacts",
    desc: "360° customer view with smart segmentation, lifecycle tracking, and engagement scoring.",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    desc: "Rule-based and AI workflows that eliminate repetitive tasks and boost productivity.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Outreach",
    desc: "Email, SMS, social, and web — orchestrated from a single campaign builder.",
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    desc: "GDPR, SOC2, and HIPAA-ready infrastructure with role-based access controls.",
  },
  {
    icon: Cpu,
    title: "AI Copilot",
    desc: "Context-aware AI assistant for content, strategy, and data interpretation.",
  },
  {
    icon: Layers,
    title: "50+ Integrations",
    desc: "Seamlessly connect with Slack, Salesforce, HubSpot, Stripe, and more.",
  },
  {
    icon: Lock,
    title: "Data Vault",
    desc: "Encrypted storage with audit trails, versioning, and automated backups.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
            Everything You Need
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            All the Features Your Business{" "}
            <span className="gradient-text">Actually Needs</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            No bloat, no fluff. Every feature is designed to solve a real
            business problem and deliver measurable ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/5 bg-card p-5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}