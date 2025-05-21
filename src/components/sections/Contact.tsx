'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this would connect to your backend)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Come Visit Us!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We'd love to serve you in person or hear from you. Reach out for catering inquiries, event bookings, or just to say hello!
          </p>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map and location info */}
          <div>
            <div className="bg-background rounded-lg p-6 shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Location & Hours</h3>
              
              <div className="mb-6">
                <p className="font-medium">Business Name:</p>
                <p className="mb-2">Jay's Ice Cream Shop CT</p>
                <p className="font-medium">Phone:</p>
                <p className="mb-2">1 (203) 514-4610</p>
                <p className="font-medium">Email:</p>
                <p className="mb-2">
                  <a href="mailto:jaysicecreamshopct@outlook.com" className="text-primary hover:underline">
                    jaysicecreamshopct@outlook.com
                  </a>
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium mb-2">Hours:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday - Friday</div>
                  <div>12 PM – 10 PM</div>
                  <div>Saturday</div>
                  <div>11 AM – 11 PM</div>
                  <div>Sunday</div>
                  <div>11 AM – 10 PM</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden h-64 flex items-center justify-center">
              {/* This would be replaced with an actual Google Maps embed */}
              <div className="text-center p-4">
                <p className="mb-2">Map goes here</p>
                <p className="text-sm">An interactive Google Map would be embedded here showing the location</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-background rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white font-medium rounded-lg px-6 py-3 hover:bg-primary/90 transition"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p>Looking to book an event?</p>
              <a
                href="mailto:jaysicecreamshopct@outlook.com"
                className="text-primary font-medium hover:underline"
              >
                Email us for catering details!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 