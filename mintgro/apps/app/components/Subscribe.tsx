"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="subscribe" className="relative py-24 px-6">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative max-w-xl mx-auto text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
          Stay Updated
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Subscribe to Our{" "}
          <span className="gradient-text">Newsletter</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Get growth tips, product updates, and exclusive insights delivered
          to your inbox. No spam, unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-primary animate-fade-in">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">
              Thanks for subscribing!
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)] transition-all"
            />
            <button
              type="submit"
              className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-150 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Subscribe
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
