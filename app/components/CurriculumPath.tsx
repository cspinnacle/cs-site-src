"use client";

import { motion } from "framer-motion";

const NODES = [
  { label: "6", title: "Intro to CS", sub: "CodeHS" },
  { label: "7", title: "Python + Turtle", sub: "CodeHS" },
  { label: "8", title: "Python Programming", sub: "CodeHS" },
  { label: "9", title: "AI Foundations", sub: "Code.org", current: true },
  { label: "10–11", title: "AP CS A", sub: "College Board" },
];

export default function CurriculumPath() {
  return (
    <div className="relative flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-2 pt-2">
      <div className="hidden sm:block absolute top-[27px] left-[5%] right-[5%] h-px bg-border" />
      {NODES.map((n, i) => (
        <motion.div
          key={n.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative z-10 flex-1 text-center"
        >
          <div
            className={`w-[54px] h-[54px] rounded-full flex items-center justify-center mx-auto mb-3.5 font-mono font-semibold text-sm border-[3px] border-paper ${
              n.current ? "bg-string text-ink" : "bg-ink text-white"
            }`}
          >
            {n.label}
          </div>
          <h4 className="text-sm font-semibold text-ink mb-1">{n.title}</h4>
          <div className="font-mono text-xs text-comment">{n.sub}</div>
        </motion.div>
      ))}
    </div>
  );
}
