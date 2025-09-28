import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const metadata: Metadata = {
  title: 'Class Information - CS at Pinnacle Academy',
  description: 'Class information, curriculum, and policies for Computer Science at Pinnacle Academy.',
};

async function getClassInfo() {
  const filePath = path.join(process.cwd(), 'content', 'info', 'class-info.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    frontmatter: data,
    content,
  };
}

export default async function ClassInfoPage() {
  const classInfo = await getClassInfo();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-20 lg:pt-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {classInfo.frontmatter.title}
          </h1>
          
          {classInfo.frontmatter.lastUpdated && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {new Date(classInfo.frontmatter.lastUpdated).toLocaleDateString()}
            </p>
          )}
        </div>
        
        <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 prose-code:text-pink-600">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {classInfo.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}