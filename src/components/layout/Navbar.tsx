'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <div className="flex items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
                {/* Logo will be placed here when available */}
                <span className="text-3xl md:text-4xl">🍦</span>
              </div>
              <div className="ml-2">
                <span className="font-bold text-xl md:text-2xl text-primary">Jay's</span>
                <br />
                <span className="text-sm md:text-base">Ice Cream Shop CT</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="#menu" className="hover:text-primary transition">Menu</Link>
          <Link href="#about" className="hover:text-primary transition">About</Link>
          <Link href="#contact" className="hover:text-primary transition">Contact</Link>
          <a 
            href="#order" 
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition"
          >
            Order Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#menu" 
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="#about" 
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="#order" 
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 