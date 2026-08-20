"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

type Stat = { value: number; suffix?: string; label: string; isNew?: boolean };

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-ink-2 border-y border-border-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center py-9 px-5 border-r border-b md:border-b-0 border-border-dark last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
          >
            <div className="font-mono text-3xl text-white font-semibold">
              {s.isNew ? (
                <span className="text-string">NEW</span>
              ) : (
                <Counter value={s.value} suffix={s.suffix} />
              )}
            </div>
            <div className="text-sm text-comment mt-1.5">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
