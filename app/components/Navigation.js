'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation({ isDark = false }) {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const textColor = isDark ? 'text-white' : 'text-slate-700';
  const hoverColor = isDark ? 'hover:text-blue-300' : 'hover:text-blue-600';
  const bgColor = isDark 
    ? 'bg-slate-900/95 backdrop-blur-sm' 
    : isScrolled 
      ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
      : 'bg-white';

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor}`}>
        <div className="container-fluid">
          <div className="flex items-center justify-between py-4">            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image 
                  src="/images/jsg_logo.png" 
                  alt="JSG Partners Logo" 
                  width={50} 
                  height={50}
                  className="transition-transform duration-300 group-hover:scale-110 sm:w-[60px] sm:h-[60px]"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl sm:text-2xl font-bold ${textColor} tracking-tight`}>
                  JSG Partners
                </h1>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-500'} font-medium`}>
                  A Law Firm
                </p>
              </div>
            </Link>
              {/* Desktop Navigation */}
            <nav className="hidden xl:flex">
              <ul className="flex items-center space-x-6 xl:space-x-8">
                <li>
                  <Link href="/" className={`${textColor} ${hoverColor} font-medium transition-all duration-300 relative group text-sm xl:text-base`}>
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={`${textColor} ${hoverColor} font-medium transition-all duration-300 relative group text-sm xl:text-base`}>
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className={`${textColor} ${hoverColor} font-medium transition-all duration-300 relative group text-sm xl:text-base`}>
                    Partners
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-areas" className={`${textColor} ${hoverColor} font-medium transition-all duration-300 relative group text-sm xl:text-base`}>
                    Practice Areas
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className={`${textColor} ${hoverColor} font-medium transition-all duration-300 relative group text-sm xl:text-base`}>
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`${textColor} ${hoverColor} font-medium transition-all duration-300 relative group text-sm xl:text-base`}>
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Side - Social & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link 
                href="https://www.linkedin.com/in/sc-legal" 
                className={`${textColor} ${hoverColor} transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin text-2xl"></i>
              </Link>
                {/* Mobile Menu Button */}
              <button 
                className={`xl:hidden ${textColor} text-2xl transition-all duration-300 hover:scale-110 p-2`}
                onClick={toggleMobileNav}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileNavActive}
              >
                <i className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 right-0 z-40 xl:hidden transition-all duration-300 ${
        isMobileNavActive ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="bg-white shadow-2xl mt-16 sm:mt-20 mx-3 sm:mx-4 rounded-2xl overflow-hidden mobile-nav-overlay">
          <nav className="py-4 sm:py-6">
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="block px-4 sm:px-6 py-2 sm:py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => setIsMobileNavActive(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block px-4 sm:px-6 py-2 sm:py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => setIsMobileNavActive(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/partners" 
                  className="block px-4 sm:px-6 py-2 sm:py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => setIsMobileNavActive(false)}
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link 
                  href="/practice-areas" 
                  className="block px-4 sm:px-6 py-2 sm:py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => setIsMobileNavActive(false)}
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className="block px-4 sm:px-6 py-2 sm:py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => setIsMobileNavActive(false)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block px-4 sm:px-6 py-2 sm:py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => setIsMobileNavActive(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>      {/* Mobile Menu Backdrop */}
      {isMobileNavActive && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 xl:hidden"
          onClick={() => setIsMobileNavActive(false)}
        ></div>
      )}</>
  );
}
