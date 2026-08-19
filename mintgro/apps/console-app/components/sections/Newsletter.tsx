"use client";

import { useState } from "react";
import { Sparkles, CheckCircle } from "lucide-react";

export default function Newsletter() {
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
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1360px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-22">
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#f6f6f6] px-6 py-16 text-center lg:px-16">
          <span className="pointer-events-none absolute -left-24 top-0 size-[420px] rounded-full bg-[#7fb7cc] opacity-45 blur-[110px]" />
          <span className="pointer-events-none absolute -right-24 -top-10 size-[420px] rounded-full bg-[#8fa9e8] opacity-45 blur-[110px]" />
          <span className="pointer-events-none absolute -bottom-28 right-1/4 size-[380px] rounded-full bg-[#8fe0b6] opacity-40 blur-[110px]" />

          <div className="relative flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5142] bg-white px-4 py-2 text-sm font-medium leading-none tracking-normal text-[#2B5142] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.08)]">
              <Sparkles size={14} className="text-brand-400" />
              Stay ahead with mintgro
            </span>
            <h2 className="mt-6 text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-brand-ink lg:text-[40px]">
              Stay Ahead. Grow Smarter.
            </h2>
            <p className="mt-4 max-w-[520px] text-base leading-6.5 text-brand-muted">
              Get practical business tips, AI insights, industry updates and
              product news delivered to your inbox.
            </p>

            {submitted ? (
              <div className="mt-8 flex items-center gap-2 text-brand-400">
                <CheckCircle size={18} />
                <span className="text-sm font-semibold">
                  Thanks for subscribing!
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex w-full max-w-[510px] flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@email.com"
                  required
                  className="h-12 min-w-0 flex-1 rounded-lg border border-black/10 bg-white px-4 text-[15px] text-brand-ink outline-none placeholder:text-black/35 focus-visible:border-brand-300 focus-visible:ring-2 focus-visible:ring-brand-200"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-[#10a66e] to-[#2b5142] px-6 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  Subscribe Now &rarr;
                </button>
              </form>
            )}

            <ul className="mt-6 flex items-center gap-8 text-sm text-brand-ink/75">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-brand-400" />
                No Spam
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-brand-400" />
                Useful Insights
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
