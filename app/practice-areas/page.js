'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function PracticeAreas() {
  const practiceAreas = [
    {
      icon: "fas fa-gavel",
      title: "Civil Litigation",
      description: "Comprehensive representation in civil disputes, property matters, and commercial litigation with strategic approach to conflict resolution.",
      details: [
        "Property Disputes",
        "Commercial Litigation", 
        "Contract Disputes",
        "Tort Claims",
        "Consumer Protection"
      ]
    },
    {
      icon: "fas fa-university",
      title: "Banking and Financial Law",
      description: "Expert guidance on banking regulations, financial compliance, and institutional legal matters with deep industry knowledge.",
      details: [
        "Banking Regulations",
        "Financial Compliance",
        "Loan Recovery",
        "SARFAESI Matters",
        "Debt Restructuring"
      ]
    },
    {
      icon: "fas fa-building",
      title: "Corporate Law", 
      description: "Strategic legal support for businesses including company formation, compliance, mergers, and corporate governance.",
      details: [
        "Company Formation",
        "Corporate Compliance",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Contract Management"
      ]
    },
    {
      icon: "fas fa-heart",
      title: "Family Law",
      description: "Compassionate representation in family matters including divorce, custody, and matrimonial disputes with sensitivity and care.",
      details: [
        "Divorce Proceedings",
        "Child Custody",
        "Matrimonial Disputes",
        "Domestic Violence",
        "Adoption Matters"
      ]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Criminal Law",
      description: "Strong defense representation in criminal cases with comprehensive understanding of criminal procedure and rights protection.",
      details: [
        "Criminal Defense",
        "Bail Applications",
        "White Collar Crimes",
        "Cybercrime Defense",
        "Criminal Appeals"
      ]
    },
    {
      icon: "fas fa-balance-scale",
      title: "General Legal Advisory",
      description: "Personalized legal consultation and advisory services for individuals and businesses across various legal domains.",
      details: [
        "Legal Consultation",
        "Document Drafting",
        "Legal Compliance",
        "Risk Assessment",
        "Preventive Legal Care"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-fluid">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6">
              Our Expertise
            </span>
            <h1 className="heading-xl text-slate-800 mb-6">
              Practice <span className="gradient-text">Areas</span>
            </h1>
            <p className="text-large text-slate-600 leading-relaxed">
              Comprehensive legal services across multiple domains with proven expertise, 
              strategic approach, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="card hover-lift group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${area.icon} text-white text-2xl`}></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{area.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">Key Services</h4>
                    <ul className="space-y-2">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Get Consultation
                    <i className="fas fa-arrow-right ml-2 text-xs"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="heading-lg mb-8">
                Why Choose Our <span className="gradient-text-secondary">Legal Services</span>?
              </h2>              <div className="space-y-8">
                {[{
                  icon: 'fas fa-certificate',
                  title: 'Proven Expertise',
                  description: 'Decades of combined experience across all practice areas with successful case outcomes'
                },
                {
                  icon: 'fas fa-users',
                  title: 'Client-Centric Approach',
                  description: 'Personalized legal strategies tailored to your specific needs and objectives'
                },
                {
                  icon: 'fas fa-clock',
                  title: '24/7 Legal Support',
                  description: 'Round-the-clock availability for urgent legal matters and emergency consultation'
                },
                {
                  icon: 'fas fa-handshake',
                  title: 'Transparent Communication',
                  description: 'Clear, honest communication throughout the legal process with regular updates'
                }].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className={`${feature.icon} text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/80 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right animate-fadeInRight">
              <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 glass-effect">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold gradient-text-secondary mb-2">500+</div>
                    <p className="text-white/80">Cases Successfully Handled</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text-secondary mb-2">95%</div>
                    <p className="text-white/80">Client Satisfaction Rate</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text-secondary mb-2">15+</div>
                    <p className="text-white/80">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-fluid text-center animate-fadeInUp">
          <h2 className="heading-md mb-6">Need Expert Legal Assistance?</h2>
          <p className="text-large mb-8 max-w-2xl mx-auto">
            Our experienced legal team is ready to provide you with strategic solutions 
            tailored to your specific legal needs across all practice areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-blue-600 hover:bg-blue-50">
              Schedule Free Consultation
            </Link>
            <Link href="/partners" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
              Meet Our Legal Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
