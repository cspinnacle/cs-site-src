"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface CarouselItem {
  slug: string;
  href: string;
  title: string;
  kind: "article" | "newsletter";
  date?: string;
  meta?: string;
  excerpt: string;
}

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    const card = track?.children[i] as HTMLElement | undefined;
    if (track && card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((c, i) => {
        const dist = Math.abs(c.offsetLeft - track.offsetLeft - track.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  if (items.length === 0) return null;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="group snap-start shrink-0 w-[260px] sm:w-[300px] border border-border rounded-[10px] bg-white p-6 hover:-translate-y-1 hover:border-keyword hover:shadow-[0_16px_32px_-18px_rgba(22,35,61,0.25)] transition-all"
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wide ${
                item.kind === "article" ? "text-keyword-dim" : "text-string"
              }`}
            >
              {item.kind === "article" ? "Article" : "Newsletter"}
            </span>
            <h3 className="text-lg font-semibold text-ink mt-2 mb-2 leading-snug group-hover:text-keyword-dim transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-text-soft line-clamp-3">{item.excerpt}</p>
            <span className="block text-xs text-comment mt-4">
              {item.date &&
                new Date(item.date + "T00:00:00").toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              {item.meta ? ` · ${item.meta}` : ""}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-keyword" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            aria-label="Previous"
            disabled={active === 0}
            className="w-9 h-9 rounded-full border border-border text-ink flex items-center justify-center hover:border-keyword disabled:opacity-30 disabled:hover:border-border transition-colors"
          >
            &larr;
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
            aria-label="Next"
            disabled={active === items.length - 1}
            className="w-9 h-9 rounded-full border border-border text-ink flex items-center justify-center hover:border-keyword disabled:opacity-30 disabled:hover:border-border transition-colors"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
