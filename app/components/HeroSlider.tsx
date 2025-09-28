'use client';

import { useState, useEffect } from 'react';

// Define the slides for the slider
const slides = [
  {
    bgColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
    title: "Computer Science Education",
    description: "Learning to build the future at Pinnacle Academy",
    icon: (
      <svg className="w-32 h-32 text-white/20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L1 7l11 6 9-4.91V17h2V7M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    bgColor: "bg-gradient-to-r from-green-500 to-teal-600",
    title: "Coding Projects & Challenges",
    description: "Hands-on learning through creative problem solving",
    icon: (
      <svg className="w-32 h-32 text-white/20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3v2h1a2 2 0 012 2v4a2 2 0 002 2h2v-2H8v-5a2 2 0 00-2-2 2 2 0 002-2V5h2V3m6 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z" />
      </svg>
    ),
  },
  {
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-600",
    title: "Weekly Class Updates",
    description: "Stay on track with newsletters and resources",
    icon: (
      <svg className="w-32 h-32 text-white/20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14h-2v-4h2v4m0-6h-2V7h2v4z" />
      </svg>
    ),
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-10">
      {/* Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex items-center justify-center p-12 transition-opacity duration-1000 ${
              slide.bgColor
            } ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              {slide.icon}
            </div>
            
            <div className="text-center text-white relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                {slide.description}
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Previous/Next buttons */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}