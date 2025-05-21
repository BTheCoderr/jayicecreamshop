'use client';

import { useState } from 'react';
import Image from 'next/image';

const featuredFlavors = [
  {
    name: 'Flavor of the Month: Blueberry Cheesecake',
    description: 'Creamy cheesecake ice cream with blueberry swirls and graham cracker pieces.',
    color: 'bg-[#8a6fd1]',
  },
  {
    name: 'Customer Favorite: Cookie Monster',
    description: 'Blue vanilla ice cream packed with chocolate chip cookies, Oreo pieces, and fudge swirls.',
    color: 'bg-[#4a90e2]',
  },
  {
    name: 'Staff Pick: Mint Chocolate Chip',
    description: 'Refreshing mint ice cream with dark chocolate chips throughout.',
    color: 'bg-[#50c878]',
  },
  {
    name: 'New Arrival: Caramel Pretzel Crunch',
    description: 'Salted caramel ice cream with chocolate-covered pretzel pieces and caramel swirl.',
    color: 'bg-[#d4a256]',
  },
];

export default function FeaturedFlavors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFlavor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredFlavors.length);
  };

  const prevFlavor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredFlavors.length) % featuredFlavors.length);
  };

  const currentFlavor = featuredFlavors[currentIndex];

  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Flavors</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Try our special flavors that rotate throughout the season!
          </p>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className={`rounded-xl p-8 md:p-12 ${currentFlavor.color} text-white shadow-lg`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentFlavor.name}</h3>
            <p className="text-lg mb-6">{currentFlavor.description}</p>
            
            <div className="flex justify-center mt-8">
              {/* Ice cream scoop illustration */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/30 flex items-center justify-center">
                <span className="text-4xl md:text-5xl">🍦</span>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevFlavor}
              className="bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Previous flavor"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {featuredFlavors.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to flavor ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextFlavor}
              className="bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Next flavor"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 