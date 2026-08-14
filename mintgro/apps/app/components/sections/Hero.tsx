"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f0fff8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,230,181,.42),transparent_48%)]" />

      <div className="container relative flex min-h-[430px] flex-col items-center justify-center py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
        >
          <span className="eyebrow">All-in-one business growth platform</span>

          <h1 className="serif mt-5 max-w-3xl text-[clamp(38px,5vw,58px)] font-bold leading-[1.03] tracking-[-.045em] text-[#173f33]">
            Business Growth Made Simple
            <br />
            with <span className="text-[#008d69]">Mintgro</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#65716c]">
            Manage your customers, streamline your operations and grow your
            business with one simple platform built around the way you work.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="btn btn-green">
              Start Free Trial <ArrowRight size={14} />
            </a>
            <a href="#contact" className="btn btn-light">
              Book a Demo
            </a>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["No credit card", "Easy setup", "Cancel anytime"].map((item) => (
              <span key={item} className="flex items-center gap-1 text-[10px] text-[#68746f]">
                <CheckCircle2 size={11} className="text-[#008d69]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
