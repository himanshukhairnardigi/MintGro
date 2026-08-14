import {
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Factory,
  Landmark,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "SaaS & Tech",
    desc: "Reduce churn, optimize LTV, and scale acquisition.",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    desc: "Boost conversions, cart recovery, and AOV.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    desc: "Patient engagement, compliance, and scheduling.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Enrollment funnels, learner analytics, and retention.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Supply chain visibility, demand forecasting, and ops.",
  },
  {
    icon: Landmark,
    name: "Finance",
    desc: "Risk analytics, client portals, and regulatory reporting.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
            Industry Adaptive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for{" "}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Mintgro adapts to your domain with tailored workflows, metrics,
            and compliance standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 rounded-xl border border-white/5 bg-card p-5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <ind.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">{ind.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}