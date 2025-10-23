'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface SidebarNavigationProps {
  items: NavItem[];
}

export default function SidebarNavigation({ items }: SidebarNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  // Function to handle hash changes in URL
  useEffect(() => {
    // Initialize from URL hash if present
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
        // Slight delay to allow page to render before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Only check sections that exist in the DOM
      const sections = items
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      
      if (sections.length === 0) return;

      // Find the section currently most visible in the viewport
      let mostVisibleSection = sections[0];
      let maxVisibleHeight = 0;
      
      sections.forEach(section => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const headerOffset = 150; // Adjust based on header height
        
        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(rect.top, headerOffset);
        const visibleBottom = Math.min(rect.bottom, window.innerHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          mostVisibleSection = section;
        } else if (visibleHeight === maxVisibleHeight && rect.top < 0) {
          // If two sections have same visibility, prefer the one closer to top
          mostVisibleSection = section;
        }
      });
      
      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection.id);
      }
    };
    
    // Debounce the scroll event to improve performance
    let timeoutId: number | null = null;
    const debouncedHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(handleScroll, 100);
    };
    
    window.addEventListener('scroll', debouncedHandleScroll);
    handleScroll(); // Initialize on load
    
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll with offset for fixed header
      const yOffset = -100; // Adjust based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      
      // Update URL hash without causing a page jump
      if (typeof window !== 'undefined') {
        history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <div className="sticky top-24 border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        Quick Navigation
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center text-sm group w-full text-left
                ${activeSection === item.id 
                  ? 'text-blue-700 dark:text-blue-500 font-medium' 
                  : 'text-blue-600 dark:text-blue-400 hover:underline'}`}
            >
              <span 
                className={`w-1.5 h-1.5 rounded-full mr-2
                  ${activeSection === item.id
                    ? 'bg-blue-700 dark:bg-blue-500 opacity-100'
                    : 'bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100'} 
                  transition-opacity`}
              ></span>
              {item.label}
            </button>
          </li>
        ))}
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
  );
}