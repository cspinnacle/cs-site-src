import type { Metadata } from "next";
import Link from "next/link";
import Hero from "./components/Hero";
import StatGrid from "./components/StatGrid";
import EventCard from "./components/EventCard";
import CurriculumPath from "./components/CurriculumPath";
import Carousel, { CarouselItem } from "./components/Carousel";
import Reveal from "./components/Reveal";
import { getContentItems, excerpt, ContentItem, EventItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "CS @ Pinnacle Academy",
  description:
    "Class hub for Computer Science at Pinnacle Academy — newsletters, articles, and class info for Grades 6–11.",
};

export default async function HomePage() {
  const events = (getContentItems("events") as EventItem[]).sort(
    (a, b) => (a.eventDate > b.eventDate ? 1 : -1)
  );

  const articles = getContentItems("articles") as ContentItem[];
  const newsletters = getContentItems("newsletters") as ContentItem[];
  const feed: CarouselItem[] = [
    ...articles.map((a) => ({
      slug: `article-${a.slug}`,
      href: `/articles/${a.slug}`,
      title: a.title,
      kind: "article" as const,
      date: a.date,
      meta: a.category,
      excerpt: excerpt(a.content),
    })),
    ...newsletters.map((n) => ({
      slug: `newsletter-${n.slug}`,
      href: `/newsletters/${n.slug}`,
      title: n.title,
      kind: "newsletter" as const,
      date: n.date,
      meta: typeof n.week === "number" ? `Week ${n.week}` : undefined,
      excerpt: excerpt(n.content),
    })),
  ]
    .sort((a, b) => ((a.date || "") > (b.date || "") ? -1 : 1))
    .slice(0, 8);

  return (
    <>
      <Hero />

      <StatGrid
        stats={[
          { value: 6, label: "grades taught" },
          { value: 6, label: "distinct courses" },
          { value: 4, suffix: "x", label: "AP CSA meets weekly" },
          { value: 0, isNew: true, label: "AI integration, grades 6\u20139" },
        ]}
      />

      {/* EVENTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="max-w-xl mb-12">
            <span className="font-mono text-xs text-keyword-dim inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-string inline-block" />
              {"// whats-happening"}
            </span>
            <h2 className="text-3xl font-semibold">Upcoming events</h2>
            <p className="text-text-soft mt-3.5">
              A running log of what&apos;s next in class &mdash; field trips,
              deadlines, and speakers.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {events.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="py-20 bg-paper-2">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="max-w-xl mb-12">
            <span className="font-mono text-xs text-keyword-dim inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-string inline-block" />
              {"// latest"}
            </span>
            <h2 className="text-3xl font-semibold">Fresh off the feed</h2>
            <p className="text-text-soft mt-3.5">
              The newest articles and newsletters, straight from the site&apos;s
              content folder.
            </p>
          </Reveal>
          <Reveal>
            <Carousel items={feed} />
          </Reveal>
        </div>
      </section>

      {/* CURRICULUM PATH */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="max-w-xl mb-12">
            <span className="font-mono text-xs text-keyword-dim inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-string inline-block" />
              {"// the-progression"}
            </span>
            <h2 className="text-3xl font-semibold">
              One program, six grades, one path
            </h2>
            <p className="text-text-soft mt-3.5">
              Every course builds directly on the last &mdash; the same
              reason we can go from Karel&apos;s grid world to a real
              AI-powered app in six years.
            </p>
          </Reveal>
          <Reveal>
            <CurriculumPath />
          </Reveal>
          <Reveal className="text-center mt-12">
            <Link
              href="/class-info/#curriculum"
              className="inline-flex items-center px-6 py-3 rounded-lg border-[1.5px] border-border-dark text-ink font-semibold hover:border-keyword transition-colors"
            >
              See the full curriculum &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="py-20 bg-paper-2">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="max-w-xl mb-12">
            <span className="font-mono text-xs text-keyword-dim inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-string inline-block" />
              {"// explore"}
            </span>
            <h2 className="text-3xl font-semibold">
              Everything lives in three places
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                href: "/class-info/",
                tag: "class-info",
                title: "Class Info",
                desc: "Schedule, grading philosophy, classroom rules, the SIS portal, and clubs — the whole syllabus in one page.",
              },
              {
                href: "/newsletters/",
                tag: "newsletters",
                title: "Newsletters",
                desc: "Short weekly updates on what each grade is building right now.",
              },
              {
                href: "/articles/",
                tag: "articles",
                title: "Articles",
                desc: "Plain-language explainers on the concepts we cover — for students and curious parents alike.",
              },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 0.08}>
                <Link
                  href={c.href}
                  className="block h-full border border-border rounded-[10px] bg-white p-7 hover:-translate-y-1 hover:border-keyword hover:shadow-[0_16px_32px_-18px_rgba(22,35,61,0.25)] transition-all"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-keyword-dim inline-block mb-3.5">
                    {c.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-ink mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-text-soft">{c.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
