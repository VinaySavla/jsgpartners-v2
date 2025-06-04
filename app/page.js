'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  
  const textOptions = [
    'for Justice.',
    'for Rights.',
    'for You.'
  ];
  
  const baseText = 'JSG Partners is Fighting ';

  useEffect(() => {
    if (showDisclaimer) return;
    
    const currentText = textOptions[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentText.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % textOptions.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex, showDisclaimer]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const handleAcceptDisclaimer = () => {
    setIsAccepted(true);
  };

  const handleProceed = () => {
    if (isAccepted) {
      setShowDisclaimer(false);
    }
  };

  if (showDisclaimer) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded border border-gray-200 shadow-lg">
          <div className="mb-6 pb-4 border-b-2 border-gray-100">
            <h2 className="text-2xl font-semibold text-black">Disclaimer</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 mb-6">
            The information provided on this website is for general informational purposes only and 
            does not constitute legal advice. The content is not intended to create an attorney-client 
            relationship, and you should not act or rely on any information contained herein without 
            seeking the advice of an attorney licensed in your jurisdiction. JSG Partners makes no 
            representations or warranties regarding the accuracy, completeness, or timeliness of the 
            information on this site.
          </p>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="accept-disclaimer"
              checked={isAccepted}
              onChange={handleAcceptDisclaimer}
              className="mr-3 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="accept-disclaimer" className="text-sm text-gray-700">
              I acknowledge and accept the disclaimer
            </label>
          </div>
          <button
            onClick={handleProceed}
            disabled={!isAccepted}
            className={`w-full py-3 px-6 rounded text-sm font-medium transition-all duration-300 ${
              isAccepted 
                ? 'bg-gray-700 text-white hover:bg-gray-800 cursor-pointer' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            PROCEED TO WEBSITE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden font-poppins">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <div className="ml-5">
              <h1 className="text-2xl font-bold text-black">JSG Partners</h1>
              <p className="text-xs text-gray-600">A Law Firm</p>
            </div>
          </Link>
          
          <nav className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''} hidden md:flex`}>
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-black hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-black hover:text-blue-600 transition-colors">About Us</Link></li>
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

      {/* Mobile Navigation Menu */}
      {isMobileNavActive && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white border-t border-gray-200 md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link href="/" className="block text-black hover:text-blue-600 transition-colors" onClick={() => setIsMobileNavActive(false)}>Home</Link></li>
              <li><Link href="/about" className="block text-black hover:text-blue-600 transition-colors" onClick={() => setIsMobileNavActive(false)}>About Us</Link></li>
              <li><Link href="/partners" className="block text-black hover:text-blue-600 transition-colors" onClick={() => setIsMobileNavActive(false)}>Partners</Link></li>
              <li><Link href="/practice-areas" className="block text-black hover:text-blue-600 transition-colors" onClick={() => setIsMobileNavActive(false)}>Area of Practice</Link></li>
              <li><Link href="/careers" className="block text-black hover:text-blue-600 transition-colors" onClick={() => setIsMobileNavActive(false)}>Career</Link></li>
              <li><Link href="/contact" className="block text-black hover:text-blue-600 transition-colors" onClick={() => setIsMobileNavActive(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4">
        <div className="container mx-auto">
          <div className="text-left ml-0 md:ml-20">
            <h2 className="text-sm uppercase font-bold text-white mb-6 opacity-0 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
              Welcome To JSG Partners
            </h2>
            <div className="typewriter-container">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 opacity-0 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                {baseText}
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                <span className="typed-text">
                  {displayText}
                  <span className="cursor animate-blink ml-1 inline-block w-1 h-12 bg-white"></span>
                </span>
              </h1>
            </div>
            <p className="text-white text-opacity-70 text-sm leading-relaxed opacity-0 animate-fadeInUp" style={{animationDelay: '1.1s'}}>
              A law firm in India providing strategic and innovative legal solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="footer-section">
              <h3 className="text-xl font-semibold mb-6">About JSG Partners</h3>
              <div className="company-info">
                <h4 className="text-lg mb-4">
                  JSG Partners
                  <span className="block text-sm text-gray-400 mt-1">A Law Firm</span>
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  JSG Partners is a full-service law firm committed to delivering exceptional legal solutions 
                  tailored to meet the diverse needs of clients. Our firm is built on the collective expertise 
                  and dynamic experience of our three founding partners — Advocate Arshiya James, Advocate 
                  Parichay Sharma and Advocate Mohsin Ghaniwala.
                </p>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="text-xl font-semibold mb-6">Practice Areas</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Civil Litigation</li>
                <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Banking and Financial Law</li>
                <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Corporate Law</li>
                <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Family Law</li>
                <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Criminal Law</li>
                <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">General Legal Advisory</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <div className="contact-info space-y-4">
                <Link 
                  href="https://maps.google.com/?q=JSG+Partners+Office+No.+303+B+Wing+03rd+Floor+Oberoi+Chambers+Off+New+Link+Rd+Veera+Desai+Industrial+Estate+Andheri+West+Mumbai+Maharashtra+400053" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-item flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-map-marker-alt text-white mt-1"></i>
                  <span className="text-sm leading-relaxed">
                    JSG Partners, Office No. 303, B- Wing, 03rd Floor, Oberoi Chambers, 
                    Off New Link Rd, Veera Desai Industrial Estate, Andheri West, 
                    Mumbai, Maharashtra 400053
                  </span>
                </Link>
                
                <Link 
                  href="https://g.co/kgs/JRCtXdn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-item flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-map-marker-alt text-white mt-1"></i>
                  <span className="text-sm leading-relaxed">
                    Office no. 205, 2nd Floor, A-Wing, Shreepati Coronet, Nesbit Road, 
                    Opposite Mazgaon Court, Mazgaon, Mumbai - 400010.
                  </span>
                </Link>
                
                <Link 
                  href="tel:+918655415028" 
                  className="contact-item flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-phone text-white"></i>
                  <span className="text-sm">+91 86554 15028</span>
                </Link>
                
                <Link 
                  href="mailto:info@jsgpartners.in" 
                  className="contact-item flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-envelope text-white"></i>
                  <span className="text-sm">info@jsgpartners.in</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">&copy; 2023 JSG Partners. All Rights Reserved.</p>
              <ul className="flex space-x-6">
                <li><Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link></li>
                <li><Link href="/partners" className="text-gray-400 hover:text-white text-sm transition-colors">Partners</Link></li>
                <li><Link href="/practice-areas" className="text-gray-400 hover:text-white text-sm transition-colors">Area of Practice</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">Career</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
