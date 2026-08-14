"use client";

import { motion } from "motion/react";
import { BarChart3, Users, TrendingUp } from "lucide-react";

export default function CRM() {
  return (
    <section id="features" className="dark-section py-20 lg:py-28">
      <div className="container relative">
        <div className="text-center">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-[.1em] text-white/60">
            Powerful modules
          </span>
          <h2 className="serif mt-4 text-3xl text-white sm:text-4xl">
            Everything You Need to Run Your Business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-white/55">
            Connect sales, customers, reporting and daily operations in one
            easy-to-use workspace.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.12em] text-[#69d6b2]">
              CRM & Sales
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-.03em]">
              Keep every opportunity moving forward.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
              See your leads, customers and sales pipeline at a glance. Give
              your team the context they need to follow up at the right time.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                ["Lead tracking", Users],
                ["Sales analytics", BarChart3],
                ["Growth forecasting", TrendingUp]
              ].map(([label, Icon]) => {
                const I = Icon as typeof Users;
                return (
                  <div key={String(label)} className="flex items-center gap-3 text-xs text-white/75">
                    <I size={15} className="text-[#69d6b2]" />
                    {String(label)}
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="dashboard overflow-hidden p-3"
          >
            <div className="rounded-xl bg-[#f4f8f6] p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-[#315b4d]">Sales overview</div>
                <div className="rounded bg-[#dcf5eb] px-2 py-1 text-[9px] font-bold text-[#008d69]">This month</div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  ["Leads", "1,248"],
                  ["Deals", "386"],
                  ["Revenue", "₹42.8L"]
                ].map(([a,b]) => (
                  <div key={a} className="rounded-lg bg-white p-3">
                    <div className="text-[9px] text-[#8b9590]">{a}</div>
                    <div className="mt-1 text-sm font-bold text-[#315b4d]">{b}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex h-40 items-end gap-2 rounded-lg bg-white p-4">
                {[28, 42, 35, 51, 46, 63, 59, 74, 69, 84, 78, 93].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: .45, delay: i * .03 }}
                    className="flex-1 rounded-t bg-[#55b795]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
