'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Navigation from './components/Navigation';
import {
  BriefcaseIcon,
  ClockIcon,
  TrophyIcon,
  SpeakerWaveIcon,
  ScaleIcon,
  BuildingOfficeIcon,
  HeartIcon,
  ShieldCheckIcon,
  UsersIcon,
  StarIcon,
  InformationCircleIcon,
  PhoneIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  MapPinIcon,
  EnvelopeIcon,
  ArrowUpIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
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
          setCurrentIndex((prev) => (prev + 1) % textOptions.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex, showDisclaimer]);

  const acceptDisclaimer = () => {
    setIsAccepted(true);
    setShowDisclaimer(false);
  };
  const stats = [
    { number: "500+", label: "Cases Handled", icon: BriefcaseIcon },
    { number: "15+", label: "Years Experience", icon: ClockIcon },
    { number: "95%", label: "Success Rate", icon: TrophyIcon },
    { number: "24/7", label: "Client Support", icon: SpeakerWaveIcon }
  ];
  const practiceAreas = [
    {
      title: "Civil Litigation",
      description: "Expert representation in civil disputes and court proceedings",
      icon: ScaleIcon
    },
    {
      title: "Corporate Law",
      description: "Comprehensive legal services for businesses and corporations",
      icon: BuildingOfficeIcon
    },
    {
      title: "Family Law",
      description: "Sensitive handling of family matters and domestic disputes",
      icon: HeartIcon
    },
    {
      title: "Criminal Law",
      description: "Strong defense in criminal cases and legal proceedings",
      icon: ShieldCheckIcon
    }
  ];
  const whyChooseUs = [
    {
      title: "Expert Legal Team",
      description: "Experienced advocates with proven track record",
      icon: UsersIcon
    },
    {
      title: "Client-Centric Approach",
      description: "Personalized legal solutions for every client",
      icon: HeartIcon
    },
    {
      title: "Proven Success",
      description: "High success rate in complex legal matters",
      icon: StarIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock legal assistance and consultation",
      icon: ClockIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-scaleIn">            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <InformationCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Disclaimer</h2>
            </div>
            
            <div className="text-gray-700 space-y-4 mb-8">
              <p className="leading-relaxed">
                The content provided on this website is for informational purposes only and should not be construed as legal advice. 
                The information presented here is general in nature and may not apply to your specific situation.
              </p>
              <p className="leading-relaxed">
                No attorney-client relationship is formed by your use of this website. For specific legal advice regarding your 
                situation, please consult with a qualified attorney.
              </p>
              <p className="leading-relaxed">
                JSG Partners makes no representations or warranties about the accuracy, completeness, or timeliness of the 
                information contained on this website.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={acceptDisclaimer}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                I Understand & Agree
              </button>
              <button 
                onClick={() => window.history.back()}
                className="flex-1 bg-gray-100 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <Navigation />

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        <div className="container-fluid relative z-10">
          <div className="text-center max-w-6xl mx-auto">            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 animate-fadeInUp leading-tight px-4">
              <span className="gradient-text block sm:inline">{baseText}</span>
              <span className="text-blue-600 border-r-2 border-blue-600 animate-pulse block sm:inline">
                {displayText}
              </span>
            </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200 px-4">
              Premier legal services in Mumbai with over 15 years of excellence. 
              Our expert team of advocates provides comprehensive legal solutions 
              tailored to your needs.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 animate-fadeInUp animation-delay-300 px-4">
              <Link href="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 inline-flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 mr-2 sm:mr-3" />
                Get Free Consultation
              </Link>
              <Link href="/about" className="btn-secondary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 inline-flex items-center justify-center">
                <InformationCircleIcon className="w-5 h-5 mr-2 sm:mr-3" />
                Learn More About Us
              </Link>
            </div>
              {/* Scroll Indicator */}
            <div className="animate-bounce mt-16">
              <ChevronDownIcon className="w-8 h-8 text-blue-500 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container-fluid">          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="card text-center group hover:scale-105 transition-all duration-300 animate-fadeInUp p-4 sm:p-6"
                style={{animationDelay: `${index * 100}ms`}}
              >                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container-fluid">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6 animate-fadeInUp">Our Practice Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-100">
              Comprehensive legal services across multiple domains with expert specialization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-fadeInUp"
                style={{animationDelay: `${200 + index * 100}ms`}}
              >                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
            <div className="text-center animate-fadeInUp delay-600">
            <Link href="/practice-areas" className="btn-primary">
              <ArrowRightIcon className="w-5 h-5 mr-2" />
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6 animate-fadeInUp">Why Choose JSG Partners?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-100">
              Experience the difference with our client-focused approach and proven legal expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div 
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-fadeInUp"
                style={{animationDelay: `${200 + index * 100}ms`}}
              >                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-fluid relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
              Ready to Protect Your Rights?
            </h2>
            <p className="text-xl mb-10 opacity-90 animate-fadeInUp delay-100">
              Don't let legal challenges overwhelm you. Get expert guidance from Mumbai's trusted legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp delay-200">              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <PhoneIcon className="w-5 h-5 mr-3" />
                Schedule Consultation
              </Link>
              <Link 
                href="/practice-areas" 
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <InformationCircleIcon className="w-5 h-5 mr-3" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image 
                  src="/images/jsg_logo.png" 
                  alt="JSG Partners Logo" 
                  width={60} 
                  height={80}
                  className="mr-4"
                />
                <h3 className="text-2xl font-bold">JSG Partners</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                JSG Partners is a full-service law firm committed to delivering exceptional legal solutions 
                tailored to meet the diverse needs of clients. Our firm is built on the collective expertise 
                and dynamic experience of our three founding partners.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/sc-legal" target="_blank" className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <LinkIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Practice Areas</h4>
              <ul className="space-y-3">
                {[
                  'Civil Litigation',
                  'Banking & Financial Law',
                  'Corporate Law',
                  'Family Law',
                  'Criminal Law',
                  'General Legal Advisory'
                ].map((area, index) => (
                  <li key={index}>
                    <Link href="/practice-areas" className="text-slate-400 hover:text-white transition-colors duration-300">
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <Link 
                  href="https://maps.google.com/?q=JSG+Partners+Office+No.+303+B+Wing+03rd+Floor+Oberoi+Chambers+Off+New+Link+Rd+Veera+Desai+Industrial+Estate+Andheri+West+Mumbai+Maharashtra+400053" 
                  target="_blank" 
                  className="flex items-start space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                >
                  <MapPinIcon className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed">
                    Office No. 303, B-Wing, 03rd Floor, Oberoi Chambers, Andheri West, Mumbai - 400053
                  </span>
                </Link>
                
                <Link 
                  href="tel:+918655415028" 
                  className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                >
                  <PhoneIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+91 86554 15028</span>
                </Link>
                
                <Link 
                  href="mailto:info@jsgpartners.in" 
                  className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                >
                  <EnvelopeIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">info@jsgpartners.in</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">&copy; 2025 JSG Partners. All Rights Reserved.</p>
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

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
      >
        <ArrowUpIcon className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </div>
  );
}