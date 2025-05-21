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
        
        {/* Animated sprinkles */}
        {mounted && (
          <>
            <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-accent animate-float delay-300"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-primary animate-float delay-500"></div>
            <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-secondary animate-float delay-700"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-primary/70 animate-float delay-1000"></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="bg-white w-32 h-32 rounded-full p-4 shadow-xl flex items-center justify-center animate-pulse-slow">
              {mounted && (
                <div className="w-24 h-24 relative">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
            <span className="block text-primary mb-2">Jay's</span>
            <span className="heading-gradient">Ice Cream Shop</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mb-12 animate-fade-in-up">
            Cool treats, warmer vibes — over 40 delicious flavors, handcrafted with love in Connecticut.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
            <Link 
              href="#menu" 
              className="btn btn-primary flex items-center gap-2 text-lg"
            >
              <span>Browse Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              href="#contact" 
              className="btn bg-white border-2 border-primary text-primary flex items-center gap-2 text-lg hover:bg-primary/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Find Us</span>
            </Link>
            <Link 
              href="#contact" 
              className="btn btn-accent flex items-center gap-2 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
            {[
              { number: "40+", label: "Flavors", icon: "🍦" },
              { number: "10+", label: "Toppings", icon: "🍓" },
              { number: "5+", label: "Warm Treats", icon: "🥞" },
              { number: "100%", label: "Joy", icon: "😋" },
            ].map((feature, index) => (
              <div key={index} className={`flex flex-col items-center animate-fade-in-up`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-white w-20 h-20 rounded-full shadow-lg flex flex-col items-center justify-center mb-3 hover:scale-110 transition-transform group">
                  <span className="text-3xl font-bold text-primary group-hover:animate-wiggle">{feature.number}</span>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <span className="text-gray-600 font-medium">{feature.label}</span>
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