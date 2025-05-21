'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  { id: 'cups', name: 'Cups & Cones' },
  { id: 'flavors', name: 'Ice Cream Flavors' },
  { id: 'toppings', name: 'Toppings' },
  { id: 'floats', name: 'Milkshakes & Floats' },
  { id: 'warmful', name: 'Warmful Delights' },
];

const menuItems = {
  cups: [
    { name: 'Kiddie', price: '$4.75', description: 'Small serving, perfect for kids' },
    { name: 'Small', price: '$5.70', description: 'Just the right amount of sweetness' },
    { name: 'Large', price: '$6.85', description: 'For serious ice cream lovers' },
    { name: 'Waffle Cone', price: '$8.35', description: 'Crispy waffle cone with your favorite flavor' },
  ],
  flavors: [
    { name: 'Strawberry', price: '', description: 'Fresh strawberry flavor' },
    { name: 'French Vanilla', price: '', description: 'Classic rich vanilla' },
    { name: 'Chocolate', price: '', description: 'Rich chocolate goodness' },
    { name: 'Brownie Batter', price: '', description: 'Gooey brownie batter swirls' },
    { name: 'Pistachio', price: '', description: 'Nutty pistachio flavor' },
    { name: 'Maple Walnut', price: '', description: 'Sweet maple with crunchy walnuts' },
    { name: 'Butter Pecan', price: '', description: 'Buttery with pecan pieces' },
    { name: 'Cake Batter', price: '', description: 'Sweet cake batter flavor' },
    { name: 'Oreo', price: '', description: 'Vanilla with Oreo cookie pieces' },
    { name: 'Coconut Cheesecake', price: '', description: 'Coconut with cheesecake chunks' },
    { name: 'Brownie', price: '', description: 'Chocolate with brownie chunks' },
    { name: 'Black Raspberry Choc Chip', price: '', description: 'Black raspberry with chocolate chips' },
    { name: 'Yogurt', price: '', description: 'Tangy frozen yogurt' },
    { name: 'Coconut Almond Bar', price: '', description: 'Coconut with almond pieces' },
    { name: 'Chocolate PB Cup', price: '', description: 'Chocolate with peanut butter cups' },
    { name: 'Strawberry Cheesecake', price: '', description: 'Strawberry with cheesecake chunks' },
    { name: 'Graham Central Station', price: '', description: 'Graham cracker flavored ice cream' },
    { name: 'Peanut Butter Oreo', price: '', description: 'Peanut butter with Oreo pieces' },
    { name: 'Birthday Cake', price: '', description: 'Birthday cake flavor with sprinkles' },
    { name: 'Moose Tracks', price: '', description: 'Vanilla with fudge and peanut butter cups' },
    { name: 'Cotton Candy', price: '', description: 'Sweet cotton candy flavor' },
    { name: 'Coffee', price: '', description: 'Rich coffee flavor' },
    { name: 'Mint Chocolate Chip', price: '', description: 'Mint with chocolate chips' },
    { name: 'Vanilla PB Swirl', price: '', description: 'Vanilla with peanut butter swirl' },
  ],
  floats: [
    { name: 'Root Beer Float', price: '$9.50', description: 'Classic root beer with vanilla ice cream' },
    { name: 'Milkshake', price: '$9.50', description: 'Any flavor, thick and creamy' },
  ],
  toppings: [
    { name: 'Rainbow Sprinkles', price: '$0.85', description: 'Colorful sprinkle mix' },
    { name: 'Chocolate Sprinkles', price: '$0.85', description: 'Chocolate sprinkle mix' },
    { name: 'Oreos', price: '$0.85', description: 'Crushed Oreo cookie pieces' },
    { name: 'Twix', price: '$0.85', description: 'Chopped Twix pieces' },
    { name: 'Snickers', price: '$0.85', description: 'Chopped Snickers pieces' },
    { name: 'Chocolate Chips', price: '$0.85', description: 'Mini chocolate chips' },
    { name: 'Heath', price: '$0.85', description: 'Crushed Heath bar pieces' },
    { name: 'Gummy Bears', price: '$0.85', description: 'Colorful gummy bears' },
    { name: 'Worms', price: '$0.85', description: 'Gummy worms' },
    { name: 'Sour Patch', price: '$0.85', description: 'Sour Patch Kids candies' },
    { name: 'Cheesecake Bites', price: '$0.85', description: 'Cheesecake pieces' },
    { name: 'Cookie Dough Bites', price: '$0.85', description: 'Edible cookie dough pieces' },
    { name: 'Peanut Butter Cups', price: '$0.85', description: 'Reese\'s peanut butter cups' },
    { name: 'Hot Fudge', price: '$0.85', description: 'Warm chocolate fudge sauce' },
    { name: 'Strawberries', price: '$0.85', description: 'Fresh strawberry pieces' },
    { name: 'Pineapples', price: '$0.85', description: 'Sweet pineapple pieces' },
    { name: 'Caramel', price: '$0.85', description: 'Caramel sauce' },
    { name: 'Marshmallow', price: '$0.85', description: 'Marshmallow topping' },
    { name: 'Whipped Cream', price: '$0.85', description: 'Fresh whipped cream' },
    { name: 'Walnuts', price: '$0.85', description: 'Chopped walnuts' },
    { name: 'Peanuts', price: '$0.85', description: 'Chopped peanuts' },
    { name: 'Cotton Candy Crunch', price: '$0.85', description: 'Cotton candy flavored crunch' },
    { name: 'Nerds', price: '$0.85', description: 'Colorful Nerds candy' },
  ],
  warmful: [
    { name: 'Small Sundae', price: '$7.00', description: 'Ice cream with toppings and whipped cream' },
    { name: 'Large Sundae', price: '$8.05', description: 'Bigger sundae with more toppings' },
    { name: 'Brownie Sundae', price: '$9.05', description: 'Warm brownie topped with ice cream' },
    { name: 'Waffle Sundae', price: '$9.25', description: 'Fresh waffle with ice cream toppings' },
    { name: 'Fried Dough', price: '$6.50+', description: 'Warm fried dough with optional ice cream (+$4)' },
    { name: 'Churros', price: '$6.50+', description: 'Cinnamon sugar churros with optional ice cream (+$4)' },
    { name: 'Churro Bites', price: '$6.50+', description: 'Bite-sized churros with optional ice cream (+$4)' },
    { name: 'Fried Oreos', price: '$6.50+', description: 'Fried Oreo cookies with optional ice cream (+$4)' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('cups');

  return (
    <section id="menu" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our delicious selection of ice cream treats, from classic cones to warm delights!
          </p>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={index}
              className="bg-background dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{item.name}</h3>
                {item.price && <span className="text-primary font-bold">{item.price}</span>}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">Please inform your server of any food allergies</p>
        </div>
      </div>
    </section>
  );
} 