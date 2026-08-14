"use client";

import { motion } from "motion/react";
import { UserPlus, Settings2, Rocket, LineChart } from "lucide-react";

const steps = [
  ["01", "Create your account", "Get started in minutes.", UserPlus],
  ["02", "Set up your business", "Add your team and workflows.", Settings2],
  ["03", "Customize Mintgro", "Make the workspace fit your process.", Rocket],
  ["04", "Grow with confidence", "Track progress and improve.", LineChart]
];

export default function Steps() {
  return (
    <section className="wave-bg bg-[#111b18] py-20 text-white lg:py-24">
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#69d6b2]">Getting started</p>
          <h2 className="serif mt-4 text-3xl sm:text-4xl">Get started in four simple steps</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map(([num, title, desc, Icon], index) => {
            const I = Icon as typeof UserPlus;
            return (
              <motion.div
                key={String(num)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .08 }}
                className="text-center"
              >
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#69d6b2] text-[10px] font-bold text-[#69d6b2]">
                  {String(num)}
                </div>
                <I size={18} className="mx-auto mt-5 text-[#69d6b2]" />
                <h3 className="mt-4 text-sm font-bold">{String(title)}</h3>
                <p className="mt-2 text-xs leading-5 text-white/50">{String(desc)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
