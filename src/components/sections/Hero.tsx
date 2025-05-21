'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-pink-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="bg-white w-32 h-32 rounded-full p-4 shadow-xl flex items-center justify-center">
              {mounted && (
                <div className="w-24 h-24 relative animate-pulse-slow">
                  <Image 
                    src="/logo.JPG" 
                    alt="Jay's Ice Cream Shop Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-primary">Jay's</span>
            <span className="heading-gradient">Ice Cream Shop</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            Cool treats, warmer vibes — over 40 delicious flavors, handcrafted with love in Connecticut.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#menu" 
              className="btn btn-primary"
            >
              Explore Menu
            </Link>
            <Link 
              href="#contact" 
              className="btn bg-white border border-primary text-primary"
            >
              Find Us
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
            {[
              { number: "40+", label: "Flavors" },
              { number: "10+", label: "Toppings" },
              { number: "5+", label: "Warm Treats" },
              { number: "100%", label: "Joy" },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center mb-3">
                  <span className="text-3xl font-bold text-primary">{feature.number}</span>
                </div>
                <span className="text-gray-600">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,144C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 