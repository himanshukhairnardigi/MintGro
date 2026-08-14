"use client";

import { motion } from "motion/react";
import { Smartphone, Monitor, Tablet } from "lucide-react";

export default function Experience() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">See it in action</p>
          <h2 className="section-title mt-4">Experience Mintgro</h2>
          <p className="mt-4 text-sm leading-6 text-[#747e79]">
            One connected experience across the devices your team already uses.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative rounded-[22px] border border-[#dfe7e3] bg-[#f3f7f5] p-4 shadow-[0_25px_80px_rgba(30,70,55,.12)]">
            <div className="rounded-xl border border-[#dfe7e3] bg-white p-3">
              <div className="flex items-center gap-2 border-b border-[#edf0ef] pb-3">
                <span className="h-2 w-2 rounded-full bg-[#ff8077]" />
                <span className="h-2 w-2 rounded-full bg-[#f4c85b]" />
                <span className="h-2 w-2 rounded-full bg-[#55bd8f]" />
                <span className="ml-3 h-5 flex-1 rounded bg-[#f4f6f5]" />
              </div>

              <div className="grid min-h-[300px] grid-cols-[110px_1fr] gap-4 pt-4">
                <div className="hidden rounded-lg bg-[#f4f8f6] p-3 sm:block">
                  {["Overview", "Customers", "Sales", "Reports", "Settings"].map((x) => (
                    <div key={x} className="mb-2 rounded px-2 py-2 text-[9px] text-[#66716c]">
                      {x}
                    </div>
                  ))}
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Revenue", "Customers", "Growth"].map((x, i) => (
                      <div key={x} className="rounded-lg border border-[#e6ebe8] p-3">
                        <div className="text-[8px] text-[#909a95]">{x}</div>
                        <div className="mt-2 text-sm font-bold text-[#315449]">
                          {i === 0 ? "₹84.2L" : i === 1 ? "2,481" : "+24.8%"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 h-52 rounded-lg bg-[#f7faf9] p-4">
                    <div className="flex h-full items-end gap-2">
                      {[32, 43, 39, 58, 52, 66, 62, 74, 70, 82, 78, 91].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * .03 }}
                          className="flex-1 rounded-t bg-[#7ac7ad]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-5 hidden w-36 rounded-xl border border-[#dfe7e3] bg-white p-2 shadow-xl sm:block">
              <div className="rounded-lg bg-[#f2f7f5] p-3">
                <Smartphone size={15} className="text-[#008d69]" />
                <div className="mt-3 h-16 rounded bg-white" />
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-5 text-[10px] text-[#88928d]">
            <span className="flex items-center gap-1"><Monitor size={13} /> Desktop</span>
            <span className="flex items-center gap-1"><Tablet size={13} /> Tablet</span>
            <span className="flex items-center gap-1"><Smartphone size={13} /> Mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
}
