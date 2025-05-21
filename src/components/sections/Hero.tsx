import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/20 via-primary/10 to-background pt-10 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary">Cool Treats,</span> 
              <br />
              <span className="text-secondary">Warmer Vibes</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Welcome to Jay's Ice Cream Shop CT!
              <br />
              Over 40 flavors, floats, milkshakes & warmful delights!
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#menu" 
                className="inline-block bg-primary text-white font-medium rounded-full px-6 py-3 hover:bg-primary/90 transition shadow-md"
              >
                View Menu
              </a>
              <a 
                href="#contact" 
                className="inline-block bg-transparent border-2 border-primary text-primary font-medium rounded-full px-6 py-3 hover:bg-primary/10 transition"
              >
                Visit Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-64 md:h-96 w-full flex items-center justify-center">
              {/* Logo display with animation */}
              <div className="w-56 h-56 md:w-80 md:h-80 flex items-center justify-center animate-pulse">
                <div className="flex flex-col items-center">
                  <div className="text-8xl md:text-9xl mb-2 transform hover:scale-110 transition duration-300">🍦</div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary">Jay's</div>
                    <div className="text-lg md:text-xl text-secondary font-medium">ICE CREAM SHOP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-5 bg-accent rounded-full p-4 shadow-lg transform hover:scale-105 transition">
              <span className="text-foreground font-bold text-lg">40+ Flavors!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 105C96 90 192 60 288 50C384 40 480 50 576 55C672 60 768 60 864 65C960 70 1056 80 1152 75C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="var(--background)"/>
        </svg>
      </div>
    </section>
  );
} 