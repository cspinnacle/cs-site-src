import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { getContentItems, slugifyCategory, ContentItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Articles — CS @ Pinnacle Academy",
  description: "Plain-language tutorials and concept explainers for students and families.",
};

export default function ArticlesPage() {
  const articles = getContentItems("articles") as ContentItem[];

  return (
    <>
      <div className="bg-ink text-white pt-[110px] pb-11">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">Articles &amp; Tutorials</h1>
          <p className="max-w-xl mt-3.5 text-[#B9C4DC]">
            Programming guides and plain-language explainers — written for
            students, but readable by anyone curious.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {articles.length === 0 ? (
            <p className="text-text-soft text-center py-14">
              No articles yet. Check back soon!
            </p>
          ) : (
            <div className="border-t border-border">
              {articles.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.04}>
                  <Link
                    href={`/articles/${a.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-4 px-2 -mx-2 border-b border-border hover:bg-paper-2 transition-colors"
                  >
                    <h2 className="text-heading group-hover:text-keyword-dim transition-colors">
                      {a.title}
                    </h2>
                    <span className="sm:ml-auto flex items-center gap-3 text-xs text-comment whitespace-nowrap">
                      {a.category && <span>category: {slugifyCategory(a.category)}</span>}
                      {a.date && (
                        <span>
                          {new Date(a.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
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
