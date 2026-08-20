"use client";

import { useEffect, useState } from "react";

const GLYPHS = "01!@#$%&*<>{}[]/\\";

function mask(text: string) {
  return text.replace(/\S/g, "0");
}

export default function DecryptText({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(() => mask(text));

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    let raf: ReturnType<typeof setTimeout>;
    const holdFrames = 6;
    const totalFrames = text.length + holdFrames;

    const tick = () => {
      frame++;
      const revealed = Math.max(0, frame - holdFrames);
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealed) return ch;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
      if (frame < totalFrames) {
        raf = setTimeout(tick, 32);
      }
    };

    const start = setTimeout(tick, delay * 1000);
    return () => {
      clearTimeout(start);
      clearTimeout(raf);
    };
  }, [text, delay]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
