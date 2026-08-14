"use client";

import { motion } from "motion/react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Too many spreadsheets",
  "Leads getting missed",
  "Manual follow-ups",
  "Scattered customer data",
  "No clear business visibility"
];

const wins = [
  "Everything in one place",
  "Automated follow-ups",
  "Clear customer pipeline",
  "Real-time visibility",
  "Simple repeatable workflows"
];

export default function Challenges() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Built for real businesses</p>
          <h2 className="section-title mt-4">
            Turn Everyday Challenges into Business Success
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#707a76]">
            Replace fragmented tools and repetitive work with a system that
            makes your business easier to run.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#f1dcdc] bg-[#fff6f6] p-6"
          >
            <h3 className="text-sm font-bold text-[#d05d5d]">What hurts</h3>
            <div className="mt-4 grid gap-3">
              {problems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#5f6764]">
                  <AlertCircle size={13} className="text-[#e56b6b]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#d9eee5] bg-[#f2fff9] p-6"
          >
            <h3 className="text-sm font-bold text-[#008d69]">What works</h3>
            <div className="mt-4 grid gap-3">
              {wins.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#53615b]">
                  <CheckCircle2 size={13} className="text-[#008d69]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
