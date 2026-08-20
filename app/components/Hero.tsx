"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Terminal from "./Terminal";
import DecryptText from "./DecryptText";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65, 1], shouldReduceMotion ? [1, 1, 1] : [1, 1, 0.25]);
  const terminalY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "10%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink text-white pt-16 pb-20">
      <motion.div style={{ y: gridY }} className="hero-grid-bg absolute inset-0" aria-hidden />
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <span className="inline-flex items-center gap-2 font-mono text-xs text-[#8FE0DA] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-string inline-block" />
          <DecryptText text="// grades 6–11 · 2026–2027" />
        </span>
        <div className="grid md:grid-cols-2 gap-14 items-center mt-4">
          <div>
            <h1 className="text-white text-[2.4rem] md:text-[3.4rem] leading-[1.08] font-semibold">
              We teach kids to think
              <br />
              like{" "}
              <em className="italic text-string">
                <DecryptText text="builders." delay={0.5} />
              </em>
            </h1>
            <p className="text-[#B9C4DC] text-lg max-w-md mt-5 mb-8">
              Six courses, one throughline: take an idea, break it into
              steps, and ship something that works &mdash; in Python,
              JavaScript, Java, and this year, AI.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-9">
              <Link
                href="/class-info/"
                className="inline-flex items-center px-6 py-3.5 rounded-lg bg-string text-ink font-semibold hover:-translate-y-0.5 transition-transform"
              >
                View class info
              </Link>
              <Link
                href="/newsletters/"
                className="inline-flex items-center px-6 py-3.5 rounded-lg border-[1.5px] border-white/35 text-white font-semibold hover:border-white hover:-translate-y-0.5 transition-all"
              >
                Read the newsletter
              </Link>
            </div>
            <p className="font-mono text-sm text-comment">
              Taught by <strong className="text-[#D7DEEC]">Mr. Myradov</strong> &middot;
              Computer Lab &middot; Pinnacle Academy
            </p>
          </div>
          <motion.div style={{ y: terminalY }}>
            <Terminal />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
