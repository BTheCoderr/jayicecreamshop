import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with your actual shop image */}
              <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                <span className="text-6xl">🚐</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              Jay's Ice Cream Shop CT is where sweet memories are made. We're proud to serve up fun, flavor, and a whole lot of smiles across Connecticut.
            </p>
            <p className="text-lg mb-6">
              Whether you're grabbing a classic cone or exploring our specialty creations, there's always something new to try. Our commitment to quality means we use only the finest ingredients to create our delicious treats.
            </p>
            <p className="text-lg mb-8">
              From birthday parties to community events, we love being part of your special moments. Come taste the difference at Jay's Ice Cream Shop CT!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">40+</span>
                </div>
                <span className="font-medium">Unique Flavors</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-white font-bold">10+</span>
                </div>
                <span className="font-medium">Special Toppings</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-foreground font-bold">5+</span>
                </div>
                <span className="font-medium">Warm Treats</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 