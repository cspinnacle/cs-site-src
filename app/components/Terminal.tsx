"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Tok = { t: string; c?: string };
type Line = Tok[];

const LINES: Line[] = [
  [{ t: "# pinnacle_academy/computer_science.py", c: "text-comment" }],
  [{ t: "" }],
  [{ t: "class ", c: "text-keyword" }, { t: "ComputerScience", c: "text-[#8FB2E8]" }, { t: ":" }],
  [{ t: "    def ", c: "text-keyword" }, { t: "teaches", c: "text-[#8FB2E8]" }, { t: "(self, grade):" }],
  [{ t: "        return", c: "text-keyword" }, { t: " {" }],
  [
    { t: '            "6-8":  [' },
    { t: '"Python"', c: "text-string" },
    { t: ", " },
    { t: '"JavaScript"', c: "text-string" },
    { t: ", " },
    { t: '"AI Literacy"', c: "text-string" },
    { t: "]," },
  ],
  [
    { t: '            "9":    [' },
    { t: '"AI Foundations"', c: "text-string" },
    { t: "]," },
  ],
  [
    { t: '            "10-11": [' },
    { t: '"AP Computer Science A"', c: "text-string" },
    { t: "]," },
  ],
  [{ t: "        }" }],
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleLines >= LINES.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 220);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="bg-[#0F1C33] border border-border-dark rounded-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0C1729] border-b border-border-dark">
        <span className="w-2.5 h-2.5 rounded-full bg-rose" />
        <span className="w-2.5 h-2.5 rounded-full bg-string" />
        <span className="w-2.5 h-2.5 rounded-full bg-keyword" />
        <span className="ml-2 font-mono text-xs text-comment">
          computer_science.py
        </span>
      </div>
      <div className="p-6 font-mono text-sm min-h-[230px] text-[#C9D4E8] whitespace-pre-wrap leading-relaxed">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            {line.length === 1 && line[0].t === "" ? (
              <>&nbsp;</>
            ) : (
              line.map((tok, j) => (
                <span key={j} className={tok.c}>
                  {tok.t}
                </span>
              ))
            )}
          </div>
        ))}
        {!done && <span className="caret" />}
        {done && <span className="caret" />}
      </div>
    </motion.div>
  );
}
