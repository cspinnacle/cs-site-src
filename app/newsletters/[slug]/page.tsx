import type { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getContentItems, getContentItem } from '@/lib/content';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const newsletters = getContentItems('newsletters');
  return newsletters.map((newsletter) => ({
    slug: newsletter.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const newsletter = getContentItem('newsletters', slug);
  
  if (!newsletter) {
    return {
      title: 'Newsletter Not Found',
    };
  }

  return {
    title: `${newsletter.title} - CS Newsletter`,
    description: `Weekly newsletter: ${newsletter.title}`,
  };
}

export default async function NewsletterPage({ params }: Props) {
  const { slug } = await params;
  const newsletter = getContentItem('newsletters', slug);

  if (!newsletter) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-20 lg:pt-16">
        <div className="mb-12">
          <Link href="/newsletters/" className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Newsletters
          </Link>
          
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              {newsletter.week && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Week {newsletter.week}
                </span>
              )}
              {newsletter.date && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(newsletter.date).toLocaleDateString()}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {newsletter.title}
            </h1>
          </div>
        </div>

        <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 prose-code:text-pink-600">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {newsletter.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}