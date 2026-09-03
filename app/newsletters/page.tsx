import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { getContentItems, ContentItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Newsletters — CS @ Pinnacle Academy",
  description: "Weekly class updates: assignments, announcements, and progress.",
};

export default function NewslettersPage() {
  const newsletters = getContentItems("newsletters") as ContentItem[];

  return (
    <>
      <div className="bg-ink text-white pt-[110px] pb-11">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">Newsletters</h1>
          <p className="max-w-xl mt-3.5 text-[#B9C4DC]">
            Short, regular updates on what each grade is building, due dates,
            and anything families should know.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {newsletters.length === 0 ? (
            <p className="text-text-soft text-center py-14">
              No newsletters yet. Check back soon!
            </p>
          ) : (
            <div className="border-t border-border">
              {newsletters.map((n, i) => (
                <Reveal key={n.slug} delay={i * 0.04}>
                  <Link
                    href={`/newsletters/${n.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-4 px-2 -mx-2 border-b border-border hover:bg-paper-2 transition-colors"
                  >
                    <h2 className="text-heading group-hover:text-keyword-dim transition-colors">
                      {n.title}
                    </h2>
                    <span className="sm:ml-auto flex items-center gap-3 text-xs text-comment whitespace-nowrap">
                      {typeof n.week === "number" && <span>week: {n.week}</span>}
                      {n.date && (
                        <span>
                          {new Date(n.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                      )}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
