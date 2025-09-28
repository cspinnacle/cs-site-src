import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
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

// Simple styled component for course topics
const TopicCard = ({ title, description }: { title: string; description: string }) => (
  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5">
    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
  </div>
);

export default async function ClassInfoPage() {
  const classInfo = await getClassInfo();
  
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {classInfo.frontmatter.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Essential information about the course structure, curriculum, and policies
          </p>
          
          {classInfo.frontmatter.lastUpdated && (
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Last updated: {new Date(classInfo.frontmatter.lastUpdated).toLocaleDateString()}
            </div>
          )}
        </header>
        
        <hr className="border-t border-gray-200 dark:border-gray-800 mb-8" />
        
        {/* Two-column layout */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <aside className="mb-8 lg:mb-0">
            <div className="sticky top-24 p-5 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Navigation</h2>
              <nav>
                <ul className="space-y-2">
                  <li><a href="#course-overview" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Course Overview</a></li>
                  <li><a href="#instructor-information" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Instructor Information</a></li>
                  <li><a href="#class-schedule" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Class Schedule</a></li>
                  <li><a href="#curriculum" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Curriculum</a></li>
                  <li><a href="#grading-policy" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Grading Policy</a></li>
                  <li><a href="#required-materials" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Required Materials</a></li>
                  <li><a href="#online-resources" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Online Resources</a></li>
                  <li><a href="#expectations" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Expectations</a></li>
                  <li><a href="#support-resources" className="text-blue-600 dark:text-blue-400 hover:underline block text-sm">Support Resources</a></li>
                </ul>
              </nav>
              
              {/* Key info card */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Key Information</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Classes:</strong> Mon/Wed/Fri 9:00-10:30 AM
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Office Hours:</strong> Tue/Thu 3:00-4:00 PM
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Instructor:</strong> Mr. Myradov
                </p>
              </div>
            </div>
          </aside>
          
          {/* Main content */}
          <main className="lg:col-span-3">
            <article className="prose prose-lg max-w-none dark:prose-invert 
              prose-headings:text-gray-900 dark:prose-headings:text-white 
              prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:pb-2 prose-h2:mb-4
              prose-h3:text-xl prose-h3:font-medium prose-h3:text-blue-700 dark:prose-h3:text-blue-400
              prose-p:text-gray-700 dark:prose-p:text-gray-300 
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-li:my-1">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{
                  h2: ({node, ...props}) => {
                    // Simple ID handling using rehype-slug
                    if (props.id === 'curriculum') {
                      return (
                        <>
                          <h2 {...props} />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <TopicCard 
                              title="Foundations of Programming" 
                              description="Introduction to computational thinking, basic programming concepts, and data structures"
                            />
                            <TopicCard 
                              title="Web Development" 
                              description="HTML, CSS, JavaScript fundamentals, and building interactive web applications"
                            />
                            <TopicCard 
                              title="Advanced Programming" 
                              description="Object-oriented programming, algorithms, and software development practices"
                            />
                            <TopicCard 
                              title="Projects & Applications" 
                              description="Collaborative coding projects, mobile app development, and game development basics"
                            />
                          </div>
                        </>
                      );
                    }
                    
                    if (props.id === 'grading-policy') {
                      return (
                        <>
                          <h2 {...props} />
                          <div className="flex flex-wrap gap-2 my-6">
                            <div className="grow border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Assignments & Labs</div>
                            </div>
                            <div className="grow border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">30%</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Projects</div>
                            </div>
                            <div className="grow border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">20%</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Quizzes & Tests</div>
                            </div>
                            <div className="grow border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">10%</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Participation</div>
                            </div>
                          </div>
                        </>
                      );
                    }
                    
                    return <h2 {...props} />;
                  },
                  h3: ({node, ...props}) => {
                    // Simple styling for quarters
                    if (props.children && 
                        typeof props.children === 'string' && 
                        props.children.includes('Quarter')) {
                      return (
                        <h3 
                          {...props} 
                          className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-3"
                        />
                      );
                    }
                    return <h3 {...props} />;
                  }
                }}
              >
                {classInfo.content}
              </ReactMarkdown>
            </article>
            
            {/* Contact Card */}
            <div className="mt-10 p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Questions about the class?</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Feel free to reach out to Mr. Myradov during office hours or by email.
              </p>
              <a href="mailto:instructor@pinnacleacademy.edu" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Contact Instructor
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}