"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "teacher", label: "teacher" },
  { id: "curriculum", label: "curriculum" },
  { id: "schedule", label: "schedule" },
  { id: "homework", label: "homework" },
  { id: "classroom", label: "classroom" },
  { id: "connect", label: "stay-connected" },
  { id: "sis", label: "sis-portal" },
  { id: "attendance", label: "attendance" },
  { id: "support", label: "extra-help" },
  { id: "clubs", label: "clubs" },
];

export default function SubNav() {
  const [active, setActive] = useState("teacher");

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      // Band starts just below the fixed header + SubNav (matching the
      // 144px scroll-margin-top sections land at) so the clicked/current
      // section actually falls inside the detection zone.
      { rootMargin: "-150px 0px -70% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div className="fixed top-20 inset-x-4 md:inset-x-8 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-start xl:justify-center gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative shrink-0 font-mono text-xs whitespace-nowrap px-3.5 py-1.5 rounded-full transition-colors ${
                isActive
                  ? "text-white"
                  : "bg-paper/70 backdrop-blur-md border border-white/50 text-text-soft hover:text-heading hover:bg-paper/90"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="subnav-active-pill"
                  className="absolute inset-0 bg-ink rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{s.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
