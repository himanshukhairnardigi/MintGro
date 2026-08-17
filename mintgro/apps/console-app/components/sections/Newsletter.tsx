"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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
    <section className="relative bg-[#f4faf7] py-20">
      <div className="container max-w-2xl text-center">
        <p className="eyebrow">Stay ahead with mintgro</p>
        <h2 className="serif mt-4 text-3xl text-[#264f42] sm:text-4xl">
          Stay Ahead. Grow Smarter.
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#6e7974]">
          Get practical business tips, AI insights, industry updates and product
          news delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-[#008d69]">
            <CheckCircle size={18} />
            <span className="text-sm font-semibold">
              Thanks for subscribing!
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 rounded-lg border border-[#d4dfda] bg-white px-4 py-2.5 text-xs text-[#315449] placeholder:text-[#9aa39f] focus:border-[#008d69] focus:outline-none focus:ring-2 focus:ring-[#008d69]/10 transition-all"
            />
            <button type="submit" className="btn btn-green">
              Subscribe Now <Send size={12} />
            </button>
          </form>
        )}

        <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-[#88928d]">
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-[#008d69]" />
            No Spam
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-[#008d69]" />
            Useful Insights
          </span>
        </div>
      </div>
    </section>
  );
}
