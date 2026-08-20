"use client";

import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);

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
      { rootMargin: "-30% 0px -55% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      ref={ref}
      className="sticky top-[64px] z-40 bg-paper/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-6xl mx-auto flex gap-6 overflow-x-auto px-6 py-3.5">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`font-mono text-xs whitespace-nowrap pb-1 border-b-2 transition-colors ${
              active === s.id
                ? "text-ink border-string"
                : "text-text-soft border-transparent hover:text-ink"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
