import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getContentItems, getContentItem, slugifyCategory, ContentItem } from "@/lib/content";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getContentItems("articles") as ContentItem[];
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getContentItem("articles", slug) as ContentItem;
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} — CS @ Pinnacle Academy`,
    description: article.title,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getContentItem("articles", slug) as ContentItem;
  if (!article) notFound();

  return (
    <>
      <div className="bg-ink text-white pt-[110px] pb-11">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/articles/"
            className="font-mono text-sm text-comment hover:text-white inline-flex items-center gap-1.5 mb-6"
          >
            &larr; back to articles
          </Link>
          <div className="flex items-center gap-3 mb-3 flex-wrap text-xs text-comment">
            {article.category && <span>category: {slugifyCategory(article.category)}</span>}
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-semibold">{article.title}</h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-14 prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
          {article.content}
        </ReactMarkdown>
      </article>
    </>
  );
}
