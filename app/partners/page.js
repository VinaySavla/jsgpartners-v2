'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Partners() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const partners = [
    {
      name: "Advocate Arshiya James",
      img: "/images/ArshiyaProfile.jpg",
      designation: "Founding Partner",
      description: "Specializes in Civil Litigation and Corporate Law with over 10 years of experience in handling complex legal matters.",
      expertise: ["Civil Litigation", "Corporate Law", "Contract Law", "Property Law"],
      email: "arshiya@jsgpartners.in",
      linkedin: "https://www.linkedin.com/in/arshiya-james"
    },
    {
      name: "Advocate Parichay Sharma",
        img: "/images/ParichayProfile.png", 
      designation: "Founding Partner",
      description: "Expert in Banking & Financial Law and Criminal Law with extensive experience in financial litigation and regulatory matters.",
      expertise: ["Banking Law", "Financial Law", "Criminal Law", "Regulatory Compliance"],
      email: "parichay@jsgpartners.in",
      linkedin: "https://www.linkedin.com/in/parichay-sharma"
    },
    {
      name: "Advocate Mohsin Ghaniwala",
        img: "/images/MohsinProfile.jpg",
      designation: "Founding Partner", 
      description: "Specializes in Family Law and General Legal Advisory with a focus on matrimonial disputes and legal consultancy.",
      expertise: ["Family Law", "Matrimonial Law", "Legal Advisory", "Mediation"],
      email: "mohsin@jsgpartners.in",
      linkedin: "https://www.linkedin.com/in/mohsin-ghaniwala"
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
              <li><Link href="/partners" className="text-black hover:text-blue-600 transition-colors font-semibold">Partners</Link></li>
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
            <Link href="/about" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>About Us</Link>
            <Link href="/partners" className="text-black text-xl hover:text-blue-600 transition-colors font-semibold" onClick={toggleMobileNav}>Partners</Link>
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
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">Our Partners</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced legal professionals who form the backbone of JSG Partners. 
              Our founding partners bring together decades of combined experience and expertise 
              across various areas of law.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Partner Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                    {/* <i className="bi bi-person text-6xl text-gray-500"></i> */}
                    <Image src={`${partner.img}`} alt={`${partner.name} Image`} width={128} height={128} className="rounded-full object-cover" />
                  </div>
                </div>
                
                {/* Partner Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{partner.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{partner.designation}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{partner.description}</p>
                  
                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact Links */}
                  <div className="flex space-x-4">
                    <Link 
                      href={`mailto:${partner.email}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      title="Email"
                    >
                      <i className="bi bi-envelope text-xl"></i>
                    </Link>
                    <Link 
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      title="LinkedIn"
                    >
                      <i className="bi bi-linkedin text-xl"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-50 rounded-lg p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-6">Ready to Work with Our Team?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our partners are committed to providing exceptional legal representation 
                and personalized attention to every client. Contact us today to discuss 
                how we can help with your legal needs.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
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
