import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Custom components for enhanced display
const CurriculumCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-4 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

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
  
  // Icons for curriculum cards
  const icons = {
    foundations: (
      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    web: (
      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    advanced: (
      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    projects: (
      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 py-16 pt-20 lg:pt-16">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {classInfo.frontmatter.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Essential information about the course structure, curriculum, and policies
          </p>
          
          {classInfo.frontmatter.lastUpdated && (
            <div className="inline-flex items-center mt-6 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
              <svg className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated: {new Date(classInfo.frontmatter.lastUpdated).toLocaleDateString()}
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mb-12"></div>
        
        {/* Table of Contents */}
        <div className="lg:flex gap-8 mb-12">
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <div className="sticky top-24 border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
              <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Quick Navigation
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#course-overview" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Course Overview
                  </a>
                </li>
                <li>
                  <a href="#instructor-information" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Instructor Information
                  </a>
                </li>
                <li>
                  <a href="#class-schedule" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Class Schedule
                  </a>
                </li>
                <li>
                  <a href="#curriculum" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#grading-policy" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Grading Policy
                  </a>
                </li>
                <li>
                  <a href="#required-materials" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Required Materials
                  </a>
                </li>
                <li>
                  <a href="#expectations" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Expectations
                  </a>
                </li>
                <li>
                  <a href="#support-resources" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Support Resources
                  </a>
                </li>
              </ul>
              
              {/* Key highlights cards */}
              <div className="mt-8 space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
                  <div className="flex items-center mb-2">
                    <img src="/images/class-info/schedule.svg" alt="Schedule" className="w-6 h-6 mr-2" />
                    <span className="font-medium text-blue-700 dark:text-blue-400">Key Dates</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Classes: Mon/Wed/Fri 9:00-10:30 AM</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Office Hours: Tue/Thu 3:00-4:00 PM</p>
                </div>
                
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-lg">
                  <div className="flex items-center mb-2">
                    <img src="/images/class-info/curriculum.svg" alt="Curriculum" className="w-6 h-6 mr-2" />
                    <span className="font-medium text-indigo-700 dark:text-indigo-400">Curriculum Focus</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300">• Programming Fundamentals</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">• Web Development</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">• Applied Projects</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            {/* Enhanced Content */}
            <article className="prose prose-lg max-w-none dark:prose-invert 
              prose-headings:text-gray-900 dark:prose-headings:text-white 
              prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:pb-2 prose-h2:mb-6
              prose-h3:text-xl prose-h3:font-semibold prose-h3:text-blue-700 dark:prose-h3:text-blue-400
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-ul:my-6 prose-li:my-2
              prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{
                  h2: ({node, ...props}) => {
                    if (props.id === 'curriculum') {
                      return (
                        <>
                          <h2 {...props} />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <CurriculumCard 
                              title="Foundations of Programming" 
                              description="Introduction to computational thinking, basic programming concepts, and data structures"
                              icon={icons.foundations}
                            />
                            <CurriculumCard 
                              title="Web Development" 
                              description="HTML, CSS, JavaScript fundamentals, and building interactive web applications"
                              icon={icons.web}
                            />
                            <CurriculumCard 
                              title="Advanced Programming" 
                              description="Object-oriented programming, algorithms, and software development practices"
                              icon={icons.advanced}
                            />
                            <CurriculumCard 
                              title="Projects & Applications" 
                              description="Collaborative coding projects, mobile app development, and game development basics"
                              icon={icons.projects}
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
                            <div className="grow bg-blue-100 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Assignments & Labs</div>
                            </div>
                            <div className="grow bg-green-100 dark:bg-green-900/20 rounded-lg p-4 text-center">
                              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">30%</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Projects</div>
                            </div>
                            <div className="grow bg-amber-100 dark:bg-amber-900/20 rounded-lg p-4 text-center">
                              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">20%</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Quizzes & Tests</div>
                            </div>
                            <div className="grow bg-purple-100 dark:bg-purple-900/20 rounded-lg p-4 text-center">
                              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10%</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Participation</div>
                            </div>
                          </div>
                        </>
                      );
                    }
                    
                    return <h2 {...props} />;
                  },
                  h3: ({node, ...props}) => {
                    // Special styling for curriculum quarters
                    if (props.children && typeof props.children === 'string' && 
                        props.children.toString().includes('Quarter')) {
                      return (
                        <h3 
                          {...props} 
                          className="mt-8 mb-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white px-4 py-2 rounded-lg"
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
            <div className="mt-12 border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center mr-4 mb-4 sm:mb-0">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                    Questions about the class?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Feel free to reach out to Mr. Myradov during office hours or by email.
                  </p>
                  <a href="mailto:instructor@pinnacleacademy.edu" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Instructor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}