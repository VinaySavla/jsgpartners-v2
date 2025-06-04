'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-fluid">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6">
              About JSG Partners
            </span>
            <h1 className="heading-xl text-slate-800 mb-6">
              Excellence in <span className="gradient-text">Legal Services</span>
            </h1>
            <p className="text-large text-slate-600 leading-relaxed">
              JSG Partners is a full-service law firm committed to delivering exceptional legal solutions 
              tailored to meet the diverse needs of our clients with unwavering dedication to justice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fadeInLeft">
              <h2 className="heading-lg text-slate-800 mb-8">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  JSG Partners is built on the collective expertise and dynamic experience of our three 
                  founding partners — Advocate Arshiya James, Advocate Parichay Sharma, and Advocate 
                  Mohsin Ghaniwala. Together, they bring a wealth of knowledge across diverse practice 
                  areas, ensuring comprehensive legal support for our clients.
                </p>
                <p>
                  Our firm specializes in various areas of law, including civil litigation, banking and 
                  financial law, corporate law, family law, criminal law, and general legal advisory 
                  services. We pride ourselves on our client-centric approach, providing personalized 
                  attention and strategic solutions to every case.
                </p>
                <p>
                  At JSG Partners, we believe that every client deserves the highest quality legal 
                  representation. Our team is dedicated to achieving the best possible outcomes while 
                  maintaining the highest standards of professionalism and ethics.
                </p>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white glass-effect">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  {[
                    'Experienced legal professionals',
                    'Comprehensive practice areas',
                    'Client-focused approach',
                    'Strategic legal solutions',
                    'Proven track record',
                    '24/7 legal support'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-white text-sm"></i>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="heading-lg text-slate-800 mb-6">
              Meet Our <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-large text-slate-600 max-w-3xl mx-auto">
              Our founding partners bring together decades of combined experience and expertise 
              across multiple practice areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Advocate Arshiya James',
                image: '/images/ArshiyaProfile.jpg',
                specialization: 'Corporate Law & Civil Litigation'
              },
              {
                name: 'Advocate Parichay Sharma',
                image: '/images/ParichayProfile.png',
                specialization: 'Banking Law & Financial Services'
              },
              {
                name: 'Advocate Mohsin Ghaniwala',
                image: '/images/MohsinProfile.jpg',
                specialization: 'Criminal Law & Family Law'
              }
            ].map((partner, index) => (
              <div key={index} className="card hover-lift text-center p-8 group animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{partner.name}</h3>
                <p className="text-slate-600">{partner.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
            <h2 className="heading-lg text-slate-800 mb-8">
              Our <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-large text-slate-600 leading-relaxed italic">
              At JSG Partners, we understand that navigating the legal landscape can be complex and overwhelming. 
              We are dedicated to providing clear, concise, and personalized legal advice, guiding our clients 
              through every step of the process with empathy and understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Approach',
                content: 'We believe in a collaborative approach where all partners are actively involved in every case, ensuring that our clients receive the benefit of our combined expertise and strategic thinking.'
              },
              {
                title: 'Our Commitment',
                content: 'We are committed to providing high-quality legal representation at a reasonable cost. We believe that everyone deserves access to justice and strive to make our services accessible to all.'
              },
              {
                title: 'Our Promise',
                content: 'At JSG Partners, we don\'t just practice law—we build relationships. Whether you\'re an individual or business, we provide the expertise and support you need to achieve your goals.'
              }
            ].map((item, index) => (
              <div key={index} className="card p-8 text-center animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container-fluid">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="heading-lg mb-6">
              Our <span className="gradient-text-secondary">Core Values</span>
            </h2>
            <p className="text-large text-white/80 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fas fa-balance-scale',
                title: 'Justice',
                description: 'Unwavering commitment to fairness and legal excellence'
              },
              {
                icon: 'fas fa-shield-alt',
                title: 'Integrity',
                description: 'Maintaining the highest ethical standards in all our practices'
              },
              {
                icon: 'fas fa-lightbulb',
                title: 'Innovation',
                description: 'Modern legal solutions for contemporary challenges'
              },
              {
                icon: 'fas fa-heart',
                title: 'Compassion',
                description: 'Understanding and empathetic approach to client needs'
              }
            ].map((value, index) => (
              <div key={index} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <i className={`${value.icon} text-2xl text-blue-400`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-fluid text-center animate-fadeInUp">
          <h2 className="heading-md mb-6">Ready to Work With Us?</h2>
          <p className="text-large mb-8 max-w-2xl mx-auto">
            Get in touch with our experienced legal team for a consultation 
            tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-blue-600 hover:bg-blue-50">
              Contact Us Today
            </Link>
            <Link href="/practice-areas" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
