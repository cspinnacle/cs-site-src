"use client";

import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import type { EventItem } from "@/lib/content";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return { day: d.getDate(), month: d.toLocaleDateString("en-US", { month: "short" }) };
}

export default function EventCard({ event, index }: { event: EventItem; index: number }) {
  const { day, month } = formatDate(event.eventDate);
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex gap-5 border border-border rounded-[10px] bg-white p-5"
    >
      <div className="text-center shrink-0 min-w-[56px]">
        <div className="text-2xl font-bold text-ink leading-none">{day}</div>
        <div className="text-xs text-comment uppercase tracking-wide mt-1">{month}</div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-ink mb-1">
          {event.title}
          {event.sample && (
            <span className="ml-2 font-body text-xs text-rose align-middle">&middot; sample</span>
          )}
        </h3>
        <div className="text-sm text-text-soft prose-p:my-0">
          <ReactMarkdown>{event.content}</ReactMarkdown>
        </div>
        <span className="block text-xs text-comment mt-2">
          Posted {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
      </div>
    </motion.article>
  );
}
