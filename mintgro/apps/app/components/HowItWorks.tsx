import { UserPlus, Settings, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up",
    desc: "Create your account in 30 seconds. No credit card required.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure",
    desc: "Connect your data sources and set up your workspace with our guided wizard.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch",
    desc: "Activate automations, campaigns, and dashboards tailored to your goals.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Grow",
    desc: "Monitor, optimize, and scale with real-time insights and AI recommendations.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
            Get Started in Minutes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Four Steps to{" "}
            <span className="gradient-text">Unlock Growth</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From sign-up to measurable results — Mintgro gets you there fast.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] right-[-40%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="relative z-10 mx-auto w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 animate-glow">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-[10px] font-mono text-primary/70 mb-2">
                STEP {s.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}