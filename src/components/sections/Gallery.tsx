'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/gallery/gallery1.jpg',
    alt: 'Colorful ice cream cones',
    caption: 'Our signature triple scoop cones',
  },
  {
    src: '/images/gallery/gallery2.jpg',
    alt: 'Ice cream sundae',
    caption: 'Deluxe hot fudge sundae',
  },
  {
    src: '/images/gallery/gallery3.jpg',
    alt: 'Ice cream shop interior',
    caption: 'Our welcoming shop interior',
  },
  {
    src: '/images/gallery/gallery4.jpg',
    alt: 'Ice cream making',
    caption: 'Handcrafted with love',
  },
  {
    src: '/images/gallery/gallery5.jpg',
    alt: 'Birthday party at the shop',
    caption: 'Creating sweet memories',
  },
  {
    src: '/images/gallery/gallery6.jpg',
    alt: 'Ice cream flavors display',
    caption: 'Over 40 unique flavors',
  },
  {
    src: '/images/gallery/gallery7.jpg',
    alt: 'Milkshakes',
    caption: 'Thick and delicious milkshakes',
  },
  {
    src: '/images/gallery/gallery8.jpg',
    alt: 'Kid enjoying ice cream',
    caption: 'Joy in every scoop',
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 heading-gradient inline-block">Photo Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a peek at our delicious treats and happy customers. Every scoop tells a story!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
              onClick={() => setActiveImage(index)}
            >
              <div className="aspect-square relative bg-gray-200">
                {/* Optimized image with placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                  <span className="text-5xl z-10 opacity-50">🍦</span>
                </div>
                {/* Use stock images until real ones are available */}
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-opacity duration-700 opacity-0 data-[loaded=true]:opacity-100 z-20"
                  data-loaded="false"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).setAttribute('data-loaded', 'true');
                  }}
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white">
                <p className="text-sm text-gray-600">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {activeImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="galleryModalTitle"
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden" 
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-gray-200">
                {/* Modal image with optimized loading */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                  <span className="text-8xl opacity-50">🍦</span>
                </div>
                {/* Use stock images until real ones are available */}
                <Image 
                  src={galleryImages[activeImage].src}
                  alt={galleryImages[activeImage].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain z-20"
                  priority
                />
              </div>
              <div className="p-4">
                <p id="galleryModalTitle" className="text-lg font-medium">{galleryImages[activeImage].caption}</p>
                <p className="text-gray-600">{galleryImages[activeImage].alt}</p>
              </div>
              <button 
                className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full"
                onClick={() => setActiveImage(null)}
                aria-label="Close gallery view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Gallery navigation */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-4">
                <button 
                  className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(prev => prev === 0 ? galleryImages.length - 1 : prev! - 1);
                  }}
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(prev => prev === galleryImages.length - 1 ? 0 : prev! + 1);
                  }}
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Instagram Link */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">See more delicious treats on our Instagram!</p>
          <a 
            href="https://www.instagram.com/jaysicecreamshop?igsh=MTVxbDMzN3B5eGxzNQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            aria-label="Follow us on Instagram"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
            <span>Follow Us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
} 