'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Icons for categories
const icons = {
  cups: "🍦",
  flavors: "🍨",
  toppings: "🍫",
  floats: "🥤",
  warmful: "🧇",
};

const categories = [
  { id: 'cups', name: 'Cups & Cones', icon: icons.cups },
  { id: 'flavors', name: 'Ice Cream Flavors', icon: icons.flavors },
  { id: 'toppings', name: 'Toppings', icon: icons.toppings },
  { id: 'floats', name: 'Milkshakes & Floats', icon: icons.floats },
  { id: 'warmful', name: 'Warmful Delights', icon: icons.warmful },
];

const menuItems = {
  cups: [
    { name: 'Kiddie', price: '$4.75', description: 'Small serving, perfect for kids', popular: false },
    { name: 'Small', price: '$5.70', description: 'Just the right amount of sweetness', popular: true },
    { name: 'Large', price: '$6.85', description: 'For serious ice cream lovers', popular: false },
    { name: 'Waffle Cone', price: '$8.35', description: 'Crispy waffle cone with your favorite flavor', popular: true },
  ],
  flavors: [
    { name: 'Strawberry', price: '', description: 'Fresh strawberry flavor', popular: true },
    { name: 'French Vanilla', price: '', description: 'Classic rich vanilla', popular: false },
    { name: 'Chocolate', price: '', description: 'Rich chocolate goodness', popular: true },
    { name: 'Brownie Batter', price: '', description: 'Gooey brownie batter swirls', popular: true },
    { name: 'Pistachio', price: '', description: 'Nutty pistachio flavor', popular: false },
    { name: 'Maple Walnut', price: '', description: 'Sweet maple with crunchy walnuts', popular: false },
    { name: 'Butter Pecan', price: '', description: 'Buttery with pecan pieces', popular: false },
    { name: 'Cake Batter', price: '', description: 'Sweet cake batter flavor', popular: true },
    { name: 'Oreo', price: '', description: 'Vanilla with Oreo cookie pieces', popular: true },
    { name: 'Coconut Cheesecake', price: '', description: 'Coconut with cheesecake chunks', popular: false },
    { name: 'Brownie', price: '', description: 'Chocolate with brownie chunks', popular: false },
    { name: 'Black Raspberry Choc Chip', price: '', description: 'Black raspberry with chocolate chips', popular: false },
    { name: 'Yogurt', price: '', description: 'Tangy frozen yogurt', popular: false },
    { name: 'Coconut Almond Bar', price: '', description: 'Coconut with almond pieces', popular: false },
    { name: 'Chocolate PB Cup', price: '', description: 'Chocolate with peanut butter cups', popular: true },
    { name: 'Strawberry Cheesecake', price: '', description: 'Strawberry with cheesecake chunks', popular: false },
    { name: 'Graham Central Station', price: '', description: 'Graham cracker flavored ice cream', popular: false },
    { name: 'Peanut Butter Oreo', price: '', description: 'Peanut butter with Oreo pieces', popular: false },
    { name: 'Birthday Cake', price: '', description: 'Birthday cake flavor with sprinkles', popular: true },
    { name: 'Moose Tracks', price: '', description: 'Vanilla with fudge and peanut butter cups', popular: false },
    { name: 'Cotton Candy', price: '', description: 'Sweet cotton candy flavor', popular: true },
    { name: 'Coffee', price: '', description: 'Rich coffee flavor', popular: false },
    { name: 'Mint Chocolate Chip', price: '', description: 'Mint with chocolate chips', popular: true },
    { name: 'Vanilla PB Swirl', price: '', description: 'Vanilla with peanut butter swirl', popular: false },
  ],
  floats: [
    { name: 'Root Beer Float', price: '$9.50', description: 'Classic root beer with vanilla ice cream', popular: true },
    { name: 'Milkshake', price: '$9.50', description: 'Any flavor, thick and creamy', popular: true },
  ],
  toppings: [
    { name: 'Rainbow Sprinkles', price: '$0.85', description: 'Colorful sprinkle mix', popular: true },
    { name: 'Chocolate Sprinkles', price: '$0.85', description: 'Chocolate sprinkle mix', popular: false },
    { name: 'Oreos', price: '$0.85', description: 'Crushed Oreo cookie pieces', popular: true },
    { name: 'Twix', price: '$0.85', description: 'Chopped Twix pieces', popular: false },
    { name: 'Snickers', price: '$0.85', description: 'Chopped Snickers pieces', popular: false },
    { name: 'Chocolate Chips', price: '$0.85', description: 'Mini chocolate chips', popular: false },
    { name: 'Heath', price: '$0.85', description: 'Crushed Heath bar pieces', popular: false },
    { name: 'Gummy Bears', price: '$0.85', description: 'Colorful gummy bears', popular: true },
    { name: 'Worms', price: '$0.85', description: 'Gummy worms', popular: false },
    { name: 'Sour Patch', price: '$0.85', description: 'Sour Patch Kids candies', popular: false },
    { name: 'Cheesecake Bites', price: '$0.85', description: 'Cheesecake pieces', popular: false },
    { name: 'Cookie Dough Bites', price: '$0.85', description: 'Edible cookie dough pieces', popular: true },
    { name: 'Peanut Butter Cups', price: '$0.85', description: 'Reese\'s peanut butter cups', popular: true },
    { name: 'Hot Fudge', price: '$0.85', description: 'Warm chocolate fudge sauce', popular: true },
    { name: 'Strawberries', price: '$0.85', description: 'Fresh strawberry pieces', popular: false },
    { name: 'Pineapples', price: '$0.85', description: 'Sweet pineapple pieces', popular: false },
    { name: 'Caramel', price: '$0.85', description: 'Caramel sauce', popular: true },
    { name: 'Marshmallow', price: '$0.85', description: 'Marshmallow topping', popular: false },
    { name: 'Whipped Cream', price: '$0.85', description: 'Fresh whipped cream', popular: true },
    { name: 'Walnuts', price: '$0.85', description: 'Chopped walnuts', popular: false },
    { name: 'Peanuts', price: '$0.85', description: 'Chopped peanuts', popular: false },
    { name: 'Cotton Candy Crunch', price: '$0.85', description: 'Cotton candy flavored crunch', popular: false },
    { name: 'Nerds', price: '$0.85', description: 'Colorful Nerds candy', popular: false },
  ],
  warmful: [
    { name: 'Small Sundae', price: '$7.00', description: 'Ice cream with toppings and whipped cream', popular: true },
    { name: 'Large Sundae', price: '$8.05', description: 'Bigger sundae with more toppings', popular: false },
    { name: 'Brownie Sundae', price: '$9.05', description: 'Warm brownie topped with ice cream', popular: true },
    { name: 'Waffle Sundae', price: '$9.25', description: 'Fresh waffle with ice cream toppings', popular: true },
    { name: 'Fried Dough', price: '$6.50+', description: 'Warm fried dough with optional ice cream (+$4)', popular: false },
    { name: 'Churros', price: '$6.50+', description: 'Cinnamon sugar churros with optional ice cream (+$4)', popular: true },
    { name: 'Churro Bites', price: '$6.50+', description: 'Bite-sized churros with optional ice cream (+$4)', popular: false },
    { name: 'Fried Oreos', price: '$6.50+', description: 'Fried Oreo cookies with optional ice cream (+$4)', popular: true },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('cups');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [selectedMenuImage, setSelectedMenuImage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Filter menu items based on search term
  const filteredItems = searchTerm 
    ? Object.entries(menuItems).flatMap(([category, items]) => 
        items.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        ).map(item => ({...item, category}))
      )
    : menuItems[activeCategory as keyof typeof menuItems];

  const menuImages = ['/menu.JPG', '/menu2.JPG'];

  return (
    <section ref={sectionRef} id="menu" className="py-20 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10"></div>
      <div className="decorative-circle w-96 h-96 -top-48 -left-48 bg-accent/10"></div>
      <div className="decorative-circle w-96 h-96 -bottom-48 -right-48 bg-primary/10"></div>
    
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 
            className={`heading-lg mb-4 heading-gradient transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            Our Menu
          </h2>
          <p 
            className={`text-lg mb-8 max-w-2xl mx-auto text-gray-600 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Explore our delicious selection of ice cream treats, from classic cones to warm delights!
          </p>
          <div 
            className={`h-1 w-24 bg-primary mx-auto mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
        </div>

        {/* Menu Image Display */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Complete Menu</h3>
            <div className="relative">
              <Image
                src={menuImages[selectedMenuImage]}
                alt={`Jay's Ice Cream Shop Menu ${selectedMenuImage + 1}`}
                width={1000}
                height={800}
                className="w-full rounded-lg shadow-md"
                priority
              />
              
              {/* Menu navigation arrows */}
              <button 
                onClick={() => setSelectedMenuImage(prev => (prev === 0 ? menuImages.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                aria-label="Previous menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setSelectedMenuImage(prev => (prev === menuImages.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                aria-label="Next menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Menu page indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
                {menuImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMenuImage(index)}
                    className={`w-4 h-4 rounded-full transition-all ${
                      selectedMenuImage === index ? 'bg-primary scale-110' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to menu ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Menu Page {selectedMenuImage + 1} of {menuImages.length}</p>
              <button
                onClick={() => setShowFullMenu(!showFullMenu)}
                className="bg-primary text-white px-5 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto"
              >
                {showFullMenu ? (
                  <>
                    <span>Hide Interactive Menu</span>
                    <span>↑</span>
                  </>
                ) : (
                  <>
                    <span>View Interactive Menu</span>
                    <span>↓</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
          
        {/* Interactive Menu */}
        {showFullMenu && (
          <>
            {/* Search bar */}
            <div 
              className={`max-w-md mx-auto mb-12 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-full p-4 pr-12 rounded-full border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {searchTerm ? (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  ) : (
                    <span>🔍</span>
                  )}
                </div>
              </div>
            </div>

            {/* Category tabs */}
            {!searchTerm && (
              <div 
                className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-12 transition-all duration-1000 delay-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    className={`px-5 py-3 rounded-full text-base transition-all duration-300 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                        : 'bg-white hover:bg-gray-50 shadow-md'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <span className="text-xl">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            )}

            {/* Menu items */}
            <div 
              ref={menuRef}
              className={`transition-all duration-500 ${searchTerm ? 'opacity-100' : ''}`}
            >
              {searchTerm && filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium text-gray-500">No items found matching "{searchTerm}"</h3>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              )}
              
              {searchTerm && filteredItems.length > 0 && (
                <div className="text-center mb-8">
                  <p className="text-gray-500">Found {filteredItems.length} items matching "{searchTerm}"</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(searchTerm ? filteredItems : menuItems[activeCategory as keyof typeof menuItems]).map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${900 + index * 50}ms` }}
                  >
                    {searchTerm && (
                      <div className="absolute top-2 right-2 bg-gray-100 rounded-full px-2 py-0.5 text-xs text-gray-500">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                      {item.price && <span className="bg-primary/10 text-primary font-bold text-lg px-3 py-1 rounded-full">{item.price}</span>}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    
                    {item.popular && (
                      <div className="absolute -top-3 -right-3 bg-accent text-foreground font-bold text-xs px-3 py-1 rounded-full shadow-md transform rotate-6 group-hover:rotate-0 transition-transform">
                        Popular! 🔥
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="mt-16 text-center">
          <div 
            className={`inline-block bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center max-w-2xl transition-all duration-1000 delay-[1200ms] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <p className="text-lg font-medium mb-0 text-gray-700 flex items-center justify-center">
              <span className="mr-2 text-xl">⚠️</span>
              Please inform your server of any food allergies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 