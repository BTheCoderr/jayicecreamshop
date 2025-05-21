import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Menu from '../components/sections/Menu';
import FeaturedFlavors from '../components/sections/FeaturedFlavors';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedFlavors />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
