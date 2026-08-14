import {
  TrendingUp,
  Users,
  BarChart3,
  Shield,
  ArrowRight,
} from "lucide-react";

const challenges = [
  {
    icon: BarChart3,
    problem: "Scattered Data & No Clear Insights",
    solution:
      "Unified analytics dashboard that turns raw data into actionable growth strategies.",
  },
  {
    icon: Users,
    problem: "Customer Acquisition Is Expensive",
    solution:
      "AI-powered targeting and automation that reduces CAC by up to 60%.",
  },
  {
    icon: TrendingUp,
    problem: "Stalled Revenue Growth",
    solution:
      "Revenue optimization engine with smart pricing and upsell recommendations.",
  },
  {
    icon: Shield,
    problem: "Scaling Without Breaking Operations",
    solution:
      "Automated workflows and integrations that scale seamlessly with your business.",
  },
];

export default function Challenges() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
            Challenges → Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Turn Every Challenge Into a{" "}
            <span className="gradient-text">Growth Opportunity</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every business faces obstacles. Mintgro transforms them into your
            greatest competitive advantages.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-white/5 bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-destructive mb-1">
                    Challenge
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {item.problem}
                  </h3>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-primary mb-1">
                        Mintgro Solution
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}