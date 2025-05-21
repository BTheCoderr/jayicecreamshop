'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="mb-8 flex justify-center">
          {mounted && (
            <div className="relative w-32 h-32">
              <Image 
                src="/logo.JPG" 
                alt="Jay's Ice Cream Shop Logo"
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6 heading-gradient">Oops! Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          Looks like the ice cream you're looking for has melted away! Let's get you back to our delicious treats.
        </p>
        
        <div className="flex justify-center items-center gap-6">
          <Link 
            href="/"
            className="btn btn-primary"
          >
            Back to Home
          </Link>
          
          <Link 
            href="/#menu"
            className="btn bg-white border border-primary text-primary"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
} 