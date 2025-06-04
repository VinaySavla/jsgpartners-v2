'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/jsg_logo.png" 
              alt="JSG Partners Logo" 
              width={50} 
              height={80}
              className="ml-5"
            />
          </Link>
          
          <nav className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''} hidden md:flex`}>
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-black hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-black hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/partners" className="text-black hover:text-blue-600 transition-colors">Partners</Link></li>
              <li><Link href="/practice-areas" className="text-black hover:text-blue-600 transition-colors">Area of Practice</Link></li>
              <li><Link href="/careers" className="text-black hover:text-blue-600 transition-colors">Career</Link></li>
              <li><Link href="/contact" className="text-black hover:text-blue-600 transition-colors font-semibold">Contact</Link></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="https://www.linkedin.com/in/sc-legal" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin text-xl"></i>
            </Link>
            
            <button 
              className="md:hidden text-gray-700 text-2xl"
              onClick={toggleMobileNav}
            >
              <i className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobileNavActive && (
        <div className="fixed inset-0 z-40 bg-white bg-opacity-95 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Home</Link>
            <Link href="/about" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>About Us</Link>
            <Link href="/partners" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Partners</Link>
            <Link href="/practice-areas" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Area of Practice</Link>
            <Link href="/careers" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Career</Link>
            <Link href="/contact" className="text-black text-xl hover:text-blue-600 transition-colors font-semibold" onClick={toggleMobileNav}>Contact</Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">Contact</h1>
          </div>

          {/* Contact Info and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black mb-8">Get in Touch</h2>
              
              {/* Location 1 */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <i className="bi bi-geo-alt text-2xl text-black"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Mumbai Office:</h4>
                  <Link 
                    href="https://goo.gl/maps/57eZuHDK9RCJ3JWJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-600 transition-colors"
                  >
                    JSG Partners, Office No. 303, B- Wing, 03rd Floor, Oberoi Chambers, 
                    Off New Link Rd, Veera Desai Industrial Estate, Andheri West, 
                    Mumbai, Maharashtra 400053
                  </Link>
                </div>
              </div>

              {/* Location 2 */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <i className="bi bi-geo-alt text-2xl text-black"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Mazgaon Office:</h4>
                  <Link 
                    href="https://g.co/kgs/JRCtXdn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-600 transition-colors"
                  >
                    Office no. 205, 2nd Floor, A-Wing, Shreepati Coronet, Nesbit Road, 
                    Opposite Mazgaon Court, Mazgaon, Mumbai - 400010.
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <i className="bi bi-telephone text-2xl text-black"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Call:</h4>
                  <Link 
                    href="tel:+918655415028"
                    className="text-black hover:text-blue-600 transition-colors"
                  >
                    +91 86554 15028
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <i className="bi bi-envelope text-2xl text-black"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Email:</h4>
                  <Link 
                    href="mailto:info@jsgpartners.in"
                    className="text-black hover:text-blue-600 transition-colors"
                  >
                    info@jsgpartners.in
                  </Link>
                </div>
              </div>              {/* Map */}
              <div className="mt-8">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.515743654482!2d72.8393!3d19.1334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c6e6f9e3b5%3A0x7d7e9e3b6c5f8d2a!2sOberoi%20Chambers%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1623456789000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JSG Partners Office Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <Link 
        href="#" 
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <i className="bi bi-arrow-up-short text-xl"></i>
      </Link>
    </div>
  );
}
