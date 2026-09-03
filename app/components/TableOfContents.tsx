"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/content";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState(headings[0]?.slug ?? "");

  useEffect(() => {
    const targets = headings
      .map((h) => document.getElementById(h.slug))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      // Band starts just below the fixed nav (matching the 144px
      // scroll-margin-top headings land at) so the clicked/current
      // heading actually falls inside the detection zone.
      { rootMargin: "-150px 0px -70% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-28 self-start">
      <span className="font-mono text-xs text-keyword-dim">{"// on-this-page"}</span>
      <ul className="mt-3 space-y-2.5 border-l border-border pl-4">
        {headings.map((h) => {
          const isActive = active === h.slug;
          return (
            <li key={h.slug} className={h.depth === 3 ? "pl-3" : ""}>
              <a
                href={`#${h.slug}`}
                className={`text-sm transition-colors leading-snug block ${
                  isActive ? "text-heading font-semibold" : "text-text-soft hover:text-heading"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
