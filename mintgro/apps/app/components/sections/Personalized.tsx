"use client";

import { motion } from "motion/react";
import { Sparkles, Target, Bell, BarChart3 } from "lucide-react";

const cards = [
  ["Smart insights", "See the information that matters most.", Sparkles],
  ["Personal goals", "Keep teams focused on meaningful outcomes.", Target],
  ["Smart reminders", "Never miss the next important action.", Bell],
  ["Live reporting", "Understand performance without spreadsheets.", BarChart3]
];

export default function Personalized() {
  return (
    <section className="dark-section py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.5fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#69d6b2]">
              Personalization
            </p>
            <h2 className="serif mt-3 text-3xl text-white sm:text-4xl">
              Personalized experience for every team.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Give every person a workspace that keeps their priorities,
              customers and actions clear.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map(([title, description, Icon], index) => {
              const I = Icon as typeof Sparkles;
              return (
                <motion.div
                  key={String(title)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .06 }}
                  className="rounded-xl border border-white/10 bg-white/[.045] p-5"
                >
                  <I size={17} className="text-[#69d6b2]" />
                  <h3 className="mt-4 text-sm font-bold text-white">{String(title)}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/50">{String(description)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
