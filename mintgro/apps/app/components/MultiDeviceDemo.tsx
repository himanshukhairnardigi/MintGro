import { Monitor, Tablet, Smartphone } from "lucide-react";

export default function MultiDeviceDemo() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
          Access Anywhere
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Works on Every{" "}
          <span className="gradient-text">Device</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
          Desktop, tablet, or phone — Mintgro delivers a seamless, native-like
          experience everywhere.
        </p>

        {/* Device mockups */}
        <div className="flex items-end justify-center gap-6 md:gap-10">
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="rounded-xl border border-white/10 bg-card p-1 shadow-lg" style={{ width: 420, height: 280 }}>
              <div className="rounded-lg bg-background h-full p-4">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-destructive/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/10" />
                  <div className="h-2 w-1/2 rounded bg-white/5" />
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="h-14 rounded-lg bg-white/5 border border-white/5" />
                    ))}
                  </div>
                  <div className="h-16 rounded-lg bg-primary/5 border border-primary/10 mt-2" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
              <Monitor className="w-3.5 h-3.5" /> Desktop
            </div>
          </div>

          {/* Tablet */}
          <div>
            <div className="rounded-2xl border-2 border-white/10 bg-card p-1.5 shadow-xl" style={{ width: 220, height: 300 }}>
              <div className="rounded-xl bg-background h-full p-3">
                <div className="h-2 w-1/2 rounded bg-white/10 mb-3" />
                <div className="space-y-2">
                  <div className="h-10 rounded-lg bg-white/5 border border-white/5" />
                  <div className="h-10 rounded-lg bg-primary/5 border border-primary/10" />
                  <div className="h-10 rounded-lg bg-white/5 border border-white/5" />
                  <div className="h-10 rounded-lg bg-white/5 border border-white/5" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
              <Tablet className="w-3.5 h-3.5" /> Tablet
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="rounded-[1.5rem] border-2 border-white/10 bg-card p-1.5 shadow-xl" style={{ width: 140, height: 280 }}>
              <div className="rounded-[1rem] bg-background h-full p-3 flex flex-col">
                <div className="h-1.5 w-6 rounded-full bg-white/10 mx-auto mb-3" />
                <div className="space-y-2 flex-1">
                  <div className="h-8 rounded-lg bg-primary/5 border border-primary/10" />
                  <div className="h-8 rounded-lg bg-white/5 border border-white/5" />
                  <div className="h-8 rounded-lg bg-white/5 border border-white/5" />
                </div>
                <div className="flex justify-around mt-3 pt-2 border-t border-white/5">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="w-4 h-4 rounded bg-white/10" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
              <Smartphone className="w-3.5 h-3.5" /> Mobile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}