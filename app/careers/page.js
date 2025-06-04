'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Careers() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const benefits = [
    {
      icon: "bi-mortarboard",
      title: "Professional Development",
      description: "Continuous learning opportunities and skill enhancement programs"
    },
    {
      icon: "bi-people",
      title: "Collaborative Environment",
      description: "Work with experienced professionals in a supportive team environment"
    },
    {
      icon: "bi-briefcase",
      title: "Diverse Practice Areas",
      description: "Exposure to various legal domains and complex cases"
    },
    {
      icon: "bi-award",
      title: "Recognition & Growth",
      description: "Merit-based advancement and recognition for outstanding performance"
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
              <li><Link href="/practice-areas" className="text-black hover:text-blue-600 transition-colors">Area of Practice</Link></li>
              <li><Link href="/careers" className="text-black hover:text-blue-600 transition-colors font-semibold">Career</Link></li>
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
            <Link href="/practice-areas" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Area of Practice</Link>
            <Link href="/careers" className="text-black text-xl hover:text-blue-600 transition-colors font-semibold" onClick={toggleMobileNav}>Career</Link>
            <Link href="/contact" className="text-black text-xl hover:text-blue-600 transition-colors" onClick={toggleMobileNav}>Contact</Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">Career</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our dynamic team of legal professionals and build a rewarding career 
              in one of Mumbai's most respected law firms.
            </p>
          </div>

          {/* Why Join Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-6">Why Join JSG Partners?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe in nurturing talent and providing opportunities for growth in a 
                collaborative and professional environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Openings */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-6">Current Openings</h2>
              <p className="text-lg text-gray-600">
                We are always looking for talented individuals to join our team.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Job Opening 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-black mb-2 md:mb-0">Associate Lawyer</h3>
                  <span className="text-blue-600 font-medium">Full Time</span>
                </div>
                <p className="text-gray-600 mb-4">
                  We are seeking a motivated Associate Lawyer with 2-5 years of experience in 
                  civil litigation and corporate law. The ideal candidate should have strong 
                  research and writing skills.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Civil Litigation</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Corporate Law</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Legal Research</span>
                </div>
                <Link 
                  href="mailto:careers@jsgpartners.in?subject=Application for Associate Lawyer Position"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>

              {/* Job Opening 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-black mb-2 md:mb-0">Legal Intern</h3>
                  <span className="text-green-600 font-medium">Internship</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Internship opportunities for law students in their final year. Gain practical 
                  experience in various areas of law including civil litigation, corporate law, 
                  and legal documentation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Legal Drafting</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Court Procedures</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Client Interaction</span>
                </div>
                <Link 
                  href="mailto:careers@jsgpartners.in?subject=Application for Legal Intern Position"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-gray-50 rounded-lg p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-6">Application Process</h2>
              <p className="text-lg text-gray-600">
                Follow these simple steps to apply for a position at JSG Partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Submit Application</h3>
                <p className="text-gray-600">
                  Send your resume and cover letter to our careers email address.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Initial Review</h3>
                <p className="text-gray-600">
                  Our team will review your application and contact qualified candidates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Interview Process</h3>
                <p className="text-gray-600">
                  Successful candidates will be invited for an interview with our partners.
                </p>
              </div>
            </div>
          </div>

          {/* Contact for Careers */}
          <div className="text-center bg-white rounded-lg shadow-lg p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6">Ready to Start Your Career with Us?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't see a position that matches your skills? We're always interested in 
              hearing from talented legal professionals. Send us your resume and we'll 
              keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:careers@jsgpartners.in"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Your Resume
              </Link>
              <Link 
                href="/contact"
                className="inline-block bg-gray-100 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Contact Us
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
