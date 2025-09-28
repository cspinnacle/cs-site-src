import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSlider from './components/HeroSlider';

export const metadata: Metadata = {
  title: 'Computer Science at Pinnacle Academy',
  description: 'Class hub for students and families — newsletters, articles, and resources.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-16 pt-20 lg:pt-16">
        {/* Hero Section */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-16 mb-16">
          <header className="max-w-4xl mx-auto">
            <HeroSlider />
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight text-center">
              CS at Pinnacle Academy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-center">
              Hi! I&apos;m Mr. Myradov. This site is our central hub for announcements, 
              weekly newsletters, tutorials, and class resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/newsletters/" 
                className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                View Newsletters
              </Link>
              <Link 
                href="/articles/" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                Browse Articles
              </Link>
            </div>
          </header>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Weekly Newsletters - Large Card */}
          <div className="lg:col-span-2">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 h-full hover:border-gray-300 dark:hover:border-gray-700 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    Weekly Newsletters
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Stay up to date with class progress
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Latest Updates</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Weekly assignments, announcements, and class progress</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Updated weekly</span>
                  <Link href="/newsletters/" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                    View all newsletters
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Articles & Tutorials */}
          <div className="space-y-8">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 transition-colors">
                    Articles & Tutorials
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Programming guides and explanations
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <Link href="/articles/" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Browse tutorials
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Class Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Instructor</span>
                  <span className="font-medium text-gray-900 dark:text-white text-sm">Mr. Myradov</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Subject</span>
                  <span className="font-medium text-gray-900 dark:text-white text-sm">Computer Science</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">School</span>
                  <span className="font-medium text-gray-900 dark:text-white text-sm">Pinnacle Academy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Weekly Updates</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Regular newsletters with assignments and progress</p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Coding Tutorials</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Step-by-step programming guides and examples</p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Reference</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Easy-to-find resources and class materials</p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Always Updated</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Fresh content and announcements regularly</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Computer Science @ Pinnacle Academy - Updated 2025
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/newsletters/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                Newsletters
              </Link>
              <Link href="/articles/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                Articles
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}