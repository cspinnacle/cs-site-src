'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    // Handle initial page load with hash
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # symbol
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Delay to ensure the page has loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    }
  }, []);

  return null; // This component doesn't render anything
}