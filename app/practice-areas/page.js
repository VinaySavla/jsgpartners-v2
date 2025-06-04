'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PracticeAreas() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const practiceAreas = [
    {
      icon: "bi-award-fill",
      title: "Civil Litigation",
      description: "Comprehensive representation in civil disputes and legal proceedings."
    },
    {
      icon: "bi-bank",
      title: "Banking and Financial Law",
      description: "Expert guidance on banking regulations and financial legal matters."
    },
    {
      icon: "bi-building",
      title: "Corporate Law", 
      description: "Strategic legal support for businesses and corporate entities."
    },
    {
      icon: "bi-heart",
      title: "Family Law",
      description: "Compassionate representation in family and matrimonial matters."
    },
    {
      icon: "bi-shield-check",
      title: "Criminal Law",
      description: "Strong defense representation in criminal cases and proceedings."
    },
    {
      icon: "bi-briefcase",
      title: "General Legal Advisory",
      description: "Personalized legal advice for individuals and businesses."
    }
  ];

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
              <li><Link href="/practice-areas" className="text-black hover:text-blue-600 transition-colors font-semibold">Area of Practice</Link></li>
              <li><Link href="/careers" className="text-black hover:text-blue-600 transition-colors">Career</Link></li>
              <li><Link href="/contact" className="text-black hover:text-blue-600 transition-colors">Contact</Link></li>
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
            <Link href="/practice-areas" className="text-black text-xl hover:text-blue-600 transition-colors font-semibold" onClick={toggleMobileNav}>Area of Practice</Link>
            <Link href="/careers" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Career</Link>
            <Link href="/contact" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Contact</Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">Area of Practice</h1>
          </div>

          {/* Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className="service-card relative bg-gray-100 rounded-lg p-12 min-h-80 flex flex-col items-start overflow-hidden group transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-slate-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                
                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-500">
                    <i 
                      className={`${area.icon} text-3xl text-black group-hover:text-black transition-colors duration-500`}
                    ></i>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-2xl font-semibold mb-6 text-black group-hover:text-white transition-colors duration-500">
                    {area.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-black text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
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
