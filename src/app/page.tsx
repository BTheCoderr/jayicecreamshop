'use client';

import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Menu from '../components/sections/Menu';
import Gallery from '../components/sections/Gallery';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
