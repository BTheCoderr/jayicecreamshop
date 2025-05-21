'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    { number: "40+", label: "Unique Flavors", color: "bg-primary", icon: "🍦", delay: 0 },
    { number: "10+", label: "Special Toppings", color: "bg-secondary", icon: "🍫", delay: 200 },
    { number: "5+", label: "Warm Treats", color: "bg-accent", icon: "🧇", delay: 400 },
    { number: "100%", label: "Customer Joy", color: "bg-primary", icon: "😊", delay: 600 },
  ];

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 heading-gradient inline-block">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From a simple idea to Connecticut's favorite ice cream destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image column - for now, using a placeholder */}
          <div className="rounded-lg overflow-hidden shadow-xl bg-white p-4">
            <div className="aspect-square relative bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-7xl">🍦</span>
              <div className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                Est. 2022
              </div>
            </div>
          </div>

          {/* Content column */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Sweet Beginnings</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Jay's Ice Cream Shop was born out of a passion for creating joy through delicious, handcrafted ice cream. Founded in 2022 by Jay Smith, our shop quickly became a beloved destination for ice cream lovers across Connecticut.
              </p>
              <p>
                What started as a small family operation has grown into a community favorite, but our commitment to quality has never changed. We still make our ice cream in small batches, using only the finest ingredients and locally-sourced dairy.
              </p>
              <p>
                Our shop is more than just a place to enjoy a scoop—it's where families create memories, friends gather, and the community comes together. We're proud to be a part of your special moments and everyday treats.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: "Quality", description: "Premium ingredients, handcrafted with care." },
                { title: "Community", description: "Proudly serving Connecticut since 2022." },
                { title: "Innovation", description: "Always creating new, exciting flavors." },
                { title: "Joy", description: "Making people smile, one scoop at a time." }
              ].map((value, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Jay Smith", role: "Founder & Head Chef", quote: "Ice cream is happiness condensed." },
              { name: "Sarah Jones", role: "Store Manager", quote: "Creating sweet experiences every day." },
              { name: "Mike Johnson", role: "Flavor Specialist", quote: "Life is better with sprinkles on top." },
              { name: "Emily Davis", role: "Customer Experience", quote: "Serving smiles with every scoop." }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {/* This would be replaced with actual team photos */}
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 