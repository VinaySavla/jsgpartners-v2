'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
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
              <li><Link href="/about" className="text-black hover:text-blue-600 transition-colors font-semibold">About Us</Link></li>
              <li><Link href="/partners" className="text-black hover:text-blue-600 transition-colors">Partners</Link></li>
              <li><Link href="/practice-areas" className="text-black hover:text-blue-600 transition-colors">Area of Practice</Link></li>
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
            <Link href="/about" className="text-black text-xl hover:text-blue-600 transition-colors font-semibold" onClick={toggleMobileNav}>About Us</Link>
            <Link href="/partners" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Partners</Link>
            <Link href="/practice-areas" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Area of Practice</Link>
            <Link href="/careers" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Career</Link>
            <Link href="/contact" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Contact</Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">About Us</h1>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-semibold text-black mb-6">Our Philosophy</h2>
                <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
                  At JSG Partners, we understand that navigating the legal landscape can be complex and overwhelming. 
                  We are dedicated to providing clear, concise, and personalized legal advice, guiding our clients 
                  through every step of the process with empathy and understanding. We prioritize building strong 
                  client relationships based on trust, open communication, and mutual respect. We believe in proactive 
                  problem-solving and strive to achieve the best possible outcomes for our clients, whether through 
                  negotiation, mediation, or litigation.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-black mb-6">Our Approach</h2>
                <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
                  At JSG Partners, we believe in a collaborative approach. All partners are actively involved in 
                  every case, ensuring that our clients receive the benefit of our combined expertise and strategic 
                  thinking. We take the time to understand each client's unique circumstances and legal goals, 
                  developing personalized strategies tailored to their specific needs. We are committed to providing 
                  clear and timely communication, keeping our clients informed and empowered throughout the legal process.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-black mb-6">Our Commitment</h2>
                <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
                  We are committed to providing high-quality legal representation at a reasonable cost. We believe 
                  that everyone deserves access to justice and strive to make our services accessible to all. We are 
                  passionate about using our legal skills to make a positive impact on our clients' lives and the community.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
                  At JSG Partners, we don't just practice law—we build relationships. Whether you're an individual 
                  seeking guidance or a business navigating complex legal challenges, we are here to provide the 
                  expertise and support you need to achieve your goals.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  Contact JSG Partners today to schedule a consultation and experience the difference of working 
                  with a firm that truly cares about your success.
                </p>
              </section>
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
