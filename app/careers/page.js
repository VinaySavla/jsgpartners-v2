'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import { 
  AcademicCapIcon, 
  UsersIcon, 
  BriefcaseIcon, 
  TrophyIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

export default function Careers() {
  const benefits = [
    {
      icon: AcademicCapIcon,
      title: "Professional Development",
      description: "Continuous learning opportunities and skill enhancement programs"
    },
    {
      icon: UsersIcon,
      title: "Collaborative Environment",
      description: "Work with experienced professionals in a supportive team environment"
    },
    {
      icon: BriefcaseIcon,
      title: "Diverse Practice Areas",
      description: "Exposure to various legal domains and complex cases"
    },
    {
      icon: TrophyIcon,
      title: "Recognition & Growth",
      description: "Merit-based advancement and recognition for outstanding performance"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <main className="relative pt-24 pb-16">
        <div className="container-fluid max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fadeInUp">
            <h1 className="heading-xl gradient-text mb-8">Join Our Legal Excellence</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Build a rewarding career with Mumbai's most respected law firm. Join our dynamic team 
              of legal professionals and shape the future of law.
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>          {/* Why Join Us Section */}
          <div className="mb-24 animate-fadeInUp delay-200">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">Why Choose JSG Partners?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We believe in nurturing talent and providing opportunities for growth in a 
                collaborative and innovative professional environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="card group hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${300 + index * 100}ms`}}>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>          {/* Current Openings */}
          <div className="mb-24 animate-fadeInUp delay-300">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">Current Opportunities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are always looking for talented individuals to join our team and contribute to our legacy of legal excellence.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Job Opening 1 */}
              <div className="card hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-blue-500 animate-fadeInLeft delay-400">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Associate Lawyer</h3>
                    <div className="flex items-center space-x-4">                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        <BriefcaseIcon className="w-4 h-4 mr-2" />Full Time
                      </span>
                      <span className="text-gray-500">Mumbai</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">₹8-12 LPA</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We are seeking a motivated Associate Lawyer with 2-5 years of experience in 
                  civil litigation and corporate law. The ideal candidate should have strong 
                  research and writing skills with excellent client interaction abilities.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-full border border-blue-200">Civil Litigation</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-full border border-blue-200">Corporate Law</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-full border border-blue-200">Legal Research</span>
                </div>                <Link 
                  href="mailto:careers@jsgpartners.in?subject=Application for Associate Lawyer Position"
                  className="btn-primary inline-flex items-center"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />Apply Now
                </Link>
              </div>

              {/* Job Opening 2 */}
              <div className="card hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-green-500 animate-fadeInRight delay-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Legal Intern</h3>
                    <div className="flex items-center space-x-4">                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        <AcademicCapIcon className="w-4 h-4 mr-2" />Internship
                      </span>
                      <span className="text-gray-500">Mumbai</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">₹15-25K/month</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Internship opportunities for law students in their final year. Gain practical 
                  experience in various areas of law including civil litigation, corporate law, 
                  and legal documentation with hands-on mentorship.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-teal-50 text-green-700 text-sm rounded-full border border-green-200">Legal Drafting</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-teal-50 text-green-700 text-sm rounded-full border border-green-200">Court Procedures</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-teal-50 text-green-700 text-sm rounded-full border border-green-200">Client Interaction</span>
                </div>                <Link 
                  href="mailto:careers@jsgpartners.in?subject=Application for Legal Intern Position"
                  className="btn-primary inline-flex items-center"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />Apply Now
                </Link>
              </div>
            </div>
          </div>          {/* Application Process */}
          <div className="glass-effect rounded-3xl p-12 mb-24 animate-fadeInUp delay-600">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-gray-900 mb-6">Application Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Follow these simple steps to begin your journey with JSG Partners and become part of our legal excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Application</h3>
                <p className="text-gray-600 leading-relaxed">
                  Send your comprehensive resume and personalized cover letter to our careers email address.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Initial Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced team will thoroughly review your application and contact qualified candidates.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interview Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  Successful candidates will be invited for a comprehensive interview with our partners.
                </p>
              </div>
            </div>
          </div>          {/* Contact for Careers */}
          <div className="card max-w-5xl mx-auto text-center animate-fadeInUp delay-700">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
              <div className="relative">
                <h2 className="heading-lg gradient-text mb-6">Ready to Start Your Legal Journey?</h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto">
                  Don't see a position that matches your expertise? We're always interested in 
                  hearing from talented legal professionals. Send us your resume and we'll 
                  keep you in mind for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">                  <Link 
                    href="mailto:careers@jsgpartners.in"
                    className="btn-primary inline-flex items-center justify-center text-lg px-10 py-4"
                  >
                    <EnvelopeIcon className="w-6 h-6 mr-3" />Send Your Resume
                  </Link>
                  <Link 
                    href="/contact"
                    className="btn-secondary inline-flex items-center justify-center text-lg px-10 py-4"
                  >
                    <ChatBubbleLeftRightIcon className="w-6 h-6 mr-3" />Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll to Top Button */}      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
      >
        <ArrowUpIcon className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </div>
  );
}
