import type { Metadata } from 'next';
import Link from 'next/link';
import { getContentItems } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Articles - CS at Pinnacle Academy',
  description: 'Tutorials, tech explainers, and programming guides.',
};

export default function ArticlesPage() {
  const articles = getContentItems('articles');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-20 lg:pt-16">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Articles & Tutorials
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Programming tutorials, tech explainers, and helpful coding guides.
          </p>
        </div>

        <div className="space-y-6">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No articles yet. Check back soon!</p>
            </div>
          ) : (
            articles.map((article) => (
              <div key={article.slug} className="border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {article.category && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                          {article.category}
                        </span>
                      )}
                      {article.date && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    <Link href={`/articles/${article.slug}`} className="hover:text-blue-600 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  
                  <Link href={`/articles/${article.slug}`} className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    Read article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}