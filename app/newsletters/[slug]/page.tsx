import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getContentItems, getContentItem, ContentItem } from "@/lib/content";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const newsletters = getContentItems("newsletters") as ContentItem[];
  return newsletters.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const newsletter = getContentItem("newsletters", slug) as ContentItem;
  if (!newsletter) return { title: "Newsletter Not Found" };
  return {
    title: `${newsletter.title} — CS @ Pinnacle Academy`,
    description: `Weekly newsletter: ${newsletter.title}`,
  };
}

export default async function NewsletterPage({ params }: Props) {
  const { slug } = await params;
  const newsletter = getContentItem("newsletters", slug) as ContentItem;
  if (!newsletter) notFound();

  return (
    <>
      <div className="bg-ink text-white pt-[110px] pb-11">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/newsletters/"
            className="font-mono text-sm text-comment hover:text-white inline-flex items-center gap-1.5 mb-6"
          >
            &larr; back to newsletters
          </Link>
          <div className="flex items-center gap-3 mb-3 flex-wrap text-xs text-comment">
            {typeof newsletter.week === "number" && <span>week: {newsletter.week}</span>}
            {newsletter.date && (
              <span>
                {new Date(newsletter.date + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            )}
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-semibold">{newsletter.title}</h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-14 prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
          {newsletter.content}
        </ReactMarkdown>
      </article>
    </>
  );
}
