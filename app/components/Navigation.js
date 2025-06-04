'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation({ isDark = false }) {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const textColor = isDark ? 'text-white' : 'text-black';
  const hoverColor = isDark ? 'hover:text-blue-300' : 'hover:text-blue-600';
  const bgColor = isDark ? 'bg-black bg-opacity-90' : 'bg-white';

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${bgColor}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <div className="ml-5">
              <h1 className={`text-2xl font-bold ${textColor}`}>JSG Partners</h1>
              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>A Law Firm</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li><Link href="/" className={`${textColor} ${hoverColor} transition-colors`}>Home</Link></li>
              <li><Link href="/about" className={`${textColor} ${hoverColor} transition-colors`}>About Us</Link></li>
              <li><Link href="/partners" className={`${textColor} ${hoverColor} transition-colors`}>Partners</Link></li>
              <li><Link href="/practice-areas" className={`${textColor} ${hoverColor} transition-colors`}>Area of Practice</Link></li>
              <li><Link href="/careers" className={`${textColor} ${hoverColor} transition-colors`}>Career</Link></li>
              <li><Link href="/contact" className={`${textColor} ${hoverColor} transition-colors`}>Contact</Link></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="https://www.linkedin.com/in/sc-legal" 
              className={`${textColor} ${hoverColor} transition-colors`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin text-xl"></i>
            </Link>
            
            <button 
              className={`md:hidden ${textColor} text-2xl`}
              onClick={toggleMobileNav}
            >
              <i className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileNavActive && (
        <div className={`fixed top-16 left-0 right-0 z-40 ${bgColor} border-t border-gray-200 md:hidden`}>
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link href="/" className={`block ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsMobileNavActive(false)}>Home</Link></li>
              <li><Link href="/about" className={`block ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsMobileNavActive(false)}>About Us</Link></li>
              <li><Link href="/partners" className={`block ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsMobileNavActive(false)}>Partners</Link></li>
              <li><Link href="/practice-areas" className={`block ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsMobileNavActive(false)}>Area of Practice</Link></li>
              <li><Link href="/careers" className={`block ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsMobileNavActive(false)}>Career</Link></li>
              <li><Link href="/contact" className={`block ${textColor} ${hoverColor} transition-colors`} onClick={() => setIsMobileNavActive(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
