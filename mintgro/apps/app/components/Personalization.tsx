import { Sparkles, Sliders, Palette, UserCircle } from "lucide-react";

const items = [
  {
    icon: UserCircle,
    title: "Role-Based Dashboards",
    desc: "Every team member sees what matters to their role — no noise, just signal.",
  },
  {
    icon: Sliders,
    title: "Custom Workflows",
    desc: "Drag-and-drop builder to create processes that match how your team actually works.",
  },
  {
    icon: Palette,
    title: "Branded Experience",
    desc: "White-label portals, custom domains, and themed interfaces for your clients.",
  },
  {
    icon: Sparkles,
    title: "AI Personalization",
    desc: "Machine learning adapts layouts, suggestions, and alerts to each user's behavior.",
  },
];

export default function Personalization() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Visual */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              {/* Mock personalized dashboard */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <UserCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium">Sarah&apos;s Dashboard</div>
                  <div className="text-[10px] text-muted-foreground">Marketing Lead</div>
                </div>
                <div className="ml-auto flex gap-1.5">
                  {["bg-primary/20", "bg-blue-500/20", "bg-purple-500/20"].map((c, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                {["Campaign Performance", "Lead Score Distribution", "Content Engagement"].map(
                  (widget, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-white/5 border border-white/5 p-3 flex items-center justify-between"
                    >
                      <span className="text-xs">{widget}</span>
                      <span className="text-[10px] text-primary font-medium">Live</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
              Personalized Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Your Platform,{" "}
              <span className="gradient-text">Your Way</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              No two businesses are the same. Mintgro molds itself to your
              team, your workflows, and your brand.
            </p>

            <div className="space-y-5">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}