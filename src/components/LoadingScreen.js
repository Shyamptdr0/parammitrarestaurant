'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      // Wait for slide up animation to complete before removing
      setTimeout(() => {
        setIsVisible(false);
      }, 800); // Match this with CSS transition duration
    }, 2000); // Hide after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-[#fffaf3] flex flex-col items-center justify-center z-50 transition-transform duration-700 ease-in-out ${
        isAnimatingOut ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="animate-bounce">
        <Image
          src="/logo.png"
          alt="Param Mitra Restaurant Logo"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32"
          priority
        />
      </div>
      <div className="mt-6 flex space-x-2">
        <div className="w-3 h-3 bg-[#7a2e1d] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-3 h-3 bg-[#7a2e1d] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-3 h-3 bg-[#7a2e1d] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <p className="mt-6 text-lg text-[#7a2e1d] font-medium">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
