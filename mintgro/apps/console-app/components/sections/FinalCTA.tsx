import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-14">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-[#eafaf4] px-7 py-12 text-center sm:px-12">
          <div className="absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#75d9bb]/40 blur-3xl" />
          <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-[#a8c8ff]/40 blur-3xl" />

          <div className="relative">
            <p className="eyebrow">Ready to grow?</p>
            <h2 className="serif mt-4 text-3xl text-[#244d40] sm:text-4xl">
              Stay Ahead. Grow Smarter.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6e7974]">
              Build a simpler, more connected business with Mintgro.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#pricing" className="btn btn-green">
                Start Free Trial <ArrowRight size={13} />
              </a>
              <a href="#contact" className="btn btn-light">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
