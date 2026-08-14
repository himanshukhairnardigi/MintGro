import {
  ArrowRight,
  Play,
  BarChart3,
  Target,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">
                Trusted by 2,500+ businesses
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Business Growth{" "}
              <span className="gradient-text">Made Simple</span>{" "}
              with Mintgro
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Transform challenges into opportunities. Get all the tools,
              analytics, and insights you need to scale your business — in one
              powerful platform.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-150 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-foreground font-medium text-sm px-6 py-3 rounded-xl transition-all duration-150"
              >
                <Play className="w-4 h-4 text-primary" />
                Watch Demo
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8">
              {[
                { value: "98%", label: "Satisfaction" },
                { value: "3.2x", label: "Growth Rate" },
                { value: "50+", label: "Integrations" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Dashboard preview */}
          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-card p-1 shadow-2xl">
              <div className="rounded-xl bg-background p-4 overflow-hidden">
                {/* Mini dashboard */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">Dashboard</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Live
                  </span>
                </div>

                {/* Chart area */}
                <div className="relative h-40 mb-4">
                  <svg
                    viewBox="0 0 400 160"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="heroChartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,120 C40,110 80,90 120,85 C160,80 200,60 240,50 C280,40 320,30 360,25 L400,20 L400,160 L0,160 Z"
                      fill="url(#heroChartGradient)"
                    />
                    <path
                      d="M0,120 C40,110 80,90 120,85 C160,80 200,60 240,50 C280,40 320,30 360,25 L400,20"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                    />
                    {/* Data point */}
                    <circle cx="240" cy="50" r="4" fill="#10b981" />
                    <circle
                      cx="240"
                      cy="50"
                      r="8"
                      fill="#10b981"
                      opacity="0.3"
                    />
                  </svg>
                  {/* Tooltip */}
                  <div className="absolute top-2 right-8 glass-panel rounded-lg px-3 py-1.5 text-[10px]">
                    <span className="text-primary font-semibold">+47%</span>{" "}
                    <span className="text-muted-foreground">growth</span>
                  </div>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Revenue", value: "$124K", change: "+12%" },
                    { label: "Users", value: "8,420", change: "+23%" },
                    { label: "Conv.", value: "4.8%", change: "+0.6%" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg bg-white/5 border border-white/5 p-2.5"
                    >
                      <div className="text-[10px] text-muted-foreground">
                        {m.label}
                      </div>
                      <div className="text-sm font-semibold mt-0.5">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-primary font-medium">
                        {m.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 glass-panel rounded-xl p-3 animate-float shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium">Goal Reached</div>
                  <div className="text-[10px] text-primary">+127% this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}