'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function Partners() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const partners = [
    {
      name: "Parichay Sharma",
      title: "Founding Partner",
      experience: "10+ Years",
      specialization: "Banking Dispute Resolution, Securities Law, Criminal Law, Company Law",
      education: "LL.B., LL.M. specialized in Banking & Corporate Law",
      image: "/images/ParichayProfile.png",
      bio: "Mr. Parichay Sharma is a skilled and results-driven advocate with proven experience in litigation and banking dispute resolution. He possesses a diverse legal background encompassing securities law, criminal law, company law, and white-collar crime, giving him a well-rounded perspective on complex legal challenges.",
      achievements: [
        "Managing legal portfolios for American Express Banking Corp, Axis Bank, and Standard Chartered Bank",
        "Expert in banking disputes including loan recovery, fraud, and regulatory compliance",
        "Comprehensive case strategy development with proven track record of favorable outcomes"
      ],
      email: "parichay@jsgpartners.in",
      phone: "+91 86554 15028"
    },
    {
      name: "Mohsin Ghaniwala",
      title: "Founding Partner",
      experience: "8+ Years",
      specialization: "Criminal Law, Civil Litigation, Corporate Matters",
      education: "LL.B. with specialization in Criminal & Civil Law",
      image: "/images/MohsinProfile.jpg",
      bio: "Mr. Mohsin Ghaniwala is a dynamic and driven first-generation lawyer, carving a niche for himself in the legal arena with his expertise in Criminal Law, Civil Litigation, and General Corporate Matters, including drafting and negotiating agreements. Known for his sharp legal acumen and client-centric approach.",
      achievements: [
        "Successfully represented clients in complex criminal cases",
        "Expert in civil litigation from property conflicts to contractual disagreements",
        "Specializes in drafting, reviewing, and negotiating corporate agreements"
      ],
      email: "mohsin@jsgpartners.in",
      phone: "+91 86554 15028"
    },
    {
      name: "Arshiya James",
      title: "Founding Partner",
      experience: "6+ Years",
      specialization: "Family Law, Civil Law, Criminal Law",
      education: "LL.B. with specialization in Family & Civil Law",
      image: "/images/ArshiyaProfile.jpg",
      bio: "Ms. Arshiya James is a dedicated and dynamic advocate specializing in Family Law, Civil Law and Criminal Law. As a first-generation lawyer, Ms. James brings a unique blend of fresh perspective and innovation to her work with a strong commitment to serving her clients with empathy and diligence.",
      achievements: [
        "Building strong client relationships based on trust and open communication",
        "Expert in navigating sensitive family matters and civil disputes",
        "Committed to making legal processes accessible and understandable for clients"
      ],
      email: "arshiya@jsgpartners.in",
      phone: "+91 86554 15028"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-fadeInUp">
            Our Partners
          </h1>          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200 px-4">
            Meet the founding partners of JSG Partners. Our team combines diverse expertise in banking law, 
            criminal law, civil litigation, family law, and corporate matters to deliver comprehensive legal solutions 
            for our clients.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-fadeInUp ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >                {/* Partner Image */}
                <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 items-center justify-center hidden">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-2xl sm:text-4xl font-bold text-blue-600">
                          {partner.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partner Info */}
                <div className="flex-1 text-center lg:text-left px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h2>
                  <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">
                    {partner.title}
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                      {partner.experience}
                    </span>
                    <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">
                      {partner.specialization}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl">
                    {partner.bio}
                  </p>                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Education:</h4>
                    <p className="text-sm sm:text-base text-gray-600">{partner.education}</p>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Contact:</h4>
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base text-gray-600">
                        <span className="font-medium">Email:</span> 
                        <a href={`mailto:${partner.email}`} className="text-blue-600 hover:text-blue-800 ml-2">
                          {partner.email}
                        </a>
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        <span className="font-medium">Phone:</span> 
                        <a href={`tel:${partner.phone}`} className="text-blue-600 hover:text-blue-800 ml-2">
                          {partner.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {partner.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12 animate-fadeInUp">
            Our Collective Impact
          </h2>          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "24+", label: "Years Combined Experience" },
              { number: "200+", label: "Cases Successfully Handled" },
              { number: "50+", label: "Banking & Corporate Clients" },
              { number: "95%", label: "Client Satisfaction Rate" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm sm:text-base lg:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fadeInUp">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 animate-fadeInUp animation-delay-200 px-4">
            Contact us today to discuss how our experienced partners can help with your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <button className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              Schedule Consultation
            </button>
            <button className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">JSG</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">JSG Partners</h3>
                <p className="text-gray-400 text-sm">Excellence in Legal Services</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 JSG Partners. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}